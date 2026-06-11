interface Window {
  grecaptcha: {
    enterprise: {
      execute: (
        siteKey: string,
        options: { action: string },
      ) => Promise<string>;
      ready: (callback: () => void) => void;
    };
  };
  dataLayer: unknown[];
  gtag?: (...args: unknown[]) => void;
  adsbygoogle?: unknown[];
  Trustpilot?: {
    loadFromElement: (element: HTMLElement, forceReload?: boolean) => void;
  };
}
