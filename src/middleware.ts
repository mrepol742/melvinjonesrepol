import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "./lib/rateLimit";

export async function middleware(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0] || "unknown";

  if (/api\//.test(request.nextUrl.pathname)) {
    const maxRequest = /api\/contact/.test(request.nextUrl.pathname) ? 2 : 10;
    const window = 60 * 60 * 100;
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
