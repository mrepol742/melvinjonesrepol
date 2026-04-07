import { Metadata } from "next";
import ProjectSection from "@/components/features/projects/ProjectSection";

export const metadata: Metadata = {
  title: "Projects - Melvin Jones Repol",
  description:
    "Explore a collection of my personal software development projects, experiments, and tools I’ve built using modern technologies.",
  keywords: [
    "Projects",
    "Software Development",
    "Personal Projects",
    "Programming",
    "Coding",
    "Web Development",
    "Open Source",
    "GitHub Projects",
    "Tech Portfolio",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/projects",
  },
  openGraph: {
    title: "Projects - Melvin Jones Repol",
    description:
      "Explore a collection of my personal software development projects, experiments, and tools I’ve built using modern technologies.",
    url: "https://www.melvinjonesrepol.com/projects",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
        width: 1200,
        height: 630,
        alt: "Projects Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Melvin Jones Repol",
    description:
      "Explore a collection of my personal software development projects, experiments, and tools I’ve built using modern technologies.",
    images: [
      "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
    ],
    creator: "@mrepol742",
  },
};

export default async function Projects({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sParams = await searchParams;
  const query = Array.isArray(sParams.q)
    ? sParams.q.join(", ")
    : sParams.q || "";


  return <ProjectSection query={query} />;
}
