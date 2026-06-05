"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";

export default function YoutubeVideo({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  return <LiteYouTubeEmbed id={videoId} title={title} />;
}
