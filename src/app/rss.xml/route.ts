import { generateRssFeed } from "@/lib/rss";

export const revalidate = 43200; // 12 hours

export async function GET() {
  const xml = await generateRssFeed();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=43200, stale-while-revalidate=86400", // 12 hours cache, 24 hours stale-while-revalidate
    },
  });
}
