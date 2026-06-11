"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useConsent } from "@/context/consent";

const NEXT_PUBLIC_GOOGLE_ANALYTICS_STREAM_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_STREAM_ID || "";

export default function GoogleAnalytics() {
  const { consent } = useConsent();

  useEffect(() => {
    if (!consent?.analytics) return;

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

  if (!consent?.analytics) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_ANALYTICS_STREAM_ID}`}
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        onReady={() => {
          window.dataLayer = window.dataLayer || [];

          window.gtag = function (...args) {
            window.dataLayer.push(args);
          };

          window.gtag("js", new Date());
          window.gtag("config", NEXT_PUBLIC_GOOGLE_ANALYTICS_STREAM_ID, {
            page_path: window.location.pathname,
          });
        }}
      >
        {""}
      </Script>
    </>
  );
}
