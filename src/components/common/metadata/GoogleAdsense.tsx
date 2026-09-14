const NEXT_PUBLIC_GOOGLE_ADS_PUBLISHER_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_PUBLISHER_ID || "";

export default function GoogleAdsense() {
  if (!NEXT_PUBLIC_GOOGLE_ADS_PUBLISHER_ID) return null;

  return (
    <>
      <meta
        name="google-adsense-account"
        content={NEXT_PUBLIC_GOOGLE_ADS_PUBLISHER_ID}
      />
    </>
  );
}
