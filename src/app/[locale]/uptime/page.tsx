import { Metadata } from "next";
import SystemStatus from "./components/SystemStatus";
import { getAlternates } from "@/components/common/metadata/Alternatives";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Uptime - Melvin Jones Repol",
    description: "System uptime and incident monitoring for Melvin Jones Repol.",
    keywords: [
    "uptime",
    "incident",
    "monitoring",
    "system",
    "melvin jones repol",
  ],
    alternates: getAlternates("/uptime", locale),
    openGraph: {
    title: "Uptime - Melvin Jones Repol",
    description:
      "System uptime and incident monitoring for Melvin Jones Repol.",
    url: "https://www.melvinjonesrepol.com/uptime",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
        width: 1200,
        height: 630,
        alt: "Uptime Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    twitter: {
    card: "summary_large_image",
    title: "Uptime - Melvin Jones Repol",
    description:
      "System uptime and incident monitoring for Melvin Jones Repol.",
    images: [
      "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
    ],
    creator: "@mrepol742",
  },
  };
}

export default function Uptime() {
  return <SystemStatus />;
}
