import HorizontalAdDisplayUnit from "@/components/ads/HorizontalAdDisplay";
import DisqusComments from "@/components/DisqusComments";
import Project from "@/components/Project";
import { fetchGitCommits } from "@/lib/github/fetchGitCommits";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download Webvium Browser - Melvin Jones Repol",
  description:
    "A lightweight, lightning-fast, ad-blocker and beautifully designed web browser for Android.",
  keywords: [
    "Webvium Browser",
    "Android Browser",
    "Lightweight Browser",
    "Fast Browser",
    "Material Design",
    "Full-Featured Browser",
    "Web Browser",
    "Mobile Browser",
    "Internet Browser",
    "Privacy-Focused Browser",
    "Secure Browser",
    "Browser Adblocker",
    "Adblock",
    "Built-in browser adblock",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/webvium-browser",
  },
  openGraph: {
    title: "Download Webvium Browser - Melvin Jones Repol",
    description:
      "A lightweight, lightning-fast, ad-blocker and beautifully designed web browser for Android.",
    url: "https://www.melvinjonesrepol.com/webvium-browser",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/webvium-banner.png",
        width: 800,
        height: 600,
        alt: "Webvium Browser Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Webvium Browser - Melvin Jones Repol",
    description:
      "A lightweight, lightning-fast, ad-blocker and beautifully designed web browser for Android.",
    images: ["https://www.melvinjonesrepol.com/images/webvium-banner.png"],
    creator: "@mrepol742",
  },
};

const Images = [
  "/images/webvium-1.jpg",
  "/images/webvium-2.jpg",
  "/images/webvium-3.jpg",
  "/images/webvium-4.jpg",
  "/images/webvium-5.jpg",
  "/images/webvium-6.jpg",
  "/images/webvium-7.jpg",
  "/images/webvium-8.jpg",
  "/images/webvium-9.jpg",
  "/images/webvium-10.jpg",
  "/images/webvium-11.jpg",
];

export default async function WebviumBrowser() {
  const gitCommits = await fetchGitCommits({
    owner: "webvium",
    repo: "webvium",
    limit: 10,
  });

  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Webvium Browser",
    operatingSystem: "ANDROID",
    applicationCategory: "BrowserApplication",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "23473",
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

  const videoObject = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Webvium - A lightweight, lightning-fast, ad-blocker and beautifully designed web browser for Android.",
    url: "https://www.melvinjonesrepol.com/webvium-browser",
    description:
      "A Project that aims to be the lightest, fastest, secured, private and full-featured android web browser. Programmed and design from Scratch.",
    thumbnailUrl: "https://www.melvinjonesrepol.com/images/webvium-banner.png",
    uploadDate: "2025-12-01T08:00:00+08:00",
    duration: "PT27S",
    contentUrl: "https://www.melvinjonesrepol.com/videos/webvium-browser.mp4",
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: {
        "@type": "WatchAction",
      },
      userInteractionCount: 5647018,
    },
  };

  const features = [
    {
      title: "Endless Customization",
      description:
        "Personalize your browsing experience like never before. Switch between light and dark themes, add soft screen curves, or set your favorite photo as the background. Webvium lets you redefine how your browser looks and feels—just the way you like it.",
    },
    {
      title: "Lightweight. Lightning Fast.",
      description:
        "Webvium is built with speed and simplicity in mind. It installs in seconds, loads instantly, and runs smoother than ever. Experience faster browsing, quicker downloads, and effortless sharing—all in one ultra-light package.",
    },
    {
      title: "Beautiful Material Design",
      description:
        "Dive into a clean, modern interface inspired by Google’s Material Design. With carefully chosen colors, icons, and the elegant Maven Pro font, Webvium delivers a fresh, minimal, and intuitive browsing experience you’ll love to use.",
    },
    {
      title: "Total Control at Your Fingertips",
      description:
        "You’re always in charge. From web preferences to privacy settings, Webvium gives you complete control over how you browse. Adjust anything, anytime—because you’re the true admin of your experience.",
    },
    {
      title: "Unmatched Privacy Protection",
      description:
        "Your data is yours alone. Webvium never tracks, collects, or shares your browsing activity. Enjoy complete anonymity and peace of mind with our commitment to total privacy.",
    },
    {
      title: "Your Data, Your Power",
      description:
        "Back up everything—your history, bookmarks, searches, and settings—with just a tap. Webvium lets you export and restore your data whenever you need it, keeping you in full control at all times.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoObject),
        }}
      />
      <Project
        project={{
          title: "Webvium Browser",
          description:
            "A lightweight, lightning-fast, ad-blocker and beautifully designed web browser for Android.",
          description_long:
            "I built Webvium on 2018 with the vision of creating the lightest, fastest, most secure, private and full-featured android web browser. Programmed and design from Scratch. Webvium is built with speed and simplicity in mind. It installs in seconds, loads instantly, and runs smoother than ever. Experience faster browsing, quicker downloads, and effortless sharing—all in one ultra-light package.",
          download_url:
            "https://released.melvinjonesrepol.com/android/webvium-browser.apk",
          is_open_source: false,
          is_freeware: true,
          license: "Proprietary Software",
          preview_image: "/images/webvium-banner.png",
          preview_image_alt: "Webvium Browser Screenshot",
          features,
          resources: [
            {
              title: "Download Webvium Browser on Uptodown",
              url: "https://webvium.en.uptodown.com/android",
            },
            {
              title: "Privacy Policy",
              url: "/webvium-browser/privacy-policy",
            },
            {
              title: "Terms of Service",
              url: "/webvium-browser/terms-of-service",
            },
            {
              title: "Follow us on Github",
              url: "https://github.com/webvium",
            },
          ],
        }}
      />
    </>
  );
}
