import React from "react";

const COLLABORATORS = [
  {
    label: "NDLI, GOVT. OF INDIA",
    src: "/ndli.png",
    alt: "NDLI Logo",
  },
  {
    label: "AMALA COLLEGE OF NURSING",
    src: "/college.png",
    alt: "Amala College of Nursing",
  },
  {
    label: "AMALA COLLEGE OF ALLIED HEALTH SCIENCES",
    src: "/allied.png",
    alt: "Amala College of Allied Health Sciences",
  },
  {
    label: "AMALA SCHOOL OF NURSING",
    src: "/school.png",
    alt: "Amala School of Nursing",
  },
  {
    label: "OPERATION TOOFAN x AMALA",
    src: "/toofan.png",
    alt: "Operation Toofan",
  },
];

export function MarqueeSection() {
  const quadrupled = [...COLLABORATORS, ...COLLABORATORS, ...COLLABORATORS, ...COLLABORATORS];
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-y border-cyan-500/20 py-6 sm:py-7 z-10">
      {/* Top Line */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00AEEF] to-transparent opacity-80" />

      {/* Bottom Line */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#F1BE19] to-transparent opacity-60" />

      {/* Header Label Bar */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 mb-4 flex items-center justify-center gap-3">
        <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#00AEEF]" />
        <div className="inline-flex items-center gap-2 rounded-full border border-[#00AEEF]/40 bg-slate-900 px-4 py-1 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00AEEF] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00AEEF]" />
          </span>
          <span className="font-accent text-[0.68rem] font-extrabold tracking-widest text-[#00AEEF] uppercase">
            IN COLLABORATION WITH
          </span>
        </div>
        <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#00AEEF]" />
      </div>

      {/* Left/Right Edge Fade Masks */}
      <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-28 sm:w-44 bg-gradient-to-r from-slate-950 to-transparent z-20" />
      <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-28 sm:w-44 bg-gradient-to-l from-slate-950 to-transparent z-20" />

      {/* Marquee Track */}
      <div className="marquee-track flex items-center gap-5 sm:gap-7">
        {quadrupled.map((item, i) => (
          <span
            key={i}
            className="group relative inline-flex items-center gap-3.5 rounded-full border border-cyan-500/25 bg-slate-900 hover:bg-slate-800 px-5 sm:px-6 py-2.5 text-white transition-all duration-300 hover:border-[#00AEEF] hover:-translate-y-0.5 shrink-0 cursor-default"
          >
            {/* Logo Avatar Badge */}
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white p-1 group-hover:scale-110 transition-transform duration-300 overflow-hidden shrink-0">
              <img src={item.src} alt={item.alt} className="h-full w-full object-contain" />
            </span>

            {/* Institution Name */}
            <span className="font-sans font-extrabold text-xs sm:text-sm tracking-wider text-slate-100 uppercase group-hover:text-[#00AEEF] transition-colors">
              {item.label}
            </span>

            {/* Diamond Divider */}
            <span className="inline-flex items-center justify-center ml-1 text-[#00AEEF] group-hover:text-[#F1BE19] group-hover:scale-125 transition-all">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
