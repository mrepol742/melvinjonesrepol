import OpenGraphTool from "@/app/[locale]/tools/components/OpenGraph";
import { getAlternates } from "@/components/common/metadata/Alternatives";
import Header from "@/components/ui/Header";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Open Graph Checker - Melvin Jones Repol",
    description:
      "Check and validate your Open Graph tags with our Open Graph Checker tool. Ensure your website's social media sharing is optimized with accurate metadata.",
    keywords: [
      "Open Graph Checker",
      "Open Graph Validator",
      "OG Tag Checker",
      "Social Media Metadata Checker",
      "Website Metadata Validator",
      "OG Tag Validator",
      "Open Graph Debugger",
      "Social Sharing Metadata Checker",
      "OG Tag Testing Tool",
      "Open Graph Analysis Tool",
    ],
    alternates: getAlternates("/tools/open-graph", locale),
    openGraph: {
      title: "Open Graph Checker - Melvin Jones Repol",
      description:
        "Check and validate your Open Graph tags with our Open Graph Checker tool. Ensure your website's social media sharing is optimized with accurate metadata.",
      url: "https://www.melvinjonesrepol.com/tools/open-graph",
      siteName: "Melvin Jones Repol",
      images: [
        {
          url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
          width: 800,
          height: 600,
          alt: "Melvin Jones Repol",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Open Graph Checker - Melvin Jones Repol",
      description:
        "Check and validate your Open Graph tags with our Open Graph Checker tool. Ensure your website's social media sharing is optimized with accurate metadata.",
      images: [
        "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
      ],
      creator: "@mrepol742",
    },
  };
}

export default async function OpenGraph() {
  const t = await getTranslations("tools_open_graph");

  return (
    <>
      <Header
        title={
          <>
            Open
            <br />
            <span className="opacity-40">graph</span>
            <br />
            checker.
          </>
        }
        intro={t("description")}
      />

      <section className="px-6 py-24 md:px-10">
        <OpenGraphTool />
      </section>
    </>
  );
}
