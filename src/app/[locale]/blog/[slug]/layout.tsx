import AdBanner from "@/components/common/AdBanner";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const env = process.env.NEXT_PUBLIC_NODE_ENV || "production";
  const isProduction = env === "production";

  return (
    <>
      {isProduction && <AdBanner />}
      {children}
    </>
  );
}
