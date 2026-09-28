import { BASE_URL, SITEMAP_LOCALES, buildSitemapIndexXml } from "@/lib/sitemap";

export const revalidate = 43200;

export async function GET() {
  const entries = [
    ...SITEMAP_LOCALES.map((locale) => ({
      url: `${BASE_URL}/sitemap-${locale}.xml`,
    })),
  ];

  return new Response(buildSitemapIndexXml(entries), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
