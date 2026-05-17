import { setRequestLocale } from "next-intl/server";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string | undefined }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale || "en");
  return children;
}
