import { supportedLocales } from "@/i18n/request";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.melvinjonesrepol.com"
    : "http://localhost:3000";

export function getAlternates(path: string) {
  return {
    canonical: `${baseUrl}/${path}`,
    languages: Object.fromEntries(
      supportedLocales.map((l) => [l, `${baseUrl}/${l}${path}`]),
    ),
    types: {
      "application/xml": `${baseUrl}/sitemap.xml`,
    },
  };
}
