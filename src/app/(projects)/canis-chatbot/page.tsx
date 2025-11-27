import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DisqusComments from "@/components/DisqusComments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import HorizontalAdDisplayUnit from "@/components/ads/HorizontalAdDisplay";

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
    canonical: "https://www.melvinjonesrepol.com/canis-chatbot",
  },
  openGraph: {
    title: "Canis Chatbot - Melvin Jones Repol",
    description:
      "A scalable, modular WhatsApp chatbot built in TypeScript. It leverages modern best practices, lean architecture, Prisma ORM, Dockerization, and environment-based configuration to deliver a robust, flexible successor to Orion.",
    url: "https://www.melvinjonesrepol.com/canis-chatbot",
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

const features = [
  {
    title: "Modular & Scalable Architecture",
    description:
      "Built from the ground up for growth. Project Canis uses a modular design with TypeScript, Prisma ORM and Docker containers so you can deploy, extend and scale with ease.",
  },
  {
    title: "Multi-AI Provider Support",
    description:
      "Whether you prefer OpenAI, OpenRouter, Groq, Gemini or Ollama — Project Canis supports them all out of the box so you can pick the AI engine that suits your style. :contentReference[oaicite:6]{index=6}",
  },
  {
    title: "Real-Time Chatbot Features",
    description:
      "Carry out useful tasks on WhatsApp: auto-react to messages, handle edits & unsends, automatically reject calls, download videos from supported platforms, and more — all seamlessly integrated into the chat experience. :contentReference[oaicite:7]{index=7}",
  },
  {
    title: "Command Engine & Hot Reload",
    description:
      "Define commands dynamically, load them at runtime, and extend your bot’s functionality without downtime. Project Canis was built for flexibility and rapid evolution.",
  },
  {
    title: "Advanced Security & Moderation",
    description:
      "Protect your groups and communities with integrations like VirusTotal and PhishTank, plus robust rate-limiting to keep bots, spam and misuse in check. :contentReference[oaicite:10]{index=10}",
  },
  {
    title: "Production-Ready Infrastructure",
    description:
      "From environment-based configuration to PM2/Docker setup, Project Canis is ready for deployment. Whether you’re running locally or in the cloud, you’re covered.",
  },
];

const SoftwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Canis Chatbot",
  operatingSystem: "CrossPlatform",
  applicationCategory: "Chatbot",
  applicationSubCategory: "MessagingApplication",
  description:
    "A scalable, modular WhatsApp chatbot built in TypeScript. It leverages modern best practices, lean architecture, Prisma ORM, Dockerization, and environment-based configuration to deliver a robust, flexible successor to Orion.",
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

export default function CanisChatbot() {
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

          <div className="flex bg-yellow-900/30 border border-yellow-700 rounded-lg p-4 mb-6">
            <FontAwesomeIcon
              icon={faWarning}
              className="text-yellow-500 mr-3"
              size="2x"
            />
            <div>
              <span className="font-semibold text-yellow-500">Disclaimer:</span>
              &nbsp; By using this bot, you acknowledge that your account may be
              at risk of suspension or ban by WhatsApp. The author and
              contributors are not liable for any loss, damage, or consequences
              resulting from the use of this software. Use at your own risk.
            </div>
          </div>

          <HorizontalAdDisplayUnit />

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
            <FontAwesomeIcon
              icon={faTelegram}
              className="w-6 h-6 text-blue-500 mr-3"
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
            <FontAwesomeIcon icon={faGithub} className="text-green-500 mr-3" />
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
            <h3 className="text-2xl">Features</h3>
            <div className="grid gap-4 mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-black/10 backdrop-blur rounded-xl p-6 shadow hover:shadow-lg transition"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
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
    </>
  );
}
