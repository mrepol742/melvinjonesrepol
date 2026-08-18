import { getAlternates } from "@/components/common/metadata/Alternatives";
import ContactMe from "./components/ContactMe";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Header from "@/components/ui/Header";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
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
    alternates: getAlternates("/contact-me", locale),
    openGraph: {
      title: "Contact Me - Melvin Jones Repol",
      description:
        "Have a question, project, or just want to say hi? Fill out the form below and I'll get back to you soon!",
      url: "https://www.melvinjonesrepol.com/contact-me",
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
      title: "Contact Me - Melvin Jones Repol",
      description:
        "Have a question, project, or just want to say hi? Fill out the form below and I'll get back to you soon!",
      images: [
        "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
      ],
      creator: "@mrepol742",
    },
  };
}

export default async function ContactMePage() {
  const t = await getTranslations("contact_me");

  return (
    <>
      <Header
        title={
          <>
            <span>{t("title_line1")}</span>
            <br />
            <span className="opacity-40">{t("title_line2")}</span>
            <br />
            <span>{t("title_line3")}</span>
          </>
        }
        intro={t("hero_description")}
      />

      <section className="px-6 py-24 md:px-10">
        <ContactMe />
      </section>
    </>
  );
}
