import HorizontalAdDisplayUnit from "@/components/ads/HorizontalAdDisplay";
import DisqusComments from "@/components/DisqusComments";
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

export default function OrionChatbot() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SoftwareApplication),
        }}
      />

      <main className="my-18 p-3 md:p-8">
        <section>
          <div className="block md:flex items-center mb-4">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Facebook_Messenger_logo_2025.svg/250px-Facebook_Messenger_logo_2025.svg.png"
              alt="Facebook messenger icon"
              width={70}
              height={70}
              className="mr-7 mb-4 md:mb-0"
            />
            <div>
              <h1 className="text-4xl font-bold">Orion Chatbot</h1>
              <p className="mb-4">
                Meet the lightning-fast Facebook Messenger chatbot, seamlessly
                managing multiple accounts with access to 271 commands.
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
              at risk of suspension or ban by Facebook. The author and
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

          <div className="flex items-center bg-green-900/30 border border-green-700 rounded-lg p-4 mb-6">
            <FontAwesomeIcon icon={faGithub} className="text-green-500 mr-3" />
            <div>
              <span className="font-semibold text-green-500">Open Source:</span>
              &nbsp;This project is open source. View the code on&nbsp;
              <Link
                href="https://github.com/mrepol742/project-orion"
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
              <DisqusComments slug="orion-chatbot" title="Orion Chatbot" />
            </div>
          </div>

          <span className="ml-auto text-xs text-gray-400">
            Facebook Messenger icon &copy; Meta Platforms, Inc.
          </span>
        </section>
      </main>
    </>
  );
}
