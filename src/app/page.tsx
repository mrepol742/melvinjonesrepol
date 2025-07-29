import Image from "next/image";
import Link from "next/link";

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
          {/* Software Engineering */}
          <div
            className="bg-black/70 backdrop-blur rounded-xl shadow p-6 flex flex-col h-full"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h3 className="text-xl font-semibold mb-2 text-orange-600">
              Software Engineering
            </h3>
            <p className="text-white-700 mb-2">
              I apply engineering principles to design, develop, test, and
              maintain reliable software systems. My focus is on creating
              efficient solutions that meet customer needs, using modern tools
              and technologies to ensure software quality and performance.
            </p>
          </div>
          {/* Full Stack Web Development */}
          <div
            className="bg-black/70 backdrop-blur rounded-xl shadow p-6 flex flex-col h-full"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Full Stack Web Development
            </h3>
            <p className="text-white-700 mb-2">
              I build dynamic websites and web applications using technologies
              like HTML, CSS, JavaScript, PHP, MySQL, NodeJS, Firebase, and
              MongoDB. My experience covers both frontend and backend, enabling
              me to deliver complete, scalable web solutions.
            </p>
          </div>
          {/* Search Engine Optimization */}
          <div
            className="bg-black/70 backdrop-blur rounded-xl shadow p-6 flex flex-col h-full"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <h3 className="text-xl font-semibold mb-2 text-green-600">
              Search Engine Optimization (SEO)
            </h3>
            <p className="text-white-700 mb-2">
              I optimize websites to improve their visibility in search engine
              results. My SEO process includes refining content, structure, and
              technical elements to drive organic traffic and enhance digital
              marketing efforts.
            </p>
          </div>
          {/* Data Analytics */}
          <div
            className="bg-black/70 backdrop-blur rounded-xl shadow p-6 flex flex-col h-full"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <h3 className="text-xl font-semibold mb-2 text-purple-600">
              Data Analytics
            </h3>
            <p className="text-white-700 mb-2">
              I transform raw data into actionable insights to support
              decision-making. Using a range of tools and processes, I identify
              trends, solve problems, and deliver valuable information for
              business growth.
            </p>
          </div>
          {/* Embedded System Design with Arduino */}
          <div
            className="bg-black/70 backdrop-blur rounded-xl shadow p-6 flex flex-col h-full"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <h3 className="text-xl font-semibold mb-2 text-yellow-600">
              Embedded System Design (Arduino)
            </h3>
            <p className="text-white-700 mb-2">
              I design and program embedded systems using Arduino, integrating
              hardware and software for IoT, robotics, and automation. My
              expertise includes selecting components, optimizing code, and
              troubleshooting hardware-software interactions.
            </p>
          </div>
          {/* Hardware and Software Troubleshooting */}
          <div
            className="bg-black/70 backdrop-blur rounded-xl shadow p-6 flex flex-col h-full"
            data-aos="fade-up"
            data-aos-delay="1100"
          >
            <h3 className="text-xl font-semibold mb-2 text-white-800">
              Hardware &amp; Software Troubleshooting
            </h3>
            <p className="text-white-700 mb-2">
              I assemble, configure, and repair computer systems, ensuring
              optimal performance and security. My skills include diagnosing
              issues, installing operating systems, and using software tools to
              maintain reliable hardware and software environments.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
