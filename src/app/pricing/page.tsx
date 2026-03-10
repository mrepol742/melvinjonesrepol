import Pricing from "@/components/pricing/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Melvin Jones Repol",
  description:
    "Explore my pricing plans for professional full-stack development services.",
  keywords: [
    "Pricing",
    "Full-Stack Development",
    "Maintenance",
    "Long-Term Engagement",
    "Project-Based Pricing",
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "Consulting",
    "Static Site Development",
    "Website to Native App",
    "Website to APK",
    "Web App Development",
    "Web App",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/pricing",
  },
  openGraph: {
    title: "Pricing - Melvin Jones Repol",
    description:
      "Explore my pricing plans for professional full-stack development services.",
    url: "https://www.melvinjonesrepol.com/pricing",
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
    title: "Pricing - Melvin Jones Repol",
    description:
      "Explore my pricing plans for professional full-stack development services.",
    images: [
      "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
    ],
    creator: "@mrepol742",
  },
};

export default function PricingPage() {
  return <Pricing />;
}
