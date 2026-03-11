import Button from "@/components/Button";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Documents - Melvin Jones Repol",
  description: "Review our legal documents and policies",
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/legal",
  },
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
];

export default function Legal() {
  return (
    <main className="my-18 p-3 md:p-8">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-semibold">
              Explore our Legal Documents
            </h1>
            <p className="mt-4 leading-relaxed">
              Transparency and trust are important to us. Review our policies
              and legal documents to understand how we operate and protect your
              data.
            </p>
          </div>

          <div className="md:w-1/2 flex flex-col gap-6">
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
        </div>
      </div>
    </main>
  );
}
