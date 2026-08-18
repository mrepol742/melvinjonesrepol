import HeroFade from "@/app/[locale]/components/HeroFade";
import Image from "next/image";

export default function Header({
  imageUrl,
  imageAlt,
  badge,
  title,
  intro,
}: {
  imageUrl?: string;
  imageAlt?: string;
  badge?: React.ReactNode;
  title: React.ReactNode;
  intro: string;
}) {
  return (
    <HeroFade className="relative min-h-screen overflow-hidden mb-10">
      {imageUrl && (
        <div className="hidden lg:block absolute right-0 top-0 h-full w-[42%]">
          <Image
            src={imageUrl}
            alt={imageAlt ?? ""}
            fill
            priority
            className="object-cover object-top"
          />

          {/* Fade left edge into background */}
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white dark:from-black to-transparent" />
          {/* Fade bottom edge */}
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white dark:from-black to-transparent" />
        </div>
      )}

      <div className="relative z-10 min-h-screen flex flex-col px-6 py-12 md:px-10">
        <div className="my-auto py-14 w-full lg:w-[58%] lg:mr-auto">
          <div className="w-full max-w-5xl mx-auto">
            {badge && <>{badge}</>}
            <h1 className="text-[17vw] sm:text-[12vw] lg:text-[7.5vw] font-black tracking-tighter leading-[0.85] mb-8 hyphens-auto break-words">
              {title}
            </h1>

            <p className="text-base md:text-xl leading-relaxed mb-6">
              {intro}
            </p>
          </div>
        </div>
      </div>
    </HeroFade>
  );
}
