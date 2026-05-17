import Image from "next/image";
import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode as faCodeSolid } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/ui/Button";
import Steam from "@/app/[locale]/about/components/Steam";
import Wakatime from "@/app/[locale]/about/components/Wakatime";
import RecentGithubActivityWrapper from "@/app/[locale]/about/components/RecentGithubActivityWrapper";
import RecentGithubActivity from "@/app/[locale]/about/components/RecentGithubActivity";
import Youtube from "@/app/[locale]/about/components/Youtube";
import SecurityPractices from "@/app/[locale]/about/components/SecurityPractices";
import AI from "@/app/[locale]/about/components/AI";
import Blog from "@/app/[locale]/about/components/Blog";
import Certificate from "@/app/[locale]/about/components/Certificate";
import EngineeringPhilosophy from "@/app/[locale]/about/components/EngineeringPhilosophy";
import Github from "@/app/[locale]/components/Github";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Melvin Jones Repol",
  description:
    "I partner with teams to build practical, scalable software that improves delivery speed, reduces operational costs, and keeps systems stable in production.",
  keywords: ["about", "melvin jones repol"],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/about",
  },
  openGraph: {
    title: "About - Melvin Jones Repol",
    description:
      "I partner with teams to build practical, scalable software that improves delivery speed, reduces operational costs, and keeps systems stable in production.",
    url: "https://www.melvinjonesrepol.com/about",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
        width: 1200,
        height: 630,
        alt: "About Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Melvin Jones Repol",
    description:
      "I partner with teams to build practical, scalable software that improves delivery speed, reduces operational costs, and keeps systems stable in production.",
    images: [
      "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
    ],
    creator: "@mrepol742",
  },
};

export default function About() {
  return (
    <>
      <main className="p-3 md:p-8">
        <section className="border-b mb-10 min-h-screen flex items-center">
          <div className="mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold tracking-widest uppercase mb-3">
                  About
                </p>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  Melvin Jones Repol
                </h1>
                <p className="mt-4 text-base md:text-lg leading-relaxed">
                  I partner with teams to build practical, scalable software
                  that improves delivery speed, reduces operational costs, and
                  keeps systems stable in production.
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border p-4">
                    <p className="text-xs uppercase tracking-wide mb-1">Role</p>
                    <p className="font-medium">Freelance Software Engineer</p>
                  </div>
                  <div className="rounded-xl border p-4">
                    <p className="text-xs uppercase tracking-wide mb-1">
                      Focus
                    </p>
                    <p className="font-medium">Full-Stack Development</p>
                  </div>
                  <div className="rounded-xl border p-4 md:col-span-2">
                    <p className="text-xs uppercase tracking-wide mb-1">
                      Expertise
                    </p>
                    <p className="font-medium">
                      Android & Web Applications, Automation, DevOps
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm leading-relaxed">
                    I bring a practical delivery mindset — clear milestones,
                    strong QA discipline, and production‑ready execution — so
                    projects ship on time and remain stable over the long term.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 flex lg:justify-end">
                <div className="relative">
                  <Image
                    src="/images/melvin-jones-repol-black.jpg"
                    alt="Melvin Jones Repol"
                    className="rounded-2xl object-cover transition-transform duration-300 hover:scale-[1.02]"
                    width={420}
                    height={480}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative py-14 md:py-28 overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <div className="text-center mb-10 md:mb-14">
              <h4
                className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-3"
                data-aos="fade-up"
              >
                Engineering Philosophy
              </h4>
              <h2
                className="text-3xl md:text-5xl font-bold leading-tight"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Anyone can ship software.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                  Not everyone ships quality.
                </span>
              </h2>
            </div>

            <EngineeringPhilosophy />
          </div>
        </div>

        <div className="relative py-14 md:py-28  overflow-hidden">
          <div className="text-center">
            <h4
              className="text-sm font-semibold tracking-widest text-cyan-500 uppercase mb-3"
              data-aos="fade-up"
            >
              Coding Activity
            </h4>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              I Code, Therefore I Am
            </h2>
            <p
              className="text-center max-w-2xl mx-auto mb-6"
              data-aos="fade-up"
            >
              A snapshot of my coding activity across languages and tools.
              Tracked automatically to reflect real development time and habits.
            </p>
          </div>
          <Wakatime />
        </div>

        <Github />

        <div className="relative py-14 md:py-28 overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h4
                className="text-sm font-semibold tracking-widest text-orange-500 uppercase mb-3"
                data-aos="fade-up"
              >
                Security
              </h4>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                I Take Security Seriously
              </h2>
              <p className="max-w-2xl mx-auto mb-10" data-aos="fade-up">
                Security is built in my workflow from commit to release. Here
                are some of the practices I use to keep code, dependencies, and
                published packages trustworthy.
              </p>
            </div>

            <SecurityPractices />
          </div>
        </div>

        <div className="relative py-14 md:py-28 overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h4
                className="text-sm font-semibold tracking-widest text-orange-500 uppercase mb-3"
                data-aos="fade-up"
              >
                AI/ML in Development
              </h4>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Yes, I Use AI in My Workflow
              </h2>
              <p className="max-w-2xl mx-auto mb-10" data-aos="fade-up">
                AI is part of my day-to-day workflow to improve velocity,
                clarity, and code quality while keeping human (like me) the
                final decision-maker.
              </p>
            </div>

            <AI />
          </div>
        </div>

        <div className="relative py-14 md:py-28  overflow-hidden">
          <div className="text-center">
            <h4
              className="text-sm font-semibold tracking-widest text-fuchsia-500 uppercase mb-3"
              data-aos="fade-up"
            >
              Certifications
            </h4>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Featured Certifications
            </h2>
            <p className="max-w-2xl mx-auto mb-6" data-aos="fade-up">
              A collection of my featured certifications that highlight my
              skills and expertise.
            </p>
          </div>

          <Certificate />

          <span className="text-xs">Swipe left or right to see more...</span>
        </div>

        <div className="relative py-14 md:py-28 overflow-hidden">
          <div className="text-center">
            <h4
              className="text-sm font-semibold tracking-widest text-green-500 uppercase mb-3"
              data-aos="fade-up"
            >
              Blog
            </h4>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Insights &amp; Experiences
            </h2>
            <p className="max-w-2xl mx-auto mb-10" data-aos="fade-up">
              A collection of my thoughts, insights, and experiences on software
              development, technology trends, and personal growth in the tech
            </p>
          </div>

          <Blog />
        </div>

        <Steam />

        <div className="relative py-14 md:py-28  overflow-hidden">
          <div className="text-center">
            <h4
              className="text-sm font-semibold tracking-widest text-orange-500 uppercase mb-3"
              data-aos="fade-up"
            >
              YouTube Channel
            </h4>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Latest Videos
            </h2>
            <p className="max-w-2xl mx-auto mb-6" data-aos="fade-up">
              A glimpse into my latest video content, where I share insights,
              tutorials, and behind-the-scenes looks at my projects and gaming.
              Check out what I’ve been up to on YouTube!
            </p>
          </div>

          <Youtube />

          <span className="text-xs">Swipe left or right to see more...</span>
        </div>

        <div className="relative py-14 md:py-28 overflow-hidden">
          <div className="mx-auto max-w-4xl text-center">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-widest uppercase"
              data-aos="fade-up"
            >
              <span className="inline-block h-2 w-2 rounded-full border" />
              Dev Community
            </div>

            <h2
              className="mt-4 text-3xl md:text-4xl font-bold"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Hall of Codes
            </h2>

            <p className="max-w-2xl mx-auto mt-4" data-aos="fade-up">
              A community for developers, creatives, and problem-solvers. It’s
              where ideas turn into projects, and projects turn into
              opportunities to learn and collaborate.
            </p>

            <p className="max-w-2xl mx-auto mt-4" data-aos="fade-up">
              We believe in the power of shared knowledge and collective growth.
              Join us to connect, collaborate, and create with like-minded
              individuals who are passionate about coding and innovation.
            </p>

            <div
              className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-3 text-sm md:grid-cols-3"
              data-aos="fade-up"
            >
              <div className="rounded-lg border px-4 py-3">
                <div className="text-lg font-semibold">Open Source</div>
                <div className="text-xs uppercase tracking-wider">
                  Projects & Collabs
                </div>
              </div>
              <div className="rounded-lg border px-4 py-3">
                <div className="text-lg font-semibold">Learning</div>
                <div className="text-xs uppercase tracking-wider">
                  Mentors & Resources
                </div>
              </div>
              <div className="rounded-lg border px-4 py-3">
                <div className="text-lg font-semibold">Community</div>
                <div className="text-xs uppercase tracking-wider">
                  Events & Networking
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col md:flex-row justify-center gap-2 md:gap-4">
              <Link
                href="https://hallofcodes.vercel.app"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Button icon={faCodeSolid} className="border border-current">
                  Join Us
                </Button>
              </Link>
              <Link
                href="https://github.com/hallofcodes"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Button icon={faGithub} className="border border-current">
                  Github
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <RecentGithubActivityWrapper>
        <RecentGithubActivity />
      </RecentGithubActivityWrapper>
    </>
  );
}
