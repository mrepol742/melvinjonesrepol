import { createRecaptchaVerifier } from "@mrepol742/next-kit/server/recaptcha";

let verify: ReturnType<typeof createRecaptchaVerifier> | undefined;

export async function recaptcha(token: string, action: string): Promise<boolean> {
  if (!token || !action) return false;

  try {
    if (!verify) {
      // This application stores service account JSON as base64 in this variable.
      const encodedCredentials = process.env.GOOGLE_APPLICATION_CREDENTIALS;
      const credentials = encodedCredentials
        ? JSON.parse(Buffer.from(encodedCredentials, "base64").toString("utf-8"))
        : undefined;

      verify = createRecaptchaVerifier({
        projectId: process.env.GOOGLE_CLOUD_PROJECT || "",
        siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "",
        credentials,
        minimumScore: 0.5,
        onError: (error) => console.error("Failed to validate captcha:", error),
      });
    }
    return await verify(token, action);
  } catch (error) {
    console.error("Failed to validate captcha:", error);
    return false;
  }
}
