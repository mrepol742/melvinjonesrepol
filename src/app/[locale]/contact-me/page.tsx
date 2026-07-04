import { getAlternates } from "@/components/common/metadata/Alternatives";
import ContactMe from "./components/ContactMe";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

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
    <main>
      <section className="relative min-h-screen overflow-hidden border-b border-zinc-800">
        <div className="relative flex min-h-screen flex-col px-6 py-12 md:px-10">
          <div className="my-auto py-14">
            <h1 className="text-[14vw] sm:text-[10vw] lg:text-[7.5vw] font-black tracking-tighter leading-[0.85] mb-8">
              {t("title_line1")}
              <br />
              <span className="opacity-40">{t("title_line2")}</span>
              <br />
              {t("title_line3")}
            </h1>

            <p
              className="max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t("hero_description")}
            </p>
          </div>

          <div
            className="border-t border-zinc-800 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div>
              <p className="text-4xl font-black">{t("response_time_value")}</p>
              <p className="mt-1 text-sm text-zinc-400">{t("response_time_label")}</p>
            </div>
            <div>
              <p className="text-4xl font-black">{t("availability_value")}</p>
              <p className="mt-1 text-sm text-zinc-400">{t("availability_label")}</p>
            </div>
            <div className="col-span-2 flex flex-wrap items-center gap-2">
              {["WhatsApp", "Facebook", "Email", "Form"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-400 px-3 py-1 text-xs text-zinc-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <ContactMe />
      </section>
    </main>
  );
}
