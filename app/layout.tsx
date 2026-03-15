import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Retrio · Home",
  description:
    "Retrio es un launcher de juegos retro para Windows. Buscá juegos con IGDB, descargalos vía torrent integrado y lanzalos con el emulador correcto automáticamente.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={inter.className}><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
