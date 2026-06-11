"use client";

import { useEffect, useRef } from "react";
import { useConsent } from "@/context/consent";

export default function HorizontalAdDisplayUnit() {
  const { consent } = useConsent();
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    if (!consent?.advertising) return;
    if (!adRef.current) return;

    const alreadyLoaded = adRef.current.getAttribute("data-ad-loaded");

    if (alreadyLoaded) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});

      adRef.current.setAttribute("data-ad-loaded", "true");
    } catch (error) {
      console.error("AdSense init failed:", error);
    }
  }, [consent?.advertising]);

  if (!consent?.advertising) {
    return null;
  }

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-5077097159223655"
      data-ad-slot="3480503053"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
