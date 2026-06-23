import ScrambleText from "@/components/ui/ScrambleText";
import { fetchGithubProfile } from "@/lib/github/profile";
import { getTranslations } from "next-intl/server";

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", { notation: "compact" }).format(value);
}

function getYearsSince(dateString: string) {
  const created = new Date(dateString).getTime();
  const now = Date.now();
  const years = (now - created) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.max(0, years);
}

export default async function Github() {
  const t = await getTranslations("github");
  const profile = await fetchGithubProfile("mrepol742");

  if (!profile) {
    return <p>{t("error_message")}</p>;
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
    { label: t("stat_public_repos"), value: formatNumber(profile.public_repos) },
    { label: t("stat_public_gists"), value: formatNumber(profile.public_gists) },
    { label: t("stat_followers"), value: formatNumber(profile.followers) },
    { label: t("stat_following"), value: formatNumber(profile.following) },
    { label: t("stat_account_age"), value: `${accountAgeYears.toFixed(1)}y` },
    { label: t("stat_github_id"), value: formatNumber(profile.id) },
    {
      label: t("stat_avg_followers_per_repo"),
      value: avgFollowersPerRepo.toFixed(2),
    },
    {
      label: t("stat_repo_gist_ratio"),
      value: repoToGistRatio.toFixed(2),
    },
    {
      label: t("stat_follow_ratio"),
      value: followRatio.toFixed(2),
    },
    {
      label: t("stat_last_updated"),
      value: new Date(profile.updated_at).toLocaleDateString(),
    },
  ];

  return (
    <section className="w-full space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em]" data-aos="fade-up">
            {t("section_label")}
          </p>
          <h2
            className="text-2xl font-semibold tracking-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("section_title")}
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
            data-aos="fade-up"
            data-aos-delay={100 * (index + 1)}
          >
            <div
              key={index}
              className="rounded-2xl border border-zinc-800 p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
            >
              <p className="text-xs uppercase tracking-wide">{item.label}</p>
              <ScrambleText
                as="p"
                text={item.value}
                durationMs={1000}
                className="mt-2 text-2xl font-semibold"
              />
            </div>
          </article>
        ))}
      </div>

      <div
        className="text-sm text-muted"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        {t("last_updated_label")}{" "}
        {profile.last_fetched
          ? new Date(profile.last_fetched).toUTCString()
          : "—"}
      </div>
    </section>
  );
}
