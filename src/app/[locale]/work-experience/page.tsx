import { Metadata } from "next";

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
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/work-experience",
  },
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

export default function WorkExperiencePage() {
  const experiences = [
    {
      company: "Freelance",
      title: "Software Engineer",
      date: "2021 - Present",
      description:
        "Delivered custom web and mobile applications for capstone students, business clients, and independent projects (public and private). Led the full software development lifecycle—from requirements gathering and system planning to design, development, and production deployment. Translated client needs into scalable, production-ready solutions and provided ongoing maintenance and improvements. Utilized technologies such as Laravel, React, Next.js, Node.js, Java and Kotlin to build efficient, user-focused applications aligned with business and project goals.",
    },
    {
      company: "Apptrade Inc.",
      title: "IT Staff Intern",
      date: "April 2025 - June 2025 (250hrs)",
      description:
        "Incharge of maintaining the IT infrastructure, including hardware, software, and network. Responsible for troubleshooting technical issues, providing support to end-users, and ensuring the efficiency and reliability of the organization's IT system.",
      cert: "/certificates/internship-apptrade-inc.jpg",
    },
  ];

  return (
    <main className="my-18 p-3 md:p-8">
      <section>
        <h1 className="text-2xl font-semibold" data-aos="fade-up">
          Professional Work Experience
        </h1>
        <p
          className="mt-2 mb-10 opacity-90"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          A summary of my professional work experience, including the roles,
          responsibilities, and projects I have contributed to throughout my
          career in development and technology.
        </p>

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

                <div className="md:mt-10 border border-gray-800 md:border-none p-5 md:p-0 rounded-2xl md:rounded-none ">
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
                        View Certificate &rarr;
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
