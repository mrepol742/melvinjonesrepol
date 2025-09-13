import { fetchGithubEvents } from "@/lib/github/publicEvents";

export default async function RecentGithubActivity() {
  const events = await fetchGithubEvents("mrepol742");

  return (
    <ul className="space-y-2 max-h-96 overflow-y-auto">
      {/* eslint-disable @typescript-eslint/no-explicit-any */}
      {events.map((event: any) => (
        <li
          key={event.id}
          className="border-b border-gray-200 pb-2 last:border-b-0 last:pb-0"
        >
          <span className="font-medium text-gray-800">
            {event.type.replace("Event", "")}
          </span>
          <span className="text-gray-600">
            : {event.repo?.name || "unknown repo"}
          </span>
          {event.payload?.commits?.[0]?.message && (
            <div className="text-xs text-gray-500 break-words">
              {event.payload.commits[0].message}
            </div>
          )}
          <div className="text-xs text-gray-500">
            {new Date(event.created_at).toUTCString()}
          </div>
        </li>
      ))}
    </ul>
  );
}
