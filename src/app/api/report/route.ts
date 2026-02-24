import { NextResponse } from "next/server";
import { transporter } from "@/lib/smtp/nodemailer";
import { isDisposableEmail, validateEmail } from "@/lib/emailChecker";
import crypto from "crypto";

const recentMessages = new Map<string, number>();
const DUPLICATE_TIMEOUT = 30 * 60 * 1000;
const NODE_MAILER_RECEIVER = process.env.NODE_MAILER_RECEIVER || "";
const NODE_MAILER_USER = process.env.NODE_MAILER_USER || "";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, type, message, crash_log } = body;

    if (!type) throw new Error("Type of report is required.");
    if (!message) throw new Error("Message field is required.");

    if (email) {
      if (!validateEmail(email)) throw new Error("Invalid email format.");
      if (await isDisposableEmail(email))
        throw new Error("Disposable emails are not allowed");

      if ([NODE_MAILER_RECEIVER, NODE_MAILER_USER].includes(email)) {
        throw new Error(
          "Nice try! 😏 You can't send this message using our emails. Please use your own email address.",
        );
      }
    }

    const wordCount = message.trim().split(/\s+/).length;

    if (wordCount < 20) {
      throw new Error(
        "Your message must contain at least 20 words to be submitted.",
      );
    }

    if (wordCount > 500) {
      throw new Error(
        "Your message cannot exceed 500 words. Please shorten your message.",
      );
    }

    const hash = crypto
      .createHash("sha256")
      .update(email + message)
      .digest("hex");
    const now = Date.now();
    if (recentMessages.has(hash)) {
      const lastSent = recentMessages.get(hash)!;
      if (now - lastSent < DUPLICATE_TIMEOUT) {
        throw new Error(
          "You have already sent this message recently. Please wait before resending.",
        );
      }
    }

    recentMessages.set(hash, now);

    for (const [key, time] of recentMessages) {
      if (now - time > DUPLICATE_TIMEOUT) recentMessages.delete(key);
    }

    const info = await transporter.sendMail({
      from: `Webvium ${type} <${email ? email : "No Email Provided"}>`,
      to: NODE_MAILER_RECEIVER,
      subject: `Webvium ${type} <${email ? email : "No Email Provided"}>`,
      text:
        type +
        ":\n" +
        message +
        (crash_log ? `\n\nCrash Log:\n${crash_log}` : ""),
      html:
        type +
        ":<br>" +
        message +
        (crash_log
          ? `<br><br><strong>Crash Log:</strong><pre>${crash_log}</pre>`
          : ""),
    });

    if (!info.messageId) {
      throw new Error("Failed to send email.");
    }

    if (email)
      transporter.sendMail({
        from: `Do Not Reply <${NODE_MAILER_RECEIVER}>`,
        to: email,
        subject: "Your Message Has Been Sent",
        html: `
        <p>Hello,</p>
        <p>This is a confirmation that your message has been successfully transmitted to the intended recipient.</p>
        <p>Thank you for getting in touch. We appreciate you reaching out.</p>

        <!--
          Message Content:
          ${message}

          ${crash_log ? `Crash Log:\n${crash_log}` : ""}
        -->
      `,
      });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: error instanceof Error ? 400 : 500 },
    );
  }
}
