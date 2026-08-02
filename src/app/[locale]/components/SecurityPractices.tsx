import Card from "@/components/ui/Card";
import ScrambleText from "@/components/ui/ScrambleText";
import { getTranslations } from "next-intl/server";

const commentsMap: Record<number, string | undefined> = {
  0: "A21EA0FCEE0273A8",
  1: "Actions",
  2: "Dependabot",
  3: "GitGuardian",
  4: "CI/CD Pipeline",
};

export default async function SecurityPractices() {
  const t = await getTranslations("security_practices");

  const securityPractices = Array.from({ length: 9 }, (_, i) => ({
    title: t(`item_${i}_title` as any),
    description: t(`item_${i}_description` as any),
    comments: commentsMap[i],
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {securityPractices.map((practice, index) => (
        <Card
          key={index}
          data-aos="fade-up"
          data-aos-delay={100 * (index + 1)}
          subtitle={practice.comments}
        >
          <ScrambleText
            as="p"
            text={practice.description}
            durationMs={2000}
            className="mb-2 text-sm"
          />

          <h3 className="text-xs uppercase tracking-wide text-zinc-400">{practice.title}</h3>
        </Card>
      ))}
    </div>
  );
}
