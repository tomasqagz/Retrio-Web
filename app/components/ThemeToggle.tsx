"use client";

import { useLanguage } from "../context/LanguageContext";

export default function ThemeToggle() {
  const { dark, setDark } = useLanguage();

  const handleToggle = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    const goingLight = dark;

    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: 9999;
      pointer-events: none;
      background: ${goingLight ? "#f4f4f8" : "#121219"};
      clip-path: circle(0px at ${x}px ${y}px);
      transition: clip-path 0.5s ease-out, opacity 1s ease;
    `;
    document.body.appendChild(overlay);

    requestAnimationFrame(() => requestAnimationFrame(() => {
      overlay.style.clipPath = `circle(150vmax at ${x}px ${y}px)`;
    }));

    setTimeout(() => {
      setDark(!dark);
      overlay.style.opacity = "0";
    }, 500);

    setTimeout(() => overlay.remove(), 1520);
  };

  return (
    <button
      onClick={handleToggle}
      title={dark ? "Modo claro" : "Modo oscuro"}
      style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        width: 36, height: 36, borderRadius: 8,
        background: "none", border: "none", cursor: "pointer",
        color: "var(--text-secondary)",
      }}
    >
      {dark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
