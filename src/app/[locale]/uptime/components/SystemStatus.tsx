"use client";

import { useEffect, useState } from "react";
import {
  faCircleCheck,
  faTriangleExclamation,
  faClockRotateLeft,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const API_URL = "https://stats.uptimerobot.com/api/getMonitorList/IZwUI4mLcR";

type DailyRatio = {
  date: string;
  ratio: string;
  color: string;
};

type Monitor = {
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

export default function SystemStatus() {
  const [monitors, setMonitors] = useState<Monitor[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>();

  const fetchData = async () => {
    try {
      const res = await fetch(API_URL, {
        cache: "no-store",
      });

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
    <main className="min-h-screen py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#14532d20,transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-2 text-sm">
            <FontAwesomeIcon icon={faServer} />
            Status Page
          </div>

          <h1 className="mt-5 text-5xl font-bold tracking-tight">
            System Status
          </h1>

          <p className="mt-3 text-zinc-400">
            Live monitoring and uptime history
          </p>
        </div>

        {/* Hero */}
        <div
          className={`mb-10 rounded-3xl border p-8 ${
            allOperational
              ? "border-emerald-500/20 bg-emerald-500/5"
              : "border-red-500/20 bg-red-500/5"
          }`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`h-4 w-4 rounded-full animate-pulse ${
                allOperational ? "bg-emerald-500" : "bg-red-500"
              }`}
            />

            <div>
              <h2 className="text-3xl font-bold">
                {allOperational
                  ? "All Systems Operational"
                  : "Service Disruption Detected"}
              </h2>

              <p className="text-zinc-400 mt-1">
                {onlineCount} of {monitors.length} services operational
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-3 mb-10">
          <div className="rounded-3xl border border-zinc-800 p-6">
            <p className="text-zinc-500 text-sm">Total Services</p>

            <h3 className="text-3xl font-bold mt-2">{monitors.length}</h3>
          </div>

          <div className="rounded-3xl border border-emerald-500 p-6">
            <p className="text-emerald-400 text-sm">Operational</p>

            <h3 className="text-3xl font-bold mt-2">{onlineCount}</h3>
          </div>

          <div className="rounded-3xl border border-zinc-800 p-6">
            <p className="text-zinc-500 text-sm">Last Refresh</p>

            <h3 className="text-lg font-medium mt-2">
              {lastUpdated ? lastUpdated.toLocaleTimeString() : "--"}
            </h3>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-5 text-xs text-zinc-400 mb-8">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-emerald-500" />
            Excellent
          </div>

          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-sky-500" />
            Good
          </div>

          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-red-500" />
            Poor
          </div>

          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-zinc-700" />
            No Data
          </div>
        </div>

        {/* Services */}
        <div className="space-y-5">
          {loading &&
            Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-48 rounded-3xl animate-pulse"
              />
            ))}

          {!loading &&
            monitors.map((monitor) => (
              <div
                key={monitor.monitorId}
                className="rounded-3xl border border-zinc-800 p-6 backdrop-blur"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{monitor.name}</h3>

                    <p className="text-sm text-zinc-500 mt-1">{monitor.type}</p>
                  </div>

                  <div>
                    {monitor.statusClass === "success" ? (
                      <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                        <FontAwesomeIcon icon={faCircleCheck} />
                        Operational
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-sm text-red-400">
                        <FontAwesomeIcon icon={faTriangleExclamation} />
                        Incident
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                  <div>
                    <p className="text-xs text-zinc-500">Current</p>

                    <p className="text-2xl font-bold">{monitor.ratio.ratio}%</p>
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">30 Days</p>

                    <p className="text-2xl font-bold">
                      {monitor["30dRatio"].ratio}%
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">90 Days</p>

                    <p className="text-2xl font-bold">
                      {monitor["90dRatio"].ratio}%
                    </p>
                  </div>
                </div>

                {/* History */}
                <div className="mt-8">
                  <p className="text-sm text-zinc-400 mb-3">90 Day History</p>

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

                      <span className="font-medium">Last Incident</span>
                    </div>

                    <p className="mt-2 text-xs">
                      {monitor.lastDowntime.date}
                    </p>

                    <p className="text-sm text-zinc-500">
                      Duration: {Math.round(monitor.lastDowntime.duration / 60)}{" "}
                      minutes
                    </p>

                    <p className="text-sm text-zinc-500">
                      Reason: {monitor.lastDowntime.reason}
                    </p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
