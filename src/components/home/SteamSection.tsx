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

  const totalPlaytime2Weeks = steamActivities.reduce((sum, game) => {
      return sum + (game.playtime_2weeks ?? 0);
  }, 0);

  const gameWithHighestPlaytime = steamActivities.reduce((maxGame, game) => {
      const playtime = game.playtime_2weeks ?? 0;
      return playtime > (maxGame.playtime_2weeks ?? 0) ? game : maxGame;
  }, steamActivities[0]);

  const sortedByPlaytime2Weeks = [...steamActivities].sort((a, b) => {
      const aPlaytime = a.playtime_2weeks ?? 0;
      const bPlaytime = b.playtime_2weeks ?? 0;
      return bPlaytime - aPlaytime; // highest first
  });

  return (
    <>
      <h4
        className="text-center text-3xl mb-4 text-amber-500"
        data-aos="fade-up"
      >
        Gaming Stats
      </h4>
      <p
        className="text-center text-gray-400 max-w-2xl mx-auto mb-6"
        data-aos="fade-up"
      >
        A snapshot of my gaming activity across various genres and titles.
        Tracked automatically to reflect real gaming time and habits.
      </p>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-3xl font-bold">{formatHours(totalPlaytime2Weeks)}  hrs</p>
          <p className="text-sm text-slate-500">in the last 14 days</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-500">Top game</p>
          <p className="font-medium">{gameWithHighestPlaytime.name}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 md:grid-cols-5 xl:grid-cols-7 gap-3 mb-10">
        {sortedByPlaytime2Weeks.slice(0, 5).map((game) => (
          <div key={game.name} className="p-3" data-aos="fade-up">
            <p className="text-sm text-slate-500">{game.name}</p>
            <p className="font-semibold">
              {formatHours(game.playtime_2weeks ?? 0)} hrs
            </p>
          </div>
        ))}
      </div>

      <h4
        className="text-center text-3xl mb-4 text-amber-500"
        data-aos="fade-up"
      >
        Most Played Games
      </h4>
      <p
        className="text-center text-gray-400 max-w-2xl mx-auto mb-6"
        data-aos="fade-up"
      >
        Games I’ve spent the most time playing and enjoying. A mix of favorites
        that reflect my taste and playstyle over time.
      </p>

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
                        <div className="text-sm">
                          <span className="font-bold">2 Weeks:</span>{" "}
                          {formatHours(game.playtime_2weeks)}h
                        </div>
                      )}

                      {game.playtime_mac_forever > 0 && (
                        <div className="text-sm">
                          <span className="font-bold">Mac:</span>{" "}
                          {formatHours(game.playtime_mac_forever)}h
                        </div>
                      )}
                      {game.playtime_linux_forever > 0 && (
                        <div className="text-sm">
                          <span className="font-bold">Linux:</span>{" "}
                          {formatHours(game.playtime_linux_forever)}h
                        </div>
                      )}
                      {game.playtime_deck_forever > 0 && (
                        <div className="text-sm">
                          <span className="font-bold">Deck:</span>{" "}
                          {formatHours(game.playtime_deck_forever)}h
                        </div>
                      )}
                      {game.rtime_last_played && game.rtime_last_played > 0 && (
                        <div className="text-sm">
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
    </>
  );
}
