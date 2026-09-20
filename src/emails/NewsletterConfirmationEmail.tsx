import EmailLayout from "@/emails/components/EmailLayout";

export default function NewsletterConfirmationEmail() {
  return (
    <EmailLayout
      eyebrow="Newsletter"
      title="You&apos;re subscribed."
      ctaLabel="Visit melvinjonesrepol.com"
      ctaUrl="https://www.melvinjonesrepol.com"
    >
      <p style={{ margin: 0 }}>
        Thanks for joining the Melvin Jones Repol newsletter. You&apos;ll receive
        occasional updates on new projects, technical notes, and useful ideas.
      </p>
      <p style={{ margin: "16px 0 0" }}>
        No spam, just the work worth sharing.
      </p>
    </EmailLayout>
  );
}
