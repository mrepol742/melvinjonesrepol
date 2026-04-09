import ScrambleText from "@/components/ui/ScrambleText";

const ai = [
  {
    title: "AI-Assisted Commit Generation",
    description:
      "I use AI to generate commit messages with concise but detailed context, making history easier to review and audit.",
  },
  {
    title: "LSP + Generative Code Analysis",
    description:
      "Beyond traditional static diagnostics from LSPs, I combine tooling with generative and predictive analysis to get deeper insights and suggestions on code quality, architecture, and potential issues.",
  },
  {
    title: "LLM-Powered Ideation & Research",
    description:
      "I use multiple LLMs to brainstorm features, compare implementation strategies, and accelerate prototyping.",
  },
  {
    title: "Human-in-the-Loop Review",
    description:
      "AI suggestions are reviewed and validated before merge to keep output aligned with project standards, reliability, and intent.",
  },
];

export default function AI() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {ai.map((item, index) => (
        <article
          key={index}
          className="rounded-2xl border p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
          data-aos="fade-up"
          data-aos-delay={100 * (index + 1)}
        >
          <h3 className="text-xs uppercase tracking-wide">{item.title}</h3>
          <ScrambleText
            as="p"
            text={item.description}
            durationMs={2000}
            className="mt-2 text-sm"
          />
        </article>
      ))}
    </div>
  );
}
