import HorizontalAdDisplayUnit from "@/components/ads/HorizontalAdDisplay";
import DisqusComments from "@/components/DisqusComments";
import Project from "@/components/Project";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Orion Chatbot - Melvin Jones Repol",
  description:
    "Meet the lightning-fast Facebook Messenger chatbot, seamlessly managing multiple accounts with access to 271 commands.",
  keywords: [
    "Orion Chatbot",
    "Facebook Messenger Bot",
    "Chatbot",
    "Multi-account Management",
    "271 Commands",
    "Messenger Automation",
    "AI Chatbot",
    "Orion Bot",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/orion-chatbot",
  },
  openGraph: {
    title: "Orion Chatbot - Melvin Jones Repol",
    description:
      "Meet the lightning-fast Facebook Messenger chatbot, seamlessly managing multiple accounts with access to 271 commands.",
    url: "https://www.melvinjonesrepol.com/orion-chatbot",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://opengraph.githubassets.com/1/mrepol742/project-orion",
        width: 800,
        height: 600,
        alt: "Orion Chatbot Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orion Chatbot - Melvin Jones Repol",
    description:
      "Meet the lightning-fast Facebook Messenger chatbot, seamlessly managing multiple accounts with access to 271 commands.",
    images: ["https://opengraph.githubassets.com/1/mrepol742/project-orion"],
    creator: "@mrepol742",
  },
};

const Images = [
  "/images/orion-1.jpg",
  "/images/orion-2.jpg",
  "/images/orion-3.jpg",
  "/images/orion-4.jpg",
  "/images/orion-5.jpg",
  "/images/orion-6.jpg",
];

const SoftwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Orion Chatbot",
  operatingSystem: "CrossPlatform",
  applicationCategory: "Chatbot",
  applicationSubCategory: "MessagingApplication",
  description:
    "Meet the lightning-fast Facebook Messenger chatbot, seamlessly managing multiple accounts with access to 271 commands.",
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

const features = [
  {
    title: "Lightning-Fast Performance",
    description:
      "Experience rapid response times and seamless interactions with the Orion Chatbot, designed to provide an efficient messaging experience on Facebook Messenger.",
  },
  {
    title: "Multi-Account Management",
    description:
      "Easily manage multiple Facebook Messenger accounts with Orion Chatbot, allowing you to switch between accounts effortlessly and stay organized.",
  },
  {
    title: "271 Commands at Your Fingertips",
    description:
      "Unlock a wide range of functionalities with access to 271 commands, enabling you to automate responses, manage conversations, and enhance your Messenger experience.",
  },
];

export default function OrionChatbot() {
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
          title: "Orion Chatbot",
          description:
            "Meet the lightning-fast Facebook Messenger chatbot, seamlessly managing multiple accounts with access to 271 commands.",
          description_long:
            "Orion Chatbot is a powerful Facebook Messenger chatbot designed to provide users with a seamless and efficient messaging experience. With its lightning-fast response times and robust features, Orion Chatbot allows users to manage multiple accounts effortlessly. It boasts an impressive array of 271 commands, enabling users to perform a wide range of tasks and interactions within the Messenger platform. Whether you're looking to automate responses, manage conversations, or access various functionalities, Orion Chatbot is your go-to solution for enhancing your Messenger experience.",
          view_source_url: "https://github.com/mrepol742/project-orion",
          is_open_source: true,
          is_freeware: false,
          license: "GNU General Public License v3.0",
          preview_image: "/images/orion-1.jpg",
          preview_image_alt: "Orion Chatbot Preview Image",
          features,
          resources: [
            {
              title: "View Source Code on Github",
              url: "https://github.com/mrepol742/project-orion",
            },
          ],
        }}
      />
    </>
  );
}
