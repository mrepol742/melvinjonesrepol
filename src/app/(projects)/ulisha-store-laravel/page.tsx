import Project from "@/components/ui/Project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ulisha Store Laravel - Melvin Jones Repol",
  description:
    "A modern and efficient e-commerce solutions tailored for small to medium-sized businesses specifically built with Laravel, enabling seamless setup and cost effective web hosting.",
  keywords: [
    "Ulisha Store Laravel",
    "Online Shopping",
    "E-commerce",
    "Shopping",
    "Retail",
    "E-commerce Platform",
    "E-commerce",
    "E-commerce startup",
    "New e-commerce platform for startups",
    "Laravel e-commerce solution",
    "Hybrid e-commerce platform",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/ulisha-store-laravel",
  },
  openGraph: {
    title: "Ulisha Store Laravel - Melvin Jones Repol",
    description:
      "A modern and efficient e-commerce solutions tailored for small to medium-sized businesses specifically built with Laravel, enabling seamless setup and cost effective web hosting.",
    url: "https://www.melvinjonesrepol.com/ulisha-store-laravel",
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
    title: "Ulisha Store Laravel - Melvin Jones Repol",
    description:
      "A modern and efficient e-commerce solutions tailored for small to medium-sized businesses specifically built with Laravel, enabling seamless setup and cost effective web hosting.",
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
      "Built with Laravel.js and Tailwind CSS for a sleek, responsive interface. Enjoy lightning-fast page loads, optimized images, and efficient server-side rendering for better SEO.",
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
    "A modern and efficient e-commerce solutions tailored for small to medium-sized businesses specifically built with Laravel, enabling seamless setup and cost effective web hosting.",
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
          title: "Ulisha Store Laravel",
          description:
            "Modern and efficient e-commerce solution tailored for startups, enabling seamless setup and free hosting on Vercel and Supabase Cloud.",
          description_long:
            "Ulisha Store Laravel is a modern and efficient e-commerce solution tailored for small to medium-sized businesses. Built with Laravel, it offers a seamless setup process and cost-effective web hosting options. The platform provides essential features such as product management, shopping cart functionality, user accounts, and an intuitive admin dashboard. With a focus on performance and user experience, Ulisha Store Laravel is the ideal choice for startups looking to establish a strong online presence without the hassle of complex configurations.",
          is_open_source: false,
          is_freeware: false,
          license: "Polyform Noncommercial License 1.0.0",
          preview_image: "/images/ulisha-store-1.png",
          preview_image_alt: "Ulisha Store Screenshot",
          features,
          resources: [
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
