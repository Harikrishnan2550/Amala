"use client";

import React, { useEffect, useRef, useState } from "react";

function ModalSidePoppersCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const colors = ["#FF1E4B", "#FFD700", "#FFF5A8", "#FF5E7E", "#FFFFFF", "#F5B719", "#FF9800", "#E0133C"];

    interface SideParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      rotation: number;
      vRot: number;
      opacity: number;
      shape: "rect" | "circle";
      gravity: number;
    }

    const modalWidth = Math.min(width - 32, 672);
    const leftOriginX = Math.max(20, (width - modalWidth) / 2 - 10);
    const rightOriginX = Math.min(width - 20, (width + modalWidth) / 2 + 10);
    const originY = height / 2;

    const leftParticles: SideParticle[] = Array.from({ length: 80 }).map(() => ({
      x: leftOriginX + (Math.random() - 0.5) * 30,
      y: originY + (Math.random() - 0.5) * 90,
      vx: -Math.random() * 8 - 2,
      vy: (Math.random() - 0.5) * 10,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.2,
      opacity: 1,
      shape: Math.random() > 0.4 ? "rect" : "circle",
      gravity: Math.random() * 0.08 + 0.04,
    }));

    const rightParticles: SideParticle[] = Array.from({ length: 80 }).map(() => ({
      x: rightOriginX + (Math.random() - 0.5) * 30,
      y: originY + (Math.random() - 0.5) * 90,
      vx: Math.random() * 8 + 2,
      vy: (Math.random() - 0.5) * 10,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.2,
      opacity: 1,
      shape: Math.random() > 0.4 ? "rect" : "circle",
      gravity: Math.random() * 0.08 + 0.04,
    }));

    const particles = [...leftParticles, ...rightParticles];
    const startTime = performance.now();

    const render = (now: number) => {
      const elapsed = now - startTime;
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.97;
        p.rotation += p.vRot;
        p.opacity = Math.max(0, 1 - elapsed / 3200);

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;

        if (p.shape === "rect") {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();

        if (p.opacity <= 0) {
          particles.splice(i, 1);
        }
      }

      if (particles.length > 0) {
        animId = requestAnimationFrame(render);
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1000] h-full w-full"
    />
  );
}

export function WelcomePrizeAnnounceModal({
  preloaderDone,
  onRegisterClick,
}: {
  preloaderDone: boolean;
  onRegisterClick: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!preloaderDone) return;
    const openTimer = window.setTimeout(() => {
      setIsOpen(true);
    }, 400);
    return () => window.clearTimeout(openTimer);
  }, [preloaderDone]);

  useEffect(() => {
    if (!isOpen || isClosing) return;
    const autoCloseTimer = window.setTimeout(() => {
      handleManualClose();
    }, 3000);
    return () => window.clearTimeout(autoCloseTimer);
  }, [isOpen, isClosing]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 16;
    const y = (clientY / innerHeight - 0.5) * -16;
    setTilt({ x, y });
  };

  function handleManualClose() {
    if (isClosing) return;
    setIsClosing(true);
    window.setTimeout(() => {
      setIsOpen(false);
    }, 450);
  }

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes welcomeTimerProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes titleShimmer {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes orbitRing {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-title-shimmer {
          background: linear-gradient(90deg, #0F172A 0%, #00AEEF 40%, #F1BE19 60%, #0F172A 100%);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: titleShimmer 4s linear infinite;
        }
        .animate-orbit {
          animation: orbitRing 6s linear infinite;
        }
        @keyframes cinematicIn {
          0% {
            opacity: 0;
            transform: perspective(1400px) scale(0.68) translateY(70px) rotateX(18deg) rotateY(-5deg);
            filter: blur(24px) contrast(1.25) brightness(0.85);
          }
          65% {
            opacity: 1;
            transform: perspective(1400px) scale(1.02) translateY(-4px) rotateX(-2deg) rotateY(1deg);
            filter: blur(0px) contrast(1.02) brightness(1.04);
          }
          100% {
            opacity: 1;
            transform: perspective(1400px) scale(1) translateY(0px) rotateX(0deg) rotateY(0deg);
            filter: blur(0px) contrast(1) brightness(1);
          }
        }
        @keyframes cinematicOut {
          0% {
            opacity: 1;
            transform: perspective(1400px) scale(1) translateY(0px) rotateX(0deg);
            filter: blur(0px) brightness(1);
          }
          100% {
            opacity: 0;
            transform: perspective(1400px) scale(1.12) translateY(-45px) rotateX(-12deg);
            filter: blur(20px) brightness(1.35);
          }
        }
        @keyframes cinematicBackdropIn {
          0%   { opacity: 0; backdrop-filter: blur(0px) brightness(1); }
          100% { opacity: 1; backdrop-filter: blur(20px) brightness(0.7); }
        }
        @keyframes cinematicBackdropOut {
          0%   { opacity: 1; backdrop-filter: blur(20px) brightness(0.7); }
          100% { opacity: 0; backdrop-filter: blur(0px) brightness(1); }
        }
        @keyframes anamorphicFlareSweep {
          0%   { transform: translateX(-150%) scaleY(1); opacity: 0; }
          30%  { opacity: 0.85; transform: translateX(-20%) scaleY(1.5); }
          70%  { opacity: 0.85; transform: translateX(120%) scaleY(1.5); }
          100% { transform: translateX(250%) scaleY(1); opacity: 0; }
        }
        @keyframes trophyLevitate {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%      { transform: translateY(-7px) rotate(3deg); }
        }
        @keyframes pulseGlowRing {
          0%, 100% { box-shadow: 0 0 20px rgba(0,174,239,0.3); }
          50%      { box-shadow: 0 0 40px rgba(0,174,239,0.7); }
        }
        @keyframes liveRadarPulse {
          0%   { transform: scale(0.95); opacity: 0.8; }
          50%  { transform: scale(1.35); opacity: 0.3; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }
        .animate-cinematic-in {
          animation: cinematicIn 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-cinematic-out {
          animation: cinematicOut 0.45s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;
        }
        .animate-cinematic-backdrop-in {
          animation: cinematicBackdropIn 0.9s ease forwards;
        }
        .animate-cinematic-backdrop-out {
          animation: cinematicBackdropOut 0.45s ease forwards;
        }
        .animate-anamorphic-flare {
          animation: anamorphicFlareSweep 2.2s 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-trophy-levitate {
          animation: trophyLevitate 3.5s ease-in-out infinite, pulseGlowRing 3s ease-in-out infinite;
        }
        .animate-radar-dot {
          animation: liveRadarPulse 1.8s ease-in-out infinite;
        }
      `}</style>
      <ModalSidePoppersCanvas />
      <div
        className="fixed inset-0 z-[999] flex items-center justify-center p-4"
        onMouseMove={handleMouseMove}
      >
        {/* Dark Glass Vignetted Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-950/75 ${
            isClosing ? "animate-cinematic-backdrop-out" : "animate-cinematic-backdrop-in"
          }`}
          onClick={handleManualClose}
        />

        {/* Modal Box with Mouse Parallax & Film Frame styling */}
        <div
          style={{
            transform: isClosing ? undefined : `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
            transition: isClosing ? undefined : "transform 0.15s ease-out",
          }}
          className={`relative z-10 w-full max-w-2xl overflow-hidden rounded-[2.5rem] border-2 bg-white/96 text-slate-900 backdrop-blur-3xl shadow-[0_30px_100px_rgba(0,0,0,0.35)] ${
            isClosing ? "animate-cinematic-out" : "animate-cinematic-in animate-rainbow-border"
          }`}
        >
          {/* Anamorphic Lens Flare Line */}
          <div className="pointer-events-none absolute -top-10 -bottom-10 w-[60%] bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent animate-anamorphic-flare z-40 blur-sm rotate-12" />

          {/* Floating Ambient Sparkles Overlay */}
          <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
            <span className="absolute top-8 left-8 text-[#F1BE19] text-base animate-sparkle-1">✦</span>
            <span className="absolute top-12 right-12 text-[#00AEEF] text-lg animate-sparkle-2">✨</span>
            <span className="absolute bottom-16 left-10 text-[#F26539] text-sm animate-sparkle-3">★</span>
            <span className="absolute bottom-12 right-10 text-[#F1BE19] text-xl animate-sparkle-4">✧</span>
          </div>

          {/* Glass Sheen Sweep */}
          <div className="pointer-events-none absolute -inset-full w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent animate-sheen z-30" />

          {/* Ambient Sheen Glows inside Modal */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,174,239,0.14)_0%,transparent_65%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(241,190,25,0.12)_0%,transparent_65%)]" />

          {/* Top 3-Second Animated Progress Bar */}
          <div className="relative h-1.5 w-full bg-slate-100 overflow-hidden z-20">
            <div
              className="h-full bg-gradient-to-r from-[#00AEEF] via-[#F1BE19] to-[#F26539] shadow-[0_0_15px_#00AEEF]"
              style={{
                animation: "welcomeTimerProgress 3s linear forwards",
              }}
            />
          </div>

          {/* Manual Close Button */}
          <button
            type="button"
            onClick={handleManualClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 hover:bg-[#00AEEF] hover:text-white transition-all duration-300 z-30 cursor-pointer shadow-sm hover:rotate-90 hover:scale-110"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4.5 w-4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            >
              <path d="M6 6L18 18" />
              <path d="M18 6L6 18" />
            </svg>
          </button>

          <div className="p-6 sm:p-9 text-center relative z-10">
            {/* Trophy Crest Badge with Orbiting particle ring */}
            <div className="relative mx-auto mb-3 flex h-14 w-14 items-center justify-center">
              <span className="absolute -inset-2 rounded-full border border-[#F1BE19]/60 animate-orbit pointer-events-none border-dashed" />
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#00AEEF] to-[#0072B2] text-[#F1BE19] border-2 border-[#F1BE19] shadow-[0_0_25px_rgba(0,174,239,0.35)] animate-trophy-levitate">
                <svg className="w-7 h-7 text-[#F1BE19] drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V18H8v2h8v-2h-3v-2.1c1.73-.37 3.07-1.76 3.61-3.46C19.08 12.13 21 10.05 21 7.5V7c0-1.1-.9-2-2-2zM5 7.5V7h2v3.82C5.84 10.4 5 9.05 5 7.5zm14 0c0 1.55-.84 2.9-2 3.32V7h2v.5z" />
                </svg>
              </div>
            </div>

            {/* Header Eyebrow with Radar pulse */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00AEEF]/60 bg-blue-50 px-4 py-1 text-[0.65rem] sm:text-[0.72rem] font-black uppercase tracking-[0.24em] text-[#00AEEF] mb-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-radar-dot shrink-0" />
              <span>✦ OFFICIAL PRIZE ANNOUNCEMENT ✦</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-wide mb-1 animate-title-shimmer">
              ₹60,000+ Cash Prize Pool
            </h2>
            <p className="font-serif italic text-xs sm:text-base text-slate-600 font-normal mb-7">
              4th Amala National Book Festival · All-India Inter-Collegiate Quiz
            </p>

            {/* Variety 3-Prize Metallic Cards Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 items-center max-w-xl mx-auto mb-7">
              {/* 1st Place Card */}
              <div className="animate-cascade-1 relative rounded-2xl bg-gradient-to-b from-sky-50 via-white to-slate-50 border-2 border-[#00AEEF] p-3 sm:p-4 text-center shadow-[0_4px_20px_rgba(0,174,239,0.2)] scale-105 z-10 group hover:-translate-y-2.5 hover:rotate-1 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00AEEF] px-2.5 py-0.5 text-[0.55rem] sm:text-[0.68rem] font-black uppercase text-white tracking-wider mb-1.5 shadow-md">
                  <svg className="w-3.5 h-3.5 fill-current text-yellow-300" viewBox="0 0 24 24">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                  </svg>
                  <span>1st Place</span>
                </span>
                <p className="font-display text-xl sm:text-3xl font-black text-[#00AEEF] leading-none mb-1 drop-shadow-sm">
                  ₹30,000
                </p>
                <p className="text-[0.6rem] sm:text-xs font-bold text-slate-800 uppercase tracking-wider">
                  + Trophy &amp; Honors
                </p>
              </div>

              {/* 2nd Place Card */}
              <div className="animate-cascade-2 rounded-2xl bg-gradient-to-b from-amber-50/70 via-white to-slate-50 border border-amber-400 p-2.5 sm:p-3.5 text-center shadow-md hover:-translate-y-2.5 hover:-rotate-1 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-500 px-2 py-0.5 text-[0.55rem] sm:text-[0.62rem] font-black uppercase text-white tracking-wider mb-1.5">
                  <svg className="w-3 h-3 fill-current text-white" viewBox="0 0 24 24">
                    <circle cx="12" cy="15" r="5" />
                    <path d="M15 3H9l-2 6h10l-2-6z" />
                  </svg>
                  <span>2nd Place</span>
                </span>
                <p className="font-display text-lg sm:text-2xl font-bold text-amber-700 leading-none mb-1">
                  ₹20,000
                </p>
                <p className="text-[0.56rem] sm:text-[0.68rem] font-semibold text-slate-700 uppercase tracking-wider">
                  + Trophy &amp; Honors
                </p>
              </div>

              {/* 3rd Place Card */}
              <div className="animate-cascade-3 rounded-2xl bg-gradient-to-b from-slate-100 via-white to-slate-50 border border-slate-300 p-2.5 sm:p-3.5 text-center shadow-md hover:-translate-y-2.5 hover:rotate-1 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-600 px-2 py-0.5 text-[0.55rem] sm:text-[0.62rem] font-black uppercase text-white tracking-wider mb-1.5">
                  <svg className="w-3 h-3 fill-current text-amber-200" viewBox="0 0 24 24">
                    <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z" />
                  </svg>
                  <span>3rd Place</span>
                </span>
                <p className="font-display text-lg sm:text-2xl font-bold text-slate-800 leading-none mb-1">
                  ₹10,000
                </p>
                <p className="text-[0.56rem] sm:text-[0.68rem] font-semibold text-slate-600 uppercase tracking-wider">
                  + Trophy &amp; Honors
                </p>
              </div>
            </div>

            {/* Footer action button */}
            <div className="flex flex-col items-center gap-2.5">
              <div className="relative inline-flex items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-[#00AEEF] animate-pulse-ring" />
                <button
                  type="button"
                  onClick={() => {
                    handleManualClose();
                    onRegisterClick();
                  }}
                  className="relative z-10 inline-flex items-center gap-2.5 rounded-full bg-[#00AEEF] hover:bg-[#0092C8] text-white px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-[0_6px_25px_rgba(0,174,239,0.4)] cursor-pointer group"
                >
                  <span>Register Your Team Now</span>
                  <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>

              <div className="flex items-center gap-1.5 text-[0.65rem] text-slate-500 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-ping" />
                <span>Auto-closing in 3 seconds • Tap anywhere to dismiss</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
