import Link from "next/link";
import ServicesCarousel from "@/app/[locale]/components/Technologies";
import Project from "@/app/[locale]/components/Project";
import ClientFeedback from "@/app/[locale]/components/ClientFeedback";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Home - Melvin Jones Repol",
  description:
    "I help teams deliver reliable software that saves time and money. From discovery to production support, my focus is output, stability, and ROI — not just code.",
  keywords: [
    "software development",
    "web development",
    "full-stack development",
    "wordpress development",
    "wix development",
    "website migration",
    "static site generation",
    "landing page",
    "portfolio",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com",
  },
  openGraph: {
    title: "Home - Melvin Jones Repol",
    description:
      "I help teams deliver reliable software that saves time and money. From discovery to production support, my focus is output, stability, and ROI — not just code.",

    url: "https://www.melvinjonesrepol.com",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
        width: 1200,
        height: 630,
        alt: "Home Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home - Melvin Jones Repol",
    description:
      "I help teams deliver reliable software that saves time and money. From discovery to production support, my focus is output, stability, and ROI — not just code.",

    images: [
      "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
    ],
    creator: "@mrepol742",
  },
};

export default function Home() {
  const t = useTranslations("test");

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Melvin Jones Repol",
    url: "https://www.melvinjonesrepol.com",
    image:
      "https://www.melvinjonesrepol.com/images/melvin-jones-repol-black-circle.png",
    description:
      "Building scalable systems from planning and design to development and production support, helping businesses grow efficiently.",
    jobTitle: "Software Engineer",
    mainEntityOfPage: "https://www.melvinjonesrepol.com",
    sameAs: [
      "https://www.facebook.com/melvinjonesrepol",
      "https://linkedin.com/in/mrepol742",
      "https://github.com/mrepol742",
      "https://wakatime.com/@mrepol742",
      "https://www.youtube.com/@mrepol742",
      "https://g.dev/mrepol742",
      "https://steamcommunity.com/id/mrepol742",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Self-Employed",
    },
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Melvin Jones Repol - Software Engineer",
    url: "https://www.melvinjonesrepol.com",
    inLanguage: "en",
  };

  const meMyselfI = {
    "@context": "https://schema.org",
    "@graph": [person, webSite],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(meMyselfI) }}
      />
      <main className="p-3 md:p-8">
        <section>
          <div className="h-screen flex flex-col justify-center items-center snap-start px-3">
            <div className="relative w-full max-w-6xl mx-auto">
              <div className="md:text-left md:max-w-2xl">
                <div className="inline-flex px-4 py-1 mb-6 text-sm font-medium rounded-full border">
                  Business-Focused Software Partner
                </div>
                <div className="ms-3 inline-flex items-center gap-2 px-4 py-1 mb-6 text-sm font-medium rounded-full border">
                  {t("hello_world")}
                </div>

                <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                  Reduce costs.{" "}
                  <span className="gradient-text">Ship faster.</span> <br />
                  Lower operational risk.
                </h1>

                <p className="max-w-2xl mx-auto md:mx-0 text-lg md:text-xl mb-10 leading-relaxed">
                  I help teams deliver reliable software that saves time and
                  money. From discovery to production support, my focus is
                  output, stability, and ROI — not just code.
                </p>
              </div>

              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[300px]">
                <div className="rounded-2xl border border-black/10 dark:border-white/10 backdrop-blur-xl p-5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs uppercase tracking-widest">
                      Business Impact
                    </p>
                    <span className="text-xs rounded-full border px-2 py-0.5">
                      Enterprise-ready
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold">Cost Optimization</p>
                      <p className="text-xs uppercase tracking-wider">
                        Automate workflows, reduce waste
                      </p>
                    </div>

                    <div className="h-px border-t border-black/10 dark:border-white/10" />

                    <div>
                      <p className="text-sm font-semibold">Faster Delivery</p>
                      <p className="text-xs uppercase tracking-wider">
                        Shorter cycles, clear milestones
                      </p>
                    </div>

                    <div className="h-px border-t border-black/10 dark:border-white/10" />

                    <div>
                      <p className="text-sm font-semibold">Risk Reduction</p>
                      <p className="text-xs uppercase tracking-wider">
                        Stable systems, predictable releases
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative py-14 md:py-28 overflow-hidden">
            <div className="text-center mb-10 md:mb-14">
              <h4
                className="text-sm font-semibold tracking-widest uppercase mb-3"
                data-aos="fade-up"
              >
                How I Help
              </h4>
              <h2
                className="text-3xl md:text-5xl font-bold leading-tight"
                data-aos="fade-up"
              >
                Practical delivery that aligns with business goals.
              </h2>
              <p className="max-w-2xl mx-auto mt-4" data-aos="fade-up">
                I work with owners and teams to remove bottlenecks, build
                scalable systems, and deliver measurable outcomes.
              </p>
            </div>

            <ServicesCarousel />
          </div>

          <div className="relative py-14 md:py-28  overflow-hidden">
            <div className="text-center">
              <h4
                className="text-sm font-semibold tracking-widest uppercase mb-3"
                data-aos="fade-up"
              >
                Results &amp; Case Studies
              </h4>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                data-aos="fade-up"
              >
                Work that drives outcomes
              </h2>
              <p className="max-w-2xl mx-auto mb-6" data-aos="fade-up">
                A curated selection of projects focused on real-world impact:
                improved operations, faster delivery, and tangible business
                value.
              </p>
            </div>

            <Project />

            <span className="text-xs">Swipe left or right to see more...</span>
          </div>

          <div className="relative py-14 md:py-28 overflow-hidden">
            <div className="text-center">
              <h4
                className="text-sm font-semibold tracking-widest uppercase mb-3"
                data-aos="fade-up"
              >
                Client Feedback
              </h4>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                data-aos="fade-up"
              >
                Trusted for delivery and reliability
              </h2>
              <p className="max-w-2xl mx-auto mb-10" data-aos="fade-up">
                A collection of feedback and testimonials from clients and
                collaborators highlighting results and execution quality.
              </p>
            </div>

            <ClientFeedback />
          </div>

          <div className="relative py-10 md:py-16 overflow-hidden">
            <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <div
                  className="rounded-2xl border p-6 md:p-7"
                  data-aos="fade-up"
                >
                  <p
                    className="text-xs uppercase tracking-widest mb-3"
                    data-aos="fade-up"
                  >
                    Budget‑Aligned Delivery
                  </p>
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-3"
                    data-aos="fade-up"
                  >
                    We match infrastructure to budget and demand.
                  </h3>
                  <p
                    className="text-sm md:text-base leading-relaxed"
                    data-aos="fade-up"
                  >
                    I don’t force expensive stacks. I choose hosting and system
                    design based on your budget, expected traffic, and risk
                    tolerance — then define the stack that delivers the best
                    output for the least cost.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span
                      className="text-xs rounded-full border px-3 py-1"
                      data-aos="fade-up"
                    >
                      Cost‑first planning
                    </span>
                    <span
                      className="text-xs rounded-full border px-3 py-1"
                      data-aos="fade-up"
                    >
                      Performance‑aware
                    </span>
                    <span
                      className="text-xs rounded-full border px-3 py-1"
                      data-aos="fade-up"
                    >
                      Scales when needed
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative p-6 md:p-7">
                  <div className="absolute left-6 top-6 bottom-6 w-px border-l" />

                  <div className="space-y-6">
                    <div className="pl-6 relative">
                      <span className="absolute -left-1 top-1 h-2.5 w-2.5 rounded-full border bg-white dark:bg-black" />
                      <p className="text-sm font-semibold" data-aos="fade-up">
                        Shared Hosting
                      </p>
                      <p
                        className="text-xs uppercase tracking-wider"
                        data-aos="fade-up"
                      >
                        Lean MVPs · Lowest overhead
                      </p>
                    </div>

                    <div className="pl-6 relative">
                      <span className="absolute -left-1 top-1 h-2.5 w-2.5 rounded-full border bg-white dark:bg-black" />
                      <p className="text-sm font-semibold" data-aos="fade-up">
                        VPS
                      </p>
                      <p
                        className="text-xs uppercase tracking-wider"
                        data-aos="fade-up"
                      >
                        Balance of cost and control
                      </p>
                    </div>

                    <div className="pl-6 relative">
                      <span className="absolute -left-1 top-1 h-2.5 w-2.5 rounded-full border bg-white dark:bg-black" />
                      <p className="text-sm font-semibold" data-aos="fade-up">
                        Dedicated Hosting
                      </p>
                      <p
                        className="text-xs uppercase tracking-wider"
                        data-aos="fade-up"
                      >
                        Full control, dedicated resources
                      </p>
                    </div>

                    <div className="pl-6 relative">
                      <span className="absolute -left-1 top-1 h-2.5 w-2.5 rounded-full border bg-white dark:bg-black" />
                      <p className="text-sm font-semibold" data-aos="fade-up">
                        Cloud
                      </p>
                      <p
                        className="text-xs uppercase tracking-wider"
                        data-aos="fade-up"
                      >
                        Scale, reliability, enterprise needs
                      </p>
                    </div>
                  </div>

                  <div
                    className="mt-6 ms-10 text-xs uppercase tracking-widest"
                    data-aos="fade-up"
                  >
                    Decision based on budget + users + risk
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative py-14 md:py-28 overflow-hidden">
            <div className="mx-auto max-w-4xl text-center">
              <p
                className="text-xs uppercase tracking-widest mb-3"
                data-aos="fade-up"
              >
                About
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                data-aos="fade-up"
              >
                The business partner behind the delivery
              </h2>
              <p className="max-w-2xl mx-auto mb-6" data-aos="fade-up">
                Beyond shipping software, I focus on reducing operational costs,
                improving delivery speed, and helping teams operate with less
                risk. If you want the full background and working style, it’s
                here.
              </p>

              <Link
                href="/about"
                data-aos="fade-up"
                className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium hover:shadow-sm transition"
              >
                Read the full story
              </Link>
            </div>
          </div>

          <div
            className="relative py-14 md:py-28 overflow-hidden"
            data-aos="slide-up"
          >
            <div className="relative mx-auto max-w-4xl">
              <div className="relative rounded-3xl border p-6 md:p-10 shadow-[0_10px_50px_-20px_rgba(0,0,0,0.15)]">
                <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 mb-4">
                  <span className="h-2 w-2 rounded-full border animate-pulse" />
                  <span className="text-xs font-medium tracking-wide uppercase">
                    Next Step
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  Ready to cut costs or ship faster?
                </h3>

                <p className="text-sm md:text-base leading-relaxed">
                  If you have a product to build, a system to stabilize, or a
                  process to automate, I’m open to discussing how we can deliver
                  measurable results together. Reach out through any of the
                  contact options above.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="text-xs md:text-sm rounded-full border px-3 py-1">
                    Outcome-driven
                  </span>
                  <span className="text-xs md:text-sm rounded-full border px-3 py-1">
                    Business-focused
                  </span>
                  <span className="text-xs md:text-sm rounded-full border px-3 py-1">
                    Reliable delivery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
