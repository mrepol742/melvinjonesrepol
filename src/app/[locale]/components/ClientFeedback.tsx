import { getTranslations } from "next-intl/server";

type Outcome = {
  title: string;
  situation: string;
  action: string;
  result: string;
  metric?: string;
};

export default async function ClientFeedback() {
  const t = await getTranslations("client_feedback");

  const outcomes: Outcome[] = Array.from({ length: 6 }, (_, i) => ({
    title: t(`outcome_${i}_title` as any),
    situation: t(`outcome_${i}_situation` as any),
    action: t(`outcome_${i}_action` as any),
    result: t(`outcome_${i}_result` as any),
    metric: t(`outcome_${i}_metric` as any),
  }));

  const deliverySignals = Array.from({ length: 4 }, (_, i) =>
    t(`signal_${i}` as any),
  );

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6">
        <aside className="lg:col-span-4">
          <div className="rounded-2xl border border-zinc-800 p-5 sticky top-24">
            <p className="text-xs uppercase tracking-wider mb-3">
              {t("section_label")}
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
                        {t("situation_label")}
                      </span>
                      {item.situation}
                    </p>
                    <p>
                      <span className="text-xs uppercase tracking-wide block mb-1">
                        {t("action_label")}
                      </span>
                      {item.action}
                    </p>
                    <p>
                      <span className="text-xs uppercase tracking-wide block mb-1">
                        {t("result_label")}
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
