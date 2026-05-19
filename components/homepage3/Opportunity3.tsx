"use client";

import { Reveal } from "@/components/Reveal";

export default function Opportunity3() {
  return (
    <section
      className="px-6 sm:px-10 lg:px-16 py-24 sm:py-32 border-t"
      style={{ borderColor: "rgba(26,19,8,0.18)" }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <Reveal className="md:col-span-7">
          <div
            className="text-[10px] sm:text-xs uppercase tracking-[0.32em] font-semibold mb-6"
            style={{ color: "rgba(26,19,8,0.55)" }}
          >
            Chapter I &nbsp;·&nbsp; The Opportunity
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight"
            style={{ fontWeight: 500 }}
          >
            Private markets are larger, more profitable, and almost entirely{" "}
            <em>inaccessible.</em>
          </h2>
          <p
            className="mt-6 sm:mt-8 text-base sm:text-lg leading-[1.7] max-w-prose"
            style={{ color: "rgba(26,19,8,0.82)" }}
          >
            Through , Zoo Industries gains a compliant path to
            tokenize and distribute GPU-backed AI infrastructure using
            broker-dealer, ATS, transfer agency, and blockchain settlement
            rails — opening private market opportunities to investors who
            have, for two generations, been priced out.
          </p>
          <blockquote
            className="mt-8 sm:mt-10 pl-5 italic text-base sm:text-lg max-w-prose"
            style={{
              borderLeft: "2px solid #7a2e2e",
              color: "rgba(26,19,8,0.7)",
            }}
          >
            "While smaller, private equity has historically generated higher
            long-term net returns, often outpacing the S&amp;P 500 over 10-
            and 20-year periods."
            <footer
              className="mt-3 not-italic text-xs sm:text-sm tracking-[0.2em] uppercase"
              style={{ color: "rgba(26,19,8,0.5)" }}
            >
              — Start Engine
            </footer>
          </blockquote>
        </Reveal>

        <Reveal
          delay={0.1}
          className="md:col-span-5 md:pt-1 md:border-l md:pl-12"
        >
          <div
            className="text-[10px] sm:text-xs uppercase tracking-[0.32em] font-semibold mb-5"
            style={{ color: "rgba(26,19,8,0.55)" }}
          >
            Addressable
          </div>
          <div
            className="text-7xl sm:text-8xl md:text-[9rem] leading-none tracking-tight tabular-nums"
            style={{ fontWeight: 500 }}
          >
            $113T
          </div>
          <p
            className="mt-6 text-sm sm:text-base leading-[1.7] max-w-xs"
            style={{ color: "rgba(26,19,8,0.7)" }}
          >
            The private markets opportunity Zoo can bring on chain — across
            hedge funds, venture capital, private credit, real estate, and
            infrastructure.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
