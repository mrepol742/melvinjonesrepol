import QRCodeGeneratorTool from "@/components/tools/QRCodeGenerator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QR Code Generator - Melvin Jones Repol",
  description:
    "Generate QR codes for URLs, text, and more with our easy-to-use QR Code Generator tool. Create custom QR codes for your business, events, or personal use in seconds.",
  keywords: [
    "QR Code Generator",
    "Generate QR Codes",
    "QR Code Creator",
    "QR Code Maker",
    "Free QR Code Generator",
    "Online QR Code Generator",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/tools/qrcode-generator",
  },
  openGraph: {
    title: "QR Code Generator - Melvin Jones Repol",
    description:
      "Generate QR codes for URLs, text, and more with our easy-to-use QR Code Generator tool. Create custom QR codes for your business, events, or personal use in seconds.",
    url: "https://www.melvinjonesrepol.com/tools/qrcode-generator",
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
    title: "QR Code Generator - Melvin Jones Repol",
    description:
      "Generate QR codes for URLs, text, and more with our easy-to-use QR Code Generator tool. Create custom QR codes for your business, events, or personal use in seconds.",
    images: ["https://www.melvinjonesrepol.com/images/melvinjonesrepol.png"],
    creator: "@mrepol742",
  },
};

export default function QRCodeGenerator() {
  return <QRCodeGeneratorTool />;
}
