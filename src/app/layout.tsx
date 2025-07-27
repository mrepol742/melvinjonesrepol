import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Melvin Jones",
  description: "Melvin Jones Repol - Freelance Software Engineer",
  openGraph: {
    title: "Melvin Jones",
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
    title: "Melvin Jones",
    description: "Melvin Jones Repol - Freelance Software Engineer",
    images: ["/images/melvinjonesrepol.png"],
    creator: "@melvinjonesrepol",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
