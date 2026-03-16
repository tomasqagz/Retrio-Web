import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Retrio — Launcher de juegos retro para Windows",
  description:
    "Retrio es un launcher de juegos retro para Windows. Buscá juegos con IGDB, descargalos vía torrent integrado y lanzalos con el emulador correcto automáticamente.",
  keywords: [
    "retro games",
    "launcher juegos retro",
    "emulador windows",
    "IGDB",
    "retro gaming",
    "game launcher",
    "emulation",
  ],
  metadataBase: new URL("https://retrio-web.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Retrio — Launcher de juegos retro para Windows",
    description:
      "Buscá juegos con IGDB, descargalos vía torrent integrado y lanzalos con el emulador correcto automáticamente.",
    url: "https://retrio-web.vercel.app",
    siteName: "Retrio",
    images: [
      {
        url: "https://retrio-web.vercel.app/Icons/RetrioBanner.png",
        width: 1200,
        height: 630,
        alt: "Retrio — Launcher de juegos retro para Windows",
      },
    ],
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retrio — Launcher de juegos retro para Windows",
    description:
      "Buscá juegos con IGDB, descargalos vía torrent integrado y lanzalos con el emulador correcto automáticamente.",
    images: ["https://retrio-web.vercel.app/Icons/RetrioBanner.png"],
  },
  verification: {
    google: "DTVDUxb59Sq7awX1ybk8CCs__QEm8hX8Qvj4XN_TZ2c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={inter.className}><LanguageProvider>{children}</LanguageProvider><Analytics /><SpeedInsights /></body>
    </html>
  );
}
