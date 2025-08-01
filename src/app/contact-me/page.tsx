import ContactMe from "./contact-me.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me - Melvin Jones Repol",
  description:
    "Have a question, project, or just want to say hi? Fill out the form below and I&apos;ll get back to you soon!",
  keywords: [
    "Contact Me",
    "Melvin Jones Repol",
    "Software Engineer",
    "DevOps",
    "Web Development",
    "Full-Stack Developer",
    "Freelance Developer",
    "Get in Touch",
    "Reach Out",
    "Contact Form",
    "Email Me",
    "Professional Contact",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/contact-me",
  },
  openGraph: {
    title: "Contact Me - Melvin Jones Repol",
    description:
      "Have a question, project, or just want to say hi? Fill out the form below and I'll get back to you soon!",
    url: "https://www.melvinjonesrepol.com/contact-me",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "/images/melvinjonesrepol.png",
        width: 1200,
        height: 630,
        alt: "Contact Me Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Me - Melvin Jones Repol",
    description:
      "Have a question, project, or just want to say hi? Fill out the form below and I'll get back to you soon!",
    images: ["/images/melvinjonesrepol.png"],
    creator: "@mrepol742",
  },
};

export default function ContactMePage() {
  return <ContactMe />;
}
