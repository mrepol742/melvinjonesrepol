const GITHUB_TOKEN_WEBVIUM = process.env.GITHUB_TOKEN_WEBVIUM;

interface FetchGitCommitsParams {
  owner: string;
  repo: string;
  limit?: number;
}

export async function fetchGitCommits({
  owner,
  repo,
  limit = 5,
}: FetchGitCommitsParams): Promise<
  { date: string; commit: string }[] | undefined
> {
  try {
    if (!GITHUB_TOKEN_WEBVIUM)
      throw new Error("GITHUB_TOKEN_WEBVIUM is not set");

    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?per_page=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN_WEBVIUM}`,
        },
        next: { revalidate: 300 },
      },
    );

    if (!res.ok)
      throw new Error(`Failed to fetch GitHub events: ${res.statusText}`);

    const commits = await res.json();
    if (commits.length == 0) return undefined;

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const formatted = commits
      .filter(
        (commit: any) => !/merge pull request/i.test(commit.commit.message),
      )
      .map((commit: any) => ({
        date: new Date(commit.commit.author.date).toISOString(),
        commit: commit.commit.message,
      }));

    return formatted;
  } catch (err) {
    console.error("Error fetching GitHub commits:", err);
    return undefined;
  }
}
