import Image from "next/image";

export default function Header({
  imageUrl,
  imageAlt,
  badge,
  title,
  intro,
  kicker = "Software engineer · Since 2018",
  actions,
  caption,
}: {
  imageUrl?: string;
  imageAlt?: string;
  badge?: React.ReactNode;
  title: React.ReactNode;
  intro: string;
  kicker?: string;
  actions?: React.ReactNode;
  caption?: string;
}) {
  return (
    <section className="relative min-h-screen px-6 pb-14 pt-32 md:px-10 lg:px-16">
      <div className="homepage-rule absolute left-0 top-0 h-full w-2" />
      <div
        className={`mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-end gap-12 ${
          imageUrl
            ? "lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,.65fr)]"
            : "lg:grid-cols-1"
        }`}
      >
        <div className="pb-4 lg:pb-16">
          {badge && <div className="mb-6">{badge}</div>}
          <p className="homepage-kicker">{kicker}</p>
          <h1 className="mt-6 max-w-4xl text-[16vw] font-black uppercase leading-[0.78] tracking-[-0.08em] sm:text-8xl lg:text-[8.5rem] xl:text-[10rem]">
            {title}
          </h1>
          <p className="homepage-intro mt-9 max-w-2xl text-lg leading-8 md:text-xl">
            {intro}
          </p>
          {actions && <div className="mt-10 flex flex-wrap gap-3">{actions}</div>}
        </div>

        {imageUrl && (
          <div className="relative mx-auto w-full max-w-md self-end lg:max-w-none">
            <div className="homepage-portrait-frame">
              <Image
                src={imageUrl}
                alt={imageAlt ?? ""}
                width={800}
                height={1000}
                priority
                className="h-auto w-full object-cover grayscale"
              />
            </div>
            {caption && (
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                {caption}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
