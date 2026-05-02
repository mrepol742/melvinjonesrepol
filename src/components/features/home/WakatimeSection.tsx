import { fetchCurrentStats } from "@/lib/wakatime/stat";
import { faLinux } from "@fortawesome/free-brands-svg-icons";
import { faEdit, faFile, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "devicon/devicon.min.css";
import Link from "next/link";
import Button from "@/components/ui/Button";

function formatHours(seconds: number) {
  return (seconds / 3600).toFixed(1);
}

function formatPct(value?: number | string) {
  if (value === undefined || value === null) return "0%";
  const n = typeof value === "string" ? Number(value) : value;
  if (Number.isNaN(n)) return "0%";
  return `${n.toFixed(1)}%`;
}

export async function WakatimeSection() {
  const stats = await fetchCurrentStats();

  if (!stats) return null;

  const topLanguages = stats?.data?.languages ?? [];
  const totalSeconds = stats?.data?.total_seconds ?? 0;
  const totalHours = formatHours(totalSeconds);

  const editors = stats?.data?.editors?.map((e) => e.name).join(", ") || "—";
  const operatingSystems =
    stats?.data?.operating_systems?.map((os) => os.name).join(", ") || "—";
  const machines =
    stats?.data?.machines?.map((machine) => machine.name).join(", ") || "—";

  function getLanguageIcon(lang: string, props = {}) {
    if (!lang) return null;
    const name = lang.toLowerCase();
    const cls = `devicon-${name}-plain colored`;
    return <i className={cls} {...props} />;
  }

  return (
    <section className="w-full space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em]">WakaTime</p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Weekly Coding Analytics
          </h2>
        </div>

        <div className="text-right">
          <p className="text-3xl font-bold leading-none">{totalHours} hrs</p>
          <p className="text-sm">in the last 7 days</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-2xl border p-4 shadow-sm">
          <p className="text-xs uppercase tracking-wide">Top Language</p>
          <p className="mt-2 text-xl font-semibold">
            {topLanguages[0]?.name || "—"}
          </p>
          <p className="mt-1 text-sm">
            {topLanguages[0]
              ? `${formatHours(topLanguages[0].total_seconds)} hrs`
              : "—"}
          </p>
        </article>

        <article className="rounded-2xl border p-4 shadow-sm">
          <p className="text-xs uppercase tracking-wide">Editors</p>
          <p className="mt-2 font-medium leading-relaxed">{editors}</p>
        </article>

        <article className="rounded-2xl border p-4 shadow-sm">
          <p className="text-xs uppercase tracking-wide">Operating Systems</p>
          <p className="mt-2 font-medium leading-relaxed">
            <FontAwesomeIcon icon={faLinux} className="mr-2" />
            {operatingSystems}
          </p>
        </article>

        <article className="rounded-2xl border p-4 shadow-sm">
          <p className="text-xs uppercase tracking-wide">Machines</p>
          <p className="mt-2 font-medium leading-relaxed">
            <FontAwesomeIcon icon={faLaptop} className="mr-2" />
            {machines}
          </p>
        </article>
      </div>

      <div className="rounded-2xl border p-4 md:p-6">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold uppercase tracking-wide">
            Top Languages Breakdown
          </p>
          <p className="text-xs">By time spent (7d)</p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {topLanguages.slice(0, 8).map((lang, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="rounded-xl border p-3 transition-transform duration-200 hover:-translate-y-0.5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border">
                    {getLanguageIcon(lang.name, { style: { fontSize: 24 } })}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">
                      {lang.name}
                    </p>
                    <p className="text-xs">
                      {formatHours(lang.total_seconds)} hrs
                    </p>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span>Share</span>
                    <span>{formatPct(lang.percent)}</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full border">
                    <div
                      className="h-full bg-cyan-500 rounded-full"
                      style={{ width: formatPct(lang.percent) }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="text-sm text-muted"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        Last updated:{" "}
        {stats.last_fetched ? new Date(stats.last_fetched).toUTCString() : "—"}
      </div>
    </section>
  );
}
