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
    return stored ? JSON.parse(stored) : null;
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
  localStorage.removeItem(CONSENT_KEY);
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