import { getAlternates } from "@/components/common/metadata/Alternatives";
import { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
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
    version: "v1.3",
  },
  {
    href: "/legal/terms-of-service",
    title: "Terms of Service",
    description:
      "Understand the rules and guidelines for using our website, apps, and extensions.",
    category: "Usage",
    version: "v1.3",
  },
  {
    href: "/legal/cookie-policy",
    title: "Cookie Policy",
    description:
      "See how we and third-party services use cookies and similar tracking technologies.",
    category: "Tracking",
    version: "v1.1",
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

function DocumentList({
  documents,
  startIndex = 1,
}: {
  documents: typeof legalLinks;
  startIndex?: number;
}) {
  return (
    <ol className="border-t border-stone-300 dark:border-stone-700">
      {documents.map((document, index) => (
        <li key={document.href}>
          <Link
            href={document.href}
            className="group grid gap-5 border-b border-stone-300 py-6 transition-colors hover:bg-orange-500/5 dark:border-stone-700 dark:hover:bg-orange-500/10 md:grid-cols-[3.5rem_minmax(0,1fr)_auto] md:items-center md:px-4"
          >
            <span className="font-mono text-sm text-orange-700 dark:text-orange-300">
              {String(index + startIndex).padStart(2, "0")}
            </span>
            <span>
              <span className="block text-xl font-bold tracking-tight group-hover:text-orange-700 dark:group-hover:text-orange-300">
                {document.title}
              </span>
              <span className="mt-2 block max-w-2xl text-sm leading-6 text-stone-600 dark:text-stone-400">
                {document.description}
              </span>
            </span>
            <span className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400">
              <span>{document.category}</span>
              <span>{document.version}</span>
              <span className="text-lg text-orange-600 transition-transform group-hover:translate-x-1 dark:text-orange-400">→</span>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default async function Legal() {
  const t = await getTranslations("legal");
  const policies = legalLinks.filter((link) => link.category !== "License");
  const licenses = legalLinks.filter((link) => link.category === "License");

  return (
    <>
      <Header
        title={
          <>
            {t("title_line1")}
            <br />
            <span className="homepage-accent">{t("title_line2")}</span>
            <br />
            {t("title_line3")}
          </>
        }
        intro={t("hero_description")}
      />

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid border-y border-stone-300 dark:border-stone-700 sm:grid-cols-3">
            {[
              ["05", "Policies & agreements"],
              ["03", "Open-source licenses"],
              ["01", "Place to ask questions"],
            ].map(([value, label]) => (
              <div key={label} className="border-b border-stone-300 px-5 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 dark:border-stone-700">
                <p className="text-2xl font-black tracking-tight text-orange-700 dark:text-orange-300">{value}</p>
                <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-[minmax(14rem,.45fr)_minmax(0,1.55fr)]">
            <div className="border border-stone-300 bg-stone-100 p-6 dark:border-stone-700 dark:bg-stone-950 lg:sticky lg:top-28 lg:self-start md:p-8">
              <p className="homepage-kicker">Document directory</p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.88] tracking-[-0.06em] md:text-5xl">
                The rules,
                <br />
                plainly <span className="homepage-accent">stated.</span>
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-7 text-stone-600 dark:text-stone-400">
                The documents that explain how this site, its services, and its code are used.
              </p>
              <Link href="/contact-me" className="mt-7 inline-flex border-b-2 border-orange-600 pb-1 text-xs font-bold uppercase tracking-widest hover:text-orange-700 dark:hover:text-orange-300">
                Ask a question
              </Link>
            </div>

            <div>
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="homepage-kicker">Policies & agreements</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight">How we work and handle information.</h3>
                </div>
                <span className="font-mono text-sm text-stone-500 dark:text-stone-400">{String(policies.length).padStart(2, "0")} docs</span>
              </div>
              <DocumentList documents={policies} />

              <div className="mb-5 mt-16 flex items-end justify-between gap-4">
                <div>
                  <p className="homepage-kicker">Licenses</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight">The terms attached to open-source work.</h3>
                </div>
                <span className="font-mono text-sm text-stone-500 dark:text-stone-400">{String(licenses.length).padStart(2, "0")} docs</span>
              </div>
              <DocumentList documents={licenses} startIndex={policies.length + 1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
