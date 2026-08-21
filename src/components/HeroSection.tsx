"use client";

import React, { useState } from "react";
import { HERO_VIDEO_SRC, HERO_PARTICLES } from "@/data/constants";
import { HeroCalendarIcon, HeroFeeIcon, HeroTeamIcon } from "@/components/Icons";
import { HeroQuickForm } from "@/components/HeroQuickForm";

export function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  const [showVideo] = useState(() => {
    if (typeof window === "undefined") return true;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = navigator as Navigator & { connection?: { saveData?: boolean } };
    return !(prefersReducedMotion || connection.connection?.saveData);
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        {showVideo && (
          <video
            className="absolute inset-0 h-full w-full object-cover object-center hero-bg-mobile hero-bg-tablet hero-bg-zoom"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Amala National Book Festival hero video"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        {HERO_PARTICLES.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#FF1E4B] hero-particle opacity-40"
            style={{
              top: p.top, left: p.left,
              width: p.size, height: p.size,
              animationDelay: p.delay,
              animationDuration: p.dur,
            }}
          />
        ))}
      </div>

      {/* ── Decorative ring ── */}
      <div className="hidden sm:block absolute right-[-8vw] top-1/2 -translate-y-1/2 w-[52vw] h-[52vw] max-w-[640px] max-h-[640px] rounded-full border border-[#FF1E4B]/15 z-[1] hero-ring" />
      <div className="hidden sm:block absolute right-[-4vw] top-1/2 -translate-y-1/2 w-[42vw] h-[42vw] max-w-[520px] max-h-[520px] rounded-full border border-[#FF1E4B]/25 z-[1] hero-ring" style={{ animationDelay: "0.4s" }} />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-16 xl:px-20 pb-10 sm:pb-16 lg:pb-24 pt-20 sm:pt-28 lg:pt-36">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-12 items-center">
          {/* Text Content - Always UP (order-1) */}
          <div className="order-1 lg:col-span-7 xl:col-span-7 hero-content min-w-0 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 sm:gap-2.5 mb-3 sm:mb-5 rounded-full border border-[#FF1E4B]/40 bg-white/90 px-3.5 sm:px-4 py-1.5 sm:py-2 backdrop-blur-md shadow-[0_4px_15px_rgba(255,30,75,0.15)] hero-line-in max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#FF1E4B] animate-pulse shrink-0" />
              <span className="font-accent text-[0.62rem] sm:text-[0.75rem] font-bold tracking-[0.16em] sm:tracking-[0.18em] text-slate-800 uppercase hero-text-in leading-normal" style={{ animationDelay: "0.3s" }}>
                4th Edition <span className="text-[#FF1E4B] mx-0.5 sm:mx-1">•</span> 24-26 Sept 2026 <span className="text-[#FF1E4B] mx-0.5 sm:mx-1">•</span> In collaboration with NDLI
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display leading-[0.94] mb-3 sm:mb-5 max-w-4xl tracking-wide w-full">
              <span className="block text-[clamp(2.1rem,6.8vw,5rem)] font-bold text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] hero-word-up tracking-[0.04em]" style={{ animationDelay: "0.4s" }}>
                Amala National
              </span>
              <span className="block text-[clamp(2.4rem,8.2vw,5.5rem)] font-black text-white uppercase leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] hero-word-up tracking-[0.06em]" style={{ animationDelay: "0.65s" }}>
                Book Festival
              </span>
              <span className="hero-date-badge hero-date-ml15 block text-[clamp(1.6rem,5vw,3.75rem)] font-bold tracking-tight text-[#FF1E4B] mt-2 sm:mt-2.5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]" style={{ animationDelay: "0.9s" }}>
                <span className="hero-date-ml15__word text-[#FF1E4B]" style={{ animationDelay: "1s" }}>24-26 </span>
                <span className="hero-date-ml15__word text-white font-serif italic" style={{ animationDelay: "1.18s" }}>September </span>
                <span className="hero-date-ml15__word text-[#FF1E4B]" style={{ animationDelay: "1.36s" }}>2026</span>
              </span>
            </h1>

            {/* Info pills row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-3.5 mb-2 sm:mb-4 hero-text-in w-full" style={{ animationDelay: "1.1s" }}>
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white tracking-wide shadow-lg backdrop-blur-md">
                <HeroCalendarIcon />
                <span><strong className="font-extrabold text-white">31 August 2026</strong> <span className="opacity-90 font-medium">— Last Date</span></span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white tracking-wide shadow-lg backdrop-blur-md">
                <HeroFeeIcon />
                <span>₹100 · incl. GST</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white tracking-wide shadow-lg backdrop-blur-md">
                <HeroTeamIcon />
                <span>2 Members</span>
              </span>
            </div>
          </div>

          {/* Button Container - Always DOWN with extra vertical gap (order-2) */}
          <div className="order-2 lg:order-2 lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end w-full mt-24 sm:mt-32 lg:mt-36 xl:mt-40 pt-4 sm:pt-6">
            <HeroQuickForm onOpen={onOpenModal} />
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-float hidden sm:flex z-10">
        <span className="hero-scroll-text text-[0.6rem] tracking-widest text-slate-500 uppercase">Scroll</span>
        <div className="hero-scroll-line w-px h-10 bg-gradient-to-b from-[#FF1E4B] to-transparent" />
      </div>
    </section>
  );
}
