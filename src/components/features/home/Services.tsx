"use client";

const techStack = [
  { name: "Angular", icon: "devicon-angularjs-plain colored" },
  { name: "Laravel", icon: "devicon-laravel-plain colored" },
  { name: "Google Cloud", icon: "devicon-googlecloud-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "Next.js", icon: "devicon-nextjs-original colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "Kotlin", icon: "devicon-kotlin-plain colored" },
  { name: "PHP", icon: "devicon-php-plain colored" },
  { name: "Microsoft Azure", icon: "devicon-azure-plain colored" },
  {
    name: "Amazon Web Services",
    icon: "devicon-amazonwebservices-original colored",
  },
  { name: "Mongo Atlas", icon: "devicon-mongodb-plain colored" },
  { name: "Firebase", icon: "devicon-firebase-plain colored" },
  { name: "Supabase", icon: "devicon-supabase-plain colored" },
  { name: "Vercel", icon: "devicon-vercel-plain colored" },
  { name: "Netlify", icon: "devicon-netlify-plain colored" },
  { name: "Github", icon: "devicon-github-original colored" },
  { name: "Gitlab", icon: "devicon-gitlab-plain colored" },
  { name: "Bitbucket", icon: "devicon-bitbucket-original colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "CoreUI", icon: "devicon-coreui-plain colored" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
  { name: "Fuse Angular", icon: "devicon-fuse-angular-plain colored" },
  { name: "Sentry", icon: "devicon-sentry-plain colored" },
  { name: "Google Analytics", icon: "devicon-google-plain colored" },
  { name: "Google Adsense", icon: "devicon-google-plain colored" },
  { name: "Google Tag Manager", icon: "devicon-google-plain colored" },
  { name: "Stripe", icon: "devicon-stripe-plain colored" },
  { name: "PayPal", icon: "devicon-paypal-plain colored" },
  { name: "Xendit", icon: "devicon-xendit-plain colored" },
  { name: "Express.js", icon: "devicon-express-original colored" },
  { name: "NestJS", icon: "devicon-nestjs-plain colored" },
  { name: "Zoho", icon: "devicon-zoho-plain colored" },
  { name: "PM2", icon: "devicon-pm2-plain colored" },
  { name: "Cloudflare", icon: "devicon-cloudflare-plain colored" },
];

function MarqueeRow({ reverse = false }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex">
        <div
          className={`flex gap-6 ${
            reverse ? "animate-scroll-right" : "animate-scroll-left"
          }`}
        >
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center gap-2 px-2 py-2 text-sm whitespace-nowrap"
            >
              <i className={`${tech.icon} text-lg`} />
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TechStackPage() {
  return (
    <div className="w-full max-w-full overflow-x-clip">
      <div className="w-full max-w-6xl space-y-6">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>

      <style jsx global>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 120s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 120s linear infinite;
        }
      `}</style>
    </div>
  );
}
