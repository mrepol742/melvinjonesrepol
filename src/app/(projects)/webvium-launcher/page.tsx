import HorizontalAdDisplayUnit from "@/components/ads/HorizontalAdDisplay";
import DisqusComments from "@/components/DisqusComments";
import Project from "@/components/Project";
import { fetchGitCommits } from "@/lib/github/fetchGitCommits";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download Webvium Launcher - Melvin Jones Repol",
  description:
    "Lightweight, modern and lightning-fast Android launcher thats currently in development. Built with speed, simplicity and customization in mind.",
  keywords: [
    "Webvium Launcher",
    "Android Launcher",
    "Lightweight Launcher",
    "Fast Launcher",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/webvium-launcher",
  },
  openGraph: {
    title: "Download Webvium Launcher - Melvin Jones Repol",
    description:
      "Lightweight, modern and lightning-fast Android launcher thats currently in development. Built with speed, simplicity and customization in mind.",

    url: "https://www.melvinjonesrepol.com/webvium-launcher",
    siteName: "Melvin Jones Repol",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Webvium Launcher - Melvin Jones Repol",
    description:
      "Lightweight, modern and lightning-fast Android launcher thats currently in development. Built with speed, simplicity and customization in mind.",
    creator: "@mrepol742",
  },
};

export default async function WebviumLauncher() {
  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Webvium Launcher",
    operatingSystem: "ANDROID",
    applicationCategory: "BrowserApplication",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "0",
      reviewCount: "0",
    },
    offers: {
      "@type": "Offer",
      price: "0",
    },
    creator: {
      "@type": "Person",
      name: "Melvin Jones Repol",
      url: "https://www.melvinjonesrepol.com",
    },
  };

  const features = [
    {
      title: "Fast and Lightweight",
      description:
        "Experience blazing-fast launch speeds with Webvium's lightweight design that ensures quick load times and smooth performance.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplication),
        }}
      />
      <Project
        project={{
          title: "Webvium Launcher",
          description:
            "Lightweight, modern and lightning-fast Android launcher thats currently in development. Built with speed, simplicity and customization in mind.",
          description_long:
            "Webvium Launcher is an Android launcher designed to provide users with a fast, efficient, and customizable home screen experience. It focuses on simplicity and performance, making it ideal for users who want a clutter-free interface without sacrificing functionality. With its lightweight design, Webvium Launcher ensures quick load times and smooth navigation, even on devices with limited resources. Key features include customizable app icons, gesture controls, and a minimalist aesthetic that enhances user productivity.",
          download_url:
            "https://released.melvinjonesrepol.com/android/webvium-launcher.apk",
          is_open_source: true,
          is_freeware: false,
          license: "Apache License 2.0",
          preview_image: "/images/webvium-banner.png",
          preview_image_alt: "Webvium Launcher Screenshot",
          features,
          resources: [
            {
              title: "View Source Code on Github",
              url: "https://github.com/webvium/webvium-launcher",
            },
            {
              title: "Follow us on Github",
              url: "https://github.com/webvium",
            },
            {
              title: "Privacy Policy",
              url: "/legal/privacy-policy",
            },
            {
              title: "Terms of Service",
              url: "/legal/terms-of-service",
            },
          ],
        }}
      />
    </>
  );
}
