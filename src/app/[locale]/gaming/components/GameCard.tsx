import Card from "@/components/ui/Card";
import { GameType } from "@/lib/library";
import { getTimeAgo, formatDuration } from "@/utils/date";
import Image from "next/image";

export default function GameCard({ game }: { game: GameType }) {
  const explicitPatterns = [/🔞/i, /sexy/i, /nsfw/i, /adult/i, /sex/i, /xxx/i];

  function isExplicitName(name: string) {
    return explicitPatterns.some((pattern) => pattern.test(name));
  }

  const isExplicit = isExplicitName(game.name);
  const coverUrl = !isExplicit ? game.cover_url : "";

  return (
    <div data-aos="fade-up" className="h-full flex">
      <Card className="group">
        <div className="relative mb-4 h-48 w-full overflow-hidden rounded-md border border-stone-300 dark:border-stone-700">
          {coverUrl ? (
            <Image
              src={coverUrl}
              alt={isExplicit ? "Private" : game.name}
              fill
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <span className="border-l-2 border-orange-500 pl-2 text-xs text-stone-500 dark:text-stone-400">Private</span>
          )}
        </div>

        <p className="mb-2 text-xl font-bold line-clamp-2">
          {isExplicit ? "Private" : game.name}
        </p>

        <div className="mt-1 flex flex-wrap gap-3 text-sm">
          <div>
            <span className="font-semibold">Total:</span>{" "}
            {formatDuration(game.playtime_forever)}
          </div>
          {game.playtime_2weeks && game.playtime_2weeks > 0 && (
            <div>
              <span className="font-semibold">2 Weeks:</span>{" "}
              {formatDuration(game.playtime_2weeks)}
            </div>
          )}
        </div>

        <div className="mt-3 grid gap-1 border-l-2 border-orange-500 pl-3 text-xs">
          {game.playtime_mac_forever > 0 && (
            <div>
              <span className="font-semibold">Mac:</span>{" "}
              {formatDuration(game.playtime_mac_forever)}
            </div>
          )}
          {game.playtime_linux_forever > 0 && (
            <div>
              <span className="font-semibold">Linux:</span>{" "}
              {formatDuration(game.playtime_linux_forever)}
            </div>
          )}
          {game.playtime_deck_forever > 0 && (
            <div>
              <span className="font-semibold">Deck:</span>{" "}
              {formatDuration(game.playtime_deck_forever)}
            </div>
          )}
          {game.rtime_last_played && game.rtime_last_played > 0 && (
            <div>
              <span className="font-semibold">Last Played:</span>{" "}
              {getTimeAgo(game.rtime_last_played)}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
