"use client";

import { Reveal } from "@/components/Reveal";

/**
 * Slide — Foundation context. 3 entities at most:
 *   - $ZOO Network — the regulated tokenization layer
 *   - Zoo Industries — the for-profit operating company (this round)
 *   - Zoo Labs — the 501(c)(3) parent
 *
 * Three colored cards mirror the entity hierarchy investors need to
 * understand (who they're funding, who owns IP, who benefits).
 */

const entities = [
  {
    label: "$ZOO Network",
    flag: "🇺🇸",
    headline: "Regulated tokenization rails",
    body:
      "Compliant on-chain settlement for GPU-backed AI infrastructure, via broker-dealer / ATS / transfer-agency partners.",
    color: "var(--brand-green)",
    text: "text-black",
  },
  {
    label: "Zoo Industries",
    headline: "For-profit front-end",
    body:
      "The product surface. Opens regulated access to digital securities, runs Zen5 inference, charges for compute usage, and routes proceeds through the protocol.",
    color: "var(--brand-magenta)",
    text: "text-white",
  },
  {
    label: "Zoo Labs",
    headline: "501(c)(3) Foundation",
    body:
      "Open-source commons + animal preservation. Houses governance, directs proceeds to wildlife, owns the IP commons.",
    color: "var(--brand-blue)",
    text: "text-white",
  },
];

export default function Foundation() {
  return (
    <section
      data-slide
      className="min-h-[100svh] flex items-center snap-start py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "color-mix(in oklab, var(--brand-yellow) 14%, transparent)",
      }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <Reveal>
          <span className="pill pill-rainbow text-xl sm:text-2xl md:text-3xl">
            Foundation
          </span>
          <h2 className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl">
            Three entities, one open AI mission.
          </h2>
        </Reveal>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {entities.map((e, i) => (
            <Reveal key={e.label} delay={i * 0.08} className="h-full">
              <div
                className={`h-full border-2 border-black p-5 sm:p-6 shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] transform-gpu flex flex-col ${e.text}`}
                style={{ background: e.color }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base sm:text-lg font-extrabold uppercase tracking-tight">
                    {e.label}
                  </span>
                  {e.flag && (
                    <span aria-label="USA" className="text-xl sm:text-2xl">
                      {e.flag}
                    </span>
                  )}
                </div>
                <div className="text-lg sm:text-xl font-extrabold mb-3 leading-tight">
                  {e.headline}
                </div>
                <p className="text-sm sm:text-base leading-relaxed flex-1">
                  {e.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
