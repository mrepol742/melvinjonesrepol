import Card from "@/components/ui/Card";
import ScrambleText from "@/components/ui/ScrambleText";
import { getTranslations } from "next-intl/server";

export default async function AI() {
  const t = await getTranslations("ai_development");

  const ai = Array.from({ length: 4 }, (_, i) => ({
    title: t(`item_${i}_title` as any),
    description: t(`item_${i}_description` as any),
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {ai.map((item, index) => (
        <Card key={index} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
          <ScrambleText
            as="p"
            text={item.description}
            durationMs={2000}
            className="mb-2 text-sm"
          />

          <h3 className="text-xs uppercase tracking-wide text-zinc-400">
            {item.title}
          </h3>
        </Card>
      ))}
    </div>
  );
}
