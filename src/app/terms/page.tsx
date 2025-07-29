import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Melvin Jones Repol",
  description: "Terms of Service for melvinjonesrepol.com",
};

export default function Terms() {
  return (
    <main className="p-8">
      <section>
        <h1 className="text-center text-2xl font-semibold">Terms of Service</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="col-span-full">
            <p>
              Welcome to melvinjonesrepol.com. By accessing or using this
              website, you agree to be bound by these Terms of Service. If you
              do not agree with any part of these terms, you may not use the
              website.
            </p>

            <h3 className="mt-4 font-semibold">1. Use of the Site</h3>
            <p>
              This website is intended for personal and professional portfolio
              viewing purposes only. You may not use this site for any unlawful
              purpose or in any way that may harm or disrupt the operation of
              the site.
            </p>
            <h3 className="mt-4 font-semibold">
              2. Intellectual Property & Licensing
            </h3>
            <p>
              The source code of this website is open source and available under
              MIT License. However, unless otherwise noted, the content of this
              website including text, images, design elements, and branding is
              the intellectual property of Melvin Jones Repol and may be subject
              to different licensing terms.
            </p>

            <h3 className="mt-4 font-semibold">3. Contact Form</h3>
            <p>
              By using the contact form, you consent to the collection of your
              name, email address, and message content. This data is securely
              stored on a Supabase database and used solely for the purpose of
              communication.
            </p>

            <h3 className="mt-4 font-semibold">4. Analytics & Monitoring</h3>
            <p>
              This website uses Google Analytics to monitor user interaction and
              improve user experience. It also uses Sentry for application
              performance monitoring and error tracking.
            </p>

            <h3 className="mt-4 font-semibold">5. Changes to Terms</h3>
            <p>
              These terms may be updated from time to time without notice.
              Continued use of the website after any such changes constitutes
              your acceptance of the new Terms.
            </p>

            <h3 className="mt-4 font-semibold">6. Contact</h3>
            <p>
              If you have any questions about these Terms, please contact me via
              the contact form.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
