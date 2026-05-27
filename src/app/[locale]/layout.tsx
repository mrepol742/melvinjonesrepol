import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ToastContainer } from "react-toastify";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import NextTopLoader from "nextjs-toploader";
import AOSWrapper from "@/components/common/AOSWrapper";
import ScrollTop from "@/components/ui/ScrollTop";
import GoogleAnalytics from "@/components/common/metadata/GoogleAnalytics";
import ServiceWorkerRegister from "@/components/common/ServiceWorkerRegister";
import BrowserCheck from "@/components/common/BrowserCheck";
import DevToolsDetector from "@/components/common/DevToolsDetector";
import { getRecentPosts } from "@/lib/posts";
import PrivacyPolicyPrompt from "@/components/common/PrivacyPolicyPrompt";
import DoorEffect from "@/components/common/DoorEffect";
import MouseCodeTrail from "@/components/common/MouseCodeTrail";

const locales = ["en", "fil", "hi", "es", "cmn"] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(locales, locale)) return notFound();

  setRequestLocale(locale);

  const env = process.env.NEXT_PUBLIC_NODE_ENV || "production";
  const isProduction = env === "production";
  const posts = getRecentPosts(5);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <DoorEffect />
      <MouseCodeTrail />

      <div className="background-gloss">
        <div className="gloss-circle circle1"></div>
        <div className="gloss-circle circle2"></div>
        <div className="gloss-circle circle3"></div>
      </div>

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

      {isProduction && <DevToolsDetector />}

      {isProduction && (
        <>
          <GoogleAnalytics />
          <ServiceWorkerRegister />
          <BrowserCheck />
        </>
      )}
    </NextIntlClientProvider>
  );
}
