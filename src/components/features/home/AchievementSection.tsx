type Achievement = {
  title: string;
  summary: string;
  impact: string;
};

const achievements: Achievement[] = [
  {
    title: "Capstone Delivery Enablement",
    summary:
      "Guided student capstone teams from proposal alignment through final revisions, helping ensure scope clarity and on-time submissions before strict deadlines.",
    impact:
      "Improved submission readiness, reduced last-minute rework, and increased confidence during evaluation cycles.",
  },
  {
    title: "Platform Modernization & Performance Optimization",
    summary:
      "Helped transform a legacy web platform into a modern architecture with stronger maintainability, better runtime efficiency, and room for feature expansion.",
    impact:
      "Significantly improved performance, lowered operational costs, and unlocked faster delivery of new capabilities.",
  },
  {
    title: "Infrastructure Migration & Hosting Transition",
    summary:
      "Led migration of production workloads to a new hosting environment with careful planning, environment parity checks, and rollout validation.",
    impact:
      "Reduced deployment risk, improved reliability, and established a cleaner path for scaling and maintenance.",
  },
  {
    title: "Subscription Product Enablement",
    summary:
      "Contributed to the design and implementation of a new subscription-based service flow, covering user lifecycle touchpoints and billing-ready foundations.",
    impact:
      "Opened a recurring-revenue channel and improved long-term product sustainability.",
  },
  {
    title: "Delivered an Idea to Production",
    summary:
      "Took a project from concept through development and deployment, navigating technical challenges and ensuring alignment with user needs.",
    impact:
      "Successfully launched a new feature that enhanced user engagement and provided valuable feedback for future iterations.",
  },
  {
    title: "Project Leadership & Team Collaboration",
    summary:
      "Led a cross-functional team through a complex project, fostering collaboration, managing timelines, and ensuring clear communication.",
    impact:
      "Delivered the project on time and within scope while maintaining high team morale and stakeholder satisfaction.",
  }
];

const deliveryStandards = [
  "SDLC-aligned planning, implementation, testing, and release cycles",
  "CI/CD pipelines for consistent build, test, and deployment automation",
  "Secrets and leak detection checks (e.g., GitLeaks/GitGuardian workflows)",
  "Security and quality gates before merge and production rollout",
];

export default function AchievementSection() {
  return (
    <section className="w-full space-y-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 rounded-2xl border p-4 md:p-5">
          <p className="text-xs uppercase tracking-wider mb-2">
            Delivery Framework
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {deliveryStandards.map((item) => (
              <li key={item} className="text-sm flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full border shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {achievements.map((item, index) => (
            <article
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="group relative overflow-hidden rounded-2xl border p-5 md:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <h3 className="text-base md:text-lg font-semibold leading-snug mb-2">
                {item.title}
              </h3>

              <p className="text-sm md:text-[15px] leading-relaxed">
                {item.summary}
              </p>

              <div className="mt-4 rounded-xl border p-3">
                <p className="text-xs uppercase tracking-wide mb-1">Outcome</p>
                <p className="text-sm">{item.impact}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
