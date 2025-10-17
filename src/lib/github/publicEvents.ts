const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function fetchGithubEvents(username: string) {
  if (!GITHUB_TOKEN) {
    console.error("Missing GITHUB_TOKEN in environment");
    return;
  }

  const res = await fetch(
    `https://api.github.com/users/${username}/events?per_page=100`,
    {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
      next: { revalidate: 300 },
    },
  );

  if (!res.ok) {
    console.error(`Failed to fetch GitHub events: ${res.statusText}`);
    return;
  }

  return res.json();
}
