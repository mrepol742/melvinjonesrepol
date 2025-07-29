import Image from "next/image";
import Link from "next/link";

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

export default function Home() {
  return (
    <main className="p-8">
      <section>
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:justify-between gap-8">
          <div className="flex-1">
            <h1
              className="text-4xl font-bold"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Hi, I&apos;m Melvin Jones Repol
            </h1>
            <p
              className="text-gray-500"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Freelance Software Engineer
            </p>
            <p
              className="mt-4 max-w-2xl text-gray-500"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              I&apos;m a Freelance Software Engineer specializing in full-stack
              web development, SEO, data analytics, embedded systems with
              Arduino programming, hardware and software troubleshooting, and
              building progressive web applications.
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
                <span className="text-gray-600">Years Experience</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-green-600">
                  82+
                </span>
                <span className="text-gray-600">Projects</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-purple-600">
                  15+
                </span>
                <span className="text-gray-600">Happy Clients</span>
              </div>
            </div>
          </div>
          <div
            className="flex-shrink-0 mb-6 md:mb-0 md:ml-8"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-violet-500 via-yellow-300 to-green-400 animate-gradient-shift flex items-center justify-center bg-opacity-60 backdrop-blur-md">
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

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, idx) => {
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
            const layouts = [
              "flex-col",
              "flex-col-reverse",
              "flex-row gap-5",
              "flex-row-reverse gap-5",
            ];

            const bg = bgGradients[idx % bgGradients.length];
            const textColor = textColors[idx % textColors.length];
            const layout = layouts[idx % layouts.length];

            return (
              <div
                key={skill.title}
                className={`bg-black/70 backdrop-blur rounded-xl shadow p-6 flex ${layout} h-full relative overflow-hidden`}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-full ${bg} pointer-events-none`}
                />
                <h3
                  className={`text-xl font-semibold mb-2 ${textColor} relative z-10`}
                >
                  {skill.title}
                </h3>
                <p className="text-white-700 mb-2 relative z-10">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
