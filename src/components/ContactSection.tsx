import React from "react";
import { FestivalBrandBadge } from "@/components/ui/FestivalBrandBadge";
import { ContactIcon } from "@/components/Icons";

export function ContactSection() {
  return (
    <section id="contact" className="content-visibility-section relative overflow-hidden bg-white text-slate-900 px-4 py-20 sm:px-6 sm:py-28 border-t border-slate-200">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="mb-4 reveal flex justify-center">
            <FestivalBrandBadge label="GET IN TOUCH" />
          </div>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold text-slate-900 tracking-tight leading-tight reveal delay-100">
            Contact &amp; <span className="font-serif italic font-normal text-[#00AEEF]">Venue Info.</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mt-4 reveal delay-200">
            Have questions about rules, team registration, or travel? Our organizing team is here to assist.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Email Queries */}
          <div className="reveal delay-100 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 text-center shadow-sm hover:border-[#00AEEF] hover:shadow-md transition-all flex flex-col items-center justify-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#00AEEF]">
              <ContactIcon type="email" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Email Queries</h3>
            <p className="text-xs text-slate-500 mb-4 max-w-[220px] mx-auto">Send registration or participation questions</p>

            <div className="w-full border-t border-slate-200/80 pt-4">
              <p className="text-[0.68rem] text-slate-500 font-medium mb-1 uppercase tracking-wider">Official Email</p>
              <a href="mailto:library@amalaims.org" className="text-sm font-extrabold text-[#00AEEF] hover:underline block">
                library@amalaims.org
              </a>
            </div>
          </div>

          {/* Card 2: Library Helplines */}
          <div className="reveal delay-200 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 text-center shadow-sm hover:border-[#00AEEF] hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#00AEEF]">
                <ContactIcon type="phone" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Library Helplines</h3>
              <p className="text-xs text-slate-500 mb-3">Event Organizing Coordinators</p>
            </div>

            <div className="border-t border-slate-200/80 pt-3 space-y-2.5">
              <div>
                <p className="text-xs font-bold text-slate-900">Ms. Gladis George C</p>
                <p className="text-[0.68rem] text-slate-500 font-medium">Senior Librarian</p>
                <a href="tel:+919656193762" className="text-xs font-extrabold text-[#00AEEF] hover:underline inline-flex items-center justify-center gap-1 mt-0.5">
                  📞 +91-9656193762
                </a>
              </div>

              <div className="border-t border-slate-200/50 pt-2">
                <p className="text-xs font-bold text-slate-900">Ms. Deepa C G</p>
                <p className="text-[0.68rem] text-slate-500 font-medium">Associate Librarian</p>
                <a href="tel:+919497739417" className="text-xs font-extrabold text-[#00AEEF] hover:underline inline-flex items-center justify-center gap-1 mt-0.5">
                  📞 +91-9497739417
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Event Venue */}
          <a
            href="https://maps.google.com/?q=Amala+Institute+of+Medical+Sciences+Thrissur"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal delay-300 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 text-center shadow-sm hover:border-[#00AEEF] hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col items-center justify-center group cursor-pointer"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-colors">
              <ContactIcon type="venue" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900 mb-1 group-hover:text-[#00AEEF] transition-colors">Event Venue</h3>
            <p className="text-xs text-slate-500 mb-4 max-w-[220px] mx-auto">Amala Institute of Medical Sciences</p>

            <div className="w-full border-t border-slate-200/80 pt-4">
              <p className="text-[0.68rem] text-slate-500 font-medium mb-1 uppercase tracking-wider">Campus Location</p>
              <p className="text-xs font-extrabold text-slate-900 group-hover:text-[#00AEEF] leading-snug transition-colors">
                Amala Nagar, Thrissur<br />Kerala 680555
              </p>
              <span className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-blue-50 border border-[#00AEEF]/30 text-[#00AEEF] text-[0.72rem] font-bold group-hover:bg-[#00AEEF] group-hover:text-white transition-all shadow-xs">
                Open in Google Maps ↗
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
