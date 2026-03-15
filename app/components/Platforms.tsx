"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const platforms = [
  { name: "NES",     icon: "/Icons/nes.png",            w: 120, h: 120, filter: undefined },
  { name: "SNES",    icon: "/Icons/supernintendo.svg",   w: 120, h: 120, filter: undefined },
  { name: "Genesis", icon: "/Icons/segagenesis.svg",     w: 120, h: 30,  filter: "var(--sega-filter)" },
  { name: "Saturn",  icon: "/Icons/segasaturn.svg",      w: 160, h: 160, filter: "var(--sega-filter)" },
  { name: "N64",     icon: "/Icons/nintendo64.svg",      w: 64,  h: 64,  filter: undefined },
  { name: "PS1",     icon: "/Icons/playstation1.png",    w: 64,  h: 64,  filter: undefined },
  { name: "PS2",     icon: "/Icons/playstation2.svg",    w: 120, h: 120, filter: undefined },
];

const items = [...platforms, ...platforms, ...platforms, ...platforms];

export default function Platforms() {
  const { t } = useLanguage();

  return (
    <section style={{ padding: "0 0 80px" }}>
      <div style={{ maxWidth: 1250, margin: "0 auto", padding: "0 40px", marginBottom: 40 }}>
        <p style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent)", marginBottom: 12 }}>
          {t.platforms.label}
        </p>
        <h2 style={{ fontSize: 30, fontWeight: 800, marginBottom: 12 }}>{t.platforms.heading}</h2>
        <p style={{ fontSize: 15, color: "var(--text-secondary)", maxWidth: 480 }}>
          {t.platforms.description}
        </p>
      </div>

      {/* Carousel */}
      <div style={{ overflow: "hidden", position: "relative", maxWidth: 1250, margin: "0 auto", padding: "0 40px" }}>
        {/* Fade edges */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 120, zIndex: 2,
          background: "linear-gradient(to right, var(--bg-primary), transparent)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: 120, zIndex: 2,
          background: "linear-gradient(to left, var(--bg-primary), transparent)",
          pointerEvents: "none",
        }} />

        <div style={{
          display: "flex",
          gap: 16,
          width: "max-content",
          animation: "scroll 20s linear infinite",
        }}>
          {items.map((p, i) => (
            <div key={i} style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
              padding: "24px 20px", background: "var(--bg-card)",
              border: "1px solid var(--border)", borderRadius: 12,
              fontSize: 13, fontWeight: 500, color: "var(--text-secondary)",
              minWidth: 140, flexShrink: 0,
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 160, height: 100 }}>
                <Image src={p.icon} alt={p.name} width={p.w} height={p.h} style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "100%", filter: p.filter }} />
              </div>
              {p.name}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>
    </section>
  );
}
