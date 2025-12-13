import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGamepad } from "@fortawesome/free-solid-svg-icons";
import projects from "@/lib/projectList";
import ProjectCard from "@/components/ProjectCard";
import NeofetchTerminal from "@/components/Neofetch";
import FaceEyes from "@/components/FaceEyes";
import Services from "@/lib/serviceList";
import ServicesCarousel from "@/components/ServicesCarousel";
import { fetchSteamLibrary, GameType } from "@/lib/steam/library";
import SteamSection from "@/components/home/SteamSection";
import { WakatimeSection } from "@/components/home/WakatimeSection";

const skills = [
  "I apply engineering principles to design, develop, test, and maintain reliable software systems. My focus is on creating efficient solutions that meet customer needs, using modern tools and technologies to ensure software quality and performance.",
  "I build dynamic websites and web applications using technologies like HTML, CSS, JavaScript, PHP, MySQL, NodeJS, Firebase, and MongoDB. My experience covers both frontend and backend, enabling me to deliver complete, scalable web solutions.",
  "I optimize websites to improve their visibility in search engine results. My SEO process includes refining content, structure, and technical elements to drive organic traffic and enhance digital marketing efforts.",
  "I transform raw data into actionable insights to support decision-making. Using a range of tools and processes, I identify trends, solve problems, and deliver valuable information for business growth.",
  "I design and program embedded systems using Arduino, integrating hardware and software for IoT, robotics, and automation. My expertise includes selecting components, optimizing code, and troubleshooting hardware-software interactions.",
  "I assemble, configure, and repair computer systems, ensuring optimal performance and security. My skills include diagnosing issues, installing operating systems, and using software tools to maintain reliable hardware and software environments.",
];

const textColors = [
  "text-orange-600",
  "text-blue-600",
  "text-green-600",
  "text-purple-600",
  "text-yellow-600",
  "text-pink-600",
];

const backgroundColors = [
  "bg-orange-300/10",
  "bg-blue-300/10",
  "bg-green-300/10",
  "bg-purple-300/10",
  "bg-yellow-300/10",
  "bg-pink-300/10",
];

export default function Home() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Melvin Jones Repol",
    url: "https://www.melvinjonesrepol.com",
    image: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.png",
    sameAs: [
      "https://mrepol742.github.io",
      "https://mrepol742-read-cv.vercel.app",
      "https://mrepol742.vercel.app",
      "https://mrepol742.netlify.app",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
            {projects
              .filter((project) => project.featured)
              .map((project, idx) => (
                <div key={idx} data-aos="fade-up">
                  <ProjectCard {...project} />
                </div>
              ))}
          </div>

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

          {/*

          <ServicesCarousel Services={Services} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  textColors[index % textColors.length]
                } ${
                  backgroundColors[index % backgroundColors.length]
                } backdrop-blur`}
                data-aos="fade-up"
              >
                <p className="text-lg">{skill}</p>
              </div>
            ))}
          </div>

          <div className="bg-green-300/10 rounded block lg:flex flex-column mt-12">
            <div>
              <FaceEyes />
            </div>
            <div>
              <div className="text-3xl p-5" data-aos="fade-up">
                <h4>
                  I take{" "}
                  <span className="font-bold text-green-300">action</span>. I
                  embrace <span className="underline">failure</span>. I grow{" "}
                  <b>wiser</b>.
                </h4>
              </div>

              <div className="p-5">
                <h4 className="leading-relaxed" data-aos="fade-right">
                  Every build I undertake is guided by a few core principles:
                </h4>
                <ul className="list-disc list-inside my-3 text-left">
                  <li data-aos="fade-right" data-aos-delay="100">
                    <strong>KISS</strong> — Keep It Simple, Stupid.
                  </li>
                  <li data-aos="fade-right" data-aos-delay="200">
                    <strong>YAGNI</strong> — You Aren&apos;t Gonna Need It.
                  </li>
                  <li data-aos="fade-right" data-aos-delay="300">
                    <strong>DRY</strong> — Don&apos;t Repeat Yourself.
                  </li>
                </ul>
                <h4
                  className="leading-relaxed mt-3"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  If you are able to clearly write down your problem, then it is
                  already half solved.
                  <br />
                  <em>— Kidlin&apos;s Law</em>
                </h4>
              </div>
            </div>
          </div>*/}

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
