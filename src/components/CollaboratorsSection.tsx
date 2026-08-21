"use client";

import React from "react";
import { FestivalBrandBadge } from "@/components/ui/FestivalBrandBadge";

const LOGOS = [
  {
    name: "NDLI, Govt. of India",
    src: "/ndli.png",
    alt: "NDLI Logo",
  },
  {
    name: "Amala College of Nursing",
    src: "/college.png",
    alt: "Amala College of Nursing Logo",
  },
  {
    name: "Amala College of Allied Health Sciences",
    src: "/allied.png",
    alt: "Amala College of Allied Health Sciences Logo",
  },
  {
    name: "Amala School of Nursing",
    src: "/school.png",
    alt: "Amala School of Nursing Logo",
  },
];

const DELAYS = ["delay-100", "delay-200", "delay-300", "delay-400"];

export function CollaboratorsSection() {
  return (
    <section id="collaborators" className="content-visibility-section relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 px-4 py-16 sm:px-8 sm:py-24 border-t border-slate-200">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Badge & Section Title */}
        <div className="mb-3 reveal flex justify-center">
          <FestivalBrandBadge label="ACADEMIC & OFFICIAL PARTNERS" />
        </div>

        <h2 className="font-display text-[clamp(2.2rem,4.8vw,4.2rem)] font-bold text-slate-900 mb-4 tracking-tight leading-tight reveal delay-100">
          Collaborated <span className="font-serif italic font-normal text-[#00AEEF]">With.</span>
        </h2>

        <p className="text-slate-600 mb-14 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed reveal delay-150">
          Proudly organized in academic &amp; official collaboration with national bodies and premier institutions.
        </p>

        {/* Responsive 4-Card Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
          {LOGOS.map((logo, idx) => (
            <div
              key={logo.src}
              className={`reveal ${DELAYS[idx] || "delay-100"} group relative w-full rounded-2xl bg-white border border-slate-200 p-6 shadow-sm transition-all duration-300 hover:border-[#00AEEF] hover:shadow-xl hover:-translate-y-2 flex flex-col items-center justify-between overflow-hidden cursor-default min-h-[200px]`}
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-6 right-6 h-1 bg-[#00AEEF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b" />

              {/* Logo Image */}
              <div className="relative w-full h-24 flex items-center justify-center p-2 my-auto overflow-hidden">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Caption Title */}
              <span className="mt-4 text-xs font-bold text-slate-800 text-center leading-snug tracking-wide group-hover:text-[#00AEEF] transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
