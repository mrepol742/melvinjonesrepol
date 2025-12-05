import Link from "next/link";

export default function WebviumTermsOfService() {
  return (
    <main className="my-18 p-4 md:p-10 max-w-3xl mx-auto">
      <section className="space-y-6">
        <h1 className="text-3xl font-bold">
          Terms of Service for Webvium Browser
        </h1>
        <p className="text-sm text-gray-500">Last updated: November 12, 2025</p>

        <p>
          These Terms of Service (“Terms”) govern your use of the Webvium
          Browser application (“the App”), developed and maintained by{" "}
          <a
            href="https://www.melvinjonesrepol.com"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Melvin Jones Repol
          </a>
          . By installing or using Webvium Browser, you agree to be bound by
          these Terms.
        </p>

        <h2 className="text-2xl font-semibold">1. Use of the Application</h2>
        <p>
          Webvium Browser is provided solely for personal and lawful use. You
          agree not to misuse the App or engage in any activity that could harm,
          disrupt, or interfere with its normal operation.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Do not use the App for illegal activities.</li>
          <li>Do not attempt to reverse-engineer or modify the App.</li>
          <li>Do not interfere with the App’s performance or security.</li>
        </ul>

        <h2 className="text-2xl font-semibold">2. Local Data Responsibility</h2>
        <p>
          As outlined in our Privacy Policy, Webvium Browser does{" "}
          <strong>not collect or store any personal data</strong> on external
          servers. All browser data—including bookmarks, browsing history,
          downloaded files, and settings—remains{" "}
          <strong>stored locally on your device</strong>. You are solely
          responsible for managing and protecting this data.
        </p>

        <h2 className="text-2xl font-semibold">3. Third-Party Websites</h2>
        <p>
          Webvium Browser provides access to external websites that are{" "}
          <strong>not owned or controlled</strong> by us. We are not responsible
          for the content, security, or practices of third-party sites. Each
          site you visit may have its own terms, conditions, and privacy
          policies.
        </p>

        <h2 className="text-2xl font-semibold">4. No Warranties</h2>
        <p>
          Webvium Browser is provided on an{" "}
          <strong>“as is” and “as available”</strong> basis. We make no
          warranties, express or implied, regarding:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Availability or reliability of the App</li>
          <li>Accuracy of content accessed through the App</li>
          <li>Security against unauthorized access to your local data</li>
        </ul>

        <h2 className="text-2xl font-semibold">5. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, we are not liable for any
          damages arising from your use of Webvium Browser, including but not
          limited to:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Data loss on your device</li>
          <li>Malware or harmful content from external websites</li>
          <li>Device performance issues caused by external factors</li>
        </ul>

        <h2 className="text-2xl font-semibold">6. App Updates</h2>
        <p>
          We may release updates that improve functionality or security.
          Continued use of the App after updates constitutes acceptance of any
          changes to these Terms.
        </p>

        <h2 className="text-2xl font-semibold">7. Termination</h2>
        <p>
          You may stop using Webvium Browser at any time by uninstalling it. We
          reserve the right to restrict or terminate access to the App for users
          who violate these Terms.
        </p>

        <h2 className="text-2xl font-semibold">8. Changes to These Terms</h2>
        <p>
          We may update these Terms periodically. The updated version will be
          posted on this page with a new “Last Updated” date.
        </p>

        <h2 className="text-2xl font-semibold">9. Contact</h2>
        <p>
          If you have any questions or concerns about these Terms, please
          contact us at:
        </p>
        <ul className="list-none space-y-1">
          <li>
            📧{" "}
            <Link
              href="mailto:mrepol742@gmail.com"
              className="text-blue-600 hover:underline"
            >
              mrepol742@gmail.com
            </Link>
          </li>
          <li>
            🌐{" "}
            <Link
              href="https://www.melvinjonesrepol.com/contact-me"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              https://www.melvinjonesrepol.com/contact-me
            </Link>
          </li>
        </ul>

        <p className="pt-4 text-gray-600 italic">
          By using Webvium Browser, you agree to these Terms and acknowledge
          that you are responsible for all data stored locally on your device.
        </p>
      </section>
    </main>
  );
}
