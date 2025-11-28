export type CookieConsent = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

export type ConsentRecord = {
  consent: CookieConsent;
  timestamp: number;
  version: string;
};

const CONSENT_KEY = "grofs_cookie_consent";
const CONSENT_VERSION = "1.0";

export const getStoredConsent = (): ConsentRecord | null => {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored);

    // Basic runtime validation of the parsed shape
    if (typeof parsed !== "object" || parsed === null) return null;

    // Validate top-level fields
    if (typeof parsed.version !== "string") return null;
    if (typeof parsed.timestamp !== "number" || !Number.isFinite(parsed.timestamp))
      return null;

    // Validate consent object and its flags
    const consentObj = parsed.consent;
    if (typeof consentObj !== "object" || consentObj === null) return null;

    if (
      typeof consentObj.essential !== "boolean" ||
      typeof consentObj.analytics !== "boolean" ||
      typeof consentObj.marketing !== "boolean"
    ) {
      return null;
    }

    // All checks passed — return typed record
    return parsed as ConsentRecord;
  } catch {
    return null;
  }
};

export const saveConsent = (consent: CookieConsent): void => {
  if (typeof window === "undefined") return;
  const record: ConsentRecord = {
    consent,
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
};

export const clearConsent = (): void => {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(CONSENT_KEY);
  } catch (err) {
    // localStorage may be unavailable or restricted (e.g., in incognito or due to browser settings)
    // Log the error so it's visible during development; do not throw in production flow.
    // Keeping behavior similar to `saveConsent` which doesn't throw.
    // eslint-disable-next-line no-console
    console.error("Failed to clear cookie consent from localStorage:", err);
  }
};

export const hasConsentExpired = (record: ConsentRecord): boolean => {
  // Consent expires after 365 days
  const ONE_YEAR = 365 * 24 * 60 * 60 * 1000;
  return Date.now() - record.timestamp > ONE_YEAR;
};

export const isVersionOutdated = (record: ConsentRecord): boolean => {
  return record.version !== CONSENT_VERSION;
};

export const shouldShowBanner = (): boolean => {
  const stored = getStoredConsent();
  if (!stored) return true;
  if (hasConsentExpired(stored) || isVersionOutdated(stored)) return true;
  return false;
};
