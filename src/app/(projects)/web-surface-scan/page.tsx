import Project from "@/components/ui/Project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Surface Scan - Melvin Jones Repol",
  description:
    "A lightweight developer-focused tool for analyzing a website’s technology stack, integrations, and potential security flaws using automated browser inspection.",
  keywords: [
    "Web Surface Scan",
    "Website Analysis Tool",
    "Technology Stack Analysis",
    "Integration Analysis",
    "Security Flaw Detection",
    "Website Inspection",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/web-surface-scan",
  },
  openGraph: {
    title: "Web Surface Scan - Melvin Jones Repol",
    description:
      "A lightweight developer-focused tool for analyzing a website’s technology stack, integrations, and potential security flaws using automated browser inspection.",
    url: "https://www.melvinjonesrepol.com/web-surface-scan",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
        width: 800,
        height: 600,
        alt: "Web Surface Scan Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Surface Scan - Melvin Jones Repol",
    description:
      "A lightweight developer-focused tool for analyzing a website’s technology stack, integrations, and potential security flaws using automated browser inspection.",
    images: [
      "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
    ],
    creator: "@mrepol742",
  },
};

const features = [
  {
    title: "Technology Stack Analysis",
    description:
      "Web Surface Scan identifies the underlying technologies powering a website, including frameworks, libraries, and server software.",
  },
  {
    title: "Integration Detection",
    description:
      "The tool detects third-party integrations such as analytics, advertising networks, and content delivery networks (CDNs) used by the website.",
  },
  {
    title: "Security Flaw Detection",
    description:
      "Web Surface Scan analyzes the website for common security vulnerabilities, providing insights into potential risks and areas for improvement.",
  },
  {
    title: "Fire Emulated Attack Vectors",
    description:
      "The tool simulates various attack vectors to identify potential security weaknesses in the website's defenses.",
  },
  {
    title: "Developer-Friendly Interface",
    description:
      "Web Surface Scan is pure CLI tool designed with developers in mind, providing clear and actionable insights without unnecessary complexity.",
  },
];

export default function WebSurfaceScan() {
  return (
    <>
      <Project
        project={{
          title: "Web Surface Scan",
          description:
            "A lightweight developer-focused tool for analyzing a website’s technology stack, integrations, and potential security flaws using automated browser inspection.",
          description_long:
            "Web Surface Scan is a lightweight developer-focused tool designed to analyze a website’s technology stack, integrations, and potential security flaws using automated browser inspection. It provides insights into the underlying technologies powering a website, identifies third-party integrations, and detects common security vulnerabilities. This tool is ideal for developers, security researchers, and anyone interested in understanding the technical aspects of a website.",
          view_source_url: "https://github.com/mrepol742/web-surface-scan",
          is_open_source: true,
          is_freeware: true,
          license: "MIT License",
          preview_image:
            "https://opengraph.githubassets.com/1/mrepol742/web-surface-scan",
          preview_image_alt: "Web Surface Scan Screenshot",
          features,
          resources: [
            {
              title: "View Source Code on Github",
              url: "https://github.com/mrepol742/web-surface-scan",
            },
          ],
        }}
      />
    </>
  );
}
