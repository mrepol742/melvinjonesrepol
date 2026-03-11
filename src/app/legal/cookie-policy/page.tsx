import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Melvin Jones Repol",
  description:
    "This Cookie Policy explains how Melvin Jones Repol uses cookies and similar technologies on our portfolio website, Webvium Browser, Chrome extensions, and other projects.",
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/legal/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy - Melvin Jones Repol",
    description:
      "This Cookie Policy explains how Melvin Jones Repol uses cookies and similar technologies on our portfolio website, Webvium Browser, Chrome extensions, and other projects.",
    url: "https://www.melvinjonesrepol.com/legal/cookie-policy",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
        width: 1200,
        height: 630,
        alt: "Cookie Policy Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy - Melvin Jones Repol",
    description:
      "This Cookie Policy explains how Melvin Jones Repol uses cookies and similar technologies on our portfolio website, Webvium Browser, Chrome extensions, and other projects.",
    images: [
      "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
    ],
    creator: "@mrepol742",
  },
};

export default function CookiePolicy() {
  return (
    <main className="my-18 p-4 md:p-10 max-w-3xl mx-auto">
      <section className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Cookie Policy</h1>
          <p className="text-sm text-gray-500">Last Updated: March 11, 2026</p>
        </div>

        <p>
          This Cookie Policy explains how Melvin Jones Repol ("we", "us", or
          "our") uses cookies and similar tracking technologies on our portfolio
          website, Webvium Browser, Chrome extensions, and other projects
          (collectively, the “Services”). By using our Services, you consent to
          the use of cookies as described in this policy.
        </p>

        <h2 className="text-2xl font-semibold">1. What Are Cookies?</h2>
        <p>
          Cookies are small text files placed on your device when you visit a
          website. They help websites remember information about your visit,
          such as preferences, login status, and interactions with the site.
        </p>

        <h2 className="text-2xl font-semibold">2. Types of Cookies We Use</h2>
        <ul className="list-disc list-inside ml-4">
          <li>
            <strong>Essential Cookies:</strong> Required for the website and
            Services to function properly, including security and accessibility
            features.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> Used to measure user
            interactions and improve our Services. Examples include Google
            Analytics, which collects aggregate data on traffic and usage.
          </li>
          <li>
            <strong>Advertising Cookies:</strong> Used to deliver personalized
            ads and track ad performance. Examples include Google Adsense
            cookies.
          </li>
          <li>
            <strong>Third-Party Cookies:</strong> Certain features on our site,
            such as the Trustpilot review widget or LiveChat.ai, may set cookies
            for their own functionality or analytics purposes.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">3. Third-Party Cookies</h2>
        <p>
          Our Services may include content or features from third-party services
          that use their own cookies:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>
            <a
              href="https://www.trustpilot.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              Trustpilot
            </a>{" "}
            – collects data when the Trustpilot widget is loaded or interacted
            with.
          </li>
          <li>
            <a
              href="https://developers.google.com/analytics/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              Google Analytics
            </a>{" "}
            – collects anonymous and aggregate usage information.
          </li>
          <li>
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              Google Adsense
            </a>{" "}
            – may use cookies to serve personalized advertisements.
          </li>
          <li>
            <a
              href="https://livechat.ai/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              LiveChat.ai
            </a>{" "}
            – may collect session data if chat support is used.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">4. Managing Cookies</h2>
        <p>
          You can control or delete cookies using your browser settings. Most
          browsers allow you to block or remove cookies entirely, though some
          features of the Services may not function properly if cookies are
          disabled.
        </p>

        <h2 className="text-2xl font-semibold">5. Your Consent</h2>
        <p>
          By continuing to use our Services, you consent to our use of cookies
          as described in this policy. You may withdraw consent at any time by
          adjusting your browser settings.
        </p>

        <h2 className="text-2xl font-semibold">
          6. Updates to This Cookie Policy
        </h2>
        <p>
          We may update this Cookie Policy from time to time. Updates will be
          posted on this page with a revised “Last Updated” date.
        </p>

        <h2 className="text-2xl font-semibold">7. Contact</h2>
        <p>
          For questions about this Cookie Policy or our use of cookies, please
          contact us at{" "}
          <a
            href="mailto:mrepol742@gmail.com"
            className="underline text-blue-600"
          >
            mrepol742@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
