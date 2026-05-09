import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teams - Melvin Jones Repol",
  description:
    "Meet the team behind our projects and learn about their roles and expertise in software development, design, and marketing.",
  keywords: [
    "My Team",
    "Melvin Jones Repol",
    "Team Members",
    "Software Development Team",
    "Web Development Team",
    "Full-Stack Development Team",
    "DevOps Team",
    "Freelance Team",
    "Professional Team",
    "Team Collaboration",
    "Teamwork",
    "Software Engineers",
    "Developers",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/teams",
  },
  openGraph: {
    title: "Teams - Melvin Jones Repol",
    description:
      "Meet the team behind our projects and learn about their roles and expertise in software development, design, and marketing.",
    url: "https://www.melvinjonesrepol.com/teams",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
        width: 1200,
        height: 630,
        alt: "Teams Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teams - Melvin Jones Repol",
    description:
      "Meet the team behind our projects and learn about their roles and expertise in software development, design, and marketing.",
    images: [
      "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
    ],
    creator: "@mrepol742",
  },
};

const TEAM_DATA = [
  {
    name: "Melvin",
    title: "Lead Designer",
    description:
      "Creative designer responsible for crafting intuitive and visually engaging user interfaces.",
    color: "bg-red-500",
    delay: "200",
  },
  {
    name: "Jones",
    title: "Lead Marketer",
    description:
      "Digital marketing specialist focused on growth strategies and audience engagement.",
    color: "bg-yellow-500",
    delay: "300",
  },
  {
    name: "Gallano",
    title: "Lead DevOps Engineer",
    description:
      "DevOps engineer ensuring smooth deployment pipelines and scalable infrastructure.",
    color: "bg-green-500",
    delay: "350",
  },
  {
    name: "Repol",
    title: "Lead Developer",
    description:
      "Full-stack developer building scalable web applications and backend systems.",
    color: "bg-blue-500",
    delay: "400",
  },
];

export default function MyTeam() {
  return (
    <main className="my-18 p-3 md:p-8">
      <section>
        <h1 className="text-center text-2xl font-semibold" data-aos="fade-up">
          Meet the Team Behind Our Projects
        </h1>
        <p className="text-center mt-2" data-aos="fade-up" data-aos-delay="100">
          Meet the people responsible for designing, marketing, and developing
          our projects. This small but passionate team focuses on building
          creative digital experiences and modern web applications.
        </p>

        <div className="max-w-4xl mx-auto mt-16 relative">
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-1 border-3 transform md:-translate-x-1/2 rounded-full z-0"></div>

          <div className="space-y-16">
            {TEAM_DATA.map((member, index) => {
              const isEven = index % 2 === 0;

              return (
                <article
                  key={member.name}
                  itemScope
                  itemType="https://schema.org/Person"
                  className="relative flex flex-col md:flex-row items-center w-full"
                  data-aos="fade-up"
                  data-aos-delay={member.delay}
                >
                  <div
                    className={`absolute left-8 md:left-1/2 w-16 h-16 rounded-2xl md:rounded-full rotate-3 md:rotate-0 border-4 ${member.color} transform -translate-x-1/2 flex items-center justify-center z-10 shadow-lg transition-transform hover:scale-110 hover:rotate-6`}
                  >
                    <span className="text-white font-black text-2xl drop-shadow-sm">
                      {member.name.charAt(0)}
                    </span>
                  </div>

                  <div
                    className={`ml-20 md:ml-0 w-[calc(100%-5rem)] md:w-1/2 ${
                      isEven
                        ? "md:pr-16 md:text-right"
                        : "md:pl-16 md:ml-auto md:text-left"
                    }`}
                  >
                    <div className="group relative p-6 md:p-8 border rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]">
                      <h2
                        className="text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-400 transition-colors"
                        itemProp="name"
                      >
                        {member.name}
                      </h2>
                      <p
                        className="text-sm font-bold mt-1 uppercase tracking-widest"
                        itemProp="jobTitle"
                      >
                        {member.title}
                      </p>
                      <p
                        className="mt-4 leading-relaxed"
                        itemProp="description"
                      >
                        {member.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
