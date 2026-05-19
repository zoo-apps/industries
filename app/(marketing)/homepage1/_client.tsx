"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import Ecosystem from "@/components/Ecosystem";
import ZooLabsNarrative from "@/components/ZooLabsNarrative";
import ServicesOverview from "@/components/ServicesOverview";
import ResearchHighlights from "@/components/ResearchHighlights";
import Leadership from "@/components/Leadership";
import TrustedBySection from "@/components/TrustedBySection";
import Contact from "@/components/Contact";
import { cn } from "@/lib/utils";

export default function PageClient() {
  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", smoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  return (
    // Each section is wrapped in <Parallax> so its inner content translates
    // on Y as the section moves through the viewport — creating depth
    // between sections without large empty paddings. Distance is varied so
    // adjacent sections move at slightly different rates (the eye reads
    // this as parallax layering). Hero is kept static — it's always at
    // the top, no scroll has happened yet, and the WebGPU-zebra composite
    // already has its own scale-in animation.
    <main className="relative">
      <Hero />
      <Ecosystem />
      <ZooLabsNarrative />
      <ServicesOverview />
      <ResearchHighlights />
      <Leadership />
      <TrustedBySection />
      <Contact />
    </main>
  );
}
