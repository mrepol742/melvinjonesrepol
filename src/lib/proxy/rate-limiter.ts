import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "../rateLimit";

export default function RateLimiter(request: NextRequest) {
  if (/api\//.test(request.nextUrl.pathname)) {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0] || "unknown";
    const origin = request.headers.get("origin");

    const allowedOrigins =
      process.env.NODE_ENV === "development"
        ? [/^http:\/\/localhost:\d+$/, /^http:\/\/127\.0\.0\.1:\d+$/] // dev
        : [/^https?:\/\/([a-z0-9-]+\.)?melvinjonesrepol\.com$/]; // prod

    const isAllowed1 =
      origin && allowedOrigins.some((pattern) => pattern.test(origin));

   // console.log(`[RateLimiter] IP: ${ip}, Origin: ${origin}, Path: ${request.nextUrl.pathname}, Allowed: ${isAllowed1}`);
    if (!isAllowed1) {
      return NextResponse.json(
        { error: "Hehe you're going too far naah..." },
        { status: 403 },
      );
    }

    const maxRequest = /api\/(contact|report)/.test(request.nextUrl.pathname)
      ? 2
      : 10;
    const window = /api\/(contact|report)/.test(request.nextUrl.pathname)
      ? 60 * 60 * 100
      : 5 * 60 * 100;
    const isAllowed = checkRateLimit(ip, maxRequest, window);
    if (!isAllowed)
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }
}
