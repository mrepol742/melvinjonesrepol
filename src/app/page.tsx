import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "@/components/ProjectCard";
import NeofetchTerminal from "@/components/home/Neofetch";
import FaceEyes from "@/components/FaceEyes";
import SteamSection from "@/components/home/SteamSection";
import { WakatimeSection } from "@/components/home/WakatimeSection";
import ProjectSection from "@/components/home/ProjectSection";
import RecentGithubActivityWrapper from "@/components/RecentGithubActivityWrapper";
import RecentGithubActivity from "@/components/RecentGithubActivity";
import { Youtube } from "@/components/home/Youtube";
import Script from "next/script";
import Button from "@/components/Button";

export default function Home() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Melvin Jones Repol",
    url: "https://www.melvinjonesrepol.com",
    image: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.png",
    description:
      "Freelance Software Engineer specializing in DevOps, AI systems, and scalable web applications.",
    jobTitle: "Freelance Software Engineer",
    mainEntityOfPage: "https://www.melvinjonesrepol.com",
    knowsAbout: [
      "DevOps",
      "Software Engineering",
      "Web Development",
      "Artificial Intelligence",
      "Cloud Infrastructure",
    ],
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
    name: "Melvin Jones Repol - Strategic Software & DevOps Partner",
    url: "https://www.melvinjonesrepol.com",
    inLanguage: "en",
  };

  const meMyselfI = {
    "@context": "https://schema.org",
    "@graph": [person, webSite],
  };

  const updates = [
    {
      title: "DevPulse",
      description:
        "Monitor your coding activity, create custom leaderboards, and compete with your team or the community. DevPulse brings WakaTime stats into a sleek, collaborative leaderboard experience.",
      link: "https://devpulse-waka.vercel.app",
      repo: "https://github.com/mrepol742/devpulse",
      featured: true,
    },
    {
      title: "Payment powered Sci Calculator",
      description:
        "A scientific calculator with payment integration, allowing users to access advanced features and functionalities through a seamless payment process.",
      link: "https://github.com/mrepol742/sci-calc",
      featured: true,
    },
    {
      title: "Football Matches Prediction",
      description:
        "Predictions based on team performance, player statistics, injuries, and historical data. Explore common approaches to predicting football matches.",
      link: "/todays-football-matches",
      featured: true,
    },
    {
      title: "Github Unsigned Commits",
      description:
        "Due to configuration issues on one of my device some of my commits in past couple weeks were unsigned. To avoid conflicts these past commits will not be signed. I will make sure that all future commits are signed and verified.",
    },
    {
      title: "Legals Update",
      description:
        "We updated our Privacy Policy and Terms of Service to ensure compliance with legal requirements and to provide transparency about how we handle user data. Please review the updated policies for more information.",
      link: "/privacy-policy",
      featured: true,
    },
    {
      title: "Floating Console Extension",
      description:
        "A Browser extension that provides a floating console for developers to easily access logs while browsing the web.",
      link: "/floating-console-extension",
      featured: true,
    },
    {
      title: "Webvium Launcher",
      description:
        "A lightweight and fast launcher for Android devices, designed to enhance user experience with a clean interface and essential features.",
      link: "/webvium-launcher",
      featured: true,
    },
    {
      title: "Webvium v3.1.0 Update",
      description:
        "This update includes various bug fixes and performance improvements. Introduce News Discovery feature to stay updated with latest news articles from Google News.",
      link: "/webvium-browser",
      featured: true,
    },
    {
      title: "Learning Rust",
      description:
        "I'm currently exploring Rust via PACT Advanced Rust Programming and Real World Applications via Coursera. You might see future projects of mine coded in Rust. Hope so...",
      repo: "https://github.com/mrepol742/learning_rust",
      featured: true,
    },
    {
      title: "Appstore",
      description:
        "Due to legals issues webvium is no longer available or up to date with Galaxy and Amazon Appstore. Webvium is available to download officially here and in Uptodown.com.",
      link: "https://webvium.en.uptodown.com/android",
      featured: true,
    },
    {
      title: "Generate Portolio using Wakatime Data",
      description:
        "Easily build your own portfolio, flex your coding skills and easy to deploy. All you just need is Wakatime API Key.",
      link: "https://github.com/mrepol742/wakatime-profile",
      featured: true,
    },
    {
      title: "Deploy your own Shortlink App!",
      description: "Get your link, shorteeeeeen!",
      link: "https://github.com/mrepol742/shortlink-app",
      featured: true,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(meMyselfI) }}
      />
      <main className="p-3 md:p-8">
        <section>
          <div className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
            <div className="relative z-10 max-w-4xl">
              <div
                className="inline-flex items-center px-4 py-1 mb-6 text-sm font-medium bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100"
                data-aos="fade-up"
              >
                Software Engineer • Full-Stack Developer
              </div>

              <h1
                className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Building Scalable Digital{" "}
                <span className="text-indigo-600">Solutions</span>
                <br /> That Drive Impact
              </h1>

              <p
                className="max-w-2xl mx-auto text-lg md:text-xl mb-10 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                I design and develop high-performance software systems that help
                businesses innovate, scale, and succeed in a rapidly evolving
                digital landscape.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="https://github.com/mrepol742"
                  data-aos="fade-up"
                  data-aos-delay="350"
                >
                  <Button className="bg-indigo-400 before:bg-indigo-600 after:bg-indigo-600">
                    Github
                  </Button>
                </Link>

                <Link
                  href="/contact-me"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <Button className="bg-orange-400 before:bg-orange-600 after:bg-orange-600">
                    Hire Me
                  </Button>
                </Link>

                <Link href="/pricing" data-aos="fade-up" data-aos-delay="450">
                  <Button className="bg-gray-700 before:bg-gray-800 after:bg-gray-800 text-white">
                    Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative py-14 md:py-28  overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto">
              <h4
                className="text-center text-red-500 text-3xl md:text-4xl mb-6 tracking-tight"
                data-aos="fade-up"
              >
                Keep Android Open
              </h4>

              <p
                className="text-center max-w-2xl mx-auto mb-5 leading-relaxed text-lg"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                In August 2025, Google{" "}
                <Link
                  className="underline decoration-gray-400 hover:decoration-gray-700 transition-colors"
                  href="https://developer.android.com/developer-verification"
                >
                  announced
                </Link>{" "}
                that as of September 2026, it will no longer be possible to
                develop apps for the Android platform without first registering
                centrally with Google. This registration will involve:
              </p>

              <div
                className="max-w-2xl mx-auto rounded-2xl"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <ul className="space-y-4">
                  <li
                    className="flex items-start gap-3"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-red-500"></span>
                    Paying a fee to Google
                  </li>
                  <li
                    className="flex items-start gap-3"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-red-500"></span>
                    Agreeing to Google’s Terms and Conditions
                  </li>
                  <li
                    className="flex items-start gap-3"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-red-500"></span>
                    Providing government identification
                  </li>
                  <li
                    className="flex items-start gap-3"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-red-500"></span>
                    Uploading evidence of the developer’s private signing key
                  </li>
                  <li
                    className="flex items-start gap-3"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-red-500"></span>
                    Listing all current and future application identifiers
                  </li>
                </ul>
              </div>

              <Link
                href="https://keepandroidopen.org"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Button className="bg-red-500 before:bg-red-700 after:bg-red-700">
                  Join the Movement
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative py-14 md:py-28  overflow-hidden">
            <h4
              className="text-center text-3xl mb-4 text-amber-500"
              data-aos="fade-up"
            >
              New Updates
            </h4>
            <p
              className="text-center max-w-2xl mx-auto mb-6"
              data-aos="fade-up"
            >
              Fresh projects and improvements added recently to keep things
              evolving. This section highlights what’s new, refined, or actively
              being worked on.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
              {updates.map((project, idx) => (
                <div key={idx} data-aos="fade-up">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>

          <div className="relative py-14 md:py-28  overflow-hidden">
            <h4
              className="text-center text-3xl text-amber-500"
              data-aos="fade-up"
            >
              Programming Stats
            </h4>
            <p
              className="text-center max-w-2xl mx-auto mb-6"
              data-aos="fade-up"
            >
              A snapshot of my coding activity across languages and tools.
              Tracked automatically to reflect real development time and habits.
            </p>
            <WakatimeSection />
          </div>

          <div className="relative py-14 md:py-28  overflow-hidden">
            <h4
              className="text-center text-3xl text-amber-500"
              data-aos="fade-up"
            >
              Featured Projects
            </h4>
            <p
              className="text-center max-w-2xl mx-auto mb-6"
              data-aos="fade-up"
            >
              A curated selection of projects that best represent my skills and
              creativity. These are the ones I’m most proud of and actively
              showcase.
            </p>
            <ProjectSection />
          </div>

          <SteamSection />

          <div className="relative py-14 md:py-28  overflow-hidden">
            <h4
              className="text-center text-3xl mb-4 text-amber-500"
              data-aos="fade-up"
            >
              Latest Videos
            </h4>
            <p
              className="text-center max-w-2xl mx-auto mb-6"
              data-aos="fade-up"
            >
              A glimpse into my latest video content, where I share insights,
              tutorials, and behind-the-scenes looks at my projects and gaming.
              Check out what I’ve been up to on YouTube!
            </p>
            <Youtube />
          </div>

          <div className="relative pt-14 md:pt-28  overflow-hidden">
            <h4
              className="text-center text-3xl  text-blue-400"
              data-aos="fade-up"
            >
              Hall of Codes
            </h4>
            <p
              className="text-center max-w-2xl mx-auto mb-6"
              data-aos="fade-up"
            >
              A community for developers, creatives, and problem-solvers. It’s
              where ideas turn into projects, and projects turn into
              opportunities to learn and collaborate.
            </p>
            <div
              className=" bg-blue-400/10 mb-4 rounded block lg:flex flex-column gap-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <FaceEyes />

              <div className="p-5">
                <p className="text-lg">
                  A community for developers, creatives, and
                  problem-solvers. It’s where ideas turn into projects, and
                  projects turn into opportunities to learn and collaborate.
                </p>
                <p className="mt-3 text-lg">
                  If you love building cool things, exploring new tech, or just
                  geeking out over code, you’re welcome to join the journey.
                </p>
                <Link
                  href="https://hallofcodes.github.io"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <Button
                    icon={faCode}
                    className="bg-blue-400 before:bg-blue-600 after:bg-blue-600"
                  >
                    Explore Hall of Codes
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/*<div className="mb-10">
            <NeofetchTerminal />
          </div>*/}

          <section className="rounded border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 mb-5">
            <div className="max-w-4xl mx-auto px-6 py-20">
              <div className="mb-6">
                <span className="text-sm font-semibold tracking-widest text-orange-500 uppercase">
                  About
                </span>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Melvin Jones Repol
                </h2>
              </div>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                Melvin Jones Repol is a freelance software engineer and
                full-stack web developer passionate about building practical and
                scalable digital solutions. With several years of experience in
                web development and software engineering, he focuses on creating
                efficient applications, automation tools, and modern web
                platforms. His work combines problem-solving, DevOps practices,
                and continuous learning in emerging technologies. Melvin
                actively develops projects, experiments with new tools, and
                shares his progress through various platforms while continuously
                improving his skills as a developer.
              </p>
            </div>
          </section>

          <div className="ml-auto max-w-md text-right space-y-1 text-xs">
            <p>
              Featured project images may not always reflect the latest
              versions.
            </p>
            <p>
              Some freelance work is intentionally not shown to respect client
              privacy.
            </p>
            <p>
              Gaming activity data is sourced from{" "}
              <Link
                href="https://steamcommunity.com/id/mrepol742/"
                className="underline hover:text-gray-300"
              >
                Steam API
              </Link>
              .
            </p>
            <p>
              All game titles and images are trademarks of their respective
              owners.
            </p>
            <p>
              Coding activity is tracked via{" "}
              <Link
                href="https://wakatime.com/@mrepol742"
                className="underline hover:text-gray-300"
              >
                WakaTime
              </Link>
              .
            </p>
            <p>
              Latest videos data are sourced from{" "}
              <Link
                href="https://www.youtube.com/@mrepol742"
                className="underline hover:text-gray-300"
              >
                YouTube Data API v3
              </Link>
              .
            </p>
            <p>
              Public contributions data are sourced from my Github account
              public contributions.
            </p>
          </div>
        </section>
      </main>

      <RecentGithubActivityWrapper>
        <RecentGithubActivity />
      </RecentGithubActivityWrapper>
    </>
  );
}
