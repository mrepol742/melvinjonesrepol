import Link from "next/link";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAlternates } from "@/components/common/metadata/Alternatives";
import Project from "@/app/[locale]/components/Project";
import Github from "@/app/[locale]/components/Github";
import Wakatime from "@/app/[locale]/components/Wakatime";
import Blog from "@/app/[locale]/components/Blog";
import Certificate from "@/app/[locale]/components/Certificate";
import Steam from "@/app/[locale]/components/Steam";
import Youtube from "@/app/[locale]/components/Youtube";
import Header from "@/components/ui/Header";

import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export const revalidate = 10800;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Melvin Jones Repol - Software Engineer",
    description:
      "A software engineer building practical, reliable products across web, mobile, infrastructure, and open source since 2018.",
    keywords: [
      "Melvin Jones Repol",
      "software engineer",
      "full-stack development",
      "web development",
      "Android development",
      "portfolio",
    ],
    alternates: getAlternates("", locale),
    openGraph: {
      title: "Melvin Jones Repol - Software Engineer",
      description:
        "A software engineer building practical, reliable products across web, mobile, infrastructure, and open source since 2018.",
      url: "https://www.melvinjonesrepol.com",
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
    twitter: {
      card: "summary_large_image",
      title: "Melvin Jones Repol - Software Engineer",
      description:
        "A software engineer building practical, reliable products across web, mobile, infrastructure, and open source since 2018.",
      images: [
        "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
      ],
      creator: "@mrepol742",
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Melvin Jones Repol",
    url: "https://www.melvinjonesrepol.com",
    image:
      "https://www.melvinjonesrepol.com/images/melvin-jones-repol-black-circle.png",
    description:
      "A software engineer building practical, reliable products across web, mobile, infrastructure, and open source since 2018.",
    jobTitle: "Full-Stack Software Engineer",
    knowsAbout: [
      "Software Engineering",
      "Full-Stack Development",
      "Android Development",
      "DevOps",
      "DevSecOps",
      "Cloud Infrastructure",
    ],
    sameAs: [
      "https://www.facebook.com/mrepol742",
      "https://linkedin.com/in/mrepol742",
      "https://github.com/mrepol742",
      "https://wakatime.com/@mrepol742",
      "https://www.youtube.com/@mrepol742",
      "https://steamcommunity.com/id/mrepol742",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <main className="homepage-shell overflow-hidden">
        <Header
          imageUrl="/images/melvin-jones-repol-black.jpg"
          imageAlt="Melvin Jones Repol"
          title={
            <>
              Melvin
              <br />
              Jones
              <br />
              <span className="homepage-accent">Repol.</span>
            </>
          }
          intro={t("intro")}
          actions={
            <>
              <Link
                href="/projects"
                className="homepage-button homepage-button-primary"
              >
                See the work
              </Link>
              <Link
                href="/contact-me"
                className="homepage-button homepage-button-secondary"
              >
                Start a conversation
              </Link>
            </>
          }
          caption="Builder. Problem solver. Lifelong learner."
        />

        <section className="homepage-band border-y border-black/10 dark:border-white/10">
          <div className="mx-auto grid max-w-7xl gap-px bg-black/10 sm:grid-cols-3 dark:bg-white/10">
            {[
              ["10+", "years building and learning"],
              ["Full stack", "web, mobile, systems"],
              ["Production minded", "from first commit to support"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="bg-[var(--background)] px-6 py-7 md:px-10"
              >
                <p className="text-2xl font-bold tracking-tight">{value}</p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="homepage-section" id="work">
          <div className="homepage-section-heading">
            <p className="homepage-kicker">Selected work</p>
            <h2>Real systems. Real constraints.</h2>
            <p>
              Products built to solve operational problems, not just fill a
              gallery.
            </p>
          </div>
          <Project />
        </section>

        <section className="homepage-section homepage-split-section">
          <div className="homepage-section-heading">
            <p className="homepage-kicker">The practice</p>
            <h2>Still close to the code.</h2>
            <p>
              The work is shaped by years of shipping, debugging, maintaining,
              and improving software after launch.
            </p>
            <Link href="/work-experience" className="homepage-text-link">
              Read my experience <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="space-y-16">
            <Github />
            <Wakatime />
          </div>
        </section>

        <section className="homepage-section">
          <div className="homepage-section-heading">
            <p className="homepage-kicker">Notes from the workbench</p>
            <h2>I write what I learn.</h2>
            <p>
              Engineering decisions, production lessons, security,
              infrastructure, and the occasional hard-earned opinion.
            </p>
          </div>
          <Blog locale={locale} />
        </section>

        <section className="homepage-section">
          <div className="homepage-section-heading">
            <p className="homepage-kicker">Beyond the pull request</p>
            <h2>Videos, games, and curiosity.</h2>
            <p>
              I make time to share, play, and stay curious. Good engineering
              needs a life outside the editor too.
            </p>
          </div>
          <div className="space-y-20">
            <Youtube />
            <Steam />
          </div>
        </section>

        <section className="homepage-section pb-24">
          <div className="homepage-section-heading">
            <p className="homepage-kicker">Proof of the journey</p>
            <h2>Always adding range.</h2>
            <p>{t("certifications_description")}</p>
          </div>
          <Certificate />
        </section>
      </main>
    </>
  );
}
