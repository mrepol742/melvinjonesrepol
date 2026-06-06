import { getAlternates } from "@/components/common/metadata/Alternatives";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Melvin Jones Repol",
  description:
    "This Privacy Policy describes how Melvin Jones Repol handles information in connection with our portfolio website, Webvium Browser, Chrome extensions, and other projects.",
  alternates: getAlternates("/legal/privacy-policy"),
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
    <main>
      <section className="relative min-h-screen overflow-hidden border-b border-zinc-800">
        <div className="relative flex min-h-screen flex-col px-6 py-12 md:px-10">
          <div className="my-auto py-14">
            <h1 className="text-[14vw] sm:text-[10vw] lg:text-[7.5vw] font-black tracking-tighter leading-[0.85] mb-8">
              Privacy
              <br />
              <span className="opacity-40">policy</span>
              <br />
              details.
            </h1>

            <p
              className="max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Learn how Melvin Jones Repol / Webvium handles data across the
              website, apps, extensions, and shortlink service.
            </p>
          </div>

          <div
            className="border-t border-zinc-800 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div>
              <p className="text-4xl font-black">10</p>
              <p className="mt-1 text-sm text-zinc-400">Sections</p>
            </div>
            <div>
              <p className="text-4xl font-black">Active</p>
              <p className="mt-1 text-sm text-zinc-400">Current policy</p>
            </div>
            <div className="col-span-2 flex flex-wrap items-center gap-2">
              {["Data", "Services", "Retention", "Security"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-400 px-3 py-1 text-xs text-zinc-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-10 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest opacity-50 mb-1">
                Last Updated
              </p>
              <p className="text-sm font-medium">June 1, 2026</p>
            </div>

            <p>
              Melvin Jones Repol / Webvium (“we,” “us,” or “our”) refers to
              services operated by the same individual. This Privacy Policy
              explains how we handle information across the Services listed
              below.
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
                  We use limited third-party tools on the website for ads,
                  analytics, spam prevention, and search.
                </li>
                <li>
                  Extension permissions are disclosed at install time and are
                  used only to provide the extension’s functionality.
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
                  Any related applications, tools, or services (the “Services”)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">1. Who We Are</h2>
              <p className="mt-3">
                Melvin Jones Repol and Webvium are operated by the same person.
                For privacy purposes, “Melvin Jones Repol / Webvium” is the data
                controller for the Services described in this policy.
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

              <h3 className="text-xl font-semibold mt-6" id="shortlink">
                Shortlink (go.melvinjonesrepol.com)
              </h3>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>We only collect the links you submit for shortening.</li>
                <li>
                  No personal data, IP addresses, or browser details are
                  collected.
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
                to external servers.
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
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                4. Sharing and Third Parties
              </h2>
              <p className="mt-3">
                We do not sell or rent personal data. We may share limited
                information with third-party providers that help us operate the
                Services.
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
                retained according to the third-party provider’s policies. Local
                app data remains on your device until you delete it.
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
                Other projects may be open-source or distributed for a fee and
                may have their own terms and privacy practices. Please review
                those policies before use.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                9. Changes to This Privacy Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. Updates
                will be posted on this page with a revised “Last Updated” date.
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

          <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest opacity-50 mb-1">
                Last reviewed
              </p>
              <p className="text-sm font-medium">June 2026</p>
            </div>
            <div className="h-px sm:h-8 sm:w-px border-b sm:border-b-0 sm:border-r border-zinc-800 w-full sm:w-auto" />
            <div>
              <p className="text-xs uppercase tracking-widest opacity-50 mb-1">
                Jurisdiction
              </p>
              <p className="text-sm font-medium">Philippines</p>
            </div>
            <div className="h-px sm:h-8 sm:w-px border-b sm:border-b-0 sm:border-r border-zinc-800 w-full sm:w-auto" />
            <div>
              <p className="text-xs uppercase tracking-widest opacity-50 mb-1">
                Questions?
              </p>
              <Link
                href="/contact-me"
                className="text-sm font-medium underline underline-offset-2 hover:opacity-70 transition-opacity"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
