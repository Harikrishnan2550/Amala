export type TeamDetail = {
  participantOneName: string;
  participantOneContact: string;
  participantOneEmail: string;
  participantTwoName: string;
  participantTwoContact: string;
  participantTwoEmail: string;
};

export type ParticleItem = {
  top: string;
  left: string;
  size: number;
  delay: string;
  dur: string;
};

export type RoundItem = {
  number: string;
  title: string;
  desc: string;
  date?: string;
  time?: string;
  details?: string;
  icon: "online" | "write" | "connect" | "rapid" | "visual" | "buzz" | "finale";
};

export type PrizeFeature = {
  highlight: string;
  rest: string;
};

export type PrizeItem = {
  rank: string;
  title: string;
  subtitle: string;
  subtitleColor: string;
  prize: string;
  prizeTextColor: string;
  crestType: "gold" | "silver" | "bronze";
  ribbonBg: string;
  ribbonTabBg: string;
  auraGlow: string;
  iconColor: string;
  features: PrizeFeature[];
};

export type AdditionalPrizeItem = {
  icon: "star" | "mic" | "certificate";
  label: string;
  value: string;
};
