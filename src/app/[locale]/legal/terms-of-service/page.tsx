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
            <span className="opacity-40">of</span>
            <br />
            service.
          </>
        }
        intro="These Terms explain the rules for using Melvin Jones Repol / Webvium services, including the websites, apps, extensions, and shortlink tools."
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
                  such as Google, Trustpilot, Algolia, Vercel, GitHub,
                  Microsoft, and other third-party services. Those services are
                  governed by their own terms and policies, and we are not
                  responsible for their practices, availability, or content.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  5. Feedback and User Content
                </h2>
                <p className="mt-3">
                  If you submit feedback, suggestions, reports, or other content
                  to us, you grant us a worldwide, non-exclusive, royalty-free
                  license to use, reproduce, modify, and use that content for
                  operating, maintaining, and improving the Services. You
                  confirm that you have the right to submit the content and that
                  it does not infringe the rights of any third party.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  6. Intellectual Property
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
                <h2 className="text-2xl font-semibold">
                  7. Discontinued/Legacy Services
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
                  8. Disclaimer of Warranties
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
                  9. Limitation of Liability
                </h2>
                <p className="mt-3">
                  To the maximum extent permitted by law, Melvin Jones Repol
                  shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages, or for any loss of data,
                  revenue, profits, or access arising from or related to your
                  use of or inability to use the Services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  10. Changes to These Terms
                </h2>
                <p className="mt-3">
                  We may update these Terms from time to time. Updated Terms
                  will be posted on this page with a revised “Last Updated”
                  date. Your continued use of the Services after the updated
                  Terms become effective constitutes acceptance of the revised
                  Terms.
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

          <LegalFooter date="September 2026" />
        </div>
      </section>
    </>
  );
}
