"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { VISIT_TRACKING_API_URL } from "@/data/constants";
import { getOrCreateVisitorId } from "@/lib/visitorTracking";

const VISIT_DEDUPE_KEY = "amala_last_tracked_visit";
const VISIT_DEDUPE_WINDOW_MS = 5000;

export function VisitTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTrackedRef = useRef<string | null>(null);
  const search = searchParams.toString();

  useEffect(() => {
    const anonymousId = getOrCreateVisitorId();
    if (!anonymousId || !pathname) {
      return;
    }

    const path = search ? `${pathname}?${search}` : pathname;
    const dedupeToken = `${anonymousId}:${path}`;

    if (lastTrackedRef.current === dedupeToken) {
      return;
    }

    const lastTrackedRaw = window.sessionStorage.getItem(VISIT_DEDUPE_KEY);
    if (lastTrackedRaw) {
      try {
        const lastTracked = JSON.parse(lastTrackedRaw) as { token?: string; timestamp?: number };
        if (
          lastTracked.token === dedupeToken &&
          typeof lastTracked.timestamp === "number" &&
          Date.now() - lastTracked.timestamp < VISIT_DEDUPE_WINDOW_MS
        ) {
          lastTrackedRef.current = dedupeToken;
          return;
        }
      } catch {
        window.sessionStorage.removeItem(VISIT_DEDUPE_KEY);
      }
    }

    const payload = {
      anonymous_id: anonymousId,
      path,
      full_url: window.location.href,
      referrer: document.referrer || null,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || null,
      language: navigator.language || null,
      screen_width: window.screen.width || null,
      screen_height: window.screen.height || null,
      meta: {
        title: document.title || null,
        platform: navigator.platform || null,
        hostname: window.location.hostname || null,
      },
    };

    lastTrackedRef.current = dedupeToken;
    window.sessionStorage.setItem(
      VISIT_DEDUPE_KEY,
      JSON.stringify({ token: dedupeToken, timestamp: Date.now() })
    );

    void fetch(VISIT_TRACKING_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {
      lastTrackedRef.current = null;
      window.sessionStorage.removeItem(VISIT_DEDUPE_KEY);
    });
  }, [pathname, search]);

  return null;
}
