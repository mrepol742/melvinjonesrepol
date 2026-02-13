import HorizontalAdDisplayUnit from "@/components/ads/HorizontalAdDisplay";
import DisqusComments from "@/components/DisqusComments";
import Project from "@/components/Project";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ulisha Store Next - Melvin Jones Repol",
  description:
    "A modern and efficient e-commerce solution tailored for startups, enabling seamless setup and free hosting on Vercel and Supabase Cloud.",
  keywords: [
    "Ulisha Store Next",
    "Online Shopping",
    "E-commerce",
    "Shopping",
    "Retail",
    "E-commerce Platform",
    "E-commerce",
    "E-commerce startup",
    "New e-commerce platform for startups",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/ulisha-store-next",
  },
  openGraph: {
    title: "Ulisha Store Next - Melvin Jones Repol",
    description:
      "A modern and efficient e-commerce solution tailored for startups, enabling seamless setup and free hosting on Vercel and Supabase Cloud.",
    url: "https://www.melvinjonesrepol.com/ulisha-store-next",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/ulisha-store-1.png",
        width: 800,
        height: 600,
        alt: "Ulisha Store Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ulisha Store Next - Melvin Jones Repol",
    description:
      "A modern and efficient e-commerce solution tailored for startups, enabling seamless setup and free hosting on Vercel and Supabase Cloud.",
    images: ["https://www.melvinjonesrepol.com/images/ulisha-store-1.png"],
    creator: "@mrepol742",
  },
};

const Images = [
  "/images/ulisha-store-1.png",
  "/images/ulisha-store-2.png",
  "/images/ulisha-store-3.png",
  "/images/ulisha-store-4.png",
];

const features = [
  {
    title: "Free Cloud Deployment",
    description:
      "Bonus: Deploy your store instantly and for free using Vercel and Supabase Cloud. Enjoy seamless hosting, automatic scaling, and a fully managed backend out of the box.",
  },
  {
    title: "Product Management",
    description:
      "Easily add, edit, and organize products in your store. Manage product details such as images, descriptions, pricing, categories, and inventory from one intuitive dashboard.",
  },
  {
    title: "Shopping Cart & Checkout",
    description:
      "Offer your customers a seamless shopping experience with a real-time cart and secure checkout flow. Supports guest checkout, promo codes, and multiple payment gateways.",
  },
  {
    title: "User Accounts",
    description:
      "Allow customers to create personal accounts to view order history, manage saved addresses, and track current orders. Supports login via email or third-party authentication.",
  },
  {
    title: "Admin Dashboard",
    description:
      "Control every aspect of your store from an easy-to-use admin interface. Track orders, manage inventory, update pricing, and monitor sales analytics all in one place.",
  },
  {
    title: "Modern UI & Performance",
    description:
      "Built with Next.js and Tailwind CSS for a sleek, responsive interface. Enjoy lightning-fast page loads, optimized images, and efficient server-side rendering for better SEO.",
  },
  {
    title: "Search & Filtering",
    description:
      "Help users find products faster with advanced search and dynamic filters. Sort by price, popularity, or category for a smoother browsing experience.",
  },
  {
    title: "Payment Integration",
    description:
      "Integrate trusted payment gateways such as Stripe or PayPal. Ensure all transactions are encrypted, secure, and reliable for both customers and store owners.",
  },
  {
    title: "Customization & Theming",
    description:
      "Personalize your storefront design with theme customization options. Modify colors, typography, and layout to match your brand’s identity.",
  },
  {
    title: "Multi-Currency & Localization",
    description:
      "Support global audiences with multiple currency and language options. Automatically adjust product prices and formatting based on the user’s region.",
  },
  {
    title: "Analytics & Insights",
    description:
      "Monitor sales performance and customer behavior with built-in analytics. Gain insights into revenue, popular products, and conversion rates to make data-driven decisions.",
  },
  {
    title: "Data Privacy & Security",
    description:
      "Protect customer data with industry-standard encryption and privacy-first design. All sensitive information is handled securely and never shared with third parties.",
  },
  {
    title: "Backup & Data Export",
    description:
      "Export product lists, orders, or customer data at any time. Maintain full control over your store’s data with backup and restore functionality.",
  },
];

const webApplication = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Ulisha Store",
  operatingSystem: "All",
  url: "https://www.ulishastore.com",
  applicationCategory: "BusinessApplication",
  description:
    "A modern and efficient e-commerce solution tailored for startups, enabling seamless setup and free hosting on Vercel and Supabase Cloud.",
  creator: [
    {
      "@type": "Person",
      name: "Elisha Okai",
      url: "https://elishasfolio.vercel.app",
    },
    {
      "@type": "Person",
      name: "Melvin Jones Repol",
      url: "https://www.melvinjonesrepol.com",
    },
  ],
  offers: {
    "@type": "Offer",
    price: "0",
  },
};

export default function UlishaStore() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplication),
        }}
      />

      <Project
        project={{
          title: "Ulisha Store Next",
          description:
            "Modern and efficient e-commerce solution tailored for startups, enabling seamless setup and free hosting on Vercel and Supabase Cloud.",
          description_long:
            "Ulisha Store Next is a modern and efficient e-commerce solution tailored for startups. It offers a seamless setup process and free hosting on Vercel and Supabase Cloud, allowing entrepreneurs to quickly launch their online stores without worrying about infrastructure. With a sleek design, intuitive user interface, and powerful features, Ulisha Store Next empowers businesses to create a compelling online shopping experience for their customers.",
          view_source_url:
            "https://github.com/ulisha-limited/ulisha-store-next",
          is_open_source: true,
          is_freeware: false,
          license: "Polyform Noncommercial License 1.0.0",
          preview_image: "/images/ulisha-store-1.png",
          preview_image_alt: "Ulisha Store Screenshot",
          features,
          resources: [
            {
              title: "View Source Code on Github",
              url: "https://github.com/ulisha-limited/ulisha-store-next",
            },
            {
              title: "Visit Live Store",
              url: "https://www.ulishastore.com",
            },
            {
              title: "Follow us on Github",
              url: "https://github.com/ulisha-limited",
            },
          ],
        }}
      />
    </>
  );
}
