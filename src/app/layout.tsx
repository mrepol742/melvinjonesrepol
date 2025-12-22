import type { Metadata } from "next";
import { Source_Code_Pro, Maven_Pro } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import NextTopLoader from "nextjs-toploader";
import AOSWrapper from "../components/AOSWrapper";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import RecentGithubActivityWrapper from "@/components/RecentGithubActivityWrapper";
import RecentGithubActivity from "@/components/RecentGithubActivity";
import Services from "@/lib/serviceList";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import DevTools from "@/components/DevTools";

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
  keywords: Services,
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
    apple: "/favicon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/favicon.png",
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
  return (
    <html
      lang="en"
      className={`${sourceCodePro.variable} ${mavenPro.variable}`}
    >
      <head>
        <meta name="hostname" content="www.melvinjonesrepol.com" />
        <meta name="google-adsense-account" content="ca-pub-5077097159223655" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5077097159223655"
          crossOrigin="anonymous"
        ></script>
        <BreadcrumbJsonLd />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
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
        <RecentGithubActivityWrapper>
          <RecentGithubActivity />
        </RecentGithubActivityWrapper>
        <ToastContainer />
        <Footer />
        <ServiceWorkerRegister />
        <DevTools />
      </body>

      <script
        src="https://app.livechatai.com/embed.js"
        data-id="cmdmcvh4n0001jt0c03xemlxw"
        async
        defer
      ></script>
    </html>
  );
}
