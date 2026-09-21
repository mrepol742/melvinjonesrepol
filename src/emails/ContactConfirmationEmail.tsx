import EmailLayout from "@/emails/components/EmailLayout";

export default function ContactConfirmationEmail({ name }: { name: string }) {
  return (
    <EmailLayout
      eyebrow="Contact confirmation"
      title="Your message is on its way."
      ctaLabel="Visit melvinjonesrepol.com"
      ctaUrl="https://www.melvinjonesrepol.com"
    >
      <p style={{ margin: 0 }}>Hi {name},</p>
      <p style={{ margin: "16px 0 0" }}>
        Thanks for reaching out. Your message was received successfully and I
        will review it as soon as possible.
      </p>
    </EmailLayout>
  );
}
