import Projects from "./projects.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Melvin Jones Repol",
  description: "Here are some of my projects that I have worked on.",
  keywords: [
    "Projects",
    "Axleshift Core 1",
    "Ulisha Store",
    "Webvium Browser",
    "Webvium VPN",
    "Point of Sale",
    "Orion Chatbot",
    "Melvin Jones Repol",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/projects",
  },
  openGraph: {
    title: "Projects - Melvin Jones Repol",
    description: "Here are some of my projects that I have worked on.",
    url: "https://www.melvinjonesrepol.com/projects",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.png",
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
    description: "Here are some of my projects that I have worked on.",
    images: ["https://www.melvinjonesrepol.com/images/melvinjonesrepol.png"],
    creator: "@mrepol742",
  },
};

export default function ProjectsPage() {
  return <Projects />;
}
