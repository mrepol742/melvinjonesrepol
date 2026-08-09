import {
  SITEMAP_LOCALES,
  buildSitemapXml,
  getLocalizedStaticUrls,
} from "@/lib/sitemap";

export const revalidate = 43200;

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params;

  if (!SITEMAP_LOCALES.includes(locale as (typeof SITEMAP_LOCALES)[number])) {
    return new Response("Not Found", { status: 404 });
  }

  return new Response(buildSitemapXml(getLocalizedStaticUrls(locale)), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
