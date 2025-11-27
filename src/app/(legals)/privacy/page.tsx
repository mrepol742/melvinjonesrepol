import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Melvin Jones Repol",
  description:
    "Read the privacy policy for melvinjonesrepol.com to learn how your data is collected, used, and protected.",
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy - Melvin Jones Repol",
    description:
      "Read the privacy policy for melvinjonesrepol.com to learn how your data is collected, used, and protected.",
    url: "https://www.melvinjonesrepol.com/privacy",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Melvin Jones Repol",
    description:
      "Read the privacy policy for melvinjonesrepol.com to learn how your data is collected, used, and protected.",
    images: [
      "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
    ],
    creator: "@mrepol742",
  },
};

export default function Privacy() {
  return (
    <main className="p-3 md:p-8">
      <section>
        <h1 className="text-center text-2xl font-semibold">Privacy Policy</h1>
        <div className="mt-4 w-full md:max-w-3xl mx-auto">
          <div className="col-span-full">
            <p>
              This Privacy Policy outlines how melvinjonesrepol.com collects,
              uses, and protects your information when you visit or interact
              with this website, including the use of Disqus comments,
              LiveChat.ai floating chat, and the Contact Me page.
            </p>

            <h3 className="mt-4 font-semibold">1. Information Collected</h3>
            <p>The site collects personal information in the following ways:</p>
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>Contact Me Page:</strong> Your name, email address, and
                message when you submit the contact form. This information is
                stored securely in a Supabase database.
              </li>
              <li>
                <strong>Disqus Comments:</strong> When you comment, Disqus may
                collect your name, email, IP address, and comment content.
                Disqus handles this data according to their own privacy policy.
              </li>
              <li>
                <strong>LiveChat.ai Floating Chat:</strong> When you use the
                chat, LiveChat.ai may collect chat transcripts, your name, and
                email if provided. This data is managed by LiveChat.ai under
                their privacy policy.
              </li>
            </ul>

            <h3 className="mt-4 font-semibold">2. Data Usage</h3>
            <p>
              <strong>Contact Me Page:</strong> Your personal data is only used
              to respond to inquiries submitted via the contact form.
              <br />
              <strong>Disqus Comments:</strong> Data is used to display and
              moderate comments. Please review Disqus’s privacy policy for
              details.
              <br />
              <strong>LiveChat.ai:</strong> Data is used to provide real-time
              chat support. Please review LiveChat.ai’s privacy policy for
              details.
              <strong>Google AdSense:</strong> Data is used to deliver
              personalized or non-personalized advertisements and measure ad
              performance. Please review Google’s privacy policy for details.
            </p>

            <h3 className="mt-4 font-semibold">3. Data Protection</h3>
            <p>
              Third-party services (Disqus, LiveChat.ai, Google Adsense) are responsible for
              securing data they collect.
            </p>

            <h3 className="mt-4 font-semibold">4. Third-Party Services</h3>
            <p>
              This website integrates with third-party services (Disqus, LiveChat.ai and Google Adsense). Your interactions with these services are governed
              by their respective privacy policies:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                <a
                  href="https://disqus.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600"
                >
                  Disqus Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://disqus.com/data-sharing-settings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600"
                >
                  Disqus Data Sharing
                </a>
              </li>
              <li>
                <a
                  href="https://livechat.ai/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600"
                >
                  LiveChat.ai Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600"
                >
                  Google Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600"
                >
                  Google Ad Personalization Settings
                </a>
              </li>
            </ul>

            <h3 className="mt-4 font-semibold">4. Your Rights</h3>
            <p>
              You may request access to, correction of, or deletion of your
              personal data collected via the Contact Me page at any time by
              contacting me through the website. For data collected by Disqus,
              LiveChat.ai or Google Adsense, please contact those providers directly.
            </p>

            <h3 className="mt-4 font-semibold">5. Changes to This Policy</h3>
            <p>
              This policy may be updated from time to time. Changes will be
              posted on this page.
            </p>
          </div>
        </div>
      </section >
    </main >
  );
}
