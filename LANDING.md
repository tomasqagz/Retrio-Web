# Retrio — Landing Page Context

## App info

- **Nombre:** Retrio
- **Versión actual:** 0.1.11
- **Plataforma:** Windows (x64)
- **Tagline:** Launcher de juegos retro estilo Stremio
- **Descripción:** Retrio es un launcher de juegos retro para Windows. Permite buscar juegos por nombre usando la base de datos de IGDB, descargarlos vía torrent integrado, gestionar emuladores (instalación automática de RetroArch, DuckStation y PCSX2) y mantener una librería local de juegos instalados.
- **Repo:** https://github.com/tomasqagz/Retrio
- **Descarga:** https://github.com/tomasqagz/Retrio/releases/latest
- **Instalador:** `Retrio-Setup-{version}.exe`
- **Desarrollador:** tomasqagz

---

## Funcionalidades principales

- Búsqueda de juegos con portadas, screenshots e info detallada (IGDB)
- Descarga por torrent integrada con progreso en tiempo real
- Instalación automática de emuladores (RetroArch, DuckStation, PCSX2)
- Soporte de plataformas: NES, SNES, Sega Genesis, Sega Saturn, N64, PS1, PS2
- Librería de juegos instalados
- Paths de emuladores personalizables por plataforma
- Cache de imágenes local (sin dependencia de red para covers ya vistos)
- Auto-updater integrado

---

## Diseño / Identidad visual

### Paleta de colores

| Nombre        | Hex                      | Uso                    |
|---------------|--------------------------|------------------------|
| bg-primary    | `#0f0f13`                | Fondo principal        |
| bg-secondary  | `#17171f`                | Fondo secundario       |
| bg-card       | `#1e1e28`                | Tarjetas / panels      |
| bg-hover      | `#252530`                | Hover states           |
| accent        | `#7c3aed`                | Color principal        |
| accent-hover  | `#6d28d9`                | Acento hover           |
| accent-dim    | `rgba(124, 58, 237, 0.15)` | Acento translúcido   |
| text-primary  | `#f0f0f5`                | Texto principal        |
| text-secondary| `#8888a0`                | Texto secundario       |
| text-muted    | `#555568`                | Texto apagado          |
| red           | `#ef4444`                | Error                  |
| green         | `#22c55e`                | Éxito                  |
| yellow        | `#eab308`                | Advertencia            |

> El acento `#7c3aed` equivale a `violet-600` en Tailwind CSS.

### Tipografía

- **Fuente:** Inter (fallback: `system-ui, sans-serif`)
- **Tamaño base:** 14px
- **Line height:** 1.5
- **Antialiasing:** `-webkit-font-smoothing: antialiased`

### Border radius

- Small: `6px`
- Medium: `10px`
- Large: `14px`

### Estilo general

Dark UI, fondo casi negro con tono azulado (`#0f0f13`), acento violeta vibrante.
Cards con fondo `#1e1e28` y bordes sutiles (`rgba(255,255,255,0.06)`).

---

## Assets disponibles en el repo de la app

- `public/RetrioIcon.png` — ícono principal de la app (PNG)
- `public/icon.ico` — ícono en formato .ico

---

## Stack de la app (referencia)

- Electron + React + TypeScript + Vite
- better-sqlite3 (base de datos local)
- WebTorrent (descargas)
- IGDB API (búsqueda de juegos)
- electron-updater (auto-updates via GitHub Releases)

---

## Stack sugerido para la landing

- **Framework:** Next.js o Astro
- **Estilos:** Tailwind CSS (la paleta encaja directo con las utilidades de Tailwind)
- **Deploy:** Vercel
- **Dominio:** a definir

---

## Secciones sugeridas para la landing

1. **Hero** — nombre, tagline, botón de descarga, screenshot principal
2. **Features** — grid con las funcionalidades clave
3. **Emuladores soportados** — iconos/logos de RetroArch, DuckStation, PCSX2
4. **Plataformas** — NES, SNES, Genesis, Saturn, N64, PS1, PS2
5. **Download** — botón descarga directa + link a releases de GitHub
6. **Footer** — link al repo, versión actual, créditos
