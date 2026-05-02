const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

export async function fetchYoutubeLatestVideos() {
  try {
    if (!API_KEY) {
      console.error("Missing API_KEY in environment");
      return [];
    }

    if (!CHANNEL_ID) {
      console.error("Missing YOUTUBE_CHANNEL_ID in environment");
      return [];
    }

    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=6&order=date&type=video&key=${API_KEY}`,
      {
        next: { revalidate: 10800 }, // 3 hours
      },
    );

    if (!res.ok) {
      console.error(`Failed to fetch Youtube videos: ${res.statusText}`);
      return [];
    }

    const data = await res.json();

    return {
      ...data,
      last_fetched: new Date().toUTCString(),
    };
  } catch (err) {
    console.error(err);
    return [];
  }
}
