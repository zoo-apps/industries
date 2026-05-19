"use client";

import { Reveal } from "@/components/Reveal";

/**
 * Market-cap slide. Three stacked elements:
 *
 *   1. Subhead — "the largest redistribution of wealth..."
 *   2. AI-native company table — black header bar + 5 rows with
 *      founder portraits + company logos + valuations on a rainbow
 *      gradient bg + black "Private AI at Public Scale" footer bar.
 *      The composite lives in /public/pe/ai-private-valuations.png so
 *      we ship one optimised image rather than re-rendering portraits
 *      and brand wordmarks at runtime.
 *   3. 6-tile asset-class grid — five private-asset TAMs + NVIDIA as
 *      the public-market comparable (so the framing reads "private
 *      AI is already valued like public mega-caps").
 */

const tiles: Array<{ v: string; l: string; sub?: string }> = [
  { v: "$1.75T", l: "Hedge funds" },
  { v: "$852B",  l: "Venture capital" },
  { v: "$1.2T",  l: "Private credit" },
  { v: "$134B",  l: "Real estate" },
  { v: "$159B",  l: "Infrastructure" },
  { v: "$5.38T", l: "NVIDIA", sub: "(publicly traded)" },
];

export default function AINativeCompanies() {
  return (
    <section
      data-slide
      className="min-h-[100svh] flex items-center snap-start py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "color-mix(in oklab, var(--brand-green) 14%, transparent)",
      }}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Subhead */}
        <Reveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] max-w-3xl">
            This will be the{" "}
            <span className="underline underline-offset-[6px] decoration-[3px]">
              largest redistribution of wealth the world has ever seen.
            </span>
          </h2>
        </Reveal>

        {/* AI-Native companies composite — black header bar + image + black footer bar */}
        <Reveal delay={0.1}>
          <div className="mt-10 sm:mt-14 border-2 border-black overflow-hidden shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000]">
            <div className="bg-black text-white px-5 sm:px-6 py-3 sm:py-4 text-center">
              <div className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.15em]">
                AI-native private companies are already valued like public mega-caps
              </div>
            </div>
            <img
              src="/pe/ai-private-valuations.png"
              alt="Five private AI companies and their valuations: SpaceX $1.75T, OpenAI $852B, Anthropic $1.2T, Databricks $134B, Stripe $159B — over a rainbow gradient with founder portraits and company wordmarks"
              loading="lazy"
              className="block w-full h-auto"
            />
            <div className="bg-black text-white px-5 sm:px-6 py-3 text-center">
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.22em] font-bold">
                Private AI · Public-market scale
              </div>
            </div>
          </div>
        </Reveal>

        {/* 6-tile asset-class TAM grid. NVIDIA tile is the public-market
            comparable — its black background calls out the difference
            (publicly traded vs the five private-only tiles). */}
        <Reveal delay={0.18}>
          <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {tiles.map((t) => {
              const isPublic = t.l === "NVIDIA";
              return (
                <div
                  key={t.l}
                  className={`p-3 sm:p-4 border-2 border-black text-center ${
                    isPublic ? "bg-black text-white" : "bg-white text-black"
                  }`}
                >
                  <div className="text-base sm:text-lg md:text-2xl font-extrabold tabular-nums">
                    {t.v}
                  </div>
                  <div className={`mt-1 text-[10px] sm:text-xs uppercase tracking-wider font-semibold ${
                    isPublic ? "text-white/85" : "text-black/70"
                  }`}>
                    {t.l}
                  </div>
                  {t.sub && (
                    <div className="text-[9px] sm:text-[10px] mt-0.5 italic text-white/65">
                      {t.sub}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
