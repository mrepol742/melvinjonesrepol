import { Metadata } from "next";
import { getAlternates } from "@/components/common/metadata/Alternatives";
import Card from "@/components/ui/Card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "About - Melvin Jones Repol",
    description:
      "Background, working philosophy, and the practical engineering approach behind Melvin Jones Repol's projects and technical decisions.",
    alternates: getAlternates("/about", locale),
    openGraph: {
      title: "About - Melvin Jones Repol",
      description:
        "Background, working philosophy, and the practical engineering approach behind Melvin Jones Repol's projects and technical decisions.",
      url: "https://www.melvinjonesrepol.com/about",
      siteName: "Melvin Jones Repol",
      images: [
        {
          url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
          width: 1200,
          height: 630,
          alt: "About Melvin Jones Repol",
        },
      ],
      locale: "en_US",
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: "About - Melvin Jones Repol",
      description:
        "Background, working philosophy, and the practical engineering approach behind Melvin Jones Repol's projects and technical decisions.",
      images: [
        "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
      ],
      creator: "@mrepol742",
    },
  };
}

const principles = [
  {
    title: "Build for stability first",
    body: "Speed matters, but not at the cost of creating a system that breaks every time a new feature lands. I care about durability, maintainability, and clear tradeoffs.",
  },
  {
    title: "Choose tools for the actual problem",
    body: "I do not treat stacks like religion. Some projects benefit from modern serverless patterns, some need a more grounded backend-first architecture, and some should remain intentionally simple.",
  },
  {
    title: "Respect cost as a technical constraint",
    body: "Infrastructure, hosting, database usage, and runtime overhead are product decisions too. A clean architecture is not useful if the operating cost becomes unreasonable.",
  },
  {
    title:
      "Prefer rewrites over endless patching when the foundation is already failing",
    body: "There are times when patching a slow or fragile system only delays the next failure. When the base is wrong, it is often more honest to redesign than to pretend maintenance will fix it.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden border-b border-zinc-800">
        <div className="relative flex min-h-screen flex-col px-6 py-12 md:px-10">
          <div className="my-auto py-14">
            <h1 className="text-[14vw] sm:text-[10vw] lg:text-[7.5vw] font-black tracking-tighter leading-[0.85] mb-8">
              About
              <br />
              <span className="opacity-40">the work</span>
              <br />
              behind it.
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
              This page exists as background, not a pitch. It explains how I
              think about software, why some decisions look conservative from
              the outside, and why I care more about long-term system health
              than short-term excitement.
            </p>
          </div>

          <div className="border-t border-zinc-800 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <p className="text-4xl font-black">6+</p>
              <p className="mt-1 text-sm text-zinc-400">Years building</p>
            </div>
            <div>
              <p className="text-4xl font-black">Web + Android</p>
              <p className="mt-1 text-sm text-zinc-400">Primary surfaces</p>
            </div>
            <div className="col-span-2 flex flex-wrap items-center gap-2">
              {[
                "Architecture",
                "Operations",
                "AI Features",
                "Practicality",
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

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <div className="text-xs uppercase tracking-widest text-zinc-400 mb-4">
              Context
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Why this site reads this way
            </h2>
            <div className="space-y-4 leading-7">
              <p>
                This portfolio is not meant to act like a typical agency site or
                a loud freelance funnel. It is a public record of how I build,
                what I ship, what I learn from, and how I think through
                engineering tradeoffs.
              </p>
              <p>
                I work across product surfaces that range from business systems
                and storefronts to Android applications, chatbot automation, and
                developer tooling. The common thread is not a single framework.
                It is practical delivery with attention to reliability, cost,
                and future maintenance.
              </p>
              <p>
                I prefer writing things down clearly. That includes what worked,
                what failed, what created unnecessary cost, and what looked
                attractive at the start but became difficult under real usage.
              </p>
            </div>
          </Card>

          <Card subtitle="MJR">
            <div className="text-xs uppercase tracking-widest text-zinc-400 mb-4">
              Focus
            </div>
            <h2 className="text-3xl font-bold mb-6">The approach in short</h2>
            <div className="space-y-3 text-sm text-zinc-300">
              <p>Choose the least complicated tool that can survive growth.</p>
              <p>Do not hide infrastructure cost behind hype.</p>
              <p>Prefer explicit architecture over accidental complexity.</p>
              <p>Keep user-facing systems understandable and supportable.</p>
              <p>
                Treat performance, security, and maintenance as first-class
                work.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <span className="text-sm font-semibold tracking-widest uppercase text-zinc-400">
              Working Principles
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              The patterns I keep coming back to
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((principle, index) => (
              <Card key={principle.title} index={index}>
                <h3 className="text-xl font-semibold mb-3">
                  {principle.title}
                </h3>
                <p className="leading-7">{principle.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
