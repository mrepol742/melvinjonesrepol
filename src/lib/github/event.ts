const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function fetchGithubEvents(username: string) {
  try {
    if (!GITHUB_TOKEN) throw new Error("GITHUB_TOKEN is not set");

    const res = await fetch(
      `https://api.github.com/users/${username}/events?per_page=100`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
        next: { revalidate: 300 },
      },
    );

    if (!res.ok)
      throw new Error(`Failed to fetch GitHub events: ${res.statusText}`);

    return res.json();
  } catch (err) {
    console.error("Failed to fetch GitHub events", err);
    return [];
  }
}
