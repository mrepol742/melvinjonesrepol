import { getAlternates } from "@/components/common/metadata/Alternatives";
import { Metadata } from "next";
import Link from "next/link";
import LegalFooter from "../components/LegalFooter";
import Header from "@/components/ui/Header";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title = "Privacy Policy - Melvin Jones Repol & Webvium";
  const description =
    "This Privacy Policy describes how Melvin Jones Repol handles information in connection with melvinjonesrepol.com, webvium.com, Webvium Browser, Chrome extensions, and other related projects and services.";

  return {
    title,
    description,
    alternates: getAlternates("/legal/privacy-policy", locale),
    openGraph: {
      title,
      description,
      url: "https://www.melvinjonesrepol.com/legal/privacy-policy",
      siteName: "Melvin Jones Repol",
      images: [
        {
          url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
          width: 800,
          height: 600,
          alt: "Melvin Jones Repol",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
      ],
      creator: "@mrepol742",
    },
  };
}

export default function Privacy() {
  return (
    <>
      <Header
        title={
          <>
            Privacy
            <br />
            <span className="opacity-40">policy</span>
            <br />
            details.
          </>
        }
        intro="This Privacy Policy outlines the rules for handling information in connection with Melvin Jones Repol, Webvium, their websites, applications, browser extensions, and other related services."
      />

      <section className="px-6 my-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="rp-8 md:p-10 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest opacity-50 mb-1">
                Last Updated
              </p>
              <p className="text-sm font-medium">September 6, 2026</p>
            </div>

            <p>
              The websites <strong>melvinjonesrepol.com</strong> and{" "}
              <strong>webvium.com</strong>, together with the applications,
              browser extensions, tools, and related services published under
              these names, are operated and maintained by the same individual.
              For purposes of this Privacy Policy, “Melvin Jones Repol /
              Webvium,” “we,” “us,” or “our” refers to these services and their
              operator.
            </p>

            <div>
              <h2 className="text-2xl font-semibold">Quick Summary</h2>
              <ul className="list-disc list-inside ml-4 mt-3 space-y-1">
                <li>We do not sell or rent personal data.</li>
                <li>
                  Most data stays on your device (e.g., browser history and
                  launcher settings).
                </li>
                <li>
                  We use limited third-party tools on our websites for ads,
                  analytics, spam prevention, search, and other functionality.
                </li>
                <li>
                  Extension permissions are disclosed at install time and are
                  used only to provide the extension’s functionality.
                </li>
                <li>
                  Webvium applications are designed to minimize unnecessary
                  collection of personal and browsing information.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Services Covered</h2>
              <ul className="list-disc list-inside ml-4 mt-3 space-y-1">
                <li>
                  <Link href="#website">
                    Website (www.melvinjonesrepol.com)
                  </Link>
                </li>
                <li>
                  <Link href="#webvium-website">
                    Webvium Website (www.webvium.com)
                  </Link>
                </li>
                <li>
                  <Link href="#shortlink">
                    Shortlink (go.melvinjonesrepol.com)
                  </Link>
                </li>
                <li>
                  <Link href="#webvium-browser">Webvium Browser (Android)</Link>
                </li>
                <li>
                  <Link href="#webvium-launcher">
                    Webvium Launcher (Android)
                  </Link>
                </li>
                <li>
                  <Link href="#discontinued-legacy-webvium-services">
                    Discontinued/Legacy Webvium Services (Beta, Dev, VPN,
                    Search)
                  </Link>
                </li>
                <li>
                  <Link href="#chrome-extensions">
                    Floating Console (Browser Extension)
                  </Link>
                </li>
                <li>
                  <Link href="#chrome-extensions">
                    Disable Ctrl+Shift+C (Browser Extension)
                  </Link>
                </li>
                <li>
                  <Link href="#chrome-extensions">
                    Awesome New Tab (Browser Extension)
                  </Link>
                </li>
                <li>
                  <Link href="#chrome-extensions">
                    Browser Storage Inspector (Browser Extension)
                  </Link>
                </li>
                <li>
                  <Link href="#chrome-extensions">
                    Webvium Adblocker (Browser Extension)
                  </Link>
                </li>
                <li>
                  Any related applications, tools, or services operated under
                  the Melvin Jones Repol or Webvium names (the “Services”)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">1. Who We Are</h2>
              <p className="mt-3">
                <strong>Melvin Jones Repol</strong> is the operator of the
                websites, applications, browser extensions, and related services
                described in this policy. <strong>Webvium</strong> is a project
                and product identity operated by Melvin Jones Repol.
              </p>
              <p className="mt-3">
                The domains <strong>www.melvinjonesrepol.com</strong> and{" "}
                <strong>www.webvium.com</strong> are therefore operated by the
                same individual. References to “Melvin Jones Repol / Webvium” in
                this Privacy Policy refer to the operator and the Services
                provided under these names.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                2. Information We Collect and Why
              </h2>

              <h3 className="text-xl font-semibold mt-4" id="website">
                Website (www.melvinjonesrepol.com)
              </h3>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>
                  <strong>Contact form:</strong> Name, email address, and
                  message when voluntarily submitted, used to respond to
                  inquiries.
                </li>
                <li>
                  <strong>Analytics & performance:</strong> Google Analytics and
                  Google Search Console provide aggregated traffic and
                  performance metrics.
                </li>
                <li>
                  <strong>Advertising:</strong> Google AdSense uses cookies and
                  similar technologies to deliver ads.
                </li>
                <li>
                  <strong>Spam protection:</strong> Google reCAPTCHA Enterprise
                  collects device and interaction data to prevent abuse.
                </li>
                <li>
                  <strong>Search:</strong> Algolia may collect search queries
                  and interaction data to provide on-site search.
                </li>
                <li>
                  <strong>Widgets:</strong> The Trustpilot widget may collect IP
                  address and browsing information.
                </li>
                <li>
                  <strong>Hosting logs:</strong> Vercel processes IP and request
                  logs for performance and security.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6" id="webvium-website">
                Webvium Website (www.webvium.com)
              </h3>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>
                  The website is operated and maintained by Melvin Jones Repol
                  under the Webvium name.
                </li>
                <li>
                  Information voluntarily submitted through forms or other
                  interactive features may be collected to provide the requested
                  service or respond to inquiries.
                </li>
                <li>
                  Technical information such as IP address, browser information,
                  request data, and security logs may be processed by the
                  hosting and infrastructure providers used by the website.
                </li>
                <li>
                  Where analytics, advertising, search, or other third-party
                  services are enabled, those providers may process information
                  according to their respective privacy policies.
                </li>
                <li>
                  We do not sell or rent personal information collected through
                  the Webvium website.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6" id="shortlink">
                Shortlink (go.melvinjonesrepol.com)
              </h3>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>We only collect the links you submit for shortening.</li>
                <li>
                  No personal data, IP addresses, or browser details are
                  intentionally collected for the shortlink service.
                </li>
                <li>We do not use cookies or tracking technologies.</li>
                <li>Links are used only to provide the shortlink service.</li>
                <li>
                  Links may be deleted after a period of time or upon request.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6" id="webvium-browser">
                Webvium Browser (Android)
              </h3>
              <p className="mt-2">
                Webvium Browser is designed with privacy in mind.
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>We do not collect personal data or browsing history.</li>
                <li>We do not use analytics, telemetry, or tracking.</li>
                <li>
                  <strong>Local data:</strong> Bookmarks, history, and
                  preferences are stored only on your device.
                </li>
                <li>
                  <strong>Device permissions:</strong> Websites may request
                  access to camera, microphone, location, storage, or
                  notifications. You control these permissions and can revoke
                  them anytime.
                </li>
                <li>
                  <strong>News content:</strong> Public RSS feeds from Google
                  News may be shown. No authenticated Google APIs or location
                  data are used.
                </li>
                <li>
                  <strong>Send Report:</strong> If you send feedback, we may
                  receive your optional email address, message, device info, app
                  version, and optional crash logs.
                </li>
                <li>
                  <strong>Update checks:</strong> The app may check a public
                  GitHub repository for updates. GitHub may receive IP/request
                  metadata.
                </li>
                <li>
                  <strong>Third-party sites:</strong> Websites you visit have
                  their own privacy policies that we do not control.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6" id="webvium-launcher">
                Webvium Launcher (Android)
              </h3>
              <p className="mt-2">
                Webvium Launcher stores user settings locally on your device
                (e.g., preferences and layout settings). No data is transmitted
                to external servers by the launcher for these settings.
              </p>

              <h3
                className="text-xl font-semibold mt-6"
                id="discontinued-legacy-webvium-services"
              >
                Discontinued/Legacy Webvium Services
              </h3>
              <p className="mt-2">
                The following services are no longer maintained or supported:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>
                  <strong>Webvium VPN:</strong> Discontinued. Use at your own
                  risk; no updates or support are provided.
                </li>
                <li>
                  <strong>Webvium Beta & Dev:</strong> Discontinued. The stable
                  version now follows a rolling update model.
                </li>
                <li>
                  <strong>Webvium Search:</strong> Discontinued in favor of
                  built-in search functionality.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6" id="chrome-extensions">
                Chrome Extensions
              </h3>
              <p className="mt-2">
                Extensions include Floating Console, Disable Ctrl+Shift+C,
                Awesome New Tab, Browser Storage Inspector, and Webvium
                Adblocker.
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>
                  Permissions are limited to what each extension needs and are
                  shown at install time.
                </li>
                <li>
                  Data is processed locally in the browser unless explicitly
                  stated.
                </li>
                <li>
                  Some extensions may access the active tab or all URLs to
                  function (e.g., developer tools or ad blocking).
                </li>
                <li>
                  Awesome New Tab may load Bing wallpaper imagery from bing.com.
                </li>
                <li>We do not transmit browsing data to our servers.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                3. How We Use Information
              </h2>
              <ul className="list-disc list-inside ml-4 mt-3 space-y-1">
                <li>Respond to inquiries and user feedback.</li>
                <li>Operate and improve the Services.</li>
                <li>Provide ads and measure site performance.</li>
                <li>Prevent spam, abuse, and security threats.</li>
                <li>
                  Provide requested features and functionality across our
                  websites, applications, and extensions.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                4. Sharing and Third Parties
              </h2>
              <p className="mt-3">
                We do not sell or rent personal data. We may share or allow
                limited information to be processed by third-party providers
                that help us operate, secure, analyze, or improve the Services.
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-400"
                  >
                    Google Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://adssettings.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-400"
                  >
                    Google Ad Personalization Settings
                  </a>
                </li>
                <li>
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-400"
                  >
                    Vercel Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.algolia.com/policies/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-400"
                  >
                    Algolia Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://legal.trustpilot.com/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-400"
                  >
                    Trustpilot Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-400"
                  >
                    GitHub Privacy Statement
                  </a>
                </li>
                <li>
                  <a
                    href="https://privacy.microsoft.com/en-us/privacystatement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-400"
                  >
                    Microsoft Privacy Statement (Bing)
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">5. Data Retention</h2>
              <p className="mt-3">
                Contact form submissions are retained only as long as needed to
                respond to your request. Website logs and analytics data are
                retained according to the applicable third-party provider’s
                policies. Local app data remains on your device until you delete
                it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                6. Your Choices and Rights
              </h2>
              <ul className="list-disc list-inside ml-4 mt-3 space-y-1">
                <li>Control cookies and tracking in your browser settings.</li>
                <li>Revoke app or site permissions in your device settings.</li>
                <li>Uninstall any app or extension at any time.</li>
                <li>
                  Request access, correction, or deletion of contact form data
                  by emailing <strong>mrepol742@gmail.com</strong>.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">7. Security</h2>
              <p className="mt-3">
                We use reasonable safeguards to protect information. No method
                of transmission or storage is completely secure, so we cannot
                guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">8. Other Projects</h2>
              <p className="mt-3">
                Other projects operated or published by Melvin Jones Repol may
                be open-source, distributed for a fee, or provided as separate
                products and services. Such projects may have their own terms,
                privacy policies, or data practices. Please review the
                applicable policies before using those Services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                9. Changes to This Privacy Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. Updates
                will be posted on this page with a revised “Last Updated” date.
                Material changes may also be communicated through the relevant
                website or application where appropriate.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">10. Contact</h2>
              <p className="mt-3">
                Questions about this Privacy Policy can be sent via the{" "}
                <Link
                  href="/contact-me"
                  className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                >
                  contact form
                </Link>
                .
              </p>
            </div>
          </div>

          <LegalFooter date="September 2026" />
        </div>
      </section>
    </>
  );
}
