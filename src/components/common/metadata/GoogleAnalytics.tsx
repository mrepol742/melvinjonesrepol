"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useConsent } from "@/context/consent";

const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_STREAM_ID ?? "";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const { consent } = useConsent();

  useEffect(() => {
    if (!consent?.analytics) return;
    if (!window.gtag) return;

    window.gtag("config", GA_ID, {
      page_path: pathname,
    });
  }, [pathname, consent?.analytics]);

  if (!consent?.analytics) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `,
        }}
      />
    </>
  );
}
