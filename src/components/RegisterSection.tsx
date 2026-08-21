import React from "react";
import { FestivalBrandBadge } from "@/components/ui/FestivalBrandBadge";
import { HeroFeeIcon, HeroTeamIcon, ContactIcon } from "@/components/Icons";

export function RegisterSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="register" className="content-visibility-section relative overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-white text-slate-900 px-4 py-20 sm:px-6 sm:py-28 border-t border-slate-200">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="mb-5 reveal flex justify-center">
          <FestivalBrandBadge label="STATUS: REGISTRATION OPEN" />
        </div>

        {/* Title */}
        <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.8rem)] font-black text-slate-900 mb-5 leading-tight tracking-tight reveal delay-100">
          Let&apos;s craft your <span className="font-serif italic font-normal text-[#00AEEF]">literary victory.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 mb-9 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed reveal delay-200">
          We believe the finest competition is a dialogue between brilliant minds and literary heritage. Registration closes <strong className="text-slate-900 font-bold">31 August 2026</strong>.
        </p>

        {/* Info Pills */}
        <div className="reveal delay-250 flex flex-wrap items-center justify-center gap-3 mb-10">
          <span className="rounded-full bg-white border border-slate-200 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-800 shadow-sm flex items-center gap-2">
            <HeroFeeIcon />
            <span>₹100 per team · incl. 18% GST</span>
          </span>
          <span className="rounded-full bg-white border border-slate-200 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-800 shadow-sm flex items-center gap-2">
            <HeroTeamIcon />
            <span>2 Members per Team</span>
          </span>
          <span className="rounded-full bg-white border border-slate-200 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-800 shadow-sm flex items-center gap-2">
            <ContactIcon type="venue" />
            <span>All UG &amp; PG Students</span>
          </span>
        </div>

        {/* CTA Button */}
        <div className="reveal delay-300 flex flex-col items-center justify-center">
          <button
            onClick={onOpenModal}
            className="bg-[#00AEEF] hover:bg-[#0092C8] text-white font-extrabold uppercase tracking-widest px-10 py-4.5 rounded-full text-sm sm:text-base hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(0,174,239,0.4)] cursor-pointer"
          >
            REGISTER YOUR TEAM →
          </button>

          <p className="text-xs font-semibold text-slate-500 mt-4 flex items-center justify-center gap-1.5">
            <span>⚠️</span> Registration confirmed only after successful payment verification.
          </p>
        </div>
      </div>
    </section>
  );
}
