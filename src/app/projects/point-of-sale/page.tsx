import DisqusComments from "@/components/DisqusComments";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Point of Sale - Melvin Jones Repol",
  description:
    "A lightweight, web-based and offline-capable POS system built for flawless performance, supporting multi-department roles and full functionality.",
  keywords: [
    "Point of Sale",
    "POS System",
    "Web-based POS",
    "Offline-capable POS",
    "Multi-department POS",
    "Retail Management",
    "Sales System",
    "Inventory Management",
    "Business Solutions",
    "Sales Management",
    "Retail Software",
    "POS Software",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/projects/point-of-sale",
  },
  openGraph: {
    title: "Point of Sale - Melvin Jones Repol",
    description:
      "A lightweight, web-based and offline-capable POS system built for flawless performance, supporting multi-department roles and full functionality.",
    url: "https://www.melvinjonesrepol.com/projects/point-of-sale",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/pos-1.png",
        width: 800,
        height: 600,
        alt: "Point of Sale Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Point of Sale - Melvin Jones Repol",
    description:
      "A lightweight, web-based and offline-capable POS system built for flawless performance, supporting multi-department roles and full functionality.",
    images: ["https://www.melvinjonesrepol.com/images/pos-1.png"],
    creator: "@mrepol742",
  },
};

const Images = [
  "/images/pos-1.png",
  "/images/pos-2.png",
  "/images/pos-3.png",
  "/images/pos-4.png",
  "/images/pos-5.png",
];

const SoftwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Point of Sale",
  operatingSystem: "Web",
  applicationCategory: "BusinessApplication",
  description:
    "A lightweight, web-based and offline-capable POS system built for flawless performance, supporting multi-department roles and full functionality.",
  creator: {
    "@type": "Person",
    name: "Melvin Jones Repol",
    url: "https://www.melvinjonesrepol.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
  },
};

export default function PointOfSale() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SoftwareApplication),
        }}
      />

      <main className="p-3 md:p-8">
        <section>
          <Link
            className="flex items-center mb-4 hover:text-violet-500 transition-colors duration-200"
            href="/projects"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
            <h3 className="text-2xl font-semibold">Projects</h3>
          </Link>

          <div className="block md:flex items-center mb-4">
            <Image
              src="/images/pos.gif"
              alt="Point of Sale Icon"
              width={70}
              height={70}
              className="rounded-full mr-7 mb-4 md:mb-0"
            />
            <div className="block md:flex flex-row w-full justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold">Point of Sale</h1>
                <p className="mb-4">
                  A lightweight, web-based and offline-capable POS system built
                  for flawless performance, supporting multi-department roles
                  and full functionality.
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
            <FontAwesomeIcon icon={faGithub} className="text-green-500 mr-3" />
            <div>
              <span className="font-semibold text-green-500">Open Source:</span>
              &nbsp;This project is open source. View the code on&nbsp;
              <Link
                href="https://github.com/mrepol742/project-pos"
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
              <DisqusComments slug="project-pos" title="Project POS" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
