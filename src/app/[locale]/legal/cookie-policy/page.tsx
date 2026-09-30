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

  return {
    title: "Cookie Policy - Melvin Jones Repol & Webvium",
    description:
      "This Cookie Policy explains how Melvin Jones Repol uses cookies and similar technologies on melvinjonesrepol.com, webvium.com, and related websites, applications, browser extensions, and services.",
    alternates: getAlternates("/legal/cookie-policy", locale),
    openGraph: {
      title: "Cookie Policy - Melvin Jones Repol & Webvium",
      description:
        "This Cookie Policy explains how Melvin Jones Repol uses cookies and similar technologies on melvinjonesrepol.com, webvium.com, and related websites, applications, browser extensions, and services.",
      url: "https://www.melvinjonesrepol.com/legal/cookie-policy",
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
      title: "Cookie Policy - Melvin Jones Repol & Webvium",
      description:
        "This Cookie Policy explains how Melvin Jones Repol uses cookies and similar technologies on melvinjonesrepol.com, webvium.com, and related websites, applications, browser extensions, and services.",
      images: [
        "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
      ],
      creator: "@mrepol742",
    },
  };
}

export default function CookiePolicy() {
  return (
    <>
      <Header
        title={
          <>
            Cookie
            <br />
            <span className="homepage-accent">policy</span>
            <br />
            overview.
          </>
        }
        intro="This Cookie Policy outlines the rules for using cookies and similar technologies on our websites, Webvium Browser, Chrome extensions, and other projects."
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
              This Cookie Policy explains how cookies and similar technologies
              may be used across the websites, applications, browser extensions,
              and other services operated under the Melvin Jones Repol and
              Webvium names. The domains <strong>melvinjonesrepol.com</strong>{" "}
              and <strong>webvium.com</strong> are operated and maintained by
              the same individual. In this policy, “we,” “us,” or “our” refers
              to Melvin Jones Repol and the Services operated under these names.
            </p>

            <div>
              <h2 className="text-2xl font-semibold">1. What Are Cookies?</h2>
              <p className="mt-3">
                Cookies are small text files placed on your device when you
                visit a website. They help websites remember information about
                your visit, such as preferences, session information, and
                interactions with the site. Similar technologies may include
                pixels, tags, local storage, and other mechanisms used to
                recognize a browser or device.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                2. Types of Cookies We Use
              </h2>
              <ul className="list-disc list-inside ml-4 mt-3 space-y-1">
                <li>
                  <strong>Essential Cookies:</strong> Required for websites and
                  Services to function properly, including security,
                  accessibility, session management, and basic functionality.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Used to understand how
                  visitors interact with our websites and to measure and improve
                  website performance.
                </li>
                <li>
                  <strong>Functional Technologies:</strong> Used only after your
                  choice, where required, to load optional features or embedded
                  content such as videos.
                </li>
                <li>
                  <strong>Third-Party Cookies:</strong> Certain features,
                  embedded content, widgets, or external services may place
                  cookies or use similar technologies for their own
                  functionality, analytics, security, or advertising purposes.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                3. Websites and Services Covered
              </h2>
              <ul className="list-disc list-inside ml-4 mt-3 space-y-1">
                <li>www.melvinjonesrepol.com</li>
                <li>www.webvium.com</li>
                <li>tools.melvinjonesrepol.com</li>
                <li>blog.melvinjonesrepol.com</li>
                <li>status.melvinjonesrepol.com</li>
                <li>stats.melvinjonesrepol.com</li>
                <li>web-designs.melvinjonesrepol.com</li>
                <li>shrtly.melvinjonesrepol.com</li>
                <li>Webvium Browser</li>
                <li>Webvium browser extensions</li>
                <li>
                  Other websites, applications, tools, and services operated
                  under the Melvin Jones Repol or Webvium names
                </li>
              </ul>
              <p className="mt-3">
                Not every Service uses cookies. In particular, applications and
                browser extensions may rely primarily on local storage or
                browser-managed data rather than traditional website cookies.
              </p>
              <p className="mt-3">
                <strong>Advertising update:</strong> The main website,
                www.melvinjonesrepol.com, has not served advertising since
                October 1, 2026, and no longer loads Google AdSense for ad
                delivery. Third-party sites or embedded services may have their
                own advertising practices outside our control.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">4. Third-Party Cookies</h2>
              <p className="mt-3">
                Our websites may include content, functionality, analytics,
                embedded content, email forms, or widgets provided by
                third-party services. These providers may use cookies or similar
                technologies according to their own policies:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>
                  <a
                    href="https://www.trustpilot.com/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-orange-600 dark:text-orange-400"
                  >
                    Trustpilot
                  </a>
                </li>
                <li>
                  <a
                    href="https://developers.google.com/analytics/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-orange-600 dark:text-orange-400"
                  >
                    Google Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.cloudflare.com/privacypolicy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-orange-600 dark:text-orange-400"
                  >
                    Cloudflare
                  </a>{" "}
                  hosts the EmDash-powered blog on Cloudflare Workers and may
                  use necessary security or load-balancing technologies.
                </li>
                <li>
                  <a
                    href="https://resend.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-orange-600 dark:text-orange-400"
                  >
                    Resend
                  </a>{" "}
                  processes contact-form and newsletter data for
                  melvinjonesrepol.com and webvium.com. Submitting those forms
                  sends data to Resend but does not by itself authorize optional
                  analytics cookies.
                </li>
              </ul>
              <p className="mt-3">
                Third-party providers may change the cookies or technologies
                they use independently of us. Their processing is governed by
                their respective privacy policies and terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">5. Cookies on Webvium</h2>
              <p className="mt-3">
                Webvium services may use cookies or similar technologies only
                where necessary to provide website functionality, security,
                consented analytics, or other enabled features. The Webvium
                Android applications and browser extensions may instead store
                preferences and other information locally on your device and may
                not use traditional website cookies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">6. Managing Cookies</h2>
              <p className="mt-3">
                On www.melvinjonesrepol.com, use the “Cookie Preferences” link
                in the footer to accept, reject, or change optional categories.
                You can also control or delete cookies using your browser
                settings. Most browsers allow you to block or remove cookies or
                manage permissions for individual websites.
              </p>
              <p className="mt-3">
                Blocking certain cookies may affect the availability or
                functionality of some features of the Services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                7. Your Choices and Consent
              </h2>
              <p className="mt-3">
                Where required by applicable law, non-essential cookies and
                similar technologies will only be used after obtaining the
                appropriate consent. You may withdraw or change your choices
                where applicable by using the available cookie controls or by
                adjusting your browser settings.
              </p>
              <p className="mt-3">
                Essential cookies may still be used when necessary to provide
                requested functionality, maintain security, or operate the
                Services.
              </p>
              <p className="mt-3">
                Under the Philippine Data Privacy Act, consent must be freely
                given, specific, and informed where consent is the lawful basis.
                Where European cookie rules and the GDPR apply, we request
                consent before using non-essential storage or access
                technologies. You can withdraw consent as easily as you gave it;
                withdrawal does not affect earlier lawful processing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">8. Browser Signals</h2>
              <p className="mt-3">
                Because there is no single universally accepted response to “Do
                Not Track” signals, our Services may not respond to them. Where
                a legally recognized opt-out preference signal applies to a
                Service, we will honor it as required. We do not sell personal
                data or use the main website for cross-context behavioral
                advertising.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                9. Updates to This Cookie Policy
              </h2>
              <p className="mt-3">
                We may update this Cookie Policy from time to time to reflect
                changes to our Services, technologies, third-party providers, or
                applicable requirements. Updates will be posted on this page
                with a revised “Last Updated” date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">10. Contact</h2>
              <p className="mt-3">
                Questions about this Cookie Policy can be sent via the{" "}
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
