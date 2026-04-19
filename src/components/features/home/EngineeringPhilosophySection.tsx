const PhilosophySection = [
  {
    sub: "Mindset",
    title: "Fire-and-Forget Culture",
    description:
      "A lot of developers rush to launch, then abandon the project and move on to the next one. Fast output feels good, but neglected software quickly becomes fragile, slow, and hard to maintain.",
    takeaway: "Shipping is only the beginning — not the finish line.",
  },
  {
    sub: "Approach",
    title: "Build for Long-Term Quality",
    description:
      "I focus on clean architecture, maintainable code, and continuous improvement after release. Great products aren't just launched — they are cared for, refined, and scaled over time.",
    takeaway: "Quality is a long-term commitment, not a one-time effort.",
  },
  {
    sub: "Principle",
    title: "We Don't Build Out of Convenience or Hype",
    description:
      "I build with purpose, not just to follow trends or use popular tools. I choose technologies and architectures that best fit the project’s needs and long-term goals, rather than what’s trendy or convenient at the moment.",
    takeaway:
      "Building with intention leads to more sustainable and impactful software.",
  },
  {
    sub: "Philosophy",
    title: "Continuous Learning and Improvement",
    description:
      "I believe in the power of continuous learning and improvement. Staying curious, seeking feedback, and iterating on our work leads to better solutions and personal growth.",
    takeaway: "Great engineers are lifelong learners.",
  },
];
// I ain't Socrates, but who am I to say that this isn't a philosophy?
// I just know that it's the one I live by when it comes to software development.
// If you share these values, then we're probably on the same wavelength when it comes to building great software.
export default function EngineeringPhilosophySection() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {PhilosophySection.map((item, index) => (
          <div
            key={index}
            className="group mt-8 md:mt-10 border border-gray-200 dark:border-gray-800 rounded-2xl px-6 py-5 md:px-7 md:py-6 bg-white/60 dark:bg-white/5 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay={160 + index * 70}
          >
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
              Great software is not built once — it is improved, maintained, and
              trusted over time.
            </p>
            <p className="mt-2 text-sm md:text-base leading-relaxed font-medium">
              Melvin Jones Repol
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
