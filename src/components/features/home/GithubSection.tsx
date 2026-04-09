import ScrambleText from "@/components/ui/ScrambleText";
import { fetchGithubProfile } from "@/lib/github/profile";

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", { notation: "compact" }).format(value);
}

function getYearsSince(dateString: string) {
  const created = new Date(dateString).getTime();
  const now = Date.now();
  const years = (now - created) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.max(0, years);
}

export async function GithubSection() {
  const profile = await fetchGithubProfile("mrepol742");

  if (!profile) {
    return <p>Unable to load GitHub profile.</p>;
  }

  const accountAgeYears = getYearsSince(profile.created_at);
  const avgFollowersPerRepo =
    profile.public_repos > 0 ? profile.followers / profile.public_repos : 0;
  const repoToGistRatio =
    profile.public_gists > 0
      ? profile.public_repos / profile.public_gists
      : profile.public_repos;
  const followRatio =
    profile.following > 0
      ? profile.followers / profile.following
      : profile.followers;

  const stats = [
    { label: "Public Repos", value: formatNumber(profile.public_repos) },
    { label: "Public Gists", value: formatNumber(profile.public_gists) },
    { label: "Followers", value: formatNumber(profile.followers) },
    { label: "Following", value: formatNumber(profile.following) },
    { label: "Account Age", value: `${accountAgeYears.toFixed(1)}y` },
    { label: "GitHub ID", value: formatNumber(profile.id) },
    {
      label: "Avg Followers / Repo",
      value: avgFollowersPerRepo.toFixed(2),
    },
    {
      label: "Repo / Gist Ratio",
      value: repoToGistRatio.toFixed(2),
    },
    {
      label: "Follow Ratio",
      value: followRatio.toFixed(2),
    },
    {
      label: "Last Updated",
      value: new Date(profile.updated_at).toLocaleDateString(),
    },
  ];

  return (
    <section className="w-full space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em]" data-aos="fade-up">
            GitHub Analytics
          </p>
          <h2
            className="text-2xl font-semibold tracking-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Developer Activity Snapshot
          </h2>
        </div>
        <div className="text-xs" data-aos="fade-up" data-aos-delay="100">
          <p className="text-right text-gray-500">@{profile.login}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {stats.map((item, index) => (
          <article
            key={index}
            className="rounded-2xl border p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
            data-aos="fade-up"
            data-aos-delay={100 * (index + 1)}
          >
            <p className="text-xs uppercase tracking-wide">{item.label}</p>
            <ScrambleText
              as="p"
              text={item.value}
              durationMs={1000}
              className="mt-2 text-2xl font-semibold"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
