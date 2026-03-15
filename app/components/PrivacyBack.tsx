"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function PrivacyBack() {
  const { t } = useLanguage();
  return (
    <Link href="/" style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      color: "var(--text-secondary)", fontSize: 14, marginBottom: 32,
    }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 12H5M12 5l-7 7 7 7" />
      </svg>
      {t.privacy.back}
    </Link>
  );
}
