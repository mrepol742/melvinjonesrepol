import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "./lib/rateLimit";

const env = process.env.NODE_ENV;

export async function proxy(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0] || "unknown";
  const origin = request.headers.get("origin");

  if (/api\//.test(request.nextUrl.pathname)) {
    const allowedOrigins =
      env === "development"
        ? [/^http:\/\/localhost:\d+$/, /^http:\/\/127\.0\.0\.1:\d+$/] // dev
        : [/^https?:\/\/([a-z0-9-]+\.)?melvinjonesrepol\.com$/]; // prod

    const isAllowed1 =
      origin && allowedOrigins.some((pattern) => pattern.test(origin));

    if (!isAllowed1) {
      return NextResponse.json(
        { error: "Hehe you're going too far naah..." },
        { status: 403 },
      );
    }

    const maxRequest = /api\/contact/.test(request.nextUrl.pathname) ? 2 : 10;
    const window = /api\/contact/.test(request.nextUrl.pathname)
      ? 60 * 60 * 100
      : 5 * 60 * 100;
    const isAllowed = checkRateLimit(ip, maxRequest, window);
    if (!isAllowed)
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  if (/hello-world$/.test(request.nextUrl.pathname))
    return new NextResponse("Hello World", { status: 200 });
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|favicon.png|robots.txt|images|videos).*)",
  ],
};
