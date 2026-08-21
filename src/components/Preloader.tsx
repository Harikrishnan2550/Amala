"use client";

import React, { useEffect, useState } from "react";

export function Preloader({ onDone }: { onDone: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 900);
    const doneTimer = setTimeout(() => onDone(), 1250);
    return () => { clearTimeout(fadeTimer); clearTimeout(doneTimer); };
  }, [onDone]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#FAFAFC",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        transition: "opacity 0.6s ease, visibility 0.6s ease",
        opacity: fadeOut ? 0 : 1,
        visibility: fadeOut ? "hidden" : "visible",
      }}
    >
      {/* Logo */}
      <div style={{ animation: "preloaderFadeUp 0.7s ease both" }} className="flex justify-center items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="Amala National Book Festival 2026 Logo"
          style={{ height: "120px", width: "auto", maxWidth: "280px", objectFit: "contain" }}
        />
      </div>

      {/* Tagline */}
      <p style={{
        fontFamily: "var(--font-accent), sans-serif",
        fontSize: "1.1rem",
        letterSpacing: "0.22em",
        color: "#FF1E4B",
        textTransform: "uppercase",
        animation: "preloaderFadeUp 0.7s 0.2s ease both",
        fontWeight: 800,
      }}>
        National Book Festival 2026
      </p>

      {/* Progress bar */}
      <div style={{
        width: "160px",
        height: "3px",
        background: "#E2E8F0",
        borderRadius: "99px",
        overflow: "hidden",
        animation: "preloaderFadeUp 0.7s 0.3s ease both",
      }}>
        <div style={{
          height: "100%",
          background: "linear-gradient(90deg, #FF1E4B, #FF5E7E, #FF1E4B)",
          borderRadius: "99px",
          animation: "preloaderBar 2s ease forwards",
        }} />
      </div>

      {/* Dots */}
      <div style={{ display: "flex", gap: "6px", animation: "preloaderFadeUp 0.7s 0.4s ease both" }}>
        {[0, 1, 2].map((i) => (
          <span key={i} style={{
            display: "block",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#FF1E4B",
            animation: `preloaderDot 1.2s ${i * 0.2}s ease-in-out infinite`,
          }} />
        ))}
      </div>

      <style>{`
        @keyframes preloaderFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes preloaderBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes preloaderDot {
          0%, 100% { transform: translateY(0);   opacity: 0.3; }
          50%       { transform: translateY(-6px); opacity: 1;   }
        }
      `}</style>
    </div>
  );
}
