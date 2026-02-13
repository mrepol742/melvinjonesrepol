import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DisqusComments from "@/components/DisqusComments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import HorizontalAdDisplayUnit from "@/components/ads/HorizontalAdDisplay";
import Project from "@/components/Project";

export const metadata: Metadata = {
  title: "Axleshift Freight Management - Melvin Jones Repol",
  description:
    "A freight management services. Providing Businesses with cutting-edge platform, security, and reliability.",
  keywords: [
    "Axleshift Freight Management",
    "Freight Management",
    "Logistics",
    "Business Solutions",
    "Supply Chain",
    "Transportation",
    "Cargo Services",
    "Fleet Management",
    "Logistics Software",
    "Business Platform",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/axleshift-freight-management",
  },
  openGraph: {
    title: "Axleshift Freight Management - Melvin Jones Repol",
    description:
      "A freight management services. Providing Businesses with cutting-edge platform, security, and reliability.",
    url: "https://www.melvinjonesrepol.com/axleshift-freight-management",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/axleshift-1.png",
        width: 800,
        height: 600,
        alt: "Axleshift Freight Management Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axleshift Freight Management - Melvin Jones Repol",
    description:
      "A freight management services. Providing Businesses with cutting-edge platform, security, and reliability.",
    images: ["https://www.melvinjonesrepol.com/images/axleshift-1.png"],
    creator: "@mrepol742",
  },
};

const Images = [
  "/images/axleshift-1.png",
  "/images/axleshift-2.png",
  "/images/axleshift-3.png",
  "/images/axleshift-4.png",
  "/images/axleshift-5.png",
  "/images/axleshift-6.png",
  "/images/axleshift-7.png",
];

const features = [
  {
    title: "End-to-End Freight Workflow",
    description:
      "Manage every stage of the logistics lifecycle — from shipment booking, pickup scheduling, carrier assignment, tracking and delivery confirmation — all within one unified platform.",
  },
  {
    title: "Zero-Trust Architecture & Compliance",
    description:
      "Built with a zero-trust security model by default. Access controls, encryption-at-rest and in-transit, and full compliance with GDPR and CCPA-style regulations ensure secure handling of sensitive shipping data.",
  },
  {
    title: "Carrier & Route Optimization",
    description:
      "Select optimal carriers, compare quotes dynamically, and plan the most efficient routes using real-time data to reduce cost and transit time for shipments.",
  },
  {
    title: "Multi-Channel Visibility & Tracking",
    description:
      "Give stakeholders (shippers, carriers, recipients) access to live shipment status, location updates, ETAs, and exception alerts — improving transparency and reducing inquiries.",
  },
  {
    title: "Data Integration & API-First Design",
    description:
      "Expose REST/GraphQL APIs for integration with external ERPs, WMS, e-commerce platforms or carrier systems. Make your logistics engine part of a broader enterprise ecosystem.",
  },
  {
    title: "Rich Analytics & Reporting Suite",
    description:
      "Provide dashboards and reports on KPIs such as transit time, cost per shipment, carrier performance, load factor and carbon emissions — enabling data-driven decisions.",
  },
  {
    title: "Backup, Audit Logs & Compliance-Ready Exports",
    description:
      "Maintain full control over your data — export shipment, carrier and inventory records; keep immutable audit trails for changes/actions; support internal or regulatory audits.",
  },
  {
    title: "Scalable Cloud-Native Deployment",
    description:
      "Designed for deployment via containers (Docker/Kubernetes) or serverless platforms, enabling you to scale from a single small-site operation to a global logistics platform.",
  },
];

const SoftwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Axleshift",
  operatingSystem: "Web",
  applicationCategory: "BusinessApplication",
  description:
    "A freight management services. Providing Businesses with cutting-edge platform, security, and reliability.",
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

export default async function Axleshift() {
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
          title: "Axleshift",
          description:
            "A freight management services. Providing Businesses with cutting-edge platform, security, and reliability.",
          description_long:
            "Axleshift is a comprehensive freight management solution designed to streamline logistics operations for businesses of all sizes. With a focus on cutting-edge technology, security, and reliability, Axleshift offers an end-to-end platform that covers every aspect of the freight lifecycle. From shipment booking and carrier assignment to real-time tracking and analytics, Axleshift empowers businesses to optimize their supply chain, reduce costs, and improve customer satisfaction. Built with a zero-trust architecture and compliance-ready features, Axleshift ensures that sensitive shipping data is handled securely while providing the tools needed for efficient logistics management.",
          view_source_url:
            "https://github.com/mrepol742/axleshift-freight-management",
          is_open_source: true,
          is_freeware: false,
          license: "Polyform Noncommercial License 1.0.0",
          preview_image: "/images/axleshift-1.png",
          preview_image_alt: "Axleshift Screenshot",
          features,
          resources: [
            {
              title: "View Source Code on Github",
              url: "https://github.com/mrepol742/axleshift-freight-management",
            },
          ],
        }}
      />
    </>
  );
}
