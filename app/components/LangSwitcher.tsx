"use client";

import { useLanguage } from "../context/LanguageContext";

export default function LangSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 2, fontSize: 14 }}>
      <button
        onClick={() => setLang("es")}
        style={{
          background: "none", border: "none", cursor: "pointer", padding: "4px 6px",
          borderRadius: 4, fontFamily: "inherit", fontSize: 14,
          color: lang === "es" ? "var(--text-primary)" : "var(--text-muted)",
          fontWeight: lang === "es" ? 600 : 400,
        }}
      >
        ES
      </button>
      <span style={{ color: "var(--border)", userSelect: "none" }}>|</span>
      <button
        onClick={() => setLang("en")}
        style={{
          background: "none", border: "none", cursor: "pointer", padding: "4px 6px",
          borderRadius: 4, fontFamily: "inherit", fontSize: 14,
          color: lang === "en" ? "var(--text-primary)" : "var(--text-muted)",
          fontWeight: lang === "en" ? 600 : 400,
        }}
      >
        EN
      </button>
    </div>
  );
}
