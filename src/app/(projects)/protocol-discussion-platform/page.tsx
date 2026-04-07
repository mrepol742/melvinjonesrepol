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
    images: ["https://www.melvinjonesrepol.com/images/protocol-discussion-platform.png"],
    creator: "@mrepol742",
  },
};

const features = [
  {
    title: "Free Cloud Deployment",
    description:
      "Bonus: Deploy your store instantly and for free using Vercel and Supabase Cloud. Enjoy seamless hosting, automatic scaling, and a fully managed backend out of the box.",
  },
];

export default function UlishaStore() {
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
