"use client";

import { useState, useEffect } from "react";
import {
  getStoredConsent,
  saveConsent,
  shouldShowBanner,
  CookieConsent,
} from "@/lib/cookieConsent";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    __ga4_initialized?: boolean;
  }
}

export default function CookieConsentBanner({
  gaMeasurementId,
}: {
  gaMeasurementId?: string;
}) {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const storedConsent = getStoredConsent();
    if (storedConsent) {
      setConsent(storedConsent as unknown as CookieConsent);
    }

    if (shouldShowBanner()) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsent: CookieConsent = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    saveConsent(allConsent);
    setConsent(allConsent);
    setShowBanner(false);
    loadNonEssentialScripts(allConsent, gaMeasurementId);
  };

  const handleRejectAll = () => {
    const essentialOnly: CookieConsent = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    saveConsent(essentialOnly);
    setConsent(essentialOnly);
    setShowBanner(false);
  };

  const handleSaveSettings = () => {
    saveConsent(consent);
    setShowBanner(false);
    loadNonEssentialScripts(consent, gaMeasurementId);
  };

  const toggleConsent = (key: keyof CookieConsent) => {
    if (key === "essential") return; // Essential cannot be toggled
    setConsent((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Backdrop */}
      {showBanner && (
        <div className="fixed inset-0 bg-black/50 z-40 transition-opacity" />
      )}

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg">
        {!showSettings ? (
          <div className="max-w-6xl mx-auto p-4 sm:p-6">
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-lg font-bold mb-2">
                  Zaštita vaše privatnosti
                </h2>
                <p className="text-sm text-gray-700 mb-4">
                  Koristimo kolačiće za poboljšanje iskustva. Neobavezni
                  kolačići se postavljaju samo uz vašu suglasnost. Možete
                  pristati na sve, odbiti sve ili prilagoditi postavke.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 border border-gray-400 rounded text-sm font-semibold hover:bg-gray-50 transition"
                  aria-label="Odbij sve kolačiće"
                >
                  Odbij sve
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-4 py-2 border border-gray-400 rounded text-sm font-semibold hover:bg-gray-50 transition"
                  aria-label="Otvori postavke kolačića"
                >
                  Postavke
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 bg-black text-white rounded text-sm font-semibold hover:bg-gray-800 transition"
                  aria-label="Prihvati sve kolačiće"
                >
                  Prihvati sve
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto p-4 sm:p-6">
            <h2 className="text-lg font-bold mb-4">Postavke kolačića</h2>

            <div className="space-y-4 mb-6">
              {/* Essential */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="essential"
                  checked={consent.essential}
                  disabled
                  className="mt-1"
                  aria-label="Obavezni kolačići (uvijek uključeni)"
                />
                <div className="flex-1">
                  <label htmlFor="essential" className="font-semibold">
                    Obavezni kolačići
                  </label>
                  <p className="text-sm text-gray-600">
                    Potrebni za sigurnost i funkcioniranje webshopa. Uvijek su
                    uključeni.
                  </p>
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start gap-3 border-t pt-4">
                <input
                  type="checkbox"
                  id="analytics"
                  checked={consent.analytics}
                  onChange={() => toggleConsent("analytics")}
                  className="mt-1"
                  aria-label="Analitički kolačići"
                />
                <div className="flex-1">
                  <label htmlFor="analytics" className="font-semibold">
                    Analitički kolačići
                  </label>
                  <p className="text-sm text-gray-600">
                    Pomažu nam razumjeti kako koristite stranicu kako bismo je
                    poboljšali.
                  </p>
                </div>
              </div>

              {/* Marketing */}
              <div className="flex items-start gap-3 border-t pt-4">
                <input
                  type="checkbox"
                  id="marketing"
                  checked={consent.marketing}
                  onChange={() => toggleConsent("marketing")}
                  className="mt-1"
                  aria-label="Marketinški kolačići"
                />
                <div className="flex-1">
                  <label htmlFor="marketing" className="font-semibold">
                    Marketinški kolačići
                  </label>
                  <p className="text-sm text-gray-600">
                    Omogućavaju personalizirane oglase i retargeting.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 border border-gray-400 rounded text-sm font-semibold hover:bg-gray-50 transition"
              >
                Natrag
              </button>
              <button
                onClick={handleSaveSettings}
                className="px-4 py-2 bg-black text-white rounded text-sm font-semibold hover:bg-gray-800 transition"
              >
                Spremi postavke
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function loadNonEssentialScripts(
  consent: CookieConsent,
  gaMeasurementId?: string
) {
  // Load Google Analytics if analytics consent given
  if (consent.analytics) {
    const gaId = gaMeasurementId || (process.env as any)?.NEXT_PUBLIC_GA_ID;
    if (!gaId) {
      console.warn("GA4 measurement ID not provided. Skipping GA load.");
    } else {
      const existingScript = document.getElementById("ga4-script");
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "ga4-script";
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
        document.head.appendChild(script);
      }

      window.dataLayer = window.dataLayer || [];
      window.gtag =
        window.gtag ||
        function (...args: any[]) {
          (window.dataLayer = window.dataLayer || []).push(args);
        };

      // Initialize only once per page load
      if (!(window as any).__ga4_initialized) {
        window.gtag("js", new Date());
        window.gtag("config", gaId);
        (window as any).__ga4_initialized = true;
      } else {
        // If already initialized, ensure config is called for this ID (idempotent)
        window.gtag("config", gaId);
      }
    }
  }

  // Load marketing scripts if marketing consent given
  if (consent.marketing) {
    // Example: Load Facebook Pixel
    console.log("Marketing scripts loaded");
  }

  // Dispatch custom event for other scripts to listen to
  window.dispatchEvent(
    new CustomEvent("cookieConsentChanged", { detail: consent })
  );
}
