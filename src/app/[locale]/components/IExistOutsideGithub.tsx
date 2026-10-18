import Card from "@/components/ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faSteam, faStrava } from "@fortawesome/free-brands-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type Item = {
  title: string;
  icon: IconDefinition;
  summary: string;
  why: string;
  link: string;
};

const Items: Item[] = [
  {
    title: "Strava",
    icon: faStrava,
    summary: "Touching grass, but making it competitive.",
    why: "Touching grass doesn't count unless there's GPS data to prove it.",
    link: "https://strava.app.link/nYjhFm8jj7b",
  },
  {
    title: "Steam",
    icon: faSteam,
    summary: "My backlog has better uptime than my free time.",
    why: "Buying games and actually playing them are two separate hobbies.",
    link: "https://steamcommunity.com/id/mrepol742",
  },
  {
    title: "LiveChart.me",
    icon: faVideo,
    summary:
      "Keeping track of seasonal anime so I never run out of fictional people to get attached to.",
    why: "Keeping up with fictional people has a schedule, and apparently, I respect it more than my own.",
    link: "https://www.livechart.me/users/mrepol742/library",
  },
];

// ive no idea what to name this function so it is what it is
export default function IExistOutsideGithub() {
  return (
    <div id="investing" className="w-full">
      <div className="grid gap-4 sm:grid-cols-2">
        {Items.map((item) => (
          <Card key={item.title} className="h-full">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-orange-600 text-white">
                <FontAwesomeIcon icon={item.icon} />
              </span>
              <h3 className="font-bold">{item.title}</h3>
            </div>

            <p className="mb-2">{item.summary}</p>
            <p className="mb-4 text-sm opacity-80">{item.why}</p>

            <Link href={item.link} className="homepage-text-link">
              {item.link.substring(8, 30)}... <span aria-hidden="true">→</span>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
