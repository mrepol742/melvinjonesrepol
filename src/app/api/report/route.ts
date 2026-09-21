import { NextResponse } from "next/server";
import { isDisposableEmail, validateEmail } from "@/lib/email-checker";
import crypto from "crypto";
import { createElement } from "react";
import { Resend } from "resend";
import ReportConfirmationEmail from "@/emails/ReportConfirmationEmail";
import ReportMessageEmail from "@/emails/ReportMessageEmail";
import { redis } from "@/lib/redis";

const DUPLICATE_TTL_SECONDS = 30 * 60;
const RESEND_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || process.env.NEWSLETTER_FROM_EMAIL || "";
const REPORT_RECEIVER_EMAIL =
  process.env.REPORT_RECEIVER_EMAIL || process.env.CONTACT_RECEIVER_EMAIL || "";

/**
 * Generates a cache key for the report form submission.
 *
 * @param email The email address of the report form submitter.
 * @param message The message of the report form submission.
 * @returns A cache key string.
 */
function cacheKey(email: string, message: string) {
  const hash = crypto
    .createHash("sha256")
    .update(`${email.toLowerCase()}:${message}`)
    .digest("hex");
  return `melvinjonesrepol:report:${hash}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      device,
      os_version,
      app_version,
      app_version_code,
      app_name,
      app_package_name,
      email,
      type,
      message,
      crash_log,
    } = body;

    if (!type) throw new Error("Type of report is required.");
    if (!message) throw new Error("Message field is required.");

    if (email) {
      if (!validateEmail(email)) throw new Error("Invalid email format.");
      if (await isDisposableEmail(email))
        throw new Error("Disposable emails are not allowed");

      if ([REPORT_RECEIVER_EMAIL, RESEND_FROM_EMAIL].includes(email)) {
        throw new Error(
          "Nice try! 😏 You can't send this message using our emails.",
        );
      }
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
      !REPORT_RECEIVER_EMAIL
    ) {
      throw new Error("Reports are temporarily unavailable.");
    }

    const _redis = redis();
    if (!_redis) {
      return NextResponse.json(
        { error: "Reports are temporarily unavailable." },
        { status: 503 },
      );
    }

    const key = cacheKey(email || "", message);
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

    const constructText = () => {
      let text = `Report Type: ${type}`;
      if (device) text += `\n\nDevice: ${device}`;
      if (os_version) text += `\nOS Version: ${os_version}`;
      if (app_version) text += `\nApp Version: ${app_version}`;
      if (app_version_code) text += `\nApp Version Code: ${app_version_code}`;
      if (app_name) text += `\nApp Name: ${app_name}`;
      if (app_package_name) text += `\nApp Package Name: ${app_package_name}`;
      text += `\nMessage:\n${message}`;
      if (crash_log) text += `\n\nCrash Log:${crash_log}`;
      return text;
    };

    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const reportDelivery = await resend.emails.send({
        from: RESEND_FROM_EMAIL,
        to: [REPORT_RECEIVER_EMAIL],
        subject: `Report: ${type}`,
        text: constructText(),
        replyTo: email || undefined,
        react: createElement(ReportMessageEmail, {
          type,
          report: constructText(),
        }),
      });

      if (reportDelivery.error) {
        throw new Error(reportDelivery.error.message);
      }

      if (email) {
        try {
          const confirmation = await resend.emails.send({
            from: RESEND_FROM_EMAIL,
            to: [email],
            subject: "Report confirmation",
            text: "Your report was received successfully and will be reviewed as soon as possible.",
            react: createElement(ReportConfirmationEmail),
          });
          if (confirmation.error) throw new Error(confirmation.error.message);
        } catch (error) {
          console.error("Report confirmation failed", error);
        }
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
