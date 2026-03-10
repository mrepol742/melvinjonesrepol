import { NextResponse } from "next/server";

const EXCHANGE_RATE_API_KEY = process.env.EXCHANGE_RATE_API_KEY || "";
const CACHE_DURATION = 1000 * 60 * 60 * 24; // 24 hours in milliseconds

let cache: any = null;
let lastFetch = 0;

export async function GET(request: Request) {
  try {
    const now = Date.now();

    if (cache && now - lastFetch < CACHE_DURATION) {
      return NextResponse.json({
        success: true,
        source: "cache",
        lastFetchedEpoch: lastFetch,
        lastFetchedISO: new Date(lastFetch).toISOString(),
        data: cache,
      });
    }

    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${EXCHANGE_RATE_API_KEY}/latest/PHP`,
    );

    const data = await response.json();

    cache = data;
    lastFetch = now;

    return NextResponse.json({
      success: true,
      source: "api",
      lastFetchedEpoch: lastFetch,
      lastFetchedISO: new Date(lastFetch).toISOString(),
      data: cache,
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
