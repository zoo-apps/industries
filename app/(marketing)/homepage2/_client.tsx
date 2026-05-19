"use client";

import { useEffect } from "react";
import Hero2 from "@/components/homepage2/Hero2";
import OpportunitySnapshot from "@/components/homepage2/OpportunitySnapshot";
import PathToValue from "@/components/homepage2/PathToValue";
import WhyNow from "@/components/homepage2/WhyNow";
import AINativeCompanies from "@/components/homepage2/AINativeCompanies";
import TheStack from "@/components/homepage2/TheStack";
import Foundation from "@/components/homepage2/Foundation";
import LeadershipSlide from "@/components/homepage2/LeadershipSlide";
import TeamTraction from "@/components/homepage2/TeamTraction";
import AccessProtocol from "@/components/homepage2/AccessProtocol";
import { SlideIndicator } from "@/components/homepage2/SlideIndicator";

/**
 * Canonical home — the slide-deck investor narrative.
 *
 * Scroll-snap is pinned onto ``document.documentElement`` while this
 * route is mounted (the body / html is the actual scroll container,
 * not ``<main>``). ``scroll-snap-type: y mandatory`` makes every stop
 * land on a slide boundary. We don't set ``scroll-snap-stop: always``
 * so a quick flick can still skip past slides — the snap is a guide,
 * not a jail.
 */
export default function PageClient() {
  useEffect(() => {
    const root = document.documentElement;
    const prev = {
      scrollSnapType: root.style.scrollSnapType,
      scrollPaddingTop: root.style.scrollPaddingTop,
      scrollBehavior: root.style.scrollBehavior,
    };
    root.style.scrollSnapType = "y mandatory";
    root.style.scrollPaddingTop = "5rem";
    root.style.scrollBehavior = "smooth";
    return () => {
      root.style.scrollSnapType = prev.scrollSnapType;
      root.style.scrollPaddingTop = prev.scrollPaddingTop;
      root.style.scrollBehavior = prev.scrollBehavior;
    };
  }, []);

  return (
    <>
      <SlideIndicator />
      <main className="scroll-smooth">
        <Hero2 />
        <OpportunitySnapshot />
        <PathToValue />
        <WhyNow />
        <AINativeCompanies />
        <TheStack />
        <Foundation />
        <LeadershipSlide />
        <TeamTraction />
        <AccessProtocol />
      </main>
    </>
  );
}
