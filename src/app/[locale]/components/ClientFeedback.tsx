type Outcome = {
  title: string;
  situation: string;
  action: string;
  result: string;
  metric?: string;
};

const outcomes: Outcome[] = [
  {
    title: "Cut delivery time on a critical release",
    situation:
      "A product team was missing deadlines due to unclear scope and late QA cycles.",
    action:
      "Introduced milestone-based delivery, tighter acceptance criteria, and CI/CD checks.",
    result:
      "Releases became predictable with fewer regressions and smoother handoffs.",
    metric: "Cycle time reduced by ~30%",
  },
  {
    title: "Modernized a legacy platform for stability",
    situation:
      "A web platform struggled with slow performance and brittle deployments.",
    action:
      "Refactored key modules, improved observability, and reduced deployment risk.",
    result:
      "Improved uptime and unlocked faster feature delivery.",
    metric: "Performance improved by ~40%",
  },
  {
    title: "Migrated infrastructure with zero downtime",
    situation:
      "Production workloads needed a hosting transition without service interruption.",
    action:
      "Designed phased migration, environment parity checks, and rollback playbooks.",
    result:
      "Smooth transition with minimal risk and improved reliability.",
    metric: "0 critical incidents during cutover",
  },
  {
    title: "Enabled a subscription revenue stream",
    situation:
      "A product needed billing and lifecycle flows for recurring revenue.",
    action:
      "Designed subscription flow, billing‑ready data model, and onboarding funnels.",
    result:
      "Monetization path launched with clear user lifecycle tracking.",
    metric: "Recurring revenue channel activated",
  },
  {
    title: "Delivered an idea into production",
    situation:
      "A concept needed validation with real users under tight timelines.",
    action:
      "Shipped MVP fast, iterated with user feedback, and stabilized the release.",
    result:
      "The product moved from concept to measurable user engagement.",
    metric: "MVP shipped in weeks, not months",
  },
  {
    title: "Led cross‑functional project execution",
    situation:
      "Multiple stakeholders needed alignment on scope, timing, and deliverables.",
    action:
      "Managed priorities, clarified requirements, and coordinated delivery.",
    result:
      "Project shipped on time with stakeholder satisfaction.",
    metric: "On‑time delivery with clear scope",
  },
];

const deliverySignals = [
  "Outcome‑driven planning with measurable checkpoints",
  "Risk‑managed releases and rollback strategies",
  "Automated testing and CI/CD for predictable deployments",
  "Security and quality gates before production rollout",
];

export default function ClientFeedback() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6">
        <aside className="lg:col-span-4">
          <div className="rounded-2xl border border-zinc-800 p-5 sticky top-24">
            <p className="text-xs uppercase tracking-wider mb-3">
              Delivery Signals
            </p>
            <ul className="space-y-3">
              {deliverySignals.map((item) => (
                <li key={item} className="text-sm flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full border border-zinc-800 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="lg:col-span-8">
          <ol className="relative space-y-6 border-l border-zinc-800 pl-6">
            {outcomes.map((item, index) => (
              <li
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
                className="relative"
              >
                <span className="absolute -left-[30px] top-2 h-3 w-3 rounded-full bg-zinc-800" />

                <div className="rounded-2xl border border-zinc-800 p-5 md:p-6">
                  <div className="block md:flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-base md:text-lg font-semibold leading-snug">
                      {item.title}
                    </h3>
                    {item.metric && (
                      <span className="text-xs rounded-full border border-zinc-800 px-2 py-0.5 text-nowrap">
                        {item.metric}
                      </span>
                    )}
                  </div>

                  <div className="grid gap-3 text-sm md:text-[15px] leading-relaxed">
                    <p>
                      <span className="text-xs uppercase tracking-wide block mb-1">
                        Situation
                      </span>
                      {item.situation}
                    </p>
                    <p>
                      <span className="text-xs uppercase tracking-wide block mb-1">
                        Action
                      </span>
                      {item.action}
                    </p>
                    <p>
                      <span className="text-xs uppercase tracking-wide block mb-1">
                        Result
                      </span>
                      {item.result}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
