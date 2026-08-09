import {
  buildSitemapXml,
  getBlogSitemapPageCount,
  getBlogSitemapUrls,
} from "@/lib/sitemap";

export const revalidate = 3600;

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ page: string }> },
) {
  const { page } = await params;
  const pageNumber = Number.parseInt(page, 10);
  const pageCount = getBlogSitemapPageCount();

  if (!Number.isInteger(pageNumber) || pageNumber < 1 || pageNumber > pageCount) {
    return new Response("Not Found", { status: 404 });
  }

  return new Response(buildSitemapXml(getBlogSitemapUrls(pageNumber)), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
