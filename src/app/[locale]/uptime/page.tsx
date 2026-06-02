"use client";

import { useEffect } from "react";

const UPTIME_URL = "https://stats.uptimerobot.com/IZwUI4mLcR";

export default function Uptime() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.assign(UPTIME_URL);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-950 text-white px-6">
      <div className="w-full max-w-md text-center">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">
          Redirecting
        </p>
        <h1 className="text-2xl font-semibold mb-4">Opening Uptime Status</h1>
        <p className="text-sm text-zinc-400 mb-6">
          You’re being redirected to our UptimeRobot status page.
        </p>

        <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-green-400 animate-pulse" />
        </div>

        <p className="mt-4 text-xs text-zinc-500">
          If you are not redirected,{" "}
          <a
            href={UPTIME_URL}
            className="underline underline-offset-2 hover:text-white"
          >
            click here
          </a>
          .
        </p>
      </div>
    </main>
  );
}
