import { getAlternates } from "@/components/common/metadata/Alternatives";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
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
  alternates: getAlternates("/work-experience"),
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

      <section className="px-6 py-24 md:px-10">
        <div className="relative mt-12">
          <div className="absolute top-4 left-1 w-full h-0.5 bg-gray-800 hidden md:block" />

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:overflow-x-auto pb-8 snap-x scrollbar-hide">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative md:w-96 flex-shrink-0 snap-start"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="mt-2 ms-1 hidden md:block absolute -top-1 left-0 w-6 h-6 rounded-full bg-[#7873f5] z-10 ring-2 ring-gray-800" />

                <div className="md:mt-10 border border-gray-800 md:border-none p-5 md:p-0 rounded-2xl md:rounded-none">
                  <span className="text-xs font-mono mb-2 block opacity-70">
                    {exp.date}
                  </span>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <h4 className="text-md font-medium mb-4 opacity-80">
                    {exp.company}
                  </h4>
                  <p className="text-sm leading-relaxed opacity-90">
                    {exp.description}
                  </p>

                  {exp.cert && (
                    <div className="mt-5">
                      <a
                        href={exp.cert}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium transition-colors flex items-center gap-1 underline underline-offset-2 hover:opacity-80"
                      >
                        {t("view_certificate")}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <span className="text-xs">{t("swipe_hint")}</span>
        </div>
      </section>
    </main>
  );
}
