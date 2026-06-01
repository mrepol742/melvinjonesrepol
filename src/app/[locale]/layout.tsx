import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ToastContainer } from "react-toastify";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import ScrollTop from "@/components/ui/ScrollTop";
import { getRecentPosts } from "@/lib/posts";
import PrivacyPolicyPrompt from "@/components/common/PrivacyPolicyPrompt";

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

  const posts = getRecentPosts(5);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Nav />

      <div className="flex-1">{children}</div>

      <PrivacyPolicyPrompt />
      <ToastContainer />
      <ScrollTop />
      <Footer posts={posts} />
    </NextIntlClientProvider>
  );
}
