import Script from "next/script";

const NEXT_PUBLIC_GOOGLE_ADS_PUBLISHER_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_PUBLISHER_ID || "";

export default function GoogleAds() {
  return (
    <>
      <meta
        name="google-adsense-account"
        content={NEXT_PUBLIC_GOOGLE_ADS_PUBLISHER_ID}
      />
      <Script
        crossOrigin="anonymous"
        strategy="afterInteractive"
        src={`hthttps://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${NEXT_PUBLIC_GOOGLE_ADS_PUBLISHER_ID}`}
      />
    </>
  );
}
