"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function RecentGithubActivityWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="fixed bottom-4 left-4 w-55 md:w-75" data-aos="slide-right">
      <div className="rounded-lg bg-white shadow-lg text-sm">
        <div className="flex items-center justify-between px-4 py-2">
          <h2 className="text-base font-semibold text-black hidden md:block">
            Public Contributions
          </h2>
          <h2 className="text-base font-semibold text-black block md:hidden">
            Contributions
          </h2>
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-2 text-gray-500 hover:text-gray-700"
            aria-label={expanded ? "Collapse" : "Expand"}
          >
            <FontAwesomeIcon
              icon={expanded ? faChevronDown : faChevronUp}
              className="h-4 w-4"
            />
          </button>
        </div>

        <div
          className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${
            expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
