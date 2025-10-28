import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DisqusComments from "@/components/DisqusComments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
  title: "Axleshift Core 1 - Melvin Jones Repol",
  description:
    "A freight management services. Providing Businesses with cutting-edge platform, security, and reliability.",
  keywords: [
    "Axleshift Core 1",
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
    canonical: "https://www.melvinjonesrepol.com/projects/axleshift-core-1",
  },
  openGraph: {
    title: "Axleshift Core 1 - Melvin Jones Repol",
    description:
      "A freight management services. Providing Businesses with cutting-edge platform, security, and reliability.",
    url: "https://www.melvinjonesrepol.com/projects/axleshift-core-1",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/axleshift-1.png",
        width: 800,
        height: 600,
        alt: "Axleshift Core 1 Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axleshift Core 1 - Melvin Jones Repol",
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

      <main className="p-3 md:p-8">
        <section>
          <Link
            className="flex items-center mb-4 hover:text-violet-500 transition-colors duration-200"
            href="/projects"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
            <h3 className="text-2xl font-semibold">Projects</h3>
          </Link>
          <div className="block md:flex items-center mb-4">
            <Image
              src="/images/axleshift-transparent-icon.png"
              alt="Axleshift Icon"
              width={70}
              height={70}
              className="bg-blue-500 rounded-full mr-7 p-4 mb-4 md:mb-0"
            />
            <div className="block md:flex flex-row w-full justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold">Axleshift Core 1</h1>
                <p className="mb-4">
                  A freight management services. Providing Businesses with
                  cutting-edge platform, security, and reliability.
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
                href="https://github.com/mrepol742/axleshift-core1"
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
              <DisqusComments
                slug="axleshift-core-1"
                title="Axleshift Core 1"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
