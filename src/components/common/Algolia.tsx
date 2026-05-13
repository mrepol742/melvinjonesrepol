const NEXT_PUBLIC_ALGOLIA_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_ALGOLIA_SITE_VERIFICATION || "";

export default function Algolia() {
  return (
    <>
      <meta
        name="algolia-site-verification"
        content={NEXT_PUBLIC_ALGOLIA_SITE_VERIFICATION}
      />
    </>
  );
}
