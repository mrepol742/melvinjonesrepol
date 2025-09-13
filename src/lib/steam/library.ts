const STEAM_API_KEY = process.env.STEAM_API_KEY;
const STEAM_ID = process.env.STEAM_ID;

interface GameType {
  appid: number;
  name: string;
  playtime_forever: number;
}

export async function fetchSteamLibrary() {
  if (!STEAM_API_KEY || !STEAM_ID) {
    throw new Error("Missing STEAM_API_KEY or STEAM_ID in environment");
  }

  const res = await fetch(
    `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${STEAM_API_KEY}&steamid=${STEAM_ID}&include_appinfo=true&include_played_free_games=true`,
    { next: { revalidate: 300 } },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch Steam library: ${res.statusText}`);
  }

  const data = await res.json();

  return data.response.games.map((game: GameType) => ({
    appid: game.appid,
    name: game.name,
    playtime_hours: Math.floor(game.playtime_forever / 60),
    cover_url: `https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/header.jpg`,
  }));
}
