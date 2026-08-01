import Card from "@/components/ui/Card";
import Slider from "@/components/ui/Slider";
import YoutubeVideo from "@/components/ui/YoutubeVideo";
import { fetchYoutubeLatestVideos } from "@/lib/youtube/latest-videos";
import { getTranslations } from "next-intl/server";

export default async function Youtube() {
  const t = await getTranslations("youtube");
  const data = await fetchYoutubeLatestVideos();

  const videos = data.items ?? [];

  if (!videos.length) {
    return <div>{t("no_videos_found")}</div>;
  }

  return (
    <>
      <Slider>
        {videos.map((video: any, index: number) => {
          const videoId = video.id?.videoId;
          if (!videoId) return null;

          return (
            <article
              key={index}
              className="group snap-start flex-shrink-0 w-80 md:w-96 flex"
            >
              <Card>
                <div className="mb-4 relative rounded-2xl overflow-hidden">
                  <YoutubeVideo
                    videoId={videoId}
                    title={video.snippet?.title || "YouTube video"}
                  />
                </div>

                <h3 className="font-bold">{video.snippet?.title}</h3>

                <p className="mb-4 line-clamp-3 text-zinc-400">
                  {video.snippet?.description}
                </p>
              </Card>
            </article>
          );
        })}
      </Slider>

      <div className="text-sm text-muted">
        {t("last_updated_label")}{" "}
        {data.last_fetched ? new Date(data.last_fetched).toUTCString() : "—"}
      </div>
    </>
  );
}
