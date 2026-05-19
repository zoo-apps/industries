"use client";

import { Reveal } from "@/components/Reveal";
import { SlideParallax } from "@/components/homepage2/SlideParallax";

/**
 * Section 2 of 8 — sets the scale of the opportunity in one glance.
 * Two-up layout: text + S&P quote on the left, big $113T number on the
 * right. Mobile collapses to a stack with the headline number first so
 * the punchline reads even before the supporting copy.
 *
 * Items: 1 paragraph + 1 quote + 1 headline number + 1 caption = 4.
 */
export default function OpportunitySnapshot() {
  return (
    <section
      data-slide
      className="min-h-[100svh] flex items-center snap-start py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "color-mix(in oklab, var(--brand-yellow) 14%, transparent)",
      }}
    >
      <SlideParallax className="max-w-6xl mx-auto w-full">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 border-2 border-black p-6 sm:p-8 md:p-10 bg-white shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000]">
            {/* Text + quote */}
            <div className="space-y-5 order-2 md:order-1">
              <p className="text-base md:text-lg font-medium leading-relaxed">
                Through{" "}
                <a
                  href="https://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:no-underline"
                >
                  
                </a>
                , ZOO gains a compliant path to tokenize and distribute
                GPU-backed AI infrastructure using broker-dealer, ATS,
                transfer agency, and blockchain settlement rails.
              </p>
              <blockquote className="border-l-4 border-black pl-4 italic text-sm md:text-base text-black/80">
                "While smaller, private equity has historically generated
                higher long-term net returns, often outpacing the S&amp;P 500
                over 10- and 20-year periods."
                <span className="block not-italic mt-2 text-xs md:text-sm font-semibold">
                  — Start Engine
                </span>
              </blockquote>
            </div>

            {/* Big number block */}
            <div className="order-1 md:order-2 flex flex-col justify-center md:items-end text-left md:text-right">
              <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none">
                $113T
              </div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-[0.18em] font-bold">
                Total addressable
              </div>
              <p className="mt-3 max-w-[20rem] text-sm md:text-base text-black/70">
                The private markets opportunity we can bring on chain.
              </p>
            </div>
          </div>
        </Reveal>
      </SlideParallax>
    </section>
  );
}
