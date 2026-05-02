import { fetchYoutubeLatestVideos } from "@/lib/youtube/latest-videos";

export async function YoutubeSection() {
  const data = await fetchYoutubeLatestVideos();

  const videos = data.items ?? [];

  if (!videos.length) {
    return <div>No videos found</div>;
  }

  return (
    <>
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
              className="group snap-start flex-shrink-0 w-80 md:w-96 flex"
            >
              <div className="p-6 border rounded-2xl shadow-sm max-w-sm mx-auto transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]">
                <div className="mb-4 relative w-full h-60 rounded-2xl overflow-hidden border shadow-sm">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={video.snippet?.title || "YouTube video"}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    allowFullScreen
                  />
                </div>

                <h2 className="text-3xl font-bold text-gray-400">
                  {String(index + 1).padStart(2, "0")}
                </h2>
                <h3 className="text-xl font-bold">{video.snippet?.title}</h3>

                <p className="mb-4 line-clamp-3">
                  {video.snippet?.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="text-sm text-muted">
        Last updated:{" "}
        {data.last_fetched ? new Date(data.last_fetched).toUTCString() : "—"}
      </div>
    </>
  );
}
