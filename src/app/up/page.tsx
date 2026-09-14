export const dynamic = "force-static";

export default function UpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-100 px-6 dark:bg-stone-950">
      <div className="text-center">
        <div className="animate-pulse mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-md bg-orange-100 dark:bg-orange-950/40">
          <svg
            className="h-8 w-8 text-orange-600 dark:text-orange-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M20 6L9 17l-5-5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-stone-900 dark:text-white">
          Application Up
        </h1>

        <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">
          Everything is running normally.
        </p>

        <div className="mt-8 rounded-md border border-stone-300 bg-stone-50 p-4 text-left dark:border-stone-800 dark:bg-stone-900">
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between gap-8">
              <dt className="text-stone-500">Status</dt>
              <dd className="font-medium text-orange-600 dark:text-orange-400 animate-pulse">
                UP
              </dd>
            </div>

            <div className="flex justify-between gap-8">
              <dt className="text-stone-500">Environment</dt>
              <dd className="font-medium text-stone-600 dark:text-stone-400">
                {process.env.NODE_ENV}
              </dd>
            </div>

            <div className="flex justify-between gap-8">
              <dt className="text-stone-500">Timestamp</dt>
              <dd className="font-mono text-stone-600 dark:text-stone-400">
                {new Date().toISOString()}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </main>
  );
}
