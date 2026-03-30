import Image from "next/image";

type TeamCardProps = {
  name: string;
  title: string;
  description: string;
  backgroundColor: string;
  delay?: number;
};

export default function TeamCard({
  name,
  title,
  description,
  backgroundColor,
}: TeamCardProps) {
  return (
    <div className="text-center rounded-2xl p-6 transition"
    data-aos="zoom-in"
    data-aos-duration="800"
    data-aos-easing="ease-in-out">
      <div className="flex justify-center mb-6">
        <div
          className={`rounded-full ${backgroundColor} transition-colors duration-300 overflow-hidden w-32 h-32 flex items-center justify-center hover:bg-transparent`}
        >
          <Image
            src="/images/melvinjonesrepol.transparent.png"
            alt="Team Member Image"
            className="object-cover w-32 h-32"
            width={100}
            height={100}
          />
        </div>
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
}
