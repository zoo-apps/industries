"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import site from "@/site.config";
import CoinScene from "@/components/homepage2/CoinScene";

/**
 * Hero — slide 1.
 *
 * Centred single-column composition. The mascot/zoo composite is gone;
 * in its place a full-bleed SVG network animates softly behind the
 * type. Reads as "decentralized AI graph" without forcing a literal
 * image down the visitor's throat.
 *
 * Scroll-linked drift on the entire content block: as the hero exits
 * the viewport the headline rises 60 px and fades to 0.4 opacity, so
 * the page hands off to the next slide instead of cutting hard.
 *
 * Only ``transform`` and ``opacity`` animate. Both compositor-safe,
 * GPU-accelerated. ``prefers-reduced-motion`` short-circuits the
 * motion via ``useReducedMotion``.
 */
export default function Hero2() {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0.4]);

  return (
    <section
      ref={ref}
      data-slide
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden snap-start px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:py-20"
    >
      {/* 3D AI-coin backdrop. Each model / family is a floating coin
          in CSS-3D, connected by hairline edges. The whole stack is
          ``filter: blur(...)``-ed inside CoinScene itself so this hero
          text in the next layer reads sharply on top. */}
      <CoinScene />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-5xl text-center transform-gpu"
      >
        {/* Eyebrow — white on brand-blue (legible) */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6 sm:mb-8 px-3 py-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-white border-2 border-black shadow-[4px_4px_0_0_#000]"
          style={{ backgroundColor: "var(--brand-blue)" }}
        >
          Open AI · Open access · On-chain
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] font-extrabold tracking-tight leading-[1.02] text-foreground"
        >
          Trillions in digital securities,{" "}
          <span className="underline underline-offset-[6px] decoration-[3px]">
            native on-chain.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 sm:mt-9 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          Zoo Industries is the for-profit front-end of Zoo Labs Foundation
          — opening regulated access to $113T in digital securities through
          an integrated liquidity protocol, with the{" "}
          <strong className="font-bold text-foreground">Zen5</strong> family
          of open AI models running on top.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 sm:mt-11 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center"
        >
          <a
            href={site.links.docs}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-brutalist pill-pink w-full sm:w-auto">
              Open the protocol
            </button>
          </a>
          <a
            href={site.links.platform}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-brutalist pill-yellow w-full sm:w-auto">
              Try Zen AI
            </button>
          </a>
          <Link href="/research">
            <button className="btn-brutalist pill-blue w-full sm:w-auto">
              Read the research
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll affordance */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-muted-foreground"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}
