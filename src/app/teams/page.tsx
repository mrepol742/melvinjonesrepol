import TeamCard from "../../components/features/teams/TeamCard";
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <article itemScope itemType="https://schema.org/Person">
            <TeamCard
              name="Melvin"
              title="Lead Designer"
              description="Creative designer responsible for crafting intuitive and visually engaging user interfaces."
              backgroundColor="bg-red-500"
            />
          </article>

          <article itemScope itemType="https://schema.org/Person">
            <TeamCard
              name="Jones"
              title="Lead Marketer"
              description="Digital marketing specialist focused on growth strategies and audience engagement."
              backgroundColor="bg-yellow-500"
            />
          </article>

          <article itemScope itemType="https://schema.org/Person">
            <TeamCard
              name="Repol"
              title="Lead Developer"
              description="Full-stack developer building scalable web applications and backend systems."
              backgroundColor="bg-blue-500"
            />
          </article>
        </div>
      </section>
    </main>
  );
}
