import { NextResponse } from "next/server";
import { transporter } from "@/lib/smtp/nodemailer";
import { recaptcha } from "@/lib/recaptcha";
import { isDisposableEmail, validateEmail } from "@/lib/emailChecker";
import crypto from "crypto";

const recentMessages = new Map<string, number>();
const DUPLICATE_TIMEOUT = 30 * 60 * 1000;
const NODE_MAILER_RECEIVER = process.env.NODE_MAILER_RECEIVER || "";
const NODE_MAILER_USER = process.env.NODE_MAILER_USER || "";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message, username, token } = body;

    // recaptcha verification
    if (!(await recaptcha(token, "contact_me")))
      throw new Error("reCAPTCHA verification failed. Please try again.");

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

    if ([NODE_MAILER_RECEIVER, NODE_MAILER_USER].includes(email)) {
      throw new Error(
        "Nice try! 😏 You can't send this message using our emails. Please use your own email address.",
      );
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
      from: `"${name}" <${email}>`,
      to: NODE_MAILER_RECEIVER,
      subject: `${name} <${email}>`,
      text: message,
      html: message,
    });

    if (!info.messageId) {
      throw new Error("Failed to send email.");
    }

    transporter.sendMail({
      from: `Do Not Reply <${NODE_MAILER_RECEIVER}>`,
      to: email,
      subject: "Your Message Has Been Sent",
      html: `
        <p>Hi <b>${name}</b>,</p>
        <p>This is a confirmation that your message has been successfully transmitted to the intended recipient.</p>
        <p>Thank you for getting in touch. We appreciate you reaching out.</p>

        <!--
          Message Content:
          ${message}
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
