import type { Metadata } from "next";
import { Source_Code_Pro, Maven_Pro, Sora } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
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
import GoogleAdsense from "@/components/common/metadata/GoogleAdsense";
import CookieBanner from "@/components/common/PrivacyPolicyPrompt";

config.autoAddCss = false;

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-heading-alt",
});

const mavenPro = Maven_Pro({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-body",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-heading",
});

export const revalidate = 43200; // 12 hours (in seconds)

export const metadata: Metadata = {
  metadataBase: new URL("https://www.melvinjonesrepol.com"),
  title: "Melvin Jones Repol - Full-Stack Developer, CTO & DevSecOps Engineer",
  description:
    "Melvin Jones Repol is a Software Engineer, CTO, and DevSecOps specialist building practical, scalable software and taking ideas from architecture to production.",
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
    title:
      "Melvin Jones Repol - Full-Stack Developer, CTO & DevSecOps Engineer",
    description:
      "Melvin Jones Repol is a Software Engineer, CTO, and DevSecOps specialist building practical, scalable software and taking ideas from architecture to production.",
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
    title:
      "Melvin Jones Repol - Full-Stack Developer, CTO & DevSecOps Engineer",
    description:
      "Melvin Jones Repol is a Software Engineer, CTO, and DevSecOps specialist building practical, scalable software and taking ideas from architecture to production.",
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
      className={`${sourceCodePro.variable} ${mavenPro.variable} ${sora.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <meta name="hostname" content="www.melvinjonesrepol.com" />
        <NortonSafeweb />
        <Algolia />
        <GoogleAdsense />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
      </head>

      <body className="antialiased min-h-screen flex flex-col background-grid">
        <ConsentProvider>
          {/* <DoorEffect /> */}
          {/* <MouseCodeTrail /> */}
          <CookieBanner />
          <AOSWrapper />
          <NextTopLoader showSpinner={false} color="#22c55e" />

          {/* Peter Cullen, the voice of Optimus Prime since 1984. */}
          <div
            className="fixed inset-0 -z-10 bg-cover bg-no-repeat -scale-x-100 opacity-5 grayscale"
            style={{
              backgroundImage: `url('/images/optimus-prime.png')`,
              backgroundPosition: "left center",
            }}
          ></div>

          <p className="fixed bottom-6 left-6 -z-10 text-sm text-gray-500 italic max-w-xs select-none">
            &quot;Freedom is the right of all sentient beings.&quot;
          </p>

          {/*<div className="background-gloss">
            <div className="gloss-circle circle1"></div>
            <div className="gloss-circle circle2"></div>
            <div className="gloss-circle circle3"></div>
          </div>*/}

          <main>{children}</main>

          {isProduction && (
            <>
              <GoogleAnalytics />
              <ServiceWorkerRegister />
              {/* <BrowserCheck /> */}
            </>
          )}

          <LivechatAI />
        </ConsentProvider>
      </body>
    </html>
  );
}
