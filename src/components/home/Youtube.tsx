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
    <div className="max-w-6xl mx-auto px-4 mb-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video: any) => {
          const videoId = video.id?.videoId;
          if (!videoId) return null;

          return (
            <div key={videoId} className="w-full">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={video.snippet?.title || "YouTube video"}
                  className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg"
                  allowFullScreen
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
