"use client";

import Link from "next/link";
import PricingCard from "./PricingCard";
import Button from "../Button";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Pricing() {
  const [currency, setCurrency] = useState("PHP");
  const [rates, setRates] = useState<{ [key: string]: number }>({ PHP: 1 });
  const [epoch, setEpoch] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const convertedPrice = (price: string) => {
    if (!rates || !rates[currency]) return price;

    const rate = rates[currency] || 1;
    const exchangePrice = (parseFloat(price) * rate).toFixed(2);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(parseFloat(exchangePrice));
  };

  const changeCurrency = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCurrency(value);

    if (value === "PHP" || epoch > 0 || isLoading) return;
    setIsLoading(true);

    const promise = fetch("/api/currency")
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || "Something went wrong");

        setRates(data.data.conversion_rates);
        setEpoch(data.lastFetchedEpoch);

        return data;
      })
      .finally(() => setIsLoading(false));

    toast.promise(promise, {
      pending: "Fetching latest exchange rates...",
      success: "Exchange rates updated successfully!",
      error: {
        render({ data }) {
          const err = data as Error;
          return (
            err?.message ||
            "Failed to fetch exchange rates. Please try again later."
          );
        },
      },
    });
  };

  return (
    <main className="my-18 p-3 md:p-8">
      <section>
        <div className="flex justify-between items-center mb-4">
          <h1
            className="text-2xl font-semibold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            My Pricing for Full-Stack Development Services
          </h1>
          <select
             disabled={isLoading}
            onChange={changeCurrency}
            className="bg-gray-700 text-white px-1 py-1 rounded shadow outline-none cursor-pointer hover:bg-gray-600 transition"
          >
            <option value="PHP">PHP</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
            <option value="NGN">NGN</option>
            <option value="INR">INR</option>
            <option value="CNY">CNY</option>
          </select>
        </div>

        <p className="mt-2" data-aos="fade-up" data-aos-delay="100">
          I offer transparent and competitive pricing for professional
          full-stack development projects. Final costs depend on project scope,
          complexity, features, and timeline. Contact me for a detailed quote
          tailored to your project needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-3">
          <PricingCard
            title="Per Project"
            price={convertedPrice("45000")}
            currency={currency}
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
            price={convertedPrice("45000")}
            maintenancePrice={convertedPrice("1000")}
            currency={currency}
            subtitle="Monthly maintenance starts at"
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
            price={convertedPrice("10000")}
            maintenancePrice={convertedPrice("30000")}
            currency={currency}
            subtitle="Monthly development starts at"
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
            price={convertedPrice("1999")}
            currency={currency}
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
            price={convertedPrice("5000")}
            currency={currency}
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
            price={convertedPrice("1999")}
            currency={currency}
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

          <Link
            href="https://wa.me/+639283559507"
            data-aos="fade-right"
            data-aos-delay="350"
          >
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
