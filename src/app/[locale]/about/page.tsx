import Link from "next/link";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/ui/Header";
import { getAlternates } from "@/components/common/metadata/Alternatives";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "About - Melvin Jones Repol",
    description:
      "Learn about Melvin Jones Repol, a full-stack software engineer focused on practical, reliable products and production-ready delivery.",
    alternates: getAlternates("/about", locale),
    openGraph: {
      title: "About - Melvin Jones Repol",
      description:
        "A full-stack software engineer focused on practical, reliable products and production-ready delivery.",
      url: "https://www.melvinjonesrepol.com/about",
      siteName: "Melvin Jones Repol",
      images: [
        {
          url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
          width: 800,
          height: 600,
          alt: "Melvin Jones Repol",
        },
      ],
      type: "profile",
    },
  };
}

const principles = [
  [
    "01",
    "Clarity first",
    "Turn an unclear request into a shared plan before the implementation gets complicated.",
  ],
  [
    "02",
    "Practical choices",
    "Choose tools and architecture that fit the product, its users, and the team responsible for it.",
  ],
  [
    "03",
    "Built to last",
    "Treat maintainability, security, and operational detail as part of the work from the beginning.",
  ],
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="overflow-hidden">
      <Header
        imageUrl="/images/melvin-jones-repol-black.jpg"
        imageAlt="Melvin Jones Repol"
        caption="Software engineer since 2018"
        title={
          <>
            About
            <br />
            <span className="homepage-accent">Melvin.</span>
          </>
        }
        intro="I am a full-stack software engineer who helps turn ideas and operational needs into practical software that people can rely on."
        actions={
          <>
            <Link
              href="/projects"
              className="homepage-button homepage-button-primary"
            >
              Explore my work
            </Link>
            <Link
              href="/contact-me"
              className="homepage-button homepage-button-secondary"
            >
              Work together
            </Link>
          </>
        }
      />

      <section className="border-y border-black/10 bg-orange-600 text-orange-50 dark:border-white/10">
        <div className="mx-auto grid max-w-7xl divide-y divide-orange-300/30 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="px-6 py-7 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-orange-100">
              Role
            </p>
            <p className="mt-2 text-lg font-bold">
              Full-stack software engineer
            </p>
          </div>
          <div className="px-6 py-7 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-orange-100">
              Practice
            </p>
            <p className="mt-2 text-lg font-bold">
              Web, mobile, systems, infrastructure
            </p>
          </div>
          <div className="px-6 py-7 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-orange-100">
              Approach
            </p>
            <p className="mt-2 text-lg font-bold">
              Useful, stable, production minded
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:py-32">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-orange-700 dark:text-orange-400">
            How I work
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.92] tracking-[-0.06em] sm:text-5xl">
            Start with the problem.
          </h2>
        </div>
        <div className="max-w-2xl space-y-6 text-lg leading-8 text-stone-700 dark:text-stone-300">
          <p>
            I care about the full path from a rough requirement to a dependable
            release. That means asking the right questions early, making
            sensible technical decisions, and building with the next person who
            maintains the system in mind.
          </p>
          <p>
            My work spans custom web and mobile applications, internal tools,
            integrations, and the infrastructure that supports them. I enjoy the
            mix of product thinking and hands-on engineering needed to make a
            system useful in the real world.
          </p>
          <p>
            I have worked with people who need a first version of an idea, teams
            with an established product, and clients who need a dependable
            partner to keep a critical system moving. The context changes, but
            the goal stays the same: create something that is clear to use,
            considered in its details, and ready for what comes next.
          </p>
        </div>
      </section>

      <section className="border-y border-black/10 bg-orange-50 px-6 py-24 dark:border-white/10 dark:bg-orange-950/20 md:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-xl">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-orange-700 dark:text-orange-400">
                The foundation
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.92] tracking-[-0.06em] sm:text-5xl">
                Good work starts with good judgment.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-stone-700 dark:text-stone-300">
              Strong software is more than a polished interface or a clean
              deployment. It is the result of understanding tradeoffs,
              communicating early, and paying attention to the details that make
              a product easier to use and safer to evolve.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {principles.map(([number, title, description]) => (
              <article
                key={number}
                className="border border-stone-300 bg-[var(--background)] p-7 shadow-[4px_4px_0_0_rgba(234,88,12,0.8)] dark:border-white/15 md:p-9"
              >
                <p className="font-mono text-xs font-bold tracking-[0.18em] text-orange-700 dark:text-orange-400">
                  {number}
                </p>
                <h3 className="mt-12 text-2xl font-bold tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-stone-700 dark:text-stone-300">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:py-32">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-orange-700 dark:text-orange-400">
            Collaboration
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.92] tracking-[-0.06em] sm:text-5xl">
            A calm, direct way of working.
          </h2>
        </div>
        <div className="max-w-2xl space-y-6 text-lg leading-8 text-stone-700 dark:text-stone-300">
          <p>
            I value straightforward communication, visible progress, and
            decisions that are easy to revisit. The best projects have enough
            structure to stay on track while leaving room for better ideas as we
            learn more.
          </p>
          <p>
            Whether I am working independently or alongside a team, I aim to
            make the technical side feel understandable. That includes sharing
            tradeoffs in plain language, flagging risks early, and keeping the
            focus on what will create value for the people using the product.
          </p>
          <p>
            The result is not just a handoff. It is a product and a codebase
            that the next person can understand, maintain, and confidently build
            on.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
        <div className="border-l-4 border-orange-600 pl-6 md:pl-10">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-orange-700 dark:text-orange-400">
            Outside the delivery cycle
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.06em] sm:text-5xl">
            Curiosity is part of the job.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 dark:text-stone-300">
            I keep learning through side projects, open source, videos, and
            games. Each is another way to explore how people use technology, how
            systems behave, and how good ideas become better experiences.
            Staying curious helps me bring fresh perspective back to the work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/work-experience"
              className="homepage-button homepage-button-secondary"
            >
              View experience
            </Link>
            <Link
              href="/contact-me"
              className="homepage-button homepage-button-primary"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
