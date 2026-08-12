import OpenGraphTool from "@/app/[locale]/tools/components/OpenGraph";
import { getAlternates } from "@/components/common/metadata/Alternatives";
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
    <main>
      <section className="relative min-h-screen overflow-hidden border-b border-zinc-800">
        <div className="relative flex min-h-screen flex-col px-6 py-12 md:px-10">
          <div className="my-auto py-14">
            <h1 className="text-[14vw] sm:text-[10vw] lg:text-[7.5vw] font-black tracking-tighter leading-[0.85] mb-8">
              Open
              <br />
              <span className="opacity-40">graph</span>
              <br />
              checker.
            </h1>

            <p
              className="max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t("description")}
            </p>
          </div>

          <div
            className="border-t border-zinc-800 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div>
              <p className="text-4xl font-black">OG + X</p>
              <p className="mt-1 text-sm text-zinc-400">Preview metadata</p>
            </div>
            <div>
              <p className="text-4xl font-black">URL</p>
              <p className="mt-1 text-sm text-zinc-400">Single page check</p>
            </div>
            <div className="col-span-2 flex flex-wrap items-center gap-2">
              {["Open Graph", "Twitter Cards", "Metadata", "Preview Audit"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-400 px-3 py-1 text-xs text-zinc-400"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <OpenGraphTool />
      </section>
    </main>
  );
}
