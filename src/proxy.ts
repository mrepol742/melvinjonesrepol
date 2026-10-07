import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { locales, nonEnLocales } from "./lib/i18n";
import { createHeadlessBrowserCheck } from "@mrepol742/next-kit/next/headless-browser-check";
import { createNextRateLimiter } from "@mrepol742/next-kit/next/rate-limiter";
import { createMemoryRateLimitStore } from "@mrepol742/next-kit/server/rate-limit";

const env = process.env.NODE_ENV;
const store = createMemoryRateLimitStore();
const getKey = (request: NextRequest) =>
  request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

const handleI18nRouting = createMiddleware({
  locales,
  defaultLocale: "en",
  localePrefix: "as-needed",
});

// Blog is English-only — disable locale-detection redirect so /blog/... is never
// bounced back to /{locale}/blog/... by Accept-Language or the NEXT_LOCALE cookie.
const handleI18nRoutingBlog = createMiddleware({
  locales,
  defaultLocale: "en",
  localePrefix: "as-needed",
  localeDetection: false,
});

// Keep contact/report and general API traffic in separate policy buckets.
const contactReportLimiter = createNextRateLimiter({
  store,
  prefix: "melvinjonesrepol:api:contact-report",
  maxRequests: 5,
  windowMs: 60 * 60 * 1000,
  getKey,
});
const generalLimiter = createNextRateLimiter({
  store,
  prefix: "melvinjonesrepol:api:general",
  maxRequests: 30,
  windowMs: 30 * 60 * 1000,
  getKey,
});

export default async function proxy(request: NextRequest) {
  const headlessResponse = createHeadlessBrowserCheck()(request);
  if (headlessResponse) return headlessResponse;

  if (env === "production") {
    const limiter = /^\/api\/(contact|report)(?:\/|$)/.test(
      request.nextUrl.pathname,
    )
      ? contactReportLimiter
      : generalLimiter;
    const response = await limiter(request);
    if (response) return response;
  }

  // API routes need request checks, but must not enter locale routing.
  if (request.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  // hello world
  if (/^\/hello-world$/.test(request.nextUrl.pathname))
    return new NextResponse("Hello World", { status: 200 });

  const { pathname } = request.nextUrl;

  // Health check - skip locale middleware
  if (pathname === "/up") {
    return NextResponse.next();
  }

  // Redirect /{non-en-locale}/blog/... → /blog/... before next-intl can loop it back.
  const blogLocale = nonEnLocales.find((l) =>
    pathname.startsWith(`/${l}/blog`),
  );
  if (blogLocale) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(blogLocale.length + 1); // strip leading /locale
    return NextResponse.redirect(url, 308);
  }

  // For /blog/... paths use the no-detect middleware so next-intl never redirects
  // a Filipino/French/etc. visitor back to their locale-prefixed blog URL.
  if (pathname === "/blog" || pathname.startsWith("/blog/")) {
    return handleI18nRoutingBlog(request);
  }

  return handleI18nRouting(request);
}

// exclude static assets
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|images|sounds|videos|sw\\.js|.*\\.json$|.*\\.pdf$|.*\\.xml$|.*\\.md$|.*\\.mp4$|.*\\.jpg$|.*\\.png$|.*\\.ico$|.*\\.svg$|.*\\.webp$|.*\\.txt$|.*\\.mkd$).*)",
  ],
};
