import { Metadata } from "next";
import Link from "next/link";
import { getAlternates } from "@/components/common/metadata/Alternatives";
import Card from "@/components/ui/Card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Case Studies - Melvin Jones Repol",
    description:
      "Selected engineering case studies covering rewrites, architecture decisions, cost tradeoffs, and practical lessons from production-minded software work.",
    alternates: getAlternates("/case-studies", locale),
    openGraph: {
      title: "Case Studies - Melvin Jones Repol",
      description:
        "Selected engineering case studies covering rewrites, architecture decisions, cost tradeoffs, and practical lessons from production-minded software work.",
      url: "https://www.melvinjonesrepol.com/case-studies",
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
      title: "Case Studies - Melvin Jones Repol",
      description:
        "Selected engineering case studies covering rewrites, architecture decisions, cost tradeoffs, and practical lessons from production-minded software work.",
      images: [
        "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
      ],
      creator: "@mrepol742",
    },
  };
}

const caseStudies = [
  {
    title: "Building a browser from scratch even AI will refused to do it",
    label: "Engineering Journey",
    summary:
      "Webvium Browser started as a personal challenge to build a lightweight Android browser entirely from scratch. Instead of relying on third party libraries, the goal was to understand every layer of the application while creating something that was fast, private, and efficient.",
    sections: [
      {
        heading: "Context",
        body: "In the early days of learning Android development, I wanted to build more than a simple practice application. Existing browsers felt heavy on low end devices, so I challenged myself to create one using only Java and the Android SDK with zero external dependencies. The objective was simple: build a browser that stayed lightweight without sacrificing usability or privacy.",
      },
      {
        heading: "Decision",
        body: "Rather than taking shortcuts with frameworks, I built the browser from the ground up. Every optimization came from understanding the platform itself, reducing unnecessary code, simplifying layouts, and continuously refining the architecture until the application became significantly smaller while remaining feature complete.",
      },
      {
        heading: "Reasoning",
        body: "Building software from first principles teaches lessons that libraries often hide. Every kilobyte mattered because smaller applications install faster, consume fewer resources, and perform better on budget devices. The project became less about creating another browser and more about learning software engineering through real engineering constraints.",
      },
      {
        heading: "Takeaway",
        body: "Webvium proved that meaningful engineering is not always about adding more technology. Sometimes the best solution comes from understanding the fundamentals deeply enough to build only what is necessary, resulting in software that is faster, easier to maintain, and genuinely respects the user's device and privacy.",
      },
    ],
  },
  {
    title: "When a rewrite was the honest fix",
    label: "Architecture Decision",
    summary:
      "A slow website came in for performance help, but the real issue was not a missing optimization. The system had already become fragile enough that patching one bottleneck would likely expose two more.",
    sections: [
      {
        heading: "Context",
        body: "The request looked simple on the surface: improve a slow website. After reviewing the situation, the better answer was not to keep stacking fixes on a weak foundation.",
      },
      {
        heading: "Decision",
        body: "I said no to surface-level patching and made it clear that I would only take the work if the system was rewritten in Laravel. That was not about framework preference for its own sake. It was about replacing a setup that had already become difficult to trust.",
      },
      {
        heading: "Reasoning",
        body: "A patch can feel cheaper in the moment, but some systems are already structured in a way that turns every fix into another future liability. In those situations, small repairs become a slow-motion rewrite anyway, just with worse reliability along the way.",
      },
      {
        heading: "Takeaway",
        body: "One of the most important engineering judgments is knowing when maintenance is responsible and when it is just delaying a larger correction.",
      },
    ],
  },
  {
    title: "The hype gap in Next.js plus Supabase",
    label: "Cost and Operations",
    summary:
      "The stack looks fast and modern during the early phase, but some projects start to behave very differently once traffic patterns, SSR behavior, database usage, and production cost become real.",
    sections: [
      {
        heading: "Context",
        body: "Next.js with Supabase can be appealing because it lowers setup friction and makes it easy to move quickly at the start. For the right product, that is useful. But once the project starts growing, the practical tradeoffs become much less friendly.",
      },
      {
        heading: "Observed friction",
        body: "Database cost, latency, operational limits, and migration flexibility become harder conversations. Supabase at around twenty-five dollars a month is not the main problem by itself. The deeper issue is when the architecture starts pushing you into patterns that are harder to reason about and harder to move away from cleanly.",
      },
      {
        heading: "SSR reality",
        body: "Improper SSR patterns in Next.js can quietly turn into higher-cost operations and avoidable infrastructure waste. A stack can be technically impressive while still being the wrong economic choice for a product that needs predictable cost and simpler maintenance.",
      },
      {
        heading: "Takeaway",
        body: "Cool stacks are not automatically efficient stacks. The right question is not whether a tool is modern. It is whether the tool stays operationally sane after success arrives.",
      },
    ],
  },
  {
    title: "Why Ulisha Store uses Laravel plus React",
    label: "Deliberate Hybrid",
    summary:
      "Instead of forcing one stack everywhere, the architecture separates responsibilities: Laravel for storefront and API work, React for the user, vendor, and admin SPA surfaces.",
    sections: [
      {
        heading: "Context",
        body: "I do not treat Laravel as the answer to everything. The point is to use tools where they make sense. In Ulisha Store, the goal was to keep the core platform stable while preserving a responsive application experience for the operational dashboards.",
      },
      {
        heading: "Architecture",
        body: "Laravel handles the storefront and API responsibilities, while React is used for the user, vendor, and admin SPA interfaces. That split keeps backend concerns grounded while allowing richer interaction where it actually matters.",
      },
      {
        heading: "Why this matters",
        body: "This approach avoids forcing one frontend model onto every part of the system. Public commerce flows and internal operational surfaces have different needs, and the architecture reflects that instead of flattening everything into one trend-driven pattern.",
      },
      {
        heading: "Takeaway",
        body: "The best architecture is often the one that accepts mixed responsibilities and designs for them intentionally, rather than chasing purity for its own sake.",
      },
    ],
    relatedLink: "/ulisha-store-laravel",
  },
];

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden border-b border-zinc-800">
        <div className="relative flex min-h-screen flex-col px-6 py-12 md:px-10">
          <div className="my-auto py-14">
            <h1 className="text-[14vw] sm:text-[10vw] lg:text-[7.5vw] font-black tracking-tighter leading-[0.85] mb-8">
              Case
              <br />
              <span className="opacity-40">studies</span>
              <br />& tradeoffs.
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
              These are not polished marketing stories. They are short records
              of engineering decisions, tradeoffs, and moments where saying
              “rewrite it,” “do less,” or “choose the boring option” was the
              more responsible answer.
            </p>
          </div>

          <div className="border-t border-zinc-800 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <p className="text-4xl font-black">{caseStudies.length}</p>
              <p className="mt-1 text-sm text-zinc-400">Published studies</p>
            </div>
            <div>
              <p className="text-4xl font-black">Practical</p>
              <p className="mt-1 text-sm text-zinc-400">Bias in decisions</p>
            </div>
            <div className="col-span-2 flex flex-wrap items-center gap-2">
              {["Rewrites", "Cost", "SSR", "Architecture"].map((item) => (
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
        <div className="mx-auto max-w-6xl flex flex-col gap-8">
          {caseStudies.map((study, index) => (
            <Card key={study.title} index={index}>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-widest text-zinc-400">
                  {study.label}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {study.title}
              </h2>
              <p className="leading-7 mb-8">{study.summary}</p>

              <div className="grid gap-6 md:grid-cols-2">
                {study.sections.map((section) => (
                  <div
                    key={section.heading}
                    className="rounded-2xl border border-zinc-800 p-6"
                  >
                    <div className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
                      {section.heading}
                    </div>
                    <p className="leading-7">{section.body}</p>
                  </div>
                ))}
              </div>

              {study.relatedLink ? (
                <div className="mt-8">
                  <Link
                    href={study.relatedLink}
                    className="text-sm text-zinc-400 underline underline-offset-4 hover:text-zinc-200"
                  >
                    See the related project
                  </Link>
                </div>
              ) : null}
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
