import Image from "next/image";

export default function Home() {
  return (
    <main className="p-8">
      <section>
        <Image
          src="/images/melvinjonesrepol.png"
          alt="Hero Image"
          className="w-64 h-64 object-cover rounded-lg mb-6"
          width={256}
          height={256}
        />
        <h1 className="text-4xl font-bold">Hi, I&apos;m Melvin Jones</h1>
        <p className="text-gray-500">Software Engineer</p>
        <p className="mt-4 max-w-2xl text-gray-500">
          I&apos;m a Freelance Software Engineer specializing in full-stack web
          development, SEO, data analytics, embedded systems with Arduino
          programming, hardware and software troubleshooting, and building
          progressive web applications.
        </p>
      </section>
    </main>
  );
}
