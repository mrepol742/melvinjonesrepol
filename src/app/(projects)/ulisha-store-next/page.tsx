import DisqusComments from "@/components/DisqusComments";
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

      <main className="p-3 md:p-8">
        <section>
          <div className="block md:flex items-center mb-4">
            <Image
              src="/images/ulisha-store-icon.png"
              alt="Ulisha Store Icon"
              width={70}
              height={70}
              className="rounded-full mr-7 mb-4 md:mb-0"
            />
            <div className="block md:flex flex-row w-full justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold">Ulisha Store Next</h1>
                <p className="mb-4">
                  A modern and efficient e-commerce solution tailored for
                  startups, enabling seamless setup and free hosting on Vercel
                  and Supabase Cloud.
                </p>
              </div>
              <Link
                href="https://www.ulishastore.com"
                className="bg-blue-500 text-white py-2 px-5 rounded hover:bg-blue-700 transition"
              >
                View
              </Link>
            </div>
          </div>

          <div className="w-full mb-8">
            <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent py-2">
              {Images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                  width={400}
                  height={120}
                  sizes="(max-width: 640px) 90vw, 400px"
                  className="object-cover rounded-lg flex-shrink-0 border border-gray-700 hover:scale-99 transition-transform duration-200"
                />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl">Features</h3>
            <div className="grid gap-4 mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-black/10 backdrop-blur rounded-xl p-6 shadow hover:shadow-lg transition"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl">Comments</h3>
            <p className="mb-4">
              Share your thoughts or ask questions about this project.
            </p>
            <div className="bg-black p-4 rounded-xl mb-6">
              <DisqusComments slug="webvium-browser" title="Webvium Browser" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
