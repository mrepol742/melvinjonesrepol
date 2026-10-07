"use client";

import { PrivacyPolicyPrompt } from "@mrepol742/next-kit/consent";

export default function CookieBanner() {
  return (
    <PrivacyPolicyPrompt
      policyUrl="/legal/privacy-policy"
      description="We use cookies and similar technologies to improve site functionality, measure traffic, display personalized advertising, and provide third-party services. You can accept all cookies, reject optional cookies, or customize your preferences."
      labels={{
        necessary: "Necessary Cookies",
        analytics: "Analytics Cookies",
        functional: "Functional Cookies",
        advertising: "Advertising Cookies",
      }}
    />
  );
}
