import EmailLayout from "@/emails/components/EmailLayout";

type ContactMessageEmailProps = {
  name: string;
  email: string;
  messageHtml: string;
};

export default function ContactMessageEmail({
  name,
  email,
  messageHtml,
}: ContactMessageEmailProps) {
  return (
    <EmailLayout eyebrow="New contact message" title="Someone reached out.">
      <p style={{ margin: 0 }}>
        <strong>Name:</strong> {name}
      </p>
      <p style={{ margin: "8px 0 0" }}>
        <strong>Email:</strong> {email}
      </p>
      <p style={{ margin: "24px 0 8px", fontWeight: 700 }}>Message</p>
      <div
        style={{
          margin: 0,
          color: "#57534e",
          fontFamily: "Maven Pro, Arial, sans-serif",
          fontSize: "16px",
          lineHeight: 1.7,
        }}
        dangerouslySetInnerHTML={{ __html: messageHtml }}
      />
    </EmailLayout>
  );
}
