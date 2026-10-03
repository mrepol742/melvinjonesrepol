import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getAlternates } from "@/components/common/metadata/Alternatives";
import EngineeringFaq from "@/components/ui/FAQ";
import { faq } from "@/lib/faq";

const description = "Simple answers about web development, hosting costs, deployment, and keeping apps running.";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Frequently Asked Questions - Melvin Jones Repol",
    description,
    alternates: getAlternates("/faq", locale),
    openGraph: { title: "Frequently Asked Questions - Melvin Jones Repol", description, type: "website" },
  };
}

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="homepage-shell min-h-screen px-6 pb-24 pt-36 md:px-10">
      <div className="mx-auto max-w-5xl">
        <header className="homepage-section-heading">
          <p className="homepage-kicker">Frequently Asked Questions</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl">Common questions. Simple answers.</h1>
          <p>{description} The right choice depends on what you need and who will maintain it.</p>
        </header>
        <nav aria-label="FAQ topics" className="mb-16 flex flex-wrap gap-3">
          {faq.map((group) => (
            <a key={group.id} href={`#${group.id}`} className="border border-black/20 px-4 py-3 text-sm font-semibold hover:border-orange-600 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-orange-600 dark:border-white/20 dark:hover:text-orange-400">
              {group.title}
            </a>
          ))}
        </nav>
        <div className="space-y-20">
          {faq.map((group) => (
            <section key={group.id} id={group.id} aria-labelledby={`${group.id}-heading`} className="scroll-mt-28">
              <h2 id={`${group.id}-heading`} className="mb-6 text-3xl font-bold tracking-tight">{group.title}</h2>
              <EngineeringFaq questions={group.questions} />
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
