const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function fetchGithubProfile(username: string) {
  try {
    if (!GITHUB_TOKEN) {
      console.error("Missing GITHUB_TOKEN in environment");
      return [];
    }

    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
      next: { revalidate: 10800 }, // 3hours
    });

    if (!res.ok) {
      console.error(`Failed to fetch GitHub profile: ${res.statusText}`);
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
