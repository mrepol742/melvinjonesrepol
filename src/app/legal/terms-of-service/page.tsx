import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Melvin Jones Repol",
  description: "Terms of Service for melvinjonesrepol.com and related projects",
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/terms",
  },
  openGraph: {
    title: "Terms of Service - Melvin Jones Repol",
    description:
      "Terms of Service for melvinjonesrepol.com and related projects",
    url: "https://www.melvinjonesrepol.com/terms",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
        width: 1200,
        height: 630,
        alt: "Terms of Service Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Melvin Jones Repol",
    description:
      "Terms of Service for melvinjonesrepol.com and related projects",
    images: [
      "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
    ],
    creator: "@mrepol742",
  },
};

export default function Terms() {
  return (
    <main className="my-18 p-4 md:p-10 max-w-3xl mx-auto">
      <section className="space-y-6">
        <h1 className="text-3xl font-bold">Terms of Service</h1>

        <p>
          Welcome to melvinjonesrepol.com and related services (collectively,
          the "Services"). By accessing or using the Services, you agree to be
          bound by these Terms of Service. If you do not agree with any part of
          these terms, do not use the Services.
        </p>

        <h2 className="text-2xl font-semibold">1. Scope of Services</h2>
        <p>The Services include, but are not limited to:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Portfolio website (melvinjonesrepol.com)</li>
          <li>Webvium Browser (Android)</li>
          <li>Webvium Launcher (Android)</li>
          <li>Floating Console (Chrome Extension)</li>
          <li>Webvium VPN (Android/Discontinued/Legacy)</li>
          <li>Other projects, open-source or paid, operated independently</li>
        </ul>

        <h2 className="text-2xl font-semibold">2. User Responsibilities</h2>
        <p>When using the Services, you agree to:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Use the Services only for lawful purposes.</li>
          <li>Not interfere with the operation of any Service.</li>
          <li>
            Be responsible for permissions granted to websites in Webvium
            Browser (camera, GPS, microphone, storage, etc.).
          </li>
          <li>
            Review and comply with third-party website terms and privacy
            policies when accessing them via Webvium Browser.
          </li>
          <li>
            Understand that discontinued or third-party projects are used at
            your own risk.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">3. Intellectual Property</h2>
        <p>
          All content, branding, and source code of the Services are owned by
          Melvin Jones Repol unless otherwise noted. The website source code is
          MIT licensed, but content, designs, and other materials may be subject
          to different licenses.
        </p>

        <h2 className="text-2xl font-semibold">4. User-Generated Content</h2>
        <p>By submitting comments, feedback, or other content:</p>
        <ul className="list-disc list-inside ml-4">
          <li>
            You grant Melvin Jones Repol a worldwide, non-exclusive,
            royalty-free license to use, reproduce, and distribute such content.
          </li>
          <li>
            You represent that your content does not infringe third-party rights
            or applicable laws.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">
          5. Third-Party Services and Features
        </h2>
        <p>Some Services integrate or interact with third-party services:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Disqus for comments</li>
          <li>LiveChat.ai for chat support</li>
          <li>Google AdSense or other advertising services</li>
          <li>GitHub for automatic update checks</li>
          <li>
            Google News RSS feeds for displaying news on Webvium Browser’s
            homepage
          </li>
        </ul>
        <p>
          Each third-party service operates under its own terms and privacy
          policies. Melvin Jones Repol is not responsible for the practices or
          content of these third parties.
        </p>

        <h2 className="text-2xl font-semibold">
          6. Discontinued or Independent Projects
        </h2>
        <p>
          Webvium VPN is no longer in service. Users who download it do so at
          their own risk.
        </p>
        <p>
          Other projects (open-source or paid) are operated independently. Users
          should review their respective terms, licenses, and privacy practices.
          Melvin Jones Repol is not responsible for these projects.
        </p>

        <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
        <p>
          Melvin Jones Repol provides the Services "as is" and makes no
          warranties regarding accuracy, reliability, or completeness. In no
          event shall Melvin Jones Repol be liable for any direct, indirect,
          incidental, or consequential damages arising from use of the Services.
        </p>

        <h2 className="text-2xl font-semibold">8. Changes to Terms</h2>
        <p>
          These Terms of Service may be updated from time to time without
          notice. Continued use of the Services after changes constitutes
          acceptance of the new terms.
        </p>

        <h2 className="text-2xl font-semibold">9. Contact</h2>
        <p>
          For any questions regarding these Terms, please contact us via the
          <a
            href="https://www.melvinjonesrepol.com/contact-me"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            contact form
          </a>
          .
        </p>
      </section>
    </main>
  );
}
