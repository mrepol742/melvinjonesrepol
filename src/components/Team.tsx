import TeamCard from "./layouts/TeamCard";

export default function Team() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold">My Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <TeamCard
          title="Melvin"
          description="Lead Designer"
          backgroundColor="bg-red-500"
        />
        <TeamCard
          title="Jones"
          description="Lead Marketer"
          backgroundColor="bg-yellow-500"
        />
        <TeamCard
          title="Repol"
          description="Lead Developer"
          backgroundColor="bg-blue-500"
        />
      </div>
    </section>
  );
}