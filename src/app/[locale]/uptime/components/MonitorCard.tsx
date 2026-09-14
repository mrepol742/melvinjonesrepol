"use client";

import {
  faCircleCheck,
  faTriangleExclamation,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import { Monitor } from "./SystemStatus";
import Card from "@/components/ui/Card";

export default function MonitorCard({
  monitor,
  index,
}: {
  monitor: Monitor;
  index: number;
}) {
  const t = useTranslations("uptime");

  return (
    <Card className="group" index={index}>
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-xl font-semibold">{monitor.name}</h3>

          <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">{monitor.type}</p>
        </div>

        <div>
          {monitor.statusClass === "success" ? (
            <span className="inline-flex items-center gap-2 border border-orange-600/30 bg-orange-500/10 px-3 py-2 text-sm font-semibold text-orange-700 dark:text-orange-300">
              <FontAwesomeIcon icon={faCircleCheck} />
              {t("status_operational")}
            </span>
          ) : (
            <span className="inline-flex items-center gap-2 border border-orange-700 bg-orange-600 px-3 py-2 text-sm font-semibold text-orange-50">
              <FontAwesomeIcon icon={faTriangleExclamation} />
              {t("status_incident")}
            </span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        <div>
          <p className="text-xs text-stone-500 dark:text-stone-400">{t("current_uptime")}</p>

          <p className="text-2xl font-bold">{monitor.ratio.ratio}%</p>
        </div>

        <div>
          <p className="text-xs text-stone-500 dark:text-stone-400">{t("days_30")}</p>

          <p className="text-2xl font-bold">{monitor["30dRatio"].ratio}%</p>
        </div>

        <div>
          <p className="text-xs text-stone-500 dark:text-stone-400">{t("days_90")}</p>

          <p className="text-2xl font-bold">{monitor["90dRatio"].ratio}%</p>
        </div>
      </div>
      {/* History */}
      <div className="mt-8">
        <p className="text-sm text-stone-600 dark:text-stone-300 mb-3">{t("history_90_days")}</p>

        <div className="flex gap-[2px]">
          {monitor.dailyRatios.slice(-90).map((day, index) => (
            <div
              key={index}
              title={`${day.date} (${day.ratio}%)`}
              className={`h-8 flex-1 rounded-sm ${
                day.color === "green"
                  ? "bg-orange-600"
                  : day.color === "blue"
                    ? "bg-orange-400"
                    : day.color === "red"
                      ? "bg-orange-800"
                      : "bg-stone-300 dark:bg-white/15"
              }`}
            />
          ))}
        </div>
      </div>
      {/* Incident */}
      {monitor.lastDowntime && (
        <div className="mt-6 border border-orange-600/30 bg-orange-500/[0.07] p-4">
          <div className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
            <FontAwesomeIcon icon={faClockRotateLeft} />

            <span className="font-medium">{t("last_incident")}</span>
          </div>

          <p className="mt-2 text-xs">{monitor.lastDowntime.date}</p>

          <p className="text-sm text-stone-600 dark:text-stone-300">
            {t("duration_label")}{" "}
            {Math.round(monitor.lastDowntime.duration / 60)}{" "}
            {t("duration_minutes")}
          </p>

          <p className="text-sm text-stone-600 dark:text-stone-300">
            {t("reason_label")} {monitor.lastDowntime.reason}
          </p>
        </div>
      )}
    </Card>
  );
}
