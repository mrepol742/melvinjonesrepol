import { fetchYoutubeLatestVideos } from "@/lib/youtube/latest-videos";

export async function YoutubeSection() {
  const data = await fetchYoutubeLatestVideos();

  const videos = data.items ?? [];

  if (!videos.length) {
    return <div>No videos found</div>;
  }

  return (
    <div
      className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-6 py-6 scrollbar-hide"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
      }}
    >
      {videos.map((video: any, index: number) => {
        const videoId = video.id?.videoId;
        if (!videoId) return null;

        return (
          <article
            key={index}
            className="snap-start flex-shrink-0 w-80 md:w-96"
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:scale-105 hover:backdrop-blur-xl transition-transform duration-300 shadow-lg/10">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={video.snippet?.title || "YouTube video"}
                className="w-full h-48 rounded-2xl"
                allowFullScreen
              />
            </div>
          </article>
        );
      })}
    </div>
  );
}
