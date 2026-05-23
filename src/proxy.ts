import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import HeadlessBrowserCheck from "./lib/proxy/headless-browser-check";
import RateLimiter from "./lib/proxy/rate-limiter";

const env = process.env.NODE_ENV;

export default async function proxy(request: NextRequest) {
  const headlessResponse = HeadlessBrowserCheck(request);
  if (headlessResponse) return headlessResponse;

  if (env === "production") {
    const rateLimiter = RateLimiter(request);
    if (rateLimiter) return rateLimiter;
  }

  // hello world
  if (/^\/hello-world$/.test(request.nextUrl.pathname))
    return new NextResponse("Hello World", { status: 200 });

  const handleI18nRouting = createMiddleware({
    locales: ["en", "fil", "hi", "es", "cmn"],
    defaultLocale: "en",
    localePrefix: "as-needed",
  });

  // handle i18n routing for all other requests
  const response = handleI18nRouting(request);
  return response;
}

// excude static assets
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|images|videos|sw\\.js|.*\\.json$|.*\\.pdf$|.*\\.xml$|.*\\.md$|.*\\.mp4$|.*\\.jpg$|.*\\.png$|.*\\.ico$|.*\\.svg$|.*\\.webp$|.*\\.txt$|.*\\.mkd$).*)",
  ],
};
