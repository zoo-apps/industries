"use client";

import { Reveal } from "@/components/Reveal";
import { SlideParallax } from "@/components/homepage2/SlideParallax";

/**
 * Section 3 of 8 — "The Path Zoo Unlocks".
 * Exactly 5 steps. Each step is a card with an emoji glyph (no PNGs to
 * download), a label, and a one-sentence description.
 *
 * Layout per breakpoint:
 *   - mobile (<sm)  : vertical stack with downward arrow between
 *   - tablet  (md)  : 2-column then 3-column, no arrows (visual rhythm
 *                     does the work)
 *   - desktop (lg+) : horizontal 5-up with rightward arrows
 */

const steps: Array<{ icon: string; label: string; body: string }> = [
  {
    icon: "🖥️",
    label: "GPU-backed AI infra",
    body: "High-demand, cash-generative compute assets.",
  },
  {
    icon: "🅩",
    label: "Tokenized private equity",
    body: "Economic exposure to private AI companies.",
  },
  {
    icon: "🛡️",
    label: "ATS trading",
    body: "Broker-dealer compliant trading in a regulated ATS.",
  },
  {
    icon: "📄",
    label: "Transfer agency",
    body: "Onboarding, cap table, and investor servicing.",
  },
  {
    icon: "🧊",
    label: "On-chain settlement",
    body: "Transparent, secure, near-instant settlement.",
  },
];

export default function PathToValue() {
  return (
    <section
      data-slide
      className="min-h-[100svh] flex items-center snap-start py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "color-mix(in oklab, var(--brand-cyan) 14%, transparent)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
            The path Zoo unlocks
          </h2>
        </Reveal>

        {/* Mobile / tablet: card stack/grid. Desktop: horizontal flow. */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {steps.map((step, i) => (
            <Reveal key={step.label} delay={i * 0.06} className="h-full">
              <div className="h-full border-2 border-black bg-white p-5 sm:p-6 shadow-[6px_6px_0_0_#000] flex flex-col">
                <div
                  aria-hidden
                  className="text-3xl sm:text-4xl mb-3 leading-none"
                >
                  {step.icon}
                </div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-black/60 mb-1">
                  Step {i + 1}
                </div>
                <div className="text-base sm:text-lg font-extrabold uppercase tracking-tight leading-tight">
                  {step.label}
                </div>
                <p className="mt-3 text-sm sm:text-[15px] text-black/75 leading-relaxed flex-1">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* One-line summary bar — anchors the 5 steps to a single
            takeaway ("broader access"). */}
        <Reveal delay={0.4}>
          <div className="mt-8 sm:mt-10 border-2 border-black bg-[var(--brand-yellow)] p-5 sm:p-6 shadow-[6px_6px_0_0_#000] flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
            <span aria-hidden className="text-2xl sm:text-3xl">
              👥
            </span>
            <div>
              <div className="text-base sm:text-lg font-extrabold uppercase tracking-tight">
                Broad investor access
              </div>
              <div className="text-sm sm:text-base text-black/80">
                Opening private market opportunities to more investors,
                globally.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
