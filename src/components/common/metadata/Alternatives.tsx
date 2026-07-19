import { nonEnLocales, locales } from "@/lib/i18n";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.melvinjonesrepol.com"
    : "http://localhost:3000";

function withLocalePrefix(path: string, locale?: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (!locale || locale === "en") {
    return normalizedPath;
  }

  return `/${locale}${normalizedPath}`;
}

export function getAlternates(path: string, locale?: string) {
  const canonicalPath = withLocalePrefix(path, locale);

  return {
    canonical: `${baseUrl}${canonicalPath}`,
    languages: Object.fromEntries(
      ["en", ...nonEnLocales].map((l) => [
        l,
        `${baseUrl}${withLocalePrefix(path, l)}`,
      ]),
    ),
    types: {
      "application/xml": `${baseUrl}/sitemap.xml`,
      "application/rss+xml": [
        {
          title: "RSS Feed",
          url: `${baseUrl}/rss.xml`,
        },
      ],
    },
  };
}
