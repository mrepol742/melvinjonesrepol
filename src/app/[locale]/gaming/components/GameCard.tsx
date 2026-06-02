import { GameType } from "@/lib/steam/library";
import { getTimeAgo, toHours } from "@/utils/date";

export default function GameCard({ game }: { game: GameType }) {
  const explicitPatterns = [/🔞/i, /sexy/i, /nsfw/i, /adult/i, /sex/i, /xxx/i];

  function isExplicitName(name: string) {
    return explicitPatterns.some((pattern) => pattern.test(name));
  }

  const isExplicit = isExplicitName(game.name);
  const coverUrl = !isExplicit ? game.cover_url : "";

  return (
    <div
      className="group h-48 rounded-lg border border-zinc-800 p-4 flex gap-4"
      data-aos="fade-up"
    >
      <div className="h-full w-32 shrink-0 overflow-hidden rounded-md border border-zinc-800 flex items-center justify-center">
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={isExplicit ? "Private" : game.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-xs text-zinc-400">Private</span>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <h2 className="text-zinc-100 text-lg font-semibold truncate">
          {isExplicit ? "Private" : game.name}
        </h2>

        <div className="mt-1 flex flex-wrap gap-3 text-sm text-zinc-300">
          <div>
            <span className="font-semibold">Total:</span>{" "}
            {toHours(game.playtime_forever)}h
          </div>
          {game.playtime_2weeks && game.playtime_2weeks > 0 && (
            <div>
              <span className="font-semibold">2 Weeks:</span>{" "}
              {toHours(game.playtime_2weeks)}h
            </div>
          )}
        </div>

        <div className="mt-2 grid gap-1 text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {game.playtime_mac_forever > 0 && (
            <div>
              <span className="font-semibold">Mac:</span>{" "}
              {toHours(game.playtime_mac_forever)}h
            </div>
          )}
          {game.playtime_linux_forever > 0 && (
            <div>
              <span className="font-semibold">Linux:</span>{" "}
              {toHours(game.playtime_linux_forever)}h
            </div>
          )}
          {game.playtime_deck_forever > 0 && (
            <div>
              <span className="font-semibold">Deck:</span>{" "}
              {toHours(game.playtime_deck_forever)}h
            </div>
          )}
          {game.rtime_last_played && game.rtime_last_played > 0 && (
            <div>
              <span className="font-semibold">Last Played:</span>{" "}
              {getTimeAgo(game.rtime_last_played)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
