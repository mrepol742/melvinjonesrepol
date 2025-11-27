import HorizontalAdDisplayUnit from "@/components/ads/HorizontalAdDisplay";
import DisqusComments from "@/components/DisqusComments";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webvium VPN - Melvin Jones Repol",
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
    title: "Webvium VPN - Melvin Jones Repol",
    description:
      "Anonymous, Secured, Private and the fastest Virtual Private Network.",
    url: "https://www.melvinjonesrepol.com/webvium-vpn",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/webviumvpn-1.jpg",
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
    title: "Webvium VPN - Melvin Jones Repol",
    description:
      "Anonymous, Secured, Private and the fastest Virtual Private Network.",
    images: ["https://www.melvinjonesrepol.com/images/webviumvpn-1.jpg"],
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
    uploadDate: "2025-08-05T08:00:00+08:00",
    duration: "PT23S",
    contentUrl:
      "https://www.melvinjonesrepol.com/videos/Webvium%20VPN%20-%20Anonymous,%20Secured,%20Private%20and%20the%20fastest%20Virtual%20Private%20Network.mp4",
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: {
        "@type": "WatchAction",
      },
      userInteractionCount: 102111,
    },
  };

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
      <main className="p-3 md:p-8">
        <section>
          <div className="block md:flex items-center mb-4">
            <Image
              src="/images/webviumvpn-transparent-icon.png"
              alt="Webvium VPN Icon"
              width={70}
              height={70}
              className="bg-white rounded-full mr-7 mb-4 md:mb-0"
            />
            <div className="block md:flex flex-row w-full justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold">Webvium VPN</h1>
                <p className="mb-4">
                  Anonymous, Secured, Private and the fastest Virtual Private
                  Network.
                </p>
              </div>
              <Link
                href="https://released.melvinjonesrepol.com/android/webvium-vpn.apk"
                className="bg-blue-500 text-white py-2 px-5 rounded hover:bg-blue-700 transition"
              >
                Download
              </Link>
            </div>
          </div>

          <HorizontalAdDisplayUnit />

          <div className="w-full mb-8">
            <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent py-2">
              <video
                width="320"
                height="240"
                controls
                preload="none"
                className="rounded-lg hover:scale-99 transition-transform duration-200"
              >
                <source
                  src="/videos/Webvium VPN - Anonymous, Secured, Private and the fastest Virtual Private Network.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {Images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                  width={250}
                  height={445}
                  className="object-cover rounded-lg flex-shrink-0 border border-gray-700 hover:scale-99 transition-transform duration-200"
                />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl">Comments</h3>
            <p className="mb-4">
              Share your thoughts or ask questions about this project.
            </p>
            <div className="bg-black p-4 rounded-xl mb-6">
              <DisqusComments slug="webvium-vpn" title="Webvium VPN" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
