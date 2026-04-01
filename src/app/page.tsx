import Image from "next/image";
import Link from "next/link";
import {
  faChartLine,
  faCode,
  faLaptopCode,
  faMobileScreen,
  faPesoSign,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import SteamSection from "@/components/features/home/SteamSection";
import { WakatimeSection } from "@/components/features/home/WakatimeSection";
import ProjectSection from "@/components/features/home/ProjectSection";
import RecentGithubActivityWrapper from "@/components/features/home/RecentGithubActivityWrapper";
import RecentGithubActivity from "@/components/features/home/RecentGithubActivity";
import { Youtube } from "@/components/features/home/Youtube";
import Button from "@/components/ui/Button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ServicesCarousel from "@/components/features/home/Services";

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
      title: "Web App Development",
      description:
        "Powerful web applications designed to automate business workflows and support long-term digital growth. Integrating modern technologies to create efficient, scalable, and user-friendly solutions.",
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
              Software &amp; AI Engineer | Arch Linux Advocate
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

            <ServicesCarousel />
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

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:auto-rows-[220px]">
              {services.map((service, index) => {
                let spanClass = "";

                if (index === 0) {
                  spanClass = "md:col-span-1 md:row-span-2";
                } else {
                  spanClass = "md:col-span-1 md:row-span-1";
                }

                return (
                  <div
                    key={index}
                    className={`group perspective ${spanClass} h-auto md:h-full`}
                    data-aos="fade-up"
                  >
                    <div
                      className="
                        relative
                        h-full
                        rounded-xl
                        border border-gray-200/30
                        p-6
                        shadow-md
                        overflow-hidden
                        transition-transform duration-500
                        group-hover:rotate-y-6 group-hover:shadow-xl
                      "
                    >
                      <h3 className="text-2xl font-bold mb-3 transition-transform duration-300 group-hover:translate-y-1">
                        {service.title}
                      </h3>

                      <p className="leading-relaxed transition-transform duration-300 group-hover:translate-y-1">
                        {service.description}
                      </p>

                      <span className="absolute -top-4 -right-4 w-12 h-12 border rounded-full opacity-10 transition-all duration-500 group-hover:scale-125"></span>
                    </div>
                  </div>
                );
              })}
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

            <span className="text-xs">Swipe left or right to see more...</span>
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
              <div className="flex flex-col md:flex-row justify-center gap-1 md:gap-4">
                <Link
                  href="https://hallofcodes.github.io"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <Button
                    icon={faCode}
                    className="bg-purple-500 before:bg-purple-700 after:bg-purple-700"
                  >
                    Website
                  </Button>
                </Link>
                <Link
                  href="https://github.com/hallofcodes"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <Button
                    icon={faGithub}
                    className="bg-purple-500 before:bg-purple-700 after:bg-purple-700"
                  >
                    Github
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <section className="border-t border-gray-200 dark:border-gray-800 mb-5">
            <div className="max-w-5xl mx-auto px-6 py-16">
              <div className="mb-10 flex items-center gap-6">
                <div className="hidden md:block shrink-0 self-start">
                  <Image
                    src="/images/melvinjonesrepol.png"
                    alt="Melvin Jones Repol"
                    className="w-20 h-20 rounded-xl object-cover"
                    width={80}
                    height={80}
                  />
                </div>

                <div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-3">
                      About
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                      Melvin Jones Repol
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-3 gap-10">
                    <div className="md:col-span-2">
                      <p className="leading-relaxed text-base md:text-lg">
                        Melvin Jones Repol is a freelance software engineer and
                        full-stack web developer focused on building practical
                        and scalable digital solutions. With years of experience
                        in web development and software engineering, he
                        specializes in developing efficient applications,
                        automation tools, and modern web platforms.
                      </p>

                      <p className="mt-4 leading-relaxed text-base md:text-lg">
                        His work integrates strong problem-solving skills,
                        DevOps practices, and continuous exploration of emerging
                        technologies. He actively builds projects, experiments
                        with new tools, and shares his progress while
                        consistently refining his expertise.
                      </p>

                      <Link
                        href="/pricing"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        <Button
                          icon={faPesoSign}
                          className="text-white bg-gray-800 before:bg-gray-900 after:bg-gray-900"
                        >
                          Pricing
                        </Button>
                      </Link>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <p className="text-xs uppercase tracking-wide mb-1">
                          Role
                        </p>
                        <p className="font-medium">
                          Freelance Software Engineer
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wide mb-1">
                          Focus
                        </p>
                        <p className="font-medium">Full-Stack Development</p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wide mb-1">
                          Expertise
                        </p>
                        <p className="font-medium">
                          Android & Web Applications, Automation, DevOps
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
