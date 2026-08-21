import React from "react";

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 px-4 sm:px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo2.png"
            alt="Amala National Book Festival 2026 Logo"
            className="h-10 sm:h-12 object-contain"
            style={{ width: "auto", maxWidth: "180px" }}
          />
          <div className="h-6 w-px bg-slate-700 hidden sm:block" />
          <span className="font-display text-[#00AEEF] text-sm font-bold hidden sm:inline">
            Amala National Book Festival 2026
          </span>
        </div>

        <p className="text-xs tracking-wide text-center text-slate-400 font-medium">
          All India Inter-Collegiate Quiz Competition · Thrissur, Kerala
        </p>
        <p className="text-xs font-semibold text-slate-200">
          © 2026 Amala Book Festival. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
