export async function Youtube() {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=6&order=date&type=video&key=${API_KEY}`,
    {
      next: { revalidate: 10800 }, // 3 hours
    },
  );

  if (!res.ok) {
    return <div className="text-red-500">{res.statusText}</div>;
  }

  const data = await res.json();
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
      {videos.map((video: any, idx: number) => {
        const videoId = video.id?.videoId;
        if (!videoId) return null;

        return (
          <div key={idx} className="snap-start flex-shrink-0 w-80 md:w-96">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:scale-105 hover:backdrop-blur-xl transition-transform duration-300 shadow-lg/10">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={video.snippet?.title || "YouTube video"}
                className="w-full h-48 rounded-2xl"
                allowFullScreen
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
