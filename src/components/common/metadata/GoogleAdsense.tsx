"use client";

import { useEffect, useRef } from "react";
import { useConsent } from "@/context/consent";

export default function AdBanner() {
  const { consent } = useConsent();
  const adRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!consent?.advertising) return;

    const ad = adRef.current;
    if (!ad) return;

    // Prevent double initialization
    if (ad.getAttribute("data-adsbygoogle-status")) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, [consent?.advertising]);

  if (!consent?.advertising) return null;

  return (
    <ins
      ref={adRef as React.RefObject<HTMLModElement>}
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-xxxxxxxx"
      data-ad-slot="xxxxxxxx"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
