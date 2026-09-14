import AlgoliaSearch from "@/components/common/AlgoliaSearch";
import { getAlternates } from "@/components/common/metadata/Alternatives";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import ScrollTop from "@/components/ui/ScrollTop";
import { getRecentPosts } from "@/lib/posts";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "404 Not Found - Melvin Jones Repol",
  description:
    "The page you are looking for does not exist. But at least the coffee machine still works.",
  keywords: [],
  alternates: getAlternates(""),
  openGraph: {
    title: "404 Not Found  - Melvin Jones Repol",
    description:
      "The page you are looking for does not exist. But at least the coffee machine still works.",
    url: "https://www.melvinjonesrepol.com",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
        width: 1200,
        height: 630,
        alt: "404 Not Found  Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "404 Not Found  - Melvin Jones Repol",
    description:
      "The page you are looking for does not exist. But at least the coffee machine still works.",
    images: [
      "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
    ],
    creator: "@mrepol742",
  },
};

export default async function NotFound() {
  // The root not-found boundary has no [locale] param. The request config
  // resolves its locale to the default (en), so translations still work here.
  const locale = await getLocale();
  const messages = await getMessages();
  const t = await getTranslations("not_found");
  const quotes = t.raw("quotes") as string[];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const posts = getRecentPosts(12, locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Nav />

      <div className="flex min-h-screen items-center justify-center px-6 py-16">
        <div className="w-full max-w-xl border border-stone-300 bg-stone-50 p-8 text-center shadow-[4px_4px_0_0_rgba(120,113,108,0.16)] md:p-12 dark:border-white/15 dark:bg-white/[0.03] dark:shadow-none">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-orange-700 dark:text-orange-300">
            Lost in transit
          </p>
          <h1 className="text-8xl font-black tracking-tight">
            <span className="text-orange-600">4</span>
            <span className="text-stone-500 dark:text-stone-400">0</span>
            <span className="text-orange-600">4</span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold">“{quote}”</h2>

          <p className="my-3 leading-relaxed">{t("description")}</p>

          <div className="mt-6 text-start">
            <AlgoliaSearch />
          </div>

          <p className="text-xs text-stone-500 dark:text-stone-400">
            {t("powered_by")}
          </p>
        </div>
      </div>

      <ScrollTop />
      <Footer posts={posts} />
    </NextIntlClientProvider>
  );
}
