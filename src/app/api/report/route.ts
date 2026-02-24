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

    const constructHtml = () => {
      let html = `<strong>Report Type:</strong> ${type}<br>`;
      if (device) html += `<strong>Device:</strong> ${device}<br>`;
      if (os_version) html += `<strong>OS Version:</strong> ${os_version}<br>`;
      if (app_version)
        html += `<strong>App Version:</strong> ${app_version}<br>`;
      if (app_version_code)
        html += `<strong>App Version Code:</strong> ${app_version_code}<br>`;
      if (app_name) html += `<strong>App Name:</strong> ${app_name}<br>`;
      if (app_package_name)
        html += `<strong>App Package Name:</strong> ${app_package_name}<br>`;
      html += `<strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}`;
      if (crash_log)
        html += `<br><br><strong>Crash Log:</strong><pre>${crash_log}</pre>`;
      return html;
    };

    const info = await transporter.sendMail({
      from: `Webvium ${type} <${email ? email : "No Email Provided"}>`,
      to: NODE_MAILER_RECEIVER,
      subject: `Webvium ${type} <${email ? email : "No Email Provided"}>`,
      text: constructText(),
      html: constructHtml(),
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
