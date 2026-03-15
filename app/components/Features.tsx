"use client";

import { Gamepad2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const icons = [
  <svg key="search" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
  </svg>,
  <svg key="download" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>,
  <Gamepad2 key="gamepad" width={20} height={20} />,
];

export default function Features() {
  const { t } = useLanguage();

  return (
    <section style={{ maxWidth: 1250, margin: "0 auto", padding: "0 40px 80px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
        {t.features.items.map((f, i) => (
          <div key={f.title} style={{
            padding: 28, background: "var(--bg-card)",
            border: "1px solid var(--border)", borderRadius: 14,
          }}>
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: 40, height: 40, borderRadius: 8,
              background: "var(--accent-dim)", color: "var(--accent)", marginBottom: 16,
            }}>
              {icons[i]}
            </div>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{f.title}</div>
            <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 16 }}>
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
