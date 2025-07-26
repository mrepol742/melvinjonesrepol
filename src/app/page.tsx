import Hero from "../components/Hero";
import Projects from "../components/Project";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Metadata } from "next";

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
        alt: "Melvin Jones Repol"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Melvin Jones",
    description: "Melvin Jones Repol - Freelance Software Engineer",
    images: ["/images/melvinjonesrepol.png"],
    creator: "@melvinjonesrepol"
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32"
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16"
      }
    ]
  },
  themeColor: "#ffffff",
};

export default function Home() {
  return (
    <main className="p-8">
      <Nav />
      <Hero/>
      <Projects />
      <Team />
      <Footer />
    </main>
  );
}
