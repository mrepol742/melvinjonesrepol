import { Metadata } from "next";
import Project from "@/components/Project";

export const metadata: Metadata = {
  title: "Floating Console Extension - Melvin Jones Repol",
  description:
    "A Browser extension that provides a floating console for developers to easily access logs while browsing the web.",
  keywords: ["Floating Console Extension"],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/floating-console-extension",
  },
  openGraph: {
    title: "Floating Console Extension - Melvin Jones Repol",
    description:
      "A Browser extension that provides a floating console for developers to easily access logs while browsing the web.",
    url: "https://www.melvinjonesrepol.com/floating-console-extension",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/floating-console-extension.png",
        width: 800,
        height: 600,
        alt: "Floating Console Extension Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Floating Console Extension - Melvin Jones Repol",
    description:
      "A Browser extension that provides a floating console for developers to easily access logs while browsing the web.",
    images: [
      "https://www.melvinjonesrepol.com/images/floating-console-extension.png",
    ],
    creator: "@mrepol742",
  },
};

const features = [
  {
    title: "Floating Console",
    description:
      "Provides a floating console that can be accessed from any web page, allowing developers to view logs and debug their applications without having to open the browser's developer tools.",
  },
  {
    title: "Lightweight and Non-Intrusive",
    description:
      "Designed to be lightweight and non-intrusive, ensuring that it does not interfere with the user's browsing experience while still providing essential debugging capabilities.",
  },
  {
    title: "Notification Badge",
    description:
      "Displays a notification badge on the extension icon when there are new logs, allowing developers to stay informed about their application's status without having to constantly check the console.",
  },
];

export default async function FloatingConsoleExtension() {
  return (
    <>
      <Project
        project={{
          title: "Floating Console Extension",
          description:
            "A Browser extension that provides a floating console for developers to easily access logs while browsing the web.",
          description_long:
            "Floating Console Extension is a browser extension that provides a floating console for developers to easily access logs while browsing the web. It is built with web fundamentals html, css, js, and it uses the Chrome Extension API to inject the console into the web page. The console is designed to be lightweight and non-intrusive, allowing developers to debug their applications without having to open the browser's developer tools.",
          download_url:
            "https://github.com/mrepol742/floating-console-extension/releases",
          view_source_url:
            "https://github.com/mrepol742/floating-console-extension",
          is_open_source: true,
          is_freeware: false,
          license: "MIT License",
          preview_image: "/images/floating-console-extension.png",
          preview_image_alt: "Floating Console Extension Screenshot",
          features,
          resources: [
            {
              title: "View Source Code on Github",
              url: "https://github.com/mrepol742/floating-console-extension",
            },
            {
              title: "Download Latest Release",
              url: "https://github.com/mrepol742/floating-console-extension/releases",
            },
            {
              title: "Privacy Policy",
              url: "/legal/privacy-policy",
            },
            {
              title: "Terms of Service",
              url: "/legal/terms-of-service",
            },
          ],
        }}
      />
    </>
  );
}
