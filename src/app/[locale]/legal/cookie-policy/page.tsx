import { getAlternates } from "@/components/common/metadata/Alternatives";
import { Metadata } from "next";
import Link from "next/link";
import LegalFooter from "../components/LegalFooter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Cookie Policy - Melvin Jones Repol",
    description:
      "This Cookie Policy explains how Melvin Jones Repol uses cookies and similar technologies on our portfolio website, Webvium Browser, Chrome extensions, and other projects.",
    alternates: getAlternates("/legal/cookie-policy", locale),
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
}

export default function CookiePolicy() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden border-b border-zinc-800">
        <div className="relative flex min-h-screen flex-col px-6 py-12 md:px-10">
          <div className="my-auto py-14">
            <h1 className="text-[14vw] sm:text-[10vw] lg:text-[7.5vw] font-black tracking-tighter leading-[0.85] mb-8">
              Cookie
              <br />
              <span className="opacity-40">policy</span>
              <br />
              overview.
            </h1>

            <p
              className="max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Learn how cookies and related technologies are used across the
              website and connected services.
            </p>
          </div>

          <div
            className="border-t border-zinc-800 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div>
              <p className="text-4xl font-black">7</p>
              <p className="mt-1 text-sm text-zinc-400">Sections</p>
            </div>
            <div>
              <p className="text-4xl font-black">Active</p>
              <p className="mt-1 text-sm text-zinc-400">Current policy</p>
            </div>
            <div className="col-span-2 flex flex-wrap items-center gap-2">
              {["Essential", "Analytics", "Ads", "Control"].map((item) => (
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

      <section className="px-6 my-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="rp-8 md:p-10 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest opacity-50 mb-1">
                Last Updated
              </p>
              <p className="text-sm font-medium">March 24, 2026</p>
            </div>

            <p>
              This Cookie Policy explains how Melvin Jones Repol (“we,” “us,” or
              “our”) uses cookies and similar tracking technologies on our
              portfolio website, Webvium Browser, Chrome extensions, and other
              projects (collectively, the “Services”). By using our Services,
              you consent to the use of cookies as described in this policy.
            </p>

            <div>
              <h2 className="text-2xl font-semibold">1. What Are Cookies?</h2>
              <p className="mt-3">
                Cookies are small text files placed on your device when you
                visit a website. They help websites remember information about
                your visit, such as preferences, login status, and interactions
                with the site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                2. Types of Cookies We Use
              </h2>
              <ul className="list-disc list-inside ml-4 mt-3 space-y-1">
                <li>
                  <strong>Essential Cookies:</strong> Required for the website
                  and Services to function properly, including security and
                  accessibility features.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Used to measure user
                  interactions and improve our Services.
                </li>
                <li>
                  <strong>Advertising Cookies:</strong> Used to deliver
                  personalized ads and track ad performance.
                </li>
                <li>
                  <strong>Third-Party Cookies:</strong> Certain features on our
                  site, such as the Trustpilot review widget or LiveChat.ai, may
                  set cookies for their own functionality or analytics purposes.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">3. Third-Party Cookies</h2>
              <p className="mt-3">
                Our Services may include content or features from third-party
                services that use their own cookies:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>
                  <a
                    href="https://www.trustpilot.com/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-400"
                  >
                    Trustpilot
                  </a>
                </li>
                <li>
                  <a
                    href="https://developers.google.com/analytics/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-400"
                  >
                    Google Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="https://policies.google.com/technologies/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-400"
                  >
                    Google Adsense
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">4. Managing Cookies</h2>
              <p className="mt-3">
                You can control or delete cookies using your browser settings.
                Most browsers allow you to block or remove cookies entirely,
                though some features of the Services may not function properly
                if cookies are disabled.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">5. Your Consent</h2>
              <p className="mt-3">
                By continuing to use our Services, you consent to our use of
                cookies as described in this policy. You may withdraw consent at
                any time by adjusting your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                6. Updates to This Cookie Policy
              </h2>
              <p className="mt-3">
                We may update this Cookie Policy from time to time. Updates will
                be posted on this page with a revised “Last Updated” date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">7. Contact</h2>
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

          <LegalFooter date="March 2026" />
        </div>
      </section>
    </main>
  );
}
