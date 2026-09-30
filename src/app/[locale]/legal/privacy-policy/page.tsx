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
            <span className="homepage-accent">policy</span>
            <br />
            details.
          </>
        }
        intro="This Privacy Policy outlines the rules for handling information in connection with Melvin Jones Repol, Webvium, their websites, applications, browser extensions, and other related services."
      />

      <section className="px-6 my-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="border border-stone-300 bg-stone-50 p-6 leading-7 shadow-[3px_3px_0_0_rgba(120,113,108,0.14)] md:p-10 dark:border-white/15 dark:bg-white/[0.03] dark:shadow-none space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest opacity-50 mb-1">
                Last Updated
              </p>
              <p className="text-sm font-medium">October 1, 2026</p>
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
                  We use limited service providers for hosting, email delivery,
                  analytics, spam prevention, search, and other functionality.
                </li>
                <li>
                  The main site has not served advertising since October 1,
                  2026.
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
                  <Link href="#tools">Tools (tools.melvinjonesrepol.com)</Link>
                </li>
                <li>
                  <Link href="#blog">Blog (blog.melvinjonesrepol.com)</Link>
                </li>
                <li>
                  <Link href="#status">
                    Status (status.melvinjonesrepol.com)
                  </Link>
                </li>
                <li>
                  <Link href="#stats">
                    Wakatime (stats.melvinjonesrepol.com)
                  </Link>
                </li>
                <li>
                  <Link href="#web-designs">
                    Web Designs (web-designs.melvinjonesrepol.com)
                  </Link>
                </li>
                <li>
                  <Link href="#shortlink">
                    Shrtly (shrtly.melvinjonesrepol.com)
                  </Link>
                </li>
                <li>
                  <Link href="#webvium-website">
                    Webvium Website (www.webvium.com)
                  </Link>
                </li>
                <li>
                  <Link href="#webvium-browser">Webvium Browser (Android)</Link>
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
                  <Link href="#monitoring">
                    Client project systems (production and staging monitoring)
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
              <p className="mt-3">
                For personal data that we decide how and why to process, Melvin
                Jones Repol is the personal information controller under the
                Philippine Data Privacy Act of 2012 and the controller under the
                GDPR where that law applies.
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
                  inquiries. Delivery is powered by Resend. Limited anti-abuse
                  records may be stored with Upstash Redis.
                </li>
                <li>
                  <strong>Newsletter:</strong> Your email address and
                  subscription status are processed through Resend when you
                  subscribe. You may unsubscribe at any time using the link in a
                  newsletter or by contacting us.
                </li>
                <li>
                  <strong>Analytics & performance:</strong> Google Analytics and
                  Google Search Console provide aggregated traffic and
                  performance metrics.
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
                <li>
                  <strong>No advertising:</strong> The main website has not
                  displayed or served ads since October 1, 2026. It does not use
                  Google AdSense for ad delivery after that date.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6" id="tools">
                Tools (tools.melvinjonesrepol.com)
              </h3>
              <p className="mt-2">
                This service may process information you submit to a selected
                tool, along with ordinary request, device, error, and security
                data needed to provide and protect that tool. A tool may provide
                an additional notice when its processing differs from this
                policy.
              </p>

              <h3 className="text-xl font-semibold mt-6" id="blog">
                Blog (blog.melvinjonesrepol.com)
              </h3>
              <p className="mt-2">
                The blog is powered by the Cloudflare EmDash content management
                system and hosted on Cloudflare Workers. Cloudflare may process
                IP addresses, request headers, security events, and diagnostic
                data to deliver, secure, and operate the blog. Cloudflare&apos;s
                applicable privacy and service terms also apply to its
                processing and infrastructure.
              </p>

              <h3 className="text-xl font-semibold mt-6" id="status">
                Status (status.melvinjonesrepol.com)
              </h3>
              <p className="mt-2">
                The status service is backed by UptimeRobot, which performs
                availability checks and provides uptime, response-time,
                incident, and status-page information for monitored projects.
                UptimeRobot may process standard request logs, IP address,
                browser details, subscription details, and security events when
                you visit or subscribe to the status service.
              </p>

              <h3 className="text-xl font-semibold mt-6" id="stats">
                WakaTime (stats.melvinjonesrepol.com)
              </h3>
              <p className="mt-2">
                This service displays development activity and statistics.
                WakaTime or the hosting provider may receive standard request
                information when its content is requested. WakaTime&apos;s own
                privacy terms apply to information it processes.
              </p>

              <h3 className="text-xl font-semibold mt-6" id="web-designs">
                Web Designs (web-designs.melvinjonesrepol.com)
              </h3>
              <p className="mt-2">
                This gallery may process standard hosting, request, performance,
                and security data. Any third-party content or demonstrations
                linked or embedded there may be governed by the third
                party&apos;s own privacy policy.
              </p>

              <h3 className="text-xl font-semibold mt-6" id="webvium-website">
                Webvium Website (www.webvium.com)
              </h3>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>
                  The website is operated and maintained by Melvin Jones Repol
                  under the Webvium name.
                </li>
                <li>
                  Contact-form names, email addresses, and messages, and
                  newsletter email addresses and subscription status, are
                  processed through Resend to deliver the requested email or
                  subscription service.
                </li>
                <li>
                  Technical information such as IP address, browser information,
                  request data, and security logs may be processed by the
                  hosting and infrastructure providers used by the website.
                </li>
                <li>
                  Where analytics, search, embedded content, or other
                  third-party services are enabled, those providers may process
                  information according to their respective privacy policies.
                </li>
                <li>
                  We do not sell or rent personal information collected through
                  the Webvium website.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6" id="shortlink">
                Shortlink (shrtly.melvinjonesrepol.com)
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

              <h3 className="text-xl font-semibold mt-6" id="monitoring">
                Production and Staging Monitoring
              </h3>
              <p className="mt-2">
                Systems we develop or operate may use Sentry in production or
                staging for error, performance, release, and diagnostic
                monitoring. Depending on the event and configuration, Sentry may
                receive stack traces, error messages, request details, device or
                browser information, IP-derived information, user or account
                identifiers, and other diagnostic context. We seek to minimize
                personal and sensitive data sent in telemetry, and project-
                specific notices or agreements may impose additional controls.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                3. How We Use Information
              </h2>
              <ul className="list-disc list-inside ml-4 mt-3 space-y-1">
                <li>Respond to inquiries and user feedback.</li>
                <li>Operate and improve the Services.</li>
                <li>Measure site performance where you have consented.</li>
                <li>Prevent spam, abuse, and security threats.</li>
                <li>
                  Provide requested features and functionality across our
                  websites, applications, and extensions.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                4. Legal Bases for Processing
              </h2>
              <p className="mt-3">
                We process personal data in accordance with Republic Act No.
                10173 (the Philippine Data Privacy Act of 2012), its
                Implementing Rules and Regulations, and applicable National
                Privacy Commission issuances. Where the EU or UK GDPR applies,
                we rely on one or more of the following legal bases, as
                appropriate:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>
                  <strong>Consent</strong> for optional analytics, newsletters,
                  and other processing for which consent is requested.
                </li>
                <li>
                  <strong>Contract or steps at your request</strong> when needed
                  to provide a Service or respond to a request you initiate.
                </li>
                <li>
                  <strong>Legitimate interests</strong> in securing,
                  maintaining, diagnosing, and improving the Services, where
                  those interests are not overridden by your rights.
                </li>
                <li>
                  <strong>Legal obligation</strong> when processing is required
                  by applicable law or a valid legal request.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                5. Sharing and Service Providers
              </h2>
              <p className="mt-3">
                We do not sell or rent personal data. We may share or allow
                limited information to be processed by third-party providers
                that help us operate, secure, analyze, communicate, or improve
                the Services. They process data under their own terms and, where
                applicable, on our instructions.
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>
                  <a
                    href="https://resend.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-orange-600 dark:text-orange-400"
                  >
                    Resend Privacy Policy
                  </a>{" "}
                  — contact-form and newsletter delivery and subscriber records
                  for melvinjonesrepol.com and webvium.com.
                </li>
                <li>
                  <a
                    href="https://www.cloudflare.com/privacypolicy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-orange-600 dark:text-orange-400"
                  >
                    Cloudflare Privacy Policy
                  </a>{" "}
                  — delivery, hosting, storage, security, and request processing
                  for the EmDash blog and other Cloudflare-backed Services.
                </li>
                <li>
                  <a
                    href="https://sentry.io/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-orange-600 dark:text-orange-400"
                  >
                    Sentry Privacy Policy
                  </a>{" "}
                  — production and staging error, performance, release, and
                  diagnostic monitoring where enabled.
                </li>
                <li>
                  <a
                    href="https://uptimerobot.com/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-orange-600 dark:text-orange-400"
                  >
                    UptimeRobot Privacy Policy
                  </a>{" "}
                  — project availability monitoring and the public status page.
                </li>
                <li>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-orange-600 dark:text-orange-400"
                  >
                    Google Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-orange-600 dark:text-orange-400"
                  >
                    Vercel Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://upstash.com/trust/privacy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-orange-600 dark:text-orange-400"
                  >
                    Upstash Privacy Policy
                  </a>{" "}
                  — limited anti-abuse and request-deduplication records.
                </li>
                <li>
                  <a
                    href="https://www.algolia.com/policies/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-orange-600 dark:text-orange-400"
                  >
                    Algolia Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://legal.trustpilot.com/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-orange-600 dark:text-orange-400"
                  >
                    Trustpilot Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-orange-600 dark:text-orange-400"
                  >
                    GitHub Privacy Statement
                  </a>
                </li>
                <li>
                  <a
                    href="https://privacy.microsoft.com/en-us/privacystatement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-orange-600 dark:text-orange-400"
                  >
                    Microsoft Privacy Statement (Bing)
                  </a>
                </li>
                <li>
                  Other providers disclosed at the point a feature is used, or
                  when required to comply with law, protect rights and safety,
                  investigate abuse, or complete a business transfer.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                6. International Data Transfers
              </h2>
              <p className="mt-3">
                Our providers may process information in the Philippines, the
                United States, the European Economic Area, and other countries.
                Those countries may have different data-protection rules. Where
                required, we rely on appropriate safeguards such as contractual
                protections, including standard contractual clauses, or another
                lawful transfer mechanism.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">7. Data Retention</h2>
              <p className="mt-3">
                Contact form submissions are retained only as long as needed to
                respond to your request, maintain necessary records, resolve
                disputes, or comply with law. Newsletter data is retained until
                you unsubscribe or request deletion, subject to a limited
                suppression record where needed to honor your choice. Shortlink
                data is kept only while needed to provide and protect that
                service. Provider logs, security records, and analytics are kept
                under the applicable provider settings and retention rules.
                Local app data remains on your device until you delete it or
                uninstall the app.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                8. Your Choices and Privacy Rights
              </h2>
              <p className="mt-3">
                Subject to applicable law and its exceptions, you may ask to be
                informed about our processing and request access, correction,
                erasure or blocking, objection or restriction, withdrawal of
                consent, and data portability. You may also object to direct
                marketing and lodge a complaint with a competent regulator.
              </p>
              <ul className="list-disc list-inside ml-4 mt-3 space-y-1">
                <li>
                  Change optional-cookie choices through Cookie Preferences or
                  your browser settings. Withdrawing consent does not affect
                  processing that was lawful before withdrawal.
                </li>
                <li>Revoke app or site permissions in your device settings.</li>
                <li>Uninstall any app or extension at any time.</li>
                <li>
                  Exercise a privacy right by emailing{" "}
                  <strong>mrepol742@gmail.com</strong>. We may need to verify
                  your identity and may decline or limit a request where the law
                  permits.
                </li>
              </ul>
              <p className="mt-3">
                In the Philippines, you may complain to the{" "}
                <a
                  href="https://privacy.gov.ph/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-orange-600 dark:text-orange-400"
                >
                  National Privacy Commission
                </a>
                . If the GDPR applies, you may complain to the data-protection
                authority where you live, work, or believe an infringement
                occurred.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">9. Security</h2>
              <p className="mt-3">
                We use reasonable safeguards to protect information. No method
                of transmission or storage is completely secure, so we cannot
                guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                10. Children&apos;s Privacy
              </h2>
              <p className="mt-3">
                The Services are not directed to children under 13, and we do
                not knowingly collect their personal data. Where local law sets
                a higher age for valid consent to online data processing, a
                parent or guardian must provide or authorize consent when
                required. Contact us if you believe a child supplied personal
                data improperly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">11. Other Projects</h2>
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
                12. Applicable Privacy Laws
              </h2>
              <p className="mt-3">
                This policy is intended to address the Philippine Data Privacy
                Act and, where its territorial scope is met, the GDPR and
                related European cookie rules. Other mandatory privacy or
                consumer-protection laws may apply depending on where a Service
                is offered, how it is used, and whether a legal threshold is
                met. Mere technical availability in a country does not by itself
                mean every law of that country applies. Nothing in this policy
                limits rights that cannot lawfully be waived.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                13. Changes to This Privacy Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. Updates
                will be posted on this page with a revised “Last Updated” date.
                Material changes may also be communicated through the relevant
                website or application where appropriate.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">14. Contact</h2>
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

          <LegalFooter date="October 2026" />
        </div>
      </section>
    </>
  );
}
