import { fetchSteamLibrary, GameType } from "@/lib/steam/library";
import { getTimeAgo, toHours } from "@/utils/date";
import Image from "next/image";

export default async function SteamSection() {
  const steamActivities: GameType[] = await fetchSteamLibrary();
  const mostPlayedGames = [...steamActivities].sort(
    (a, b) => b.playtime_forever - a.playtime_forever,
  );
  const top10 = mostPlayedGames.slice(0, 15);
  const explicitPatterns = [/🔞/i, /sexy/i, /nsfw/i, /adult/i, /sex/i, /xxx/i];

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

  function sanitizeGameName(name: string) {
    const isExplicit = explicitPatterns.some((pattern) => pattern.test(name));
    return isExplicit ? "Private" : name;
  }

  return (
    <>
      <div className="relative py-28 px-6 overflow-hidden">
        <div className="text-center">
          <h4
            className="text-sm font-semibold tracking-widest text-green-500 uppercase mb-3"
            data-aos="fade-up"
          >
            Steam
          </h4>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Gaming Activity
          </h2>
          <p className="max-w-2xl mx-auto mb-6" data-aos="fade-up">
            A snapshot of my gaming activity across various genres and titles.
            Tracked automatically to reflect real gaming time and habits.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold">
              {toHours(totalPlaytime2Weeks)} hrs
            </p>
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
              <p className="text-sm text-slate-500">
                {sanitizeGameName(game.name)}
              </p>
              <p className="font-semibold">
                {toHours(game.playtime_2weeks ?? 0)} hrs
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative py-28 px-6 overflow-hidden">
        <div className="text-center">
          <h4
            className="text-sm font-semibold tracking-widest text-indigo-500 uppercase mb-3"
            data-aos="fade-up"
          >
            Top Games
          </h4>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Most Played Games
          </h2>
          <p className="max-w-2xl mx-auto mb-6" data-aos="fade-up">
            Games I’ve spent the most time playing and enjoying. A mix of
            favorites that reflect my taste and playstyle over time.
          </p>
        </div>

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
              md:w-1/6 flex-1 flex flex-col items-center
              ${isEven ? "md:order-1" : "md:order-2"}
            `}
                >
                  <span className="text-6xl font-bold text-gray-400 block">
                    {game.name}
                  </span>
                  <span className="text-2xl font-bold text-gray-400 block">
                    {toHours(game.playtime_forever)} Total Hours
                  </span>
                </div>

                <div className={`flex-1 ${isEven ? "order-2" : "order-1"}`}>
                  <div data-aos="fade-up">
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:scale-95 hover:backdrop-blur-xl transition-transform duration-300 shadow-lg/10">
                      <Image
                        src={game.cover_url}
                        alt={game.name}
                        width={800}
                        height={400}
                        className="w-full h-auto mb-4 rounded-2xl"
                      />
                      <div className="flex flex-row gap-3">
                        {game.playtime_2weeks && game.playtime_2weeks > 0 && (
                          <div className="text-sm">
                            <span className="font-bold">2 Weeks:</span>{" "}
                            {toHours(game.playtime_2weeks)}h
                          </div>
                        )}

                        {game.playtime_mac_forever > 0 && (
                          <div className="text-sm">
                            <span className="font-bold">Mac:</span>{" "}
                            {toHours(game.playtime_mac_forever)}h
                          </div>
                        )}
                        {game.playtime_linux_forever > 0 && (
                          <div className="text-sm">
                            <span className="font-bold">Linux:</span>{" "}
                            {toHours(game.playtime_linux_forever)}h
                          </div>
                        )}
                        {game.playtime_deck_forever > 0 && (
                          <div className="text-sm">
                            <span className="font-bold">Deck:</span>{" "}
                            {toHours(game.playtime_deck_forever)}h
                          </div>
                        )}
                        {game.rtime_last_played &&
                          game.rtime_last_played > 0 && (
                            <div className="text-sm">
                              <span className="font-bold">Last Played:</span>{" "}
                              {getTimeAgo(game.rtime_last_played)}
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
      </div>
    </>
  );
}
