import Link from "next/link";

export default function NotFound() {
  return (
    <main className="p-8">
      <section>
        <div className=" flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="mb-6">
            Sorry, the page you&apos;re looking for does not exist.
          </p>
          <Link href="/" className="text-blue-500 underline">
            Go back home
          </Link>
        </div>
      </section>
    </main>
  );
}
