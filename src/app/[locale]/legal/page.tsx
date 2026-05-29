import { getAlternates } from "@/components/common/metadata/Alternatives";
import Button from "@/components/ui/Button";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  },
  {
    href: "/legal/terms-of-service",
    title: "Terms of Service",
    description:
      "Understand the rules and guidelines for using our website, apps, and extensions.",
  },
  {
    href: "/legal/cookie-policy",
    title: "Cookie Policy",
    description:
      "See how we and third-party services use cookies and similar tracking technologies.",
  },
  {
    href: "/legal/developer-client-agreement",
    title: "Developer Client Agreement",
    description:
      "Review the terms and conditions for our development services.",
  },
];

export default function Legal() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden border-b border-zinc-800">
        <div className="relative flex min-h-screen flex-col px-6 py-12 md:px-10">
          <div className="my-auto py-14">
            <h1
              className="text-[14vw] sm:text-[10vw] lg:text-[7.5vw] font-black tracking-tighter leading-[0.85] mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
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
        <div className="max-w-2xl flex flex-col gap-6">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block">
              <div>
                <Button className="bg-indigo-400 before:bg-indigo-600 after:bg-indigo-600 w-full justify-start">
                  <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
                  {link.title}
                </Button>
                <p className="text-sm mt-1">{link.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
