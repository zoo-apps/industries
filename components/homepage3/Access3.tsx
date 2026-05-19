"use client";

import { Reveal } from "@/components/Reveal";
import site from "@/site.config";

export default function Access3() {
  return (
    <section
      className="px-6 sm:px-10 lg:px-16 py-24 sm:py-32 border-t"
      style={{ borderColor: "rgba(26,19,8,0.18)" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <div
            className="text-[10px] sm:text-xs uppercase tracking-[0.32em] font-semibold mb-6"
            style={{ color: "rgba(26,19,8,0.55)" }}
          >
            Chapter VIII &nbsp;·&nbsp; The Invitation
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight"
            style={{ fontWeight: 500 }}
          >
            The open AI economy is on-chain.{" "}
            <em>Walk in.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p
            className="mt-8 sm:mt-10 max-w-2xl mx-auto text-base sm:text-lg leading-[1.7]"
            style={{ color: "rgba(26,19,8,0.72)" }}
          >
            Zoo Industries opens regulated access to trillions in digital
            securities through an integrated liquidity protocol — and runs
            the Zen5 model family on top of that infrastructure.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <a
              href={site.links.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full inline-flex items-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold transition-colors"
              style={{
                backgroundColor: "#7a2e2e",
                color: "#f5efe0",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#5e2222";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#7a2e2e";
              }}
            >
              Open the protocol <span aria-hidden>→</span>
            </a>
            <a
              href={site.links.platform}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded text-sm sm:text-base font-semibold italic underline underline-offset-[6px] decoration-[1.5px]"
              style={{
                color: "#1a1308",
                textDecorationColor: "rgba(26,19,8,0.35)",
              }}
            >
              Try Zen AI
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <div
            aria-hidden
            className="mt-16 sm:mt-20 text-center text-base tracking-[0.7em]"
            style={{ color: "rgba(26,19,8,0.3)" }}
          >
            ✦
          </div>
        </Reveal>
      </div>
    </section>
  );
}
