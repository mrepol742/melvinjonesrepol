import { XMLParser } from "fast-xml-parser";

export type BlogItem = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
};

export async function fetchBlog(): Promise<BlogItem[]> {
  try {
    const res = await fetch("https://blog.melvinjonesrepol.com/rss.xml", {
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
    });

    if (!res.ok) throw new Error(`RSS fetch failed: ${res.status}`);

    const xml = await res.text();
    if (!xml.trimStart().startsWith("<?xml") && !xml.includes("<rss")) {
      throw new Error(
        "RSS response was not XML (likely a Cloudflare challenge)",
      );
    }

    const data = new XMLParser().parse(xml);
    const items = data.rss?.channel?.item ?? [];
    return Array.isArray(items) ? items : [items];
  } catch (err) {
    console.error("Error fetching RSS feeds", err);
    return [];
  }
}
