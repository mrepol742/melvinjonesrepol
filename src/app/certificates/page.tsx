import Certificates from "./certificates.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates - Melvin Jones Repol",
  description:
    "Here are some of the certificates I have earned through various courses and programs.",
  keywords: [
    "Certificates",
    "Coursera",
    "Google",
    "IBM",
    "Sololearn",
    "Board Infinity",
    "Software Engineering",
    "DevOps",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Laravel",
    "PHP",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/certificates",
  },
  openGraph: {
    title: "Certificates - Melvin Jones Repol",
    description:
      "Here are some of the certificates I have earned through various courses and programs.",
    url: "https://www.melvinjonesrepol.com/certificates",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
        width: 1200,
        height: 630,
        alt: "Certificates Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certificates - Melvin Jones Repol",
    description:
      "Here are some of the certificates I have earned through various courses and programs.",
    images: ["https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png"],
    creator: "@mrepol742",
  },
};

export default function CertificatesPage() {
  return <Certificates />;
}
