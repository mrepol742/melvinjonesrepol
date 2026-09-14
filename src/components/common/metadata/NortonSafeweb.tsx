const NEXT_PUBLIC_NORTON_SAFEWEB_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_NORTON_SAFEWEB_SITE_VERIFICATION || "";

export default function NortonSafeweb() {
  if (!NEXT_PUBLIC_NORTON_SAFEWEB_SITE_VERIFICATION) return null;

  return (
    <meta
      name="norton-safeweb-site-verification"
      content={NEXT_PUBLIC_NORTON_SAFEWEB_SITE_VERIFICATION}
    />
  );
}
