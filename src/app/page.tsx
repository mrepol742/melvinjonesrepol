import Image from "next/image";
import Link from "next/link";
import SkillCard from "@/components/SkillCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

const skills = [
  {
    title: "Software Engineering",
    description:
      "I apply engineering principles to design, develop, test, and maintain reliable software systems. My focus is on creating efficient solutions that meet customer needs, using modern tools and technologies to ensure software quality and performance.",
  },
  {
    title: "Full Stack Web Development",
    description:
      "I build dynamic websites and web applications using technologies like HTML, CSS, JavaScript, PHP, MySQL, NodeJS, Firebase, and MongoDB. My experience covers both frontend and backend, enabling me to deliver complete, scalable web solutions.",
  },
  {
    title: "Search Engine Optimization",
    description:
      "I optimize websites to improve their visibility in search engine results. My SEO process includes refining content, structure, and technical elements to drive organic traffic and enhance digital marketing efforts.",
  },
  {
    title: "Data Analytics",
    description:
      "I transform raw data into actionable insights to support decision-making. Using a range of tools and processes, I identify trends, solve problems, and deliver valuable information for business growth.",
  },
  {
    title: "Embedded System Design (Arduino)",
    description:
      "I design and program embedded systems using Arduino, integrating hardware and software for IoT, robotics, and automation. My expertise includes selecting components, optimizing code, and troubleshooting hardware-software interactions.",
  },
  {
    title: "Hardware & Software Troubleshooting",
    description:
      "I assemble, configure, and repair computer systems, ensuring optimal performance and security. My skills include diagnosing issues, installing operating systems, and using software tools to maintain reliable hardware and software environments.",
  },
];

const bgGradients = [
  "bg-gradient-to-tr from-orange-500/40 to-yellow-300/30",
  "bg-gradient-to-br from-blue-600/30 to-purple-400/30",
  "bg-gradient-to-tl from-green-500/30 to-lime-300/30",
  "bg-gradient-to-r from-pink-500/30 to-red-400/30",
  "bg-gradient-to-bl from-violet-500/30 to-indigo-300/30",
  "bg-gradient-to-tr from-yellow-500/30 to-orange-300/30",
];

const textColors = [
  "text-orange-600",
  "text-blue-600",
  "text-green-600",
  "text-purple-600",
  "text-yellow-600",
  "text-pink-600",
];

export default function Home() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Melvin Jones Repol",
    url: "https://www.melvinjonesrepol.com",
    image: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.png",
    sameAs: [
      "https://facebook.com/melvinjonesrepol",
      "https://linkedin.com/in/mrepol742/",
      "https://github.com/mrepol742",
      "https://mrepol742.github.io",
      "https://mrepol742-read-cv.vercel.app",
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
    name: "Melvin Jones Repol",
    url: "https://www.melvinjonesrepol.com",
  };

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
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:justify-between gap-8">
            <div className="flex-1">
              <h1
                className="text-4xl font-bold"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Hi, I&apos;m Melvin Jones Gallano Repol
              </h1>
              <p data-aos="fade-up" data-aos-delay="200">
                Freelance Software Engineer | DevOps
              </p>
              <p
                className="mt-4 max-w-2xl"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                I&apos;m a Freelance Software Engineer specializing in
                full-stack web development, SEO, data analytics, embedded
                systems with Arduino programming, hardware and software
                troubleshooting, and building progressive web applications.
              </p>

              <div>
                <Link
                  href="/contact-me"
                  data-aos="fade-right"
                  data-aos-delay="350"
                >
                  <button
                    className="text-sm relative bg-orange-400 px-7 py-4 mt-3 font-semibold overflow-hidden shadow-none transition-transform duration-200 hover:translate-x-1 hover:translate-y-1
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
                    className="text-sm relative bg-gray-800 text-white px-7 py-4 mt-3 ml-3 font-semibold overflow-hidden shadow-none transition-transform duration-200 hover:translate-x-1 hover:translate-y-1
                  before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-900 before:rounded-b-lg
                  after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-1 after:h-full after:bg-gray-900 after:rounded-r-lg"
                    style={{ boxShadow: "1px 1px 0 0 #111827" }}
                  >
                    mrepol742@gmail.com
                  </button>
                </Link>
              </div>

              <div
                className="mt-8 flex gap-8 justify-center md:justify-start"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="text-center">
                  <span className="block text-3xl font-bold text-blue-600">
                    5+
                  </span>
                  <span>Years Experience</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-green-600">
                    82+
                  </span>
                  <span>Projects</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-purple-600">
                    15+
                  </span>
                  <span>Happy Clients</span>
                </div>
              </div>
            </div>
            <div
              className="flex-shrink-0 mb-6 md:mb-0 md:ml-8"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-violet-500 via-yellow-300 to-green-400 animate-gradient-shift flex items-center justify-center bg-opacity-60 backdrop-blur-md hover:scale-98 transition-transform duration-300">
                <Image
                  src="/images/melvinjonesrepol.transparent.png"
                  alt="Hero Image"
                  className="w-60 h-60 object-cover rounded-full border-4 border-white shadow-lg"
                  width={240}
                  height={240}
                />
              </div>
            </div>
          </div>

          <div className="mt-16 relative flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {skills.map((skill, idx) => {
                const bg = bgGradients[idx % bgGradients.length];
                const textColor = textColors[idx % textColors.length];

                return (
                  <SkillCard
                    key={idx + 1}
                    loc={idx + 1}
                    title={skill.title}
                    description={skill.description}
                    bg={bg}
                    textColor={textColor}
                  />
                );
              })}
            </div>
          </div>

          <div className="mt-16">
            <h2
              className="text-2xl font-semibold"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              My Gaming Activities
            </h2>
            <p data-aos="fade-up" data-aos-delay="200">
              I also enjoy gaming and often share my gaming activities. Check
              out my latest games and achievements.
            </p>
            <Link href="/gaming" data-aos="fade-up" data-aos-delay="300">
              <button
                className="text-sm relative bg-orange-400 px-7 py-4 mt-3 font-semibold overflow-hidden shadow-none transition-transform duration-200 hover:translate-x-1 hover:translate-y-1
                  before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-full before:h-1 before:bg-orange-600 before:rounded-b-lg
                  after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-1 after:h-full after:bg-orange-600 after:rounded-r-lg"
                style={{ boxShadow: "1px 1px 0 0 #ea580c" }}
              >
                <FontAwesomeIcon
                  icon={faGamepad}
                  className="inline mr-2"
                  size="xl"
                />
                View Gaming Activities
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
