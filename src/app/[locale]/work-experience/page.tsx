import { getAlternates } from "@/components/common/metadata/Alternatives";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import WorkExperienceCard from "./components/WorkExperienceCard";

export type Experience = {
  company: string;
  title: string;
  date: string;
  description: string;
  cert?: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Work Experience - Melvin Jones Repol",
    description:
      "A summary of my professional work experience, including the roles, responsibilities, and projects I have contributed to throughout my career in development and technology.",
    keywords: [
      "Work Experience",
      "Melvin Jones Repol",
      "Software Engineer",
      "Freelance Developer",
      "IT Staff",
      "Web Development",
      "Full-Stack Developer",
      "DevOps",
      "Professional Experience",
      "Career History",
      "Software Development",
      "IT Support",
    ],
    alternates: getAlternates("/work-experience", locale),
    openGraph: {
      title: "Work Experience - Melvin Jones Repol",
      description:
        "A summary of my professional work experience, including the roles, responsibilities, and projects I have contributed to throughout my career in development and technology.",
      url: "https://www.melvinjonesrepol.com/work-experience",
      siteName: "Melvin Jones Repol",
      images: [
        {
          url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
          width: 1200,
          height: 630,
          alt: "Work Experience Cover",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Work Experience - Melvin Jones Repol",
      description:
        "A summary of my professional work experience, including the roles, responsibilities, and projects I have contributed to throughout my career in development and technology.",
      images: [
        "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
      ],
      creator: "@mrepol742",
    },
  };
}

export default async function WorkExperiencePage() {
  const t = await getTranslations("work_experience");
  const experiences = [
    {
      company: t("experience.company_freelance.company"),
      title: t("experience.company_freelance.title"),
      date: t("experience.company_freelance.date"),
      description: t("experience.company_freelance.description"),
    },
    {
      company: t("experience.company_apptrade.company"),
      title: t("experience.company_apptrade.title"),
      date: t("experience.company_apptrade.date"),
      description: t("experience.company_apptrade.description"),
      cert: t("experience.company_apptrade.cert"),
    },
    {
      company: t("experience.company_uptodatewebdesign.company"),
      title: t("experience.company_uptodatewebdesign.title"),
      date: t("experience.company_uptodatewebdesign.date"),
      description: t("experience.company_uptodatewebdesign.description"),
    },
    {
      company: t("experience.company_independent_consultant.company"),
      title: t("experience.company_independent_consultant.title"),
      date: t("experience.company_independent_consultant.date"),
      description: t("experience.company_independent_consultant.description"),
    },
  ];

  return (
    <main>
      <section className="relative min-h-screen overflow-hidden border-b border-zinc-800">
        <div className="relative flex min-h-screen flex-col px-6 py-12 md:px-10">
          <div className="my-auto py-14">
            <h1 className="text-[14vw] sm:text-[10vw] lg:text-[7.5vw] font-black tracking-tighter leading-[0.85] mb-8">
              Work
              <br />
              <span className="opacity-40">experience</span>
              <br />& roles.
            </h1>

            <p
              className="max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t("description")}
            </p>
          </div>

          <div
            className="border-t border-zinc-800 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div>
              <p className="text-4xl font-black">{experiences.length}</p>
              <p className="mt-1 text-sm text-zinc-400">{t("roles_label")}</p>
            </div>
            <div>
              <p className="text-4xl font-black">6+</p>
              <p className="mt-1 text-sm text-zinc-400">{t("years_label")}</p>
            </div>
            <div className="col-span-2 flex flex-wrap items-center gap-2">
              {["Freelance", "IT Intern", "Full-Stack", "DevOps"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-400 px-3 py-1 text-xs text-zinc-400"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 my-6 md:px-10">
        <div className="relative">
          {/* Spine */}
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 md:-translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Desktop: alternating columns */}
                  <div className="hidden md:flex items-start">
                    {/* Left half */}
                    <div className="w-1/2 flex justify-end pr-8">
                      {isLeft && (
                        <div className="relative w-full max-w-lg">
                          <div className="absolute top-7 -right-8 w-8 h-px bg-zinc-700" />
                          <WorkExperienceCard
                            exp={exp}
                            viewLabel={t("view_certificate")}
                          />
                        </div>
                      )}
                    </div>

                    {/* Dot */}
                    <div className="flex-shrink-0 z-10 mt-6 -mx-2">
                      <div className="w-4 h-4 rounded-full ring-4 ring-black bg-zinc-600" />
                    </div>

                    {/* Right half */}
                    <div className="w-1/2 pl-8">
                      {!isLeft && (
                        <div className="relative w-full max-w-lg">
                          <div className="absolute top-7 -left-8 w-8 h-px bg-zinc-700" />
                          <WorkExperienceCard
                            exp={exp}
                            viewLabel={t("view_certificate")}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile: single column */}
                  <div className="flex md:hidden items-start gap-5">
                    <div className="flex-shrink-0 z-10 mt-7">
                      <div className="w-3 h-3 rounded-full ring-4 ring-black bg-zinc-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <WorkExperienceCard
                        exp={exp}
                        viewLabel={t("view_certificate")}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
