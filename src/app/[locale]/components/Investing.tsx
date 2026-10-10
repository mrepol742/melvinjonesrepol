import Card from "@/components/ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faChartLine,
  faIndustry,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Focus = {
  title: string;
  icon: IconDefinition;
  summary: string;
  why: string;
};

const FOCUS_AREAS: Focus[] = [
  {
    title: "REITs",
    icon: faBuilding,
    summary:
      "Real estate exposure without owning a building, through listed property trusts.",
    why: "Income-focused. I watch distributions, occupancy and the quality of the underlying properties.",
  },
  {
    title: "Construction",
    icon: faIndustry,
    summary:
      "Companies that build the roads, buildings and utilities a growing economy keeps needing.",
    why: "A long-term bet on infrastructure spending and development. Cyclical, so I size it carefully.",
  },
  {
    title: "S&P 500 Feeder Funds",
    icon: faChartLine,
    summary:
      "Broad exposure to 500 large US companies through a locally available feeder fund.",
    why: "Low-effort diversification across sectors. The core of a long-term, buy-and-hold approach.",
  },
  {
    title: "Nasdaq Feeder Funds",
    icon: faMicrochip,
    summary:
      "A tilt toward large US technology and growth companies through a feeder fund.",
    why: "Higher growth potential with higher volatility, so it complements the broader S&P exposure.",
  },
];

export default function Investing() {
  return (
    <div id="investing" className="w-full">
      <div className="grid gap-4 sm:grid-cols-2">
        {FOCUS_AREAS.map((item) => (
          <Card key={item.title} className="h-full">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-orange-600 text-white">
                <FontAwesomeIcon icon={item.icon} />
              </span>
              <h3 className="font-bold">{item.title}</h3>
            </div>

            <p className="mb-2">{item.summary}</p>
            <p className="mb-4 text-sm opacity-80">{item.why}</p>
          </Card>
        ))}
      </div>

      <p className="mt-4 text-xs opacity-70">
        Personal notes only, not financial advice or a recommendation to buy or
        sell anything. Investments carry risk, including loss of principal.
      </p>
    </div>
  );
}
