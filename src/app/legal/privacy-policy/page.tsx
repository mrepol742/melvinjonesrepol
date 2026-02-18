import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Melvin Jones Repol",
  description:
    "This Privacy Policy describes how Melvin Jones Repol handles information in connection with our portfolio website, Webvium Browser, Chrome extensions, and other projects.",
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/legal/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy - Melvin Jones Repol",
    description:
      "This Privacy Policy describes how Melvin Jones Repol handles information in connection with our portfolio website, Webvium Browser, Chrome extensions, and other projects.",

    url: "https://www.melvinjonesrepol.com/legal/privacy-policy",
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
      "This Privacy Policy describes how Melvin Jones Repol handles information in connection with our portfolio website, Webvium Browser, Chrome extensions, and other projects.",

    images: [
      "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
    ],
    creator: "@mrepol742",
  },
};

export default function Privacy() {
  return (
    <main className="my-18 p-4 md:p-10 max-w-3xl mx-auto">
      <section className="space-y-6">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-sm text-gray-500">Last Updated: February 18, 2026</p>

        <p>
          This Privacy Policy describes how Melvin Jones Repol ("we", "us", or
          "our") handles information in connection with:
        </p>

        <ul className="list-disc list-inside ml-4">
          <li>Portfolio Website (melvinjonesrepol.com)</li>
          <li>Webvium Browser (Android)</li>
          <li>Floating Console (Chrome Extension)</li>
          <li>Webvium Launcher (Android)</li>
          <li>Webvium VPN (Android/Discontinued/Legacy)</li>
          <li>
            Any related applications, tools, or services (collectively, the
            “Services”)
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">1. Who We Are</h2>
        <p>The Services are developed and operated by Melvin Jones Repol.</p>
        <p>
          Website: https://www.melvinjonesrepol.com <br />
          Email: mrepol742@gmail.com
        </p>

        <h2 className="text-2xl font-semibold">
          2. Portfolio Website (melvinjonesrepol.com)
        </h2>

        <h3 className="text-xl font-semibold">Information Collected</h3>
        <ul className="list-disc list-inside ml-4">
          <li>
            <strong>Contact Form:</strong> Name, email address, and message when
            voluntarily submitted.
          </li>
          <li>
            <strong>Disqus Comments:</strong> Disqus may collect name, email, IP
            address, and comment content according to their privacy policy.
          </li>
          <li>
            <strong>LiveChat.ai:</strong> Chat transcripts and contact
            information if provided.
          </li>
          <li>
            <strong>Google AdSense:</strong> May use cookies and similar
            technologies to deliver advertisements.
          </li>
          <li>
            <strong>Google reCAPTCHA Enterprise:</strong> Collects device and
            interaction data to prevent spam and abuse.
          </li>
        </ul>

        <h3 className="text-xl font-semibold">How Data Is Used</h3>
        <p>Data collected through the website is used solely to:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Respond to inquiries</li>
          <li>Display and moderate comments</li>
          <li>Provide chat support</li>
          <li>Deliver advertisements</li>
          <li>Prevent spam and abuse</li>
        </ul>

        <h2 className="text-2xl font-semibold">SEO / Google Search Console</h2>
        <p>
          The melvinjonesrepol.com portfolio website uses{" "}
          <a
            href="https://search.google.com/search-console/about"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            Google Search Console
          </a>{" "}
          to monitor and improve search engine performance.
        </p>

        <p>
          This tool provides aggregate traffic and indexing information for SEO
          purposes only. No personal data, browsing history, or user behavior is
          tracked or collected for analytics purposes.
        </p>

        <p>Third-party services operate under their own privacy policies.</p>

        <h2 className="text-2xl font-semibold">3. Webvium Browser</h2>

        <p>Webvium Browser is designed with privacy in mind.</p>

        <ul className="list-disc list-inside ml-4">
          <li>Does not collect personal data</li>
          <li>Does not transmit browsing history</li>
          <li>Does not use analytics or telemetry</li>
          <li>Does not track users</li>
        </ul>

        <h3 className="text-xl font-semibold">Local Storage</h3>
        <p>The browser may store the following locally on your device:</p>

        <ul className="list-disc list-inside ml-4">
          <li>Bookmarks</li>
          <li>Browsing history</li>
          <li>User preferences and settings</li>
        </ul>

        <p>
          This data remains entirely on your device and is never transmitted to
          our servers.
        </p>

        <h3 className="text-xl font-semibold">Access to Device Features</h3>
        <p>
          Webvium Browser allows websites to request access to certain device
          features, including but not limited to: camera, microphone, GPS
          location, storage, and notifications.
        </p>

        <p>
          When you grant a website permission to use these features, the website
          may collect or process data from your device according to its own
          terms of service and privacy policy. We do not control or monitor how
          third-party websites use the data they access.
        </p>

        <p>
          Users are responsible for reviewing the permissions requested by each
          website and deciding whether to grant access. You may revoke these
          permissions at any time through the browser’s interface or your device
          settings.
        </p>

        <p>
          Webvium Browser does not automatically activate the camera,
          microphone, or GPS; access to these features occurs only when
          explicitly requested by a website and approved by the user.
        </p>

        <h3 className="text-xl font-semibold">News Content</h3>
        <p>
          Webvium Browser may display publicly available RSS feeds from Google
          News. The browser does not use authenticated Google APIs, does not
          access GPS, and does not store location data.
        </p>
        <p>The browser is not affiliated with Google LLC.</p>

        <h3 className="text-xl font-semibold">Third-Party Websites</h3>
        <p>
          Webvium Browser enables users to access third-party websites across
          the internet. These websites are not owned, operated, or controlled by
          us.
        </p>

        <p>
          Each website you visit may have its own Terms of Service and Privacy
          Policy governing how it collects, uses, and shares information. We are
          not responsible for the content, security practices, or data handling
          of any third-party websites.
        </p>

        <p>
          We encourage users to review the terms and privacy policies of any
          website they access through Webvium Browser.
        </p>

        <h3 className="text-xl font-semibold">Automatic Update Checks</h3>
        <p>
          Webvium Browser includes an automatic update feature that checks for
          the latest available version hosted on GitHub.
        </p>

        <p>
          The application may make a periodic request to a publicly available
          GitHub repository to determine whether a newer version is available.
        </p>

        <p>
          This request does not transmit personal data, browsing history, or
          user content. However, like any standard internet request, GitHub may
          receive technical information such as IP address and request metadata
          according to its own privacy practices.
        </p>

        <p>
          Webvium Browser does not collect, store, or log any information from
          these update checks.
        </p>

        <h2 className="text-2xl font-semibold">
          4. Chrome Extensions (Floating Console)
        </h2>

        <p>
          Our Chrome extensions may request limited permissions such as
          <code>activeTab</code> to access the currently open webpage.
        </p>

        <ul className="list-disc list-inside ml-4">
          <li>Access is temporary and limited to the active tab</li>
          <li>Console logs are processed locally within the browser</li>
          <li>No browsing data is transmitted to external servers</li>
          <li>No personal data is stored remotely</li>
        </ul>

        <p>We do not sell, rent, or share browsing data.</p>

        <h2 className="text-2xl font-semibold">5. Webvium Launcher</h2>

        <p>
          Webvium Launcher is a lightweight, modern, and lightning-fast Android
          launcher currently in development. It is designed with speed,
          simplicity, and customization in mind, allowing users to personalize
          their device experience.
        </p>

        <h3 className="text-xl font-semibold">Data Storage</h3>
        <p>
          Webvium Launcher stores only user settings locally on your device,
          such as:
        </p>

        <ul className="list-disc list-inside ml-4">
          <li>Application preferences</li>
          <li>Theme or layout settings</li>
          <li>Other configuration options</li>
        </ul>

        <p>
          Webvium Launcher does not collect personal information, browsing data,
          or any other content. No information is transmitted to external
          servers.
        </p>

        <h2 className="text-2xl font-semibold">
          6. Webvium VPN (Discontinued)
        </h2>

        <p>
          Webvium VPN is no longer in service. While it may still be available
          for download, it is not maintained, updated, or supported by Melvin
          Jones Repol.
        </p>

        <p>
          Users who choose to download or use Webvium VPN do so at their own
          risk. Melvin Jones Repol is not responsible for any data, security, or
          privacy issues that may arise from its use.
        </p>

        <p>
          We strongly recommend that users do not rely on this application for
          secure internet access and consider using actively maintained VPN
          solutions instead.
        </p>

        <h2 className="text-2xl font-semibold">7. Third-Party Services</h2>

        <p>
          Your interactions with third-party services are governed by their
          respective privacy policies, including:
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

        <h2 className="text-2xl font-semibold">8. Other Projects</h2>

        <p>
          In addition to the Services described above, Melvin Jones Repol has
          other projects that may be open-source or distributed for a fee. These
          projects are operated independently and are not controlled,
          maintained, or supported by us in the same way as the Services listed
          above.
        </p>

        <p>
          We do not collect, store, or process data from these projects. Users
          are responsible for reviewing the terms, licenses, and privacy
          practices of these projects before use.
        </p>

        <h2 className="text-2xl font-semibold">9. Your Rights</h2>

        <p>
          You may request access to, correction of, or deletion of personal data
          submitted via the contact form by emailing mrepol742@gmail.com.
        </p>

        <h2 className="text-2xl font-semibold">
          10. Changes to This Privacy Policy
        </h2>
        <p>
          This Privacy Policy may be updated from time to time. Updates will be
          posted on this page with a revised “Last Updated” date.
        </p>
      </section>
    </main>
  );
}
