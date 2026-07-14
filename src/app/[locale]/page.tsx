import Image from "next/image";
import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode as faCodeSolid } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/ui/Button";
import Steam from "@/app/[locale]/components/Steam";
import Wakatime from "@/app/[locale]/components/Wakatime";
import RecentGithubActivityWrapper from "@/app/[locale]/components/RecentGithubActivityWrapper";
import RecentGithubActivity from "@/app/[locale]/components/RecentGithubActivity";
import Youtube from "@/app/[locale]/components/Youtube";
import SecurityPractices from "@/app/[locale]/components/SecurityPractices";
import AI from "@/app/[locale]/components/AI";
import Blog from "@/app/[locale]/components/Blog";
import Certificate from "@/app/[locale]/components/Certificate";
import EngineeringPhilosophy from "@/app/[locale]/components/EngineeringPhilosophy";
import Github from "@/app/[locale]/components/Github";
import ServicesCarousel from "@/app/[locale]/components/Technologies";
import Project from "@/app/[locale]/components/Project";
import ClientFeedback from "@/app/[locale]/components/ClientFeedback";
import { Metadata } from "next";
import { getAlternates } from "@/components/common/metadata/Alternatives";
import { getTranslations, setRequestLocale } from "next-intl/server";

import "devicon/devicon.min.css";
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
      "I'm Melvin Jones Repol, a Software Engineer who builds practical, scalable software — full-stack web, Android apps, and DevOps. From planning to production.",
    keywords: [
      "Melvin Jones Repol",
      "software engineer",
      "web development",
      "full-stack development",
      "android development",
      "portfolio",
    ],
    alternates: getAlternates("", locale),
    openGraph: {
      title: "Melvin Jones Repol - Software Engineer",
      description:
        "I'm Melvin Jones Repol, a Software Engineer who builds practical, scalable software — full-stack web, Android apps, and DevOps. From planning to production.",
      url: "https://www.melvinjonesrepol.com",
      siteName: "Melvin Jones Repol",
      images: [
        {
          url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
          width: 1200,
          height: 630,
          alt: "Melvin Jones Repol",
        },
      ],
      locale: "en_US",
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: "Melvin Jones Repol - Software Engineer",
      description:
        "I'm Melvin Jones Repol, a Software Engineer who builds practical, scalable software — full-stack web, Android apps, and DevOps. From planning to production.",
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
      "Software Engineer building scalable web and Android applications — from planning and design to production.",
    jobTitle: "Founder, CTO, Software Engineer",
    mainEntityOfPage: "https://www.melvinjonesrepol.com",
    sameAs: [
      "https://www.facebook.com/melvinjonesrepol",
      "https://linkedin.com/in/mrepol742",
      "https://github.com/mrepol742",
      "https://wakatime.com/@mrepol742",
      "https://www.youtube.com/@mrepol742",
      "https://g.dev/mrepol742",
      "https://steamcommunity.com/id/mrepol742",
      "https://codeberg.org/mrepol742",
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "Hall of Codes",
        url: "https://www.hallofcodes.com",
        sameAs: [
          "https://www.facebook.com/hallofcodes",
          "https://github.com/hallofcodes",
        ],
      },
      {
        "@type": "Organization",
        name: "Ulisha Limited",
        url: "https://www.ulishalimited.com",
      },
      {
        "@type": "Organization",
        name: "Self-Employed",
      },
    ],
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Melvin Jones Repol",
    url: "https://www.melvinjonesrepol.com",
    inLanguage: "en",
  };

  const meMyselfI = {
    "@context": "https://schema.org",
    "@graph": [person, webSite],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(meMyselfI) }}
      />
      <main>
        <section>
          <div className="relative min-h-screen overflow-hidden border-b border-zinc-800 mb-10">
            {/* Full-height photo bleeding to the right edge — desktop only */}
            <div className="hidden lg:block absolute right-0 top-0 h-full w-[42%]">
              <Image
                src="/images/melvin-jones-repol-black.jpg"
                alt={t("profile_alt")}
                fill
                priority
                className="object-cover object-top"
              />
              {/* Fade left edge into background */}
              <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white dark:from-black to-transparent" />
              {/* Fade bottom edge */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white dark:from-black to-transparent" />
            </div>

            {/* Content layer */}
            <div className="relative z-10 min-h-screen flex flex-col px-6 py-12 md:px-10">
              <div className="my-auto py-14 lg:max-w-[60%] xl:max-w-[56%]">
                <h1 className="text-[17vw] sm:text-[12vw] lg:text-[7.5vw] font-black tracking-tighter leading-[0.85] mb-8">
                  Melvin
                  <br />
                  <span className="opacity-40">Jones</span>
                  <br />
                  Repol
                </h1>

                <p className="text-base md:text-xl leading-relaxed mb-6 max-w-lg">
                  {t("intro")}
                </p>

                <p className="text-sm leading-relaxed max-w-lg opacity-60">
                  {t("delivery_mindset")}
                </p>
              </div>

              {/* Bottom info strip — newspaper footer style */}
              <div className="border-t border-zinc-800 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:max-w-[60%] xl:max-w-[56%]">
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1 opacity-50">
                    {t("role_label")}
                  </p>
                  <p className="font-semibold text-sm">{t("role_value")}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1 opacity-50">
                    {t("focus_label")}
                  </p>
                  <p className="font-semibold text-sm">{t("focus_value")}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1 opacity-50">
                    {t("expertise_label")}
                  </p>
                  <p className="font-semibold text-sm">
                    {t("expertise_value")}
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile photo below content */}
            <div className="lg:hidden relative w-full aspect-[4/3]">
              <Image
                src="/images/melvin-jones-repol-black.jpg"
                alt={t("profile_alt")}
                fill
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white dark:from-black to-transparent" />
            </div>
          </div>

          <div className="p-3 md:px-8">
            <div className="relative py-14 md:py-28 overflow-hidden">
              <div className="relative z-10 max-w-6xl mx-auto px-4">
                <div className="text-center mb-10 md:mb-14">
                  <span
                    className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-3"
                    data-aos="fade-up"
                  >
                    {t("engineering_philosophy_label")}
                  </span>
                  <h2
                    className="text-3xl md:text-5xl font-bold leading-tight"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    {t("engineering_philosophy_title_line1")}
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                      {t("engineering_philosophy_title_line2")}
                    </span>
                  </h2>
                </div>
                <EngineeringPhilosophy />
              </div>
            </div>

            <div className="relative py-14 md:py-28 overflow-hidden">
              <div className="text-center mb-10 md:mb-14">
                <span
                  className="text-sm font-semibold tracking-widest uppercase mb-3"
                  data-aos="fade-up"
                >
                  {t("how_i_help")}
                </span>
                <h2
                  className="text-3xl md:text-5xl font-bold leading-tight"
                  data-aos="fade-up"
                >
                  {t("how_i_help_title")}
                </h2>
                <p className="max-w-2xl mx-auto mt-4" data-aos="fade-up">
                  {t("how_i_help_description")}
                </p>
              </div>
              <ServicesCarousel />
            </div>

            <div className="relative py-14 md:py-28 overflow-hidden">
              <div className="text-center">
                <span
                  className="text-sm font-semibold tracking-widest text-cyan-500 uppercase mb-3"
                  data-aos="fade-up"
                >
                  {t("coding_activity_label")}
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {t("coding_activity_title")}
                </h2>
                <p
                  className="text-center max-w-2xl mx-auto mb-6"
                  data-aos="fade-up"
                >
                  {t("coding_activity_description")}
                </p>
              </div>
              <Wakatime />
            </div>

            <Github />

            <div className="relative py-14 md:py-28 overflow-hidden">
              <div className="text-center">
                <span
                  className="text-sm font-semibold tracking-widest uppercase mb-3"
                  data-aos="fade-up"
                >
                  {t("results_case_studies")}
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  data-aos="fade-up"
                >
                  {t("work_that_drives_outcomes")}
                </h2>
                <p className="max-w-2xl mx-auto mb-6" data-aos="fade-up">
                  {t("work_that_drives_outcomes_description")}
                </p>
              </div>
              <Project />
              <span className="text-xs">
                {t("swipe_left_or_right_to_see_more")}
              </span>
            </div>

            <div className="relative py-14 md:py-28 overflow-hidden">
              <div className="relative z-10 max-w-6xl mx-auto px-4">
                <div className="text-center">
                  <span
                    className="text-sm font-semibold tracking-widest text-orange-500 uppercase mb-3"
                    data-aos="fade-up"
                  >
                    {t("security_label")}
                  </span>
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    {t("security_title")}
                  </h2>
                  <p className="max-w-2xl mx-auto mb-10" data-aos="fade-up">
                    {t("security_description")}
                  </p>
                </div>
                <SecurityPractices />
              </div>
            </div>

            <div className="relative py-14 md:py-28 overflow-hidden">
              <div className="relative z-10 max-w-6xl mx-auto px-4">
                <div className="text-center">
                  <span
                    className="text-sm font-semibold tracking-widest text-orange-500 uppercase mb-3"
                    data-aos="fade-up"
                  >
                    {t("ai_label")}
                  </span>
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    {t("ai_title")}
                  </h2>
                  <p className="max-w-2xl mx-auto mb-10" data-aos="fade-up">
                    {t("ai_description")}
                  </p>
                </div>
                <AI />
              </div>
            </div>

            <div className="relative py-14 md:py-28 overflow-hidden">
              <div className="text-center">
                <span
                  className="text-sm font-semibold tracking-widest text-fuchsia-500 uppercase mb-3"
                  data-aos="fade-up"
                >
                  {t("certifications_label")}
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {t("certifications_title")}
                </h2>
                <p className="max-w-2xl mx-auto mb-6" data-aos="fade-up">
                  {t("certifications_description")}
                </p>
              </div>
              <Certificate />
              <span className="text-xs">{t("swipe_left_or_right")}</span>
            </div>

            <div className="relative py-14 md:py-28 overflow-hidden">
              <div className="text-center">
                <span
                  className="text-sm font-semibold tracking-widest text-green-500 uppercase mb-3"
                  data-aos="fade-up"
                >
                  {t("blog_label")}
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {t("blog_title")}
                </h2>
                <p className="max-w-2xl mx-auto mb-10" data-aos="fade-up">
                  {t("blog_description")}
                </p>
              </div>
              <Blog locale={locale} />
            </div>

            <div className="relative py-14 md:py-28 overflow-hidden">
              <div className="text-center">
                <span
                  className="text-sm font-semibold tracking-widest uppercase mb-3"
                  data-aos="fade-up"
                >
                  {t("client_feedback")}
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  data-aos="fade-up"
                >
                  {t("trusted_for_delivery_and_reliability")}
                </h2>
                <p className="max-w-2xl mx-auto mb-10" data-aos="fade-up">
                  {t("trusted_for_delivery_and_reliability_description")}
                </p>
              </div>
              <ClientFeedback />
            </div>

            <Steam />

            <div className="relative py-14 md:py-28 overflow-hidden">
              <div className="text-center">
                <span
                  className="text-sm font-semibold tracking-widest text-orange-500 uppercase mb-3"
                  data-aos="fade-up"
                >
                  {t("youtube_label")}
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {t("youtube_title")}
                </h2>
                <p className="max-w-2xl mx-auto mb-6" data-aos="fade-up">
                  {t("youtube_description")}
                </p>
              </div>
              <Youtube />
              <span className="text-xs">{t("swipe_left_or_right")}</span>
            </div>

            <div className="relative py-14 md:py-28 overflow-hidden">
              <div className="mx-auto max-w-6xl px-4 md:px-6">
                <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] items-start">
                  {/* Left content rail */}
                  <div>
                    <div
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-3 py-1 text-xs font-semibold tracking-widest uppercase"
                      data-aos="fade-up"
                    >
                      <span className="inline-block h-2 w-2 rounded-full border" />
                      {t("community_label")}
                    </div>

                    <h2
                      className="mt-4 text-3xl md:text-4xl font-bold max-w-xl"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      {t("community_title")}
                    </h2>

                    <p className="mt-4 max-w-xl" data-aos="fade-up">
                      {t("community_description_1")}
                    </p>

                    <p className="mt-4 max-w-xl" data-aos="fade-up">
                      {t("community_description_2")}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2 md:gap-3">
                      <Link
                        href="https://www.hallofcodes.org"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        <Button
                          icon={faCodeSolid}
                          className="border border-zinc-800"
                        >
                          {t("community_cta_join")}
                        </Button>
                      </Link>
                      <Link
                        href="https://github.com/hallofcodes"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        <Button
                          icon={faGithub}
                          className="border border-zinc-800"
                        >
                          {t("community_cta_github")}
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Right stacked cards */}
                  <div className="relative">
                    <div className="space-y-3">
                      <div className="rounded-xl border border-zinc-800 px-4 py-3">
                        <div className="text-lg font-semibold">
                          {t("community_card1_title")}
                        </div>
                        <div className="text-xs uppercase tracking-wider text-zinc-400">
                          {t("community_card1_desc")}
                        </div>
                      </div>
                      <div className="rounded-xl border border-zinc-800 px-4 py-3">
                        <div className="text-lg font-semibold">
                          {t("community_card2_title")}
                        </div>
                        <div className="text-xs uppercase tracking-wider text-zinc-400">
                          {t("community_card2_desc")}
                        </div>
                      </div>
                      <div className="rounded-xl border border-zinc-800 px-4 py-3">
                        <div className="text-lg font-semibold">
                          {t("community_card3_title")}
                        </div>
                        <div className="text-xs uppercase tracking-wider text-zinc-400">
                          {t("community_card3_desc")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative py-14 md:py-28 overflow-hidden">
              <div className="mx-auto max-w-6xl px-4 md:px-6">
                <div className="rounded-3xl border border-zinc-800 overflow-hidden">
                  <div className="grid lg:grid-cols-2">
                    {/* Product Side */}
                    <div className="p-8 md:p-12">
                      <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-3 py-1 text-xs font-semibold uppercase">
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                        {t("webvium_badge")}
                      </div>

                      <h2 className="mt-5 text-4xl font-bold">
                        {t("webvium_title")}
                      </h2>

                      <p className="mt-4">{t("webvium_description")}</p>

                      <div className="mt-8 flex flex-wrap gap-3">
                        <Link href="https://webvium.melvinjonesrepol.com">
                          <Button>{t("webvium_cta_explore")}</Button>
                        </Link>

                        <Link href="https://github.com/webvium">
                          <Button className="border border-zinc-800">
                            {t("webvium_cta_github")}
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Stats Side */}
                    <div className="border-t lg:border-t-0 lg:border-l border-zinc-800 p-8 md:p-12">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="rounded-xl border border-zinc-800 p-5">
                          <div className="text-3xl font-bold">15+</div>
                          <div className="text-sm text-zinc-400">
                            {t("webvium_stat_repositories")}
                          </div>
                        </div>

                        <div className="rounded-xl border border-zinc-800 p-5">
                          <div className="text-3xl font-bold">6+</div>
                          <div className="text-sm text-zinc-400">
                            {t("webvium_stat_browser_tools")}
                          </div>
                        </div>

                        <div className="rounded-xl border border-zinc-800 p-5">
                          <div className="text-3xl font-bold">2018</div>
                          <div className="text-sm text-zinc-400">
                            {t("webvium_stat_started")}
                          </div>
                        </div>

                        <div className="rounded-xl border border-zinc-800 p-5">
                          <div className="text-3xl font-bold">375KB</div>
                          <div className="text-sm text-zinc-400">
                            {t("webvium_stat_lightest")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*<div
              className="relative py-14 md:py-28 overflow-hidden"
              data-aos="slide-up"
            >
              <div className="relative mx-auto max-w-4xl">
                <div className="relative rounded-3xl border border-zinc-800 p-6 md:p-10 shadow-[0_10px_50px_-20px_rgba(0,0,0,0.15)]">
                  <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-3 py-1 mb-4">
                    <span className="h-2 w-2 rounded-full border border-zinc-800 animate-pulse" />
                    <span className="text-xs font-medium tracking-wide uppercase">
                      {t("next_step_label")}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {t("next_step_title")}
                  </h3>

                  <p className="text-sm md:text-base leading-relaxed">
                    {t("next_step_description")}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <span className="text-xs md:text-sm rounded-full border border-zinc-800 px-3 py-1">
                      {t("next_step_tag_outcome")}
                    </span>
                    <span className="text-xs md:text-sm rounded-full border border-zinc-800 px-3 py-1">
                      {t("next_step_tag_business")}
                    </span>
                    <span className="text-xs md:text-sm rounded-full border border-zinc-800 px-3 py-1">
                      {t("next_step_tag_reliable")}
                    </span>
                  </div>
                </div>
              </div>
            </div>*/}
          </div>
        </section>
      </main>

      <RecentGithubActivityWrapper>
        <RecentGithubActivity />
      </RecentGithubActivityWrapper>
    </>
  );
}
