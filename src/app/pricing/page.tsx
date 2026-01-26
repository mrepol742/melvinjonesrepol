import PricingCard from "@/components/PricingCard";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing - Melvin Jones Repol",
  description:
    "Explore my pricing plans for professional full-stack development services.",
  keywords: [
    "Pricing",
    "Full-Stack Development",
    "Maintenance",
    "Long-Term Engagement",
    "Project-Based Pricing",
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "Consulting",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/pricing",
  },
  openGraph: {
    title: "Pricing - Melvin Jones Repol",
    description:
      "Explore my pricing plans for professional full-stack development services.",
    url: "https://www.melvinjonesrepol.com/pricing",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
        width: 1200,
        height: 630,
        alt: "Projects Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - Melvin Jones Repol",
    description:
      "Explore my pricing plans for professional full-stack development services.",
    images: [
      "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
    ],
    creator: "@mrepol742",
  },
};

export default function PricingPage() {
  return (
    <main className="my-18 p-3 md:p-8">
      <section>
        <h1 className="text-2xl font-semibold">My Pricing</h1>
        <p>
          Transparent pricing for professional full-stack development. Final
          costs depend on project scope, complexity, and timeline.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-6">
          <PricingCard
            title="Per Project"
            price="₱25,000"
            items={[
              "Full-stack development",
              "Testing & optimization",
              "Deployment support",
              "1 week free bug fixes",
            ]}
          />

          <PricingCard
            title="Project + Maintenance"
            price="₱25, 000"
            subtitle="Monthly maintenance starts at ₱1,000 / m"
            items={[
              "Security vulnerability fixes",
              "Performance monitoring",
              "Dependency updates",
              "Bug fixes (original scope)",
              "Backups & system checks",
            ]}
          />

          <PricingCard
            title="Long-Term Engagement"
            price="₱20,000 / m"
            items={[
              "Ongoing development",
              "Feature enhancements",
              "System scaling",
              "Priority support",
              "Startup & product-focused",
            ]}
          />
        </div>

        <Link href="/contact-me" data-aos="fade-right" data-aos-delay="350">
          <button
            className="uppercase text-sm relative bg-orange-400 px-7 py-4 mt-3 font-semibold overflow-hidden shadow-none transition-transform duration-200 hover:translate-x-1 hover:translate-y-1
            before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-full before:h-1 before:bg-orange-600 before:rounded-b-lg
            after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-1 after:h-full after:bg-orange-600 after:rounded-r-lg"
            style={{ boxShadow: "1px 1px 0 0 #ea580c" }}
          >
            Contact Me
          </button>
        </Link>

        <div className="p-10 mt-4">
          <h2 className="text-2xl font-semibold" data-aos="fade-up">
            What You’re Paying For
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-6">
            <li data-aos="fade-up">✔ End-to-end full-stack expertise</li>
            <li data-aos="fade-up">✔ Scalable and secure architecture</li>
            <li data-aos="fade-up">✔ Clean, maintainable codebase</li>
            <li data-aos="fade-up">✔ Performance-optimized applications</li>
            <li data-aos="fade-up">✔ Security best practices</li>
            <li data-aos="fade-up">
              ✔ Clear communication & realistic timelines
            </li>
            <li data-aos="fade-up">✔ Long-term technical reliability</li>
            <li data-aos="fade-up">✔ A developer who thinks beyond delivery</li>
          </ul>
        </div>

        <div className="mt-14 text-sm text-gray-600">
          <p className="mb-2" data-aos="fade-up">
            • A <strong>20% non-refundable down payment</strong> is required
            before work begins.
          </p>
          <p className="mb-2" data-aos="fade-up">
            • Any changes outside the agreed scope are billed separately.
          </p>
          <p data-aos="fade-up">
            • 1 week of free maintenance covers existing bugs and defects only.
          </p>
        </div>
      </section>
    </main>
  );
}
