import { fetchCurrentStats } from "@/lib/wakatime/fetchCurrentStats";
import "devicon/devicon.min.css";

export async function WakatimeSection() {
  const stats = await fetchCurrentStats();

  if (!stats) return;

  const topLanguages = stats?.data?.languages ?? [];
  const totalSeconds = stats?.data?.total_seconds ?? 0;
  const totalHours = (totalSeconds / 3600).toFixed(1);

  function getLanguageIcon(lang: string, props = {}) {
    if (!lang) return null;

    const name = lang.toLowerCase();

    const cls = `devicon-${name}-plain colored`;

    return <i className={cls} {...props} />;
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-3xl font-bold">{totalHours} hrs</p>
          <p className="text-sm text-slate-500">in the last 7 days</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-500">Top language</p>
          <p className="font-medium">{topLanguages[0]?.name || "—"}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 md:grid-cols-5 xl:grid-cols-7 gap-3">
        {topLanguages.slice(0, 5).map((lang) => (
          <div key={lang.name} className="p-3" data-aos="fade-up">
            {getLanguageIcon(lang.name, { style: { fontSize: 48 } })}
            <p className="text-sm text-slate-500">{lang.name}</p>
            <p className="font-semibold">
              {(lang.total_seconds / 3600).toFixed(1)} hrs
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 md:grid-cols-5 xl:grid-cols-7 gap-3">
        <div className="p-3">
          <p className="text-sm text-slate-500" data-aos="fade-up">Editors</p>
          <p className="font-semibold" data-aos="fade-up">
            {stats.data.editors.map((e) => e.name).join(", ") || "—"}
          </p>
        </div>

        <div className="p-3">
          <p className="text-sm text-slate-500" data-aos="fade-up">Operating systems</p>
          <p className="font-semibold" data-aos="fade-up">
            {stats.data.operating_systems.map((os) => os.name).join(", ") ||
              "—"}
          </p>
        </div>

        <div className="p-3">
          <p className="text-sm text-slate-500" data-aos="fade-up">Machines</p>
          <p className="font-semibold" data-aos="fade-up">
            {stats.data.machines.map((machine) => machine.name).join(", ") ||
              "—"}
          </p>
        </div>
      </div>
    </>
  );
}
