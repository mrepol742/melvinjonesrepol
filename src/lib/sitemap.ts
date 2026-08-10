import { getAllPosts } from "@/lib/posts";
import { locales } from "@/lib/i18n";

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://www.melvinjonesrepol.com"
    : "http://localhost:3000";

export const BLOG_SITEMAP_PAGE_SIZE = 100;

export const STATIC_ROUTES = [
  "",
  "/uptime",
  "/about",
  "/case-studies",
  "/now",
  "/projects",
  "/protocol-discussion-platform",
  "/web-surface-scan",
  "/webvium-browser",
  "/webvium-vpn",
  "/canis-agent",
  "/axleshift-freight-management",
  "/point-of-sale",
  "/webvium-launcher",
  "/floating-console-extension",
  "/teams",
  "/certificates",
  "/work-experience",
  "/contact-me",
  "/gaming",
  "/tools/open-graph",
  "/tools/ip-address",
  "/tools/qrcode-generator",
  "/tools/user-agent",
  "/legal",
  "/legal/refund-policy",
  "/legal/privacy-policy",
  "/legal/terms-of-service",
  "/legal/cookie-policy",
  "/legal/developer-client-agreement",
] as const;

export function getLocalizedStaticUrls(locale: string) {
  const prefix = locale === "en" ? "" : `/${locale}`;

  return STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${prefix}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}

export function getBlogSitemapPageCount() {
  return Math.max(
    1,
    Math.ceil(getAllPosts("en").length / BLOG_SITEMAP_PAGE_SIZE),
  );
}

export function getBlogSitemapUrls(page: number) {
  const posts = getAllPosts("en");
  const start = (page - 1) * BLOG_SITEMAP_PAGE_SIZE;
  const end = start + BLOG_SITEMAP_PAGE_SIZE;

  return posts.slice(start, end).map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : undefined,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
}

export function buildSitemapXml(
  entries: Array<{
    url: string;
    lastModified?: Date;
    changeFrequency?: string;
    priority?: number;
  }>,
) {
  const body = entries
    .map((entry) => {
      const lastmod = entry.lastModified
        ? `<lastmod>${entry.lastModified.toISOString()}</lastmod>`
        : "";
      const changefreq = entry.changeFrequency
        ? `<changefreq>${entry.changeFrequency}</changefreq>`
        : "";
      const priority =
        entry.priority !== undefined
          ? `<priority>${entry.priority}</priority>`
          : "";

      return `<url><loc>${entry.url}</loc>${lastmod}${changefreq}${priority}</url>`;
    })
    .join("");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`
  );
}

export function buildSitemapIndexXml(
  entries: Array<{
    url: string;
    lastModified?: Date;
  }>,
) {
  const body = entries
    .map((entry) => {
      const lastmod = entry.lastModified
        ? `<lastmod>${entry.lastModified.toISOString()}</lastmod>`
        : "";

      return `<sitemap><loc>${entry.url}</loc>${lastmod}</sitemap>`;
    })
    .join("");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</sitemapindex>`
  );
}

export const SITEMAP_LOCALES = locales;
