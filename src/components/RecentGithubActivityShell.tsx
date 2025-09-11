import { Suspense } from "react";
import RecentGithubActivity from "./RecentGithubActivity";
import RecentGithubActivityWrapper from "./RecentGithubActivityWrapper";

export default function RecentGithubActivityShell() {
  return (
    <RecentGithubActivityWrapper>
      <Suspense
        fallback={
          <div className="text-gray-500 text-sm">Loading GitHub activity…</div>
        }
      >
        <RecentGithubActivity />
      </Suspense>
    </RecentGithubActivityWrapper>
  );
}
