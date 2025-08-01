import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ulisha Store - Melvin Jones Repol",
  description:
    "A premier destination for quality fashion, accessories, and electronics. Bringing you the best products at competitive prices.",
  keywords: [
    "Ulisha Store",
    "Fashion",
    "Accessories",
    "Electronics",
    "Online Shopping",
    "E-commerce",
    "Quality Products",
    "Competitive Prices",
    "Fashion Store",
    "Electronics Store",
    "Online Fashion",
    "Online Electronics",
    "Shopping",
    "Retail",
    "E-commerce Platform",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/projects/ulisha-store",
  },
  openGraph: {
    title: "Ulisha Store - Melvin Jones Repol",
    description:
      "A premier destination for quality fashion, accessories, and electronics. Bringing you the best products at competitive prices.",
    url: "https://www.melvinjonesrepol.com/projects/ulisha-store",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "/images/ulisha-store-1.png",
        width: 800,
        height: 600,
        alt: "Ulisha Store Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ulisha Store - Melvin Jones Repol",
    description:
      "A premier destination for quality fashion, accessories, and electronics. Bringing you the best products at competitive prices.",
    images: ["/images/ulisha-store-1.png"],
    creator: "@mrepol742",
  },
};

const Images = [
  "/images/ulisha-store-1.png",
  "/images/ulisha-store-2.png",
  "/images/ulisha-store-3.png",
  "/images/ulisha-store-4.png",
];

export default function UlishaStore() {
  return (
    <main className="p-8">
      <section>
        <Link
          className="flex items-center mb-4 hover:text-violet-500 transition-colors duration-200"
          href="/projects"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          <h3 className="text-2xl font-semibold">Projects</h3>
        </Link>

        <div className="flex items-center mb-4">
          <Image
            src="/images/ulisha-store-icon.png"
            alt="Ulisha Store Icon"
            width={70}
            height={70}
            className="rounded-full mr-7"
          />
          <div>
            <h1 className="text-4xl font-bold">Ulisha Store</h1>
            <p className="text-gray-300 mb-4">
              A premier destination for quality fashion, accessories, and
              electronics. Bringing you the best products at competitive prices.
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
                width={400}
                height={120}
                sizes="(max-width: 640px) 90vw, 400px"
                className="object-cover rounded-lg flex-shrink-0 border border-gray-700 hover:scale-99 transition-transform duration-200"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
