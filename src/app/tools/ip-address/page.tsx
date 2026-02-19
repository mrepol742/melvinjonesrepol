import IPAddressTool from "@/components/tools/IPAddress";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your IP Address - Melvin Jones Repol",
  description:
    "Check your IP address and related information with our IP Address tool. Get insights into your network details and other privacy-related information.",
  keywords: [
    "IP Address",
    "Check IP Address",
    "IP Information",
    "Network Details",
    "Privacy Information",
    "IP Lookup",
    "IP Geolocation",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/tools/ip-address",
  },
  openGraph: {
    title: "Your IP Address - Melvin Jones Repol",
    description:
      "Check your IP address and related information with our IP Address tool. Get insights into your network details and other privacy-related information.",
    url: "https://www.melvinjonesrepol.com/tools/ip-address",
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
    title: "Your IP Address - Melvin Jones Repol",
    description:
      "Check your IP address and related information with our IP Address tool. Get insights into your network details and other privacy-related information.",
    images: ["https://www.melvinjonesrepol.com/images/melvinjonesrepol.png"],
    creator: "@mrepol742",
  },
};

export default function IPAddress() {
  return <IPAddressTool />;
}
