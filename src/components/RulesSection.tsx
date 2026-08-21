import React from "react";
import { FestivalBrandBadge } from "@/components/ui/FestivalBrandBadge";

const RULES = [
  {
    num: "01",
    category: "ELIGIBILITY",
    title: "Age & Institution Criteria",
    desc: "Open to students below 35 years of age from Colleges, Universities and Academic Institutions across India.",
  },
  {
    num: "02",
    category: "TEAM FORMAT",
    title: "Preliminary Participation & Team Format",
    desc: "There is no limit for participating in the preliminary round. Each team should consist of 2 members.",
  },
  {
    num: "03",
    category: "STAGES",
    title: "Three Stages of Competition",
    desc: "The competition consists of three stages: Online Preliminary, Offline Semi-Final, and Offline Grand Finale.",
  },
  {
    num: "04",
    category: "SEMI-FINALS",
    title: "Top 30 Teams Qualification",
    desc: "The Top 30 teams from the Online Preliminary Round will qualify to the Offline Semi-Final.",
  },
  {
    num: "05",
    category: "GRAND FINALE",
    title: "Top 5 Teams Finale Stage",
    desc: "Only the Top 5 teams from the Semi-Final shall be eligible to participate in the Grand Finale.",
  },
  {
    num: "06",
    category: "VERIFICATION",
    title: "Mandatory Documents",
    desc: "Participants must produce Principal’s Nomination Letter, College ID Card and Aadhar Card for verification in the Semi-Final",
  },
  {
    num: "07",
    category: "GADGET POLICY",
    title: "Strict Gadget Prohibition",
    desc: "Mobile phones, smart watches, electronic gadgets, books, notes, and any other unfair means are strictly prohibited during the competition.",
  },
  {
    num: "08",
    category: "DECISIONS",
    title: "Quiz Master Authority",
    desc: "The decision of the Quiz Master and Organizing Committee shall be final and binding.",
  },
  {
    num: "09",
    category: "ORGANIZERS",
    title: "Schedule & Format Rights",
    desc: "The Organizing Committee reserves the right to modify the schedule, rules, or competition format if necessary.",
  },
  {
    num: "10",
    category: "COMMUNICATION",
    title: "Email & Phone Intimation",
    desc: "Selected Teams from Preliminary Round will Intimated through email/Phone",
  },
];

export function RulesSection() {
  return (
    <section id="rules" className="content-visibility-section relative overflow-hidden bg-[#FAFAFC] text-slate-900 px-4 py-20 sm:px-6 sm:py-28 border-t border-slate-200">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-left mb-12">
          <div className="mb-4 reveal">
            <FestivalBrandBadge label="GUIDELINES" />
          </div>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold text-slate-900 tracking-tight leading-tight reveal delay-100">
            Know Before You <span className="font-serif italic font-normal text-[#00AEEF]">Compete.</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-sm sm:text-base leading-relaxed mt-3 reveal delay-200">
            Please read all rules carefully. Participation implies acceptance of these official competition guidelines.
          </p>
        </div>

        {/* Venue Card Banner */}
        <div className="reveal delay-200 mb-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all hover:border-[#00AEEF]">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#00AEEF] border border-[#00AEEF]/20">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <span className="font-accent text-[0.68rem] font-extrabold tracking-widest text-[#00AEEF] uppercase block mb-1">
                VENUE — 2ND &amp; 3RD ROUND
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                Amala Institute of Medical Sciences, Amala Nagar, Thrissur — 680555
              </h3>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=Amala+Institute+of+Medical+Sciences+Thrissur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-100 hover:bg-[#00AEEF] hover:border-[#00AEEF] hover:text-white px-6 py-2.5 text-xs font-black uppercase tracking-wider text-slate-800 transition-all shadow-sm shrink-0"
          >
            <span>View on Maps</span>
            <span className="text-sm">↗</span>
          </a>
        </div>

        {/* 10 Rules Grid */}
        <div className="grid md:grid-cols-2 gap-6 reveal delay-300 mb-12">
          {RULES.map((rule) => (
            <div
              key={rule.num}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#00AEEF] hover:-translate-y-1 hover:shadow-md group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block rounded-full bg-blue-50 border border-[#00AEEF]/30 px-3 py-1 text-[0.62rem] font-extrabold uppercase tracking-widest text-[#00AEEF]">
                    {rule.category}
                  </span>
                  <span className="font-display text-2xl font-black text-[#F26539]">
                    {rule.num}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-lg text-slate-900 mb-2 group-hover:text-[#00AEEF] transition-colors">
                  {rule.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Venue Verification Banner */}
        <div className="reveal delay-400 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#00AEEF] border border-[#00AEEF]/20">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <span className="font-accent text-[0.68rem] font-extrabold tracking-widest text-[#00AEEF] uppercase block mb-1">
                MANDATORY VENUE VERIFICATION
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                Documents Required at Registration Desk
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-slate-100 border border-slate-200 px-4 py-2 text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1.5">
              <span className="text-[#00AEEF]">✓</span> Principal&apos;s Nomination Letter
            </span>
            <span className="rounded-full bg-slate-100 border border-slate-200 px-4 py-2 text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1.5">
              <span className="text-[#00AEEF]">✓</span> College ID Card
            </span>
            <span className="rounded-full bg-slate-100 border border-slate-200 px-4 py-2 text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1.5">
              <span className="text-[#00AEEF]">✓</span> Aadhaar Card
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
