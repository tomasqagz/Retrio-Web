export default function DownloadCTA() {
  return (
    <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px 100px" }}>
      <div style={{
        position: "relative", padding: "64px 40px",
        background: "var(--bg-card)", border: "1px solid var(--border)",
        borderRadius: 14, textAlign: "center", overflow: "hidden",
      }}>
        {/* Glow top */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 65%)",
        }} />

        <p style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent)", marginBottom: 12, position: "relative" }}>
          Windows x64
        </p>
        <h2 style={{ fontSize: 30, fontWeight: 800, marginBottom: 8, position: "relative" }}>
          Listo para jugar
        </h2>
        <p style={{ fontSize: 15, color: "var(--text-secondary)", margin: "0 auto 32px", maxWidth: 420, position: "relative" }}>
          Descargá el instalador, abrilo y en minutos tenés tu librería retro funcionando.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
          <a
            href="https://github.com/tomasqagz/Retrio/releases/latest"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 22px", background: "var(--accent)",
              color: "#fff", borderRadius: 10, fontSize: 14, fontWeight: 600,
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Descargar Retrio v0.1.11
          </a>
          <a
            href="https://github.com/tomasqagz/Retrio/releases"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 22px", background: "var(--bg-hover)",
              color: "var(--text-primary)", border: "1px solid var(--border)",
              borderRadius: 10, fontSize: 14, fontWeight: 500,
            }}
          >
            Ver todas las versiones
          </a>
        </div>
      </div>
    </section>
  );
}
