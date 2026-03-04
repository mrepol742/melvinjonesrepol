import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "./lib/rateLimit";
import HeadlessBrowserCheck from "./lib/proxy/headless-browser-check";
import RateLimiter from "./lib/proxy/rate-limiter";

const env = process.env.NODE_ENV;

export async function proxy(req: NextRequest) {
  const headlessResponse = HeadlessBrowserCheck(req);
  if (headlessResponse) return headlessResponse;

  const rateLimiter = RateLimiter(req);
  if (rateLimiter) return rateLimiter;

  if (/hello-world$/.test(req.nextUrl.pathname))
    return new NextResponse("Hello World", { status: 200 });

    return NextResponse.next({
      request: { headers: req.headers },
    });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|favicon.png|robots.txt|images|videos).*)",
  ],
};
