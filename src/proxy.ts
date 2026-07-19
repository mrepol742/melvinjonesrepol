import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import HeadlessBrowserCheck from "./lib/proxy/headless-browser-check";
import RateLimiter from "./lib/proxy/rate-limiter";
import { locales, nonEnLocales } from "./lib/i18n";

const env = process.env.NODE_ENV;

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

  const { pathname } = request.nextUrl;

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
    "/((?!api|_next/static|_next/image|images|sounds|videos|sw\\.js|.*\\.json$|.*\\.pdf$|.*\\.xml$|.*\\.md$|.*\\.mp4$|.*\\.jpg$|.*\\.png$|.*\\.ico$|.*\\.svg$|.*\\.webp$|.*\\.txt$|.*\\.mkd$).*)",
  ],
};
