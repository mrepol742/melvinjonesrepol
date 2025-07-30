import WorkExperienceCard from "@/components/WorkExperienceCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience - Melvin Jones Repol",
  description: "Here are some of the work experiences I had.",
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
  openGraph: {
    title: "Work Experience - Melvin Jones Repol",
    description: "Here are some of the work experiences I had.",
    url: "https://www.melvinjonesrepol.com/work-experience",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "/images/melvinjonesrepol.png",
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
    description: "Here are some of the work experiences I had.",
    images: ["/images/melvinjonesrepol.png"],
    creator: "@mrepol742",
  },
};

export default function WorkExperience() {
  return (
    <main className="p-8">
      <section>
        <h1 className="text-2xl font-semibold" data-aos="fade-right">
          Work Experience
        </h1>
        <p className="text-gray-300" data-aos="fade-right" data-aos-delay="100">
          Here are some of the work experiences I had.
        </p>
        <div className="mt-4">
          <WorkExperienceCard
            title="Freelance"
            description="Software Engineer I develop, deploy, and maintain efficient and reliable software and websites tailored to meet customer needs, based on system analysis, design, and business models. My responsibilities include gathering requirements, designing scalable architectures, implementing robust code, and ensuring quality through testing. I also handle deployment, monitor performance, and provide ongoing support and updates. I collaborate with clients and teams to deliver solutions using modern technologies and best practices, focusing on usability, security, and maintainability."
            date="2021 - Present"
          />
          <WorkExperienceCard
            title="Intership"
            description="IT Staff Incharge of maintaining the IT infrastructure, including hardware, software, and network. Responsible for troubleshooting technical issues, providing support to end-users, and ensuring the efficiency and reliability of the organization's IT system."
            date="April - June 2025"
          />
        </div>
      </section>
    </main>
  );
}
