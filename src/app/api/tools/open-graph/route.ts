import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url || !/^https?:\/\//.test(url)) {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    const meta: Record<string, string> = {};

    $("meta").each((_, el) => {
      const property = $(el).attr("property") || $(el).attr("name");
      const content = $(el).attr("content");
      if (property && content && property.startsWith("og:")) {
        meta[property] = content;
      }
    });

    return NextResponse.json({ meta });
  } catch (err) {
    console.error("Error fetching Open Graph metadata:", err);
    return NextResponse.json(
      { error: "Failed to fetch or parse metadata" },
      { status: 500 }
    );
  }
}
