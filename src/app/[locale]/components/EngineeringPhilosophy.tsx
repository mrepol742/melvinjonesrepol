import { getTranslations } from "next-intl/server";

// I ain’t Socrates, but who am I to say that this isn’t a philosophy?
// I just know that it’s the one I live by when it comes to software development.
// If you share these values, then we’re probably on the same wavelength when it comes to building great software.
export default async function EngineeringPhilosophySection() {
  const t = await getTranslations("engineering_philosophy");

  const PhilosophySection = Array.from({ length: 6 }, (_, i) => ({
    sub: t(`item_${i}_sub` as any),
    title: t(`item_${i}_title` as any),
    description: t(`item_${i}_description` as any),
    takeaway: t(`item_${i}_takeaway` as any),
  }));

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {PhilosophySection.map((item, index) => (
          <article
            key={index}
            data-aos="fade-up"
            data-aos-delay={100 * (index + 1)}
          >
            <div className="group border border-zinc-800 rounded-2xl px-6 py-5 md:px-7 md:py-6">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-wider text-gray-400">
                  {item.sub}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="leading-relaxed mb-4">{item.description}</p>

              <p className="text-sm border-t pt-3">{item.takeaway}</p>
            </div>
          </article>
        ))}
      </div>

      {/** SIGNATURE BLOCK */}
      <div
        className="mt-10 md:mt-14 px-6 md:px-7 py-6 border-t border-gray-200 dark:border-gray-800"
        data-aos="fade-up"
        data-aos-delay="350"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-widest font-semibold text-gray-500">
              {t("signature")}
            </p>
            <p className="mt-2 text-sm md:text-base leading-relaxed font-medium">
              {t("author")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
