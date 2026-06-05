import { getAlternates } from "@/components/common/metadata/Alternatives";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Documents - Melvin Jones Repol",
  description: "Review our legal documents and policies",
  alternates: getAlternates("/legal"),
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

const legalLinks = [
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
    href: "/legal/licenses/Polyform-Noncommercial-License-1.0.0.md",
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

export default function Legal() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden border-b border-zinc-800">
        <div className="relative flex min-h-screen flex-col px-6 py-12 md:px-10">
          <div className="my-auto py-14">
            <h1 className="text-[14vw] sm:text-[10vw] lg:text-[7.5vw] font-black tracking-tighter leading-[0.85] mb-8">
              Policies
              <br />
              <span className="opacity-40">&</span>
              <br />
              documents.
            </h1>

            <p
              className="max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Transparency and trust are important. Review the policies and
              legal documents to understand how this site operates and protects
              your data.
            </p>
          </div>

          <div
            className="border-t border-zinc-800 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div>
              <p className="text-4xl font-black">{legalLinks.length}</p>
              <p className="mt-1 text-sm text-zinc-400">Documents</p>
            </div>
            <div>
              <p className="text-4xl font-black">Open</p>
              <p className="mt-1 text-sm text-zinc-400">Transparent policy</p>
            </div>
            <div className="col-span-2 flex flex-wrap items-center gap-2">
              {["Privacy", "Terms", "Cookies", "Developer Agreement"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-400 px-3 py-1 text-xs text-zinc-400"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="hidden md:grid grid-cols-[3rem_1fr_auto] gap-x-8 px-6 pb-3 border-b border-zinc-800 mb-2">
            <span className="text-xs uppercase tracking-widest opacity-40">
              #
            </span>
            <span className="text-xs uppercase tracking-widest opacity-40">
              Document
            </span>
            <span className="text-xs uppercase tracking-widest opacity-40">
              Category
            </span>
          </div>

          <div className="divide-y divide-zinc-800/60">
            {legalLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="group grid grid-cols-1 md:grid-cols-[3rem_1fr_auto] gap-4 md:gap-x-8 items-start md:items-center px-6 py-7 transition-colors hover:bg-zinc-900/40 rounded-xl"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <span className="hidden md:block text-xs font-mono opacity-30 group-hover:opacity-60 transition-opacity pt-0.5">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1.5">
                    <h2 className="text-base md:text-lg font-semibold leading-tight">
                      {link.title}
                    </h2>
                    <span className="text-[10px] font-mono border border-zinc-700 text-zinc-500 px-2 py-0.5 rounded">
                      {link.version}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-green-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                      Active
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed">{link.description}</p>
                </div>

                <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-2">
                  <span className="text-xs border border-zinc-700 px-3 py-1 rounded-full">
                    {link.category}
                  </span>
                  <span className="text-xs font-medium flex items-center gap-1">
                    Read
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest opacity-50 mb-1">
                Last reviewed
              </p>
              <p className="text-sm font-medium">May 2026</p>
            </div>
            <div className="h-px sm:h-8 sm:w-px border-b sm:border-b-0 sm:border-r border-zinc-800 w-full sm:w-auto" />
            <div>
              <p className="text-xs uppercase tracking-widest opacity-50 mb-1">
                Jurisdiction
              </p>
              <p className="text-sm font-medium">Philippines</p>
            </div>
            <div className="h-px sm:h-8 sm:w-px border-b sm:border-b-0 sm:border-r border-zinc-800 w-full sm:w-auto" />
            <div>
              <p className="text-xs uppercase tracking-widest opacity-50 mb-1">
                Questions?
              </p>
              <Link
                href="/contact-me"
                className="text-sm font-medium underline underline-offset-2 hover:opacity-70 transition-opacity"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
