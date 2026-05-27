"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function RecentGithubActivityWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!panelRef.current) return;
      if (open && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <>
      <div className="fixed bottom-4 left-4 z-50">
        <button
          aria-expanded={open}
          aria-haspopup="dialog"
          aria-label={
            open ? "Close GitHub contributions" : "Open GitHub contributions"
          }
          onClick={() => setOpen((s) => !s)}
          className={`${!open ? "flex" : "hidden"} h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white shadow-lg transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${open ? "bg-gray-700" : ""}`}
        >
          <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
        </button>

        {open && (
          <div
            ref={panelRef}
            role="dialog"
            aria-label="Public contributions"
            className="mt-3 w-72 bg-white rounded shadow-lg text-sm text-gray-800"
            style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
            data-aos="fade-up"
          >
            <div className="flex items-center justify-between px-3 py-2 border-b">
              <h3 className="text-sm font-semibold">Public Contributions</h3>
              <button
                className="p-1 text-gray-600 hover:text-gray-800"
                aria-label="Close"
                onClick={() => setOpen(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="p-3">{children}</div>
          </div>
        )}
      </div>
    </>
  );
}
