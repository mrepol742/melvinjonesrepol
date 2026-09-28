const Projects = [
  {
    title: "Digital Tools Marketplace & Automation Platform",
    key: "digital_tools_marketplace",
    description:
      "A multi-tenant platform for discovering, testing, publishing, and managing digital tools, workflows, templates, and downloadable resources.",
    ai_description:
      "A multi-tenant marketplace and SaaS platform that enables creators to publish and manage digital tools, workflows, templates, and supporting resources. It provides a public, SEO-focused marketplace alongside an authenticated application for creators, customers, and administrators. Users can discover compatible tools, review setup details, and test supported resources in an interactive playground. The platform also includes a website-trained chat-widget solution, allowing customers to train assistants from approved website content, deploy widgets to verified domains, and manage conversations through a human-support inbox. It is designed for secure tenant isolation, scalable content delivery, subscription billing, moderation, and long-term marketplace growth.",
    type: "personal",
    featured: true,
    technology: [
      "Laravel",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "AWS S3",
    ],
  },
  {
    title: "Subscription-Based Digital Music Platform",
    key: "digital_music_platform",
    description:
      "A centralized digital music platform offering curated remix content through a subscription-based access model managed by administrators.",
    ai_description:
      "This client project is a subscription-driven digital music platform focused on delivering curated remix and entertainment content through a controlled distribution system. Unlike traditional open marketplaces, content management and purchasing workflows are handled exclusively by administrators, allowing for centralized quality control and streamlined platform operations. The system includes subscription access management, digital content organization, user account handling, and scalable media delivery designed for long-term platform growth and recurring revenue generation.",
    type: "client",
    featured: false,
    technology: ["Laravel", "Blade", "Bootstrap", "Cloudflare R2"],
  },
  {
    title: "Enterprise Asset Management System",
    key: "enterprise_ams",
    description:
      "An in-progress enterprise asset management platform with role-based access control, asset tracking, and assignment workflows, integrated with AWS Cognito for authentication and SSO.",
    ai_description:
      "This client project is an enterprise-grade asset management system designed to handle organizational asset tracking, assignments, and lifecycle monitoring across multiple locations. It includes secure authentication and single sign-on via AWS Cognito, supporting role-based access for users, administrators, and customers. The system architecture covers asset inventory management, assignment workflows, location-based access control, and status monitoring. The project was not completed due to funding and payment constraints, but the core system design and backend architecture for scalable enterprise deployment were established.",
    type: "client",
    featured: false,
    technology: ["Laravel", "Angular", "Tailwind CSS", "AWS Cognito"],
  },
  {
    title: "Digital Music Marketplace",
    key: "digital_music_marketplace",
    description:
      "A web-based e-commerce platform that enables creators and vendors to distribute digital music content while allowing users to discover trending remixes and featured tracks.",
    ai_description:
      "This client project is a full-scale digital music marketplace designed to connect music creators, vendors, and listeners through a centralized e-commerce ecosystem. The platform supports digital product distribution, vendor and administrator management, music discovery features, trending rankings, and curated remix collections. Built with scalability and monetization in mind, the system provides creators with revenue opportunities while delivering an engaging browsing and listening experience for users exploring remix culture and independent music content.",
    type: "client",
    featured: false,
    technology: ["Laravel", "Blade", "Bootstrap", "AWS S3"],
  },
  {
    title: "Payment & Order Management Integration",
    key: "payment_order_management",
    description:
      "A client-focused backend integration project involving payment processing implementation and structured database architecture for order management workflows.",
    ai_description:
      "This client project focused on integrating secure online payment functionality alongside designing a scalable database structure for handling customer orders and transactional data. The work involved implementing PayPal-based payment flows, improving order processing reliability, and organizing backend data models to support maintainable and efficient application operations.",
    type: "client",
    featured: false,
    technology: ["PayPal API"],
  },
  {
    title: "Restaurant Ordering Platform",
    key: "restaurant_ordering",
    description:
      "An Android-based restaurant ordering application connected to a centralized backend system for streamlined menu management and customer order processing.",
    ai_description:
      "This client project is a mobile restaurant ordering platform built for Android devices, enabling customers to browse menus, place orders, and interact with restaurant services through a seamless mobile experience. The application is powered by a centralized server infrastructure that manages menu synchronization, order handling, and real-time operational workflows across the platform. Designed for scalability and reliability, the system focuses on improving customer convenience while simplifying restaurant-side operations and order management.",
    type: "client",
    featured: false,
    technology: ["Java", "Express.js"],
  },
  {
    title: "Learning & Creative Platform",
    key: "learning_creative_platform",
    description:
      "An Android educational application designed to help users learn creative crafting techniques through guided tutorials, video lessons, project tracking, and interactive note-taking features.",
    ai_description:
      "This client project is a native Android learning platform focused on teaching creative crafting skills through structured step-by-step experiences. The application features video-based tutorials, personal note management, project organization tools, and a gallery system for showcasing completed works. Designed with usability and accessibility in mind, the app delivers a smooth mobile-first experience tailored for Android users while supporting long-term content scalability and community engagement.",
    type: "client",
    featured: false,
    technology: ["Java"],
  },
  {
    title: "Ulisha Store AI Laravel",
    key: "ulisha_store_laravel",
    description:
      "A modern and efficient AI-powered e-commerce solutions tailored for small to medium-sized businesses specifically built with Laravel, enabling seamless setup and cost effective web hosting.",
    ai_description:
      "Ulisha Store is a comprehensive AI-powered e-commerce platform engineered with Laravel and React. Designed specifically for SMBs, it offers a cost-effective, easily deployable architecture that simplifies inventory management, order processing, and customer interactions without the overhead of enterprise-level software.",
    type: "venture",
    link: "https://ulishastore.com",
    featured: true,
    technology: ["Laravel", "Blade", "React", "Tailwind CSS"],
  },
  {
    title: "Protocol Discussion Platform",
    key: "protocol_discussion_platform",
    description:
      "A content-first discussion platform where users can post structured protocols, create discussion threads, and engage through comments, reviews, and voting — with intelligent search and filtering powered by Typesense.",
    ai_description:
      "Built for high-quality technical discourse, this platform allows users to document structured protocols and engage in deeply threaded discussions. By integrating Typesense, it delivers lightning-fast, typo-tolerant search capabilities, ensuring that valuable knowledge and complex topics are easily discoverable. The stack utilizes Laravel for robust backend logic and React/TypeScript for a highly interactive frontend.",
    type: "personal",
    link: "/protocol-discussion-platform",
    repo: "https://github.com/mrepol742/protocol-discussion-platform",
    featured: false,
    technology: ["Laravel", "React", "TypeScript", "Typesense", "Tailwind CSS"],
    cover: "/images/protocol-discussion-platform.png",
  },
  {
    title: "Devpulse",
    key: "devpulse",
    description:
      "Turn your daily coding activity into competitive, shareable leaderboards. Track productivity, motivate your team, and visualize real developer impact.",
    ai_description:
      "Devpulse is a web-based leaderboard platform that turns your coding activity into a competitive, shareable experience. Track your productivity, visualize real developer impact, and motivate your team with leaderboard rankings and real-time updates.",
    type: "community",
    link: "https://devpulse.hallofcodes.org",
    repo: "https://github.com/hallofcodes/devpulse",
    featured: false,
    technology: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project Canis TG",
    key: "project_canis_tg",
    description:
      "An extension of the Canis project adapted specifically for Telegram, bringing its features into the chat platform.",
    ai_description:
      "Project Canis TG ports the powerful, modular architecture of the original Canis chatbot to the Telegram ecosystem. Written in TypeScript, it seamlessly integrates with Telegrams API to deliver automated responses, complex command handling, and scalable chat management.",
    type: "personal",
    repo: "https://github.com/mrepol742/project-canis-tg",
    featured: false,
    technology: ["TypeScript"],
  },
  {
    title: "Project Canis",
    key: "project_canis",
    description:
      "A multi-account WhatsApp bot built in TypeScript that handles everything from group commands and instant media downloads to an agentic AI that can search the web, write and run code, and deliver files. All through a single chat message.",
    ai_description:
      "Project Canis is an AI-powered WhatsApp bot that delivers a seamless, multi-account chat experience. With a modular architecture and agentic AI capabilities, it can handle complex commands, media downloads, and web searches, all through a single chat message.",
    type: "personal",
    link: "/canis-agent",
    featured: true,
    technology: ["TypeScript"],
  },
  {
    title: "Ulisha Store Next",
    key: "ulisha_store_next",
    description:
      "A modern and efficient e-commerce solution tailored for startups, enabling seamless setup and free hosting on Vercel and Supabase Cloud.",
    ai_description:
      "Ulisha Store Next is the Next.js variant of the Ulisha ecosystem, optimized for the modern serverless edge. By coupling Next.js with Supabase (an open-source Firebase alternative), it provides startups with a fully functional, highly performant e-commerce platform that can be hosted entirely for free on Vercel, drastically reducing initial operational costs.",
    type: "venture",
    link: "https://ulishastore.com",
    repo: "https://github.com/ulisha-limited/ulisha-store-next",
    featured: false,
    technology: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
  },
  {
    title: "Devops Capstone Project",
    key: "devops_capstone",
    description:
      "Completed as part of the IBM Devops Capstone Project on Coursera.",
    ai_description:
      "This repository contains the final capstone project for the IBM DevOps certification. It demonstrates practical application of CI/CD pipelines, containerization, and automated deployment strategies using industry-standard tools, showcasing a deep understanding of modern software delivery lifecycles.",
    type: "personal",
    link: "https://github.com/mrepol742/devops-capstone-project",
    featured: false,
    technology: ["JavaScript"],
    archived: true,
  },
  {
    title: "Point of Sale",
    key: "point_of_sale",
    description:
      "A lightweight, web-based and offline-capable POS system built for flawless performance, supporting multi-department roles and full functionality.",
    ai_description:
      "This Point of Sale (POS) system was architected from the ground up to solve real-world retail challenges. It features a progressive web app (PWA) design that guarantees offline resilience. Built with Laravel and React, it securely handles multi-department user roles, intensive inventory tracking, and transactional integrity even during network outages.",
    type: "personal",
    link: "/point-of-sale",
    featured: false,
    technology: ["Laravel", "JavaScript", "React", "Bootstrap"],
    cover: "/images/point-of-sale-1.png",
  },
  {
    title: "Axleshift Freight Management",
    key: "axleshift_freight",
    description:
      "A freight management services. Providing Businesses with cutting-edge platform, security, and reliability.",
    ai_description:
      "Axleshift is an enterprise-grade freight management platform engineered on the MERN stack (MongoDB, Express, React, Node.js). It provides logistics businesses with real-time tracking, secure data handling, and operational reliability, streamlining the complex workflows associated with modern supply chain management.",
    type: "personal",
    link: "/axleshift-freight-management",
    featured: false,
    technology: ["JavaScript", "React", "Node.js", "MongoDB", "Bootstrap"],
    cover: "/images/axleshift-3.png",
  },
  {
    title: "Second Chance Backend Nodejs Capstone",
    key: "second_chance_capstone",
    description:
      "Completed as part of the IBM JavaScript Back-End Capstone Project on Coursera.",
    ai_description:
      "This project represents the culmination of the IBM JavaScript Back-End curriculum. It features a fully developed RESTful API built with Node.js and Express, demonstrating core backend concepts such as routing, middleware integration, authentication, and database interactions.",
    repo: "https://github.com/mrepol742/secondchance-backend-nodejs-capstone",
    type: "personal",
    featured: false,
    technology: ["JavaScript"],
    archived: true,
  },
  {
    title: "LGU Management System",
    key: "lgu_ms",
    description: "A Project for Project Management class.",
    ai_description:
      "Developed as an academic project, the LGU Management System is a PHP-based application designed to digitalize and streamline the administrative processes of Local Government Units. It emphasizes structured data management and user-friendly interfaces for government personnel.",
    repo: "https://github.com/lgu-ms/lgu-ms",
    type: "personal",
    featured: false,
    technology: ["PHP"],
    archived: true,
  },
  {
    title: "Project Orion",
    key: "project_orion",
    description:
      "Meet the lightning-fast Facebook Messenger chatbot, seamlessly managing multiple accounts with access to 271 commands.",
    ai_description:
      "Project Orion was a massive, highly successful Facebook Messenger automation project. Written in JavaScript, it managed thousands of user interactions across multiple accounts simultaneously. Featuring an expansive library of 271 distinct commands, it pushed the limits of what could be achieved with the Messenger API before eventually being succeeded by Project Canis.",
    type: "personal",
    link: "/orion-chatbot",
    featured: true,
    technology: ["JavaScript"],
    archived: true,
  },
  {
    title: "Online Catering System",
    key: "online_catering",
    description: "A Project for HCI Subject.",
    ai_description:
      "This Online Catering System was developed to explore the principles of Human-Computer Interaction (HCI). Built with PHP, the project focuses heavily on user experience (UX) design, ensuring that the process of booking catering services is intuitive, accessible, and visually cohesive.",
    type: "personal",
    repo: "https://github.com/mrepol742/Online-Catering-System",
    featured: false,
    technology: ["PHP"],
    archived: true,
  },
  {
    title: "Room Rental System",
    key: "room_rental",
    description: "A Project for Web Dev Subject.",
    ai_description:
      "The Room Rental System is a foundational PHP web application designed to facilitate the listing and booking of rental properties. It demonstrates core web development skills including database schema design, session management, and server-side rendering.",
    type: "personal",
    repo: "https://github.com/mrepol742/Room-Rental-System",
    featured: false,
    technology: ["PHP"],
    archived: true,
  },
  {
    title: "Webvium VPN",
    key: "webvium_vpn",
    description:
      "Inspired from Webvium, Webvium VPN is a lightweight android VPN app focuses in speed, simplicity, security and privacy.",
    ai_description:
      "Webvium VPN is a native Android application engineered in Java. It provides users with a secure, encrypted tunnel for internet traffic, emphasizing strict privacy protocols and minimal battery consumption. It strips away the complex configurations of standard VPN clients in favor of a one-tap connection model.",
    type: "personal",
    link: "https://www.webvium.com",
    featured: false,
    technology: ["Java"],
    cover: "/images/webviumvpn-banner.png",
    archived: true,
  },
  {
    title: "Webvium Browser",
    key: "webvium_browser",
    description:
      "A lightweight, fast, and privacy-focused Android web browser built entirely from scratch to deliver a secure and efficient browsing experience. Designed to balance speed, security, and functionality, it aims to provide all the essential features of modern browsers while staying minimal and resource-friendly.",
    ai_description:
      "Project Webvium is a fully-fledged Android web browser developed natively in Java. It was engineered from the ground up to challenge mainstream browsers by offering a hyper-minimalist footprint, aggressive privacy controls, and rapid page rendering. It represents a deep dive into Androids WebView architecture and efficient memory management on mobile devices.",
    type: "personal",
    link: "https://www.webvium.com/browser",
    featured: true,
    technology: ["Java"],
  },
];

export default Projects;
