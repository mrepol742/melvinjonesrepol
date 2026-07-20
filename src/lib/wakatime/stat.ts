const WAKATIME_API_KEY = process.env.WAKATIME_API_KEY;

export interface Agent {
  name: string;
  lines: number;
  cost: number;
}

export interface Data {
  decimal: string;
  digital: string;
  hours: number;
  minutes: number;
  name: string;
  percent: number;
  text: string;
  total_seconds: number;
  ai_additions: number;
  ai_deletions: number;
  human_additions: number;
  human_deletions: number;
  ai_input_tokens: number;
  ai_output_tokens: number;
  ai_agent_breakdown: Agent[];
}

export interface Stat {
  data: {
    daily_average: number;
    daily_average_including_other_language: number;
    projects: Data[];
    editors: Data[];
    operating_systems: Data[];
    languages: Data[];
    categories: Data[];
    machines: Data[];
    total_seconds: number;
    best_day: {
      date: string;
      text: string;
      total_seconds: number;
    };
  };
  last_fetched: string;
}

export async function fetchCurrentStats(): Promise<Stat | undefined> {
  try {
    if (!WAKATIME_API_KEY)
      throw new Error("Missing WAKATIME_API_KEY in environment");

    const res = await fetch(
      `https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=${WAKATIME_API_KEY}`,
      { next: { revalidate: 10800 } }, // 3hours
    );

    if (!res.ok)
      throw new Error(`Failed to fetch wakatime stats: ${res.statusText}`);

    const data: Stat = await res.json();

    return {
      ...data,
      last_fetched: new Date().toUTCString(),
    };
  } catch (err) {
    console.error("Error fetching wakatime stats:", err);
    return undefined;
  }
}
