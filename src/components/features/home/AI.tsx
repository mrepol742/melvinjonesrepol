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
        <div
          key={index}
          className="w-full md:max-w-md md:mx-auto rounded-2xl border border-zinc-800 p-5 md:p-6 bg-zinc-900/40 backdrop-blur"
          data-aos="fade-up"
          data-aos-delay={100 * (index + 1)}
        >
          <ScrambleText
            as="h3"
            text={item.title}
            durationMs={5000}
            className="font-semibold mb-2"
          />
          <ScrambleText
            as="p"
            text={item.description}
            durationMs={2000}
            className="text-sm"
          />
        </div>
      ))}
    </div>
  );
}
