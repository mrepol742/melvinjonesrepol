import UserAgentTool from "@/components/tools/UserAgent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your User Agent  - Melvin Jones Repol",
  description:
    "Discover your browser and device information with our User Agent Tool. Get insights into your operating system, browser version, and more. Perfect for developers and curious users alike.",
  keywords: [
    "User Agent",
    "User Agent Tool",
    "Browser Information",
    "Device Information",
    "Operating System",
    "User Agent Parser",
    "User Agent Analyzer",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/tools/user-agent",
  },
  openGraph: {
    title: "QR Code Generator - Melvin Jones Repol",
    description:
      "Discover your browser and device information with our User Agent Tool. Get insights into your operating system, browser version, and more. Perfect for developers and curious users alike.",
    url: "https://www.melvinjonesrepol.com/tools/user-agent",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.png",
        width: 800,
        height: 600,
        alt: "Melvin Jones Repol Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your User Agent - Melvin Jones Repol",
    description:
      "Discover your browser and device information with our User Agent Tool. Get insights into your operating system, browser version, and more. Perfect for developers and curious users alike.",
    images: ["https://www.melvinjonesrepol.com/images/melvinjonesrepol.png"],
    creator: "@mrepol742",
  },
};

export default function UserAgent() {
  return <UserAgentTool />;
}
