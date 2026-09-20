import EmailLayout from "@/emails/components/EmailLayout";

type ReportMessageEmailProps = {
  type: string;
  report: string;
};

export default function ReportMessageEmail({
  type,
  report,
}: ReportMessageEmailProps) {
  return (
    <EmailLayout eyebrow="New report" title="A report needs review.">
      <p style={{ margin: 0 }}>
        <strong>Report type:</strong> {type}
      </p>
      <pre
        style={{
          margin: "24px 0 0",
          whiteSpace: "pre-wrap",
          color: "#57534e",
          fontFamily: "Maven Pro, Arial, sans-serif",
          fontSize: "16px",
          lineHeight: 1.7,
        }}
      >
        {report}
      </pre>
    </EmailLayout>
  );
}
