import Card from "@/components/ui/Card";
import Slider from "@/components/ui/Slider";
import { fetchSteamLibrary, GameType } from "@/lib/steam/library";
import { formatDuration } from "@/utils/date";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default async function Steam() {
  const t = await getTranslations("steam");
  const steam: never[] | { games: GameType[]; last_fetched: string } =
    await fetchSteamLibrary();
  const steamActivities: GameType[] =
    steam && "games" in steam ? steam.games : [];

  const mostPlayedGames = [...steamActivities].sort(
    (a, b) => b.playtime_forever - a.playtime_forever,
  );
  const explicitPatterns = [/🔞/i, /sexy/i, /nsfw/i, /adult/i, /sex/i, /xxx/i];
  const favoritePatterns = [
    /asphalt/i,
    /forza/i,
    /need for speed/i,
    /the crew/i,
    /truck simulator/i,
    /wrc/i,
  ];
  const mostPlayedFavoriteGames = mostPlayedGames.filter((game) =>
    favoritePatterns.some((pattern) => pattern.test(game.name)),
  );
  const totalPlaytime2Weeks = steamActivities.reduce(
    (sum, game) => sum + (game.playtime_2weeks ?? 0),
    0,
  );
  const sortedByPlaytime2Weeks = [...mostPlayedFavoriteGames].sort(
    (a, b) => (b.playtime_2weeks ?? 0) - (a.playtime_2weeks ?? 0),
  );

  function sanitizeGameName(name: string) {
    return explicitPatterns.some((pattern) => pattern.test(name))
      ? t("private_game")
      : name;
  }

  return (
    <>
      <section className="w-full space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em]">
              {t("gaming_activity_label")}
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">
              {t("gaming_activity_title")}
            </h2>
          </div>

          <div className="text-right">
            <p className="text-3xl font-bold leading-none">
              {formatDuration(totalPlaytime2Weeks)}
            </p>
            <p className="mt-1 text-xs uppercase tracking-wide">
              {t("last_14_days")}
            </p>
          </div>
        </div>

        <p className="max-w-2xl text-sm leading-relaxed">
          {t("gaming_activity_description")}
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {sortedByPlaytime2Weeks.slice(0, 6).map((game, index) => (
            <Card key={game.appid ?? index}>
              <p className="text-xs uppercase tracking-wide">
                #{String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2  text-xl font-semibold">
                {sanitizeGameName(game.name)}
              </p>
              <p className="mt-1 text-sm">
                {formatDuration(game.playtime_2weeks ?? 0)}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-sm text-muted">
          {t("last_updated_label")}{" "}
          {steam && "last_fetched" in steam && steam.last_fetched
            ? new Date(steam.last_fetched).toUTCString()
            : "—"}
        </div>
      </section>

      <section className="pt-16">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em]">
            {t("top_games_label")}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            {t("all_time_favorites_title")}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed">
            {t("all_time_favorites_description")}
          </p>
        </div>

        <Slider>
          {mostPlayedFavoriteGames.map((game, index) => (
            <Link
              href={`/gaming?q=${game.name}`}
              key={game.appid ?? index}
              className="block w-[90vw] shrink-0 snap-start md:w-96"
            >
              <Card index={index} className="group h-full">
                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-md">
                  <Image
                    src={game.cover_url}
                    alt={game.name}
                    fill
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl font-bold">{game.name}</span>
                </div>
                <span className="bg-gray-500/20 px-3 py-1 text-xs font-semibold">
                  {formatDuration(game.playtime_forever)}
                </span>
              </Card>
            </Link>
          ))}
        </Slider>
        <span className="text-xs">{t("swipe_hint")}</span>
      </section>
    </>
  );
}
