import { NextResponse } from "next/server";
import { transporter } from "@/lib/smtp/nodemailer";

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, message } = body;

  const info = await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: process.env.NODE_MAILER_RECEIVER || "",
    subject: `${name}" <${email}>`,
    text: message,
    html: message,
  });

  if (!info.messageId) {
    return NextResponse.json(
      { error: "Failed to send Email." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
