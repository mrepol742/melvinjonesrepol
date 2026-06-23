"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useConsent } from "@/context/consent";

const NEXT_PUBLIC_GOOGLE_ADS_PUBLISHER_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_PUBLISHER_ID || "";

export default function AdBanner() {
  const pathname = usePathname();
  const { consent } = useConsent();

  useEffect(() => {
    if (!consent?.advertising) return;
    if (!window.gtag) return;
  }, [pathname, consent?.advertising]);

  if (!consent?.advertising) return null;

  return (
    <>
      <Script
        crossOrigin="anonymous"
        strategy="afterInteractive"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${NEXT_PUBLIC_GOOGLE_ADS_PUBLISHER_ID}`}
      />
    </>
  );
}
