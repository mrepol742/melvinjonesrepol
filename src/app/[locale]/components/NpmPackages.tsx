import Card from "@/components/ui/Card";
import { fetchNpmPackages } from "@/lib/npm-packages";
import { faNpm } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", { notation: "compact" }).format(value);
}

export default async function NpmPackages() {
  const data = await fetchNpmPackages();

  if (!data?.objects.length) {
    return null;
  }

  const monthlyDownloads = data.objects.reduce(
    (total, item) => total + item.downloads.monthly,
    0,
  );

  return (
    <div className="space-y-8">
      <div className="grid gap-px overflow-hidden border border-stone-300 bg-stone-300 sm:grid-cols-2 dark:border-white/15 dark:bg-white/15">
        <div className="bg-[var(--background)] px-6 py-5">
          <p className="text-3xl font-bold tracking-tight">{data.total}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600 dark:text-zinc-400">
            Published packages
          </p>
        </div>
        <div className="bg-[var(--background)] px-6 py-5">
          <p className="text-3xl font-bold tracking-tight">
            {formatNumber(monthlyDownloads)}
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600 dark:text-zinc-400">
            Monthly downloads
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {data.objects.map((item) => {
          const packageData = item.package;
          const keywords = packageData.keywords.slice(0, 3);

          return (
            <a
              key={packageData.name}
              href={packageData.links.npm}
              target="_blank"
              rel="noreferrer"
              className="group flex"
              aria-label={`View ${packageData.name} on NPM`}
            >
              <Card className="flex h-full flex-col border-t-4 border-t-orange-600">
                <div className="flex items-start justify-between gap-5">
                  <FontAwesomeIcon
                    icon={faNpm}
                    className="h-7 text-[#cb3837]"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                    v{packageData.version}
                  </span>
                </div>

                <h3 className="mt-7 break-all text-xl font-bold tracking-tight">
                  {packageData.name}
                </h3>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {packageData.description || "A published NPM package."}
                </p>

                {keywords.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="border border-stone-300 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-zinc-600 dark:border-white/15 dark:text-zinc-400"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-7 flex items-center justify-between gap-4 border-t border-stone-300 pt-4 text-xs dark:border-white/15">
                  <span className="text-zinc-600 dark:text-zinc-400">
                    {formatNumber(item.downloads.monthly)} downloads / month
                  </span>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
              </Card>
            </a>
          );
        })}
      </div>

      <div className="flex flex-col items-start justify-between gap-4 border-t border-stone-300 pt-6 text-sm sm:flex-row sm:items-center dark:border-white/15">
        <p className="text-zinc-600 dark:text-zinc-400">
          Registry data refreshed {new Date(data.last_fetched).toUTCString()}
        </p>
        <a
          href="https://www.npmjs.com/~mrepol742"
          target="_blank"
          rel="noreferrer"
          className="homepage-text-link mt-0"
        >
          View my NPM profile <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
