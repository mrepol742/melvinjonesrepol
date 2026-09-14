import Card from "@/components/ui/Card";
import Slider from "@/components/ui/Slider";
import { fetchSteamLibrary, GameType } from "@/lib/steam/library";
import { toHours } from "@/utils/date";
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
  const gameWithHighestPlaytime = steamActivities.reduce<GameType | undefined>(
    (topGame, game) =>
      (game.playtime_2weeks ?? 0) > (topGame?.playtime_2weeks ?? 0)
        ? game
        : topGame,
    undefined,
  );
  const sortedByPlaytime2Weeks = [...steamActivities].sort(
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
              {toHours(totalPlaytime2Weeks)} hrs
            </p>
            <p className="mt-1 text-xs uppercase tracking-wide">
              {t("last_14_days")}
            </p>
          </div>
        </div>

        <p className="max-w-2xl text-sm leading-relaxed">
          {t("gaming_activity_description")}
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
          <Card>
            <p className="text-xs uppercase tracking-wide">
              {t("top_game_label")}
            </p>
            <p className="mt-2 truncate text-xl font-semibold">
              {gameWithHighestPlaytime
                ? sanitizeGameName(gameWithHighestPlaytime.name)
                : "—"}
            </p>
            <p className="mt-1 text-sm">
              {gameWithHighestPlaytime
                ? `${toHours(gameWithHighestPlaytime.playtime_2weeks ?? 0)} hrs`
                : "—"}
            </p>
          </Card>

          {sortedByPlaytime2Weeks.slice(0, 4).map((game, index) => (
            <Card key={game.appid ?? index}>
              <p className="text-xs uppercase tracking-wide">
                #{String(index + 1).padStart(2, "0")} {t("last_14_days")}
              </p>
              <p className="mt-2 truncate text-xl font-semibold">
                {sanitizeGameName(game.name)}
              </p>
              <p className="mt-1 text-sm">
                {toHours(game.playtime_2weeks ?? 0)} hrs
              </p>
            </Card>
          ))}
        </div>

        <div className="text-sm text-muted">
          {t("last_updated_label")} {" "}
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
            <Link href={`/gaming?q=${game.name}`} key={game.appid ?? index}>
              <Card className="group snap-start flex-shrink-0 w-80 md:w-96">
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
                  {toHours(game.playtime_forever)} {t("total_hours_label")}
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
