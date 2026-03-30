import { Metadata } from "next";
import Image from "next/image";
import GalleryComponent from "@/components/features/gallery/GallerySection";

export const metadata: Metadata = {
  title: "Gallery - Melvin Jones Repol",
  description:
    "Explore a collection of images showcasing my projects and designs.",
  keywords: ["Gallery", "Images", "Projects", "Designs", "Melvin Jones Repol"],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/gallery",
  },
  openGraph: {
    title: "Gallery - Melvin Jones Repol",
    description:
      "Explore a collection of images showcasing my projects and designs.",
    url: "https://www.melvinjonesrepol.com/gallery",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
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
    description:
      "Explore a collection of images showcasing my projects and designs.",
    images: [
      "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
    ],
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
  "/images/canis-1.png",
  "/images/canis-2.png",
  "/images/canis-3.png",
  "/images/canis-4.png",
  "/images/canis-5.png",
  "/images/canis-6.png",
  "/images/pos-1.png",
  "/images/pos-2.png",
  "/images/pos-3.png",
  "/images/pos-4.png",
  "/images/pos-5.png",
];

const videos = ["/videos/webvium-browser.mp4", "/videos/webvium-vpn.mp4"];

export default function Gallery() {
  return (
    <main className="my-18 p-3 md:p-8">
      <section>
        <h1 className="text-2xl font-semibold" data-aos="fade-up">
          Project & Design Gallery
        </h1>

        <p className="mt-2 mb-5" data-aos="fade-up" data-aos-delay="100">
          Explore a curated collection of images highlighting my personal
          projects, design work, and creative digital solutions. Each image
          represents a real-world project demonstrating skills in web
          development, UI/UX, and design.
        </p>

        <GalleryComponent images={images} videos={videos} />
      </section>
    </main>
  );
}
