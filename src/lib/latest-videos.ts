const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

export async function fetchYoutubeLatestVideos() {
  try {
    if (!API_KEY) throw new Error("Missing API_KEY in environment");
    if (!CHANNEL_ID) throw new Error("Missing CHANNEL_ID in environment");

    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=6&order=date&type=video&key=${API_KEY}`,
      {
        next: { revalidate: 10800 }, // 3 hours
      },
    );

    if (!res.ok)
      throw new Error(`Failed to fetch Youtube videos: ${res.statusText}`);

    const data = await res.json();

    return {
      ...data,
      last_fetched: new Date().toUTCString(),
    };
  } catch (err) {
    console.error("Error fetching Youtube videos", err);
    return [];
  }
}
