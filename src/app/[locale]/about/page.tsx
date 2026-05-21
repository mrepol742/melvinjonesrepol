import Image from "next/image";
import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode as faCodeSolid } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/ui/Button";
import Steam from "@/app/[locale]/about/components/Steam";
import Wakatime from "@/app/[locale]/about/components/Wakatime";
import RecentGithubActivityWrapper from "@/app/[locale]/about/components/RecentGithubActivityWrapper";
import RecentGithubActivity from "@/app/[locale]/about/components/RecentGithubActivity";
import Youtube from "@/app/[locale]/about/components/Youtube";
import SecurityPractices from "@/app/[locale]/about/components/SecurityPractices";
import AI from "@/app/[locale]/about/components/AI";
import Blog from "@/app/[locale]/about/components/Blog";
import Certificate from "@/app/[locale]/about/components/Certificate";
import EngineeringPhilosophy from "@/app/[locale]/about/components/EngineeringPhilosophy";
import Github from "@/app/[locale]/components/Github";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getAlternates } from "@/components/common/metadata/Alternatives";

export const metadata: Metadata = {
  title: "About - Melvin Jones Repol",
  description:
    "I partner with teams to build practical, scalable software that improves delivery speed, reduces operational costs, and keeps systems stable in production.",
  keywords: ["about", "melvin jones repol"],
  alternates: getAlternates("/about"),
  openGraph: {
    title: "About - Melvin Jones Repol",
    description:
      "I partner with teams to build practical, scalable software that improves delivery speed, reduces operational costs, and keeps systems stable in production.",
    url: "https://www.melvinjonesrepol.com/about",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
        width: 1200,
        height: 630,
        alt: "About Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Melvin Jones Repol",
    description:
      "I partner with teams to build practical, scalable software that improves delivery speed, reduces operational costs, and keeps systems stable in production.",
    images: [
      "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
    ],
    creator: "@mrepol742",
  },
};

export default function About() {
  const t = useTranslations("about");

  return (
    <>
      <main className="p-3 md:p-8">
        <section className="border-b mb-10 min-h-screen flex items-center">
          <div className="mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold tracking-widest uppercase mb-3">
                  {t("label")}
                </p>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  {t("name")}
                </h1>
                <p className="mt-4 text-base md:text-lg leading-relaxed">
                  {t("intro")}
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border p-4">
                    <p className="text-xs uppercase tracking-wide mb-1">
                      {t("role_label")}
                    </p>
                    <p className="font-medium">{t("role_value")}</p>
                  </div>
                  <div className="rounded-xl border p-4">
                    <p className="text-xs uppercase tracking-wide mb-1">
                      {t("focus_label")}
                    </p>
                    <p className="font-medium">{t("focus_value")}</p>
                  </div>
                  <div className="rounded-xl border p-4 md:col-span-2">
                    <p className="text-xs uppercase tracking-wide mb-1">
                      {t("expertise_label")}
                    </p>
                    <p className="font-medium">{t("expertise_value")}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm leading-relaxed">
                    {t("delivery_mindset")}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 flex lg:justify-end">
                <div className="relative">
                  <Image
                    src="/images/melvin-jones-repol-black.jpg"
                    alt={t("profile_alt")}
                    className="rounded-2xl object-cover transition-transform duration-300 hover:scale-[1.02]"
                    width={420}
                    height={480}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative py-14 md:py-28 overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <div className="text-center mb-10 md:mb-14">
              <h4
                className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-3"
                data-aos="fade-up"
              >
                {t("engineering_philosophy_label")}
              </h4>
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

        <div className="relative py-14 md:py-28  overflow-hidden">
          <div className="text-center">
            <h4
              className="text-sm font-semibold tracking-widest text-cyan-500 uppercase mb-3"
              data-aos="fade-up"
            >
              {t("coding_activity_label")}
            </h4>
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
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h4
                className="text-sm font-semibold tracking-widest text-orange-500 uppercase mb-3"
                data-aos="fade-up"
              >
                {t("security_label")}
              </h4>
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
              <h4
                className="text-sm font-semibold tracking-widest text-orange-500 uppercase mb-3"
                data-aos="fade-up"
              >
                {t("ai_label")}
              </h4>
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

        <div className="relative py-14 md:py-28  overflow-hidden">
          <div className="text-center">
            <h4
              className="text-sm font-semibold tracking-widest text-fuchsia-500 uppercase mb-3"
              data-aos="fade-up"
            >
              {t("certifications_label")}
            </h4>
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
            <h4
              className="text-sm font-semibold tracking-widest text-green-500 uppercase mb-3"
              data-aos="fade-up"
            >
              {t("blog_label")}
            </h4>
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

          <Blog />
        </div>

        <Steam />

        <div className="relative py-14 md:py-28  overflow-hidden">
          <div className="text-center">
            <h4
              className="text-sm font-semibold tracking-widest text-orange-500 uppercase mb-3"
              data-aos="fade-up"
            >
              {t("youtube_label")}
            </h4>
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
          <div className="mx-auto max-w-4xl text-center">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-widest uppercase"
              data-aos="fade-up"
            >
              <span className="inline-block h-2 w-2 rounded-full border" />
              {t("community_label")}
            </div>

            <h2
              className="mt-4 text-3xl md:text-4xl font-bold"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {t("community_title")}
            </h2>

            <p className="max-w-2xl mx-auto mt-4" data-aos="fade-up">
              {t("community_description_1")}
            </p>

            <p className="max-w-2xl mx-auto mt-4" data-aos="fade-up">
              {t("community_description_2")}
            </p>

            <div
              className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-3 text-sm md:grid-cols-3"
              data-aos="fade-up"
            >
              <div className="rounded-lg border px-4 py-3">
                <div className="text-lg font-semibold">
                  {t("community_card1_title")}
                </div>
                <div className="text-xs uppercase tracking-wider">
                  {t("community_card1_desc")}
                </div>
              </div>
              <div className="rounded-lg border px-4 py-3">
                <div className="text-lg font-semibold">
                  {t("community_card2_title")}
                </div>
                <div className="text-xs uppercase tracking-wider">
                  {t("community_card2_desc")}
                </div>
              </div>
              <div className="rounded-lg border px-4 py-3">
                <div className="text-lg font-semibold">
                  {t("community_card3_title")}
                </div>
                <div className="text-xs uppercase tracking-wider">
                  {t("community_card3_desc")}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col md:flex-row justify-center gap-2 md:gap-4">
              <Link
                href="https://hallofcodes.vercel.app"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Button icon={faCodeSolid} className="border border-current">
                  {t("community_cta_join")}
                </Button>
              </Link>
              <Link
                href="https://github.com/hallofcodes"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Button icon={faGithub} className="border border-current">
                  {t("community_cta_github")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <RecentGithubActivityWrapper>
        <RecentGithubActivity />
      </RecentGithubActivityWrapper>
    </>
  );
}
