"use client";

export const VISITOR_STORAGE_KEY = "amala_visitor_id";

export function getOrCreateVisitorId() {
  if (typeof window === "undefined") {
    return null;
  }

  const existing = window.localStorage.getItem(VISITOR_STORAGE_KEY);
  if (existing) {
    return existing;
  }

  const generated =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `visitor-${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;

  window.localStorage.setItem(VISITOR_STORAGE_KEY, generated);

  return generated;
}
