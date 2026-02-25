interface Team {
  id: number;
  name: string;
}

interface MatchScore {
  winner: "HOME_TEAM" | "AWAY_TEAM" | "DRAW" | null;
  fullTime: {
    home: number | null;
    away: number | null;
  };
}

interface Match {
  homeTeam: Team;
  awayTeam: Team;
  score: MatchScore;
}

interface TeamForm {
  result: "W" | "D" | "L";
  goalsFor: number;
  goalsAgainst: number;
}

export interface Prediction {
  teams: {
    homeTeamName: string;
    awayTeamName: string;
  };
  homeProb: number;
  awayProb: number;
  predictedWinner: "Home Team" | "Away Team";
}

const CACHE_TTL = 60 * 60 * 1000; // 1 hour
let cachedPredictions: Prediction[] | null = null;
let lastFetched: number | null = null;
const API_TOKEN = process.env.FOOTBALL_DATA_API_KEY ?? "";
const today = new Date().toISOString().split("T")[0];

export async function getFootballPredictions(): Promise<Prediction[]> {
  const now = Date.now();

  if (cachedPredictions && lastFetched && now - lastFetched < CACHE_TTL)
    return cachedPredictions;

  const response = await fetch(
    `https://api.football-data.org/v4/matches?dateFrom=${today}&dateTo=${today}`,
    { headers: { "X-Auth-Token": API_TOKEN } },
  );

  if (!response.ok) throw new Error("Failed to fetch matches");

  const data: { matches: Match[] } = await response.json();

  const predictions: Prediction[] = [];

  for (const match of data.matches) {
    const [homeMatches, awayMatches] = await Promise.all([
      getLastFiveMatches(match.homeTeam.id),
      getLastFiveMatches(match.awayTeam.id),
    ]);

    const prediction = calculateProbabilities(
      { homeTeamName: match.homeTeam.name, awayTeamName: match.awayTeam.name },
      homeMatches,
      awayMatches,
    );
    predictions.push(prediction);
  }

  cachedPredictions = predictions;
  lastFetched = now;

  return predictions;
}

function calculateProbabilities(
  teams: { homeTeamName: string; awayTeamName: string },
  homeMatches: TeamForm[],
  awayMatches: TeamForm[],
): Prediction {
  const calcFormPoints = (matches: TeamForm[]) =>
    matches.reduce((sum, m) => {
      if (m.result === "W") return sum + 3;
      if (m.result === "D") return sum + 1;
      return sum;
    }, 0);

  const calcGoalsDiff = (matches: TeamForm[]) =>
    matches.reduce((sum, m) => sum + (m.goalsFor - m.goalsAgainst), 0);

  const homeScore =
    calcFormPoints(homeMatches) * 0.6 + calcGoalsDiff(homeMatches) * 0.4;

  const awayScore =
    calcFormPoints(awayMatches) * 0.6 + calcGoalsDiff(awayMatches) * 0.4;

  const total = homeScore + awayScore || 1; // prevent divide by zero

  const homeProb = Math.round((homeScore / total) * 100);
  const awayProb = 100 - homeProb;

  return {
    teams,
    homeProb,
    awayProb,
    predictedWinner: homeProb >= awayProb ? "Home Team" : "Away Team",
  };
}

async function getLastFiveMatches(teamId: number): Promise<TeamForm[]> {
  const response = await fetch(
    `https://api.football-data.org/v4/teams/${teamId}/matches?status=FINISHED&dateTo=${today}&dateFrom=${today}&limit=5`,
    { headers: { "X-Auth-Token": API_TOKEN } },
  );

  const data: { matches: Match[] } = await response.json();
  console.log(JSON.stringify(data));
  if (!response.ok) throw new Error("Failed to fetch team matches");

  return data.matches.map((match): TeamForm => {
    const isHome = match.homeTeam.id === teamId;

    const goalsFor = isHome
      ? (match.score.fullTime.home ?? 0)
      : (match.score.fullTime.away ?? 0);

    const goalsAgainst = isHome
      ? (match.score.fullTime.away ?? 0)
      : (match.score.fullTime.home ?? 0);

    let result: "W" | "D" | "L" = "D";

    if (match.score.winner === "DRAW") result = "D";
    else if (
      (match.score.winner === "HOME_TEAM" && isHome) ||
      (match.score.winner === "AWAY_TEAM" && !isHome)
    )
      result = "W";
    else result = "L";

    return { result, goalsFor, goalsAgainst };
  });
}
