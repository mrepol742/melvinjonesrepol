import DisqusComments from "@/components/DisqusComments";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webvium Browser - Melvin Jones Repol",
  description:
    "Lightweight, Fast, Material and Full-Featured Android Web Browser.",
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
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/projects/webvium-browser",
  },
  openGraph: {
    title: "Webvium Browser - Melvin Jones Repol",
    description:
      "Lightweight, Fast, Material and Full-Featured Android Web Browser.",
    url: "https://www.melvinjonesrepol.com/projects/webvium-browser",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/webvium-1.jpg",
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
    title: "Webvium Browser - Melvin Jones Repol",
    description:
      "Lightweight, Fast, Material and Full-Featured Android Web Browser.",
    images: ["https://www.melvinjonesrepol.com/images/webvium-1.jpg"],
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

export default function WebviumBrowser() {
  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Webvium Browser",
    operatingSystem: "ANDROID",
    applicationCategory: "BrowserApplication",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "1000",
    },
    offers: {
      "@type": "Offer",
      price: "0",
    },
  };

  const videoObject = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Webvium - Lightweight, Fast, Material and Full-Featured Android Web Browser.",
    url: "https://www.melvinjonesrepol.com/projects/webvium-browser",
    description:
      "A Project that aims to be the lightest, fastest, secured, private and full-featured android web browser. Programmed and design from Scratch.",
    thumbnailUrl: "https://www.melvinjonesrepol.com/images/webvium-1.jpg",
    uploadDate: "2025-08-05T08:00:00+08:00",
    duration: "PT27S",
    contentUrl:
      "https://www.melvinjonesrepol.com/videos/Webvium%20-%20Lightweight,%20Fast,%20Material%20and%20Full-Featured%20Android%20Web%20Browser.mp4",
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: {
        "@type": "WatchAction",
      },
      userInteractionCount: 5647018,
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
          <Link
            className="flex items-center mb-4 hover:text-violet-500 transition-colors duration-200"
            href="/projects"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            <h3 className="text-2xl font-semibold">Projects</h3>
          </Link>

          <div className="block md:flex items-center mb-4">
            <Image
              src="/images/webvium-icon.png"
              alt="Webvium Icon"
              width={70}
              height={70}
              className="rounded-full mr-7 mb-4 md:mb-0"
            />
            <div className="block md:flex flex-row w-full justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold">Webvium Browser</h1>
                <p className="mb-4">
                  Lightweight, Fast, Material and Full-Featured Android Web
                  Browser.
                </p>
              </div>
              <Link
                href="https://mrepol742.github.io/webviumdev/download"
                className="bg-blue-500 text-white py-2 px-5 rounded hover:bg-blue-700 transition"
              >
                Download
              </Link>
            </div>
          </div>

          <div className="w-full mb-8">
            <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent py-2">
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
              <DisqusComments slug="webvium-browser" title="Webvium Browser" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
