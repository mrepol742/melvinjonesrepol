import type { MetadataRoute } from "next";

// the default locale is "" (empty string), so it is included first == english ==
const locales = ["", "/cmn", "/es", "/fil", "/hi"];

const routes = [
  "",
  "/uptime",
  "/blog",
  "/projects",
  "/ulisha-store-laravel",
  "/ulisha-store-next",
  "/protocol-discussion-platform",
  "/web-surface-scan",
  "/webvium-browser",
  "/webvium-vpn",
  "/canis-chatbot",
  "/axleshift-freight-management",
  "/point-of-sale",
  "/webvium-launcher",
  "/floating-console-extension",
  "/teams",
  "/certificates",
  "/work-experience",
  "/gallery",
  "/contact-me",
  "/gaming",
  "/tools/open-graph",
  "/tools/ip-address",
  "/tools/qrcode-generator",
  "/tools/user-agent",
  "/legal",
  "/legal/privacy-policy",
  "/legal/terms-of-service",
  "/legal/cookie-policy",
  "/legal/developer-client-agreement",
];

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.melvinjonesrepol.com"
    : "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      urls.push({
        url: `${baseUrl}${locale}${route}`,
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.7,
      });
    }
  }

  return urls;
}
