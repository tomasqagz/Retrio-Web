"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function DownloadCounter() {
  const { t } = useLanguage();
  const [downloads, setDownloads] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/downloads")
      .then((r) => r.json())
      .then((d) => setDownloads(d.count));
  }, []);

  if (downloads === null) return null;

  return (
    <p style={{ marginTop: 16, fontSize: 13, color: "var(--text-muted)" }}>
      ↓ {downloads.toLocaleString()} {t.hero.downloads}
    </p>
  );
}
