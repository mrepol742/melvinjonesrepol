const Projects = [
  {
    title: "Hall of Codes Next",
    description:
      "This new version of Hall of Codes website built with Next.js. To promote the community, share knowledge, showcase projects and other awesome things.",
    ai_description:
      "Hall of Codes Next represents the evolution of our community platform, completely rebuilt using Next.js, TypeScript, and Tailwind CSS. It serves as a modern, high-performance hub for developers to share technical knowledge, showcase their open-source projects, and foster collaborative growth within the programming community.",
    link: "https://hallofcodes.vercel.app",
    repo: "https://github.com/hallofcodes/hallofcodes",
    featured: true,
    technology: ["Next.js", "TypeScript", "Tailwind CSS"],
    cover: "https://opengraph.githubassets.com/1/hallofcodes/hallofcodes",
  },
  {
    title: "[Redacted]",
    description: "[Redacted]",
    ai_description:
      "This project details are currently classified under NDA or restricted access. It leverages a modern tech stack including Laravel, React, GraphQL, and Tailwind CSS to deliver a robust and scalable web application solution.",
    link: "https://dis.melvinjonesrepol.com",
    featured: false,
    technology: ["Laravel", "React", "GraphQL", "Tailwind CSS"],
    cover: "https://www.melvinjonesrepol.com/images/webvium-banner.png",
  },
  {
    title: "Ulisha Store Laravel",
    description:
      "A modern and efficient e-commerce solutions tailored for small to medium-sized businesses specifically built with Laravel, enabling seamless setup and cost effective web hosting.",
    ai_description:
      "Ulisha Store is a comprehensive e-commerce platform engineered with Laravel and React. Designed specifically for SMBs, it offers a cost-effective, easily deployable architecture that simplifies inventory management, order processing, and customer interactions without the overhead of enterprise-level software.",
    link: "/ulisha-store-laravel",
    featured: true,
    technology: ["Laravel", "Blade", "React", "Tailwind CSS"],
    cover: "/images/ulisha-store-laravel.png",
  },
  {
    title: "Protocol Discussion Platform",
    description:
      "A content-first discussion platform where users can post structured protocols, create discussion threads, and engage through comments, reviews, and voting — with intelligent search and filtering powered by Typesense.",
    ai_description:
      "Built for high-quality technical discourse, this platform allows users to document structured protocols and engage in deeply threaded discussions. By integrating Typesense, it delivers lightning-fast, typo-tolerant search capabilities, ensuring that valuable knowledge and complex topics are easily discoverable. The stack utilizes Laravel for robust backend logic and React/TypeScript for a highly interactive frontend.",
    link: "/protocol-discussion-platform",
    repo: "https://github.com/mrepol742/protocol-discussion-platform",
    featured: true,
    technology: ["Laravel", "React", "TypeScript", "Typesense", "Tailwind CSS"],
    cover: "/images/protocol-discussion-platform.png",
  },
  {
    title: "Web Surface Scan",
    description:
      "A lightweight developer-focused tool for analyzing a website’s technology stack, integrations, and potential security flaws using automated browser inspection.",
    ai_description:
      "Web Surface Scan is a specialized Node.js utility designed for security researchers and developers. It performs automated, deep browser inspections to extract technology footprints, analyze third-party integrations, and flag potential client-side security vulnerabilities, all through a clean TypeScript-driven architecture.",
    link: "/web-surface-scan",
    repo: "https://github.com/mrepol742/web-surface-scan",
    featured: false,
    technology: ["Node.js", "TypeScript"],
    cover: "https://opengraph.githubassets.com/1/mrepol742/web-surface-scan",
  },
  {
    title: "DJ Mixer Console",
    description:
      "A simple, lightweight and fully offline capable mixer console that showcase Web Audio API capabilities in handling audio streams and real time audio manipulation.",
    ai_description:
      "This web-based DJ Mixer Console is a technical showcase of the native Web Audio API. It operates entirely offline and handles complex audio stream manipulations in real-time. Built with Angular and TypeScript, it offers a highly responsive, latency-free interface for audio enthusiasts to mix tracks directly in the browser.",
    link: "https://dj-remix-console.netlify.app",
    repo: "https://github.com/mrepol742/dj-mixer-console",
    featured: false,
    technology: ["Angular", "TypeScript", "Web Audio API", "Tailwind CSS"],
    cover: "https://opengraph.githubassets.com/1/mrepol742/dj-mixer-console",
  },
  {
    title: "Webvium Launcher",
    description:
      "Lightweight, modern and lightning-fast Android launcher thats currently in development. Built with speed, simplicity and customization in mind.",
    ai_description:
      "Webvium Launcher is an experimental Android home screen replacement written natively in Kotlin. Prioritizing extreme performance and minimal resource consumption, it offers users a clean, highly customizable interface devoid of the bloatware typically found in OEM launchers.",
    link: "/webvium-launcher",
    repo: "https://github.com/webvium/webvium-launcher",
    featured: false,
    technology: ["Kotlin"],
    cover: "https://opengraph.githubassets.com/1/webvium/webvium-launcher",
  },
  {
    title: "Web Appp",
    description:
      "A simple yet powerful template that lets you convert any website into a functional Android APK with minimal effort. This project makes it easy to package your web app for mobile distribution without requiring deep Android development knowledge.",
    ai_description:
      "Web Appp is a streamlined Kotlin-based wrapper designed to democratize Android app development. By simply dropping in a website URL, developers can instantly generate a production-ready Android APK. It bridges the gap between web development and mobile distribution, offering native-like performance without the steep learning curve of Android SDKs.",
    repo: "https://github.com/mrepol742/web-appp",
    featured: false,
    technology: ["Kotlin"],
    cover: "https://opengraph.githubassets.com/1/mrepol742/web-appp",
  },
  {
    title: "My Portfolio",
    description:
      "A modern, responsive personal portfolio built with Next.js to showcase projects, skills, and achievements. Designed with performance and clean UI in mind, it highlights professional work in a sleek and interactive way.",
    ai_description:
      "My personal portfolio serves as the digital nexus of my professional identity. Engineered with Next.js App Router and Tailwind CSS, it achieves perfect Lighthouse scores while delivering a fluid, interactive user experience. It features dynamic content rendering, custom UI components, and a robust architecture that easily scales as my career progresses.",
    link: "https://www.melvinjonesrepol.com",
    repo: "https://github.com/mrepol742/melvinjonesrepol",
    featured: false,
    technology: ["Next.js", "TypeScript", "Tailwind CSS"],
    cover: "/images/melvin-jones-repol-portfolio-new.png",
  },
  {
    title: "Project Canis TG",
    description:
      "An extension of the Canis project adapted specifically for Telegram, bringing its features into the chat platform.",
    ai_description:
      "Project Canis TG ports the powerful, modular architecture of the original Canis chatbot to the Telegram ecosystem. Written in TypeScript, it seamlessly integrates with Telegrams API to deliver automated responses, complex command handling, and scalable chat management.",
    repo: "https://github.com/mrepol742/project-canis-tg",
    featured: false,
    technology: ["TypeScript"],
    cover: "https://opengraph.githubassets.com/1/mrepol742/project-canis-tg",
  },
  {
    title: "Project Canis",
    description:
      "A scalable, modular WhatsApp chatbot built in TypeScript. It leverages modern best practices, lean architecture, Prisma ORM, Dockerization, and environment-based configuration to deliver a robust, flexible successor to Orion.",
    ai_description:
      "Project Canis is a highly sophisticated WhatsApp automation engine. Engineered as the spiritual successor to Project Orion, it boasts a strictly typed TypeScript codebase, Prisma ORM for reliable data persistence, and full Docker containerization. Its modular architecture allows developers to easily inject new commands and features, making it a highly scalable solution for business automation.",
    link: "/canis-chatbot",
    featured: true,
    technology: ["TypeScript"],
    cover: "/images/canis-1.png",
  },
  {
    title: "Ulisha Store Next",
    description:
      "A modern and efficient e-commerce solution tailored for startups, enabling seamless setup and free hosting on Vercel and Supabase Cloud.",
    ai_description:
      "Ulisha Store Next is the Next.js variant of the Ulisha ecosystem, optimized for the modern serverless edge. By coupling Next.js with Supabase (an open-source Firebase alternative), it provides startups with a fully functional, highly performant e-commerce platform that can be hosted entirely for free on Vercel, drastically reducing initial operational costs.",
    link: "/ulisha-store-next",
    featured: false,
    technology: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    cover: "/images/ulisha-store-1.png",
  },
  {
    title: "Devops Capstone Project",
    description:
      "Completed as part of the IBM Devops Capstone Project on Coursera.",
    ai_description:
      "This repository contains the final capstone project for the IBM DevOps certification. It demonstrates practical application of CI/CD pipelines, containerization, and automated deployment strategies using industry-standard tools, showcasing a deep understanding of modern software delivery lifecycles.",
    link: "https://github.com/mrepol742/devops-capstone-project",
    featured: false,
    technology: ["JavaScript"],
    cover:
      "https://opengraph.githubassets.com/1/mrepol742/devops-capstone-project",
    archived: true,
  },
  {
    title: "Point of Sale",
    description:
      "A lightweight, web-based and offline-capable POS system built for flawless performance, supporting multi-department roles and full functionality.",
    ai_description:
      "This Point of Sale (POS) system was architected from the ground up to solve real-world retail challenges. It features a progressive web app (PWA) design that guarantees offline resilience. Built with Laravel and React, it securely handles multi-department user roles, intensive inventory tracking, and transactional integrity even during network outages.",
    link: "/point-of-sale",
    featured: true,
    technology: ["Laravel", "JavaScript", "React", "Bootstrap"],
    cover: "/images/point-of-sale-1.png",
  },
  {
    title: "Axleshift Freight Management",
    description:
      "A freight management services. Providing Businesses with cutting-edge platform, security, and reliability.",
    ai_description:
      "Axleshift is an enterprise-grade freight management platform engineered on the MERN stack (MongoDB, Express, React, Node.js). It provides logistics businesses with real-time tracking, secure data handling, and operational reliability, streamlining the complex workflows associated with modern supply chain management.",
    link: "/axleshift-freight-management",
    featured: true,
    technology: ["JavaScript", "React", "Node.js", "MongoDB", "Bootstrap"],
    cover: "https://www.melvinjonesrepol.com/images/axleshift-3.png",
  },
  {
    title: "Second Chance Backend Nodejs Capstone",
    description:
      "Completed as part of the IBM JavaScript Back-End Capstone Project on Coursera.",
    ai_description:
      "This project represents the culmination of the IBM JavaScript Back-End curriculum. It features a fully developed RESTful API built with Node.js and Express, demonstrating core backend concepts such as routing, middleware integration, authentication, and database interactions.",
    repo: "https://github.com/mrepol742/secondchance-backend-nodejs-capstone",
    featured: false,
    technology: ["JavaScript"],
    cover:
      "https://opengraph.githubassets.com/1/mrepol742/secondchance-backend-nodejs-capstone",
    archived: true,
  },
  {
    title: "LGU Management System",
    description: "A Project for Project Management class.",
    ai_description:
      "Developed as an academic project, the LGU Management System is a PHP-based application designed to digitalize and streamline the administrative processes of Local Government Units. It emphasizes structured data management and user-friendly interfaces for government personnel.",
    repo: "https://github.com/lgu-ms/lgu-ms",
    featured: false,
    technology: ["PHP"],
    cover: "https://opengraph.githubassets.com/1/lgu-ms/lgu-ms",
    archived: true,
  },
  {
    title: "Project Deep",
    description:
      "A open-source collaboration! If you're eager to share your insights, tips, or experiences with a broader audience, contributing to Deep Repository is a fantastic opportunity.",
    ai_description:
      "Project Deep is an open-source initiative aimed at aggregating developer knowledge. It acts as a collaborative repository where developers can submit technical articles, code snippets, and career advice, fostering a community-driven approach to technical education.",
    repo: "https://github.com/mrepol742/project-deep",
    link: "https://projectdeep.vercel.app",
    featured: false,
    technology: ["JavaScript"],
    cover: "https://opengraph.githubassets.com/1/mrepol742/project-deep",
  },
  {
    title: "Project Orion",
    description:
      "Meet the lightning-fast Facebook Messenger chatbot, seamlessly managing multiple accounts with access to 271 commands.",
    ai_description:
      "Project Orion was a massive, highly successful Facebook Messenger automation project. Written in JavaScript, it managed thousands of user interactions across multiple accounts simultaneously. Featuring an expansive library of 271 distinct commands, it pushed the limits of what could be achieved with the Messenger API before eventually being succeeded by Project Canis.",
    link: "/orion-chatbot",
    featured: true,
    technology: ["JavaScript"],
    cover: "/images/orion-1.jpg",
    archived: true,
  },
  {
    title: "Online Catering System",
    description: "A Project for HCI Subject.",
    ai_description:
      "This Online Catering System was developed to explore the principles of Human-Computer Interaction (HCI). Built with PHP, the project focuses heavily on user experience (UX) design, ensuring that the process of booking catering services is intuitive, accessible, and visually cohesive.",
    repo: "https://github.com/mrepol742/Online-Catering-System",
    featured: false,
    technology: ["PHP"],
    cover:
      "https://opengraph.githubassets.com/1/mrepol742/Online-Catering-System",
    archived: true,
  },
  {
    title: "Room Rental System",
    description: "A Project for Web Dev Subject.",
    ai_description:
      "The Room Rental System is a foundational PHP web application designed to facilitate the listing and booking of rental properties. It demonstrates core web development skills including database schema design, session management, and server-side rendering.",
    repo: "https://github.com/mrepol742/Room-Rental-System",
    featured: false,
    technology: ["PHP"],
    cover: "https://opengraph.githubassets.com/1/mrepol742/Room-Rental-System",
    archived: true,
  },
  {
    title: "Hall of Codes Vue",
    description:
      "This is Hall of Codes website built with Vue.js. To promote the community, share knowledge, showcase projects and other awesome things.",
    ai_description:
      "An earlier iteration of the Hall of Codes platform, this project was constructed using Vue.js. It laid the groundwork for the communitys digital presence, offering a fast, reactive single-page application (SPA) for developers to connect and share resources.",
    repo: "https://github.com/hallofcodes/hallofcodes-vue",
    link: "https://hallofcodes.github.io",
    featured: false,
    technology: ["Vue.js"],
    cover: "https://opengraph.githubassets.com/1/hallofcodes/hallofcodes-vue",
  },
  {
    title: "Webvium VPN",
    description:
      "Inspired from Webvium, Webvium VPN is a lightweight android VPN app focuses in speed, simplicity, security and privacy.",
    ai_description:
      "Webvium VPN is a native Android application engineered in Java. It provides users with a secure, encrypted tunnel for internet traffic, emphasizing strict privacy protocols and minimal battery consumption. It strips away the complex configurations of standard VPN clients in favor of a one-tap connection model.",
    link: "/webvium-vpn",
    featured: false,
    technology: ["Java"],
    cover: "https://www.melvinjonesrepol.com/images/webviumvpn-banner.png",
    archived: true,
  },
  {
    title: "mrepol742.github.io",
    description:
      "This is where i showcase my projects, landing pages, tools and other awesome things.",
    ai_description:
      "This repository houses the legacy version of my personal portfolio. Originally hosted on GitHub Pages, it served as my primary professional showcase, featuring static landing pages and simple interactive tools before I migrated to a more robust Next.js architecture.",
    link: "https://github.com/mrepol742/mrepol742.github.io",
    featured: false,
    technology: ["PHP"],
    cover: "/images/myportfolio.png",
    archived: true,
  },
  {
    title: "Project Webvium",
    description:
      "A lightweight, fast, and privacy-focused Android web browser built entirely from scratch to deliver a secure and efficient browsing experience. Designed to balance speed, security, and functionality, it aims to provide all the essential features of modern browsers while staying minimal and resource-friendly.",
    ai_description:
      "Project Webvium is a fully-fledged Android web browser developed natively in Java. It was engineered from the ground up to challenge mainstream browsers by offering a hyper-minimalist footprint, aggressive privacy controls, and rapid page rendering. It represents a deep dive into Androids WebView architecture and efficient memory management on mobile devices.",
    link: "/webvium-browser",
    featured: true,
    technology: ["Java"],
    cover: "https://www.melvinjonesrepol.com/images/webvium-banner.png",
  },
];

export const Templates = [
  {
    title: "Laravel GraphQL",
    description:
      "A boilerplate template for building GraphQL APIs with Laravel, providing a solid foundation for rapid development and efficient API design.",
    ai_description:
      "This boilerplate serves as a rapid starting point for backend developers constructing GraphQL APIs within the Laravel ecosystem. It pre-configures essential routing, schema definitions, and database migrations, drastically reducing initial setup time.",
    repo: "https://github.com/mrepol742/laravel-graphql-template",
  },
  {
    title: "Laravel React",
    description:
      "A boilerplate template for building React applications with Laravel, providing a solid foundation for rapid development and efficient API design.",
    ai_description:
      "This template provides a robust, monolithic starter kit for full-stack developers. It tightly integrates a modern React frontend with a powerful Laravel backend API, streamlining the development process for comprehensive web applications.",
    repo: "https://github.com/mrepol742/laravel-react-template",
  },
  {
    title: "Laravel React TypeScript",
    description:
      "A boilerplate template for building React applications with Laravel and TypeScript, providing a solid foundation for rapid development and efficient API design.",
    ai_description:
      "An advanced iteration of the standard React-Laravel boilerplate, this template introduces TypeScript into the frontend stack. This ensures strict type safety across components, making it ideal for scaling large enterprise applications.",
    repo: "https://github.com/mrepol742/laravel-react-ts-template",
  },
  {
    title: "Angular",
    description:
      "A boilerplate template for building Angular applications, providing a solid foundation for rapid development and efficient API design.",
    ai_description:
      "This Angular boilerplate is designed to accelerate the scaffolding of new enterprise-grade single-page applications. It includes pre-configured routing, optimal state management patterns, and built-in HTTP interceptors.",
    repo: "https://github.com/mrepol742/angular-boilerplate",
  },
  {
    title: "Responsive Views",
    description:
      "An Android template using Fragments, bottom navbar, navigation drawer and floating action buttons.",
    ai_description:
      "A foundational Android UI toolkit written in Java/Kotlin. It implements Material Design guidelines out-of-the-box, providing developers with pre-built, responsive navigation patterns including bottom navigation and side drawers.",
    repo: "https://github.com/mrepol742/templateresponsiveviews",
  },
  {
    title: "Read CV",
    description: "A simple CV template exported from read.cv.",
    ai_description:
      "A lightweight, heavily styled HTML/CSS template derived from modern CV aesthetics. It provides a clean, highly readable format for professionals looking to host their resumes statically.",
    repo: "https://github.com/mrepol742/read-cv",
  },
];

export default Projects;
