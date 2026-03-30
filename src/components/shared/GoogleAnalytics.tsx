"use client";

import { useEffect } from "react";
import Script from "next/script";

const NEXT_PUBLIC_GOOGLE_ANALYTICS_STREAM_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_STREAM_ID || "";

export default function GoogleAnalytics() {
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      window.gtag?.("config", NEXT_PUBLIC_GOOGLE_ANALYTICS_STREAM_ID, {
        page_path: window.location.pathname,
      });
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_ANALYTICS_STREAM_ID}`}
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${NEXT_PUBLIC_GOOGLE_ANALYTICS_STREAM_ID}', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  );
}
