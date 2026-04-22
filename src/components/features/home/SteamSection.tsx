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
            Gaming Activity
          </h4>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            I do play games, you know?
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
            <p className="text-sm">in the last 14 days</p>
          </div>
          <div className="text-right">
            <p className="text-sm">Top game</p>
            <p className="font-medium">{gameWithHighestPlaytime.name}</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 md:grid-cols-5 xl:grid-cols-7 gap-3 mb-10">
          {sortedByPlaytime2Weeks.slice(0, 5).map((game, index) => (
            <article key={index} className="p-3" data-aos="fade-up">
              <p className="text-sm">{sanitizeGameName(game.name)}</p>
              <p className="font-semibold">
                {toHours(game.playtime_2weeks ?? 0)} hrs
              </p>
            </article>
          ))}
        </div>

        <span className="text-xs">
          I mainly play racing and strategy games—if you spot anything else, it
          probably isn’t me.
        </span>
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
            My All-Time Favorites
          </h2>
          <p className="max-w-2xl mx-auto mb-6" data-aos="fade-up">
            Games I’ve spent the most time playing and enjoying. A mix of
            favorites that reflect my taste and playstyle over time.
          </p>
        </div>

        <div
          className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-6 py-6 scrollbar-hide"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
          }}
        >
          {top10.map((game: GameType, index) => (
            <article
              key={index}
              className="group snap-start flex-shrink-0 w-80 md:w-96"
            >
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg/10">
                <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={game.cover_url}
                    alt={game.name}
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl font-bold text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl font-bold">{game.name}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm bg-gray-500/20">
                    {toHours(game.playtime_forever)} Total Hours
                  </span>
                </div>

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
                  {game.rtime_last_played && game.rtime_last_played > 0 && (
                    <div className="text-sm">
                      <span className="font-bold">Last Played:</span>{" "}
                      {getTimeAgo(game.rtime_last_played)}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <span className="text-xs">Swipe left or right to see more...</span>
      </div>
    </>
  );
}
