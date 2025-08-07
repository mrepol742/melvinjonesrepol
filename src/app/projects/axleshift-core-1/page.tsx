import { Metadata } from "next";
import { ArrowLeft, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DisqusComments from "@/components/DisqusComments";

export const metadata: Metadata = {
  title: "Axleshift Core 1 - Melvin Jones Repol",
  description:
    "A freight management services. Providing Businesses with cutting-edge platform, security, and reliability.",
  keywords: [
    "Axleshift Core 1",
    "Freight Management",
    "Logistics",
    "Business Solutions",
    "Supply Chain",
    "Transportation",
    "Cargo Services",
    "Fleet Management",
    "Logistics Software",
    "Business Platform",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/projects/axleshift-core-1",
  },
  openGraph: {
    title: "Axleshift Core 1 - Melvin Jones Repol",
    description:
      "A freight management services. Providing Businesses with cutting-edge platform, security, and reliability.",
    url: "https://www.melvinjonesrepol.com/projects/axleshift-core-1",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/axleshift-1.png",
        width: 800,
        height: 600,
        alt: "Axleshift Core 1 Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axleshift Core 1 - Melvin Jones Repol",
    description:
      "A freight management services. Providing Businesses with cutting-edge platform, security, and reliability.",
    images: ["https://www.melvinjonesrepol.com/images/axleshift-1.png"],
    creator: "@mrepol742",
  },
};

const Images = [
  "/images/axleshift-1.png",
  "/images/axleshift-2.png",
  "/images/axleshift-3.png",
  "/images/axleshift-4.png",
  "/images/axleshift-5.png",
  "/images/axleshift-6.png",
  "/images/axleshift-7.png",
];

export default function Axleshift() {
  return (
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
            src="/images/axleshift-transparent-icon.png"
            alt="Axleshift Icon"
            width={70}
            height={70}
            className="bg-blue-500 rounded-full mr-7 p-4 mb-4 md:mb-0"
          />
          <div className="block md:flex flex-row w-full justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold">Axleshift Core 1</h1>
              <p className="mb-4">
                A freight management services. Providing Businesses with
                cutting-edge platform, security, and reliability.
              </p>
            </div>
            <Link
              href="/book-a-demo"
              className="bg-blue-500 text-white py-2 px-5 rounded hover:bg-blue-700 transition"
            >
              Book a Demo
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
                width={400}
                height={120}
                sizes="(max-width: 640px) 90vw, 400px"
                className="object-cover rounded-lg flex-shrink-0 border border-gray-700 hover:scale-99 transition-transform duration-200"
              />
            ))}
          </div>
        </div>
        <div className="flex items-center bg-green-900/30 border border-green-700 rounded-lg p-4 mb-6">
          <Plus className="w-6 h-6 text-green-500 mr-3" />
          <div>
            <span className="font-semibold text-green-500">Open Source:</span>
            &nbsp;This project is open source. View the code on&nbsp;
            <Link
              href="https://github.com/mrepol742/axleshift-core1"
              target="_blank"
              className="text-green-500 hover:text-green-200"
            >
              GitHub
            </Link>
            .
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl">Comments</h3>
          <p className="mb-4">
            Share your thoughts or ask questions about this project.
          </p>
          <div className="bg-black p-4 rounded-xl mb-6">
            <DisqusComments slug="axleshift-core-1" title="Axleshift Core 1" />
          </div>
        </div>
      </section>
    </main>
  );
}
