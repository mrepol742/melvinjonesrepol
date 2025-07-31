import { ArrowLeft, Info, Plus } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Canis Chatbot - Melvin Jones Repol",
  description:
    "A scalable, modular WhatsApp chatbot built in TypeScript. It leverages modern best practices, lean architecture, Prisma ORM, Dockerization, and environment-based configuration to deliver a robust, flexible successor to Orion.",
  keywords: [
    "Canis Chatbot",
    "WhatsApp Bot",
    "Chatbot",
    "WhatsApp Automation",
    "AI Chatbot",
    "Canis Bot",
  ],
  openGraph: {
    title: "Canis Chatbot - Melvin Jones Repol",
    description:
      "A scalable, modular WhatsApp chatbot built in TypeScript. It leverages modern best practices, lean architecture, Prisma ORM, Dockerization, and environment-based configuration to deliver a robust, flexible successor to Orion.",
    url: "https://www.melvinjonesrepol.com/projects/canis-chatbot",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://opengraph.githubassets.com/1/mrepol742/project-canis",
        width: 800,
        height: 600,
        alt: "Canis Chatbot Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canis Chatbot - Melvin Jones Repol",
    description:
      "A scalable, modular WhatsApp chatbot built in TypeScript. It leverages modern best practices, lean architecture, Prisma ORM, Dockerization, and environment-based configuration to deliver a robust, flexible successor to Orion.",
    images: ["https://opengraph.githubassets.com/1/mrepol742/project-canis"],
    creator: "@mrepol742",
  },
};

const Images = [
  "/images/canis-1.jpg",
  "/images/canis-2.jpg",
  "/images/canis-3.jpg",
  "/images/canis-4.jpg",
  "/images/canis-5.jpg",
  "/images/canis-6.jpg",
];

export default function CanisChatbot() {
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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/WhatsApp_Logo_green.svg/250px-WhatsApp_Logo_green.svg.png"
            alt="Canis Icon"
            width={70}
            height={70}
            className="mr-7"
          />
          <div>
            <h1 className="text-4xl font-bold">Canis Chatbot</h1>
            <p className="text-gray-300 mb-4">
              A scalable, modular WhatsApp chatbot built in TypeScript. It
              leverages modern best practices, lean architecture, Prisma ORM,
              Dockerization, and environment-based configuration to deliver a
              robust, flexible successor to Orion.
            </p>
          </div>
        </div>

        <div className="flex items-start bg-yellow-900/30 border border-yellow-700 rounded-lg p-4 mb-6">
          <Info className="text-yellow-300 mr-4 flex-shrink-0" size={32} />
          <div>
            <span className="font-semibold text-yellow-300">Disclaimer:</span>
            &nbsp; By using this bot, you acknowledge that your account may be
            at risk of suspension or ban by WhatsApp. The author and
            contributors are not liable for any loss, damage, or consequences
            resulting from the use of this software. Use at your own risk.
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

        <div className="flex items-center bg-green-900/30 border border-green-700 rounded-lg p-4 mb-6">
          <Plus className="w-6 h-6 text-green-300 mr-3" />
          <div>
            <span className="font-semibold text-green-300">Open Source:</span>
            &nbsp;This project is open source. View the code on&nbsp;
            <Link
              href="https://github.com/mrepol742/project-canis"
              target="_blank"
              className="text-green-300 hover:text-green-200"
            >
              GitHub
            </Link>
            .
          </div>
        </div>

        <span className="ml-auto text-xs text-gray-400">
          WhatsApp icon &copy; Meta Platforms, Inc.
        </span>
      </section>
    </main>
  );
}
