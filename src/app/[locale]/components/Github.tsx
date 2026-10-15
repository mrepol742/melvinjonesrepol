import Card from "@/components/ui/Card";
import ScrambleText from "@/components/ui/ScrambleText";
import { fetchGithubProfile } from "@/lib/profile";
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
    {
      label: t("stat_public_repos"),
      value: formatNumber(profile.public_repos),
    },
    {
      label: t("stat_public_gists"),
      value: formatNumber(profile.public_gists),
    },
    { label: t("stat_followers"), value: formatNumber(profile.followers) },
    { label: t("stat_following"), value: formatNumber(profile.following) },
    // { label: t("stat_account_age"), value: `${accountAgeYears.toFixed(1)}y` },
    // { label: t("stat_github_id"), value: formatNumber(profile.id) },
    // {
    //   label: t("stat_avg_followers_per_repo"),
    //   value: avgFollowersPerRepo.toFixed(2),
    // },
    // {
    //   label: t("stat_repo_gist_ratio"),
    //   value: repoToGistRatio.toFixed(2),
    // },
    // {
    //   label: t("stat_follow_ratio"),
    //   value: followRatio.toFixed(2),
    // },
    // {
    //   label: t("stat_last_updated"),
    //   value: new Date(profile.updated_at).toLocaleDateString(),
    // },
  ];

  return (
    <section className="w-full space-y-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold uppercase tracking-wide">
          Github
        </p>
        <p className="text-xs">@{profile.login}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((item, index) => (
          <Card
            key={index}
            data-aos="fade-up"
            data-aos-delay={100 * (index + 1)}
            subtitle={item.value}
          >
            <ScrambleText
              as="p"
              text={item.value}
              durationMs={1000}
              className="mb-3 text-3xl font-semibold"
            />
            <p className="text-xs uppercase tracking-wide">{item.label}</p>
          </Card>
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
