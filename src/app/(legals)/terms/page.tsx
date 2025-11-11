import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Melvin Jones Repol",
  description: "Terms of Service for melvinjonesrepol.com",
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/terms",
  },
  openGraph: {
    title: "Terms of Service - Melvin Jones Repol",
    description: "Terms of Service for melvinjonesrepol.com",
    url: "https://www.melvinjonesrepol.com/terms",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
        width: 1200,
        height: 630,
        alt: "Terms of Service Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Melvin Jones Repol",
    description: "Terms of Service for melvinjonesrepol.com",
    images: [
      "https://www.melvinjonesrepol.com/images/melvinjonesrepol.cover.png",
    ],
    creator: "@mrepol742",
  },
};

export default function Terms() {
  return (
    <main className="p-3 md:p-8">
      <section>
        <h1 className="text-center text-2xl font-semibold">Terms of Service</h1>
        <div className="mt-4 w-full md:max-w-3xl mx-auto">
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
              website including codes, projects, texts, images, design elements,
              and branding is the intellectual property of Melvin Jones Repol
              and may be subject to different licensing terms.
            </p>

            <h3 className="mt-4 font-semibold">3. User-Generated Content</h3>
            <p>
              If you submit comments or other content to this site, you grant
              Melvin Jones Repol a non-exclusive, royalty-free, perpetual, and
              worldwide license to use, reproduce, modify, adapt, publish,
              translate, and distribute such content in any medium. You are
              responsible for the content you submit and must ensure it does not
              violate any third-party rights or applicable laws.
            </p>

            <h3 className="mt-4 font-semibold">4. Third-Party Services</h3>
            <p>
              This website may integrate with third-party services such as
              Disqus for comments and LiveChat.ai for chat support. Your use of
              these services is subject to their respective terms of service and
              privacy policies. Melvin Jones Repol is not responsible for the
              content or practices of these third-party services.
            </p>

            <h3 className="mt-4 font-semibold">5. Limitation of Liability</h3>
            <p>
              Melvin Jones Repol makes no warranties or representations about
              the accuracy, reliability, or completeness of the content on this
              site. In no event shall Melvin Jones Repol be liable for any
              direct, indirect, incidental, special, or consequential damages
              arising out of or in connection with your use of this site or any
              content provided herein.
            </p>

            <h3 className="mt-4 font-semibold">6. Changes to Terms</h3>
            <p>
              These terms may be updated from time to time without notice.
              Continued use of the website after any such changes constitutes
              your acceptance of the new Terms.
            </p>

            <h3 className="mt-4 font-semibold">7. Contact</h3>
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
