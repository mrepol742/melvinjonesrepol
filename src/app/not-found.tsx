import AlgoliaSearch from "@/components/common/AlgoliaSearch";
import { getAlternates } from "@/components/common/metadata/Alternatives";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

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
  const t = await getTranslations("not_found");
  const quotes = t.raw("quotes") as string[];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-8xl font-bold tracking-tight animate-bounce">
          <span className="text-indigo-500">4</span>
          <span className="text-gray-500">0</span>
          <span className="text-indigo-500">4</span>
        </h1>

        <h2 className="mt-6 text-2xl font-semibold">“{quote}”</h2>

        <p className="my-3 leading-relaxed">{t("description")}</p>

        <div className="mt-6 rounded-full text-start">
          <AlgoliaSearch />
        </div>

        <p className="text-xs text-gray-500">{t("powered_by")}</p>
      </div>
    </div>
  );
}
