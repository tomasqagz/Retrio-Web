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

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const [dark, setDarkState] = useState(true);

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
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang], dark, setDark }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
