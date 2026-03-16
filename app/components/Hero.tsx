"use client";

import { useLanguage } from "../context/LanguageContext";
import Lightbox from "./Lightbox";
import DownloadCounter from "./DownloadCounter";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section style={{
      display: "flex", alignItems: "center", gap: 80,
      padding: "80px 40px 100px",
      maxWidth: 1250, margin: "0 auto",
    }}>
      {/* Text */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.1, marginBottom: 20 }}>
          <span style={{ color: "var(--accent)", display: "block" }}>Retrio</span>
          <span style={{ color: "var(--text-primary)" }}>{t.hero.tagline}</span>
        </h1>
        <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 32, maxWidth: 440 }}>
          {t.hero.description}
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href="/api/download"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 22px", background: "var(--accent)",
              color: "#fff", borderRadius: 10, fontSize: 14, fontWeight: 600,
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {t.hero.download}
          </a>
          <a
            href="https://github.com/tomasqagz/Retrio"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 22px", background: "var(--bg-card)",
              color: "var(--text-primary)", border: "1px solid var(--border)",
              borderRadius: 10, fontSize: 14, fontWeight: 500,
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            {t.hero.github}
          </a>
        </div>

        <DownloadCounter />
      </div>

      <Lightbox />
    </section>
  );
}
