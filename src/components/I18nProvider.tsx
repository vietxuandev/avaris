"use client";

import { useEffect, useState } from "react";
import i18n from "../lib/i18n";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Wait for i18n to initialize
    if (i18n.isInitialized) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsReady(true);
    } else {
      i18n.on("initialized", () => setIsReady(true));
    }

    // Update HTML lang attribute when language changes
    const updateLanguage = () => {
      document.documentElement.lang = i18n.language;
    };

    // Set initial language
    if (i18n.isInitialized) {
      updateLanguage();
    }

    // Listen for language changes
    i18n.on("languageChanged", updateLanguage);

    return () => {
      i18n.off("languageChanged", updateLanguage);
      i18n.off("initialized", () => setIsReady(true));
    };
  }, []);

  if (!isReady) {
    return null;
  }

  return <>{children}</>;
}
