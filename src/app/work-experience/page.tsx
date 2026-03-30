import { Metadata } from "next";
import WorkExperience from "../../components/features/work-experiences/WorkExperiencesSection";

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
  return <WorkExperience />;
}
