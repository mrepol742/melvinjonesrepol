import { fetchSteamLibrary, GameType } from "@/lib/steam/library";
import GameCard from "../GameCard";

export default async function SteamSection() {
  const steamActivities: GameType[] = await fetchSteamLibrary();
  const mostPlayedGames = [...steamActivities].sort(
    (a, b) => b.playtime_forever - a.playtime_forever
  );
  const top10 = mostPlayedGames.slice(0, 10);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-6">
      {top10.map((game: GameType) => (
        <GameCard key={game.appid} game={game} />
      ))}
    </div>
  )
}
