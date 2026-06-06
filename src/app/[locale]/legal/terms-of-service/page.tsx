import { getAlternates } from "@/components/common/metadata/Alternatives";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Melvin Jones Repol",
  description: "Terms of Service for melvinjonesrepol.com and related projects",
  alternates: getAlternates("/legal/terms-of-service"),
  openGraph: {
    title: "Terms of Service - Melvin Jones Repol",
    description:
      "Terms of Service for melvinjonesrepol.com and related projects",
    url: "https://www.melvinjonesrepol.com/legal/terms-of-service",
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
    <main>
      <section className="relative min-h-screen overflow-hidden border-b border-zinc-800">
        <div className="relative flex min-h-screen flex-col px-6 py-12 md:px-10">
          <div className="my-auto py-14">
            <h1 className="text-[14vw] sm:text-[10vw] lg:text-[7.5vw] font-black tracking-tighter leading-[0.85] mb-8">
              Terms
              <br />
              <span className="opacity-40">of</span>
              <br />
              service.
            </h1>

            <p
              className="max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              These Terms explain the rules for using Melvin Jones Repol /
              Webvium services, including the website, apps, extensions, and
              shortlink tools.
            </p>
          </div>

          <div
            className="border-t border-zinc-800 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div>
              <p className="text-4xl font-black">11</p>
              <p className="mt-1 text-sm text-zinc-400">Sections</p>
            </div>
            <div>
              <p className="text-4xl font-black">Active</p>
              <p className="mt-1 text-sm text-zinc-400">Current terms</p>
            </div>
            <div className="col-span-2 flex flex-wrap items-center gap-2">
              {["Usage", "Shortlink", "IP", "Liability", "Updates"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-400 px-3 py-1 text-xs text-zinc-400"
                  >
                    {item}
                  </span>
                ),
              )}
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
              These Terms of Service (“Terms”) govern your access to and use of
              the services operated by Melvin Jones Repol / Webvium (“we,” “us,”
              or “our”). By using the Services, you agree to these Terms.
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">1. Services Covered</h2>
                <ul className="list-disc list-inside ml-4 mt-3 space-y-1">
                  <li>Website (www.melvinjonesrepol.com)</li>
                  <li>Shortlink (go.melvinjonesrepol.com)</li>
                  <li>Webvium Browser (Android)</li>
                  <li>Webvium Launcher (Android)</li>
                  <li>Floating Console (Browser Extension)</li>
                  <li>Disable Ctrl+Shift+C (Browser Extension)</li>
                  <li>Awesome New Tab (Browser Extension)</li>
                  <li>Browser Storage Inspector (Browser Extension)</li>
                  <li>Webvium Adblocker (Browser Extension)</li>
                  <li>
                    Discontinued/Legacy Webvium Services (Beta, Dev, VPN,
                    Search)
                  </li>
                  <li>
                    Any related applications, tools, or services (the
                    “Services”)
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  2. Eligibility and Use
                </h2>
                <ul className="list-disc list-inside ml-4 mt-3 space-y-1">
                  <li>You must use the Services lawfully and responsibly.</li>
                  <li>You may not interfere with or disrupt the Services.</li>
                  <li>
                    You are responsible for the permissions you grant to
                    websites in Webvium Browser (camera, microphone, location,
                    storage, etc.).
                  </li>
                  <li>
                    You must comply with third-party website or service terms
                    when accessing them through our Services.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  3. Shortlink Service Terms
                </h2>
                <ul className="list-disc list-inside ml-4 mt-3 space-y-1">
                  <li>
                    You may use the Shortlink service only for lawful purposes.
                  </li>
                  <li>
                    You must not use it for spam, phishing, malware
                    distribution, or other abusive or illegal activity.
                  </li>
                  <li>
                    You are solely responsible for the links you submit,
                    shorten, or share and must ensure they do not violate laws
                    or third-party rights.
                  </li>
                  <li>
                    We may suspend or remove links or access to the service at
                    any time for violations of these Terms.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  4. Third-Party Services
                </h2>
                <p className="mt-3">
                  Some Services integrate or interact with third-party providers
                  (e.g., Google, Trustpilot, Algolia, Vercel). Those services
                  are governed by their own terms and policies, and we are not
                  responsible for their practices or content.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  5. Feedback and User Content
                </h2>
                <p className="mt-3">
                  If you submit feedback or other content, you grant us a
                  worldwide, non-exclusive, royalty-free license to use it for
                  improving the Services. You confirm you have the right to
                  submit the content and it does not infringe third-party
                  rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  6. Intellectual Property
                </h2>
                <p className="mt-3">
                  The Services, including branding and content, are owned by
                  Melvin Jones Repol / Webvium unless otherwise stated. Some
                  source code may be open-source and governed by its applicable
                  license.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  7. Discontinued/Legacy Services
                </h2>
                <p className="mt-3">
                  Discontinued services (including Webvium VPN, Beta/Dev builds,
                  and Webvium Search) are provided “as is,” without support or
                  updates. Use is at your own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  8. Disclaimer of Warranties
                </h2>
                <p className="mt-3">
                  The Services are provided “as is” and “as available.” We make
                  no warranties of any kind, express or implied, regarding
                  reliability, availability, or fitness for a particular
                  purpose.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  9. Limitation of Liability
                </h2>
                <p className="mt-3">
                  To the maximum extent permitted by law, we are not liable for
                  any indirect, incidental, special, consequential, or punitive
                  damages arising from your use of the Services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  10. Changes to These Terms
                </h2>
                <p className="mt-3">
                  We may update these Terms from time to time. Continued use of
                  the Services after changes means you accept the updated Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">11. Contact</h2>
                <p className="mt-3">
                  Questions about these Terms of Service can be sent via the{" "}
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
