import EmailLayout from "@/emails/components/EmailLayout";

export default function ReportConfirmationEmail() {
  return (
    <EmailLayout
      eyebrow="Report confirmation"
      title="Your report was received."
      ctaLabel="Visit melvinjonesrepol.com"
      ctaUrl="https://www.melvinjonesrepol.com"
    >
      <p style={{ margin: 0 }}>
        Thanks for taking the time to send a report. It has been received and
        will be reviewed as soon as possible.
      </p>
    </EmailLayout>
  );
}
