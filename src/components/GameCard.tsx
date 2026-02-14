import { GameType } from "@/lib/steam/library";
import { getTimeAgo, toHours } from "@/utils/date";

export default function GameCard({ game }: { game: GameType }) {
  const explicitPatterns = [/🔞/i, /sexy/i, /nsfw/i, /adult/i, /sex/i, /xxx/i];

  function isExplicitName(name: string) {
    return explicitPatterns.some((pattern) => pattern.test(name));
  }

  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-lg h-48 flex items-end group"
      style={{
        backgroundImage: `url(${isExplicitName(game.name) ? "" : game.cover_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900/80 via-gray-900/90 to-transparent p-3
                      transition-all duration-300 ease-in-out max-h-16 group-hover:max-h-full overflow-hidden"
      >
        <h2 className="text-white text-lg font-bold truncate">
          {isExplicitName(game.name) ? "Private" : game.name}
        </h2>
        <div className="flex flex-row gap-3">
          <div className="text-gray-300 text-sm">
            <span className="font-bold">Total:</span>{" "}
            {toHours(game.playtime_forever)}h
          </div>
          {game.playtime_2weeks && game.playtime_2weeks > 0 && (
            <div className="text-gray-300 text-sm">
              <span className="font-bold">2 Weeks:</span>{" "}
              {toHours(game.playtime_2weeks)}h
            </div>
          )}
        </div>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
          {game.playtime_mac_forever > 0 && (
            <div className="text-gray-300 text-sm">
              <span className="font-bold">Mac:</span>{" "}
              {toHours(game.playtime_mac_forever)}h
            </div>
          )}
          {game.playtime_linux_forever > 0 && (
            <div className="text-gray-300 text-sm">
              <span className="font-bold">Linux:</span>{" "}
              {toHours(game.playtime_linux_forever)}h
            </div>
          )}
          {game.playtime_deck_forever > 0 && (
            <div className="text-gray-300 text-sm">
              <span className="font-bold">Deck:</span>{" "}
              {toHours(game.playtime_deck_forever)}h
            </div>
          )}
          {game.rtime_last_played && game.rtime_last_played > 0 && (
            <div className="text-gray-300 text-sm">
              <span className="font-bold">Last Played:</span>{" "}
              {getTimeAgo(game.rtime_last_played)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
