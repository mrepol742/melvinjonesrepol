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
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
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
  alternates: getAlternates(""),
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

export default async function Home() {
  const t = await getTranslations("home");
  const ta = await getTranslations("about");

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Melvin Jones Repol",
    url: "https://www.melvinjonesrepol.com",
    image:
      "https://www.melvinjonesrepol.com/images/melvin-jones-repol-black-circle.png",
    description:
      "Software Engineer building scalable web and Android applications — from planning and design to production.",
    jobTitle: "Software Engineer",
    mainEntityOfPage: "https://www.melvinjonesrepol.com",
    sameAs: [
      "https://www.facebook.com/melvinjonesrepol",
      "https://linkedin.com/in/mrepol742",
      "https://github.com/mrepol742",
      "https://wakatime.com/@mrepol742",
      "https://www.youtube.com/@mrepol742",
      "https://g.dev/mrepol742",
      "https://steamcommunity.com/id/mrepol742",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Self-Employed",
    },
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
          <div className="relative min-h-screen overflow-hidden border-b mb-10">
            {/* Full-height photo bleeding to the right edge — desktop only */}
            <div className="hidden lg:block absolute right-0 top-0 h-full w-[42%]">
              <Image
                src="/images/melvin-jones-repol-black.jpg"
                alt={ta("profile_alt")}
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
            <div className="relative z-10 min-h-screen flex flex-col px-6 md:px-12 xl:px-20 py-12">
              {/* Top label */}
              <div className="pt-4">
                <span className="text-xs tracking-widest uppercase border px-3 py-1 rounded-full">
                  {ta("label")}
                </span>
              </div>

              {/* Middle: name + bio */}
              <div className="my-auto py-14 lg:max-w-[60%] xl:max-w-[56%]">
                <h1 className="text-[17vw] sm:text-[12vw] lg:text-[7.5vw] font-black tracking-tighter leading-[0.85] mb-8">
                  Melvin
                  <br />
                  <span className="opacity-40">Jones</span>
                  <br />
                  Repol
                </h1>

                <p className="text-base md:text-xl leading-relaxed mb-6 max-w-lg">
                  {ta("intro")}
                </p>

                <p className="text-sm leading-relaxed max-w-lg opacity-60">
                  {ta("delivery_mindset")}
                </p>
              </div>

              {/* Bottom info strip — newspaper footer style */}
              <div className="border-t pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:max-w-[60%] xl:max-w-[56%]">
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1 opacity-50">
                    {ta("role_label")}
                  </p>
                  <p className="font-semibold text-sm">{ta("role_value")}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1 opacity-50">
                    {ta("focus_label")}
                  </p>
                  <p className="font-semibold text-sm">{ta("focus_value")}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1 opacity-50">
                    {ta("expertise_label")}
                  </p>
                  <p className="font-semibold text-sm">
                    {ta("expertise_value")}
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile photo below content */}
            <div className="lg:hidden relative w-full aspect-[4/3]">
              <Image
                src="/images/melvin-jones-repol-black.jpg"
                alt={ta("profile_alt")}
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
                  <h4
                    className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-3"
                    data-aos="fade-up"
                  >
                    {ta("engineering_philosophy_label")}
                  </h4>
                  <h2
                    className="text-3xl md:text-5xl font-bold leading-tight"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    {ta("engineering_philosophy_title_line1")}
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                      {ta("engineering_philosophy_title_line2")}
                    </span>
                  </h2>
                </div>
                <EngineeringPhilosophy />
              </div>
            </div>

            <div className="relative py-14 md:py-28 overflow-hidden">
              <div className="text-center mb-10 md:mb-14">
                <h4
                  className="text-sm font-semibold tracking-widest uppercase mb-3"
                  data-aos="fade-up"
                >
                  {t("how_i_help")}
                </h4>
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
                <h4
                  className="text-sm font-semibold tracking-widest text-cyan-500 uppercase mb-3"
                  data-aos="fade-up"
                >
                  {ta("coding_activity_label")}
                </h4>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {ta("coding_activity_title")}
                </h2>
                <p
                  className="text-center max-w-2xl mx-auto mb-6"
                  data-aos="fade-up"
                >
                  {ta("coding_activity_description")}
                </p>
              </div>
              <Wakatime />
            </div>

            <Github />

            <div className="relative py-14 md:py-28 overflow-hidden">
              <div className="text-center">
                <h4
                  className="text-sm font-semibold tracking-widest uppercase mb-3"
                  data-aos="fade-up"
                >
                  {t("results_case_studies")}
                </h4>
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
                  <h4
                    className="text-sm font-semibold tracking-widest text-orange-500 uppercase mb-3"
                    data-aos="fade-up"
                  >
                    {ta("security_label")}
                  </h4>
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    {ta("security_title")}
                  </h2>
                  <p className="max-w-2xl mx-auto mb-10" data-aos="fade-up">
                    {ta("security_description")}
                  </p>
                </div>
                <SecurityPractices />
              </div>
            </div>

            <div className="relative py-14 md:py-28 overflow-hidden">
              <div className="relative z-10 max-w-6xl mx-auto px-4">
                <div className="text-center">
                  <h4
                    className="text-sm font-semibold tracking-widest text-orange-500 uppercase mb-3"
                    data-aos="fade-up"
                  >
                    {ta("ai_label")}
                  </h4>
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    {ta("ai_title")}
                  </h2>
                  <p className="max-w-2xl mx-auto mb-10" data-aos="fade-up">
                    {ta("ai_description")}
                  </p>
                </div>
                <AI />
              </div>
            </div>

            <div className="relative py-14 md:py-28 overflow-hidden">
              <div className="text-center">
                <h4
                  className="text-sm font-semibold tracking-widest text-fuchsia-500 uppercase mb-3"
                  data-aos="fade-up"
                >
                  {ta("certifications_label")}
                </h4>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {ta("certifications_title")}
                </h2>
                <p className="max-w-2xl mx-auto mb-6" data-aos="fade-up">
                  {ta("certifications_description")}
                </p>
              </div>
              <Certificate />
              <span className="text-xs">{ta("swipe_left_or_right")}</span>
            </div>

            <div className="relative py-14 md:py-28 overflow-hidden">
              <div className="text-center">
                <h4
                  className="text-sm font-semibold tracking-widest text-green-500 uppercase mb-3"
                  data-aos="fade-up"
                >
                  {ta("blog_label")}
                </h4>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {ta("blog_title")}
                </h2>
                <p className="max-w-2xl mx-auto mb-10" data-aos="fade-up">
                  {ta("blog_description")}
                </p>
              </div>
              <Blog />
            </div>

            <div className="relative py-14 md:py-28 overflow-hidden">
              <div className="text-center">
                <h4
                  className="text-sm font-semibold tracking-widest uppercase mb-3"
                  data-aos="fade-up"
                >
                  {t("client_feedback")}
                </h4>
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
                <h4
                  className="text-sm font-semibold tracking-widest text-orange-500 uppercase mb-3"
                  data-aos="fade-up"
                >
                  {ta("youtube_label")}
                </h4>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {ta("youtube_title")}
                </h2>
                <p className="max-w-2xl mx-auto mb-6" data-aos="fade-up">
                  {ta("youtube_description")}
                </p>
              </div>
              <Youtube />
              <span className="text-xs">{ta("swipe_left_or_right")}</span>
            </div>

            <div className="relative py-14 md:py-28 overflow-hidden">
              <div className="mx-auto max-w-4xl text-center">
                <div
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-widest uppercase"
                  data-aos="fade-up"
                >
                  <span className="inline-block h-2 w-2 rounded-full border" />
                  {ta("community_label")}
                </div>

                <h2
                  className="mt-4 text-3xl md:text-4xl font-bold"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {ta("community_title")}
                </h2>

                <p className="max-w-2xl mx-auto mt-4" data-aos="fade-up">
                  {ta("community_description_1")}
                </p>

                <p className="max-w-2xl mx-auto mt-4" data-aos="fade-up">
                  {ta("community_description_2")}
                </p>

                <div
                  className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-3 text-sm md:grid-cols-3"
                  data-aos="fade-up"
                >
                  <div className="rounded-lg border px-4 py-3">
                    <div className="text-lg font-semibold">
                      {ta("community_card1_title")}
                    </div>
                    <div className="text-xs uppercase tracking-wider">
                      {ta("community_card1_desc")}
                    </div>
                  </div>
                  <div className="rounded-lg border px-4 py-3">
                    <div className="text-lg font-semibold">
                      {ta("community_card2_title")}
                    </div>
                    <div className="text-xs uppercase tracking-wider">
                      {ta("community_card2_desc")}
                    </div>
                  </div>
                  <div className="rounded-lg border px-4 py-3">
                    <div className="text-lg font-semibold">
                      {ta("community_card3_title")}
                    </div>
                    <div className="text-xs uppercase tracking-wider">
                      {ta("community_card3_desc")}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col md:flex-row justify-center gap-2 md:gap-4">
                  <Link
                    href="https://hallofcodes.vercel.app"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <Button
                      icon={faCodeSolid}
                      className="border border-current"
                    >
                      {ta("community_cta_join")}
                    </Button>
                  </Link>
                  <Link
                    href="https://github.com/hallofcodes"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <Button icon={faGithub} className="border border-current">
                      {ta("community_cta_github")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="relative py-14 md:py-28 overflow-hidden"
              data-aos="slide-up"
            >
              <div className="relative mx-auto max-w-4xl">
                <div className="relative rounded-3xl border p-6 md:p-10 shadow-[0_10px_50px_-20px_rgba(0,0,0,0.15)]">
                  <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 mb-4">
                    <span className="h-2 w-2 rounded-full border animate-pulse" />
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
                    <span className="text-xs md:text-sm rounded-full border px-3 py-1">
                      {t("next_step_tag_outcome")}
                    </span>
                    <span className="text-xs md:text-sm rounded-full border px-3 py-1">
                      {t("next_step_tag_business")}
                    </span>
                    <span className="text-xs md:text-sm rounded-full border px-3 py-1">
                      {t("next_step_tag_reliable")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <RecentGithubActivityWrapper>
        <RecentGithubActivity />
      </RecentGithubActivityWrapper>
    </>
  );
}
