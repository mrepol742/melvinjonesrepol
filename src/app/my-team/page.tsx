import TeamCard from "../../components/TeamCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Team - Melvin Jones Repol",
  description: "Here are the amazing people I work with.",
};

export default function MyTeam() {
  return (
    <main className="p-8">
      <section>
        <h1 className="text-center text-2xl font-semibold" data-aos="fade-up">
          My Team
        </h1>
        <p className="text-center text-gray-500" data-aos="fade-up" data-aos-delay="100">
          Here are the amazing people I work with.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <TeamCard
            title="Melvin"
            description="Lead Designer"
            backgroundColor="bg-red-500"
            delay={0}
          />
          <TeamCard
            title="Jones"
            description="Lead Marketer"
            backgroundColor="bg-yellow-500"
            delay={300}
          />
          <TeamCard
            title="Repol"
            description="Lead Developer"
            backgroundColor="bg-blue-500"
            delay={600}
          />
        </div>
      </section>
    </main>
  );
}
