import type { Metadata } from "next";
import { Source_Code_Pro, Maven_Pro } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Nav from "../components/shared/Nav";
import Footer from "../components/shared/Footer";
import NextTopLoader from "nextjs-toploader";
import AOSWrapper from "../components/shared/AOSWrapper";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import BreadcrumbJsonLd from "@/components/ui/BreadcrumbJsonLd";
import ServiceWorkerRegister from "@/components/shared/ServiceWorkerRegister";
import ScrollTop from "@/components/ui/ScrollTop";
import GoogleAnalytics from "@/components/shared/GoogleAnalytics";
import GoogleAds from "@/components/shared/GoogleAdsense";
import NortonSafeweb from "@/components/shared/NortonSafeweb";
import BrowserCheck from "@/components/shared/BrowserCheck";
import DevToolsDetector from "@/components/shared/DevToolsDetector";
import Algolia from "@/components/shared/Algolia";
import { getRecentPosts } from "@/lib/posts";
import PrivacyPolicyPrompt from "@/components/shared/PrivacyPolicyPrompt";

config.autoAddCss = false;

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-heading",
});

const mavenPro = Maven_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.melvinjonesrepol.com"),
  title: "Melvin Jones Repol - Strategic Software & DevOps Partner",
  description:
    "I specialize in building robust, scalable software solutions that solve real-world problems. With a passion for technology  and a commitment to excellence, I bring ideas to life through code.",
  keywords: [
    "Software Development",
    "DevOps",
    "Cloud Solutions",
    "Microservices",
    "API Development",
    "CI/CD",
    "Automation",
    "Scalable Architecture",
    "Technical Leadership",
    "Software Consulting",
  ],
  authors: [
    { name: "Melvin Jones Repol", url: "https://www.melvinjonesrepol.com" },
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com",
    types: {
      "application/xml": "https://www.melvinjonesrepol.com/sitemap.xml",
    },
  },
  creator: "Melvin Jones Repol",
  openGraph: {
    title: "Melvin Jones Repol - Strategic Software & DevOps Partner",
    description:
      "I specialize in building robust, scalable software solutions that solve real-world problems. With a passion for technology  and a commitment to excellence, I bring ideas to life through code.",
    url: "https://www.melvinjonesrepol.com",
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
    title: "Melvin Jones Repol - Strategic Software & DevOps Partner",
    description:
      "I specialize in building robust, scalable software solutions that solve real-world problems. With a passion for technology  and a commitment to excellence, I bring ideas to life through code.",
    images: [
      "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
    ],
    creator: "@mrepol742",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const env = process.env.NEXT_PUBLIC_NODE_ENV || "production";
  const isProduction = env === "production";
  const posts = getRecentPosts(5);

  return (
    <html
      lang="en"
      className={`${sourceCodePro.variable} ${mavenPro.variable}`}
    >
      <head>
        <meta name="hostname" content="www.melvinjonesrepol.com" />
        {isProduction && <GoogleAds />}
        <NortonSafeweb />
        <Algolia />
        <BreadcrumbJsonLd />
      </head>
      <body className="antialiased min-h-screen flex flex-col background-grid">
        <div className="background-gloss">
          <div className="gloss-circle circle1"></div>
          <div className="gloss-circle circle2"></div>
          <div className="gloss-circle circle3"></div>
        </div>
        <Nav />
        <NextTopLoader showSpinner={false} />
        <div className="flex-1">
          <AOSWrapper />
          <div className="container mx-auto">{children}</div>
        </div>
        <PrivacyPolicyPrompt />
        <ToastContainer />
        <ScrollTop />
        <Footer posts={posts} />
        {isProduction && (
          <>
            <GoogleAnalytics />
            <ServiceWorkerRegister />
            <DevToolsDetector />
            <BrowserCheck />
          </>
        )}
      </body>
    </html>
  );
}
