import { getAlternates } from "@/components/common/metadata/Alternatives";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import { getRecentPosts } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";
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
  const locale = await getLocale();
  const messages = await getMessages();
  const t = await getTranslations("not_found");
  const quotes = t.raw("quotes") as string[];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const posts = getRecentPosts(12);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Nav />

      <section className="flex min-h-screen items-center px-6 pb-16 pt-32 sm:px-10 lg:px-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <h1 className="max-w-xl text-5xl font-black leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              This page has been{" "}
              <span className="text-orange-600">yoinked.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone-700 dark:text-stone-300">
              {t("description")}
            </p>

            <p className="mt-7 border-l-2 border-orange-500 pl-4 font-mono text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              “{quote}”
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex min-h-12 items-center bg-orange-600 px-5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
              >
                Take me somewhere sensible →
              </Link>
              <Link
                href="/blog"
                className="inline-flex min-h-12 items-center border border-stone-400 px-5 text-sm font-bold transition hover:border-stone-950 hover:bg-stone-950 hover:text-stone-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600 dark:border-stone-600 dark:hover:border-stone-50 dark:hover:bg-stone-50 dark:hover:text-stone-950"
              >
                Read a blog instead
              </Link>
            </div>
          </div>

          <div
            className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none"
            aria-hidden="true"
          >
            <p className="absolute -left-1 top-1/2 z-10 -translate-y-1/2 -rotate-90 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-orange-600 sm:-left-8">
              last seen: never
            </p>
            <div className="select-none text-center font-mono text-[clamp(8rem,28vw,17rem)] font-black leading-none tracking-[-0.18em] text-stone-900 dark:text-stone-100">
              4
              <span className="relative inline-block text-orange-600">
                0
                <span className="absolute left-[26%] top-[28%] h-[13%] w-[13%] rounded-full bg-stone-950 dark:bg-stone-100" />
                <span className="absolute right-[26%] top-[28%] h-[13%] w-[13%] rounded-full bg-stone-950 dark:bg-stone-100" />
                <span className="absolute bottom-[24%] left-1/2 h-[8%] w-[35%] -translate-x-1/2 rounded-full bg-stone-950 dark:bg-stone-100" />
              </span>
              4
            </div>
            <div className="mx-auto mt-2 w-[78%] border-t-2 border-dashed border-orange-500/70" />
            <div className="mx-auto mt-5 flex w-[78%] items-center justify-between font-mono text-xs text-stone-500 dark:text-stone-400">
              <span>¯\\_(ツ)_/¯</span>
              <span>status: oops</span>
            </div>
          </div>
        </div>
      </section>

      <Footer posts={posts} />
    </NextIntlClientProvider>
  );
}
