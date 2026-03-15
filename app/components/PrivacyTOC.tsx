"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const sectionIds = ["resumen", "informacion", "credenciales", "terceros", "torrent", "almacenamiento", "cambios", "contacto"] as const;

export default function PrivacyTOC() {
  const [active, setActive] = useState("resumen");
  const { t } = useLanguage();
  const s = t.privacy.sections;

  const sections = [
    { id: "resumen",       label: s.resumen.title },
    { id: "informacion",   label: s.informacion.title },
    { id: "credenciales",  label: s.credenciales.title },
    { id: "terceros",      label: s.terceros.title },
    { id: "torrent",       label: s.torrent.title },
    { id: "almacenamiento",label: s.almacenamiento.title },
    { id: "cambios",       label: s.cambios.title },
    { id: "contacto",      label: s.contacto.title },
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <aside style={{ width: 200, flexShrink: 0 }}>
      <style>{`
        .toc-link { color: var(--text-secondary); }
        .toc-link:hover { color: var(--text-primary); }
        .toc-link.active { color: var(--text-primary); }
      `}</style>
      <div style={{ position: "sticky", top: 88 }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)", marginBottom: 12 }}>
          {t.privacy.toc}
        </p>
        <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`toc-link${active === s.id ? " active" : ""}`}
              style={{
                fontSize: 13,
                padding: "3px 0 3px 12px",
                lineHeight: 1.5,
                borderLeft: `2px solid ${active === s.id ? "var(--accent)" : "transparent"}`,
                transition: "color 0.2s, border-color 0.2s",
              }}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
