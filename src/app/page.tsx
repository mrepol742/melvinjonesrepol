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
import { YoutubeSection } from "@/components/features/home/YoutubeSection";
import Button from "@/components/ui/Button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ServicesCarousel from "@/components/features/home/Services";
import SecurityPractices from "@/components/features/home/SecurityPractices";
import AI from "@/components/features/home/AI";
import ScrambleText from "@/components/ui/ScrambleText";
import { GithubSection } from "@/components/features/home/GithubSection";
import AchievementsSection from "@/components/features/home/AchievementSection";
import BlogSection from "@/components/features/home/BlogSection";
import CertificateSection from "@/components/features/home/CertificateSection";
import EngineeringPhilosophySection from "@/components/features/home/EngineeringPhilosophySection";

export default function Home() {
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
          <div className="h-screen flex flex-col justify-center items-center text-center snap-start px-3">
            <div className="inline-flex items-center px-4 py-1 mb-6 text-sm font-medium bg-indigo-100 text-indigo-700 rounded-full">
              Software &amp; AI Engineer | Arch Linux Advocate
            </div>

            <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Building <span className="gradient-text">scalable digital</span>{" "}
              <br />
              solutions that drive <br />
              <span className="gradient-text-sub">tangible impact.</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl mb-10 leading-relaxed">
              I design, build, and maintain scalable software systems, covering
              planning, development, and production support to help businesses
              grow and operate efficiently.
            </p>

            <ServicesCarousel />
          </div>

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

              <EngineeringPhilosophySection />
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
                A curated selection of personal projects that best represent my
                skills and creativity. These are the ones I’m most proud of and
                actively showcase.
              </p>
            </div>

            <ProjectSection />

            <span className="text-xs">Swipe left or right to see more...</span>
          </div>

          <GithubSection />

          <div className="relative py-14 md:py-28 overflow-hidden">
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

          <div className="relative py-14 md:py-28 overflow-hidden">
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

          <div className="relative py-14 md:py-28 overflow-hidden">
            <div className="text-center">
              <h4
                className="text-sm font-semibold tracking-widest text-green-500 uppercase mb-3"
                data-aos="fade-up"
              >
                Achievements
              </h4>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Feedback &amp; Testimonials
              </h2>
              <p className="max-w-2xl mx-auto mb-10" data-aos="fade-up">
                A collection of feedback and testimonials from clients,
                collaborators, and peers that highlight the impact of my work
                and the value I bring to projects.
              </p>
            </div>

            <AchievementsSection />
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

            <CertificateSection />

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
                A collection of my thoughts, insights, and experiences on
                software development, technology trends, and personal growth in
                the tech
              </p>
            </div>

            <BlogSection />
          </div>

          <SteamSection />

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
                tutorials, and behind-the-scenes looks at my projects and
                gaming. Check out what I’ve been up to on YouTube!
              </p>
            </div>

            <YoutubeSection />

            <span className="text-xs">Swipe left or right to see more...</span>
          </div>

          <div className="relative py-14 md:py-28 overflow-hidden">
            <div className="text-center">
              <h4
                className="text-sm font-semibold tracking-widest text-purple-500 uppercase mb-3"
                data-aos="fade-up"
              >
                Dev Community
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

              <p className="max-w-2xl mx-auto mb-6" data-aos="fade-up">
                We believe in the power of shared knowledge and collective
                growth. Join us to connect, collaborate, and create with
                like-minded individuals who are passionate about coding and
                innovation.
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
            <div className="mx-auto px-6 py-16">
              <div className="group mb-10 flex flex-col md:flex-row items-center gap-6">
                <div className="shrink-0 self-start">
                  <Image
                    src="/images/melvin-jones-repol-black.jpg"
                    alt="Melvin Jones Repol"
                    className="rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={400}
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

          <section className="flex flex-wrap justify-center gap-4 mb-16">
            <Link href="/pricing" data-aos="fade-up" data-aos-delay="300">
              <Button
                icon={faPesoSign}
                className="text-white bg-gray-800 before:bg-gray-900 after:bg-gray-900"
              >
                Pricing
              </Button>
            </Link>
            <Link href="/contact-me" data-aos="fade-up" data-aos-delay="300">
              <Button
                icon={faServer}
                className="text-white bg-gray-800 before:bg-gray-900 after:bg-gray-900"
              >
                Contact
              </Button>
            </Link>
            <Link href="/blog" data-aos="fade-up" data-aos-delay="300">
              <Button
                icon={faChartLine}
                className="text-white bg-gray-800 before:bg-gray-900 after:bg-gray-900"
              >
                Blog
              </Button>
            </Link>
          </section>

          <div className="relative py-14 md:py-28 overflow-hidden">
            <div className="relative mx-auto max-w-4xl">
              <div className="relative rounded-3xl border border-zinc-800/80  backdrop-blur-xl p-6 md:p-10 shadow-[0_10px_50px_-20px_rgba(0,0,0,0.35)]">
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 mb-4">
                  <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-xs font-medium tracking-wide text-orange-600 dark:text-orange-400 uppercase">
                    End of Page
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  You made it to the end — thanks for stopping by.
                </h3>

                <p className="text-sm md:text-base leading-relaxed">
                  I appreciate you taking the time to explore my work. If you
                  have questions, want to collaborate, or just want to say hi,
                  feel free to reach out through any of the contact options
                  above. I’m always open to connecting with fellow developers,
                  teams, and people building interesting things.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="text-xs md:text-sm rounded-full border px-3 py-1">
                    Open to collaboration
                  </span>
                  <span className="text-xs md:text-sm rounded-full border px-3 py-1">
                    Freelance-friendly
                  </span>
                  <span className="text-xs md:text-sm rounded-full border px-3 py-1">
                    Let’s build something great
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <RecentGithubActivityWrapper>
        <RecentGithubActivity />
      </RecentGithubActivityWrapper>
    </>
  );
}
