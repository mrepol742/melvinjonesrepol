import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ToastContainer } from "react-toastify";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import ScrollTop from "@/components/ui/ScrollTop";
import { getRecentPosts } from "@/lib/posts";
import PrivacyPolicyPrompt from "@/components/common/PrivacyPolicyPrompt";
import DevToolsDetector from "@/components/common/DevToolsDetector";

const locales = ["en", "fil", "hi", "es", "cmn"] as const;

// en is ignore because it is the default locale
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
    <NextIntlClientProvider locale={locale.length === 0 ? "en" : locale} messages={messages}>
      <Nav />

      <div className="flex-1">{children}</div>

      {isProduction && (
        <>
          <DevToolsDetector />
        </>
      )}

      <PrivacyPolicyPrompt />
      <ToastContainer />
      <ScrollTop />
      <Footer posts={posts} />
    </NextIntlClientProvider>
  );
}
