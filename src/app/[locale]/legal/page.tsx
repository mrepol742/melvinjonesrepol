import { getAlternates } from "@/components/common/metadata/Alternatives";
import { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import LegalCard from "./components/LegalCard";
import Header from "@/components/ui/Header";

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
    <>
      <Header
        title={
          <>
            {t("title_line1")}
            <br />
            <span className="opacity-40">{t("title_line2")}</span>
            <br />
            {t("title_line3")}
          </>
        }
        intro={t("hero_description")}
      />

      <section className="px-6 my-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col space-y-6">
            {legalLinks.map((link, index) => (
              <LegalCard key={link.href} link={link} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
