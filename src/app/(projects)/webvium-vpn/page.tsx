import HorizontalAdDisplayUnit from "@/components/ads/HorizontalAdDisplay";
import DisqusComments from "@/components/DisqusComments";
import Project from "@/components/Project";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download Webvium VPN - Melvin Jones Repol",
  description:
    "Anonymous, Secured, Private and the fastest Virtual Private Network.",
  keywords: [
    "Webvium VPN",
    "Virtual Private Network",
    "VPN",
    "Anonymous VPN",
    "Secured VPN",
    "Private VPN",
    "Fast VPN",
    "Android VPN",
    "Internet Security",
    "Online Privacy",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/webvium-vpn",
  },
  openGraph: {
    title: "Download Webvium VPN - Melvin Jones Repol",
    description:
      "Anonymous, Secured, Private and the fastest Virtual Private Network.",
    url: "https://www.melvinjonesrepol.com/webvium-vpn",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/webviumvpn-banner.png",
        width: 800,
        height: 600,
        alt: "Webvium VPN Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Webvium VPN - Melvin Jones Repol",
    description:
      "Anonymous, Secured, Private and the fastest Virtual Private Network.",
    images: ["https://www.melvinjonesrepol.com/images/webviumvpn-banner.png"],
    creator: "@mrepol742",
  },
};

const Images = [
  "/images/webviumvpn-1.jpg",
  "/images/webviumvpn-2.jpg",
  "/images/webviumvpn-3.jpg",
  "/images/webviumvpn-4.jpg",
];

export default function WebviumVPN() {
  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Webvium VPN",
    operatingSystem: "ANDROID",
    applicationCategory: "UtilitiesApplication",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "6030",
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
    name: "Webvium VPN - Anonymous, Secured, Private and the fastest Virtual Private Network.",
    url: "https://www.melvinjonesrepol.com/webvium-vpn",
    description:
      "Inspired from Webvium, Webvium VPN is a lightweight android VPN app focuses in speed, simplicity, security and privacy.",
    thumbnailUrl: "https://www.melvinjonesrepol.com/images/webviumvpn-1.jpg",
    uploadDate: "2025-12-01T08:00:00+08:00",
    duration: "PT23S",
    contentUrl: "https://www.melvinjonesrepol.com/videos/webvium-vpn.mp4",
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: {
        "@type": "WatchAction",
      },
      userInteractionCount: 102111,
    },
  };

  const features = [
    {
      title: "Fast and Reliable",
      description:
        "Webvium VPN is designed to provide lightning-fast speeds and a stable connection, ensuring you can browse, stream, and download without interruptions.",
    },
    {
      title: "Strong Security",
      description:
        "With robust encryption protocols, Webvium VPN keeps your data safe from hackers and prying eyes, giving you peace of mind while online.",
    },
    {
      title: "Privacy Protection",
      description:
        "Webvium VPN hides your IP address and location, allowing you to browse the internet anonymously and protect your online identity.",
    },
    {
      title: "User-Friendly Interface",
      description:
        "Webvium VPN features a simple and intuitive interface, making it easy for anyone to connect to a secure VPN server with just a few taps.",
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
          title: "Webvium VPN",
          description:
            "Inspired from Webvium, Webvium VPN is a lightweight android VPN app focuses in speed, simplicity, security and privacy.",
          description_long:
            "Webvium VPN is a project inspired from Webvium Browser, aims to be the lightest, fastest, secured, private and full-featured android VPN app.",
          download_url:
            "https://released.melvinjonesrepol.com/android/webvium-vpn.apk",
          is_open_source: false,
          is_no_longer_maintained: true,
          is_freeware: true,
          license: "Proprietary Software",
          preview_image: "/images/webviumvpn-banner.png",
          preview_image_alt: "Webvium VPN Screenshot",
          features,
          resources: [
            {
              title: "Download Webvium VPN on Uptodown",
              url: "https://webvium-vpn.en.uptodown.com/android",
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
