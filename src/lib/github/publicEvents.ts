const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function fetchGithubEvents(username: string) {
  if (!GITHUB_TOKEN) {
    throw new Error("Missing GITHUB_TOKEN in environment");
  }

  const res = await fetch(
    `https://api.github.com/users/${username}/events/public`,
    {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "User-Agent": "nextjs-app",
      },
      next: { revalidate: 300 },
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch GitHub events: ${res.statusText}`);
  }

  return res.json();
}
