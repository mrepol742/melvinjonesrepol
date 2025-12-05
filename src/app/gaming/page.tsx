import Link from "next/link";
import { Metadata } from "next";
import { fetchSteamLibrary, GameType } from "@/lib/steam/library";
import SearchForm from "@/components/form/SearchForm";
import GameCard from "@/components/GameCard";

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
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/gaming",
  },
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
  const steamActivities: GameType[] = await fetchSteamLibrary();
  const filteredGames: GameType[] = steamActivities.filter((game) =>
    game.name.toLowerCase().includes(query),
  );

  return (
    <main className="my-18 p-3 md:p-8">
      <section>
        <h1 className="text-2xl font-semibold">Gaming</h1>
        <p>Here are some of my gaming achievements and activities.</p>

        <SearchForm initialQuery={query} />

        {filteredGames.length === 0 ? (
          <div>
            <h2>No results found.</h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-6">
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
