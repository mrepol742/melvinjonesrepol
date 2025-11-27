"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function HorizontalAdDisplayUnit() {
  const adRef = useRef<null>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    try {
      // @ts-expect-error: ignoring 'dataset' on type 'never'
      if (adRef.current && !adRef.current.dataset.adLoaded) {
        // @ts-expect-error: ignoring 'adsbygoogle' on type 'never'
        window.adsbygoogle = window.adsbygoogle || [];
        // @ts-expect-error: ignoring 'adsbygoogle' does not exist on type 'Window & typeof globalThis'
        window.adsbygoogle.push({});
        // @ts-expect-error: ignoring 'dataset' on type 'never'
        adRef.current.dataset.adLoaded = "true";
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <>
      <Script
        id="adsense-script"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5077097159223655"
        crossOrigin="anonymous"
      />

      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5077097159223655"
        data-ad-slot="3480503053"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </>
  );
}
