"use client";

import Link from "next/link";
import PricingCard from "./PricingCard";
import Button from "@/components/ui/Button";
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
            title="WordPress Development"
            price={convertedPrice("35000")}
            currency={currency}
            items={[
              "Plugin integration",
              "SEO optimization",
              "E-commerce setup",
              "Ideal for blogs & small businesses",
            ]}
          />

          <PricingCard
            title="WordPress Pro Development"
            price={convertedPrice("45000")}
            currency={currency}
            items={[
              "Custom theme development",
              "Advanced plugin integration",
              "SEO optimization",
              "E-commerce setup",
              "Ideal for businesses needing a powerful WordPress site",
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

        <div className="mt-16 max-w-5xl mx-auto space-y-10">
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/contact-me" data-aos="fade-right">
              <Button>Contact</Button>
            </Link>

            <Link href="https://wa.me/+639283559507" data-aos="fade-right">
              <Button>WhatsApp</Button>
            </Link>

            <div className="ml-auto">
              <Link
                href="/legal/developer-client-agreement"
                data-aos="fade-right"
              >
                <Button>Developer Client Agreement</Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 text-sm">
            <section data-aos="fade-up" className="space-y-3">
              <h3 className="font-semibold tracking-tight">Payment Terms</h3>

              <p>
                A <strong>20% non-refundable down payment</strong> is required
                before work begins. This secures your project in our schedule
                and covers initial setup costs.
              </p>

              <p>
                Alternative payment terms can be discussed based on your needs.
                We aim to find a structure that aligns with your budget and
                project scope.
              </p>

              <p>
                Final pricing may vary depending on scope, complexity, and
                requirements. A detailed quote will be provided after full
                discussion.
              </p>
            </section>

            <section data-aos="fade-up" className="space-y-3">
              <h3 className="font-semibold tracking-tight">Maintenance</h3>

              <p>
                Includes 1 week of free maintenance covering bugs and defects
                only (unless otherwise specified).
              </p>

              <p>
                New features, enhancements, or scope changes require a separate
                agreement.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
