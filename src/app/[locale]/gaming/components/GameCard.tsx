import Card from "@/components/ui/Card";
import { GameType } from "@/lib/steam/library";
import { getTimeAgo, toHours } from "@/utils/date";
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
        <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4">
          {coverUrl ? (
            <Image
              src={coverUrl}
              alt={isExplicit ? "Private" : game.name}
              fill
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <span className="text-xs text-zinc-400">Private</span>
          )}
        </div>

        <p className="mb-2 text-xl font-bold line-clamp-2">
          {isExplicit ? "Private" : game.name}
        </p>

        <div className="mt-1 flex flex-wrap gap-3 text-sm">
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

        <div className="mt-2 grid gap-1 text-xs">
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
      </Card>
    </div>
  );
}
