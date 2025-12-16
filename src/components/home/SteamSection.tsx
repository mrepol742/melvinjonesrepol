import { fetchSteamLibrary, GameType } from "@/lib/steam/library";
import Image from "next/image";

export default async function SteamSection() {
  const steamActivities: GameType[] = await fetchSteamLibrary();
  const mostPlayedGames = [...steamActivities].sort(
    (a, b) => b.playtime_forever - a.playtime_forever,
  );
  const top10 = mostPlayedGames.slice(0, 15);

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
    <div className="flex flex-col gap-10 mb-10">
      {top10.map((game: GameType, idx) => {
        const isEven = idx % 2 === 0;

        return (
          <div
            key={game.appid}
            data-aos="fade-up"
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <div
              className={`
              md:w-1/6 flex-1
              ${isEven ? "md:order-1" : "md:order-2"}
            `}
            >
              <span className="text-6xl font-bold text-gray-400 block">
                {game.name}
              </span>
              <span className="text-2xl font-bold text-gray-400 block">
                {formatHours(game.playtime_forever)} Total Hours
              </span>
            </div>
            <div className={`flex-1 ${isEven ? "order-2" : "order-1"}`}>
              <div data-aos="fade-up">
                <div
                  className={`bg-black/10 backdrop-blur rounded p-6 hover:scale-98 transition-transform duration-300`}
                >
                  <Image
                    src={game.cover_url}
                    alt={game.name}
                    width={800}
                    height={400}
                    className="w-full h-auto mb-4 rounded"
                  />
                  <div className="flex flex-row gap-3">
                    {game.playtime_2weeks && game.playtime_2weeks > 0 && (
                      <div className="text-gray-300 text-sm">
                        <span className="font-bold">2 Weeks:</span>{" "}
                        {formatHours(game.playtime_2weeks)}h
                      </div>
                    )}

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
            </div>
          </div>
        );
      })}
    </div>
  );
}
