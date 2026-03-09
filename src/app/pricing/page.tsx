import Button from "@/components/Button";
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
    "Static Site Development",
    "Website to Native App",
    "Website to APK",
    "Web App Development",
    "Web App",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-3">
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

          <PricingCard
            title="Static Site Development"
            price="₱1,999"
            subtitle="One-time fee for 5 creative pages"
            items={[
              "Custom design",
              "Responsive layout",
              "SEO-friendly structure",
              "Fast loading times",
              "Ideal for portfolios & small businesses",
              "3 Week of free maintenance for bug fixes, performance and seo optimizations",
            ]}
          />

          <PricingCard
            title="Website to Native App"
            price="₱5,000"
            subtitle="One-time fee for converting your website to a native app"
            items={[
              "Cross-platform compatibility",
              "Optimized performance",
              "Access to native features",
              "Customizable UI/UX",
              "Ideal for expanding your reach to mobile users",
              "3 months of free maintenance for bug fixes and performance optimizations",
            ]}
          />

          <PricingCard
            title="Website to APK"
            price="₱1,999"
            subtitle="One-time fee for converting your website to an Android APK"
            items={[
              "Optimized for Android devices",
              "Access to native features",
              "Customizable UI/UX",
              "Ideal for reaching Android users",
              "3 months of free maintenance for bug fixes and performance optimizations",
            ]}
          />
        </div>

        <div className="flex gap-2 mb-3">
          <Link href="/contact-me" data-aos="fade-right" data-aos-delay="350">
            <Button className="bg-orange-400 before:bg-orange-600 after:bg-orange-600">
              Contact
            </Button>
          </Link>

          <Link href="https://wa.me/+639283559507" data-aos="fade-right" data-aos-delay="350">
            <Button className="bg-green-400 before:bg-green-600 after:bg-green-600">
              WhatsApp
            </Button>
          </Link>
        </div>

        <div className="text-sm">
          <section data-aos="fade-up" className="mb-4">
            <h3 className="font-semibold mb-2">Payment Terms</h3>
            <p className="mb-2">
              A <strong>20% non-refundable down payment</strong> is required
              before work begins. This secures your project in our schedule and
              covers initial setup costs.
            </p>
            <p>
              We are committed to delivering high-quality work. You may request
              alternative payment terms—please contact us to discuss your
              specific needs, and we will work together to find a solution that
              fits your budget and project requirements.
            </p>
          </section>

          <section data-aos="fade-up" className="mb-4">
            <h3 className="font-semibold mb-2">Scope & Changes</h3>
            <p>
              Any changes outside the agreed-upon scope are billed separately.
            </p>
          </section>

          <section data-aos="fade-up" className="mb-4">
            <h3 className="font-semibold mb-2">App Deployment</h3>
            <p>
              We do not deploy Android APKs or other native applications using
              our own Google Play Store or Apple App Store developer accounts.
              Clients are responsible for creating and managing their own
              developer accounts and submitting their applications to the
              respective platforms.
            </p>
            <p>
              While we may provide guidance or assistance during the submission
              process, we are not responsible for managing the submission or for
              any issues, delays, or decisions that may occur during the review
              process conducted by the Google Play Store or Apple App Store.
            </p>
          </section>

          <section data-aos="fade-up" className="mb-4">
            <h3 className="font-semibold mb-2">Legal & Compliance</h3>
            <p>
              We are not responsible for any legal issues, including copyright
              infringement, intellectual property disputes, or violations of
              platform policies, that may arise from the content, design, or
              functionality of the applications we develop. However, we may
              provide warnings or guidance regarding potential legal or policy
              concerns.
            </p>
            <p>
              Clients remain solely responsible for ensuring that their
              applications or website content comply with all applicable laws,
              platform rules, and their own terms of service, privacy policies,
              and other relevant policies.
            </p>
            <p>
              We are not responsible for any issues related to political content
              in the applications or websites.
            </p>
          </section>

          <section data-aos="fade-up">
            <h3 className="font-semibold mb-2">Maintenance</h3>
            <p>
              1 week of free maintenance covers existing bugs and defects only
              (unless otherwise specified). New features or scope changes
              require a new agreement.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
