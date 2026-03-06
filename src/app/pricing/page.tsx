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
        <h1
          className="text-2xl font-semibold"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          My Pricing for Full-Stack Development Services
        </h1>

        <p className="mt-2" data-aos="fade-up" data-aos-delay="100">
          I offer transparent and competitive pricing for professional
          full-stack development projects. Final costs depend on project scope,
          complexity, features, and timeline. Contact me for a detailed quote
          tailored to your project needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-6">
          <PricingCard
            title="Per Project"
            price="₱45,000"
            items={[
              "Search Engine Optimization (SEO)",
              "Full-stack development",
              "Testing & optimization",
              "Deployment support",
              "1 week free bug fixes (original scope)",
            ]}
          />

          <PricingCard
            title="Project + Maintenance"
            price="₱45, 000"
            subtitle="Monthly maintenance starts at ₱1,000"
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
            price="₱10,000"
            subtitle="Monthly development starts at ₱30,000"
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
            className="rounded uppercase text-sm relative bg-orange-400 px-7 py-4 mt-3 font-semibold overflow-hidden shadow-none transition-transform duration-200 hover:translate-x-1 hover:translate-y-1
            before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-full before:h-1 before:bg-orange-600 before:rounded-b-lg
            after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-1 after:h-full after:bg-orange-600 after:rounded-r-lg"
          >
            Contact Me
          </button>
        </Link>

        <div className="p-10 mt-4">
          <h2 className="text-2xl font-semibold" data-aos="fade-up">
            What You’re Paying For
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-6">
            <li data-aos="fade-up">✔ Search Engine Optimization (SEO)</li>
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

        <div className="text-sm">
          <p className="mb-2" data-aos="fade-up">
            • A <strong>20% non-refundable down payment</strong> is required
            before work begins. This secures your project in my schedule and
            covers initial setup costs.
          </p>
          <p className="mb-2" data-aos="fade-up">
            • We believed in our commitment to delivering high-quality work, you
            have a choice to request for different payment terms. Please contact
            me to discuss your specific needs and we can work together to find a
            solution that fits your budget and project requirements.
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
