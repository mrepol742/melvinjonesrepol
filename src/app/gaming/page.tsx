import Gaming from "./gaming.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaming - Melvin Jones Repol",
  description: "Here are some of my gaming achievements and activities.",
  keywords: [
    "Gaming",
    "Melvin Jones Repol",
    "Steam Games",
    "Gaming Achievements",
    "Gaming Activities",
    "Gamer Profile",
    "Gaming Community",
    "Video Games",
    "PC Gaming",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/gaming",
  },
  openGraph: {
    title: "Gaming - Melvin Jones Repol",
    description: "Here are some of my gaming achievements and activities.",
    url: "https://www.melvinjonesrepol.com/gaming",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.png",
        width: 1200,
        height: 630,
        alt: "Gaming Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaming - Melvin Jones Repol",
    description: "Here are some of my gaming achievements and activities.",
    images: ["https://www.melvinjonesrepol.com/images/melvinjonesrepol.png"],
    creator: "@mrepol742",
  },
};

export default function GamingPage() {
  return <Gaming />;
}
