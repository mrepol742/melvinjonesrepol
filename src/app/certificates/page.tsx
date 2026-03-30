import Certificates from "../../components/features/certificates/CertificatesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates - Melvin Jones Repol",
  description:
    "A collection of certificates I have earned through various courses and programs, showcasing my commitment to continuous learning and professional development in software engineering and DevOps.",
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
      "A collection of certificates I have earned through various courses and programs, showcasing my commitment to continuous learning and professional development in software engineering and DevOps.",
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
      "A collection of certificates I have earned through various courses and programs, showcasing my commitment to continuous learning and professional development in software engineering and DevOps.",
    images: [
      "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
    ],
    creator: "@mrepol742",
  },
};

export default async function CertificatesPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sParams = await searchParams;
  return <Certificates searchParams={Promise.resolve(sParams)} />;
}
