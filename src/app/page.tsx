"use client";

import React, { useState, useEffect } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { WelcomePrizeAnnounceModal } from "@/components/WelcomePrizeAnnounceModal";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { PrizesSection } from "@/components/PrizesSection";
import { CollaboratorsSection } from "@/components/CollaboratorsSection";
import { AboutSection } from "@/components/AboutSection";
import { FormatSection } from "@/components/FormatSection";
import { RulesSection } from "@/components/RulesSection";
import { RegisterSection } from "@/components/RegisterSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { PageProgress } from "@/components/ui/PageProgress";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { HeroQuickForm } from "@/components/HeroQuickForm";

import { SmoothScroll } from "@/components/SmoothScroll";

export default function Home() {
  useReveal();
  const [heroFormOpen, setHeroFormOpen] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const openModal = () => setHeroFormOpen(true);
  const closeModal = () => setHeroFormOpen(false);
  const handlePreloaderDone = React.useCallback(() => setPreloaderDone(true), []);

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      ticking = false;
      const shouldShowWhatsApp = window.scrollY > window.innerHeight * 0.9;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? window.scrollY / scrollable : 0;

      setShowWhatsApp((prev) => (prev === shouldShowWhatsApp ? prev : shouldShowWhatsApp));
      setScrollProgress((prev) => (Math.abs(prev - nextProgress) < 0.002 ? prev : nextProgress));
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <SmoothScroll />
      {!preloaderDone && <Preloader onDone={handlePreloaderDone} />}
      <WelcomePrizeAnnounceModal preloaderDone={preloaderDone} onRegisterClick={openModal} />
      <Navbar onOpenModal={openModal} />
      <main>
        <HeroSection onOpenModal={openModal} />
        <MarqueeSection />

        <PrizesSection />
        <CollaboratorsSection />
        <AboutSection />
        <FormatSection />
        <RulesSection />
        <RegisterSection onOpenModal={openModal} />
        <ContactSection />
      </main>
      <Footer />
      <PageProgress progress={scrollProgress} />
      <WhatsAppFloat visible={showWhatsApp} />
      <HeroQuickForm open={heroFormOpen} onOpen={openModal} onClose={closeModal} showTrigger={false} />
    </>
  );
}
