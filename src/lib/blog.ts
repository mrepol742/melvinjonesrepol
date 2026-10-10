import { XMLParser } from "fast-xml-parser";

export async function fetchBlog() {
  try {
    const res = await fetch("https://blog.melvinjonesrepol.com/rss.xml", {
      next: { revalidate: 10800 }, // 3 hours
    });

    if (!res.ok)
      throw new Error(`Failed to fetch blog RSS feed: ${res.statusText}`);

    const xml = await res.text();
    const parser = new XMLParser();
    const data = parser.parse(xml);

    const items = data.rss?.channel?.item ?? [];

    return Array.isArray(items) ? items : [items];
  } catch (err) {
    console.error("Error fetching blog RSS feed", err);
    return [];
  }
}
