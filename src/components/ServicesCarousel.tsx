interface ServicesCarouselProps {
  Services: string[];
}

export default function ServicesCarousel({ Services }: ServicesCarouselProps) {
  return (
    <div
      className="overflow-hidden whitespace-nowrap py-4"
      data-aos="fade-in"
      data-aos-delay="1000"
    >
      <div
        className="inline-block animate-scroll px-8"
        style={{ minWidth: "max-content" }}
      >
        {Services.map((service, index) => (
          <span
            key={index}
            className="inline-block bg-blue-500/20 text-blue-500 px-5 py-2 mx-4 rounded-lg font-semibold text-sm select-none"
          >
            {service}
          </span>
        ))}
      </div>

      <div
        className="inline-block animate-scroll px-8"
        style={{ minWidth: "max-content" }}
      >
        {Services.map((service, index) => (
          <span
            key={`dup-${index}`}
            className="inline-block bg-blue-500/20 text-blue-500 px-5 py-2 mx-4 rounded-lg font-semibold text-sm select-none"
          >
            {service}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 240s linear infinite;
        }
      `}</style>
    </div>
  );
}
