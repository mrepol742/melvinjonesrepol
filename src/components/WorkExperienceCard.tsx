type WorkExperienceProps = {
  title: string;
  description: string;
  date: string;
};

export default function WorkExperienceCard({
  title,
  description,
  date,
}: WorkExperienceProps) {
  return (
    <div className="bg-black/70 backdrop-blur rounded-xl p-6 shadow hover:shadow-lg transition mb-3">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <span className="text-gray-300">{date}</span>
      <p className="text-white-700 mb-4">{description}</p>
    </div>
  );
}
