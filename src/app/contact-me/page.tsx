import ContactMe from "./contact-me.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me - Melvin Jones Repol",
  description:
    "Have a question, project, or just want to say hi? Fill out the form below and I&apos;ll get back to you soon!",
};

export default function ContactMePage() {
  return <ContactMe />;
}
