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
  gtag: {
    (command: string, trackingId: string, config?: Record<string, any>): void;
  };
}
