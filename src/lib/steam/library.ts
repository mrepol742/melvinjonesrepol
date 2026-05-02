const STEAM_API_KEY = process.env.STEAM_API_KEY;
const STEAM_ID = process.env.STEAM_ID;

export interface GameType {
  appid: number;
  name: string;
  img_icon_url: string;
  cover_url: string;
  playtime_2weeks: undefined | number;
  playtime_forever: number;
  playtime_windows_forever: number;
  playtime_mac_forever: number;
  playtime_linux_forever: number; // i used arch btw,
  playtime_deck_forever: number;
  rtime_last_played: number;
  playtime_disconnected: number;
  content_descriptorids: undefined | number[];
  has_community_visible_stats: undefined | boolean;
}

export async function fetchSteamLibrary() {
  try {
    if (!STEAM_API_KEY || !STEAM_ID) {
      console.error("Missing STEAM_API_KEY or STEAM_ID in environment");
      return [];
    }

    const res = await fetch(
      `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${STEAM_API_KEY}&steamid=${STEAM_ID}&include_appinfo=true&include_played_free_games=true`,
      { next: { revalidate: 10800 } }, // 3hours
    );

    if (!res.ok) {
      console.error(`Failed to fetch Steam library: ${res.statusText}`);
      return [];
    }

    const data = await res.json();

    return {
      games: data.response.games.map((game: GameType) => ({
        ...game,
        cover_url: `https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/header.jpg`,
      })),
      last_fetched: new Date().toUTCString(),
    };
  } catch (err) {
    console.error(err);
    return [];
  }
}
