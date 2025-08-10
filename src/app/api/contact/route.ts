import { NextResponse } from "next/server";
import { transporter } from "@/lib/smtp/nodemailer";
import { recaptcha } from "@/lib/recaptcha";

const disposableEmailDomains = [
  "mailinator.com",
  "10minutemail.com",
  "guerrillamail.com",
  "temp-mail.org",
  "dispostable.com",
  "throwawaymail.com",
  "getnada.com",
  "moakt.com",
  "maildrop.cc",
  "mytemp.email",
  "emailondeck.com",
  "mintemail.com",
  "spamgourmet.com",
  "fakeinbox.com",
  "yopmail.com",
  "openmailbox.org",
  "jetable.org",
  "mailnesia.com",
  "spam4.me",
  "anonymousemail.me",
  "sharklasers.com",
  "grr.la",
  "guerrillamailblock.com",
  "guerrillamail.net",
  "guerrillamail.de",
  "guerrillamail.biz",
  "guerrillamail.org",
  "guerrillamail.info",
  "guerrillamailblock.com",
  "trashmail.com",
  "trashmail.de",
  "mailcatch.com",
  "33mail.com",
  "mail-temporaire.fr",
  "tempinbox.com",
  "mail7.io",
  "tempmail.io",
  "tempmail.dev",
  "tempr.email",
  "easytrashmail.com",
  "burnermail.io",
  "dropmail.me",
];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message, token } = body;

    // recaptcha verification
    if (!(await recaptcha(token)))
      return NextResponse.json(
        {
          error: "reCAPTCHA verification failed. Please try again.",
        },
        { status: 400 }
      );

    if (!name || !email || !message) {
      throw new Error("All fields are required.");
    }

    if (!/[^@]+@[^@]+\.[^@]+/.test(email)) {
      throw new Error("Invalid email format.");
    }

    if (disposableEmailDomains.some((domain) => email.includes(domain))) {
      throw new Error("Disposable email addresses are not allowed.");
    }

    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.NODE_MAILER_RECEIVER || "",
      subject: `${name} <${email}>`,
      text: message,
      html: message,
    });

    if (!info.messageId) {
      throw new Error("Failed to send email.");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: error instanceof Error ? 400 : 500 }
    );
  }
}
