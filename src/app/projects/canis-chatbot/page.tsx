import { ArrowLeft, Info, Plus } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DisqusComments from "@/components/DisqusComments";

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
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/projects/canis-chatbot",
  },
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
  "/images/canis-1.png",
  "/images/canis-2.png",
  "/images/canis-3.png",
  "/images/canis-4.png",
  "/images/canis-5.png",
  "/images/canis-6.png",
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

        <div className="block md:flex items-center mb-4">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/WhatsApp_Logo_green.svg/250px-WhatsApp_Logo_green.svg.png"
            alt="Canis Icon"
            width={70}
            height={70}
            className="mr-7 mb-4 md:mb-0"
          />
          <div>
            <h1 className="text-4xl font-bold">Canis Chatbot</h1>
            <p className="mb-4">
              A scalable, modular WhatsApp chatbot built in TypeScript. It
              leverages modern best practices, lean architecture, Prisma ORM,
              Dockerization, and environment-based configuration to deliver a
              robust, flexible successor to Orion.
            </p>
          </div>
        </div>

        <div className="flex items-start bg-yellow-900/30 border border-yellow-700 rounded-lg p-4 mb-6">
          <Info className="text-yellow-500 mr-4 flex-shrink-0" size={32} />
          <div>
            <span className="font-semibold text-yellow-500">Disclaimer:</span>
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
                className="object-cover rounded-lg flex-shrink-0 border border-gray-700 hover:scale-99 transition-transform duration-200"
              />
            ))}
          </div>
        </div>

        <div className="flex items-center bg-blue-900/30 border border-blue-700 rounded-lg p-4 mb-2">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/250px-Telegram_2019_Logo.svg.png"
            alt="Telegram Icon"
            width={19}
            height={19}
            className="mr-4"
          />
          <div>
            <span className="font-semibold text-blue-500">
              Telegram Version:
            </span>
            &nbsp;A Telegram version of this chatbot is available at&nbsp;
            <Link
              href="https://github.com/mrepol742/project-canis-tg"
              target="_blank"
              className="text-blue-500 hover:text-blue-200"
            >
              GitHub
            </Link>
            .
          </div>
        </div>

        <div className="flex items-center bg-green-900/30 border border-green-700 rounded-lg p-4 mb-6">
          <Plus className="w-6 h-6 text-green-500 mr-3" />
          <div>
            <span className="font-semibold text-green-500">Open Source:</span>
            &nbsp;This project is open source. View the code on&nbsp;
            <Link
              href="https://github.com/mrepol742/project-canis"
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
            <DisqusComments slug="canis-chatbot" title="Canis Chatbot" />
          </div>
        </div>

        <span className="ml-auto text-xs text-gray-400">
          WhatsApp icon &copy; Meta Platforms, Inc.
          <br />
          Telegram icon &copy; Telegram FZ-LLC.
        </span>
      </section>
    </main>
  );
}
