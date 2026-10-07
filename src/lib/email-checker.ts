import {
  createEmailChecker,
  validateEmail as validateEmailFormat,
} from "@mrepol742/next-kit/email";

// Preserve availability when the remote disposable-domain list is unreachable.
const emailChecker = createEmailChecker({ onFetchError: "allow" });
export const isDisposableEmail = emailChecker.isDisposableEmail;

export function validateEmail(email: string) {
  if (!validateEmailFormat(email)) return false;

  // Site-specific placeholder addresses remain blocked.
  const lower = email.toLowerCase();
  if (/^(example|test|fake|dummy|admin|user)[0-9]*@/.test(lower)) return false;
  if (/@(example\.com|test\.com|localhost|invalid|fake\.\w+)$/.test(lower))
    return false;

  return true;
}
