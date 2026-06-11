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
      <div className="rounded border p-6 text-center">
        <p className="text-sm">This video requires functional cookies.</p>

        <p className="mt-2 text-xs opacity-75">
          Enable functional cookies to load YouTube content.
        </p>
      </div>
    );
  }

  return <LiteYouTubeEmbed id={videoId} title={title} />;
}
