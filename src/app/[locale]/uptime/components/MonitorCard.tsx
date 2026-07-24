"use client";

import {
  faCircleCheck,
  faTriangleExclamation,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import { Monitor } from "./SystemStatus";

export default function MonitorCard({
  monitor,
  index,
}: {
  monitor: Monitor;
  index: number;
}) {
  const t = useTranslations("uptime");

  return (
    <div
      data-aos="fade-up"
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
    >
      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-70" />

      {/* Large Number */}
      <div className="absolute right-8 top-6 text-7xl font-black text-white/[0.03] transition-opacity duration-300 group-hover:text-white/[0.05]">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative p-8 md:p-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-xl font-semibold">{monitor.name}</h3>

            <p className="text-sm text-zinc-500 mt-1">{monitor.type}</p>
          </div>

          <div>
            {monitor.statusClass === "success" ? (
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                <FontAwesomeIcon icon={faCircleCheck} />
                {t("status_operational")}
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-sm text-red-400">
                <FontAwesomeIcon icon={faTriangleExclamation} />
                {t("status_incident")}
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <div>
            <p className="text-xs text-zinc-500">{t("current_uptime")}</p>

            <p className="text-2xl font-bold">{monitor.ratio.ratio}%</p>
          </div>

          <div>
            <p className="text-xs text-zinc-500">{t("days_30")}</p>

            <p className="text-2xl font-bold">{monitor["30dRatio"].ratio}%</p>
          </div>

          <div>
            <p className="text-xs text-zinc-500">{t("days_90")}</p>

            <p className="text-2xl font-bold">{monitor["90dRatio"].ratio}%</p>
          </div>
        </div>
        {/* History */}
        <div className="mt-8">
          <p className="text-sm text-zinc-400 mb-3">{t("history_90_days")}</p>

          <div className="flex gap-[2px]">
            {monitor.dailyRatios.slice(-90).map((day, index) => (
              <div
                key={index}
                title={`${day.date} (${day.ratio}%)`}
                className={`h-8 flex-1 rounded-sm ${
                  day.color === "green"
                    ? "bg-emerald-500"
                    : day.color === "blue"
                      ? "bg-sky-500"
                      : day.color === "red"
                        ? "bg-red-500"
                        : "bg-zinc-700"
                }`}
              />
            ))}
          </div>
        </div>
        {/* Incident */}
        {monitor.lastDowntime && (
          <div className="mt-6 rounded-2xl border border-red-500/10 bg-red-500/5 p-4">
            <div className="flex items-center gap-2 text-red-400">
              <FontAwesomeIcon icon={faClockRotateLeft} />

              <span className="font-medium">{t("last_incident")}</span>
            </div>

            <p className="mt-2 text-xs">{monitor.lastDowntime.date}</p>

            <p className="text-sm text-zinc-500">
              {t("duration_label")}{" "}
              {Math.round(monitor.lastDowntime.duration / 60)}{" "}
              {t("duration_minutes")}
            </p>

            <p className="text-sm text-zinc-500">
              {t("reason_label")} {monitor.lastDowntime.reason}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
