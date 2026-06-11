import type { Metadata } from "next";
import { Source_Code_Pro, Maven_Pro } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import GoogleAds from "@/components/common/metadata/GoogleAdsense";
import NortonSafeweb from "@/components/common/metadata/NortonSafeweb";
import Algolia from "@/components/common/metadata/Algolia";
import DoorEffect from "@/components/common/DoorEffect";
import MouseCodeTrail from "@/components/common/MouseCodeTrail";
import AOSWrapper from "@/components/common/AOSWrapper";
import NextTopLoader from "nextjs-toploader";
import GoogleAnalytics from "@/components/common/metadata/GoogleAnalytics";
import ServiceWorkerRegister from "@/components/common/ServiceWorkerRegister";
import BrowserCheck from "@/components/common/BrowserCheck";
import { ConsentProvider, useConsent } from "@/context/consent";
import LivechatAI from "@/components/common/LivechatAI";

config.autoAddCss = false;

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-heading",
});

const mavenPro = Maven_Pro({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-body",
});

export const revalidate = 43200; // 12 hours (in seconds)

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const env = process.env.NEXT_PUBLIC_NODE_ENV || "production";
  const isProduction = env === "production";

  return (
    <html
      className={`${sourceCodePro.variable} ${mavenPro.variable}`}
      data-scroll-behavior="smooth"
      lang="en"
    >
      <head>
        <meta name="hostname" content="www.melvinjonesrepol.com" />
        {isProduction && <GoogleAds />}
        <NortonSafeweb />
        <Algolia />
      </head>

      <body className="antialiased min-h-screen flex flex-col background-grid">
        <ConsentProvider>
          <DoorEffect />
          <MouseCodeTrail />
          <AOSWrapper />
          <NextTopLoader showSpinner={false} color="#7873f5" />

          <div className="background-gloss">
            <div className="gloss-circle circle1"></div>
            <div className="gloss-circle circle2"></div>
            <div className="gloss-circle circle3"></div>
          </div>

          {children}

          {isProduction && (
            <>
              <GoogleAnalytics />
              <ServiceWorkerRegister />
              <BrowserCheck />
            </>
          )}

          <LivechatAI />
        </ConsentProvider>
      </body>
    </html>
  );
}
