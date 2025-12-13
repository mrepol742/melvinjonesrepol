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
    return `${diffHours}h`;
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
        className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900/80 via-gray-900/90 to-transparent p-3
                      transition-all duration-300 ease-in-out max-h-16 group-hover:max-h-full overflow-hidden"
      >
        <h2 className="text-white text-lg font-bold truncate">{game.name}</h2>
        <div className="flex flex-row gap-3">
          <div className="text-gray-300 text-sm">
            <span className="font-bold">Total:</span>{" "}
            {formatHours(game.playtime_forever)}h
          </div>
          {game.playtime_2weeks && game.playtime_2weeks > 0 && (
            <div className="text-gray-300 text-sm">
              <span className="font-bold">2 Weeks:</span>{" "}
              {formatHours(game.playtime_2weeks)}h
            </div>
          )}
        </div>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
          {game.playtime_mac_forever > 0 && (
            <div className="text-gray-300 text-sm">
              <span className="font-bold">Mac:</span>{" "}
              {formatHours(game.playtime_mac_forever)}h
            </div>
          )}
          {game.playtime_linux_forever > 0 && (
            <div className="text-gray-300 text-sm">
              <span className="font-bold">Linux:</span>{" "}
              {formatHours(game.playtime_linux_forever)}h
            </div>
          )}
          {game.playtime_deck_forever > 0 && (
            <div className="text-gray-300 text-sm">
              <span className="font-bold">Deck:</span>{" "}
              {formatHours(game.playtime_deck_forever)}h
            </div>
          )}
          {game.rtime_last_played && game.rtime_last_played > 0 && (
            <div className="text-gray-300 text-sm">
              <span className="font-bold">Last Played:</span>{" "}
              {lastPlayedText(game.rtime_last_played)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
