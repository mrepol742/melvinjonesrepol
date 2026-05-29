import { Metadata } from "next";
import GalleryComponent from "@/app/[locale]/gallery/gallery/Gallery";
import { getAlternates } from "@/components/common/metadata/Alternatives";

export const metadata: Metadata = {
  title: "Gallery - Melvin Jones Repol",
  description:
    "Explore a collection of images showcasing my projects and designs.",
  keywords: ["Gallery", "Images", "Projects", "Designs", "Melvin Jones Repol"],
  alternates: getAlternates("/gallery"),
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

const albums = [
  {
    id: "webvium",
    title: "Webvium",
    description:
      "The screenshot might be old due to the amount of process in order to update it, but the product is still being developed and improved.",
    cover: "/images/webvium-1.jpg",
    media: [
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
      "/videos/webvium-browser.mp4",
      "/videos/webvium-vpn.mp4",
    ],
  },
  {
    id: "webvium-vpn",
    title: "Webvium VPN (archived)",
    description:
      "We no longer offer VPS service and there is no plan of bringing it back.",
    cover: "/images/webviumvpn-1.jpg",
    media: [
      "/images/webviumvpn-1.jpg",
      "/images/webviumvpn-2.jpg",
      "/images/webviumvpn-3.jpg",
      "/images/webviumvpn-4.jpg",
    ],
  },
  {
    id: "orion",
    title: "Orion (archived)",
    description:
      "Due to tight facebook policies and no official way of getting it the way we wanted, we had to stop the development of Orion.",
    cover: "/images/orion-1.jpg",
    media: [
      "/images/orion-1.jpg",
      "/images/orion-2.jpg",
      "/images/orion-3.jpg",
      "/images/orion-4.jpg",
      "/images/orion-5.jpg",
      "/images/orion-6.jpg",
    ],
  },
  {
    id: "ulisha",
    title: "Ulisha Store (React & Laravel)",
    description:
      "Ulisha Store is an e-commerce platform built with React and Laravel. It offers a seamless shopping experience with a user-friendly interface, secure payment options, and efficient product management. The platform is designed to help businesses establish their online presence and reach a wider audience.",
    cover: "/images/ulisha-store-1.png",
    media: [
      "/images/ulisha-store-1.png",
      "/images/ulisha-store-2.png",
      "/images/ulisha-store-3.png",
      "/images/ulisha-store-4.png",
      "/images/ulisha-store-laravel.png",
      "/images/ulisha-store-laravel-1.png",
      "/images/ulisha-store-laravel-2.png",
      "/images/ulisha-store-laravel-3.png",
    ],
  },
  {
    id: "axleshift",
    title: "Axleshift",
    description:
      "This is my capstone project for my IT degree. It is a freight management services. Providing Businesses with cutting-edge platform, security, and reliability.",
    cover: "/images/axleshift-1.png",
    media: [
      "/images/axleshift-1.png",
      "/images/axleshift-2.png",
      "/images/axleshift-3.png",
      "/images/axleshift-4.png",
      "/images/axleshift-5.png",
      "/images/axleshift-6.png",
      "/images/axleshift-7.png",
    ],
  },
  {
    id: "canis",
    title: "Canis",
    description:
      "This is the successor of Orion, supports Whatsapp and Telegram.",
    cover: "/images/canis-1.png",
    media: [
      "/images/canis-1.png",
      "/images/canis-2.png",
      "/images/canis-3.png",
      "/images/canis-4.png",
      "/images/canis-5.png",
      "/images/canis-6.png",
    ],
  },
  {
    id: "point-of-sale",
    title: "Point of Sale",
    description:
      "This is my internship project proposal for a local company, there is 2 version the original and this fork version i maintain under new license and project direction.",
    cover: "/images/point-of-sale.png",
    media: [
      "/images/point-of-sale.png",
      "/images/point-of-sale-1.png",
      "/images/point-of-sale-2.png",
      "/images/point-of-sale-3.png",
      "/images/point-of-sale-4.png",
    ],
  },
  {
    id: "protocol-discussion",
    title: "Protocol Discussion Platform",
    description:
      "This is for technical assessment but i didn't get the job, but i still maintain the project and add new features to it.",
    cover: "/images/protocol-discussion-platform.png",
    media: [
      "/images/protocol-discussion-platform.png",
      "/images/protocol-discussion-platform-1.png",
      "/images/protocol-discussion-platform-2.png",
      "/images/protocol-discussion-platform-3.png",
    ],
  },
  {
    id: "misc",
    title: "Misc & Portfolio",
    description: "Random stuff i can't categorize but still want to share.",
    cover: "/images/myportfolio.png",
    media: [
      "/images/floating-console-extension.png",
      "/images/myportfolio.png",
      "/images/melvin-jones-repol-portfolio-new.png",
      "/images/devpulse-waka.png",
      "/images/melvin-jones-repol-black.jpg",
      "/images/melvin-jones-repol-black-circle.png",
      "/images/melvinjonesrepol.png",
      "/images/melvinjonesrepol.cover.png",
      "/images/melvinjonesrepol.transparent.png",
    ],
  },
];

export default function Gallery() {
  const totalMedia = albums.reduce((sum, a) => sum + a.media.length, 0);

  return (
    <main>
      <section className="relative min-h-screen overflow-hidden border-b border-zinc-800">
        <div className="relative flex min-h-screen flex-col px-6 py-12 md:px-10">
          <div className="my-auto py-14">
            <h1
              className="text-[14vw] sm:text-[10vw] lg:text-[7.5vw] font-black tracking-tighter leading-[0.85] mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Visual
              <br />
              <span className="opacity-40">project</span>
              <br />
              portfolio.
            </h1>

            <p
              className="max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              A curated collection of images highlighting my personal projects,
              design work, and creative digital solutions. Each album groups
              related images or videos so you can browse by project.
            </p>
          </div>

          <div
            className="border-t border-zinc-800 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div>
              <p className="text-4xl font-black">{albums.length}</p>
              <p className="mt-1 text-sm text-zinc-400">Albums</p>
            </div>
            <div>
              <p className="text-4xl font-black">{totalMedia}+</p>
              <p className="mt-1 text-sm text-zinc-400">Media files</p>
            </div>
            <div className="col-span-2 flex flex-wrap items-center gap-2">
              {["Web Apps", "Mobile", "Android", "UI/UX", "Portfolio"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-400 px-3 py-1 text-xs text-zinc-400"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <GalleryComponent albums={albums} />
      </section>
    </main>
  );
}
