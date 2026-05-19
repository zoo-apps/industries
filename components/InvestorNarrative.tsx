"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Server,
  Coins,
  ShieldCheck,
  FileText,
  Cuboid,
  Users,
  TrendingUp,
  Landmark,
  CheckCircle2,
} from "lucide-react";

// THE PATH ZOO UNLOCKS — five-step flow from physical GPU capex to
// instant on-chain settlement. Each step has a brand color it eases
// into as you scroll past it (icon + title share the color via
// ``currentColor``; Lucide strokes inherit it automatically).
const pathSteps = [
  { icon: Server,       title: "GPU-backed AI infrastructure", body: "High-demand, cash-generative assets.",                        color: "var(--brand-magenta)" },
  { icon: Coins,        title: "Tokenized private equity",     body: "Economic exposure to private companies.",                     color: "var(--brand-yellow)"  },
  { icon: ShieldCheck,  title: "ATS trading",                  body: "Broker-dealer compliant trading in a regulated ATS.",         color: "var(--brand-green)"   },
  { icon: FileText,     title: "Transfer agency",              body: "Onboarding, cap-table management, investor servicing.",       color: "var(--brand-cyan)"    },
  { icon: Cuboid,       title: "On-chain settlement",          body: "Transparent, secure, instant settlement.",                    color: "var(--brand-blue)"    },
];

// WHY NOW — three reasons stacked vertically with hairline dividers.
// Same scroll-in colorization as the path steps.
const whyNow = [
  { icon: TrendingUp, title: "AI infrastructure demand is exploding",            body: "Compute is the new oil of the digital economy.",                                 color: "var(--brand-red)"     },
  { icon: Landmark,   title: "Private valuations are reaching public-market scale", body: "Top private AI companies are already worth hundreds of billions to trillions.", color: "var(--brand-magenta)" },
  { icon: ShieldCheck, title: "Tokenization rails are finally mature",            body: "Regulation, compliance, and infrastructure are aligning for mainstream access.", color: "var(--brand-green)"   },
];

// AI-native private companies — five rows on a rainbow ribbon.
const aiCompanies = [
  { name: "SpaceX",     value: "1.75 Trillion" },
  { name: "OpenAI",     value: "852 Billion"   },
  { name: "Anthropic",  value: "1.2 Trillion"  },
  { name: "Databricks", value: "134 Billion"   },
  { name: "Stripe",     value: "159 Billion"   },
];

// Sector valuation strip at the very bottom — six tiles, last one is
// the totals kicker matching the $113T mega-display above.
const sectorTiles = [
  { value: "$1.75T", label: "Hedge funds"        },
  { value: "$852B",  label: "Venture capital"    },
  { value: "$1.2T",  label: "Private credit"     },
  { value: "$134B",  label: "Real estate"        },
  { value: "$159B",  label: "Infrastructure"     },
  { value: "$113T",  label: "Total addressable"  },
];

export default function InvestorNarrative() {
  return (
    <section className="relative bg-background border-b-2 border-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 space-y-12 sm:space-y-16 md:space-y-20">

        {/* ─── Eyebrow pill (solid brand-blue) ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.2em] text-white bg-[var(--brand-blue)] border-2 border-black shadow-[6px_6px_0_0_#000]">
            Private equity on chain
          </span>
        </motion.div>

        {/* ─── Headline ─────────────────────────────────────────────── */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-foreground max-w-5xl"
        >
          The biggest redistribution of wealth the world is{" "}
          <span className="underline decoration-2 sm:decoration-[3px] md:decoration-4 underline-offset-2 sm:underline-offset-4">
            yet to see.
          </span>
        </motion.h2>

        {/* ─── $113T Total Addressable card ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_380px] border-2 border-black bg-white/60 shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000]"
        >
          <div className="p-6 sm:p-8 md:p-10 border-b-2 md:border-b-0 md:border-r-2 border-black">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground">
              Through{" "}
              <Link
                href="https://liquidity.io"
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold underline underline-offset-2"
              >
                liquidity.io
              </Link>
              , ZOO gains a compliant path to tokenize and distribute GPU-backed
              AI infrastructure using broker-dealer, ATS, transfer agency, and
              blockchain settlement rails.
            </p>
            <blockquote className="mt-6 sm:mt-8 pl-5 sm:pl-6 border-l-[6px] sm:border-l-8 border-black">
              <p className="italic text-sm sm:text-base md:text-lg text-foreground leading-relaxed">
                &ldquo;While smaller, private equity has historically generated
                higher long-term net returns, often outpacing the S&amp;P 500
                over 10- and 20-year periods.&rdquo;
              </p>
              <cite className="block mt-2 text-xs sm:text-sm not-italic font-extrabold text-muted-foreground">
                — Start Engine
              </cite>
            </blockquote>
          </div>
          <div className="p-6 sm:p-8 md:p-10 flex flex-col">
            <div className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-foreground leading-none">
              $113T
            </div>
            <div className="mt-3 text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-foreground">
              Total addressable
            </div>
            <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              The private markets opportunity we can bring on chain.
            </p>
          </div>
        </motion.div>

        {/* ─── THE PATH ZOO UNLOCKS — five-step flow ────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="border-2 border-black bg-white/60 p-6 sm:p-8 md:p-10 shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000]"
        >
          <h3 className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-foreground mb-8 sm:mb-10">
            The path Zoo unlocks
          </h3>
          {/* Mobile: vertical list with down-arrows. Desktop: 5-col row.
              Each step starts black and eases to its brand color when it
              scrolls into view (icon + title share the color via
              ``currentColor`` — Lucide strokes inherit it automatically). */}
          <ol className="grid grid-cols-1 sm:grid-cols-5 gap-6 sm:gap-3 md:gap-5">
            {pathSteps.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ color: "#000000" }}
                whileInView={{ color: s.color }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 + i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <s.icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" strokeWidth={2} />
                <div className="mt-3 sm:mt-4 text-xs sm:text-[10px] md:text-xs font-extrabold uppercase tracking-tight leading-tight">
                  {s.title}
                </div>
                <p className="mt-2 text-xs sm:text-[10px] md:text-xs text-muted-foreground leading-snug">
                  {s.body}
                </p>
                {/* Arrow to next step (hide after last) */}
                {i < pathSteps.length - 1 && (
                  <span
                    aria-hidden
                    className="sm:absolute sm:top-6 md:top-7 sm:-right-2 md:-right-3 hidden sm:block text-2xl md:text-3xl font-extrabold text-foreground"
                  >
                    →
                  </span>
                )}
                {i < pathSteps.length - 1 && (
                  <span
                    aria-hidden
                    className="sm:hidden mt-4 text-2xl font-extrabold text-foreground"
                  >
                    ↓
                  </span>
                )}
              </motion.li>
            ))}
          </ol>

          {/* Broad investor access callout */}
          <div className="mt-8 sm:mt-10 grid grid-cols-[56px_1fr] sm:grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-4 sm:gap-6 items-center border-2 border-black p-5 sm:p-6 md:p-8">
            <Users className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-foreground mx-auto" strokeWidth={2} />
            <div>
              <h4 className="text-sm sm:text-base md:text-lg font-extrabold uppercase tracking-tight">
                Broad investor access
              </h4>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Opening private market opportunities to more investors, globally.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ─── WHY NOW — three reasons with hairline dividers ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-foreground mb-6 sm:mb-8">
            Why now
          </h3>
          <div className="border-2 border-black bg-white/60 divide-y divide-black/30 shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000]">
            {whyNow.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ color: "#000000" }}
                whileInView={{ color: w.color }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 + i * 0.15 }}
                className="grid grid-cols-[64px_1fr] sm:grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-4 sm:gap-6 md:gap-8 p-5 sm:p-7 md:p-9 items-start"
              >
                <div className="flex items-center justify-center border-r border-black/20 pr-2 sm:pr-4">
                  <w.icon className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base md:text-lg font-extrabold uppercase tracking-tight leading-tight">
                    {w.title}
                  </h4>
                  <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {w.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── AI-Native private companies (rainbow table) ──────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="border-2 border-black shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000]"
        >
          {/* Black header bar */}
          <div className="bg-black px-4 sm:px-6 py-3 sm:py-4 text-center">
            <h3 className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.2em] text-white">
              AI-native private companies are already valued like public mega-caps.
            </h3>
          </div>
          {/* Rainbow ribbon rows */}
          <div
            className="divide-y divide-black/20"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #ffe44d 0%, #ff7a8a 25%, #d970d4 50%, #7ec8e3 75%, #7fd0a4 100%)",
            }}
          >
            {aiCompanies.map((c) => (
              <div
                key={c.name}
                className="flex items-center justify-between gap-3 px-4 sm:px-8 md:px-12 py-4 sm:py-6 md:py-7"
              >
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-black">
                  {c.name}
                </span>
                <span className="text-base sm:text-xl md:text-2xl font-bold text-black tabular-nums whitespace-nowrap">
                  {c.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ─── Bottom sector tile strip — six brutalist boxes ──────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
            {sectorTiles.map((t) => (
              <div
                key={t.label}
                className="border-2 border-black bg-white/60 p-3 sm:p-4 md:p-5 text-center shadow-[4px_4px_0_0_#000] md:shadow-[6px_6px_0_0_#000]"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-none text-foreground">
                  {t.value}
                </div>
                <div className="mt-2 text-[10px] sm:text-[11px] md:text-xs font-extrabold uppercase tracking-[0.2em] text-foreground">
                  {t.label}
                </div>
              </div>
            ))}
          </div>
          {/* Bottom black bar */}
          <div className="mt-4 sm:mt-5 bg-black border-2 border-black px-4 py-3 text-center">
            <span className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-white">
              Private AI · Public-market scale
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
