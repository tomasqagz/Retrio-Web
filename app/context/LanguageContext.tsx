"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations, Lang } from "../lib/translations";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof translations)[Lang];
  dark: boolean;
  setDark: (dark: boolean) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  setLang: () => {},
  t: translations.es,
  dark: true,
  setDark: () => {},
});

export function LanguageProvider({ children, initialLang = "es" }: { children: React.ReactNode; initialLang?: Lang }) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [dark, setDarkState] = useState(true);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Lang | null;
    if (savedLang === "es" || savedLang === "en") {
      setLang(savedLang);
    }
  }, []);

  const wrappedSetLang = (value: Lang) => {
    setLang(value);
    localStorage.setItem("lang", value);
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setDarkState(false);
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const setDark = (value: boolean) => {
    setDarkState(value);
    localStorage.setItem("theme", value ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", value ? "dark" : "light");
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: wrappedSetLang, t: translations[lang], dark, setDark }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
