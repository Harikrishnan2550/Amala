"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/data/constants";

export function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      id="navbar"
      className="fixed top-3 sm:top-5 left-3 sm:left-6 right-3 sm:right-6 z-50 max-w-7xl mx-auto rounded-full bg-white/90 backdrop-blur-2xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
    >
      <nav className="relative px-5 sm:px-8 h-14 sm:h-16 flex items-center justify-between gap-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0 transition-transform hover:scale-105 gap-3 sm:gap-4 py-1 overflow-hidden"
        >
          {/* Amala Festival Brand Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/nav-logo.png"
            alt="Amala Book Festival Logo"
            style={{
              height: "38px",
              maxHeight: "44px",
              width: "auto",
              maxWidth: "160px",
              objectFit: "contain",
            }}
            className="h-8 sm:h-10 w-auto max-w-[130px] sm:max-w-[160px] object-contain shrink-0"
          />

          {/* Thin Vertical Separator */}
          <div className="h-7 sm:h-8 w-px bg-slate-300 shrink-0" />

          {/* Operation Toofan x Amala Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/toofan.png"
            alt="Operation Toofan x Amala"
            style={{
              height: "38px",
              maxHeight: "44px",
              width: "auto",
              maxWidth: "210px",
              objectFit: "contain",
            }}
            className="h-8 sm:h-10 w-auto max-w-[160px] sm:max-w-[210px] object-contain shrink-0"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7 lg:gap-8 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="font-accent text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-slate-800 hover:text-[#00AEEF] transition-all duration-300"
                id={`nav-${link.id}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — desktop only */}
        <div className="hidden md:block">
          <button
            id="nav-cta"
            onClick={onOpenModal}
            className="bg-[#00AEEF] hover:bg-[#0092C8] text-white font-extrabold uppercase tracking-wider hover:scale-[1.04] transition-all duration-300 shadow-[0_6px_20px_rgba(0,174,239,0.4)] !rounded-full !py-2.5 !px-6 !text-xs cursor-pointer"
          >
            Buy Ticket / Register
          </button>
        </div>

        {/* Hamburger */}
        <button
          id="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-full hover:bg-slate-100 transition-all opacity-60 hover:opacity-100 mr-4 sm:mr-10 md:mr-0"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-slate-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-slate-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-slate-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 mt-3 z-50 md:hidden rounded-3xl border border-white/60 bg-white/60 backdrop-blur-2xl shadow-2xl p-6 flex flex-col items-center justify-center">
          <div className="flex w-full max-w-xs flex-col items-center gap-4 text-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="font-accent text-base font-bold tracking-[0.14em] uppercase text-slate-900 transition-colors duration-200 hover:text-[#00AEEF]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="bg-[#00AEEF] hover:bg-[#0092C8] text-white font-extrabold uppercase tracking-wider mt-6 w-full max-w-xs text-center !rounded-full py-3 shadow-lg"
            onClick={() => { setMenuOpen(false); onOpenModal(); }}
          >
            Register Now
          </button>
        </div>
      )}
    </header>
  );
}
