import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DisqusComments from "@/components/DisqusComments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import HorizontalAdDisplayUnit from "@/components/ads/HorizontalAdDisplay";
import Project from "@/components/Project";

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

      <Project
        project={{
          title: "Canis Chatbot",
          description:
            "A scalable, modular WhatsApp chatbot built in TypeScript. It leverages modern best practices, lean architecture, Prisma ORM, Dockerization, and environment-based configuration to deliver a robust, flexible successor to Orion.",
          description_long:
            "Project Canis is a next-generation WhatsApp chatbot designed for scalability, modularity, and ease of use. Built with TypeScript, Prisma ORM, and Docker, it offers a robust platform for creating powerful chatbots that can handle a wide range of tasks on WhatsApp. With support for multiple AI providers, real-time features, and advanced security integrations, Project Canis is the ideal solution for anyone looking to build a versatile and production-ready WhatsApp chatbot.",
          view_source_url: "https://github.com/mrepol742/project-canis",
          is_open_source: true,
          is_freeware: false,
          license: "Apache License 2.0",
          preview_image: "/images/canis-1.png",
          preview_image_alt: "Canis Chatbot Screenshot",
          features,
          resources: [
            {
              title: "View Source Code on Github",
              url: "https://github.com/mrepol742/project-canis",
            },
          ],
        }}
      />
    </>
  );
}
