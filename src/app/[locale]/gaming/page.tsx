import Link from "next/link";
import { Metadata } from "next";
import { fetchSteamLibrary, GameType } from "@/lib/steam/library";
import SearchForm from "@/components/ui/SearchForm";
import GameCard from "@/app/[locale]/gaming/components/GameCard";
import { getAlternates } from "@/components/common/metadata/Alternatives";

export const metadata: Metadata = {
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
  alternates: getAlternates("/gaming"),
  openGraph: {
    title: "Gaming - Melvin Jones Repol",
    description: "Here are some of my gaming achievements and activities.",
    url: "https://www.melvinjonesrepol.com/gaming",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
        width: 1200,
        height: 630,
        alt: "Gaming Cover",
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

export default async function Gaming({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sParams = await searchParams;
  const query = Array.isArray(sParams.q)
    ? sParams.q.join(", ")
    : sParams.q || "";
  const steam: never[] | { games: GameType[]; last_fetched: string } =
    await fetchSteamLibrary();
  const steamActivities: GameType[] =
    steam && "games" in steam ? steam.games : [];

  // inject games that are not in the steam library but are still relevant
  steamActivities.push({
    appid: 0,
    name: "Minecraft",
    img_icon_url: "",
    cover_url: "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Vanilla_bundle_1.png",
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

  const filteredGames: GameType[] = steamActivities.filter((game) =>
    game.name.toLowerCase().includes(query),
  );

  return (
    <main>
      <section className="relative min-h-screen overflow-hidden border-b border-zinc-800">
        <div className="relative flex min-h-screen flex-col px-6 py-12 md:px-10">
          <div className="my-auto py-14">
            <h1
              className="text-[14vw] sm:text-[10vw] lg:text-[7.5vw] font-black tracking-tighter leading-[0.85] mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Play.
              <br />
              <span className="opacity-40">compete.</span>
              <br />
              explore.
            </h1>

            <p
              className="max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Gaming achievements, high scores, and activities from my Steam
              library. Strategy, action, and everything in between.
            </p>
          </div>

          <div
            className="border-t border-zinc-800 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div>
              <p className="text-4xl font-black">{steamActivities.length}+</p>
              <p className="mt-1 text-sm text-zinc-400">Games</p>
            </div>
            <div>
              <p className="text-4xl font-black">Steam</p>
              <p className="mt-1 text-sm text-zinc-400">Platform</p>
            </div>
            <div className="col-span-2 flex flex-wrap items-center gap-2">
              {[
                "NFS",
                "Forza Horizon",
                "Minecraft",
                "Just Cause",
                "WRC",
                "Simulation",
                "Sports",
                "Racing",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-400 px-3 py-1 text-xs text-zinc-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mb-8 max-w-xl">
          <SearchForm initialQuery={query} />
        </div>

        {filteredGames.length === 0 ? (
          <div>
            <h2>No results found.</h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
            {filteredGames.map((game: GameType) => (
              <GameCard key={game.appid} game={game} />
            ))}
          </div>
        )}

        <div className="my-6">
          <p data-aos="fade-up" data-aos-delay="200">
            You can find more of my gaming activities on my steam profile.
          </p>
          <Link
            href="https://steamcommunity.com/id/mrepol742"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <button
              className="text-sm relative bg-orange-400 px-7 py-4 mt-3 font-semibold overflow-hidden shadow-none transition-transform duration-200 hover:translate-x-1 hover:translate-y-1
                          before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-full before:h-1 before:bg-orange-600 before:rounded-b-lg
                          after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-1 after:h-full after:bg-orange-600 after:rounded-r-lg"
              style={{ boxShadow: "1px 1px 0 0 #ea580c" }}
            >
              Steam Profile
            </button>
          </Link>
        </div>

        <span className="ml-auto text-xs text-gray-400">
          Data fetched from Steam API.
          <br />
          All Titles/Covers are properties of their respective owners.
        </span>
      </section>
    </main>
  );
}
