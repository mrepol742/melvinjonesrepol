import WorkExperienceCard from "@/components/WorkExperienceCard";
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

export default function WorkExperience() {
  return (
    <main className="my-18 p-3 md:p-8">
      <section>
        <h1 className="text-2xl font-semibold" data-aos="fade-up">
          Professional Work Experience
        </h1>
        <p className="mt-2" data-aos="fade-up" data-aos-delay="100">
          A summary of my professional work experience, including the roles,
          responsibilities, and projects I have contributed to throughout my
          career in development and technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <WorkExperienceCard
            company="Freelance"
            title="Software Engineer"
            description="Software Engineer I develop, deploy, and maintain efficient and reliable software and websites tailored to meet customer needs, based on system analysis, design, and business models. My responsibilities include gathering requirements, designing scalable architectures, implementing robust code, and ensuring quality through testing. I also handle deployment, monitor performance, and provide ongoing support and updates. I collaborate with clients and teams to deliver solutions using modern technologies and best practices, focusing on usability, security, and maintainability."
            date="2021 - Present"
          />
          <WorkExperienceCard
            company="Apptrade Inc."
            title="IT Staff Intern"
            description="Incharge of maintaining the IT infrastructure, including hardware, software, and network. Responsible for troubleshooting technical issues, providing support to end-users, and ensuring the efficiency and reliability of the organization's IT system."
            date="April - June 2025"
            cert="https://drive.google.com/file/d/1JZejlS9Dkb3rJkcx3UdfsaDh281d7QZ4/view?usp=drive_link"
          />
        </div>
      </section>
    </main>
  );
}
