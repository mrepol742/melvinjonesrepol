import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const ContentSecurityPolicy = `
  default-src 'self';

  base-uri 'self';
  object-src 'none';

  script-src
    'self'
    'unsafe-inline'
    'unsafe-eval'
    https://www.googletagmanager.com
    https://www.google-analytics.com
    https://*.trustpilot.com
    https://cdn.trustpilot.net
    https://www.youtube.com
    https://www.google.com
    https://www.gstatic.com
    https://*.ytimg.com
    https://app.aiskillhub.dev;

  style-src
    'self'
    'unsafe-inline'
    https://fonts.googleapis.com;

  img-src
    'self'
    data:
    blob:
    https:
    https://www.google-analytics.com
    https://*.steamstatic.com
    https://cdn.cloudflare.steamstatic.com
    https://*.ytimg.com
    https://i.imgur.com;

  font-src
    'self'
    data:
    https://fonts.gstatic.com;

  connect-src
    'self'
    https://analytics.google.com
    https://www.google.com
    https://www.google.com.ph
    https://www.google-analytics.com
    https://region1.google-analytics.com
    https://*.trustpilot.com
    https://cdn.cloudflare.steamstatic.com
    https://*.steamstatic.com
    https://www.youtube.com
    https://stats.uptimerobot.com
    https://*.ytimg.com
    https://blog.melvinjonesrepol.com;

  frame-src
    'self'
    https://www.google.com
    https://www.google.com.ph
    https://www.youtube.com
    https://www.youtube-nocookie.com
    https://recaptcha.google.com
    https://stats.uptimerobot.com
    https://*.trustpilot.com
    https://app.aiskillhub.dev;

  worker-src 'self' blob:;
`.replace(/\n/g, "");

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],

    unoptimized: true,
  },
  rewrites: async () => [
    {
      source: "/sitemap-blog-:page.xml",
      destination: "/sitemap-blog/:page",
    },
    {
      source: "/sitemap-:locale.xml",
      destination: "/sitemaps/:locale",
    },
  ],
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "Content-Security-Policy",
          value: ContentSecurityPolicy,
        },
        {
          key: "Cross-Origin-Opener-Policy",
          value: "same-origin",
        },
        // disabled causing issues on iframed content youtube embed, trustpilot etc...
        // {
        //   key: "Cross-Origin-Embedder-Policy",
        //   value: "credentialless",
        // },
        {
          key: "Cross-Origin-Resource-Policy",
          value: "same-site",
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
        },
        {
          key: "Strict-Transport-Security",
          value: "max-age=31536000; includeSubDomains; preload",
        },
      ],
    },
  ],
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
