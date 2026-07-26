"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import MonitorCard from "./MonitorCard";

const API_URL = "https://stats.uptimerobot.com/api/getMonitorList/IZwUI4mLcR";

export type DailyRatio = {
  date: string;
  ratio: string;
  color: string;
};

export type Monitor = {
  monitorId: number;
  name: string;
  type: string;
  statusClass: string;

  dailyRatios: DailyRatio[];

  ratio: {
    ratio: string;
  };

  "30dRatio": {
    ratio: string;
  };

  "90dRatio": {
    ratio: string;
  };

  lastDowntime: {
    date: string;
    duration: number;
    reason: string;
  } | null;
};

export default function SystemStatus({
  initialMonitors = [],
}: {
  initialMonitors?: Monitor[];
}) {
  const t = useTranslations("uptime");
  const [monitors, setMonitors] = useState<Monitor[]>(initialMonitors);
  const [loading, setLoading] = useState(initialMonitors.length === 0);
  const [lastUpdated, setLastUpdated] = useState<Date | undefined>(
    initialMonitors.length > 0 ? new Date() : undefined,
  );

  const fetchData = async () => {
    try {
      const res = await fetch(API_URL, { cache: "no-store" });
      const json = await res.json();
      setMonitors(json.data || []);
      setLastUpdated(new Date());
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const onlineCount = monitors.filter(
    (m) => m.statusClass === "success",
  ).length;

  const allOperational = onlineCount === monitors.length && monitors.length > 0;

  return (
    <main>
      <section className="relative min-h-screen overflow-hidden border-b border-zinc-800">
        <div className="relative flex min-h-screen flex-col px-6 py-12 md:px-10">
          <div className="my-auto py-14">
            <h1
              className="text-[14vw] sm:text-[10vw] lg:text-[7.5vw] font-black tracking-tighter leading-[0.85] mb-8"
              data-aos="fade-up"
            >
              {t("title_line1")}
              <br />
              <span className="opacity-40">{t("title_line2")}</span>
              <br />
              {t("title_line3")}
            </h1>

            <p
              className="max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t("subtitle")}
            </p>
          </div>

          <div
            className="border-t border-zinc-800 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div>
              <p className="text-4xl font-black">{monitors.length || "--"}</p>
              <p className="mt-1 text-sm text-zinc-400">
                {t("total_services")}
              </p>
            </div>
            <div>
              <p className="text-4xl font-black">
                {loading ? "--" : onlineCount}
              </p>
              <p className="mt-1 text-sm text-zinc-400">{t("operational")}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mt-1">
                <div
                  className={`h-3 w-3 rounded-full ${allOperational ? "bg-emerald-500 animate-pulse" : monitors.length === 0 ? "bg-zinc-600" : "bg-red-500 animate-pulse"}`}
                />
                <p className="text-sm font-semibold">
                  {loading
                    ? t("loading")
                    : allOperational
                      ? t("all_systems_operational")
                      : t("service_disruption")}
                </p>
              </div>
              <p className="mt-1 text-sm text-zinc-400">
                {t("current_status")}
              </p>
            </div>
            <div>
              <p className="text-lg font-black">
                {lastUpdated ? lastUpdated.toLocaleTimeString() : "--"}
              </p>
              <p className="mt-1 text-sm text-zinc-400">{t("last_refresh")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 my-6 md:px-10">
        {/* Legend */}
        <div className="flex flex-wrap gap-5 text-xs text-zinc-400 mb-8">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-emerald-500" />
            {t("legend_excellent")}
          </div>

          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-sky-500" />
            {t("legend_good")}
          </div>

          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-red-500" />
            {t("legend_poor")}
          </div>

          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-zinc-700" />
            {t("legend_no_data")}
          </div>
        </div>

        {/* Services */}
        <div className="space-y-5">
          {loading &&
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-48 rounded-3xl animate-pulse" />
            ))}

          {!loading &&
            monitors.map((monitor, index) => (
              <MonitorCard
                key={monitor.monitorId}
                monitor={monitor}
                index={index}
              />
            ))}
        </div>
      </section>
    </main>
  );
}
