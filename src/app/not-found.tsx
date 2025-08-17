import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="p-3 md:p-8">
      <section>
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <Image
            src="/images/not-found.png"
            width={600}
            height={600}
            alt="404 Not Found"
          />
          <h1 className="text-4xl mb-2">It&apos;s just not here.</h1>
          <span>
            The page seems be missing. <br />
            Perhaps it&apos;s time to go back{" "}
            <Link href="/" className="underline">
              home
            </Link>
            ?
          </span>
        </div>
      </section>
    </main>
  );
}
