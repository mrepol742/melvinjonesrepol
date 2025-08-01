import { NextResponse } from "next/server";

const STEAM_API_KEY = process.env.STEAM_API_KEY;
const STEAM_ID = process.env.STEAM_ID;

interface GameType {
  appid: number;
  name: string;
  playtime_forever: number;
}

export async function GET() {
  try {
    const res = await fetch(
      `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${STEAM_API_KEY}&steamid=${STEAM_ID}&include_appinfo=true&include_played_free_games=true`
    );

    if (!res.ok) {
      throw new Error(`Steam API error: ${res.statusText}`);
    }

    const data = await res.json();
    const games = data.response.games.map((game: GameType) => ({
      appid: game.appid,
      name: game.name,
      playtime_hours: Math.floor(game.playtime_forever / 60),
      cover_url: `https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/header.jpg`,
    }));

    return NextResponse.json({ success: true, games });
  } catch (error) {
    console.error("Steam fetch failed:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
