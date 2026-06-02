import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const ContentSecurityPolicy = `
  default-src 'self';
  base-uri 'self' https://stats.uptimerobot.com;
  object-src 'none';

  script-src
    'self'
    'unsafe-inline'
    'unsafe-eval'
    https://ep2.adtrafficquality.google
    https://fundingchoicesmessages.google.com
    https://www.googletagmanager.com
    https://www.google-analytics.com
    https://pagead2.googlesyndication.com
    https://googleads.g.doubleclick.net
    https://*.trustpilot.com
    https://cdn.trustpilot.net
    https://www.youtube.com
    https://www.google.com
    https://www.gstatic.com
    https://app.livechatai.com
    https://unpkg.com
    https://s.ytimg.com;

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
    https://*.g.doubleclick.net
    https://*.steamstatic.com
    https://cdn.cloudflare.steamstatic.com
    https://i.ytimg.com;

  font-src
    'self'
    data:
    https://fonts.gstatic.com;

  connect-src
    'self'
    https://ep1.adtrafficquality.google
    https://pagead2.googlesyndication.com
    https://analytics.google.com
    https://www.google.com
    https://www.google.com.ph
    https://www.google-analytics.com
    https://region1.google-analytics.com
    https://stats.g.doubleclick.net
    https://*.trustpilot.com
    https://cdn.cloudflare.steamstatic.com
    https://*.steamstatic.com
    https://app.livechatai.com
    https://unpkg.com
    https://cors.io
    https://www.youtube.com;

  frame-src
    'self'
    https://ep2.adtrafficquality.google
    https://www.google.com
    https://www.google.com.ph
    https://td.doubleclick.net
    https://googleads.g.doubleclick.net
    https://www.youtube.com
    https://www.youtube-nocookie.com
    https://recaptcha.google.com
    https://app.livechatai.com
    https://stats.uptimerobot.com
    https://*.trustpilot.com;

  worker-src 'self' blob:;
  child-src 'self' blob:;

  form-action 'self';

  upgrade-insecure-requests;
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

  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "Content-Security-Policy",
          value: ContentSecurityPolicy,
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
