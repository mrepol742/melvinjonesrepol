export default async function RecentGithubActivity() {
  const res = await fetch(
    "https://api.github.com/users/mrepol742/events/public",
    {
      next: { revalidate: 60 }, // cache for 1 minute
    },
  );

  if (!res.ok) {
    return (
      <div className="p-4 text-red-500">Failed to fetch GitHub activity.</div>
    );
  }

  const events = await res.json();

  return (
    <ul className="space-y-2 max-h-96 overflow-y-auto">
      {/* eslint-disable @typescript-eslint/no-explicit-any */}
      {events.slice(0, 15).map((event: any) => (
        <li key={event.id} className="border-b border-gray-200 pb-2 last:border-b-0 last:pb-0">
          <span className="font-medium text-gray-800">{event.type}</span>
          <span className="text-gray-600">
            : {event.repo?.name || "unknown repo"}
          </span>
          {event.payload?.commits?.[0]?.message && (
            <div className="text-xs text-gray-500 break-words">
              {event.payload.commits[0].message}
            </div>
          )}
          <div className="text-xs text-gray-500">
            {new Date(event.created_at).toISOString()}
          </div>
        </li>
      ))}
    </ul>
  );
}
