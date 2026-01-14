"use client";

import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const languages = [
  {
    code: "vi",
    name: "Tiếng Việt",
    flag: "🇻🇳",
  },
  {
    code: "en",
    name: "English",
    flag: "🇬🇧",
  },
];

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

export function LanguageSwitcher({ isScrolled }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Current Language Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 ${
          isScrolled ? " hover:bg-white/20" : "hover:bg-white/20"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-2xl">{currentLanguage.flag}</span>
        <span
          className={`text-sm font-medium ${
            isScrolled ? "text-ocean-900" : "text-white"
          }`}
        >
          {currentLanguage.code.toUpperCase()}
        </span>
      </motion.button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-48 rounded-2xl shadow-2xl overflow-hidden z-50 bg-white"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 hover:bg-ocean-50 ${
                  currentLanguage.code === lang.code
                    ? "bg-ocean-100"
                    : "hover:bg-ocean-50"
                }`}
              >
                <span className="text-2xl">{lang.flag}</span>
                <span className={`text-sm font-medium text-ocean-900`}>
                  {lang.name}
                </span>
              </button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
}
