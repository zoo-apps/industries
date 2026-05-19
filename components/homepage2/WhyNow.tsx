"use client";

import { Reveal } from "@/components/Reveal";

/**
 * Section 4 of 8 — three macro tailwinds. Strictly 3 items.
 * Mobile: stacked. Tablet/desktop: 3 columns. No images — emoji
 * glyphs keep download weight at zero for this section.
 */

const reasons: Array<{ icon: string; label: string; body: string }> = [
  {
    icon: "📈",
    label: "AI infrastructure demand is exploding",
    body: "Compute is the new oil of the digital economy.",
  },
  {
    icon: "🏛️",
    label: "Private valuations are reaching public-market scale",
    body:
      "Top private AI companies are already worth hundreds of billions to trillions.",
  },
  {
    icon: "🛡️",
    label: "Tokenization rails are finally mature",
    body:
      "Regulation, compliance, and infrastructure are aligning for mainstream access.",
  },
];

export default function WhyNow() {
  return (
    <section
      data-slide
      className="min-h-[100svh] flex items-center snap-start py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "color-mix(in oklab, var(--brand-magenta) 12%, transparent)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
            Why now
          </h2>
        </Reveal>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {reasons.map((reason, i) => (
            <Reveal key={reason.label} delay={i * 0.08} className="h-full">
              <div className="h-full border-2 border-black bg-white p-5 sm:p-6 shadow-[6px_6px_0_0_#000] flex flex-col">
                <span
                  aria-hidden
                  className="text-3xl sm:text-4xl mb-4 leading-none"
                >
                  {reason.icon}
                </span>
                <div className="text-base sm:text-lg font-extrabold uppercase tracking-tight leading-snug">
                  {reason.label}
                </div>
                <p className="mt-3 text-sm sm:text-[15px] text-black/75 leading-relaxed flex-1">
                  {reason.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
