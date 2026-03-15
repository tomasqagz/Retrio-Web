import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Retrio · Home",
  description:
    "Retrio es un launcher de juegos retro para Windows. Buscá juegos con IGDB, descargalos vía torrent integrado y lanzalos con el emulador correcto automáticamente.",
  openGraph: {
    title: "Retrio",
    description: "Tu librería de juegos retro para Windows.",
    url: "https://retrio-web.vercel.app",
    siteName: "Retrio",
    images: [
      {
        url: "https://retrio-web.vercel.app/Icons/RetrioBanner.png",
        width: 1200,
        height: 630,
        alt: "Retrio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Retrio",
    description: "Tu librería de juegos retro para Windows.",
    images: ["https://retrio-web.vercel.app/Icons/RetrioBanner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={inter.className}><LanguageProvider>{children}</LanguageProvider><Analytics /></body>
    </html>
  );
}
