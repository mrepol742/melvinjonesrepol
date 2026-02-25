import { getFootballPredictions, Prediction } from "@/lib/football-predictions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Today's Football Matches - Melvin Jones Repol",
  description:
    "Football match predictions based on team performance, player statistics, injuries, and historical data. Explore common approaches to predicting football matches.",
  keywords: [],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/todays-football-matches",
  },
  openGraph: {
    title: "Today's Football Matches - Melvin Jones Repol",
    description:
      "Football match predictions based on team performance, player statistics, injuries, and historical data. Explore common approaches to predicting football matches.",
    url: "https://www.melvinjonesrepol.com/todays-football-matches",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
        width: 1200,
        height: 630,
        alt: "Projects Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Today's Football Matches - Melvin Jones Repol",
    description:
      "Football match predictions based on team performance, player statistics, injuries, and historical data. Explore common approaches to predicting football matches.",
    images: [
      "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
    ],
    creator: "@mrepol742",
  },
};

export default async function FootballMatchesPredictions() {
  const response: Prediction[] = await getFootballPredictions();

  return (
    <main className="my-18 p-3 md:p-8">
      <section>
        <h1 className="text-2xl font-semibold">Today's Football Matches</h1>
        <p>
          Football match predictions are based on various factors such as team
          performance and historical data.
        </p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {response.map((prediction: Prediction, index) => {
            const isHomeWinner =
              prediction.predictedWinner === prediction.teams.homeTeamName;

            return (
              <div
                key={index}
                className="p-6  shadow-lg rounded-2xl border hover:shadow-xl transition"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">
                    {prediction.teams.homeTeamName}
                    <span className="mx-2 text-gray-400">vs</span>
                    {prediction.teams.awayTeamName}
                  </h2>

                  <span className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-medium">
                    Predicted Winner
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-6 text-center">
                  🏆 {prediction.predictedWinner}
                </h3>

                <div className="mb-4">
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <span
                      className={
                        isHomeWinner ? "text-green-600 font-semibold" : ""
                      }
                    >
                      {prediction.teams.homeTeamName}
                    </span>
                    <span>{prediction.homeProb}%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-500 ${
                        isHomeWinner ? "bg-green-500" : "bg-blue-500"
                      }`}
                      style={{ width: `${prediction.homeProb}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <span
                      className={
                        !isHomeWinner ? "text-green-600 font-semibold" : ""
                      }
                    >
                      {prediction.teams.awayTeamName}
                    </span>
                    <span>{prediction.awayProb}%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-500 ${
                        !isHomeWinner ? "bg-green-500" : "bg-red-500"
                      }`}
                      style={{ width: `${prediction.awayProb}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
