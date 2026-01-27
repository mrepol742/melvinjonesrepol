import { fetchCurrentStats } from "@/lib/wakatime/fetchCurrentStats";
import { faLinux } from "@fortawesome/free-brands-svg-icons";
import { faEdit, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "devicon/devicon.min.css";
import Link from "next/link";

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

      <div className="mt-6 grid grid-cols-3 md:grid-cols-5 xl:grid-cols-7 gap-3 mb-3">
        <div className="p-3">
          <p className="text-sm text-slate-500" data-aos="fade-up">
            <FontAwesomeIcon icon={faEdit} className="mr-2" />
            Editors
          </p>
          <p className="font-semibold" data-aos="fade-up">
            {stats.data.editors.map((e) => e.name).join(", ") || "—"}
          </p>
        </div>

        <div className="p-3">
          <p className="text-sm text-slate-500" data-aos="fade-up">
            <FontAwesomeIcon icon={faLinux} className="mr-2" />
            Operating systems
          </p>
          <p className="font-semibold" data-aos="fade-up">
            {stats.data.operating_systems.map((os) => os.name).join(", ") ||
              "—"}
          </p>
        </div>

        <div className="p-3">
          <p className="text-sm text-slate-500" data-aos="fade-up">
            <FontAwesomeIcon icon={faLaptop} className="mr-2" />
            Machines
          </p>
          <p className="font-semibold" data-aos="fade-up">
            {stats.data.machines.map((machine) => machine.name).join(", ") ||
              "—"}
          </p>
        </div>
      </div>
      <div className="mb-10">
        <Link
          href="https://cv.melvinjonesrepol.com"
          data-aos="fade-right"
          data-aos-delay="350"
        >
          <button
            className="uppercase text-sm relative bg-orange-400 px-7 py-4 mt-3 font-semibold overflow-hidden shadow-none transition-transform duration-200 hover:translate-x-1 hover:translate-y-1
            before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-full before:h-1 before:bg-orange-600 before:rounded-b-lg
            after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-1 after:h-full after:bg-orange-600 after:rounded-r-lg"
            style={{ boxShadow: "1px 1px 0 0 #ea580c" }}
          >
            View My CV
          </button>
        </Link>
        <a
          href="https://wakatime.melvinjonesrepol.com/"
          className="p-3 text-sm text-slate-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          More detailed stats &rarr;
        </a>
      </div>
    </>
  );
}
