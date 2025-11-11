import { GameType } from "@/lib/steam/library";

export default function GameCard({ game }: { game: GameType }) {
  const formatHours = (minutes: number) => (minutes / 60).toFixed(2);

  const lastPlayedText = (timestamp: number) => {
    if (!timestamp) return null;
    const lastPlayedDate = new Date(timestamp * 1000);
    const now = new Date();
    const diffHours = (
      (now.getTime() - lastPlayedDate.getTime()) /
      (1000 * 60 * 60)
    ).toFixed(2);
    return `${diffHours}h since last play`;
  };

  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-lg h-48 flex items-end group"
      style={{
        backgroundImage: `url(${game.cover_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent p-3
                      transition-all duration-300 ease-in-out max-h-16 group-hover:max-h-full overflow-hidden"
      >
        <h2 className="text-white text-lg font-bold truncate">{game.name}</h2>
        <p className="text-gray-300 text-sm">
          {formatHours(game.playtime_forever)}h played total
        </p>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
          {game.playtime_2weeks && game.playtime_2weeks > 0 && (
            <p className="text-gray-300 text-sm">
              {formatHours(game.playtime_2weeks)}h in last 2 weeks
            </p>
          )}
          {game.rtime_last_played && game.rtime_last_played > 0 && (
            <p className="text-gray-300 text-sm">
              {lastPlayedText(game.rtime_last_played)}
            </p>
          )}
          {game.playtime_mac_forever > 0 && (
            <p className="text-gray-300 text-sm">
              {formatHours(game.playtime_mac_forever)}h on Mac
            </p>
          )}
          {game.playtime_linux_forever > 0 && (
            <p className="text-gray-300 text-sm">
              {formatHours(game.playtime_linux_forever)}h on Linux
            </p>
          )}
          {game.playtime_deck_forever > 0 && (
            <p className="text-gray-300 text-sm">
              {formatHours(game.playtime_deck_forever)}h on Steam Deck
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
