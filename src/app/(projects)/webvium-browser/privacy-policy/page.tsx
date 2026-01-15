import Link from "next/link";

export default function WebviumPrivacyPolicy() {
  return (
    <main className="my-18 p-4 md:p-10 max-w-3xl mx-auto">
      <section className="space-y-6">
        <h1 className="text-3xl font-bold">
          Privacy Policy for Webvium Browser
        </h1>
        <p className="text-sm text-gray-500">Last updated: November 12, 2025</p>

        <p>
          Webvium Browser is developed and maintained by{" "}
          <a
            href="https://www.melvinjonesrepol.com"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Melvin Jones Repol
          </a>
          . This Privacy Policy explains how your information is handled when
          you use the Webvium Browser application.
        </p>

        <h2 className="text-2xl font-semibold">1. Data Collection</h2>
        <p>
          Webvium Browser does{" "}
          <strong>not collect, store, or share any personal data</strong> with
          us or any third parties. All data generated through your use of the
          browser—such as bookmarks, browsing history, settings, and downloaded
          files—remains <strong>stored locally on your device</strong> and is
          never transmitted to our servers.
        </p>

        <h2 className="text-2xl font-semibold">2. Local Storage</h2>
        <p>
          Webvium Browser may save certain information locally on your device to
          improve functionality, such as:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Bookmarks</li>
          <li>Browsing history</li>
          <li>User preferences and settings</li>
        </ul>
        <p>
          This data stays <strong>entirely on your device</strong> and can be
          deleted at any time by clearing your app data or uninstalling the app.
        </p>

        <h2 className="text-2xl font-semibold">3. Third-Party Websites</h2>
        <p>
          Webvium Browser allows you to access third-party websites. Please note
          that these websites are <strong>not operated or controlled</strong> by
          us, and each has its <strong>own privacy policy</strong> and data
          practices. We are <strong>not responsible</strong> for the content,
          security, or privacy practices of external sites. We encourage users
          to review the privacy policies of any websites they visit.
        </p>

        <h2 className="text-2xl font-semibold">4. Third-Party Services</h2>
        <p>
          Webvium Browser does <strong>not integrate</strong> with any
          third-party analytics, advertising, or tracking services. However,
          external websites visited through the browser may collect data
          according to their own terms and policies.
        </p>

        <h2 className="text-2xl font-semibold">5. Data Security</h2>
        <p>
          Since all user data is stored locally, you have{" "}
          <strong>full control</strong> over your information. We recommend
          protecting your device with a passcode or biometric authentication to
          keep your data secure.
        </p>

        <h2 className="text-2xl font-semibold">
          6. Google News Content &amp; Regional Preferences
        </h2>

        <p className="mb-4">
          Webvium Browser displays news content sourced from{" "}
          <span className="font-medium">Google News</span> using publicly
          available Google News RSS feeds.
        </p>

        <p className="mb-4">
          The app may use the device’s{" "}
          <span className="font-medium">language and regional settings</span>{" "}
          (such as country and language) to display region-relevant news
          headlines. This process is performed locally on the device and does
          not involve, storing, or transmitting precise location data.
        </p>

        <p className="mb-4">
          Webvium Browser does not access GPS, does not track users’ locations,
          and does not store regional or location information.
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li>News titles</li>
          <li>Short descriptions (snippets)</li>
          <li>Source names</li>
          <li>Links to the original publisher’s websites</li>
        </ul>

        <p className="mb-4">
          When a user opens a news article, they are redirected to the original
          publisher’s website, where the publisher’s own privacy policy applies.
        </p>

        <p className="text-sm text-gray-600">
          Webvium Browser is not affiliated with, endorsed by, or sponsored by
          Google. Google News is a trademark of Google LLC.
        </p>

        <p className="text-sm text-gray-600 mt-2">
          For information about Google’s data practices, please visit{" "}
          <Link
            href="https://policies.google.com/privacy"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/privacy
          </Link>
        </p>

        <h2 className="text-2xl font-semibold">7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Updates will be
          posted on this page with a new “Last Updated” date.
        </p>

        <h2 className="text-2xl font-semibold">8. Contact</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
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
              href="https://www.melvinjonesrepol.com"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              https://www.melvinjonesrepol.com/contact-me
            </Link>
          </li>
        </ul>

        <p className="pt-4 text-gray-600 italic">
          Webvium Browser values your privacy and ensures that all data stays on
          your device. You have complete control over your browsing information.
        </p>
      </section>
    </main>
  );
}
