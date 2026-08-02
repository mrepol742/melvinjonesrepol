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
    title: "Now - Melvin Jones Repol",
    description:
      "Current focus areas, active technical interests, and ongoing work around AI-driven development, chatbot systems, tooling, and product integration.",
    alternates: getAlternates("/now", locale),
    openGraph: {
      title: "Now - Melvin Jones Repol",
      description:
        "Current focus areas, active technical interests, and ongoing work around AI-driven development, chatbot systems, tooling, and product integration.",
      url: "https://www.melvinjonesrepol.com/now",
      siteName: "Melvin Jones Repol",
      images: [
        {
          url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
          width: 1200,
          height: 630,
          alt: "Current Focus",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Now - Melvin Jones Repol",
      description:
        "Current focus areas, active technical interests, and ongoing work around AI-driven development, chatbot systems, tooling, and product integration.",
      images: [
        "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
      ],
      creator: "@mrepol742",
    },
  };
}

const currentFocus = [
  {
    title: "AI-driven development",
    body: "A large part of my current attention is on AI-assisted engineering workflows, both in day-to-day work and in self-directed projects. That includes building features faster, checking assumptions earlier, and finding better ways to keep the human operator in control of system behavior.",
  },
  {
    title: "Bringing features into a single chatbot surface",
    body: "I am interested in consolidating useful capabilities into a single conversational interface instead of scattering them across disconnected dashboards and utilities. The challenge is not only generating responses, but making tools, actions, and context feel coherent in one place.",
  },
  {
    title: "MCP and tool-connected systems",
    body: "Model Context Protocol style integrations and tool-augmented assistants are one of the more practical directions right now. The goal is not just chat for its own sake, but chat that can inspect, retrieve, decide, and trigger useful workflows with clear boundaries.",
  },
  {
    title: "WhatsApp chatbot systems",
    body: "Chatbot work continues to be one of the more interesting applied areas for me, especially where messaging becomes the front door for support, automation, notifications, and lightweight task execution.",
  },
  {
    title: "Developer tooling and internal products",
    body: "Projects like DevPulse, AI utilities, and internal operator-facing tools reflect the same broader direction: reduce friction, centralize useful signals, and make systems easier to work with in practice.",
  },
];

export default function NowPage() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden border-b border-zinc-800">
        <div className="relative flex min-h-screen flex-col px-6 py-12 md:px-10">
          <div className="my-auto py-14">
            <h1 className="text-[14vw] sm:text-[10vw] lg:text-[7.5vw] font-black tracking-tighter leading-[0.85] mb-8">
              Current
              <br />
              <span className="opacity-40">focus</span>
              <br />
              right now.
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
              A snapshot of what I am spending time on recently. This changes as
              projects evolve, but the current pattern is clear: more AI-linked
              workflows, more tool-connected systems, and more effort toward
              making useful capabilities accessible through a single interface.
            </p>
          </div>

          <div className="border-t border-zinc-800 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <p className="text-4xl font-black">2026</p>
              <p className="mt-1 text-sm text-zinc-400">Current snapshot</p>
            </div>
            <div>
              <p className="text-4xl font-black">AI + Tools</p>
              <p className="mt-1 text-sm text-zinc-400">Main direction</p>
            </div>
            <div className="col-span-2 flex flex-wrap items-center gap-2">
              {["MCP", "Chatbots", "DevPulse", "Automation"].map((item) => (
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
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2">
          {currentFocus.map((item, index) => (
            <Card key={item.title} index={index}>
              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
              <p className="leading-7">{item.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Card>
            <div className="text-xs uppercase tracking-widest text-zinc-400 mb-4">
              Direction
            </div>
            <h2 className="text-3xl font-bold mb-6">
              What ties these efforts together
            </h2>
            <div className="space-y-4 leading-7">
              <p>
                The connecting idea is not just “AI” as a label. It is the
                effort to make systems more useful at the point where people
                actually interact with them: chat surfaces, operator panels,
                internal tooling, and automation layers.
              </p>
              <p>
                I am especially interested in where multiple features can be
                exposed through one assistant without turning the experience into
                chaos. That means thinking carefully about capability design,
                retrieval, command boundaries, and what should remain explicit
                instead of being abstracted away.
              </p>
              <p>
                Some of this work is experimental, some of it is already applied
                in real systems, and some of it is groundwork for the next set
                of products.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
