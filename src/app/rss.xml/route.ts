import { generateRssFeed } from "@/lib/rss";

export async function GET() {
  const xml = await generateRssFeed();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
