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
        <article
          key={index}
          data-aos="fade-up"
          data-aos-delay={100 * (index + 1)}
        >
          <div className="h-full rounded-2xl border border-zinc-800 p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
            <h3 className="text-xs uppercase tracking-wide">{item.title}</h3>
            <ScrambleText
              as="p"
              text={item.description}
              durationMs={2000}
              className="mt-2 text-sm"
            />
          </div>
        </article>
      ))}
    </div>
  );
}
