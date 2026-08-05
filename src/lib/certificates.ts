const certificates = [
  {
    title: "ISO 27001 Information Security Compliance Management",
    description: "",
    instructor: "Packt",
    date: "PENDING",
    link: "https://www.coursera.org/learn/packt-iso-27001-information-security-compliance-management",
    featured: false,
  },
  {
    title: "Application Security for Developers and DevOps Professionals",
    description: "",
    instructor: "IBM",
    date: "PENDING",
    link: "https://www.coursera.org/learn/application-security-for-developers-devops",
    featured: false,
  },
  {
    title: "AI-Assisted Code Modernization",
    description:
      "Trained AI to write code responsibly, then used it to drag legacy Java and Python systems kicking and screaming into the present, capstone project included. Now I'm ready to get paid to make old code less embarrassing.",
    instructor: "IBM",
    date: "7-2026",
    link: "https://www.coursera.org/account/accomplishments/verify/8S1E677QW6VW",
    featured: true,
  },
  {
    title: "Devops Capstone Project",
    description:
      "Turned vague requirements into real user stories and sprint plans, then built a microservice app running on containers and serverless like a proper cloud person. Tested it, CI/CD'd it, and now I've got next steps to actually make DevOps my job.",
    instructor: "IBM",
    date: "6-2025",
    link: "https://www.coursera.org/account/accomplishments/verify/YCGVVL7P1NNG",
    featured: false,
  },
  {
    title: "Penetration Testing, Threat Hunting, and Cryptography",
    description:
      "Picked up resume-worthy penetration testing and threat hunting skills, poking at systems with OWASP ZAP and SNYK like a friendly hacker. Now I write proper pentest reports, hunt threats with AI backup, and lock things down with encryption and hashing so nobody's data goes wandering off.",
    instructor: "IBM",
    date: "4-2025",
    link: "https://www.coursera.org/account/accomplishments/verify/5A84IHRBVEW9",
    featured: true,
  },
  {
    title: "Artificial Intelligence/Machine Learning",
    type: "Certificate of Particiption",
    description:
      "Sat through the USAID webinar on Advancing Open RAN in Asia and came out knowing my way around AI/Machine Learning in telecom. Now I've got a certificate to prove I didn't just nap through it.",
    instructor: "Asia Open RAN Academy",
    date: "12-2024",
    link: "/certificates/ai-ml.pdf",
    featured: true,
  },
  {
    title: "Introduction to RAN, 5G, and Open RAN",
    type: "Certificate of Particiption",
    description:
      "Attended the USAID webinar on Introduction to RAN, 5G, and Open RAN and now know more about telecom networks than most people ever will by choice. Certificate secured, buzzwords loaded.",
    instructor: "Asia Open RAN Academy",
    date: "11-2024",
    link: "/certificates/introduction-to-open-ran-and-5g.pdf",
    featured: false,
  },
  {
    title: "Information Management in the Digital Age",
    description:
      "Powered through all eight modules of Information Management in the Digital Age without losing a single file. Official stamp included, so it's basically legally impressive now.",
    instructor: "Trueline",
    date: "11-2024",
    link: "/certificates/information-management-digital-age.jpg",
    featured: false,
  },
  {
    title: "Research Forum 2024",
    type: "Certificate of Attendance",
    description:
      "Showed up and actively participated in the Research Forum 2024 on cultivating a multidisciplinary research culture with AI. Proof I can sit through a research forum and still look interested.",
    instructor: "Bestlink College of the Philippines",
    date: "9-2024",
    link: "/certificates/research-forum-2024.jpg",
  },
  {
    title: "Managing Cybersecurity Incidents and Disasters",
    description:
      "Learned how to build a cybersecurity contingency plan so solid it makes disasters feel manageable, covering incident response and disaster recovery like a pro. Now I know how to back up data and keep operations running so a crisis doesn't end my career or my sanity.",
    instructor: "Kennesaw State University",
    date: "8-2024",
    link: "https://www.coursera.org/account/accomplishments/verify/47WRV357E5DK",
    featured: true,
  },
  {
    title: "JavaScript Back-end Capstne Project",
    description:
      "Mashed together JavaScript, Node.js, Express, and MongoDB into a real backend app, then set it loose in the cloud with containers and serverless like it's no big deal. Threw in CI/CD, user stories, and secure APIs so it actually talks to the front-end without leaking secrets.",
    instructor: "IBM",
    date: "3-2024",
    link: "https://www.coursera.org/account/accomplishments/verify/N5L8HX4TMRJ6",
  },
  {
    title: "Mastering Laravel Framework and PHP",
    description:
      "Built dynamic web apps in Laravel and PHP, from basic routing all the way to authentication systems that actually keep people out. Locked things down with CSRF protection and input validation, wired up databases with Eloquent, and shipped RESTful APIs like a certified PHP wizard.",
    instructor: "Board Infinity",
    date: "3-2024",
    link: "https://www.coursera.org/account/accomplishments/verify/HTBCP5ZAMB7F",
    featured: true,
  },
  {
    title: "Developing Back-End Apps with Node.js and Express",
    description:
      "Built server-side apps with Node.js and leveled them up using Express and other third-party packages. Managed everything with npm and tamed asynchronous chaos using callbacks and promises like it's totally normal.",
    instructor: "IBM",
    date: "3-2024",
    link: "https://www.coursera.org/account/accomplishments/verify/D376A25E39TK",
  },
  {
    title: "Introduction to Software Engineering",
    description:
      "Learned the principles of software engineering, the SDLC, and enough tools and stacks to sound dangerous at a dinner party. Wrote actual Python with loops, conditionals, and functions, picked up software architecture and design patterns, and mapped out career paths so I know exactly which software engineering job to annoy next.",
    instructor: "IBM",
    date: "2-2024",
    link: "https://www.coursera.org/account/accomplishments/verify/JN67GSBM4HE5",
  },
  {
    title: "Software Developer Career Guide and Interview Preparation",
    description:
      'Learned what a software developer actually does, mapped out career paths, and figured out how to research companies without just Googling "best tech jobs." Built networking skills and got interview-ready for technical challenges, behavioral questions, and the awkward post-interview follow-up email.',
    instructor: "IBM",
    date: "2-2024",
    link: "https://www.coursera.org/account/accomplishments/verify/EK4LFEGKP4KY",
  },
  {
    title: "Introduction to DevOps",
    description:
      "Learned the essential DevOps mindset: shared responsibility, transparency, and embracing failure like it's a feature, not a bug. Picked up CI/CD, Infrastructure as Code, TDD, and BDD, along with cloud native microservices and resilient code, then applied it all to break down silos and get cross-functional teams actually talking to each other.",
    instructor: "IBM",
    date: "10-2023",
    link: "https://www.coursera.org/account/accomplishments/verify/UH3LKLXAY5WK",
  },
  {
    title: "Student Research Forum for A.Y 2023-2024",
    type: "Certificate of Particiption",
    description:
      "Actively participated in the Student Research Forum on multidisciplinary research trends across engineering and ICT. Proof I can absorb academic buzzwords and still walk away with a certificate.",
    instructor: "Bestlink College of the Philippines",
    date: "9-2023",
    link: "/certificates/student-research-forum-2023-2024.jpg",
  },
  {
    title: "Sololearn Course Completion Certificates",
    description:
      "Collected bunch of Sololearn certificates like Pokémon cards, casually leveling up across multiple programming languages one bite-sized lesson at a time. Proof I can commit to something daily... as long as it's coding and not the gym.",
    instructor: "Sololearn",
    date: "1-2019 2-2022",
    link: "https://www.sololearn.com/profile/11349142",
  },
];

export default certificates;
