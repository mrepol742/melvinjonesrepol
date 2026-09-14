"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { useConsent } from "@/context/consent";

export default function YoutubeVideo({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  const { consent } = useConsent();

  if (!consent?.functional) {
    return (
      <div className="border border-orange-500/50 bg-orange-50 p-6 text-center dark:bg-zinc-900">
        <p className="text-sm">This video requires functional cookies.</p>

        <p className="mt-2 text-xs opacity-75">
          Enable functional cookies to load YouTube content.
        </p>
      </div>
    );
  }

  return <LiteYouTubeEmbed id={videoId} title={title} />;
}
