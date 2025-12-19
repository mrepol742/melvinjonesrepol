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

export default function Home() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Melvin Jones Repol",
    url: "https://www.melvinjonesrepol.com",
    image: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.png",
    sameAs: [
      "https://www.facebook.com/melvinjonesrepol",
      "https://linkedin.com/in/mrepol742",
      "https://github.com/mrepol742",
      "https://wakatime.com/@mrepol742",
      "https://www.youtube.com/@mrepol742",
      "https://g.dev/mrepol742",
      "https://steamcommunity.com/id/mrepol742",
    ],
    jobTitle: "Freelance Software Engineer",
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
  };

  const updates = [
    {
      title: "Licenses Updates",
      description:
        "Axleshift Core 1 and Point of Sale System newer updates will be released under 'Polyform Noncommercial License 1.0.0' refer to the project LICENSE file for more information, any commits before this updates will be under its previous license 'MIT with common clause'.",
      featured: true,
    },
    {
      title: "Learning Rust",
      description:
        "I'm currently exploring Rust via PACT Advanced Rust Programming and Real World Applications via Coursera. You might see future projects of mine coded in Rust. Hope so...",
      repo: "https://github.com/mrepol742/learning_rust",
      featured: true,
      languages: ["Rust"],
    },
    {
      title: "Updates to Webvium Legals",
      description: "Please read the updated Privacy Policy & Terms of Service!",
      link: "/webvium-browser#legals",
      featured: true,
      languages: ["Java"],
    },
    {
      title: "Homepage Revamp & Ads",
      description:
        "Redesigned and modernized the homepage for a smoother user experience, a minor ad(s) view will be displayed on project section.",
      featured: true,
      languages: ["TypeScript"],
    },
    {
      title: "Webvium 3.0 is Here!",
      description:
        "Refractored, redesigned, and complete code overhaul. Bringing performance improvements, UI enchancements, features and much more.",
      link: "/webvium-browser",
      featured: true,
      languages: ["Java"],
    },
    {
      title: "Appstore",
      description:
        "Due to legals issues webvium is no longer available or up to date with Galaxy and Amazon Appstore. Webvium is available to download officially here and in Uptodown.com.",
      link: "https://webvium.en.uptodown.com/android",
      featured: true,
      languages: ["Java"],
    },
    {
      title: "Generate Portolio using Wakatime Data",
      description:
        "Easily build your own portfolio, flex your coding skills and easy to deploy. All you just need is Wakatime API Key.",
      link: "https://github.com/mrepol742/wakatime-profile",
      featured: true,
      languages: ["TypeScript"],
    },
    {
      title: "Deploy your own Shortlink App!",
      description: "Get your link, shorteeeeeen!",
      link: "https://github.com/mrepol742/shortlink-app",
      featured: true,
      languages: ["TypeScript"],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      <main className="p-3 md:p-8">
        <section>
          <div className="min-h-screen flex flex-col py-[-100] items-center justify-center text-center">
            <div className="mb-10 w-64 h-64 rounded-full bg-gradient-to-tr from-violet-500 via-yellow-300 to-green-400 animate-gradient-shift flex items-center justify-center bg-opacity-60 backdrop-blur-md hover:scale-98 transition-transform duration-300">
              <Image
                src="/images/melvinjonesrepol.transparent.png"
                alt="Hero Image"
                className="w-60 h-60 object-cover rounded-full border-4 border-white shadow-lg"
                width={240}
                height={240}
              />
            </div>
            <h1
              className="text-3xl md:text-5xl font-black mb-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Melvin Jones Repol
            </h1>
            <p
              className="max-w-lg text-xl mb-5"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              I specialize in building robust, scalable software solutions that
              solve real-world problems. With a passion for technology and a
              commitment to excellence, I bring ideas to life through code.
            </p>

            <div>
              <Link
                href="/contact-me"
                data-aos="fade-right"
                data-aos-delay="350"
              >
                <button
                  className="uppercase text-sm relative bg-orange-400 px-7 py-4 mt-3 font-semibold overflow-hidden shadow-none transition-transform duration-200 hover:translate-x-1 hover:translate-y-1
                  before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-full before:h-1 before:bg-orange-600 before:rounded-b-lg
                  after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-1 after:h-full after:bg-orange-600 after:rounded-r-lg"
                  style={{ boxShadow: "1px 1px 0 0 #ea580c" }}
                >
                  Hire me
                </button>
              </Link>
              <Link
                href="mailto:mrepol742@gmail.com"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <button
                  className="uppercase text-sm relative bg-gray-800 text-white px-7 py-4 mt-3 ml-3 font-semibold overflow-hidden shadow-none transition-transform duration-200 hover:translate-x-1 hover:translate-y-1
                  before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-900 before:rounded-b-lg
                  after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-1 after:h-full after:bg-gray-900 after:rounded-r-lg"
                  style={{ boxShadow: "1px 1px 0 0 #111827" }}
                >
                  mrepol742@gmail.com
                </button>
              </Link>
            </div>
          </div>

          <h4
            className="text-center text-3xl mb-4 text-amber-500"
            data-aos="fade-up"
          >
            New Updates
          </h4>
          <p
            className="text-center text-gray-400 max-w-2xl mx-auto mb-6"
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

          <h4
            className="text-center text-3xl mb-4 text-amber-500"
            data-aos="fade-up"
          >
            Featured Projects
          </h4>
          <p
            className="text-center text-gray-400 max-w-2xl mx-auto mb-6"
            data-aos="fade-up"
          >
            A curated selection of projects that best represent my skills and
            creativity. These are the ones I’m most proud of and actively
            showcase.
          </p>
          <ProjectSection />

          <h4
            className="text-center text-3xl mb-4 text-amber-500"
            data-aos="fade-up"
          >
            Programming Stats
          </h4>
          <p
            className="text-center text-gray-400 max-w-2xl mx-auto mb-6"
            data-aos="fade-up"
          >
            A snapshot of my coding activity across languages and tools. Tracked
            automatically to reflect real development time and habits.
          </p>
          <WakatimeSection />

          <h4
            className="text-center text-3xl mb-4 text-amber-500"
            data-aos="fade-up"
          >
            Most Played Games
          </h4>
          <p
            className="text-center text-gray-400 max-w-2xl mx-auto mb-6"
            data-aos="fade-up"
          >
            Games I’ve spent the most time playing and enjoying. A mix of
            favorites that reflect my taste and playstyle over time.
          </p>
          <SteamSection />

          <div className="block lg:flex flex-column gap-5">
            <FaceEyes />

            <div
              className=" bg-blue-400/10 rounded"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="p-5">
                <p className="text-lg">
                  I’m building{" "}
                  <span className="font-bold text-blue-600">Hall of Codes</span>{" "}
                  an open-source playground for developers, creatives, and
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
                  <button
                    className="text-sm relative bg-blue-400 px-7 py-4 mt-3 font-semibold overflow-hidden shadow-none transition-transform duration-200 hover:translate-x-1 hover:translate-y-1
                        before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-full before:h-1 before:bg-blue-600 before:rounded-b-lg
                        after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-1 after:h-full after:bg-blue-600 after:rounded-r-lg"
                    style={{ boxShadow: "1px 1px 0 0 #111827" }}
                  >
                    <FontAwesomeIcon
                      icon={faCode}
                      className="inline mr-2"
                      size="xl"
                    />
                    Explore Hall of Codes
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <NeofetchTerminal />

          <span className="ml-auto text-xs text-gray-400">
            Gaming activity data powered by Steam API.
          </span>
          <span className="block ml-auto text-xs text-gray-400">
            Coding activity data powered by{" "}
            <Link href="https://wakatime.com/@mrepol742">WakaTime</Link>.
          </span>
          <span className="ml-auto text-xs text-gray-400">
            All rights reserved. All trademarks are property of their respective
            owners in the US and other countries.
          </span>
        </section>
      </main>
    </>
  );
}
