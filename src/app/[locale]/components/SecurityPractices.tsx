import ScrambleText from "@/components/ui/ScrambleText";

const securityPractices = [
  {
    title: "Signed Git Commits (GPG)",
    description:
      "Commits are signed with GPG and verified on GitHub (green verified check) to prove authenticity and integrity.",
    comments: "GPG KEY ID: A21EA0FCEE0273A8",
  },
  {
    title: "npm Provenance / Trusted Publishing",
    description:
      "Packages are published with npm provenance, improving supply chain transparency by linking releases to CI build identity.",
    comments: "Github Actions",
  },
  {
    title: "Automated Dependency Alerts",
    description:
      "Automated dependency alerts and upgrade PRs help patch known vulnerabilities quickly and keep the stack current.",
    comments: "GitHub Dependabot",
  },
  {
    title: "Secret Scanning",
    description:
      "Repositories are monitored for exposed secrets and risky tokens, reducing the chance of credential leaks.",
    comments: "GitGuardian",
  },
  {
    title: "Branch Protection & Required Checks",
    description:
      "Critical branches use PR reviews and required CI checks before merge to prevent insecure or untested changes.",
    comments: "CI/CD Pipeline",
  },
  {
    title: "Continuous Security Scanning",
    description:
      "Static analysis and repository-level security checks are run continuously to catch issues early in development.",
  },
  {
    title: "Validated by Security Headers",
    description:
      "Security headers are configured to enforce best practices and protect against common web vulnerabilities.",
    comments:
      "https://securityheaders.com/?q=melvinjonesrepol.com&followRedirects=on",
  },
  {
    title: "Lighthouse Audits",
    description:
      "Lighthouse audits are performed to ensure the site meets performance and security best practices.",
  },
  {
    title: "Privacy & Security Compliance",
    description:
      "We strive to build this website, our software, and digital solutions with privacy, security, and regulatory compliance in mind, following applicable data protection laws and industry best practices where relevant.",
  },
];

export default function SecurityPractices() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {securityPractices.map((practice, index) => (
        <article
          key={index}
          data-aos="fade-up"
          data-aos-delay={100 * (index + 1)}
        >
          <div className="h-full rounded-2xl border border-zinc-800 p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
            <h3 className="text-xs uppercase tracking-wide">
              {practice.title}
            </h3>
            <ScrambleText
              as="p"
              text={practice.description}
              durationMs={2000}
              className="mt-2 text-sm"
            />
            {practice.comments && (
              <p className="mt-2 text-xs text-zinc-400">{practice.comments}</p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
