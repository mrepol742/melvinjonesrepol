"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useConsent } from "@/context/consent";

const NEXT_PUBLIC_GOOGLE_ADS_PUBLISHER_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_PUBLISHER_ID ?? "";

export default function GoogleAds() {
  const { consent } = useConsent();

  useEffect(() => {
    if (!consent?.advertising) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("Adsense initialization failed", err);
    }
  }, [consent?.advertising]);

  if (!consent?.advertising) return null;

  return (
    <Script
      id="adsense-script"
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${NEXT_PUBLIC_GOOGLE_ADS_PUBLISHER_ID}`}
      onLoad={() => {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
          console.error("Adsense initialization failed", err);
        }
      }}
    />
  );
}
