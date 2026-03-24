import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCode,
  faGear,
  faGlobe,
  faLaptopCode,
  faMobileScreen,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import SteamSection from "@/components/home/SteamSection";
import { WakatimeSection } from "@/components/home/WakatimeSection";
import ProjectSection from "@/components/home/ProjectSection";
import RecentGithubActivityWrapper from "@/components/RecentGithubActivityWrapper";
import RecentGithubActivity from "@/components/RecentGithubActivity";
import { Youtube } from "@/components/home/Youtube";
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

  const services = [
    {
      title: "Web Development",
      description:
        "Custom responsive websites built with modern technologies to deliver performance, accessibility, and scalability.",
      icon: faGlobe,
    },
    {
      title: "Web App Development",
      description:
        "Powerful web applications designed to automate business workflows and support long-term digital growth.",
      icon: faLaptopCode,
    },
    {
      title: "Android App Development",
      description:
        "Modern Android applications built for performance, usability, and seamless mobile experiences.",
      icon: faMobileScreen,
    },
    {
      title: "Website Migration",
      description:
        "Secure migration of websites between servers, frameworks, or hosting environments with minimal downtime.",
      icon: faServer,
    },
    {
      title: "SEO / GEO Optimization",
      description:
        "Improve your visibility with search engine optimization and geo-targeted strategies that drive organic traffic.",
      icon: faChartLine,
    },
    {
      title: "Angular, Next.js & Laravel Migration",
      description:
        "Easily upgrade your web applications to newer versions of Angular, Next.js, or Laravel with expert migration services that ensure a smooth transition.",
      icon: faCode,
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
          <div className="h-screen flex flex-col justify-center items-center text-center snap-start px-3">
            <div
              className="inline-flex items-center px-4 py-1 mb-6 text-sm font-medium bg-indigo-100 text-indigo-700 rounded-full"
              data-aos="fade-up"
            >
              Software Engineer
            </div>

            <h1
              className="text-3xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Building <span className="gradient-text">scalable digital</span>{" "}
              <br />
              solutions that drive <br />
              <span className="gradient-text-sub">tangible impact.</span>
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
          </div>

          <div className="relative py-16 md:py-24 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center px-6 mb-14">
              <h4
                className="text-sm font-semibold tracking-widest text-amber-500 uppercase mb-3"
                data-aos="fade-up"
              >
                Services
              </h4>

              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Freelance Development Services
              </h2>

              <p className="text-lg" data-aos="fade-up" data-aos-delay="200">
                Professional development services to help businesses launch,
                optimize, and scale their digital platforms.
              </p>
            </div>
            <div className="max-w-7xl mx-auto px-4 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group perspective"
                  data-aos="fade-up"
                >
                  <div
                    className="
                    relative
                    rounded-xl
                    border border-gray-200/30
                    p-6
                    shadow-md
                    overflow-hidden
                    transition-transform duration-500
                    group-hover:rotate-y-6 group-hover:shadow-xl
                  "
                  >
                    <div className="text-4xl mb-5 transition-transform duration-300 group-hover:scale-110">
                      <FontAwesomeIcon icon={service.icon} />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 transition-transform duration-300 group-hover:translate-y-1">
                      {service.title}
                    </h3>

                    <p className="leading-relaxed transition-transform duration-300 group-hover:translate-y-1">
                      {service.description}
                    </p>

                    <span className="absolute -top-4 -right-4 w-12 h-12 border rounded-full opacity-10 transition-all duration-500 group-hover:scale-125"></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative py-14 md:py-28  overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h4
                className="text-sm font-semibold tracking-widest text-red-500 uppercase mb-3"
                data-aos="fade-up"
              >
                Advocacy
              </h4>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Keep Android Open
              </h2>

              <p
                className="max-w-2xl mx-auto mb-5 leading-relaxed text-lg"
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

              <Link
                href="https://keepandroidopen.org"
                data-aos="fade-up"
                data-aos-delay="300"
                className="flex justify-center"
              >
                <Button className="bg-red-500 before:bg-red-700 after:bg-red-700">
                  Join the Movement
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative py-14 md:py-28  overflow-hidden">
            <div className="text-center">
              <h4
                className="text-sm font-semibold tracking-widest text-cyan-500 uppercase mb-3"
                data-aos="fade-up"
              >
                Wakatime
              </h4>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Programming Activity
              </h2>
              <p
                className="text-center max-w-2xl mx-auto mb-6"
                data-aos="fade-up"
              >
                A snapshot of my coding activity across languages and tools.
                Tracked automatically to reflect real development time and
                habits.
              </p>
            </div>
            <WakatimeSection />
          </div>

          <div className="relative py-14 md:py-28  overflow-hidden">
            <div className="text-center">
              <h4
                className="text-sm font-semibold tracking-widest text-fuchsia-500 uppercase mb-3"
                data-aos="fade-up"
              >
                Explore My Work
              </h4>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Featured Projects
              </h2>
              <p className="max-w-2xl mx-auto mb-6" data-aos="fade-up">
                A curated selection of projects that best represent my skills
                and creativity. These are the ones I’m most proud of and
                actively showcase.
              </p>
            </div>

            <ProjectSection />

            <span className="text-xs">Swipe left or right to see more...</span>
          </div>

          <SteamSection />

          <div className="relative py-14 md:py-28  overflow-hidden">
            <div className="text-center">
              <h4
                className="text-sm font-semibold tracking-widest text-orange-500 uppercase mb-3"
                data-aos="fade-up"
              >
                Youtube
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
                tutorials, and behind-the-scenes looks at my projects and
                gaming. Check out what I’ve been up to on YouTube!
              </p>
            </div>

            <Youtube />
          </div>

          <div className="relative py-14 md:py-28 overflow-hidden">
            <div className="text-center">
              <h4
                className="text-sm font-semibold tracking-widest text-purple-500 uppercase mb-3"
                data-aos="fade-up"
              >
                Community
              </h4>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Hall of Codes
              </h2>
              <p className="max-w-2xl mx-auto mb-6" data-aos="fade-up">
                A community for developers, creatives, and problem-solvers. It’s
                where ideas turn into projects, and projects turn into
                opportunities to learn and collaborate.
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
