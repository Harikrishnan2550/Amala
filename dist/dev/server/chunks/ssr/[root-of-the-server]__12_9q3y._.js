module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/src/components/VisitTracker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VisitTracker",
    ()=>VisitTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$visitorTracking$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/visitorTracking.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const VISIT_DEDUPE_KEY = "amala_last_tracked_visit";
const VISIT_DEDUPE_WINDOW_MS = 5000;
function VisitTracker() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const lastTrackedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const search = searchParams.toString();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const anonymousId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$visitorTracking$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrCreateVisitorId"])();
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
                const lastTracked = JSON.parse(lastTrackedRaw);
                if (lastTracked.token === dedupeToken && typeof lastTracked.timestamp === "number" && Date.now() - lastTracked.timestamp < VISIT_DEDUPE_WINDOW_MS) {
                    lastTrackedRef.current = dedupeToken;
                    return;
                }
            } catch  {
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
                hostname: window.location.hostname || null
            }
        };
        lastTrackedRef.current = dedupeToken;
        window.sessionStorage.setItem(VISIT_DEDUPE_KEY, JSON.stringify({
            token: dedupeToken,
            timestamp: Date.now()
        }));
        void fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VISIT_TRACKING_API_URL"], {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
            keepalive: true
        }).catch(()=>{
            lastTrackedRef.current = null;
            window.sessionStorage.removeItem(VISIT_DEDUPE_KEY);
        });
    }, [
        pathname,
        search
    ]);
    return null;
}
}),
"[project]/src/data/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ADDITIONAL_PRIZES",
    ()=>ADDITIONAL_PRIZES,
    "HERO_PARTICLES",
    ()=>HERO_PARTICLES,
    "HERO_VIDEO_SRC",
    ()=>HERO_VIDEO_SRC,
    "NAV_LINKS",
    ()=>NAV_LINKS,
    "PRIZES",
    ()=>PRIZES,
    "REGISTRATION_API_URL",
    ()=>REGISTRATION_API_URL,
    "REGISTRATION_FORM_EVENTS_API_URL",
    ()=>REGISTRATION_FORM_EVENTS_API_URL,
    "ROUNDS",
    ()=>ROUNDS,
    "VISIT_TRACKING_API_URL",
    ()=>VISIT_TRACKING_API_URL,
    "WHATSAPP_LINK",
    ()=>WHATSAPP_LINK
]);
const HERO_VIDEO_SRC = "/video-optimized.mp4";
const WHATSAPP_LINK = "https://wa.me/919656193762";
const HERO_PARTICLES = [
    {
        top: "18%",
        left: "12%",
        size: 3,
        delay: "0s",
        dur: "5s"
    },
    {
        top: "35%",
        left: "25%",
        size: 2,
        delay: "1.2s",
        dur: "7s"
    },
    {
        top: "60%",
        left: "8%",
        size: 4,
        delay: "0.5s",
        dur: "6s"
    },
    {
        top: "75%",
        left: "20%",
        size: 2,
        delay: "2s",
        dur: "8s"
    },
    {
        top: "22%",
        left: "72%",
        size: 3,
        delay: "0.8s",
        dur: "5.5s"
    },
    {
        top: "50%",
        left: "80%",
        size: 2,
        delay: "1.8s",
        dur: "7.5s"
    },
    {
        top: "80%",
        left: "65%",
        size: 3,
        delay: "0.3s",
        dur: "6.5s"
    },
    {
        top: "10%",
        left: "50%",
        size: 2,
        delay: "1.5s",
        dur: "9s"
    },
    {
        top: "45%",
        left: "42%",
        size: 5,
        delay: "0.6s",
        dur: "4.5s"
    },
    {
        top: "88%",
        left: "35%",
        size: 2,
        delay: "2.5s",
        dur: "6s"
    }
];
const NAV_LINKS = [
    {
        label: "Prizes",
        id: "prizes"
    },
    {
        label: "Partners",
        id: "collaborators"
    },
    {
        label: "About",
        id: "about"
    },
    {
        label: "Format",
        id: "format"
    },
    {
        label: "Rules",
        id: "rules"
    },
    {
        label: "Contact",
        id: "contact"
    }
];
const ROUNDS = [
    {
        number: "01",
        title: "Online Preliminary Round",
        desc: "Online preliminary elimination round to select top qualifying college teams.",
        date: "6th September, 2026 (Sunday)",
        time: "10:00 AM to 7:00 PM",
        details: "30 questions in 30 minutes duration",
        icon: "online"
    },
    {
        number: "02",
        title: "Offline Semi-Final",
        desc: "Comprehensive written & stage semi-final prelims held on venue for qualified teams.",
        date: "24th September, 2026 (Thursday)",
        time: "9:00 AM onwards",
        icon: "write"
    },
    {
        number: "03",
        title: "Offline Grand Finale",
        desc: "High-stakes live stage grand finale determining the ultimate national quiz champions.",
        date: "24th September, 2026 (Thursday)",
        time: "12:05 PM onwards",
        icon: "rapid"
    }
];
const PRIZES = [
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
            {
                highlight: "Cash Award",
                rest: "of ₹10,000 for 2nd Runner-Up"
            },
            {
                highlight: "Bronze Trophy",
                rest: "+ Certificate of Excellence"
            },
            {
                highlight: "Stage Honors",
                rest: "& Finalist Presentation"
            },
            {
                highlight: "Certificate",
                rest: "of Excellence for Team"
            }
        ]
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
            {
                highlight: "Cash Award",
                rest: "of ₹30,000 for Winner Team"
            },
            {
                highlight: "Gold Trophy",
                rest: "+ Certificate of Excellence"
            },
            {
                highlight: "Crown Winner",
                rest: "Title & Main Stage Honors"
            },
            {
                highlight: "Certificate",
                rest: "of Excellence for Team"
            }
        ]
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
            {
                highlight: "Cash Award",
                rest: "of ₹20,000 for Runner-Up"
            },
            {
                highlight: "Silver Trophy",
                rest: "+ Certificate of Excellence"
            },
            {
                highlight: "Stage Honors",
                rest: "& Finalist Presentation"
            },
            {
                highlight: "Certificate",
                rest: "of Excellence for Team"
            }
        ]
    }
];
const ADDITIONAL_PRIZES = [
    {
        icon: "star",
        label: "Consolation Prize",
        value: "₹1,000 each for 2 teams"
    }
];
const REGISTRATION_API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://adminbf.yellowtooths.in"}/api/registrations`;
const VISIT_TRACKING_API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://adminbf.yellowtooths.in"}/api/visits`;
const REGISTRATION_FORM_EVENTS_API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://adminbf.yellowtooths.in"}/api/registration-form-events`;
}),
"[project]/src/lib/visitorTracking.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VISITOR_STORAGE_KEY",
    ()=>VISITOR_STORAGE_KEY,
    "getOrCreateVisitorId",
    ()=>getOrCreateVisitorId
]);
"use client";
const VISITOR_STORAGE_KEY = "amala_visitor_id";
function getOrCreateVisitorId() {
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    //TURBOPACK unreachable
    ;
    const existing = undefined;
    const generated = undefined;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__12_9q3y._.js.map