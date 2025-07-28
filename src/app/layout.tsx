import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import NextTopLoader from "nextjs-toploader";
import AOSWrapper from "../components/AOSWrapper";
import "./globals.css";

const interSans = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Melvin Jones Gallano Repol - Software Engineer",
  description: "Melvin Jones Repol - Freelance Software Engineer",
  keywords: [
    "Melvin Jones Gallano Repol - Software Engineer",
    "Repol",
    "Freelance Software Engineer",
    "Full-Stack Web Development",
    "SEO",
    "Data Analytics",
    "Embedded Systems",
    "Arduino Programming",
    "Hardware Troubleshooting",
    "Software Troubleshooting",
    "Progressive Web Applications",
  ],
  authors: [
    { name: "Melvin Jones Repol", url: "https://melvinjonesrepol.com" },
  ],
  creator: "Melvin Jones Repol",
  openGraph: {
    title: "Melvin Jones Gallano Repol - Software Engineer",
    description: "Melvin Jones Repol - Freelance Software Engineer",
    url: "https://melvinjonesrepol.com",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "/images/melvinjonesrepol.png",
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
    title: "Melvin Jones Gallano Repol - Software Engineer",
    description: "Melvin Jones Repol - Freelance Software Engineer",
    images: ["/images/melvinjonesrepol.png"],
    creator: "@mrepol742",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/favicon.png",
        sizes: "16x16",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.className} antialiased min-h-screen flex flex-col`}
      >
        <div className="background-gloss">
          <div className="gloss-circle circle1"></div>
          <div className="gloss-circle circle2"></div>
          <div className="gloss-circle circle3"></div>
        </div>
        <Nav />
        <NextTopLoader showSpinner={false} />
        <div className="flex-1">
          <AOSWrapper />
          <div className="container mx-auto px-1">{children}</div>
        </div>
        <ToastContainer />
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-5725N9VYZ4" />
      <script
        src="https://app.livechatai.com/embed.js"
        data-id="cmdmcvh4n0001jt0c03xemlxw"
        async
        defer
      ></script>
    </html>
  );
}
