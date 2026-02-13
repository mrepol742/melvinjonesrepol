import HorizontalAdDisplayUnit from "@/components/ads/HorizontalAdDisplay";
import DisqusComments from "@/components/DisqusComments";
import Project from "@/components/Project";
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
  {
    title: "Integrated File Sharing",
    description:
      "Easily share sales reports, inventory lists or customer data with team members or accountants through built-in file sharing features, streamlining collaboration and record-keeping.",
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

      <Project
        project={{
          title: "Point of Sale",
          description:
            "A lightweight, web-based and offline-capable POS system built for flawless performance, supporting multi-department roles and full functionality.",
          description_long:
            "Point of Sale is a lightweight, web-based and offline-capable POS system built for flawless performance. It supports multi-department roles and full functionality, allowing businesses to manage sales, inventory, and customer interactions efficiently. With a sleek design, intuitive user interface, and powerful features, Point of Sale empowers businesses to streamline their operations and enhance the customer experience.",
          view_source_url: "https://github.com/mrepol742/project-pos",
          is_open_source: true,
          is_freeware: false,
          license: "Polyform Noncommercial License 1.0.0",
          preview_image: "/images/pos-1.png",
          preview_image_alt: "Point of Sale Screenshot",
          features,
          resources: [
            {
              title: "View Source Code on Github",
              url: "https://github.com/mrepol742/project-pos",
            },
          ],
        }}
      />
    </>
  );
}
