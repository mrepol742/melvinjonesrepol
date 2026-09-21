import { NextResponse } from "next/server";
import { recaptcha } from "@/lib/recaptcha";
import { isDisposableEmail, validateEmail } from "@/lib/email-checker";
import crypto from "crypto";
import { createElement } from "react";
import { Resend } from "resend";
import ContactConfirmationEmail from "@/emails/ContactConfirmationEmail";
import ContactMessageEmail from "@/emails/ContactMessageEmail";
import { redis } from "@/lib/redis";
import { messageHtmlToText, sanitizeMessageHtml } from "@/lib/message-html";

const DUPLICATE_TTL_SECONDS = 30 * 60;
const RESEND_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || process.env.NEWSLETTER_FROM_EMAIL || "";
const CONTACT_RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || "";

/**
 * Generates a cache key for the contact form submission.
 *
 * @param email The email address of the contact form submitter.
 * @param message The message of the contact form submission.
 * @returns A cache key string.
 */
function cacheKey(email: string, message: string) {
  const hash = crypto
    .createHash("sha256")
    .update(`${email.toLowerCase()}:${message}`)
    .digest("hex");
  return `melvinjonesrepol:contact:${hash}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message, username, token } = body;

    if (!name || !email || !message) {
      throw new Error("All fields are required.");
    }

    if (username) {
      throw new Error(
        "Bots has no place here. If your not a bot type those fields manually.",
      );
    }

    if (!validateEmail(email)) {
      throw new Error("Invalid email format.");
    }

    if (await isDisposableEmail(email))
      throw new Error("Disposable emails are not allowed");

    if ([CONTACT_RECEIVER_EMAIL, RESEND_FROM_EMAIL].includes(email)) {
      throw new Error(
        "Nice try! 😏 You can't send this message using our emails.",
      );
    }

    const wordCount = message.trim().length;

    if (wordCount < 500) {
      throw new Error(
        "Your message must contain at least 500 characters to be submitted.",
      );
    }

    if (wordCount > 1000) {
      throw new Error("Your message cannot exceed 1000 characters.");
    }

    if (
      !process.env.RESEND_API_KEY ||
      !RESEND_FROM_EMAIL ||
      !CONTACT_RECEIVER_EMAIL
    ) {
      throw new Error("Contact requests are temporarily unavailable.");
    }

    // recaptcha verification
    if (!(await recaptcha(token, "contact_me")))
      throw new Error("reCAPTCHA verification failed. Please try again.");

    const _redis = redis();
    if (!_redis) {
      return NextResponse.json(
        { error: "Contact requests are temporarily unavailable." },
        { status: 503 },
      );
    }

    const key = cacheKey(email, message);
    const reserved = await _redis.set(key, "pending", {
      nx: true,
      ex: DUPLICATE_TTL_SECONDS,
    });
    if (reserved !== "OK") {
      return NextResponse.json(
        { error: "You have already sent this message recently." },
        { status: 429 },
      );
    }

    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const messageHtml = sanitizeMessageHtml(message);
      const messageDelivery = await resend.emails.send({
        from: RESEND_FROM_EMAIL,
        to: [CONTACT_RECEIVER_EMAIL],
        subject: `${name} <${email}>`,
        text: messageHtmlToText(message),
        replyTo: email,
        react: createElement(ContactMessageEmail, {
          name,
          email,
          messageHtml,
        }),
      });

      if (messageDelivery.error) {
        throw new Error(messageDelivery.error.message);
      }

      try {
        const confirmation = await resend.emails.send({
          from: RESEND_FROM_EMAIL,
          to: [email],
          subject: "Contact confirmation",
          text: `Hi ${name}, your message was received successfully. I will review it as soon as possible.`,
          react: createElement(ContactConfirmationEmail, { name }),
        });
        if (confirmation.error) throw new Error(confirmation.error.message);
      } catch (error) {
        console.error("Contact confirmation failed", error);
      }

      return NextResponse.json({ success: true });
    } catch (error) {
      await _redis.del(key);
      throw error;
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: error instanceof Error ? 400 : 500 },
    );
  }
}
