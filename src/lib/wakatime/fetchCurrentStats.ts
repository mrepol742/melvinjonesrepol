const WAKATIME_API_KEY = process.env.WAKATIME_API_KEY;

export interface Data {
  decimal: string;
  digital: string;
  hours: number;
  minutes: number;
  name: string;
  percent: number;
  text: string;
  total_seconds: number;
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
}

export async function fetchCurrentStats(): Promise<Stat | undefined> {
  try {
    if (!WAKATIME_API_KEY) {
      console.error("Missing WAKATIME_API_KEY in environment");
      return undefined;
    }

    const res = await fetch(
      `https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=${WAKATIME_API_KEY}`,
      { next: { revalidate: 86400 } },
    );

    if (!res.ok) {
      console.error(`Failed to fetch wakatime stats: ${res.statusText}`);
      return undefined;
    }

    return (await res.json()) as Stat;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}
