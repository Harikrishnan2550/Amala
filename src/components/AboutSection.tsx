import React from "react";
import { FestivalBrandBadge } from "@/components/ui/FestivalBrandBadge";
import { AboutIcon } from "@/components/Icons";

export function AboutSection() {
  return (
    <section id="about" className="content-visibility-section relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-28 text-slate-900 border-t border-slate-200">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="mb-4 reveal">
            <FestivalBrandBadge label="THE FESTIVAL" />
          </div>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold text-slate-900 tracking-tight leading-[1.02] reveal delay-100">
            Where Knowledge Meets <span className="block font-serif italic font-normal text-[#00AEEF]">National Glory.</span>
          </h2>
        </div>

        {/* Phase Grid Layout */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { phase: "01", title: "Exhibition", desc: "National book exhibition & publishers showcase." },
            { phase: "02", title: "Awards", desc: "Best school library & magazine competitions." },
            { phase: "03", title: "Quiz Competition", desc: "All-India quiz for college teams." },
            { phase: "04", title: "Showcase", desc: "Talk shows, seminars & photography showcase." },
          ].map((item, i) => (
            <div key={item.phase} className={`reveal delay-${i * 100 + 100} border-t border-slate-200 pt-6 group`}>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-display text-4xl sm:text-5xl font-black text-[#F26539] leading-none">
                  {item.phase}
                </span>
                <span className="font-accent text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">PHASE</span>
              </div>
              <h3 className="font-display font-extrabold text-xl text-slate-900 mb-2 group-hover:text-[#00AEEF] transition-colors">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div className="space-y-6 reveal delay-200">
            <p className="text-slate-800 leading-relaxed text-base sm:text-lg font-normal">
              The <strong className="text-[#00AEEF] font-bold">Amala National Book Festival</strong> brings together leading national and international publishers, book distributors, technology providers, government agencies, educational institutions, libraries, academicians, researchers and students on a vibrant platform dedicated to learning and intellectual exchange.
            </p>
            <p className="text-slate-600 leading-relaxed text-base">
              Explore an extensive collection of books across general-interest and subject-specific categories, discover emerging educational technologies, engage with institutions and knowledge partners, and experience the timeless joy of reading.
            </p>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm relative overflow-hidden group hover:border-[#00AEEF] transition-colors">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#00AEEF]" />
              <p className="font-accent text-[0.68rem] font-extrabold tracking-[0.2em] text-[#00AEEF] uppercase mb-2">
                Open to All
              </p>
              <p className="text-slate-800 leading-relaxed text-sm font-medium">
                Whether you are a student, educator, healthcare professional, researcher, book enthusiast or lifelong learner, the Amala National Book Festival offers something valuable for everyone.
              </p>
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal delay-300">
            {[
              { icon: "date", label: "Date", value: "24-26 September 2026" },
              { icon: "venue", label: "Venue", value: "Amala Institute of Medical Sciences, Thrissur, Kerala" },
              { icon: "team", label: "Team Size", value: "2 Members per Team" },
              { icon: "eligibility", label: "Eligibility", value: "All UG & PG College Students" },
              { icon: "deadline", label: "Reg. Deadline", value: "31 August 2026" },
              { icon: "fee", label: "Entry Fee", value: "₹100 per team (incl. 18% GST)" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(0,174,239,0.1)] hover:border-[#00AEEF] group"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#00AEEF] shadow-inner">
                  <AboutIcon type={item.icon as "date" | "venue" | "team" | "eligibility" | "deadline" | "fee"} />
                </div>
                <p className="font-accent text-[0.65rem] font-extrabold tracking-widest uppercase mb-1 text-slate-500">
                  {item.label}
                </p>
                <p className="text-sm font-semibold leading-snug text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
