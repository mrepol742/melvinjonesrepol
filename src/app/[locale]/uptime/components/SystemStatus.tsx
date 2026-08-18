"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import MonitorCard from "./MonitorCard";
import Header from "@/components/ui/Header";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL, { cache: "no-store" });
        const json = await res.json();
        setMonitors(json.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header
        title={
          <>
            {t("title_line1")}
            <br />
            <span className="opacity-40">{t("title_line2")}</span>
            <br />
            {t("title_line3")}
          </>
        }
        intro={t("subtitle")}
      />

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
        <div className="space-y-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
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
    </>
  );
}
