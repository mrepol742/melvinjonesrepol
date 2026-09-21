import type { ReactNode } from "react";

type EmailLayoutProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  ctaLabel?: string;
  ctaUrl?: string;
};

/**
 * Renders an email layout with an eyebrow, title, and optional CTA button.
 *
 * @param eyebrow The eyebrow text to display.
 * @param title The title text to display.
 * @param children The content to display within the layout.
 * @param ctaLabel The label for the CTA button, if any.
 * @param ctaUrl The URL for the CTA button, if any.
 * @returns The rendered email layout.
 */
export default function EmailLayout({
  eyebrow,
  title,
  children,
  ctaLabel,
  ctaUrl,
}: EmailLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="x-apple-disable-message-reformatting" />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#ffffff",
          color: "#292524",
          fontFamily: "Maven Pro, Arial, sans-serif",
        }}
      >
        <table
          role="presentation"
          width="100%"
          cellSpacing="0"
          cellPadding="0"
          border={0}
          style={{ backgroundColor: "#ffffff" }}
        >
          <tbody>
            <tr>
              <td align="center" style={{ padding: "40px 20px" }}>
                <table
                  role="presentation"
                  width="100%"
                  cellSpacing="0"
                  cellPadding="0"
                  border={0}
                  style={{
                    maxWidth: "600px",
                    border: "1px solid #fed7aa",
                    backgroundColor: "#fff7ed",
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          padding: "28px 32px",
                          borderBottom: "1px solid #fed7aa",
                          fontFamily: "Source Code Pro, Arial, sans-serif",
                          fontSize: "18px",
                          fontWeight: 700,
                          letterSpacing: "-0.4px",
                          color: "#292524",
                        }}
                      >
                        Melvin Jones Repol
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "52px 32px 44px" }}>
                        <p
                          style={{
                            margin: "0 0 20px",
                            color: "#ea580c",
                            fontSize: "13px",
                            fontWeight: 700,
                            letterSpacing: "1.6px",
                            textTransform: "uppercase",
                          }}
                        >
                          {eyebrow}
                        </p>
                        <h1
                          style={{
                            margin: 0,
                            color: "#292524",
                            fontFamily: "Source Code Pro, Arial, sans-serif",
                            fontSize: "34px",
                            fontWeight: 600,
                            letterSpacing: "-1px",
                            lineHeight: 1.2,
                          }}
                        >
                          {title}
                        </h1>
                        <div
                          style={{
                            marginTop: "24px",
                            color: "#57534e",
                            fontSize: "16px",
                            lineHeight: 1.7,
                          }}
                        >
                          {children}
                        </div>
                        {ctaLabel && ctaUrl ? (
                          <table
                            role="presentation"
                            cellSpacing="0"
                            cellPadding="0"
                            border={0}
                            style={{ marginTop: "32px" }}
                          >
                            <tbody>
                              <tr>
                                <td style={{ backgroundColor: "#ea580c" }}>
                                  <a
                                    href={ctaUrl}
                                    style={{
                                      display: "inline-block",
                                      padding: "13px 20px",
                                      color: "#ffffff",
                                      fontFamily:
                                        "Maven Pro, Arial, sans-serif",
                                      fontSize: "14px",
                                      fontWeight: 700,
                                      textDecoration: "none",
                                    }}
                                  >
                                    {ctaLabel}
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        ) : null}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: "22px 32px",
                          borderTop: "1px solid #fed7aa",
                          color: "#57534e",
                          fontSize: "12px",
                          lineHeight: 1.6,
                        }}
                      >
                        Melvin Jones Repol · Practical software, technical
                        insights, and project updates.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}
