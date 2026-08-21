import React from "react";

export function PodiumCrestIcon({ type, className }: { type: "gold" | "silver" | "bronze"; className?: string }) {
  if (type === "gold") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" fill="currentColor" fillOpacity="0.25" />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
        <circle cx="6" cy="17" r="1" fill="currentColor" />
        <circle cx="18" cy="17" r="1" fill="currentColor" />
        <path d="M5 20h14" />
      </svg>
    );
  }
  if (type === "silver") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11" />
        <path d="M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" fill="currentColor" fillOpacity="0.25" />
        <circle cx="12" cy="7" r="5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11" />
      <circle cx="12" cy="7" r="5" fill="currentColor" fillOpacity="0.25" />
      <path d="M12 4.5v5M9.5 7h5" />
    </svg>
  );
}

export function FeaturePremiumIcon({ index, className }: { index: number; className?: string }) {
  const icons = [
    <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>,
    <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.45 1-1 1H8v4h8v-4h-1c-.55 0-1-.45-1-1v-2.34" />
      <path d="M18 4H6v7a6 6 0 0 0 12 0V4z" />
    </svg>,
    <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
      <path d="M5 20h14" />
    </svg>,
    <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="22" />
    </svg>,
    <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z" />
      <line x1="12" y1="6" x2="12" y2="18" strokeDasharray="2 2" />
    </svg>,
    <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>,
  ];
  return icons[index % icons.length];
}

export function HeroCalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="hero-pill-icon hero-pill-icon--calendar" aria-hidden="true">
      <rect x="4.5" y="6.5" width="15" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 4.5V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M16 4.5V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M4.5 10H19.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="9" cy="14.5" r="1.1" fill="currentColor" />
      <circle cx="12" cy="14.5" r="1.1" fill="currentColor" className="hero-pill-icon__pulse" />
      <circle cx="15" cy="14.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function HeroFeeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="hero-pill-icon hero-pill-icon--coin" aria-hidden="true">
      <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 8.2V15.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M14.4 9.8C14 9.1 13.1 8.7 12 8.7C10.7 8.7 9.8 9.3 9.8 10.2C9.8 11.1 10.7 11.5 12.1 11.8C13.8 12.2 14.8 12.8 14.8 14C14.8 15.1 13.8 15.9 12.3 16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HeroTeamIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="hero-pill-icon hero-pill-icon--team" aria-hidden="true">
      <circle cx="9" cy="9.2" r="2.7" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="15.5" cy="10.4" r="2.1" stroke="currentColor" strokeWidth="1.5" opacity="0.95" />
      <path d="M4.8 18.5C5.5 15.9 7.5 14.6 9.9 14.6C12.4 14.6 14.5 15.9 15.1 18.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M14.2 17.7C14.7 16.2 16 15.4 17.6 15.4C19.1 15.4 20.2 16.1 20.7 17.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.95" />
    </svg>
  );
}

export function AboutVenueIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="hero-pill-icon hero-pill-icon--pin" aria-hidden="true">
      <path d="M12 20.2C15.2 16.4 17 13.7 17 10.9C17 8 14.8 5.8 12 5.8C9.2 5.8 7 8 7 10.9C7 13.7 8.8 16.4 12 20.2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="10.8" r="1.9" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function AboutEligibilityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="hero-pill-icon hero-pill-icon--building" aria-hidden="true">
      <path d="M5.5 19.5V6.5L12 4.5L18.5 6.5V19.5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M3.8 19.5H20.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M9 9.2H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 9.2H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 9.2H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 12.6H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 12.6H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 12.6H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function AboutProofIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="hero-pill-icon hero-pill-icon--document" aria-hidden="true">
      <path d="M8 4.8H13.8L17.2 8.2V18.2C17.2 19 16.5 19.7 15.7 19.7H8C7.2 19.7 6.5 19 6.5 18.2V6.3C6.5 5.5 7.2 4.8 8 4.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M13.5 4.9V8.5H17.1" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9 11.2H14.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M9 14.3H13.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function AboutIcon({ type }: { type: "date" | "venue" | "team" | "eligibility" | "deadline" | "fee" }) {
  switch (type) {
    case "date":
      return <HeroCalendarIcon />;
    case "venue":
      return <AboutVenueIcon />;
    case "team":
      return <HeroTeamIcon />;
    case "eligibility":
      return <AboutEligibilityIcon />;
    case "deadline":
      return <AboutProofIcon />;
    case "fee":
      return <HeroFeeIcon />;
  }
}

export function FormatIcon({ type }: { type: "online" | "write" | "connect" | "rapid" | "visual" | "buzz" | "finale" }) {
  const common = "hero-pill-icon text-[#B8860B]";

  switch (type) {
    case "online":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${common} hero-pill-icon--document`} aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M3.5 12H20.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M3.5 6.5H20.5" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <path d="M3.5 17.5H20.5" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <path d="M12 3.5C14.5 6.5 16 9.5 16 12C16 14.5 14.5 17.5 12 20.5C9.5 17.5 8 14.5 8 12C8 9.5 9.5 6.5 12 3.5Z" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "write":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${common} hero-pill-icon--document`} aria-hidden="true">
          <path d="M7 5.2H14.8L18 8.4V18.2C18 19 17.3 19.7 16.5 19.7H7C6.2 19.7 5.5 19 5.5 18.2V6.7C5.5 5.9 6.2 5.2 7 5.2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M14.4 5.3V8.7H17.8" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M8.8 11H14.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M8.8 14.1H12.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "connect":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${common} hero-pill-icon--team`} aria-hidden="true">
          <circle cx="7.2" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="16.8" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="16.8" cy="16" r="2.2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M9.2 11.1L14.5 8.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M9.2 12.9L14.5 15.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "rapid":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${common} hero-pill-icon--coin`} aria-hidden="true">
          <path d="M13.1 3.8L6.9 12.1H11.2L10.7 20.2L17.1 11.9H12.8L13.1 3.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      );
    case "visual":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${common} hero-pill-icon--calendar`} aria-hidden="true">
          <rect x="4.8" y="6.3" width="14.4" height="11.4" rx="2.4" stroke="currentColor" strokeWidth="1.7" />
          <path d="M8.4 17.4L11 13.9L13.2 15.7L16 12.1L19.2 17.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9.3" cy="10.4" r="1.1" fill="currentColor" />
        </svg>
      );
    case "buzz":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${common} hero-pill-icon--pin`} aria-hidden="true">
          <path d="M9 17.5H15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M10.2 17.5V19C10.2 19.8 10.8 20.4 11.6 20.4H12.4C13.2 20.4 13.8 19.8 13.8 19V17.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M8.5 10.5C8.5 8.3 10.3 6.5 12.5 6.5C14.7 6.5 16.5 8.3 16.5 10.5C16.5 12.2 15.6 13.4 14.5 14.4V15.6H10.5V14.4C9.4 13.4 8.5 12.2 8.5 10.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M7 8.7L5.7 7.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M18 8.7L19.3 7.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "finale":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${common} hero-pill-icon--coin`} aria-hidden="true">
          <path d="M8 5.3H16V8.1C16 10.3 14.2 12.1 12 12.1C9.8 12.1 8 10.3 8 8.1V5.3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M6 6.7H8V8.1C8 9.8 6.7 11.1 5 11.1H4.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M18 6.7H16V8.1C16 9.8 17.3 11.1 19 11.1H19.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M12 12.1V15.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M9.4 18.7H14.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M10.2 15.1H13.8V18.7H10.2V15.1Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function PrizeIcon({ type, className }: { type: "gold" | "silver" | "bronze" | "star" | "mic" | "certificate"; className?: string }) {
  const common = className ?? "w-5 h-5 text-[#14241B]";

  switch (type) {
    case "gold":
    case "silver":
    case "bronze":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M9 4.8H15V8.2L12 11L9 8.2V4.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <circle cx="12" cy="15.2" r="4.2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M12 13.3V17.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M12 4.7L13.9 8.6L18.2 9.2L15.1 12.2L15.8 16.5L12 14.5L8.2 16.5L8.9 12.2L5.8 9.2L10.1 8.6L12 4.7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      );
    case "mic":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <rect x="9.3" y="4.8" width="5.4" height="8.8" rx="2.7" stroke="currentColor" strokeWidth="1.7" />
          <path d="M7.2 11.8C7.2 14.4 9.3 16.4 12 16.4C14.7 16.4 16.8 14.4 16.8 11.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M12 16.4V19.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M9.5 19.2H14.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "certificate":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <rect x="5.2" y="6" width="13.6" height="10.4" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M8.2 9.3H15.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M8.2 12.3H13.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M9.2 16.3V19.3L12 17.8L14.8 19.3V16.3" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function ContactIcon({ type }: { type: "email" | "phone" | "venue" }) {
  const common = "hero-pill-icon text-[#B8860B]";

  switch (type) {
    case "email":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${common} hero-pill-icon--document`} aria-hidden="true">
          <rect x="4.8" y="6.4" width="14.4" height="11.2" rx="2.3" stroke="currentColor" strokeWidth="1.7" />
          <path d="M5.8 8L11.2 12.1C11.7 12.5 12.3 12.5 12.8 12.1L18.2 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${common} hero-pill-icon--coin`} aria-hidden="true">
          <path d="M8 5.8L10 9.2L8.7 10.8C9.5 12.5 10.9 14 12.6 14.8L14.2 13.5L17.6 15.5L16.5 18.1C16.2 18.7 15.5 19 14.8 18.9C9.8 18.1 5.9 14.2 5.1 9.2C5 8.5 5.3 7.8 5.9 7.5L8 5.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      );
    case "venue":
      return <AboutVenueIcon />;
  }
}

export function VibrationArcs({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-0.5 opacity-70 pointer-events-none select-none ${className}`}>
      {Array.from({ length: 9 }).map((_, i) => (
        <span
          key={i}
          className="inline-block text-3xl sm:text-5xl font-black text-[#FF1E4B] tracking-[-0.35em] leading-none"
          style={{ opacity: 0.2 + i * 0.09 }}
        >
          (
        </span>
      ))}
      <span className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#FF1E4B] ml-2 shadow-[0_0_15px_#FF1E4B] shrink-0" />
    </div>
  );
}
