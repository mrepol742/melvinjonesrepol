import Card from "@/components/ui/Card";
import { getTranslations } from "next-intl/server";

export default async function EngineeringPhilosophySection() {
  const t = await getTranslations("engineering_philosophy");

  const principles = [
    {
      kicker: "01",
      title: t("performance_title"),
      description: t("performance_description"),
      points: [
        t("performance_point_1"),
        t("performance_point_2"),
        t("performance_point_3"),
      ],
    },
    {
      kicker: "02",
      title: t("security_title"),
      description: t("security_description"),
      points: [
        t("security_point_1"),
        t("security_point_2"),
        t("security_point_3"),
      ],
    },
    {
      kicker: "03",
      title: t("revenue_title"),
      description: t("revenue_description"),
      points: [
        t("revenue_point_1"),
        t("revenue_point_2"),
        t("revenue_point_3"),
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative" data-aos="fade-up">
        <div className="relative grid gap-8 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em]">
              {t("kicker")}
            </p>

            <h3 className="mt-3 max-w-2xl text-2xl font-bold leading-tight md:text-4xl">
              {t("title")}
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7">
              {t("description")}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Card>
                <p className="text-[11px] uppercase tracking-[0.24em]">
                  {t("core_label")}
                </p>
                <p className="mt-2 text-sm font-semibold">{t("core_value")}</p>
              </Card>

              <Card>
                <p className="text-[11px] uppercase tracking-[0.24em]">
                  {t("compliance_label")}
                </p>
                <p className="mt-2 text-sm font-semibold">
                  {t("compliance_value")}
                </p>
              </Card>

              <Card>
                <p className="text-[11px] uppercase tracking-[0.24em]">
                  {t("impact_label")}
                </p>
                <p className="mt-2 text-sm font-semibold">
                  {t("impact_value")}
                </p>
              </Card>
            </div>
          </div>

          <div className="space-y-4">
            {principles.map((item, index) => (
              <Card
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={120 * (index + 1)}
              >
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-lg font-semibold md:text-xl">
                    {item.title}
                  </h4>

                  <span className="text-xs font-semibold tracking-[0.24em]">
                    {item.kicker}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-7">{item.description}</p>

                <ul className="mt-4 space-y-2 text-sm">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
