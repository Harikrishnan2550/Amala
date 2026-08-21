import { ParticleItem, RoundItem, PrizeItem, AdditionalPrizeItem } from "@/types";

export const HERO_VIDEO_SRC = "/video-optimized.mp4";
export const WHATSAPP_LINK = "https://wa.me/919656193762";

export const HERO_PARTICLES: ParticleItem[] = [
  { top: "18%", left: "12%", size: 3, delay: "0s", dur: "5s" },
  { top: "35%", left: "25%", size: 2, delay: "1.2s", dur: "7s" },
  { top: "60%", left: "8%", size: 4, delay: "0.5s", dur: "6s" },
  { top: "75%", left: "20%", size: 2, delay: "2s", dur: "8s" },
  { top: "22%", left: "72%", size: 3, delay: "0.8s", dur: "5.5s" },
  { top: "50%", left: "80%", size: 2, delay: "1.8s", dur: "7.5s" },
  { top: "80%", left: "65%", size: 3, delay: "0.3s", dur: "6.5s" },
  { top: "10%", left: "50%", size: 2, delay: "1.5s", dur: "9s" },
  { top: "45%", left: "42%", size: 5, delay: "0.6s", dur: "4.5s" },
  { top: "88%", left: "35%", size: 2, delay: "2.5s", dur: "6s" },
];

export const NAV_LINKS = [
  { label: "Prizes", id: "prizes" },
  { label: "Partners", id: "collaborators" },
  { label: "About", id: "about" },
  { label: "Format", id: "format" },
  { label: "Rules", id: "rules" },
  { label: "Contact", id: "contact" },
];

export const ROUNDS: RoundItem[] = [
  {
    number: "01",
    title: "Online Preliminary Round",
    desc: "Online preliminary elimination round to select top qualifying college teams.",
    date: "6th September, 2026 (Sunday)",
    time: "10:00 AM to 7:00 PM",
    details: "30 questions in 30 minutes duration",
    icon: "online",
  },
  {
    number: "02",
    title: "Offline Semi-Final",
    desc: "Comprehensive written & stage semi-final prelims held on venue for qualified teams.",
    date: "24th September, 2026 (Thursday)",
    time: "9:00 AM onwards",
    icon: "write",
  },
  {
    number: "03",
    title: "Offline Grand Finale",
    desc: "High-stakes live stage grand finale determining the ultimate national quiz champions.",
    date: "24th September, 2026 (Thursday)",
    time: "12:05 PM onwards",
    icon: "rapid",
  },
];

export const PRIZES: PrizeItem[] = [
  {
    rank: "3rd",
    title: "THIRD",
    subtitle: "2ND RUNNER-UP PODIUM",
    subtitleColor: "text-slate-600",
    prize: "₹10,000",
    prizeTextColor: "text-white drop-shadow-md",
    crestType: "silver",
    ribbonBg: "bg-gradient-to-b from-slate-400 via-slate-500 to-slate-600 text-white shadow-lg ribbon-shine",
    ribbonTabBg: "bg-slate-700",
    auraGlow: "before:absolute before:-inset-1 before:rounded-[2.8rem] before:bg-slate-400/15 before:blur-xl before:-z-10",
    iconColor: "text-slate-600 bg-slate-100 border-slate-200",
    features: [
      { highlight: "Cash Award", rest: "of ₹10,000 for 2nd Runner-Up" },
      { highlight: "Bronze Trophy", rest: "+ Certificate of Excellence" },
      { highlight: "Stage Honors", rest: "& Finalist Presentation" },
      { highlight: "Certificate", rest: "of Excellence for Team" },
    ],
  },
  {
    rank: "1st",
    title: "FIRST",
    subtitle: "WINNER & CHAMPION",
    subtitleColor: "text-[#00AEEF]",
    prize: "₹30,000",
    prizeTextColor: "text-white drop-shadow-md",
    crestType: "gold",
    ribbonBg: "bg-gradient-to-b from-[#00AEEF] via-[#0096ce] to-[#007dae] text-white shadow-xl ribbon-shine",
    ribbonTabBg: "bg-[#006893]",
    auraGlow: "before:absolute before:-inset-2 before:rounded-[3rem] before:bg-[#00AEEF]/25 before:blur-2xl before:-z-10",
    iconColor: "text-[#00AEEF] bg-blue-50 border-blue-200",
    features: [
      { highlight: "Cash Award", rest: "of ₹30,000 for Winner Team" },
      { highlight: "Gold Trophy", rest: "+ Certificate of Excellence" },
      { highlight: "Crown Winner", rest: "Title & Main Stage Honors" },
      { highlight: "Certificate", rest: "of Excellence for Team" },
    ],
  },
  {
    rank: "2nd",
    title: "SECOND",
    subtitle: "RUNNER-UP TEAM",
    subtitleColor: "text-amber-600",
    prize: "₹20,000",
    prizeTextColor: "text-white drop-shadow-md",
    crestType: "bronze",
    ribbonBg: "bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 text-white shadow-lg ribbon-shine",
    ribbonTabBg: "bg-amber-700",
    auraGlow: "before:absolute before:-inset-1 before:rounded-[2.8rem] before:bg-amber-500/15 before:blur-xl before:-z-10",
    iconColor: "text-amber-600 bg-amber-50 border-amber-200",
    features: [
      { highlight: "Cash Award", rest: "of ₹20,000 for Runner-Up" },
      { highlight: "Silver Trophy", rest: "+ Certificate of Excellence" },
      { highlight: "Stage Honors", rest: "& Finalist Presentation" },
      { highlight: "Certificate", rest: "of Excellence for Team" },
    ],
  },
];

export const ADDITIONAL_PRIZES: AdditionalPrizeItem[] = [
  {
    icon: "star",
    label: "Consolation Prize",
    value: "₹1,000 each for 2 teams",
  },
];

export const REGISTRATION_API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://adminbf.yellowtooths.in"}/api/registrations`;
export const VISIT_TRACKING_API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://adminbf.yellowtooths.in"}/api/visits`;
export const REGISTRATION_FORM_EVENTS_API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://adminbf.yellowtooths.in"}/api/registration-form-events`;
