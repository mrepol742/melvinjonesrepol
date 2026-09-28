import Link from "next/link";
import { Metadata } from "next";
import { fetchSteamLibrary, GameType } from "@/lib/library";
import CollectionFilters from "@/components/ui/CollectionFilters";
import GameCard from "@/app/[locale]/gaming/components/GameCard";
import { getAlternates } from "@/components/common/metadata/Alternatives";
import { getTranslations } from "next-intl/server";
import Header from "@/components/ui/Header";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Gaming - Melvin Jones Repol",
    description: "Here are some of my gaming achievements and activities.",
    keywords: [
      "Gaming",
      "Melvin Jones Repol",
      "Steam Games",
      "Gaming Achievements",
      "Gaming Activities",
      "Gamer Profile",
      "Gaming Community",
      "Video Games",
      "PC Gaming",
    ],
    alternates: getAlternates("/gaming", locale),
    openGraph: {
      title: "Gaming - Melvin Jones Repol",
      description: "Here are some of my gaming achievements and activities.",
      url: "https://www.melvinjonesrepol.com/gaming",
      siteName: "Melvin Jones Repol",
      images: [
        {
          url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
          width: 800,
          height: 600,
          alt: "Melvin Jones Repol",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Gaming - Melvin Jones Repol",
      description: "Here are some of my gaming achievements and activities.",
      images: [
        "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
      ],
      creator: "@mrepol742",
    },
  };
}

export default async function Gaming({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const t = await getTranslations("gaming");
  const sParams = await searchParams;
  const query = Array.isArray(sParams.q)
    ? sParams.q.join(", ")
    : sParams.q || "";
  const activity = Array.isArray(sParams.activity)
    ? sParams.activity[0]
    : sParams.activity || "";
  const steam: never[] | { games: GameType[]; last_fetched: string } =
    await fetchSteamLibrary();
  const steamActivities: GameType[] =
    steam && "games" in steam ? steam.games : [];

  // inject games that are not in the steam library but are still relevant
  steamActivities.push({
    appid: 0,
    name: "Minecraft",
    img_icon_url: "",
    cover_url:
      "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Vanilla_bundle_1.png",
    playtime_2weeks: undefined,
    playtime_forever: 0,
    playtime_windows_forever: 0,
    playtime_mac_forever: 0,
    playtime_linux_forever: 0,
    playtime_deck_forever: 0,
    rtime_last_played: 0,
    playtime_disconnected: 0,
    content_descriptorids: undefined,
    has_community_visible_stats: undefined,
  });

  const filteredGames: GameType[] = steamActivities.filter(
    (game) =>
      game.name.toLowerCase().includes(query.toLowerCase()) &&
      (!activity || activity !== "recent" || (game.playtime_2weeks ?? 0) > 0),
  );

  return (
    <>
      <Header
        title={
          <>
            {t("title_line1")}
            <br />
            <span className="homepage-accent">{t("title_line2")}</span>
            <br />
            {t("title_line3")}
          </>
        }
        intro={t("hero_description")}
      />

      <section className="px-6 py-24 md:px-10">
        <CollectionFilters
          label="Browse the library"
          description="Search your games or focus on titles played recently."
          initialQuery={query}
          initialFilter={activity}
          filterParam="activity"
          filterLabel="Filter games by activity"
          allFilterLabel="All activity"
          options={[{ value: "recent", label: "Played recently" }]}
        />

        <p className="mt-6 text-sm text-stone-600 dark:text-stone-400">
          Showing <span className="font-bold text-orange-700 dark:text-orange-300">{filteredGames.length}</span>{" "}
          {filteredGames.length === 1 ? "game" : "games"}
        </p>

        {filteredGames.length === 0 ? (
          <div>
            <h2>{t("no_results_found")}</h2>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredGames.map((game: GameType) => (
              <GameCard key={game.appid} game={game} />
            ))}
          </div>
        )}

        <span className="ml-auto text-xs text-stone-500 dark:text-stone-400">
          {t("data_source_note")}
          <br />
          {t("titles_disclaimer")}
        </span>
      </section>
    </>
  );
}
