"use client";

import Script from "next/script";

export default function TrustPilotWidget() {
  return (
    <>
      <div
        className="trustpilot-widget mt-5"
        data-locale="en-US"
        data-template-id="56278e9abfbbba0bdcd568bc"
        data-businessunit-id="69454e6374cf034e3abc67c7"
        data-style-height="52px"
        data-style-width="100%"
        data-token="2dc4132c-6854-4b53-8b8d-ca96c5a7fe12"
      >
        <a
          href="https://www.trustpilot.com/review/www.melvinjonesrepol.com"
          target="_blank"
          rel="noopener"
        >
          Trustpilot
        </a>
      </div>

      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}
