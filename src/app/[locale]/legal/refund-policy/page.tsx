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
    title: "Refund Policy - Melvin Jones Repol",
    description:
      "Read our Refund Policy for software development services, digital products, and custom solutions provided by Melvin Jones Repol.",
    alternates: getAlternates("/legal/refund-policy", locale),
    openGraph: {
      title: "Refund Policy - Melvin Jones Repol",
      description:
        "Read our Refund Policy for software development services, digital products, and custom solutions provided by Melvin Jones Repol.",
      url: "https://www.melvinjonesrepol.com/legal/refund-policy",
      siteName: "Melvin Jones Repol",
      images: [
        {
          url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
          width: 1200,
          height: 630,
          alt: "Refund Policy Cover",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Refund Policy - Melvin Jones Repol",
      description:
        "Read our Refund Policy for software development services, digital products, and custom solutions provided by Melvin Jones Repol.",
      images: [
        "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
      ],
      creator: "@mrepol742",
    },
  };
}

export default function RefundPolicy() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden border-b border-zinc-800">
        <div className="relative flex min-h-screen flex-col px-6 py-12 md:px-10">
          <div className="my-auto py-14">
            <h1 className="text-[14vw] sm:text-[10vw] lg:text-[7.5vw] font-black tracking-tighter leading-[0.85] mb-8">
              Refund
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
              Learn how refunds are handled for custom software, websites,
              applications, APIs, consulting services, and other digital
              products provided by Melvin Jones Repol.
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
              {[
                "No Refund",
                "Digital Services",
                "Custom Software",
                "Deliverables",
              ].map((item) => (
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
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest opacity-50 mb-1">
                Last Updated
              </p>
              <p className="text-sm font-medium">July 24, 2026</p>
            </div>

            <p>
              This Refund Policy applies to all software, websites, mobile
              applications, APIs, digital products, automation systems,
              integrations, consulting services, maintenance services, and
              related deliverables ("Services") provided by Melvin Jones Repol.
              By purchasing any Service, you acknowledge that you have read,
              understood, and agreed to this Refund Policy.
            </p>

            <div>
              <h2 className="text-2xl font-semibold">Quick Summary</h2>

              <ul className="list-disc list-inside ml-4 mt-3 space-y-1">
                <li>
                  We operate under a strict <strong>No Refund Policy</strong>.
                </li>

                <li>
                  Refunds are only considered when a contracted module or
                  milestone has not been completed by the agreed delivery date.
                </li>

                <li>
                  Approved refunds are calculated only for the unfinished
                  portion of the project.
                </li>

                <li>
                  Delivered work is considered accepted and is not refundable.
                </li>

                <li>
                  Software is provided <strong>"AS IS"</strong> without any
                  warranty of uninterrupted or error-free operation.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Policy Coverage</h2>

              <ul className="list-disc list-inside ml-4 mt-3 space-y-1">
                <li>
                  <Link href="#general">Custom Software Development</Link>
                </li>

                <li>
                  <Link href="#general">Websites & Web Applications</Link>
                </li>

                <li>
                  <Link href="#general">Mobile Applications</Link>
                </li>

                <li>
                  <Link href="#general">APIs & Backend Services</Link>
                </li>

                <li>
                  <Link href="#general">Desktop Applications</Link>
                </li>

                <li>
                  <Link href="#general">UI / UX Design Deliverables</Link>
                </li>

                <li>
                  <Link href="#general">Automation Systems</Link>
                </li>

                <li>
                  <Link href="#general">Digital Products</Link>
                </li>

                <li>
                  <Link href="#general">Technical Consulting</Link>
                </li>

                <li>
                  Any related software, digital products, documentation,
                  integrations, support, or services.
                </li>
              </ul>
            </div>

            <div id="general">
              <h2 className="text-2xl font-semibold">
                1. General No Refund Policy
              </h2>

              <p className="mt-3">
                All payments made for our Services are final and non-refundable
                unless expressly stated otherwise in this policy. Software
                development is a labor-intensive professional service involving
                planning, engineering, architecture, testing, consultation, and
                implementation that cannot be reversed once work has commenced.
              </p>

              <p className="mt-4">
                Accordingly, payments compensate the time, expertise, and
                professional services rendered, not merely the final software
                product. Because these services cannot be returned after they
                have been performed, refunds are generally unavailable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                2. Limited Refund Exception
              </h2>

              <p className="mt-3">
                The only circumstance under which a refund may be considered is
                when a contracted milestone, feature, or module is not completed
                by the agreed delivery date and the delay is solely attributable
                to us.
              </p>

              <ul className="list-disc list-inside ml-4 mt-4 space-y-2">
                <li>
                  Refunds apply only to the unfinished module or milestone.
                </li>

                <li>Completed deliverables remain fully billable.</li>

                <li>
                  Refund calculations are proportional to the value of the
                  incomplete work.
                </li>

                <li>
                  Work already delivered, reviewed, or accepted is excluded from
                  any refund calculation.
                </li>

                <li>
                  No refund shall exceed the value of the unfinished portion of
                  the contract.
                </li>
              </ul>

              <div className="mt-6 border-l-2 border-zinc-700 pl-5">
                <p className="font-semibold">Example</p>

                <p className="mt-2 text-zinc-400">
                  A project consisting of four equally valued modules where
                  three have already been delivered would only be eligible for a
                  refund equivalent to the remaining unfinished module (25%),
                  subject to review.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                3. No Refund After Delivery
              </h2>

              <p className="mt-3">
                Once a milestone, module, feature, or project has been delivered
                in accordance with the agreed specifications, it is deemed
                completed and accepted unless otherwise agreed in writing.
              </p>

              <p className="mt-4">
                Refunds will not be issued simply because the Client changes
                their mind, business objectives, technical preferences, or
                decides not to use the delivered software.
              </p>

              <p className="mt-4">
                Acceptance may be demonstrated by deployment, installation,
                production use, written approval, payment of subsequent
                milestones, or failure to report material contractual defects
                within a reasonable review period.
              </p>

              <ul className="list-disc list-inside ml-4 mt-5 space-y-2">
                <li>The Client no longer requires the software.</li>
                <li>The Client changes business direction.</li>
                <li>The Client purchases another software solution.</li>
                <li>The Client changes design preferences.</li>
                <li>
                  The Client requests additional features not included in the
                  original scope.
                </li>
                <li>
                  The software meets the agreed specifications but does not
                  match personal expectations.
                </li>
                <li>
                  The Client fails to use or deploy the delivered software.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                4. Software Provided "AS IS"
              </h2>

              <p className="mt-3">
                Unless otherwise agreed in a separate written contract, every
                software product, application, website, API, automation system,
                integration, script, library, package, and digital deliverable
                is supplied on an <strong>"AS IS"</strong> and
                <strong> "AS AVAILABLE"</strong> basis.
              </p>

              <p className="mt-4">
                While reasonable care is taken during development and testing,
                software is inherently complex and may contain bugs,
                incompatibilities, limitations, or unforeseen behavior depending
                on hardware, operating systems, browsers, third-party services,
                user configuration, or future technology changes.
              </p>

              <p className="mt-4">
                To the fullest extent permitted by applicable law, we disclaim
                all warranties, whether express or implied, including but not
                limited to warranties of merchantability, fitness for a
                particular purpose, uninterrupted availability,
                non-infringement, compatibility, or error-free operation.
              </p>

              <ul className="list-disc list-inside ml-4 mt-5 space-y-2">
                <li>No guarantee that the software will be bug-free.</li>
                <li>No guarantee of uninterrupted availability.</li>
                <li>No guarantee of compatibility with every environment.</li>
                <li>
                  No guarantee that future platform updates will not affect
                  functionality.
                </li>
                <li>
                  No guarantee that third-party integrations will remain
                  available indefinitely.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                5. No Refund for Software Failures
              </h2>

              <p className="mt-3">
                Because software is provided "AS IS", refunds will not be issued
                solely because the software experiences bugs, technical issues,
                compatibility problems, or operational limitations after
                delivery.
              </p>

              <p className="mt-4">
                Unless covered under an active maintenance agreement, future bug
                fixes, enhancements, security updates, compatibility updates,
                optimizations, or feature requests are considered separate work.
              </p>

              <ul className="list-disc list-inside ml-4 mt-5 space-y-2">
                <li>Software bugs or defects.</li>
                <li>Application crashes.</li>
                <li>Performance degradation.</li>
                <li>Operating system updates.</li>
                <li>Browser updates.</li>
                <li>Mobile platform updates.</li>
                <li>Device incompatibilities.</li>
                <li>Database corruption caused by external factors.</li>
                <li>Server configuration errors.</li>
                <li>Client modifications.</li>
                <li>Security incidents beyond our control.</li>
                <li>Future technology changes.</li>
                <li>End-of-life software platforms.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                6. No Maintenance or Support Subscription
              </h2>

              <p className="mt-3">
                Unless expressly stated in a separate written maintenance or
                support agreement, the purchase price covers only the agreed
                development and delivery of the contracted software.
              </p>

              <p className="mt-4">
                It does not include continuous maintenance, software support,
                future feature development, security patches, compatibility
                updates, or ongoing technical assistance.
              </p>

              <p className="mt-4">
                The absence of an active maintenance subscription does not
                constitute grounds for refunds, partial refunds, credits, or
                cancellation of previously completed work.
              </p>

              <ul className="list-disc list-inside ml-4 mt-5 space-y-2">
                <li>Bug fixing after project completion.</li>
                <li>Feature enhancements.</li>
                <li>Performance optimization.</li>
                <li>Server administration.</li>
                <li>Infrastructure monitoring.</li>
                <li>Database maintenance.</li>
                <li>Cloud infrastructure management.</li>
                <li>API version migrations.</li>
                <li>Operating system compatibility updates.</li>
                <li>Browser compatibility updates.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                7. Third-Party Services
              </h2>

              <p className="mt-3">
                Many software solutions depend upon independent third-party
                providers. These providers operate outside our control and may
                modify, suspend, discontinue, restrict, or terminate their
                services at any time.
              </p>

              <p className="mt-4">
                We are not responsible for interruptions, failures, policy
                changes, pricing changes, outages, account suspensions, API
                changes, regional restrictions, or discontinuation of any
                third-party provider.
              </p>

              <p className="mt-4 font-medium">
                Accordingly, no refund shall be issued for issues resulting from
                third-party services, including but not limited to:
              </p>

              <ul className="list-disc list-inside ml-4 mt-5 space-y-2">
                <li>Amazon Web Services (AWS)</li>
                <li>Cloudflare</li>
                <li>Google Cloud Platform</li>
                <li>Microsoft Azure</li>
                <li>DigitalOcean</li>
                <li>Linode</li>
                <li>Vercel</li>
                <li>Netlify</li>
                <li>GitHub</li>
                <li>Supabase</li>
                <li>Firebase</li>
                <li>MongoDB Atlas</li>
                <li>Twilio</li>
                <li>Stripe</li>
                <li>PayPal</li>
                <li>Xendit</li>
                <li>Paystack</li>
                <li>OpenAI</li>
                <li>Anthropic</li>
                <li>Google APIs</li>
                <li>Meta APIs</li>
                <li>Apple Developer Services</li>
                <li>Google Play Services</li>
                <li>
                  Any payment gateway, cloud platform, API provider, CDN, DNS
                  provider, hosting provider, AI provider, analytics provider,
                  or similar third-party infrastructure.
                </li>
              </ul>

              <p className="mt-5">
                This includes outages, service interruptions, rate limits,
                service deprecations, API changes, billing disputes, suspended
                accounts, infrastructure failures, or any event outside our
                reasonable control.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                8. Client Responsibilities
              </h2>

              <p className="mt-3">
                The Client is responsible for providing complete, accurate, and
                timely information necessary for the successful completion of
                the project. Delays or failures resulting from missing
                requirements, inaccurate specifications, or untimely responses
                shall not constitute grounds for refunds.
              </p>

              <p className="mt-4">
                The Client further acknowledges that unauthorized modifications,
                deployments, server changes, or third-party alterations
                performed after delivery may affect the software's operation. We
                shall not be liable for issues arising from such actions.
              </p>

              <ul className="list-disc list-inside ml-4 mt-5 space-y-2">
                <li>Failure to provide required project materials.</li>
                <li>Delayed approvals or prolonged inactivity.</li>
                <li>Changing project requirements after development begins.</li>
                <li>Supplying inaccurate or incomplete specifications.</li>
                <li>Unauthorized modification of the software.</li>
                <li>Deployment on unsupported infrastructure.</li>
                <li>
                  Failure to follow installation or deployment instructions.
                </li>
                <li>Improper configuration of hosting environments.</li>
                <li>Loss of data caused by the Client or third parties.</li>
              </ul>

              <p className="mt-5">
                Any work required to resolve issues resulting from the above may
                be quoted separately and does not qualify for refunds.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">9. Force Majeure</h2>

              <p className="mt-3">
                We shall not be liable for delays, interruptions, or inability
                to perform our obligations where such events are beyond our
                reasonable control.
              </p>

              <p className="mt-4">
                These events include, but are not limited to:
              </p>

              <ul className="list-disc list-inside ml-4 mt-5 space-y-2">
                <li>Natural disasters.</li>
                <li>Floods, earthquakes, or severe weather.</li>
                <li>Fire or power outages.</li>
                <li>Internet infrastructure failures.</li>
                <li>Government actions or legal restrictions.</li>
                <li>War or armed conflict.</li>
                <li>Terrorism or civil unrest.</li>
                <li>Pandemics or public health emergencies.</li>
                <li>Cyberattacks or widespread security incidents.</li>
                <li>Labor disputes.</li>
                <li>Third-party cloud provider failures.</li>
                <li>Global infrastructure outages.</li>
              </ul>

              <p className="mt-5">
                No refund, credit, or compensation shall be owed where delays or
                inability to deliver arise from such events.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                10. Chargebacks, Payment Disputes & Contact
              </h2>

              <p className="mt-3">
                Before initiating any chargeback, payment dispute, or payment
                reversal through a bank, credit card provider, payment gateway,
                or financial institution, Clients agree to first contact us and
                provide a reasonable opportunity to investigate and resolve the
                issue in good faith.
              </p>

              <p className="mt-4">
                Initiating a fraudulent or unjustified chargeback for completed
                work may constitute a breach of contract. We reserve all rights
                to contest such disputes and provide supporting documentation,
                including contracts, invoices, project records, source code
                commits, communication logs, deployment records, and delivery
                confirmations.
              </p>

              <p className="mt-4">
                This Refund Policy shall be interpreted together with our Terms
                and Conditions and any written project agreement executed
                between both parties. If any provision of this policy is found
                to be invalid or unenforceable, the remaining provisions shall
                continue in full force and effect.
              </p>

              <p className="mt-5">
                Questions regarding this Refund Policy may be submitted through
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

          <LegalFooter date="July 2026" />
        </div>
      </section>
    </main>
  );
}
