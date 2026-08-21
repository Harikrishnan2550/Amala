import React from "react";
import { FestivalBrandBadge } from "@/components/ui/FestivalBrandBadge";
import { FormatIcon } from "@/components/Icons";
import { ROUNDS } from "@/data/constants";

export function FormatSection() {
  return (
    <section id="format" className="content-visibility-section relative overflow-hidden bg-[#F8FAFC] text-slate-900 px-4 py-20 sm:px-6 sm:py-28 border-t border-slate-200">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-4 reveal">
          <FestivalBrandBadge label="THE PROCESS" />
        </div>
        <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold text-slate-900 tracking-tight leading-[1.05] max-w-3xl mb-4 reveal delay-100">
          Three Rounds of <span className="font-serif italic font-normal text-[#00AEEF]">Pure Brilliance.</span>
        </h2>
        <p className="text-slate-600 mb-14 max-w-xl text-sm sm:text-base leading-relaxed reveal delay-200">
          Collaboration through rigorous literary development. Each round tests a unique facet of knowledge.
        </p>

        {/* Process Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROUNDS.map((round, i) => (
            <div
              key={round.number}
              id={`round-${round.number}`}
              className={`reveal delay-${Math.min(i * 100 + 100, 600)} rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:border-[#00AEEF] hover:shadow-[0_12px_30px_rgba(0,174,239,0.12)] group shadow-sm`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-3xl font-bold text-[#00AEEF] tracking-tight">
                    ROUND {round.number}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#00AEEF]">
                    <FormatIcon type={round.icon} />
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-1 group-hover:text-[#00AEEF] transition-colors">
                  {round.title}
                </h3>
                {round.date ? (
                  <div className="mb-3 space-y-1">
                    <p className="text-xs font-extrabold text-[#00AEEF]">
                      📅 {round.date} {round.time ? `· ${round.time}` : ""}
                    </p>
                    {round.details ? (
                      <p className="text-[0.7rem] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-md inline-block">
                        ⏱️ {round.details}
                      </p>
                    ) : null}
                  </div>
                ) : null}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{round.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Qualification Notes / Disclaimers (Visual Alert Card Styling) */}
        <div className="mt-10 sm:mt-12 grid md:grid-cols-2 gap-6 reveal delay-400">
          {/* Note 1 */}
          <div className="rounded-2xl bg-gradient-to-r from-amber-50/50 via-white to-white border border-amber-200/80 p-5 sm:p-6 shadow-sm relative overflow-hidden group hover:border-amber-400 hover:shadow-md transition-all duration-300 flex items-center gap-3.5">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500" />
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100/80 text-amber-700 text-sm font-bold">
              
              
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              The <span className="font-extrabold text-slate-900">Top 30 teams</span> from the Online Preliminary Round will qualify to the Offline Semi-Final.
            </p>
          </div>

          {/* Note 2 */}
          <div className="rounded-2xl bg-gradient-to-r from-amber-50/50 via-white to-white border border-amber-200/80 p-5 sm:p-6 shadow-sm relative overflow-hidden group hover:border-amber-400 hover:shadow-md transition-all duration-300 flex items-center gap-3.5">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500" />
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100/80 text-amber-700 text-sm font-bold">
              ⚡
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              Only the <span className="font-extrabold text-slate-900">Top 5 teams</span> qualifying in the Second Round (Offline Semi-Final) shall be eligible to participate in the Third Round (Offline Grand Finale).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
