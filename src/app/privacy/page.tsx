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
    images: ["https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png"],
    creator: "@mrepol742",
  },
};

export default function Privacy() {
  return (
    <main className="p-3 md:p-8">
      <section>
        <h1 className="text-center text-2xl font-semibold">Privacy Policy</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="col-span-full">
            <p>
              This Privacy Policy outlines how melvinjonesrepol.com collects,
              uses, and protects your information when you visit or interact
              with this website.
            </p>

            <h3 className="mt-4 font-semibold">1. Information Collected</h3>
            <p>
              The site collects personal information via the contact form,
              including:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your message</li>
            </ul>
            <p>
              This information is submitted voluntarily and stored securely in a
              Supabase database.
            </p>

            <h3 className="mt-4 font-semibold">2. Analytics Data</h3>
            <p>
              Google Analytics is used to gather anonymized data such as browser
              type, pages visited, time spent on pages, and referral
              information. This helps improve the website’s performance and user
              experience.
            </p>

            <h3 className="mt-4 font-semibold">3. Error Tracking</h3>
            <p>
              The site uses Sentry to monitor for errors and performance issues.
              This may include IP addresses and browser info, strictly for
              debugging purposes.
            </p>

            <h3 className="mt-4 font-semibold">4. Data Usage</h3>
            <p>
              Your personal data is only used to respond to inquiries submitted
              via the contact form. It is never shared, sold, or used for
              marketing purposes.
            </p>

            <h3 className="mt-4 font-semibold">5. Data Protection</h3>
            <p>
              Reasonable measures are taken to secure your information,
              including encryption and access controls via Supabase.
            </p>

            <h3 className="mt-4 font-semibold">6. Your Rights</h3>
            <p>
              You may request access to, correction of, or deletion of your
              personal data at any time by contacting me through the website.
            </p>

            <h3 className="mt-4 font-semibold">7. Changes to This Policy</h3>
            <p>
              This policy may be updated from time to time. Changes will be
              posted on this page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
