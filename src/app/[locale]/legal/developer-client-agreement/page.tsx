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
    title: "Developer Client Agreement - Melvin Jones Repol",
    description:
      "Developer Client Agreement for services provided by Melvin Jones Repol.",
    alternates: getAlternates("/legal/developer-client-agreement", locale),
    openGraph: {
      title: "Developer Client Agreement - Melvin Jones Repol",
      description:
        "Developer Client Agreement for services provided by Melvin Jones Repol.",
      url: "https://www.melvinjonesrepol.com/legal/developer-client-agreement",
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
      title: "Developer Client Agreement - Melvin Jones Repol",
      description:
        "Developer Client Agreement for services provided by Melvin Jones Repol.",
      images: [
        "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
      ],
      creator: "@mrepol742",
    },
  };
}

export default function DeveloperClientAgreement() {
  return (
    <>
      <Header
        title={
          <>
            Developer
            <br />
            <span className="opacity-40">client</span>
            <br />
            agreement.
          </>
        }
        intro="This Developer Client Agreement outlines the terms and conditions for services provided by Melvin Jones Repol."
      />

      <section className="px-6 my-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="rp-8 md:p-10 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest opacity-50 mb-1">
                Last Updated
              </p>
              <p className="text-sm font-medium">March 12, 2026</p>
            </div>

            <p>
              This Developer Client Agreement (“Agreement”) governs the
              professional services provided by Melvin Jones Repol (“Developer”)
              to the individual or organization purchasing development services
              (“Client”).
            </p>

            <p>
              By purchasing services, commissioning a project, or entering into
              a development engagement with the Developer, the Client agrees to
              the terms outlined in this Agreement.
            </p>

            <div>
              <h2 className="text-2xl font-semibold">1. Scope of Services</h2>
              <p className="mt-3">
                The Developer provides freelance software development services
                which may include:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Website development</li>
                <li>Web application development</li>
                <li>Android application development</li>
                <li>Chrome extension development</li>
                <li>Software tools or automation scripts</li>
                <li>Website migration or redesign</li>
                <li>Technical consulting or development assistance</li>
                <li>Ongoing support or maintenance services</li>
              </ul>
              <p className="mt-3">
                The exact scope of work will be defined in the project proposal,
                invoice, written communication, or service listing associated
                with the Client’s request.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">2. Payment Terms</h2>
              <p className="mt-3">
                Development services may require partial or full payment before
                work begins. Payment terms may include:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Upfront deposits</li>
                <li>Milestone-based payments</li>
                <li>Final delivery payments</li>
                <li>Hourly billing for consulting or development assistance</li>
                <li>
                  Monthly retainer fees for ongoing support or maintenance
                </li>
              </ul>
              <p className="mt-3">
                Failure to complete agreed payments may result in delay,
                suspension or termination of the project.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                3. Long Milestones & Advance Payment
              </h2>
              <p className="mt-3">
                Some development milestones may involve complex engineering
                tasks, research, or extended implementation periods that may
                require several weeks or more than one month to complete.
              </p>
              <p className="mt-3">
                In such cases, the Developer reserves the right to request an
                advance payment or partial milestone payment before the
                milestone is fully completed.
              </p>
              <p className="mt-3">
                This advance payment helps ensure the Developer can continue
                dedicating time and resources to the project while maintaining
                normal living and operating expenses during long development
                periods.
              </p>
              <p className="mt-3">
                Any advance payments requested will be reasonable and
                proportionate to the progress or complexity of the milestone and
                will be communicated to the Client in advance.
              </p>
              <p className="mt-3">
                Work may be delayed or paused until the requested advance
                payment has been completed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                4. App Store and Platform Submission Responsibility
              </h2>
              <p className="mt-3">
                The Developer does not deploy Android APKs or other native
                applications using our own Google Play Store or Apple App Store
                developer accounts.
              </p>
              <p className="mt-3">
                Clients are responsible for creating and managing their own
                developer accounts and submitting their applications to the
                respective platforms.
              </p>
              <p className="mt-3">
                While we may provide guidance or assistance during the
                submission process, we are not responsible for managing the
                submission or for any issues, delays, or decisions that may
                occur during the review process conducted by the Google Play
                Store or Apple App Store.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">5. Legal & Compliance</h2>
              <p className="mt-3">
                The Developer is not responsible for any legal issues, including
                copyright infringement, intellectual property disputes, or
                violations of platform policies, that may arise from the
                content, design, or functionality of the applications or
                websites developed for the Client.
              </p>
              <p className="mt-3">
                The Client remains solely responsible for ensuring that their
                application, website, or service complies with applicable laws,
                platform policies, copyright and intellectual property rules,
                and required privacy policies and terms of service.
              </p>
              <p className="mt-3">
                The Developer may provide warnings or guidance regarding
                potential legal or policy concerns, but final responsibility
                remains with the Client.
              </p>
              <p className="mt-3">
                The Developer is not responsible for any issues related to
                political content included in client applications or websites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">6. Project Ownership</h2>
              <p className="mt-3">
                Upon full payment, the Client receives ownership of the final
                project deliverables, including source code or deployed
                applications where applicable.
              </p>
              <p className="mt-3">
                The Developer retains the right to reuse general programming
                techniques, non-proprietary components, frameworks, and
                development knowledge gained during the project.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                7. Privacy of Client Projects
              </h2>
              <p className="mt-3">
                The Developer respects the privacy and confidentiality of Client
                projects.
              </p>
              <p className="mt-3">
                Client projects will not be publicly displayed on the
                Developer’s portfolio, website, or social media without explicit
                permission from the Client.
              </p>
              <p className="mt-3">
                However, the Developer may reference completed work in a private
                professional curriculum vitae (CV) or resume for employment
                verification purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                8. Revisions and Modifications
              </h2>
              <p className="mt-3">
                Reasonable revisions may be included within the project scope.
                Major feature changes or additional development beyond the
                original scope may require additional fees or a revised
                agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                9. Limitation of Liability
              </h2>
              <p className="mt-3">
                The Developer provides services on an “as-is” basis and makes no
                guarantees regarding business outcomes, platform approvals, or
                performance results.
              </p>
              <p className="mt-3">
                Under no circumstances shall the Developer be liable for
                indirect, incidental, or consequential damages including loss of
                profits, business interruptions, or platform rejection
                decisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">10. Termination</h2>
              <p className="mt-3">
                Either party may terminate the project agreement if necessary.
                Payments already made may not be refundable if work has already
                been performed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">11. Governing Law</h2>
              <p className="mt-3">
                This Agreement shall be governed and interpreted in accordance
                with the laws of the Philippines.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">12. Contact</h2>
              <p className="mt-3">
                Questions about this Developer Client Agreement can be sent via
                the{" "}
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
    </>
  );
}
