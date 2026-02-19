import OpenGraphTool from "@/components/tools/OpenGraph";
import { Metadata } from "next";

export const metadata: Metadata = {
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
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/tools/open-graph",
  },
  openGraph: {
    title: "Open Graph Checker - Melvin Jones Repol",
    description:
      "Check and validate your Open Graph tags with our Open Graph Checker tool. Ensure your website's social media sharing is optimized with accurate metadata.",
    url: "https://www.melvinjonesrepol.com/tools/open-graph",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.png",
        width: 800,
        height: 600,
        alt: "Melvin Jones Repol Cover",
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
    images: ["https://www.melvinjonesrepol.com/images/melvinjonesrepol.png"],
    creator: "@mrepol742",
  },
};

export default function OpenGraph() {
  return <OpenGraphTool />;
}
