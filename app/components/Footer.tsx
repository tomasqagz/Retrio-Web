"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const l = t.footer.links;

  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "24px 40px", textAlign: "center" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8 }}>
        <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>
          {l.opensource}{" "}
          <a
            href="https://www.gnu.org/licenses/gpl-3.0.html"
            target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--text-secondary)", textDecoration: "underline", textUnderlineOffset: 3 }}
          >
            GPL v3
          </a>
        </span>
        <span style={{ color: "var(--text-muted)", userSelect: "none" }}>|</span>
        <Link
          href="/privacy"
          style={{ fontSize: 13, color: "var(--text-secondary)", textDecoration: "underline", textUnderlineOffset: 3 }}
        >
          {l.privacy}
        </Link>
      </div>
      <p style={{ fontSize: 14, color: "var(--text-muted)" }}>
        {t.footer.copyright}
      </p>
    </footer>
  );
}
