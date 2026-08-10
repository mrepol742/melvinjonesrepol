import { Metadata } from "next";
import Project from "@/components/ui/Project";
import { getAlternates } from "@/components/common/metadata/Alternatives";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Canis Agent - Melvin Jones Repol",
    description:
      "A multi-account WhatsApp bot built in TypeScript that handles everything from group commands and instant media downloads to an agentic AI that can search the web, write and run code, and deliver files.",
    keywords: [
      "Canis Agent",
      "WhatsApp Bot",
      "Chatbot",
      "WhatsApp Automation",
      "AI Chatbot",
      "Canis Bot",
      "Agent",
      "Agentic AI",
      "AI Agent",
      "WhatsApp",
    ],
    alternates: getAlternates("/canis-agent", locale),
    openGraph: {
      title: "Canis Agent - Melvin Jones Repol",
      description:
        "A multi-account WhatsApp bot built in TypeScript that handles everything from group commands and instant media downloads to an agentic AI that can search the web, write and run code, and deliver files.",
      url: "https://www.melvinjonesrepol.com/canis-agent",
      siteName: "Melvin Jones Repol",
      images: [
        {
          url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
          width: 800,
          height: 600,
          alt: "Melvin Jones Repol",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Canis Agent - Melvin Jones Repol",
      description:
        "A multi-account WhatsApp bot built in TypeScript that handles everything from group commands and instant media downloads to an agentic AI that can search the web, write and run code, and deliver files.",
      images: [
        "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
      ],
      creator: "@mrepol742",
    },
  };
}

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
    title: "Agentic AI",
    description:
      "A multi-account WhatsApp bot built in TypeScript that handles everything from group commands and instant media downloads to an agentic AI that can search the web, write and run code, and deliver files — all through a single chat message.",
  },
  {
    title: "Modular & Scalable Architecture",
    description:
      "Backed by MariaDB, Redis, and a sandboxed shell environment, with a hot-reloading command system that makes extending it as easy as dropping a new file.",
  },
  {
    title: "Multi-AI Provider Support",
    description:
      "Supports 5 AI providers out of the box — OpenRouter, OpenAI, Groq, Gemini (Google) and Ollama — so you can pick the engine that suits your style.",
  },
  {
    title: "Real-Time Chatbot Features",
    description:
      "Auto and repeat reacts on messages, resends unsent or edited messages, automatic call rejection, and instant video downloads from supported platforms.",
  },
  {
    title: "Command Engine & Hot Reload",
    description:
      "Dynamic command loading with lots and lots of commands to keep the group interesting, plus commands built to stay compatible with the Canis Telegram version.",
  },
  {
    title: "Advanced Security & Moderation",
    description:
      "Integrated with PhishTank and VirusTotal to keep groups safe, backed by state-of-the-art rate limiting for end users.",
  },
  {
    title: "Production-Ready Infrastructure",
    description:
      "Preconfigured for PM2 deployment (auto-restarts on process exit if you're not using PM2), with Sentry integrated for error monitoring.",
  },
];

const SoftwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Canis Agent",
  operatingSystem: "CrossPlatform",
  applicationCategory: "Chatbot",
  applicationSubCategory: "MessagingApplication",
  description:
    "A multi-account WhatsApp bot built in TypeScript that handles everything from group commands and instant media downloads to an agentic AI that can search the web, write and run code, and deliver files.",
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
          title: "Canis Agent",
          description:
            "A multi-account WhatsApp bot built in TypeScript that handles everything from group commands and instant media downloads to an agentic AI that can search the web, write and run code, and deliver files.",
          description_long:
            "Project Canis is a multi-account WhatsApp bot that delivers a seamless, agentic AI experience. With a modular architecture and support for multiple AI providers, it can handle complex commands, media downloads, and web searches, all through a single chat message.",
          view_source_url: "https://github.com/mrepol742/project-canis",
          is_open_source: true,
          is_freeware: false,
          license: "Apache License 2.0",
          preview_image: "/images/canis-1.png",
          preview_image_alt: "Canis Agent Screenshot",
          features,
          images: Images,
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
