"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function DownloadDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }} onMouseLeave={() => setOpen(false)}>
      <button
        onMouseEnter={() => setOpen(true)}
        onClick={() => setOpen((v) => !v)}
        style={{
          display: "flex", alignItems: "center", gap: 6,
          padding: "6px 12px",
          background: "none", border: "none", cursor: "pointer",
          fontSize: 16, fontWeight: 500, color: "var(--text-primary)",
          borderRadius: 8,
        }}
      >
        {t.navbar.download}
        <svg
          width="12" height="12" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5"
          style={{ transition: "transform 0.15s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div style={{
          position: "absolute", top: "100%", left: "50%",
          transform: "translateX(-50%)",
          paddingTop: 8,
          minWidth: 160,
          background: "transparent",
          zIndex: 100,
        }}>
          <div style={{
            background: "var(--bg-card)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 10,
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            overflow: "hidden",
          }}>
          <a
            href="/api/download"
            target="_blank" rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={{
              display: "block", padding: "12px 20px",
              fontSize: 15, color: "var(--text-primary)",
              transition: "background 0.1s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
            onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
          >
            {t.navbar.downloadLatest}
          </a>
          <a
            href="https://github.com/tomasqagz/Retrio/releases"
            target="_blank" rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={{
              display: "block", padding: "12px 20px",
              fontSize: 15, color: "var(--text-primary)",
              transition: "background 0.1s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
            onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
          >
            {t.navbar.changelogs}
          </a>
          </div>
        </div>
      )}
    </div>
  );
}
