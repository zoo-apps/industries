"use client";

import { Reveal } from "@/components/Reveal";

/**
 * Editorial hero. Single column, classic feature-article proportions.
 * Drop cap on the lead paragraph; ornamental § divider beneath the
 * deck. Buttons sit below as understated underlined links + a single
 * filled CTA in wax-seal red.
 */
export default function Hero3() {
  return (
    <section className="px-6 sm:px-10 lg:px-16 pt-16 sm:pt-20 pb-20 sm:pb-28">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div
            className="text-[10px] sm:text-xs uppercase tracking-[0.32em] font-semibold mb-8"
            style={{ color: "rgba(26,19,8,0.55)" }}
          >
            The Cover Story
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-tight"
            style={{ fontWeight: 500 }}
          >
            Trillions in digital securities,{" "}
            <em className="italic">native on-chain.</em>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="mt-8 sm:mt-10 max-w-2xl text-lg sm:text-xl leading-[1.6]"
            style={{ color: "rgba(26,19,8,0.82)" }}
          >
            <p>
              <span
                className="float-left mr-2 -mt-2 text-[5.5rem] leading-[0.85] font-medium"
                style={{ color: "#7a2e2e" }}
              >
                Z
              </span>
              oo Industries is the for-profit front-end of Zoo Labs
              Foundation — opening regulated access to $113T in digital
              securities through an integrated liquidity protocol, with the
              Zen5 family of open AI models (built on DeepSeek 4 Pro and
              DS4 Flash) running on top.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div
            aria-hidden
            className="mt-12 sm:mt-14 text-center text-lg tracking-[0.5em]"
            style={{ color: "rgba(26,19,8,0.35)" }}
          >
            §
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="https://docs.zoo.ngo"
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
              href="https://zoo.ngo"
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
            <a
              href="/research"
              className="rounded text-sm sm:text-base font-semibold italic underline underline-offset-[6px] decoration-[1.5px]"
              style={{
                color: "#1a1308",
                textDecorationColor: "rgba(26,19,8,0.35)",
              }}
            >
              Read the research
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
