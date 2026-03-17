import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Lang } from "./lib/translations";

const inter = Inter({ subsets: ["latin"] });

async function detectLang(): Promise<Lang> {
  const headersList = await headers();
  const acceptLang = headersList.get("accept-language") ?? "";
  const primary = acceptLang.split(",")[0].split(";")[0].split("-")[0].toLowerCase();
  return primary === "en" ? "en" : "es";
}

export async function generateMetadata(): Promise<Metadata> {
  const lang = await detectLang();
  const isEn = lang === "en";

  const title = isEn
    ? "Retrio — Retro Game Launcher for Windows"
    : "Retrio — Launcher de juegos retro para Windows";
  const description = isEn
    ? "Retrio is a retro game launcher for Windows. Search games with IGDB, download them from Internet Archive and launch them with the right emulator automatically."
    : "Retrio es un launcher de juegos retro para Windows. Buscá juegos con IGDB, descargalos desde Internet Archive y lanzalos con el emulador correcto automáticamente.";
  const ogDescription = isEn
    ? "Search games with IGDB, download them from Internet Archive and launch them with the right emulator automatically."
    : "Buscá juegos con IGDB, descargalos desde Internet Archive y lanzalos con el emulador correcto automáticamente.";

  return {
    title,
    description,
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
      title,
      description: ogDescription,
      url: "https://retrio-web.vercel.app",
      siteName: "Retrio",
      images: [
        {
          url: "https://retrio-web.vercel.app/Icons/RetrioBanner.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      locale: isEn ? "en_US" : "es_AR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: ogDescription,
      images: ["https://retrio-web.vercel.app/Icons/RetrioBanner.png"],
    },
    verification: {
      google: "DTVDUxb59Sq7awX1ybk8CCs__QEm8hX8Qvj4XN_TZ2c",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const lang = await detectLang();
  const isEn = lang === "en";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Retrio",
    operatingSystem: "Windows",
    applicationCategory: "GameApplication",
    description: isEn
      ? "Retro game launcher for Windows. Search games with IGDB, download them from Internet Archive and launch them with the right emulator automatically."
      : "Launcher de juegos retro para Windows. Buscá juegos con IGDB, descargalos desde Internet Archive y lanzalos con el emulador correcto automáticamente.",
    url: "https://retrio-web.vercel.app",
    downloadUrl: "https://retrio-web.vercel.app/api/download",
    softwareVersion: "1.0",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    image: "https://retrio-web.vercel.app/Icons/RetrioBanner.png",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1",
    },
  };

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider initialLang={lang}>{children}</LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
