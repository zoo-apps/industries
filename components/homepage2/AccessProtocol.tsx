"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

/**
 * Closing slide — the call to enter the protocol.
 *
 * Not a fundraising ask. This is positioned as the action a visitor
 * takes after reading the narrative: open the liquidity protocol, try
 * the Zen AI app, or read the research. The footer compliance line is
 * kept (regulated path via ) so the page reads as the
 * for-profit front-end of a charitable foundation, not a pitch deck.
 */
export default function AccessProtocol() {
  return (
    <section
      id="access"
      data-slide
      className="min-h-[100svh] flex items-center snap-start py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "color-mix(in oklab, var(--brand-magenta) 16%, transparent)",
      }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <Reveal>
          <div className="relative border-2 border-black bg-[var(--brand-magenta)] text-black p-8 sm:p-10 md:p-14 shadow-[6px_6px_0_0_#000] md:shadow-[12px_12px_0_0_#000] text-center transform-gpu">
            <span className="inline-block mb-5 px-3 py-1 bg-black text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.18em]">
              Open access · On-chain
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight">
              The open AI economy is on-chain.
            </h2>
            <p className="mt-5 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-medium leading-relaxed">
              Zoo Industries opens regulated access to trillions in digital
              securities through an integrated liquidity protocol — and runs
              the Zen5 model family on top of that infrastructure. Every
              transaction settles natively on chain. Every model ships open.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
              <a
                href="https://docs.zoo.ngo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className="w-full sm:w-auto btn-brutalist bg-white text-base sm:text-lg"
                >
                  Open the protocol
                </motion.button>
              </a>
              <a
                href="https://zoo.ngo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className="w-full sm:w-auto btn-brutalist bg-black text-white text-base sm:text-lg"
                >
                  Try Zen AI
                </motion.button>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 text-center text-xs sm:text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Digital securities are offered through{" "}
            <a
              href="https://"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:no-underline"
            >
              
            </a>
            , a SEC-registered broker-dealer and ATS. Zoo Labs Foundation is a
            501(c)(3) tax-exempt non-profit (EIN 88-3538992). Zoo Industries is
            its for-profit operating front-end.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
