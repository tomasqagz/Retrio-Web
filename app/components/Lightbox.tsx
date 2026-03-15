"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const screenshots = [
  "/Screenshots/search.webp",
  "/Screenshots/Screenshot_1.webp",
  "/Screenshots/Screenshot_2.webp",
  "/Screenshots/home.webp",
  "/Screenshots/library.webp",
  "/Screenshots/settings.webp",
];

const COUNT = screenshots.length;
// Triplicamos para que siempre haya vecinos en ambos lados
const looped = [...screenshots, ...screenshots, ...screenshots];

export default function Lightbox() {
  // Arranca en el set del medio, Screenshot_1 centrada
  const [current, setCurrent] = useState(COUNT);
  const [animated, setAnimated] = useState(true);
  const [lightbox, setLightbox] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cw, setCw] = useState(600);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) setCw(containerRef.current.offsetWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Cuando llegamos al primer o último set, saltamos silenciosamente al set del medio
  useEffect(() => {
    if (current < COUNT) {
      // Estamos en el primer set, saltar al equivalente en el set del medio sin animación
      setTimeout(() => {
        setAnimated(false);
        setCurrent(current + COUNT);
        setTimeout(() => setAnimated(true), 20);
      }, 400);
    } else if (current >= COUNT * 2) {
      setTimeout(() => {
        setAnimated(false);
        setCurrent(current - COUNT);
        setTimeout(() => setAnimated(true), 20);
      }, 400);
    }
  }, [current]);

  const SLIDE_W = cw * 0.72;
  const GAP = 12;
  const peek = (cw - SLIDE_W) / 2;
  const offset = current * (SLIDE_W + GAP) - peek;

  const prev = () => setCurrent((i) => i - 1);
  const next = () => setCurrent((i) => i + 1);

  return (
    <>
      {/* Carousel wrapper */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          ref={containerRef}
          style={{ position: "relative", padding: "40px 0" }}
        >
          {/* Clip only horizontally */}
          <div style={{ overflowX: "clip", overflowY: "visible" }}>
          {/* Track */}
          <div style={{
            display: "flex",
            gap: GAP,
            alignItems: "center",
            transform: `translateX(${-offset}px)`,
            transition: animated ? "transform 0.4s cubic-bezier(0.4,0,0.2,1)" : "none",
          }}>
            {looped.map((src, i) => {
              const isActive = i === current;
              return (
                <div
                  key={i}
                  onClick={() => isActive ? setLightbox(true) : setCurrent(i)}
                  style={{
                    flexShrink: 0,
                    width: SLIDE_W,
                    aspectRatio: "1344/840",
                    position: "relative",
                    borderRadius: 10,
                    overflow: "hidden",
                    background: "#000",
                    cursor: isActive ? "zoom-in" : "pointer",
                    opacity: isActive ? 1 : 0.45,
                    transform: isActive ? "scale(1)" : "scale(0.82)",
                    transition: "opacity 0.4s, transform 0.4s",
                    boxShadow: isActive ? "0 0 40px 8px rgba(124,58,237,0.45)" : "none",
                  }}
                >
                  <Image
                    src={src}
                    alt={`Screenshot ${i + 1}`}
                    fill
                    style={{ objectFit: "contain", pointerEvents: "none" }}
                    priority={i === 0}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </div>

        {/* Dots — debajo de la imagen */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 12 }}>
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(COUNT + i)}
              style={{
                width: 8, height: 8,
                borderRadius: "50%", border: "none", cursor: "pointer", padding: 0,
                background: (current % COUNT) === i ? "#7c3aed" : "var(--dot-inactive)",
                transition: "background 0.2s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 200,
            background: "rgba(0,0,0,0.88)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "zoom-out", backdropFilter: "blur(6px)",
          }}
        >
          <div
            style={{ position: "relative", width: "88vw", maxWidth: 1500, aspectRatio: "16/10" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={screenshots[current % COUNT]} alt="Screenshot" fill style={{ objectFit: "contain", borderRadius: 10 }} />

            <button onClick={(e) => { e.stopPropagation(); prev(); }} style={{
              position: "absolute", left: -56, top: "50%", transform: "translateY(-50%)",
              width: 44, height: 44, borderRadius: "50%",
              background: "var(--bg-card)", border: "1px solid var(--border)",
              color: "var(--text-primary)", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button onClick={(e) => { e.stopPropagation(); next(); }} style={{
              position: "absolute", right: -56, top: "50%", transform: "translateY(-50%)",
              width: 44, height: 44, borderRadius: "50%",
              background: "var(--bg-card)", border: "1px solid var(--border)",
              color: "var(--text-primary)", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <button onClick={() => setLightbox(false)} style={{
              position: "absolute", top: -18, right: -18,
              width: 36, height: 36, borderRadius: "50%",
              background: "var(--bg-card)", border: "1px solid var(--border)",
              color: "var(--text-primary)", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
            }}>×</button>

            {/* Dots */}
            <div style={{ position: "absolute", bottom: -32, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(COUNT + i)}
                  style={{
                    width: 8, height: 8,
                    borderRadius: "50%", border: "none", cursor: "pointer", padding: 0,
                    background: (current % COUNT) === i ? "#7c3aed" : "rgba(255,255,255,0.4)",
                    transition: "background 0.2s",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
