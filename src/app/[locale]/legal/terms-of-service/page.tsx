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
    title: "Terms of Service - Melvin Jones Repol & Webvium",
    description:
      "Terms of Service for melvinjonesrepol.com, webvium.com, and related applications, browser extensions, and services operated by Melvin Jones Repol.",
    alternates: getAlternates("/legal/terms-of-service", locale),
    openGraph: {
      title: "Terms of Service - Melvin Jones Repol & Webvium",
      description:
        "Terms of Service for melvinjonesrepol.com, webvium.com, and related applications, browser extensions, and services operated by Melvin Jones Repol.",
      url: "https://www.melvinjonesrepol.com/legal/terms-of-service",
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
      title: "Terms of Service - Melvin Jones Repol & Webvium",
      description:
        "Terms of Service for melvinjonesrepol.com, webvium.com, and related applications, browser extensions, and services operated by Melvin Jones Repol.",
      images: [
        "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
      ],
      creator: "@mrepol742",
    },
  };
}

export default function Terms() {
  return (
    <>
      <Header
        title={
          <>
            Terms
            <br />
            <span className="homepage-accent">of</span>
            <br />
            service.
          </>
        }
        intro="These Terms explain the rules for using Melvin Jones Repol / Webvium services, including the websites, apps, extensions, and shortlink tools."
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
              These Terms of Service (“Terms”) govern your access to and use of
              the websites, applications, browser extensions, tools, and other
              services operated under the Melvin Jones Repol and Webvium names.
              The domains <strong>melvinjonesrepol.com</strong> and{" "}
              <strong>webvium.com</strong> are operated and maintained by the
              same individual. By using any of these Services, you agree to
              these Terms.
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">1. Services Covered</h2>
                <ul className="list-disc list-inside ml-4 mt-3 space-y-1">
                  <li>Website (www.melvinjonesrepol.com)</li>
                  <li>Webvium Website (www.webvium.com)</li>
                  <li>Tools (tools.melvinjonesrepol.com)</li>
                  <li>Blog (blog.melvinjonesrepol.com)</li>
                  <li>Status (status.melvinjonesrepol.com)</li>
                  <li>WakaTime statistics (stats.melvinjonesrepol.com)</li>
                  <li>Web Designs (web-designs.melvinjonesrepol.com)</li>
                  <li>Shrtly (shrtly.melvinjonesrepol.com)</li>
                  <li>Webvium Browser (Android)</li>
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
                    Any related applications, tools, websites, or services
                    operated or published under the Melvin Jones Repol or
                    Webvium names (the “Services”)
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
                  <li>
                    You must not use the Services to distribute malware, conduct
                    phishing, abuse infrastructure, or engage in other unlawful
                    activity.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  3. Official App Distribution
                </h2>
                <p className="mt-3">
                  Webvium and any other application released by Melvin Jones
                  Repol may be downloaded only from its official listing on the
                  Google Play Store, Uptodown.com, or another distributor that
                  we have expressly authorized. A link or copy on an unrelated
                  site does not make that source authorized.
                </p>
                <ul className="list-disc list-inside ml-4 mt-3 space-y-1">
                  <li>
                    Do not redistribute, mirror, repackage, modify, sign, sell,
                    or present an application as official without our prior
                    written authorization or an applicable open-source license.
                  </li>
                  <li>
                    We are not responsible for altered, counterfeit, outdated,
                    or malicious copies obtained from unauthorized sources.
                  </li>
                  <li>
                    Google Play, Uptodown, and any authorized third-party store
                    have their own terms, privacy practices, availability rules,
                    and update mechanisms, which also apply to your use of their
                    platform.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  4. Shortlink Service Terms
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
                  5. Communications and Newsletters
                </h2>
                <p className="mt-3">
                  Contact forms and newsletters for melvinjonesrepol.com and
                  webvium.com are delivered through Resend. When you submit a
                  form, you authorize us and Resend to process the information
                  needed to deliver and respond to it. Newsletter subscription
                  is optional, and you may unsubscribe at any time. You must not
                  use a form to send unlawful, abusive, malicious, deceptive, or
                  rights-infringing material.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  6. Blog and Cloudflare Services
                </h2>
                <p className="mt-3">
                  blog.melvinjonesrepol.com is powered by the Cloudflare EmDash
                  CMS and hosted on Cloudflare Workers. Your use of the blog is
                  governed by these Terms. Cloudflare&apos;s applicable terms
                  and policies govern its infrastructure and any direct
                  interaction you have with Cloudflare services. Blog posts are
                  provided for general informational purposes and are not
                  professional legal, medical, financial, or security advice.
                </p>
                <p className="mt-3">
                  See the{" "}
                  <a
                    href="https://www.cloudflare.com/terms/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-orange-600 dark:text-orange-400"
                  >
                    Cloudflare terms
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.cloudflare.com/privacypolicy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-orange-600 dark:text-orange-400"
                  >
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  7. Third-Party Services
                </h2>
                <p className="mt-3">
                  Some Services integrate or interact with third-party providers
                  such as Resend, Cloudflare, Google, Uptodown, Trustpilot,
                  Algolia, Vercel, GitHub, Microsoft, WakaTime, Sentry,
                  UptimeRobot, and other third-party services. Sentry may provide
                  production or staging observability, while UptimeRobot backs
                  status.melvinjonesrepol.com and performs project availability
                  monitoring. Those services are governed by their own terms and
                  policies. To the extent permitted by law, we are not responsible
                  for their independent practices, availability, or content.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  8. Feedback and User Content
                </h2>
                <p className="mt-3">
                  If you submit feedback, suggestions, reports, or other content
                  to us, you grant us a worldwide, non-exclusive, royalty-free
                  license to use, reproduce, and modify that content only as
                  reasonably needed to respond to you and to operate, maintain,
                  secure, or improve the Services. You confirm that you have the
                  right to submit the content and that it does not infringe the
                  rights of any third party.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  9. Intellectual Property
                </h2>
                <p className="mt-3">
                  The Services, including their branding, names, logos,
                  interfaces, original content, and other materials, are owned
                  by or operated under the authorization of Melvin Jones Repol
                  unless otherwise stated. Webvium is a project and product
                  identity operated by Melvin Jones Repol and does not
                  constitute a separate legal entity unless expressly stated
                  otherwise.
                </p>
                <p className="mt-3">
                  Some source code, libraries, assets, or other components may
                  be open-source or provided by third parties and are governed
                  by their respective licenses.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">10. Advertising</h2>
                <p className="mt-3">
                  www.melvinjonesrepol.com has not served advertising since
                  October 1, 2026. This does not mean that third-party sites,
                  stores, embedded content, or other independently operated
                  platforms are ad-free; their own terms and advertising
                  practices apply.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  11. Discontinued/Legacy Services
                </h2>
                <p className="mt-3">
                  Discontinued services, including Webvium VPN, Beta/Dev builds,
                  and Webvium Search, are no longer actively maintained or
                  supported. Such services are provided “as is” and “as
                  available,” without guarantees of updates, availability,
                  compatibility, security, or continued operation. Use of
                  discontinued services is at your own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  12. Disclaimer of Warranties
                </h2>
                <p className="mt-3">
                  The Services are provided “as is” and “as available.” To the
                  maximum extent permitted by law, we make no warranties of any
                  kind, express or implied, regarding the reliability,
                  availability, accuracy, security, compatibility, or fitness of
                  the Services for a particular purpose.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  13. Limitation of Liability
                </h2>
                <p className="mt-3">
                  To the maximum extent permitted by law, Melvin Jones Repol
                  shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages, or for any loss of data,
                  revenue, profits, or access arising from or related to your
                  use of or inability to use the Services. These exclusions do
                  not apply to liability or remedies that cannot be excluded or
                  limited under applicable law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  14. Suspension and Termination
                </h2>
                <p className="mt-3">
                  We may restrict or terminate access to a Service where
                  reasonably necessary to address abuse, security risk, legal
                  requirements, operational changes, or a breach of these Terms.
                  You may stop using the Services at any time. Provisions that
                  by their nature should survive termination will remain
                  effective.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  15. Governing Law and Mandatory Rights
                </h2>
                <p className="mt-3">
                  These Terms are governed by the laws of the Republic of the
                  Philippines, without regard to conflict-of-law principles.
                  Applicable Philippine laws may include the Civil Code, the
                  Consumer Act of the Philippines, the Electronic Commerce Act,
                  the Data Privacy Act of 2012, and the Internet Transactions
                  Act of 2023, depending on the Service and transaction.
                </p>
                <p className="mt-3">
                  Courts with competent jurisdiction in the Philippines will
                  hear disputes, except where mandatory consumer or other law
                  gives you the right to bring a claim elsewhere. If the GDPR or
                  another mandatory law applies, nothing in these Terms removes
                  rights or remedies that cannot lawfully be waived. A
                  Service&apos;s mere accessibility from a country does not
                  necessarily mean that every law of that country applies or
                  that we direct the Service to that country.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  16. Changes to These Terms
                </h2>
                <p className="mt-3">
                  We may update these Terms from time to time. Updated Terms
                  will be posted on this page with a revised “Last Updated”
                  date. Your continued use of the Services after the updated
                  Terms become effective constitutes acceptance of the revised
                  Terms where permitted by law. If a material change requires
                  notice or consent, we will provide it as required.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">17. Contact</h2>
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

          <LegalFooter date="October 2026" />
        </div>
      </section>
    </>
  );
}
