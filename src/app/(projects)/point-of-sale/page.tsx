import DisqusComments from "@/components/DisqusComments";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Point of Sale - Melvin Jones Repol",
  description:
    "A lightweight, web-based and offline-capable POS system built for flawless performance, supporting multi-department roles and full functionality.",
  keywords: [
    "Point of Sale",
    "POS System",
    "Web-based POS",
    "Offline-capable POS",
    "Multi-department POS",
    "Retail Management",
    "Sales System",
    "Inventory Management",
    "Business Solutions",
    "Sales Management",
    "Retail Software",
    "POS Software",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/point-of-sale",
  },
  openGraph: {
    title: "Point of Sale - Melvin Jones Repol",
    description:
      "A lightweight, web-based and offline-capable POS system built for flawless performance, supporting multi-department roles and full functionality.",
    url: "https://www.melvinjonesrepol.com/point-of-sale",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/pos-1.png",
        width: 800,
        height: 600,
        alt: "Point of Sale Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Point of Sale - Melvin Jones Repol",
    description:
      "A lightweight, web-based and offline-capable POS system built for flawless performance, supporting multi-department roles and full functionality.",
    images: ["https://www.melvinjonesrepol.com/images/pos-1.png"],
    creator: "@mrepol742",
  },
};

const Images = [
  "/images/pos-1.png",
  "/images/pos-2.png",
  "/images/pos-3.png",
  "/images/pos-4.png",
  "/images/pos-5.png",
];

const features = [
  {
    title: "Product & Inventory Management",
    description:
      "Add, edit and categorize products. Track current stock levels with real-time updates. Configure units of measure, variants and reorder thresholds for seamless inventory control.",
  },
  {
    title: "Transaction Register & Checkout Interface",
    description:
      "Provide cashier-friendly UI for scanning or selecting items, applying discounts or taxes, accepting payments, and generating receipts/invoices for every sale.",
  },
  {
    title: "Customer & Loyalty Management",
    description:
      "Maintain a customer database with purchase history, contact details and loyalty points. Offer registered customers special pricing or rewards programs to boost retention.",
  },
  {
    title: "Employee & Role Management",
    description:
      "Manage user accounts with role-based access (e.g., cashier, manager, admin). Track shifts, permissions and audit logs of user actions across the system.",
  },
  {
    title: "Offline Mode & Sync",
    description:
      "Allow the POS system to continue working even if network connectivity is lost. Queue transactions locally and sync when connectivity is restored to avoid disruptions.",
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Support for major payment providers (cards, mobile wallets, etc.), enabling secure payment capture, refunds and reconciliation. Ensure transactions are encrypted and PCI-compliant.",
  },
  {
    title: "Analytics & Dashboards",
    description:
      "Track sales trends, best-selling items, employee performance and inventory turnover in visually-rich dashboards. Export reports in common formats (CSV, PDF) for further analysis.",
  },
  {
    title: "Localization, Multi-Currency & Tax Configurations",
    description:
      "Support multiple currencies, regional tax rules and languages so the system works across different locales and store legal jurisdictions.",
  },
  {
    title: "Theming & UI Customization",
    description:
      "Customize the look & feel of the POS UI — brand it with your company colours, pick layouts optimized for touch or desktop, and tailor wording to your workflow.",
  },
  {
    title: "Data Export, Backup & Security",
    description:
      "Securely handle all sensitive data, provide automatic backups and support manual export/import of products, customers, transactions and other key data to maintain full control.",
  },
  {
    title: "Audit Trails, Permissions & Compliance",
    description:
      "Log all critical actions (voids, refunds, user login/logout), enforce strong access controls, and maintain a clear audit trail — helping meet compliance and reduce risk.",
  },
];

const SoftwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Point of Sale",
  operatingSystem: "Web",
  applicationCategory: "BusinessApplication",
  description:
    "A lightweight, web-based and offline-capable POS system built for flawless performance, supporting multi-department roles and full functionality.",
  creator: {
    "@type": "Person",
    name: "Melvin Jones Repol",
    url: "https://www.melvinjonesrepol.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
  },
};

export default function PointOfSale() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SoftwareApplication),
        }}
      />

      <main className="p-3 md:p-8">
        <section>
          <div className="block md:flex items-center mb-4">
            <Image
              src="/images/pos.gif"
              alt="Point of Sale Icon"
              width={70}
              height={70}
              className="rounded-full mr-7 mb-4 md:mb-0"
            />
            <div className="block md:flex flex-row w-full justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold">Point of Sale</h1>
                <p className="mb-4">
                  A lightweight, web-based and offline-capable POS system built
                  for flawless performance, supporting multi-department roles
                  and full functionality.
                </p>
              </div>
              <Link
                href="/book-a-demo"
                className="bg-blue-500 text-white py-2 px-5 rounded hover:bg-blue-700 transition"
              >
                Book a Demo
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

          <div className="flex items-center bg-green-900/30 border border-green-700 rounded-lg p-4 mb-6">
            <FontAwesomeIcon icon={faGithub} className="text-green-500 mr-3" />
            <div>
              <span className="font-semibold text-green-500">Open Source:</span>
              &nbsp;This project is open source. View the code on&nbsp;
              <Link
                href="https://github.com/mrepol742/project-pos"
                target="_blank"
                className="text-green-500 hover:text-green-200"
              >
                GitHub
              </Link>
              .
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
              <DisqusComments slug="project-pos" title="Project POS" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
