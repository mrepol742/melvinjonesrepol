import { createHash } from "crypto";
import { Resend } from "resend";
import { createElement } from "react";
import NewsletterConfirmationEmail from "@/emails/NewsletterConfirmationEmail";
import { isDisposableEmail, validateEmail } from "@/lib/email-checker";
import { redis } from "@/lib/redis";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NEWSLETTER_DEDUPE_TTL_SECONDS = Number(
  process.env.NEWSLETTER_DEDUPE_TTL_SECONDS ?? 31_536_000,
);

/**
 * Generates a cache key for the newsletter confirmation email based on the email address.
 *
 * @param email The email address to generate the cache key for.
 * @returns The generated cache key.
 */
function cacheKey(email: string) {
  return `melvinjonesrepol:newsletter:${createHash("sha256").update(email).digest("hex")}`;
}

export async function POST(request: Request) {
  let email = "";
  try {
    const body = await request.json();
    email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  } catch {
    return Response.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email) || email.length > 254) {
    return Response.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (
    !process.env.RESEND_API_KEY ||
    !process.env.NEWSLETTER_FROM_EMAIL ||
    !process.env.RESEND_MELVIN_JONES_REPOL_SEGMENT_ID
  ) {
    return Response.json(
      {
        error:
          "Newsletter subscriptions are temporarily unavailable. Please try again later.",
      },
      { status: 500 },
    );
  }

  if (!validateEmail(email)) {
    return Response.json({ error: "Invalid email format." }, { status: 400 });
  }

  if (await isDisposableEmail(email)) {
    return Response.json(
      { error: "Disposable email addresses are not allowed." },
      { status: 400 },
    );
  }

  const _redis = redis();
  if (!_redis) {
    console.error("Newsletter is missing Resend or Upstash configuration.");
    return Response.json(
      {
        error:
          "Newsletter subscriptions are temporarily unavailable. Please try again later.",
      },
      { status: 503 },
    );
  }

  const key = cacheKey(email);
  const reserved = await _redis.set(key, "pending", { nx: true, ex: 300 });
  if (reserved !== "OK") {
    return Response.json({ status: "already-subscribed" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    await resend.contacts.create({
      email,
    });

    const segment = await resend.contacts.segments.add({
      email,
      segmentId: process.env.RESEND_MELVIN_JONES_REPOL_SEGMENT_ID!,
    });

    if (segment.error && segment.error.statusCode !== 409) {
      throw new Error(segment.error.message);
    }

    const confirmation = await resend.emails.send(
      {
        from: process.env.NEWSLETTER_FROM_EMAIL,
        to: [email],
        subject: "You're subscribed to the Melvin Jones Repol newsletter",
        text: "You're subscribed to the Melvin Jones Repol newsletter. Thanks for joining. You'll receive occasional updates on projects, technical notes, and useful ideas.",
        react: createElement(NewsletterConfirmationEmail),
      },
      {
        idempotencyKey: `melvinjonesrepol-newsletter-${createHash("sha256").update(email).digest("hex")}`,
      },
    );

    const alreadyConfirmed =
      confirmation.error?.name === "invalid_idempotent_request";
    if (confirmation.error && !alreadyConfirmed) {
      throw new Error(confirmation.error.message);
    }
    await _redis.set(key, "sent", {
      ex: NEWSLETTER_DEDUPE_TTL_SECONDS,
    });

    return Response.json(
      { status: alreadyConfirmed ? "already-subscribed" : "subscribed" },
      { status: alreadyConfirmed ? 200 : 201 },
    );
  } catch (error) {
    await _redis.del(key);
    console.error("Newsletter signup failed", error);

    return Response.json(
      { error: "We could not add you right now. Please try again." },
      { status: 502 },
    );
  }
}
