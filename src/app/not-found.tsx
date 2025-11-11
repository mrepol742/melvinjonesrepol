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
            priority
          />
          <h1 className="text-4xl mb-2 font-semibold">
            It&apos;s just not here.
          </h1>
          <p className="text-lg mb-6">
            The page seems to be missing. <br />
            Perhaps it&apos;s time to go back{" "}
            <Link
              href="/"
              className="underline text-blue-600 hover:text-blue-800"
            >
              home
            </Link>
            ?
          </p>

          <div className="mt-6">
            <h2 className="text-2xl font-medium mb-3">
              You might be looking for:
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/webvium-browser"
                className="uppercase text-sm relative bg-orange-400 px-6 py-3 mt-3 font-semibold overflow-hidden shadow-none transition-transform duration-200 hover:translate-x-1 hover:translate-y-1
              before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-full before:h-1 before:bg-orange-600 before:rounded-b-lg
              after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-1 after:h-full after:bg-orange-600 after:rounded-r-lg"
                style={{ boxShadow: "1px 1px 0 0 #ea580c" }}
              >
                Webvium Browser
              </Link>
              <Link
                href="/ulisha-store-next"
                className="uppercase text-sm relative bg-orange-400 px-6 py-3 mt-3 font-semibold overflow-hidden shadow-none transition-transform duration-200 hover:translate-x-1 hover:translate-y-1
              before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-full before:h-1 before:bg-orange-600 before:rounded-b-lg
              after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-1 after:h-full after:bg-orange-600 after:rounded-r-lg"
                style={{ boxShadow: "1px 1px 0 0 #ea580c" }}
              >
                Ulisha Store Next
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
