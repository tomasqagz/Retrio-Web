"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function PrivacyContent() {
  const { t } = useLanguage();
  const p = t.privacy;
  const s = p.sections;

  return (
    <main style={{ flex: 1, minWidth: 0 }}>
      <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 8, color: "var(--text-primary)" }}>
        {p.title}
      </h1>
      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 48 }}>
        {p.effectiveDate}
      </p>

      <Section id="resumen" title={s.resumen.title}>
        <p>{s.resumen.content}</p>
      </Section>

      <Section id="informacion" title={s.informacion.title}>
        <p>{s.informacion.p1}</p>
        <p style={{ marginTop: 12 }}>{s.informacion.p2}</p>
      </Section>

      <Section id="credenciales" title={s.credenciales.title}>
        <p>{s.credenciales.content}</p>
      </Section>

      <Section id="terceros" title={s.terceros.title}>
        <p>{s.terceros.intro}</p>
        <ul style={{ marginTop: 12, paddingLeft: 20, lineHeight: 2, color: "var(--text-secondary)" }}>
          {s.terceros.items.map((item) => (
            <li key={item.name}>
              <strong style={{ color: "var(--text-primary)" }}>{item.name}</strong> — {item.desc}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: 12 }}>{s.terceros.outro}</p>
      </Section>

      <Section id="torrent" title={s.torrent.title}>
        <p>{s.torrent.content}</p>
      </Section>

      <Section id="almacenamiento" title={s.almacenamiento.title}>
        <p>{s.almacenamiento.content}</p>
      </Section>

      <Section id="cambios" title={s.cambios.title}>
        <p>{s.cambios.content}</p>
      </Section>

      <Section id="contacto" title={s.contacto.title}>
        <p>
          {s.contacto.content}{" "}
          <a
            href="https://github.com/tomasqagz/Retrio"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: 3 }}
          >
            {s.contacto.link}
          </a>
          .
        </p>
      </Section>
    </main>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ marginBottom: 40, scrollMarginTop: 88 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, color: "var(--text-primary)" }}>
        {title}
      </h2>
      <div style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.75 }}>
        {children}
      </div>
    </section>
  );
}
