import { NextResponse } from "next/server";

const ALGOLIA_ENDPOINT = process.env.ALGOLIA_ENDPOINT || "";
const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID || "";
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY || "";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q");

    if (!q) {
      return NextResponse.json(
        { error: "Query parameter 'q' is required" },
        { status: 400 },
      );
    }

    if (q.length > 100) {
      return NextResponse.json(
        { error: "Query parameter 'q' is too long" },
        { status: 400 },
      );
    }

    const res = await fetch(ALGOLIA_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Algolia-Application-Id": ALGOLIA_APP_ID,
        "X-Algolia-API-Key": ALGOLIA_API_KEY,
      },
      body: JSON.stringify({
        query: q,
        hitsPerPage: 5,
      }),
    });

    const data = await res.json();
    return NextResponse.json({
      success: true,
      data: data.hits || [],
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: error instanceof Error ? 400 : 500 },
    );
  }
}
