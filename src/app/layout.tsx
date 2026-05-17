import type { Metadata } from "next";
import { Source_Code_Pro, Maven_Pro } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import NextTopLoader from "nextjs-toploader";
import AOSWrapper from "../components/common/AOSWrapper";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import BreadcrumbJsonLd from "@/components/ui/BreadcrumbJsonLd";
import ServiceWorkerRegister from "@/components/common/ServiceWorkerRegister";
import ScrollTop from "@/components/ui/ScrollTop";
import GoogleAnalytics from "@/components/common/GoogleAnalytics";
import GoogleAds from "@/components/common/GoogleAdsense";
import NortonSafeweb from "@/components/common/NortonSafeweb";
import BrowserCheck from "@/components/common/BrowserCheck";
import DevToolsDetector from "@/components/common/DevToolsDetector";
import Algolia from "@/components/common/Algolia";
import { getRecentPosts } from "@/lib/posts";
import PrivacyPolicyPrompt from "@/components/common/PrivacyPolicyPrompt";
import DoorEffect from "@/components/common/DoorEffect";
import MouseCodeTrail from "@/components/common/MouseCodeTrail";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string | undefined }>;
}) {
  const { locale } = await params;
  const env = process.env.NEXT_PUBLIC_NODE_ENV || "production";
  const isProduction = env === "production";
  const posts = getRecentPosts(5);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${sourceCodePro.variable} ${mavenPro.variable}`}
      data-scroll-behavior="smooth"
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
        <MouseCodeTrail />

        <div className="background-gloss">
          <div className="gloss-circle circle1"></div>
          <div className="gloss-circle circle2"></div>
          <div className="gloss-circle circle3"></div>
        </div>

        <NextIntlClientProvider messages={messages} >
          <Nav />

          <NextTopLoader showSpinner={false} color="#7873f5" />

          <div className="flex-1">
            <AOSWrapper />
            {children}
          </div>

          <PrivacyPolicyPrompt />
          <ToastContainer />
          <ScrollTop />
          <Footer posts={posts} />
        </NextIntlClientProvider>

        {isProduction && (
          <>
            <GoogleAnalytics />
            <ServiceWorkerRegister />
            <DevToolsDetector />
            <BrowserCheck />
          </>
        )}
                 <ServiceWorkerRegister />
      </body>
    </html>
  );
}
