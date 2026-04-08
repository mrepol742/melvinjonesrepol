import Project from "@/components/ui/Project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protocol Discussion Platform - Melvin Jones Repol",
  description:
    "A content-first discussion platform where users can post structured protocols, create discussion threads, and engage through comments, reviews, and voting.",
  keywords: [
    "Protocol Discussion Platform",
    "Discussion Platform",
    "Content-First Discussion",
    "Structured Protocols",
    "Discussion Threads",
    "Comments",
    "Reviews",
    "Voting",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/protocol-discussion-platform",
  },
  openGraph: {
    title: "Protocol Discussion Platform - Melvin Jones Repol",
    description:
      "A content-first discussion platform where users can post structured protocols, create discussion threads, and engage through comments, reviews, and voting.",
    url: "https://www.melvinjonesrepol.com/protocol-discussion-platform",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/protocol-discussion-platform.png",
        width: 800,
        height: 600,
        alt: "Protocol Discussion Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Protocol Discussion Platform - Melvin Jones Repol",
    description:
      "A content-first discussion platform where users can post structured protocols, create discussion threads, and engage through comments, reviews, and voting.",
    images: [
      "https://www.melvinjonesrepol.com/images/protocol-discussion-platform.png",
    ],
    creator: "@mrepol742",
  },
};

const features = [
  {
    title: "Content-First Discussion",
    description:
      "Users can post structured protocols as the main content, allowing for focused discussions around specific topics.",
  },
  {
    title: "Discussion Threads",
    description:
      "Each protocol can have its own discussion thread, enabling users to engage in focused conversations and share insights.",
  },
  {
    title: "Comments and Reviews",
    description:
      "Users can comment on protocols and provide reviews, fostering a collaborative environment for feedback and improvement.",
  },
  {
    title: "Voting Mechanism",
    description:
      "Users can vote on protocols and comments, helping to surface the most valuable contributions and promote quality content.",
  },
  {
    title: "Intelligent Search and Filtering",
    description:
      "Powered by Typesense, the platform offers intelligent search and filtering capabilities to help users find relevant protocols and discussions quickly.",
  },
  {
    title: "AI Summarization",
    description:
      "The platform includes AI-powered summarization features that can generate concise summaries of reviews, making it easier for users to grasp the key points and insights from lengthy discussions.",
  },
  {
    title: "Open Source and Freeware",
    description:
      "The platform is open source and available under the MIT License, allowing anyone to contribute, modify, and use it freely.",
  },
];

export default function ProtocolDiscussionPlatform() {
  return (
    <>
      <Project
        project={{
          title: "Protocol Discussion Platform",
          description:
            "A content-first discussion platform where users can post structured protocols, create discussion threads, and engage through comments, reviews, and voting.",
          description_long:
            "The Protocol Discussion Platform is a modern and efficient solution for facilitating structured discussions around technical protocols. It allows users to post detailed protocols, create discussion threads, and engage through comments, reviews, and voting mechanisms.",
          view_source_url:
            "https://github.com/mrepol742/protocol-discussion-platform",
          is_open_source: true,
          is_freeware: true,
          license: "MIT License",
          preview_image: "/images/protocol-discussion-platform.png",
          preview_image_alt: "Protocol Discussion Screenshot",
          features,
          resources: [
            {
              title: "View Source Code on Github",
              url: "https://github.com/mrepol742/protocol-discussion-platform",
            },
          ],
        }}
      />
    </>
  );
}
