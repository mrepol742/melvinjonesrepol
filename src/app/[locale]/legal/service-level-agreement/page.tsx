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
  const title = "Service Level Agreement - Melvin Jones Repol";
  const description =
    "Service levels for development, hosting, monitoring, maintenance, security, incident communications, and client support provided by Melvin Jones Repol.";

  return {
    title,
    description,
    alternates: getAlternates("/legal/service-level-agreement", locale),
    openGraph: {
      title,
      description,
      url: "https://www.melvinjonesrepol.com/legal/service-level-agreement",
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

export default function ServiceLevelAgreement() {
  return (
    <>
      <Header
        title={
          <>
            Service
            <br />
            <span className="homepage-accent">level</span>
            <br />
            agreement.
          </>
        }
        intro="Service commitments for client development, hosted systems, monitoring, maintenance, security, availability, and communications."
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
              This Service Level Agreement (“SLA”) governs development, hosting,
              monitoring, maintenance, and support services provided by Melvin
              Jones Repol (“Developer,” “we,” “us,” or “our”) to the purchasing
              individual or organization (“Client”). It applies only to services
              identified in an accepted proposal, statement of work, order,
              invoice, or other written project agreement (“Service Order”).
            </p>

            <p>
              A Service Order may add to or change this SLA. If the documents
              conflict, the Service Order controls for project-specific scope,
              pricing, support, compliance, and service levels; this SLA
              controls for all other matters.
            </p>

            <div>
              <h2 className="text-2xl font-semibold">1. Covered Services</h2>
              <p className="mt-3">Services may include:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Website, web application, API, and backend development;</li>
                <li>Android application and browser-extension development;</li>
                <li>
                  Automation, migration, integration, and technical consulting;
                </li>
                <li>
                  Production hosting, maintenance, incident response, and
                  support;
                </li>
                <li>Production and staging monitoring where agreed; and</li>
                <li>
                  Other deliverables stated in the applicable Service Order.
                </li>
              </ul>
              <p className="mt-3">
                A service is not covered by the uptime commitment unless we
                manage or control its production deployment under an active paid
                hosting, maintenance, or support Service Order.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                2. Service Availability Commitment
              </h2>
              <p className="mt-3">
                We guarantee <strong>99.9% Monthly Uptime Percentage</strong>{" "}
                for each covered production system during a full calendar month.
                Staging, preview, local-development, demonstration, and
                acceptance-testing environments may be monitored but are not
                included in this guarantee unless the Service Order expressly
                says otherwise.
              </p>
              <p className="mt-3">
                “Monthly Uptime Percentage” means the total minutes in the month
                minus qualifying unavailable minutes, divided by the total
                minutes in the month, multiplied by 100. A system is unavailable
                when UptimeRobot confirms that the production endpoint cannot
                complete the configured availability check from its monitoring
                infrastructure. Partial degradation is counted only when the
                agreed core production function is materially unavailable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                3. Monitoring and Status Information
              </h2>
              <ul className="list-disc list-inside ml-4 mt-3 space-y-1">
                <li>
                  <strong>UptimeRobot</strong> is the monitoring backend for{" "}
                  <a
                    href="https://status.melvinjonesrepol.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-orange-600 dark:text-orange-400"
                  >
                    status.melvinjonesrepol.com
                  </a>{" "}
                  and records availability for covered project systems.
                </li>
                <li>
                  <strong>Sentry</strong> may monitor production and staging
                  systems for errors, performance issues, releases, and
                  diagnostic events. Sentry&apos;s applicable terms, privacy
                  policy, and data-processing terms apply to its services.
                </li>
                <li>
                  Public operational incidents and recovery updates are posted
                  to the status page when appropriate. Broader news may be
                  published at blog.melvinjonesrepol.com or delivered through an
                  opted-in newsletter.
                </li>
              </ul>
              <p className="mt-3">
                Monitoring tools may produce false positives, delayed results,
                or incomplete telemetry. We may corroborate automated records
                with server logs, provider records, and other reliable evidence.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                4. Availability Exclusions
              </h2>
              <p className="mt-3">
                Qualifying unavailable minutes exclude unavailability caused by:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>
                  Scheduled maintenance announced at least 48 hours in advance,
                  or emergency maintenance reasonably required for security or
                  stability;
                </li>
                <li>
                  Client systems, credentials, content, code changes, misuse,
                  delayed approvals, instructions, or failure to follow
                  documentation;
                </li>
                <li>
                  Third-party platforms, networks, APIs, DNS, registrars, cloud
                  services, or app stores outside our reasonable control;
                </li>
                <li>
                  Attacks, internet-wide failures, force majeure, legal orders,
                  or events that could not reasonably be prevented;
                </li>
                <li>
                  Suspension permitted by the agreement, including for
                  nonpayment or an urgent security risk; or
                </li>
                <li>
                  Beta, free, discontinued, staging, preview, or unsupported
                  services unless expressly covered by a Service Order.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                5. Incidents and Client Communications
              </h2>
              <ul className="list-disc list-inside ml-4 mt-3 space-y-1">
                <li>
                  We will investigate detected production incidents and use
                  commercially reasonable efforts to restore service promptly.
                </li>
                <li>
                  Material service incidents may be communicated through the
                  status page, with direct email updates to an affected Client
                  where appropriate.
                </li>
                <li>
                  During active development, the Client will receive an email
                  for each recorded project progress update, including completed
                  milestones, implementation changes, review requests, blockers,
                  deployment events, and delivery. Routine internal actions such
                  as individual commits, automated tests, and monitoring events
                  do not each require a separate email.
                </li>
                <li>
                  General release news may also appear on the blog or in the
                  newsletter, but public publication does not replace a required
                  direct Client notice.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                6. Security and SOC 2-Aligned Compliance
              </h2>
              <p className="mt-3">
                Unless a Service Order expressly excludes or modifies this
                requirement, we design and operate each covered system using
                controls aligned with the applicable AICPA SOC 2 Trust Services
                Criteria for security and, where relevant to the scope,
                availability, processing integrity, confidentiality, and
                privacy. Controls are selected according to the system&apos;s
                risks and may include access control, change management,
                logging, monitoring, vulnerability management, incident
                response, backups, and vendor oversight.
              </p>
              <p className="mt-3">
                In this SLA, “SOC 2-aligned compliance” is a contractual
                engineering and operational standard. It does not state or imply
                that the Developer or a Client system has completed an
                independent SOC 2 examination, holds a SOC 2 report, or is
                certified by the AICPA. SOC 2 is an attestation framework, not a
                product certification. Any representation about an independent
                audit must be separately documented and supported by the
                applicable auditor&apos;s report.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                7. GDPR, HIPAA, and Project-Specific Compliance
              </h2>
              <p className="mt-3">
                Legal and regulatory requirements are determined system by
                system. Where the GDPR applies, the Service Order will identify
                relevant controller and processor roles, instructions,
                safeguards, data-subject support, retention, subprocessors, and
                international-transfer mechanisms as necessary.
              </p>
              <p className="mt-3">
                HIPAA controls apply only when the Client discloses that a
                system will create, receive, maintain, or transmit protected
                health information, the parties expressly include HIPAA in the
                Service Order, and all required Business Associate Agreements
                are signed before that information is processed. The Client must
                not place protected health information in a system until we
                confirm in writing that the required environment, vendors,
                configuration, and agreements are in place.
              </p>
              <p className="mt-3">
                The Client remains responsible for identifying its industry,
                data, jurisdictions, retention duties, and legal requirements.
                We will implement requirements included in the agreed scope, but
                do not provide legal advice or guarantee that technical controls
                alone satisfy every obligation applicable to the Client.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                8. Data Processing and Observability Providers
              </h2>
              <p className="mt-3">
                Sentry may receive error details, stack traces, device or
                browser information, IP-derived information, release
                identifiers, and other configured diagnostic data. UptimeRobot
                sends monitoring requests and processes endpoint availability,
                response time, incident, and status-page data. The Client will
                avoid placing unnecessary personal or sensitive data in logs and
                will notify us of data that requires special handling.
              </p>
              <p className="mt-3">
                Use of these providers is subject to the{" "}
                <a
                  href="https://sentry.io/legal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-orange-600 dark:text-orange-400"
                >
                  Sentry legal terms
                </a>{" "}
                and the{" "}
                <a
                  href="https://uptimerobot.com/terms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-orange-600 dark:text-orange-400"
                >
                  UptimeRobot terms
                </a>
                , including their applicable privacy and data-processing terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                9. Client Responsibilities
              </h2>
              <ul className="list-disc list-inside ml-4 mt-3 space-y-1">
                <li>
                  Provide timely, accurate requirements, content, access, and
                  approvals.
                </li>
                <li>
                  Protect accounts, credentials, API keys, and recovery methods.
                </li>
                <li>
                  Use supported configurations and follow deployment
                  documentation.
                </li>
                <li>
                  Promptly report suspected incidents, defects, and material
                  changes to legal or compliance requirements.
                </li>
                <li>
                  Maintain licenses and accounts that the Service Order assigns
                  to the Client, including app-store and third-party accounts.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                10. Development, Acceptance, and Changes
              </h2>
              <p className="mt-3">
                Scope, milestones, acceptance criteria, delivery dates, included
                revisions, and fees are defined in the Service Order. The Client
                will review each deliverable within the stated review period or,
                if none is stated, within 10 business days. A material change to
                requirements, risk, compliance, or architecture may require a
                written change order, revised fee, or revised schedule.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                11. Fees, Suspension, and Termination
              </h2>
              <p className="mt-3">
                Payment schedules may include deposits, milestones, hourly fees,
                or monthly recurring fees. We may pause work or suspend a
                covered service for overdue payment, unlawful use, or an urgent
                security risk after notice where reasonably practicable. Either
                party may terminate as allowed by the Service Order. Earned
                fees, accrued obligations, confidentiality, ownership,
                limitations, and other provisions intended to survive will
                remain effective.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                12. Ownership and Confidentiality
              </h2>
              <p className="mt-3">
                Upon full payment, the Client owns the bespoke final
                deliverables identified for transfer in the Service Order. We
                retain ownership of pre-existing materials, general know-how,
                reusable tools, frameworks, and components, subject to the
                licenses provided to the Client. Each party will protect the
                other&apos;s non-public information and use it only for the
                engagement or as required by law. We will not publicly identify
                or display a Client project without permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                13. Warranties and Liability
              </h2>
              <p className="mt-3">
                We warrant that professional services will be performed with
                reasonable care and skill. Except for the express commitments in
                this SLA and a Service Order, services are provided “as is” and
                “as available” to the maximum extent permitted by law. We do not
                guarantee business results, platform approval, perfect security,
                or error-free operation.
              </p>
              <p className="mt-3">
                To the maximum extent permitted by law, neither party is liable
                for indirect, incidental, special, punitive, or consequential
                loss, including lost profit or revenue. Our aggregate liability
                arising from a Service Order will not exceed fees paid under
                that Service Order during the six months before the event giving
                rise to the claim. This limitation does not apply where it would
                be unlawful or to liability that cannot legally be limited.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                14. Governing Law and Changes
              </h2>
              <p className="mt-3">
                This SLA is governed by the laws of the Republic of the
                Philippines, without limiting mandatory rights that apply under
                other law. Changes to an active Client&apos;s material
                commercial or service commitments require written agreement; a
                website update alone does not retroactively change a signed
                Service Order.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">15. Contact</h2>
              <p className="mt-3">
                Questions and incident reports may be sent through the{" "}
                <Link
                  href="/contact-me"
                  className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                >
                  contact form
                </Link>{" "}
                or the project email channel identified in the Service Order.
              </p>
            </div>
          </div>

          <LegalFooter date="October 2026" />
        </div>
      </section>
    </>
  );
}
