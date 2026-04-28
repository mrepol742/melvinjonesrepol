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
import DoorEffect from "@/components/shared/DoorEffect";

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
  title: "Melvin Jones Repol - Software Engineer",
  description:
    "Building scalable systems from planning and design to development and production support, helping businesses grow efficiently.",
  keywords: [
    "Software Engineer",
    "Software Developer",
    "Systems Engineer",
    "Backend Engineer",
    "Full Stack Engineer",
    "Application Engineer",
    "Software Architect",
    "System Designer",
    "Scalable systems",
    "Distributed systems",
    "System design",
    "Software architecture",
    "API development",
    "Microservices",
    "Cloud computing",
    "Backend development",
    "Frontend development",
    "Database design",
    "Performance optimization",
    "Production systems",
    "DevOps practices",
    "CI/CD pipelines",
    "Software lifecycle management",
    "End-to-end development",
    "Planning and design",
    "Deployment and production support",
    "System maintenance",
    "Feature development",
    "Infrastructure design",
    "Production reliability",
    "System integration",
    "Business scalability",
    "High-performance systems",
    "Digital transformation",
    "Enterprise solutions",
    "Business automation",
    "Operational efficiency",
    "Product scalability",
    "Technical problem solving",
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
    title: "Melvin Jones Repol - Software Engineer",
    description:
      "Building scalable systems from planning and design to development and production support, helping businesses grow efficiently.",
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
    title: "Melvin Jones Repol - Software Engineer",
    description:
      "Building scalable systems from planning and design to development and production support, helping businesses grow efficiently.",
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
        <DoorEffect />

        <div className="background-gloss">
          <div className="gloss-circle circle1"></div>
          <div className="gloss-circle circle2"></div>
          <div className="gloss-circle circle3"></div>
        </div>

        <Nav />

        <NextTopLoader showSpinner={false} />

        <div className="flex-1">
          <AOSWrapper />
          {children}
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
