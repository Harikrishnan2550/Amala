import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import { VisitTracker } from "@/components/VisitTracker";

export const metadata: Metadata = {
  title: "Amala National Book Festival 2026 | All India Inter-Collegiate Quiz Competition",
  description:
    "Join the Amala National Book Festival 2026 — All India Inter-Collegiate Quiz Competition. A prestigious literary quiz event open to college students across India. Register now to compete for glory and prizes.",
  keywords: [
    "Amala Book Festival 2026",
    "Inter-Collegiate Quiz",
    "All India Quiz Competition",
    "National Book Festival",
    "College Quiz 2026",
  ],
  icons: {
    icon: "/nav-logo.png",
    shortcut: "/nav-logo.png",
    apple: "/nav-logo.png",
  },
  openGraph: {
    title: "Amala National Book Festival 2026 | Quiz Competition",
    description:
      "All India Inter-Collegiate Quiz Competition 2026. Test your literary knowledge and compete with the best minds in the country.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/nav-logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/nav-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600;1,700&display=swap"
        />
      </head>
      <body className="min-h-screen bg-[#FAFAFC] text-slate-900 antialiased">
        <Suspense fallback={null}>
          <VisitTracker />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
