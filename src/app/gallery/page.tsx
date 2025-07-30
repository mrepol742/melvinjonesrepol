import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery - Melvin Jones Repol",
  description: "A collection of images showcasing my projects and designs.",
  keywords: ["Gallery", "Images", "Projects", "Designs", "Melvin Jones Repol"],
  openGraph: {
    title: "Gallery - Melvin Jones Repol",
    description: "A collection of images showcasing my projects and designs.",
    url: "https://www.melvinjonesrepol.com/gallery",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "/images/melvinjonesrepol.png",
        width: 1200,
        height: 630,
        alt: "Gallery Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery - Melvin Jones Repol",
    description: "A collection of images showcasing my projects and designs.",
    images: ["/images/melvinjonesrepol.png"],
    creator: "@mrepol742",
  },
};

const images = [
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
  "/images/webviumvpn-1.jpg",
  "/images/webviumvpn-2.jpg",
  "/images/webviumvpn-3.jpg",
  "/images/webviumvpn-4.jpg",
  "/images/orion-1.jpg",
  "/images/orion-2.jpg",
  "/images/orion-3.jpg",
  "/images/orion-4.jpg",
  "/images/orion-5.jpg",
  "/images/orion-6.jpg",
  "/images/ulisha-store-1.png",
  "/images/ulisha-store-2.png",
  "/images/ulisha-store-3.png",
  "/images/ulisha-store-4.png",
  "/images/axleshift-1.png",
  "/images/axleshift-2.png",
  "/images/axleshift-3.png",
  "/images/axleshift-4.png",
  "/images/axleshift-5.png",
  "/images/axleshift-6.png",
  "/images/axleshift-7.png",
];

export default function Gallery() {
  return (
    <main className="p-8">
      <section>
        <h1 className="text-center text-2xl font-semibold" data-aos="fade-up">
          Gallery
        </h1>
        <p
          className="text-center text-gray-300"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          A collection of images showcasing my projects and designs.
        </p>
        <div className="columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4 p-4 space-y-4">
          {images
            .slice()
            .sort(() => Math.random() - 0.5)
            .map((src, idx) => (
              <div
                key={idx}
                className="mb-4 break-inside-avoid"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  width={400}
                  height={Math.floor(250 + Math.random() * 150)}
                  className="rounded-lg w-full h-auto object-cover"
                  style={{ display: "block" }}
                />
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
