import { getAlternates } from "@/components/common/metadata/Alternatives";
import { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import LegalCard from "./components/LegalCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Legal Documents - Melvin Jones Repol",
    description: "Review our legal documents and policies",
    alternates: getAlternates("/legal", locale),
    openGraph: {
      title: "Legal Documents - Melvin Jones Repol",
      description: "Review our legal documents and policies",
      url: "https://www.melvinjonesrepol.com/legal",
      siteName: "Melvin Jones Repol",
      images: [
        {
          url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
          width: 1200,
          height: 630,
          alt: "Legal Cover",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Legal Documents - Melvin Jones Repol",
      description: "Review our legal documents and policies",
      images: [
        "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
      ],
      creator: "@mrepol742",
    },
  };
}

const legalLinks = [
  {
    href: "/legal/refund-policy",
    title: "Refund Policy",
    description:
      "Learn how we handle refunds for any kind of services we provide.",
    category: "Refund",
    version: "v1.0",
  },
  {
    href: "/legal/privacy-policy",
    title: "Privacy Policy",
    description:
      "Learn how we collect, use, and protect your information across our services.",
    category: "Data",
    version: "v1.2",
  },
  {
    href: "/legal/terms-of-service",
    title: "Terms of Service",
    description:
      "Understand the rules and guidelines for using our website, apps, and extensions.",
    category: "Usage",
    version: "v1.2",
  },
  {
    href: "/legal/cookie-policy",
    title: "Cookie Policy",
    description:
      "See how we and third-party services use cookies and similar tracking technologies.",
    category: "Tracking",
    version: "v1.0",
  },
  {
    href: "/legal/developer-client-agreement",
    title: "Developer Client Agreement",
    description:
      "Review the terms and conditions for our development services.",
    category: "Contract",
    version: "v1.0",
  },
  {
    href: "/legal/licenses/Apache-2.0.md",
    title: "Apache-2.0",
    description: "The Apache License, Version 2.0",
    category: "License",
    version: "v2.0",
  },
  {
    href: "/legal/licenses/Polyform-Noncommercial-1.0.0.md",
    title: "Polyform Noncommercial License 1.0.0",
    description: "The Polyform Noncommercial License 1.0.0",
    category: "License",
    version: "v1.0",
  },
  {
    href: "/legal/licenses/MIT.md",
    title: "MIT",
    description: "The MIT License",
    category: "License",
    version: "v1.0",
  },
];

export default async function Legal() {
  const t = await getTranslations("legal");
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
              <p className="text-4xl font-black">{legalLinks.length}</p>
              <p className="mt-1 text-sm text-zinc-400">
                {t("documents_label")}
              </p>
            </div>
            <div>
              <p className="text-4xl font-black">Open</p>
              <p className="mt-1 text-sm text-zinc-400">
                {t("transparent_policy")}
              </p>
            </div>
            <div className="col-span-2 flex flex-wrap items-center gap-2">
              {[
                "Refund",
                "Privacy",
                "Terms",
                "Cookies",
                "Developer Agreement",
              ].map((item) => (
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

      <section className="px-6 my-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col space-y-6">
            {legalLinks.map((link, index) => (
              <LegalCard key={link.href} link={link} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
