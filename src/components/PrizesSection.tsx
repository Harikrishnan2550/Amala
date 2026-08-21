"use client";

import React from "react";
import { FestivalBrandBadge } from "@/components/ui/FestivalBrandBadge";
import { PodiumCrestIcon, FeaturePremiumIcon, PrizeIcon } from "@/components/Icons";
import { PRIZES, ADDITIONAL_PRIZES } from "@/data/constants";

function LuxuryGoldenTrophySVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="goldGradientTrophy" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF9C4" />
          <stop offset="50%" stopColor="#F5B719" />
          <stop offset="100%" stopColor="#9A7410" />
        </linearGradient>
      </defs>
      <path d="M6 9H4.5A2.5 2.5 0 0 1 2 6.5V6A2.5 2.5 0 0 1 4.5 3.5H6" stroke="url(#goldGradientTrophy)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18 9h1.5A2.5 2.5 0 0 0 22 6.5V6a2.5 2.5 0 0 0-2.5-2.5H18" stroke="url(#goldGradientTrophy)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 21h16M10 14.66V17c0 .55-.45 1-1 1H8v3h8v-3h-1c-.55 0-1-.45-1-1v-2.34" stroke="url(#goldGradientTrophy)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 3.5H6v7a6 6 0 0 0 12 0v-7z" fill="url(#goldGradientTrophy)" fillOpacity="0.25" stroke="url(#goldGradientTrophy)" strokeWidth="1.8" strokeLinejoin="round" />
      <polygon points="12 5.5 12.8 7.2 14.7 7.5 13.3 8.8 13.7 10.7 12 9.8 10.3 10.7 10.7 8.8 9.3 7.5 11.2 7.2" fill="url(#goldGradientTrophy)" />
    </svg>
  );
}

function LuxuryGoldenMedalSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="goldGradientMedal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF9C4" />
          <stop offset="50%" stopColor="#F5B719" />
          <stop offset="100%" stopColor="#9A7410" />
        </linearGradient>
      </defs>
      <path d="M8.21 13.89L7 22l5-3 5 3-1.21-8.11" stroke="url(#goldGradientMedal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="8" r="6" fill="url(#goldGradientMedal)" fillOpacity="0.25" stroke="url(#goldGradientMedal)" strokeWidth="1.8" />
      <circle cx="12" cy="8" r="4.2" stroke="url(#goldGradientMedal)" strokeWidth="1.2" strokeDasharray="2 2" />
      <polygon points="12 5.5 12.8 7.2 14.7 7.5 13.3 8.8 13.7 10.7 12 9.8 10.3 10.7 10.7 8.8 9.3 7.5 11.2 7.2" fill="url(#goldGradientMedal)" />
    </svg>
  );
}

export function PrizesSection() {
  return (
    <section id="prizes" className="content-visibility-section relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 px-4 py-20 sm:px-6 sm:py-28 border-t border-slate-200">
      <style>{`
        @keyframes towelRollUnfold {
          0% {
            opacity: 0;
            transform: perspective(1200px) rotateX(-85deg) scaleY(0.1) translateY(-90px);
            transform-origin: top center;
            filter: blur(12px);
          }
          60% {
            opacity: 1;
            transform: perspective(1200px) rotateX(18deg) scaleY(1.08) translateY(12px);
            transform-origin: top center;
            filter: blur(0px);
          }
          82% {
            transform: perspective(1200px) rotateX(-7deg) scaleY(0.96) translateY(-4px);
            transform-origin: top center;
          }
          100% {
            opacity: 1;
            transform: perspective(1200px) rotateX(0deg) scaleY(1) translateY(0px);
            transform-origin: top center;
            filter: blur(0px);
          }
        }
        @keyframes clothSheenDown {
          0%   { transform: translateY(-100%); opacity: 0.8; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        .towel-card-reveal {
          opacity: 0;
          transform: perspective(1200px) rotateX(-85deg) scaleY(0.1) translateY(-90px);
          transform-origin: top center;
        }
        .towel-card-reveal.active {
          animation: towelRollUnfold 1.15s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .towel-card-reveal.active .cloth-sheen {
          animation: clothSheenDown 1.3s 0.3s ease-out forwards;
        }
      `}</style>
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="mb-3 reveal flex justify-center">
          <FestivalBrandBadge label="ALL INDIA INTER-COLLEGIATE QUIZ COMPETITION 2026" />
        </div>

        {/* Tagline */}
        <p className="font-serif italic text-lg sm:text-2xl text-[#00AEEF] font-semibold mb-2 tracking-wide reveal delay-100">
          &quot;Knowledge Beyond Boundaries&quot;
        </p>

        <h2 className="font-display text-[clamp(2.2rem,4.8vw,4.2rem)] font-bold text-slate-900 mb-4 leading-tight tracking-tight reveal delay-150">
          Quiz Competition <span className="font-serif italic font-normal text-[#00AEEF]">Prizes &amp; Rewards.</span>
        </h2>
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed reveal delay-200">
          Cash prizes and national recognition awarded exclusively to participating college teams in the <strong className="text-slate-900 font-bold">All India Inter-Collegiate Quiz Competition 2026</strong>.
        </p>
        <div className="reveal delay-300 mb-14 sm:mb-20 flex flex-wrap justify-center gap-3">
          <span className="rounded-full bg-white border border-[#00AEEF]/40 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-900 shadow-sm">
            Quiz Prize Pool Worth ₹1 Lakh+
          </span>
          <span className="rounded-full bg-white border border-slate-200 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-900 shadow-sm">
            Top 3 Quiz Teams Honoured On Stage
          </span>
          <span className="rounded-full bg-white border border-slate-200 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-900 shadow-sm">
            Certificates For Every Quiz Participant
          </span>
        </div>

        {/* 3 Award Cards Grid with 3D Towel Roll Unfold Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto mb-16 sm:mb-24 perspective-1000">
          {[PRIZES[0], PRIZES[1], PRIZES[2]].map((prize) => {
            const orderClass = prize.rank === "1st" ? "order-1 md:order-2" : prize.rank === "2nd" ? "order-2 md:order-3" : "order-3 md:order-1";
            const delayTime = prize.rank === "1st" ? "0.1s" : prize.rank === "2nd" ? "0.35s" : "0.6s";
            return (
              <div
                key={prize.title}
                id={`prize-${prize.rank}`}
                style={{ animationDelay: delayTime }}
                className={`reveal towel-card-reveal ${orderClass} relative flex flex-col justify-between rounded-[2.5rem] bg-white ${prize.rank === "1st" ? "border-2 border-[#FF1E4B] shadow-[0_12px_40px_rgba(255,30,75,0.2)] md:-translate-y-4" : "border border-slate-200 shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:border-[#FF1E4B]"} ${prize.auraGlow} text-left transition-all duration-500 hover:-translate-y-3 hover:rotate-x-2 pt-32 pb-8 px-6 sm:px-8 backdrop-blur-xl group overflow-hidden`}
              >
                {/* Unfolding Cloth Light Sheen */}
                <div className="cloth-sheen pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 via-white/30 to-transparent z-20" />
                {/* Top Folded Ribbon Bookmark */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 w-48 sm:w-52 text-center pointer-events-none drop-shadow-2xl">
                  <div className="flex justify-between px-2 -mb-0.5">
                    <span className={`w-3.5 h-3.5 rounded-tl-sm ${prize.ribbonTabBg} -rotate-45 opacity-90`} />
                    <span className={`w-3.5 h-3.5 rounded-tr-sm ${prize.ribbonTabBg} rotate-45 opacity-90`} />
                  </div>

                  <div
                    className={`w-full pt-4 pb-8 px-4 rounded-t-sm ${prize.ribbonBg}`}
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), 50% 100%, 0 calc(100% - 20px))" }}
                  >
                    <div className="flex items-center justify-center gap-1.5 mb-1.5">
                      <PodiumCrestIcon type={prize.crestType} className="w-5 h-5 drop-shadow-sm shrink-0" />
                      <span className="font-accent text-[0.68rem] font-black tracking-[0.24em] uppercase">
                        {prize.title}
                      </span>
                    </div>

                    <p className={`font-display font-black text-3xl sm:text-4xl tracking-tight leading-none mb-1 ${prize.prizeTextColor}`}>
                      {prize.prize}
                    </p>
                    <p className="font-accent text-[0.6rem] font-extrabold tracking-[0.22em] uppercase opacity-95">
                      / CASH AWARD &amp; HONORS
                    </p>
                  </div>
                </div>

                {/* Card Features */}
                <div>
                  <div className="text-center mb-6">
                    <span className={`font-accent text-[0.7rem] font-black tracking-[0.24em] uppercase ${prize.subtitleColor}`}>
                      {prize.subtitle}
                    </span>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {prize.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3.5 text-xs sm:text-sm border-b border-slate-100 pb-3 last:border-b-0">
                        <span className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 border shadow-md ${prize.iconColor}`}>
                          <FeaturePremiumIcon index={idx} className="w-3.5 h-3.5" />
                        </span>
                        <span className="leading-snug">
                          <strong className="text-slate-900 font-bold">{feature.highlight}</strong>{" "}
                          <span className="text-slate-600 font-medium">{feature.rest}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Awards */}
        <div className="reveal delay-400 mt-16 sm:mt-24 text-center">
          <div className="mb-10">
            <span className="font-accent text-[0.68rem] font-black tracking-[0.26em] text-[#FF1E4B] uppercase mb-2 block">
              BEYOND THE PODIUM
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Additional Honors &amp; Awards
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 max-w-5xl mx-auto items-center justify-items-center">
            {/* Left Animated Golden Emblem Graphic */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center pointer-events-none hidden md:flex">
              {/* Outer Clockwise Rotating Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-amber-400/50 animate-[spin_20s_linear_infinite]">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-amber-400 text-xs">✦</div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-amber-400 text-xs">✦</div>
              </div>

              {/* Inner Anticlockwise Rotating Ring */}
              <div className="absolute inset-4 rounded-full border border-dotted border-amber-300/70 animate-[spin_14s_linear_infinite_reverse]">
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 text-amber-300 text-xs">✨</div>
                <div className="absolute top-1/2 -left-2 -translate-y-1/2 text-amber-300 text-xs">✨</div>
              </div>

              {/* Pulsing Golden Glow Aura */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-amber-400/20 via-yellow-300/10 to-transparent blur-xl animate-pulse" />

              {/* Center Emblem Icon (No jumping!) */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#FFF9C4] via-[#F5B719] to-[#9A7410] p-1 shadow-[0_10px_35px_rgba(245,183,25,0.4)] flex items-center justify-center transition-all">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center border border-[#FFF5A8] p-4">
                  <LuxuryGoldenTrophySVG className="w-full h-full drop-shadow-[0_0_8px_rgba(245,183,25,0.8)]" />
                </div>
              </div>
            </div>

            {/* Center: Gold Coin (Consolation Prize) */}
            <div className="flex items-center justify-center">
              {ADDITIONAL_PRIZES.map((item) => (
                <div
                  key={item.label}
                  className="group relative w-60 h-60 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-[#FFF9C4] via-[#F5B719] via-60% to-[#9A7410] p-1.5 shadow-[0_20px_50px_rgba(245,183,25,0.4)] hover:shadow-[0_25px_65px_rgba(245,183,25,0.65)] transition-all duration-500 hover:scale-105 hover:-translate-y-2 flex items-center justify-center cursor-default"
                >
                  <div className="w-full h-full rounded-full border-4 border-[#FFFDF0] p-1.5 shadow-[inset_0_4px_12px_rgba(140,107,16,0.45)]">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FFFDF0] via-[#F5B719] via-65% to-[#C59B27] border border-[#FFF5A8] flex flex-col items-center justify-center p-5 sm:p-6 text-center relative overflow-hidden shadow-[inset_0_-8px_20px_rgba(140,107,16,0.35)]">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#14241B] text-[#F5B719] flex items-center justify-center shadow-lg border-2 border-[#FFF5A8] mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                        <PrizeIcon type={item.icon} className="w-5 h-5 text-[#F5B719]" />
                      </div>

                      <p className="font-accent text-[0.62rem] sm:text-[0.68rem] font-black tracking-[0.24em] text-[#14241B] uppercase mb-1 drop-shadow-sm">
                        {item.label}
                      </p>
                      <p className="font-display font-extrabold text-sm sm:text-base text-[#14241B] leading-tight">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Animated Golden Emblem Graphic */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center pointer-events-none hidden md:flex">
              {/* Outer Clockwise Rotating Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-amber-400/50 animate-[spin_22s_linear_infinite]">
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 text-amber-400 text-xs">✦</div>
                <div className="absolute top-1/2 -left-2 -translate-y-1/2 text-amber-400 text-xs">✦</div>
              </div>

              {/* Inner Anticlockwise Rotating Ring */}
              <div className="absolute inset-4 rounded-full border border-dotted border-amber-300/70 animate-[spin_16s_linear_infinite_reverse]">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-amber-300 text-xs">✨</div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-amber-300 text-xs">✨</div>
              </div>

              {/* Pulsing Golden Glow Aura */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-amber-400/20 via-yellow-300/10 to-transparent blur-xl animate-pulse" />

              {/* Center Emblem Icon (No jumping!) */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#FFF9C4] via-[#F5B719] to-[#9A7410] p-1 shadow-[0_10px_35px_rgba(245,183,25,0.4)] flex items-center justify-center transition-all">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center border border-[#FFF5A8] p-4">
                  <LuxuryGoldenMedalSVG className="w-full h-full drop-shadow-[0_0_8px_rgba(245,183,25,0.8)]" />
                </div>
              </div>
            </div>
          </div>

          {/* Quiz Topics Highlight Banner (Placed Below Coin) */}
          <div className="reveal delay-500 mt-12 max-w-3xl mx-auto rounded-2xl border border-blue-200/80 bg-gradient-to-r from-blue-50/90 via-sky-50/60 to-blue-50/90 p-4 sm:p-5 shadow-sm text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-base sm:text-lg">📚</span>
              <span className="font-accent text-[0.7rem] font-black tracking-widest text-[#00AEEF] uppercase">
                QUIZ TOPICS &amp; COVERAGE
              </span>
            </div>
            <p className="font-display font-extrabold text-sm sm:text-base text-slate-800 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
              <span className="text-slate-900">Literature</span>
              <span className="text-[#00AEEF] font-black">•</span>
              <span className="text-slate-900">Science &amp; Technology</span>
              <span className="text-[#00AEEF] font-black">•</span>
              <span className="text-slate-900">General Knowledge</span>
              <span className="text-[#00AEEF] font-black">•</span>
              <span className="text-slate-900">Sports</span>
              <span className="text-[#00AEEF] font-black">•</span>
              <span className="text-slate-900">Cinema etc..</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
