import {
  BASE_URL,
  SITEMAP_LOCALES,
  buildSitemapIndexXml,
  getBlogSitemapPageCount,
} from "@/lib/sitemap";

export const revalidate = 43200;

export async function GET() {
  const now = new Date();
  const blogPageCount = getBlogSitemapPageCount();

  const entries = [
    ...SITEMAP_LOCALES.map((locale) => ({
      url: `${BASE_URL}/sitemap-${locale}.xml`,
      lastModified: now,
    })),
    ...Array.from({ length: blogPageCount }, (_, index) => ({
      url: `${BASE_URL}/sitemap-blog-${index + 1}.xml`,
      lastModified: now,
    })),
  ];

  return new Response(buildSitemapIndexXml(entries), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
