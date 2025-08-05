type WorkExperienceProps = {
  key: number;
  company: string;
  title: string;
  description: string;
  date: string;
};

export default function WorkExperienceCard({
  key,
  company,
  title,
  description,
  date,
}: WorkExperienceProps) {
  return (
    <div
      className={`bg-black/10 backdrop-blur rounded-xl p-6 shadow hover:shadow-lg transition`}
      data-aos="fade-up"
      data-aos-delay={`${key * 100}`}
    >
      <h3 className="text-xl font-bold">{company}</h3>
      <p>{title}</p>
      <p className="mb-2 text-gray-500">{date}</p>
      <p>{description}</p>
    </div>
  );
}
