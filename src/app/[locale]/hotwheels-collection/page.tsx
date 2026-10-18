import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getAlternates } from "@/components/common/metadata/Alternatives";
import Showroom from "./components/Showroom";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Hot Wheels Collection - Melvin Jones Repol",
    description:
      "My Hot Wheels collection: golden, grey, and mainline finds, one car at a time.",
    alternates: getAlternates("/hotwheels-collection", locale),
    openGraph: {
      title: "Hot Wheels Collection - Melvin Jones Repol",
      description:
        "My Hot Wheels collection: golden, grey, and mainline finds, one car at a time.",
      url: "https://www.melvinjonesrepol.com/hotwheels-collection",
      siteName: "Melvin Jones Repol",
      type: "website",
    },
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="overflow-hidden">
      <Showroom />
    </main>
  );
}
