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
  openGraph: {
    title: "Webvium Browser - Melvin Jones Repol",
    description:
      "Lightweight, Fast, Material and Full-Featured Android Web Browser.",
    url: "https://www.melvinjonesrepol.com/projects/webvium-browser",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "/images/webvium-1.jpg",
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
    images: ["/images/webvium-1.jpg"],
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
  return (
    <main className="p-8">
      <section>
        <Link className="flex items-center mb-4" href="/projects">
          <ArrowLeft className="w-6 h-6 mr-2" />
          <h3 className="text-2xl font-semibold">Projects</h3>
        </Link>

        <div className="flex items-center mb-4">
          <Image
            src="/images/webvium-icon.png"
            alt="Webvium Icon"
            width={70}
            height={70}
            className="rounded-full mr-7"
          />
          <div>
            <h1 className="text-4xl font-bold">Webvium Browser</h1>
            <p className="text-gray-300 mb-4">
              Lightweight, Fast, Material and Full-Featured Android Web Browser.
            </p>
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
                className="object-cover rounded-lg flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
