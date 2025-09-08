import { NextResponse } from "next/server";
import { transporter } from "@/lib/smtp/nodemailer";
import { recaptcha } from "@/lib/recaptcha";
import { isDisposableEmail, validateEmail } from "@/lib/emailChecker";

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
        { status: 400 },
      );

    if (!name || !email || !message) {
      throw new Error("All fields are required.");
    }

    if (!validateEmail(email)) {
      throw new Error("Invalid email format.");
    }

    if (await isDisposableEmail(email))
      throw new Error("Disposable emails are not allowed");

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
      { status: error instanceof Error ? 400 : 500 },
    );
  }
}
