export type FAQ = {
  id: string;
  question: string;
  answer: string;
  source?: { label: string; href: string };
};

export const faq: {
  id: string;
  title: string;
  questions: FAQ[];
}[] = [
  {
    id: "technology",
    title: "Choosing your tools",
    questions: [
      {
        id: "wordpress",
        question: "Is WordPress still worth using?",
        answer:
          "Yes. If you need a blog or a website where people can easily edit pages, WordPress can save time. A custom app makes more sense when your features are hard to build with plugins. You can also add custom code to WordPress. You do not always need to replace the whole thing.",
      },
      {
        id: "custom-app",
        question: "When should you build a custom app?",
        answer:
          "When an existing tool makes important parts of your work harder. Special approval steps, business rules, and integrations can be good reasons. First check whether an existing tool can do the job. Custom code also needs updates, testing, and someone to maintain it.",
      },
      {
        id: "plain-html",
        question: "When is plain HTML, CSS, and JavaScript enough?",
        answer:
          "For a small website with simple pages and a little interaction, they may be all you need. Add a framework when it solves a real problem, such as managing many screens or shared parts. A website does not need a large setup just to show text and images.",
      },
      {
        id: "laravel-php",
        question: "Why use Laravel instead of plain PHP?",
        answer:
          "Laravel is built with PHP. It gives you ready tools for page requests, checking user input, databases, and background tasks. You can build these yourself with plain PHP, but Laravel saves you from repeating that work. For a small script, plain PHP may be enough.",
      },
      {
        id: "backend-framework",
        question: "Why choose Laravel over another backend framework?",
        answer:
          "Choose it when its tools fit the app and the team knows PHP. Other frameworks may fit better if your team already works with another language or needs a particular library. Compare what you need to build and maintain. Popularity alone is not a good reason to switch.",
      },
      {
        id: "laravel-nextjs",
        question: "Laravel or Next.js?",
        answer:
          "Start with what the app needs. Laravel is a strong choice for database records, reports, and background jobs. Next.js is useful when you want to build with React and choose how pages load. Both can build full apps. You can use them together, but two apps mean more parts to maintain.",
      },
      {
        id: "react-vue",
        question: "React or Vue: how do you choose?",
        answer:
          "Both can build good websites and apps. Look at what the team knows, the libraries you need, and how easy the code will be to maintain. Try building one real screen if you are unsure. That tells you more than arguing about which one is better.",
      },
      {
        id: "nextjs-nuxt",
        question: "Next.js or Nuxt: what is the difference?",
        answer:
          "Next.js builds on React. Nuxt builds on Vue. Both add tools for routing, rendering pages, and building full apps. If you want a fair comparison, compare React with Vue and Next.js with Nuxt. Choose the setup that fits your team and hosting needs.",
      },
    ],
  },
  {
    id: "hosting",
    title: "Hosting and costs",
    questions: [
      {
        id: "laravel-hosting",
        question: "Can Laravel run on cheap shared hosting?",
        answer:
          "Yes, if the host supports the PHP version, extensions, and setup your app needs. Check background tasks too. A basic app may work fine, but an app that needs workers running all the time may need a different plan. Check the host's limits before paying.",
        source: {
          label: "Laravel hosting requirements",
          href: "https://laravel.com/framework/docs/deployment",
        },
      },
      {
        id: "nextjs-vps",
        question: "Does Next.js need a VPS?",
        answer:
          "No. A Next.js site made of static pages can run on hosting that serves HTML, CSS, and JavaScript. If you need its server features, use hosting that supports them. That can be a managed service or a server you run yourself. A VPS is one option.",
        source: {
          label: "Next.js hosting options",
          href: "https://nextjs.org/docs/app/getting-started/deploying",
        },
      },
      {
        id: "hosting-type",
        question: "Shared hosting, VPS, or managed hosting?",
        answer:
          "Shared hosting can work for simple apps if the host supports your setup. A VPS gives you more control, but you must look after the server. Managed hosting handles more of that work for you. Compare the features, limits, and maintenance time along with the price.",
      },
      {
        id: "extra-costs",
        question: "What do you pay for besides hosting?",
        answer:
          "You may also pay for a domain, email, file storage, backups, monitoring, paid plugins, or outside services. Some services charge more as usage grows. Count the time spent on updates and repairs too. The server bill is only one part of running an app.",
      },
      {
        id: "lower-costs",
        question: "How do you lower hosting costs?",
        answer:
          "Check what the app actually uses. Resize large images, cache repeated work, and remove unused services. Use static pages where they fit. Keep backups and basic monitoring. A cheap server that takes hours to fix every week may cost more overall.",
      },
      {
        id: "free-hosting",
        question: "When is free hosting enough?",
        answer:
          "It can be enough for a small site, a demo, or a project with low usage. Check limits on traffic, storage, server work, and commercial use. Move to a paid plan when you need more room or support. Know what happens when you reach a limit.",
      },
    ],
  },
  {
    id: "architecture",
    title: "How the app is built",
    questions: [
      {
        id: "rendering",
        question: "Should pages load from the server or the browser?",
        answer:
          "Static pages are built ahead of time and work well for content that does not change often. Server rendering builds a page when a request needs it. Browser rendering lets JavaScript build the screen on the user's device. Many apps mix these methods. Choose based on how fresh and interactive each page needs to be.",
      },
      {
        id: "separate-apps",
        question: "Should the frontend and backend be separate?",
        answer:
          "Separate them when there is a clear benefit, such as one backend serving a website and a mobile app. Keeping them together can make building and deploying simpler. A separate frontend adds work around logins, requests, and releases. You do not need that split for every app.",
      },
      {
        id: "microservices",
        question: "Do you need microservices?",
        answer:
          "Start with one app unless there is a clear reason to split it. Separate services can help teams release and scale parts on their own. They also add network failures, more deployments, and harder debugging. A well-organized single app can go a long way.",
      },
      {
        id: "database",
        question: "PostgreSQL or MySQL?",
        answer:
          "Both are solid choices for many apps. Check the features you need, what your host supports, and what your team knows. Good table design, indexes, and queries matter a lot. Switching databases will not automatically fix a slow app.",
      },
      {
        id: "cache-queues",
        question: "When do you need caching or background jobs?",
        answer:
          "Use caching when the app repeats expensive work and the result can safely be reused. Use background jobs for work that should not make someone wait, like sending email or building a large report. Plan how cached data stays fresh and what happens when a job fails.",
      },
      {
        id: "slow-app",
        question: "How do you find out why an app is slow?",
        answer:
          "Measure before changing things. Check page loading, server response times, database queries, and calls to outside services. Find the slow part, change it, and measure again. A larger server can help with some problems, but it does not fix every cause.",
      },
    ],
  },
  {
    id: "devops",
    title: "Deploying and keeping it running",
    questions: [
      {
        id: "docker",
        question: "Do small apps need Docker?",
        answer:
          "No. Docker can make the setup easier to repeat across computers and servers. It is useful when you have several services or keep running into setup differences. It also adds things to learn and maintain. Use it when that tradeoff helps your project.",
      },
      {
        id: "kubernetes",
        question: "When do you need Kubernetes?",
        answer:
          "When managing many running services needs more automation and your team can maintain the setup. A small app may be easier to run on a managed platform or a simple server. Kubernetes adds its own costs and failure points. App size alone does not decide this.",
      },
      {
        id: "ci-cd",
        question: "What should a CI/CD pipeline do?",
        answer:
          "It should repeat the checks and release steps you would otherwise do by hand. CI checks code changes, such as running tests and building the app. CD prepares or deploys releases. Start with useful checks, keep secrets out of logs, and make failed steps easy to understand.",
      },
      {
        id: "safe-deploy",
        question: "How do you deploy an update safely?",
        answer:
          "Check the change before putting it online. Keep a working version you can return to. Take extra care with database changes because old code may not work with new data. After the update, check the main features and watch for errors. A successful upload does not mean the app works.",
      },
      {
        id: "monitoring",
        question: "What should you monitor besides uptime?",
        answer:
          "Check errors, slow requests, server resources, failed jobs, and database health. Also check important actions, like whether users can sign in or submit a form. A homepage can load while the rest of the app is broken. Send alerts for problems someone can act on.",
      },
      {
        id: "backups",
        question: "How do you know your backups work?",
        answer:
          "Restore one in a safe test setup and check the result. Make sure the backup includes the data and files you need. Keep a copy away from the main server, protect access, and decide how much recent data you can afford to lose. A backup file alone is not proof that you can recover.",
      },
    ],
  },
  {
    id: "maintenance",
    title: "Keeping the code useful",
    questions: [
      {
        id: "production",
        question: "What makes an app ready for real users?",
        answer:
          "The main features work, access rules are checked, and errors are handled. You also need safe settings, backups, monitoring, and a way to release fixes. Check what happens when input is wrong or another service is down. Working on your laptop is only the first step.",
      },
      {
        id: "tests",
        question: "Which tests are worth writing?",
        answer:
          "Start with things that would hurt if they broke, like payments, access rules, important calculations, and key user actions. Test the result people depend on. Add a test when fixing a bug that could come back. A large test count does not tell you whether the right things are covered.",
      },
      {
        id: "rewrite",
        question: "Should you fix old code or rewrite it?",
        answer:
          "Fix it in steps when you can still change it safely. A rewrite may make sense when the current setup blocks important work and smaller changes cannot solve it. First learn what the old app does, including the odd cases. A rewrite can bring back problems the old code already solved.",
      },
      {
        id: "dependencies",
        question: "How do you decide whether to add a library?",
        answer:
          "Check whether it solves enough work to justify adding it. Look at maintenance, security issues, license, documentation, and how hard it would be to replace. A small need may be easier to handle with a little code. A difficult problem may be safer with a well-maintained library.",
      },
      {
        id: "maintainable",
        question: "How do you keep a growing app easy to maintain?",
        answer:
          "Use clear names, keep related code together, and write down choices that are hard to guess. Make setup and releases repeatable. Review changes and test important behavior. The next developer should be able to follow the code without needing you to explain every file.",
      },
      {
        id: "ai-code",
        question: "Can you trust code written by AI?",
        answer:
          "Review it like any other code you did not write. Understand it, check its dependencies, and test what it does when things go wrong. Pay extra attention to security, data access, and made-up APIs. If nobody on the team can explain the code, it needs more review before release.",
      },
    ],
  },
];

const featuredIds = [
  "wordpress",
  "laravel-php",
  "laravel-nextjs",
  "nextjs-vps",
  "laravel-hosting",
  "lower-costs",
  "safe-deploy",
];

export const featuredEngineeringQuestions = featuredIds.map((id) =>
  faq.flatMap((group) => group.questions).find((item) => item.id === id)!,
);
