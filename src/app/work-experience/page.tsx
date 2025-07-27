import WorkExperienceCard from "../../components/WorkExperienceCard";

export default function WorkExperience() {
  return (
    <main className="p-8">
      <section>
        <h2 className="text-2xl font-semibold">Work Experience</h2>
        <div className="mt-4">
          <WorkExperienceCard
            title="Freelance"
            description="Software Engineer I develop, deploy, and maintain efficient and reliable software and websites tailored to meet customer needs, based on system analysis, design, and business models. My responsibilities include gathering requirements, designing scalable architectures, implementing robust code, and ensuring quality through testing. I also handle deployment, monitor performance, and provide ongoing support and updates. I collaborate with clients and teams to deliver solutions using modern technologies and best practices, focusing on usability, security, and maintainability."
            date="2021 - Present"
          />
          <WorkExperienceCard
            title="Intership"
            description="IT Staff Incharge of maintaining the IT infrastructure, including hardware, software, and network. Responsible for troubleshooting technical issues, providing support to end-users, and ensuring the efficiency and reliability of the organization's IT system."
            date="April - June 2025"
          />
        </div>
      </section>
    </main>
  );
}
