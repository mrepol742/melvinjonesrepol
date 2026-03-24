import { fetchCurrentStats } from "@/lib/wakatime/stat";
import { faLinux } from "@fortawesome/free-brands-svg-icons";
import { faEdit, faFile, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "devicon/devicon.min.css";
import Link from "next/link";
import Button from "../Button";

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
          <p className="text-sm">in the last 7 days</p>
        </div>
        <div className="text-right">
          <p className="text-sm">Top language</p>
          <p className="font-medium">{topLanguages[0]?.name || "—"}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 md:grid-cols-5 xl:grid-cols-7 gap-3">
        {topLanguages.slice(0, 8).map((lang) => (
          <div key={lang.name} className="p-3" data-aos="fade-up">
            {getLanguageIcon(lang.name, { style: { fontSize: 48 } })}
            <p className="text-sm">{lang.name}</p>
            <p className="font-semibold">
              {(lang.total_seconds / 3600).toFixed(1)} hrs
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 md:grid-cols-5 xl:grid-cols-7 gap-3 mb-3">
        <div className="p-3">
          <p className="text-sm" data-aos="fade-up">
            <FontAwesomeIcon icon={faEdit} className="mr-2" />
            Editors
          </p>
          <p className="font-semibold" data-aos="fade-up">
            {stats.data.editors.map((e) => e.name).join(", ") || "—"}
          </p>
        </div>

        <div className="p-3">
          <p className="text-sm" data-aos="fade-up">
            <FontAwesomeIcon icon={faLinux} className="mr-2" />
            Operating systems
          </p>
          <p className="font-semibold" data-aos="fade-up">
            {stats.data.operating_systems.map((os) => os.name).join(", ") ||
              "—"}
          </p>
        </div>

        <div className="p-3">
          <p className="text-sm" data-aos="fade-up">
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
          <Button
            icon={faFile}
            className="bg-orange-400 before:bg-orange-600 after:bg-orange-600"
          >
            View CV
          </Button>
        </Link>
        <a
          href="https://wakatime.melvinjonesrepol.com/"
          className="p-3 text-sm hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          More detailed stats &rarr;
        </a>
      </div>
    </>
  );
}
