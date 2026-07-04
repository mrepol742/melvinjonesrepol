import ScrambleText from "@/components/ui/ScrambleText";
import { getTranslations } from "next-intl/server";

const commentsMap: Record<number, string | undefined> = {
  0: "GPG KEY ID: A21EA0FCEE0273A8",
  1: "Github Actions",
  2: "GitHub Dependabot",
  3: "GitGuardian",
  4: "CI/CD Pipeline",
  6: "https://securityheaders.com/?q=melvinjonesrepol.com&followRedirects=on",
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
        <article
          key={index}
          data-aos="fade-up"
          data-aos-delay={100 * (index + 1)}
        >
          <div className="h-full rounded-2xl border border-zinc-800 p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
            <h3 className="text-xs uppercase tracking-wide">
              {practice.title}
            </h3>
            <ScrambleText
              as="p"
              text={practice.description}
              durationMs={2000}
              className="mt-2 text-sm"
            />
            {practice.comments && (
              <p className="mt-2 text-xs text-zinc-400">{practice.comments}</p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
