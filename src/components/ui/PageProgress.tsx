import React from "react";

export function PageProgress({ progress }: { progress: number }) {
  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF1E4B] via-[#FF5E7E] to-[#FF1E4B] z-[100] transition-all duration-150 ease-out shadow-[0_0_12px_#FF1E4B]"
      style={{
        width: `${Math.min(100, Math.max(0, progress * 100))}%`,
        opacity: progress > 0.01 ? 1 : 0,
      }}
    />
  );
}
