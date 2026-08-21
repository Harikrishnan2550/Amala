import React from "react";

export function FestivalBrandBadge({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-3 mb-2">
      <span className="w-8 h-[3px] bg-[#FF1E4B] rounded-full inline-block shrink-0 shadow-[0_0_12px_#FF1E4B]" />
      <span className="font-sans text-xs font-bold tracking-[0.18em] uppercase text-[#FF1E4B]">
        {label}
      </span>
    </div>
  );
}
