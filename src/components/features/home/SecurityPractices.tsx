import ScrambleText from "@/components/ui/ScrambleText";

const securityPractices = [
  {
    title: "Signed Git Commits (GPG)",
    description:
      "Commits are signed with GPG and verified on GitHub (green verified check) to prove authenticity and integrity.",
  },
  {
    title: "npm Provenance / Trusted Publishing",
    description:
      "Packages are published with npm provenance, improving supply chain transparency by linking releases to CI build identity.",
  },
  {
    title: "GitHub Dependabot",
    description:
      "Automated dependency alerts and upgrade PRs help patch known vulnerabilities quickly and keep the stack current.",
  },
  {
    title: "Secret Scanning (GitGuardian)",
    description:
      "Repositories are monitored for exposed secrets and risky tokens, reducing the chance of credential leaks.",
  },
  {
    title: "Branch Protection & Required Checks",
    description:
      "Critical branches use PR reviews and required CI checks before merge to prevent insecure or untested changes.",
  },
  {
    title: "Continuous Security Scanning",
    description:
      "Static analysis and repository-level security checks are run continuously to catch issues early in development.",
  },
];

export default function SecurityPractices() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {securityPractices.map((practice, index) => (
        <article
          key={index}
          className="rounded-2xl border p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
          data-aos="fade-up"
          data-aos-delay={100 * (index + 1)}
        >
          <h3 className="text-xs uppercase tracking-wide">{practice.title}</h3>
          <ScrambleText
            as="p"
            text={practice.description}
            durationMs={2000}
            className="mt-2 text-sm"
          />
        </article>
      ))}
    </div>
  );
}
