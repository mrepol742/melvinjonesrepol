import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  return (
    <main className="p-8">
      <section>
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <ProjectCard
            title="My Portfolio"
            description="A portfolio built with Next.js and Tailwind."
            link="https://melvinjonesrepol.vercel.app"
            repo="https://github.com/mrepol742/melvinjonesrepol.vercel.app"
          />
          <ProjectCard
            title="Project Canis TG"
            description="Canis but for Telegram."
            repo="https://github.com/mrepol742/project-canis-tg"
          />
          <ProjectCard
            title="Project Canis"
            description="A scalable, modular WhatsApp chatbot built in TypeScript. It leverages modern best practices, lean architecture, Prisma ORM, Dockerization, and environment-based configuration to deliver a robust, flexible successor to Orion."
            repo="https://github.com/mrepol742/project-canis"
          />
          <ProjectCard
            title="Ulisha Store"
            description="A premier destination for quality fashion, accessories, and electronics. Bringing you the best products at competitive prices."
            link="https://ulishastore.com"
          />
          <ProjectCard
            title="Devops Capstone Project"
            description="Completed as part of the IBM Devops Capstone Project on Coursera."
            link="https://github.com/mrepol742/devops-capstone-project"
          />
          <ProjectCard
            title="Project POS"
            description="A lightweight, web-based and offline-capable POS system built for flawless performance, supporting multi-department roles and full functionality."
            repo="https://github.com/mrepol742/project-pos"
          />
          <ProjectCard
            title="Axleshift Core 1 - Capstone Project"
            description="A freight management services. Providing Businesses with cutting-edge platform, security, and reliability."
            repo="https://github.com/axleshift/core1"
          />
          <ProjectCard
            title="Second Chance Backend Nodejs Capstone"
            description="Completed as part of the IBM JavaScript Back-End Capstone Project on Coursera."
            repo="https://github.com/mrepol742/secondchance-backend-nodejs-capstone"
          />
          <ProjectCard
            title="LGU Management System"
            description="A Project for Project Management class."
            repo="https://github.com/lgu-ms/lgu-ms"
          />
          <ProjectCard
            title="Project Deep"
            description="A open-source collaboration! If you're eager to share your insights, tips, or experiences with a broader audience, contributing to Deep Repository is a fantastic opportunity."
            repo="https://github.com/mrepol742/project-deep"
            link="https://projectdeep.vercel.app"
          />
          <ProjectCard
            title="Project Orion"
            description="Meet the lightning-fast Facebook Messenger chatbot, seamlessly managing multiple accounts with access to 271 commands."
            repo="https://mrepol742.github.io/project-orion"
          />
          <ProjectCard
            title="Online Catering System"
            description="A Project for HCI Subject."
            repo="https://github.com/mrepol742/Online-Catering-System"
          />
          <ProjectCard
            title="Room Rental System"
            description="A Project for Web Dev Subject."
            repo="https://github.com/mrepol742/Room-Rental-System"
          />
          <ProjectCard
            title="Webvium VPN"
            description="Inspired from Webvium, Webvium VPN is a lightweight android VPN app focuses in speed, simplicity, security and privacy."
            download="https://mrepol742.github.io/webviumvpn"
          />
          <ProjectCard
            title="mrepol742.github.io"
            description="This is where i showcase my projects, landing pages, tools and other awesome things."
            link="https://github.com/mrepol742/mrepol742.github.io"
          />
          <ProjectCard
            title="Project Webvium"
            description="A Project that aims to be the lightest, fastest, secured, private and full-featured android web browser. Programmed and design from Scratch."
            link="https://mrepol742.github.io/webvium"
          />
        </div>
      </section>
    </main>
  );
}
