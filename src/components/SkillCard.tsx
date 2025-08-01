interface SkillType {
  key: number;
  bg: string;
  textColor: string;
  title: string;
  description: string;
}

export default function SkillCard({
  key,
  bg,
  textColor,
  title,
  description,
}: SkillType) {
  return (
    <div
      className={`p-6 bg-gray-800 rounded-lg shadow-lg ${bg} ${textColor}`}
      data-aos="fade-up"
      data-aos-delay={`${key * 100}`}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-300">{description}</p>
    </div>
  );
}
