import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";
import { recaptcha } from "@/lib/recaptcha";

export async function POST(req: NextRequest) {
  try {
    const { url, username, token } = await req.json();

    // recaptcha verification
    if (!(await recaptcha(token, "open_graph")))
      throw new Error("reCAPTCHA verification failed. Please try again.");

    const formattedUrl = /^https?:\/\//.test(url) ? url : `http://${url}`;
    if (username) {
      throw new Error(
        "Bots has no place here. If your not a bot type those fields manually.",
      );
    }

    const response = await fetch(formattedUrl);
    const html = await response.text();
    const $ = cheerio.load(html);
    const meta: Record<string, string> = {};

    $("meta").each((_, el) => {
      const property = $(el).attr("property") || $(el).attr("name");
      const content = $(el).attr("content");
      if (
        property &&
        content &&
        ["title", "description", "og", "twitter"].some((prefix) =>
          property.startsWith(prefix),
        )
      ) {
        meta[property] = content;
      }
    });

    return NextResponse.json({ meta });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: error instanceof Error ? 400 : 500 },
    );
  }
}
