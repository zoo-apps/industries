"use client";

import { Reveal } from "@/components/Reveal";
import site from "@/site.config";

/**
 * Section 7 of 8 — credibility numbers and team headline.
 * 5 numbers total: foundation status, papers, repos, models, contributors-share.
 */

const numbers: Array<{ v: string; l: string }> = [
  { v: "501(c)(3)", l: "Foundation parent" },
  { v: "130+", l: "Research papers" },
  { v: "727+", l: "OSS repos" },
  { v: "Zen5", l: "Models (live)" },
  { v: "25%", l: "Compute revenue → OSS" },
];

export default function TeamTraction() {
  return (
    <section
      data-slide
      className="min-h-[100svh] flex items-center snap-start py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "color-mix(in oklab, var(--brand-green) 14%, transparent)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
            Team &amp; traction
          </h2>
          <p className="mt-3 text-center text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            A decade of open-source AI research and infrastructure. Backed by
            the Zoo Labs Foundation.
          </p>
        </Reveal>

        {/* 5 stat tiles — strict 5 column desktop / 2 column tablet /
            stacked mobile. No images downloaded for this row. */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {numbers.map((n, i) => (
            <Reveal key={n.l} delay={i * 0.05} className="h-full">
              <div className="h-full border-2 border-black bg-white p-5 sm:p-6 shadow-[6px_6px_0_0_#000] text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight tabular-nums">
                  {n.v}
                </div>
                <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-black/65">
                  {n.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.35}>
          <p className="mt-10 sm:mt-12 text-center text-sm sm:text-base">
            <a
              href={site.links.huggingFace}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-4 hover:no-underline"
            >
              See the model lineup on HuggingFace →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
