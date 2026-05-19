"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TrendingUp, Landmark, ShieldCheck } from "lucide-react";

// Six market segments stacked into a 2x3 brutalist grid (Frame 18).
// Brand-color tiles map to the spirit of the Figma reference; NVIDIA
// is the black tile (public-market comparable) on purpose.
const valuationTiles = [
  { value: "$1.75T", label: "Hedge funds",        color: "var(--brand-magenta)", tone: "light" as const },
  { value: "$852B",  label: "Venture capital",    color: "var(--brand-red)",     tone: "light" as const },
  { value: "$1.2T",  label: "Private credit",     color: "var(--brand-green)",   tone: "light" as const },
  { value: "$134B",  label: "Real estate",        color: "var(--brand-yellow)",  tone: "light" as const },
  { value: "$159B",  label: "Infrastructure",     color: "var(--brand-cyan)",    tone: "light" as const },
  { value: "$5.38T", label: "NVIDIA",             color: "#000000",              tone: "dark"  as const, sub: "(publicly traded)" },
];

// Five AI-native private companies stacked as horizontal rows (Frame 21).
// Each row sits on a slice of a head-to-tail rainbow gradient so the
// whole stack reads as a single iridescent ribbon.
const aiCompanies = [
  { name: "SpaceX",     value: "1.75 Trillion" },
  { name: "OpenAI",     value: "852 Billion"   },
  { name: "Anthropic",  value: "1.2 Trillion"  },
  { name: "Databricks", value: "134 Billion"   },
  { name: "Stripe",     value: "159 Billion"   },
];

const whyNow = [
  {
    icon: TrendingUp,
    title: "AI infrastructure demand is exploding",
    body:  "Compute is the new oil of the digital economy.",
  },
  {
    icon: Landmark,
    title: "Private valuations are reaching public-market scale",
    body:  "Top private AI companies are already worth hundreds of billions to trillions.",
  },
  {
    icon: ShieldCheck,
    title: "Tokenization rails are finally mature",
    body:  "Regulation, compliance, and infrastructure are aligning for mainstream access.",
  },
];

export default function InvestorNarrative() {
  return (
    <section className="relative bg-background border-y-2 border-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 space-y-16 sm:space-y-24 md:space-y-32">

        {/* ─── Frame 23 — rainbow eyebrow pill ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span
            className="inline-block px-6 py-3 sm:px-10 sm:py-4 md:px-12 md:py-5 text-base sm:text-xl md:text-2xl font-extrabold uppercase tracking-tight text-black border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--brand-yellow) 0%, var(--brand-magenta) 50%, var(--brand-cyan) 100%)",
            }}
          >
            Private equity on chain
          </span>
        </motion.div>

        {/* ─── Frame 22 — lede headline ───────────────────────────────── */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-foreground max-w-5xl"
        >
          Imagine bringing{" "}
          <span className="font-extrabold">$113 Trillion Dollars on chain…</span>
        </motion.h2>

        {/* ─── Frame 18 — Private AI at public scale (2x3 tile grid) ──── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-center text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-foreground mb-6 sm:mb-8">
            Private AI at public scale
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[2px] border-2 border-black bg-black shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000]">
            {valuationTiles.map((t) => {
              const fg = t.tone === "dark" ? "text-white" : "text-black";
              return (
                <div
                  key={t.label}
                  className="aspect-[5/4] sm:aspect-[6/5] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center"
                  style={{ backgroundColor: t.color }}
                >
                  <div className={`text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none ${fg}`}>
                    {t.value}
                  </div>
                  <div className={`mt-3 text-[10px] sm:text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] ${fg}`}>
                    {t.label}
                  </div>
                  {t.sub && (
                    <div className={`mt-1 text-[9px] sm:text-[10px] md:text-xs italic ${t.tone === "dark" ? "text-white/80" : "text-black/80"}`}>
                      {t.sub}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ─── Frame 21 — AI-native company table ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-center text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-foreground mb-6 sm:mb-8 max-w-3xl mx-auto">
            AI-native private companies are already valued like public mega-caps.
          </h3>
          <div
            className="border-2 border-black divide-y-2 divide-black shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000]"
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
                <span className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-black">
                  {c.name}
                </span>
                <span className="text-base sm:text-xl md:text-2xl font-bold text-black tabular-nums whitespace-nowrap">
                  {c.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ─── Frame 17 — WHY NOW (three icon rows) ───────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-foreground mb-6 sm:mb-8">
            Why now
          </h3>
          <div className="border-2 border-black divide-y-2 divide-black bg-white/60 shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000]">
            {whyNow.map((w) => (
              <div
                key={w.title}
                className="grid grid-cols-[56px_1fr] sm:grid-cols-[96px_1fr] md:grid-cols-[140px_1fr] gap-4 sm:gap-6 md:gap-8 p-5 sm:p-7 md:p-10 items-start"
              >
                <div className="flex items-center justify-center">
                  <w.icon className="w-9 h-9 sm:w-14 sm:h-14 md:w-20 md:h-20 text-foreground" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-sm sm:text-lg md:text-2xl font-extrabold uppercase tracking-tight leading-tight">
                    {w.title}
                  </h4>
                  <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                    {w.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ─── Frame 19 — $113T total addressable +  copy ─── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_420px] border-2 border-black bg-white/60 shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000]"
        >
          <div className="p-6 sm:p-8 md:p-10 border-b-2 md:border-b-0 md:border-r-2 border-black">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground">
              Through{" "}
              <Link
                href="https://"
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold underline underline-offset-2"
              >
                
              </Link>
              , ZOO gains a compliant path to tokenize and distribute GPU-backed AI
              infrastructure using broker-dealer, ATS, transfer agency, and blockchain
              settlement rails.
            </p>
            <blockquote className="mt-6 sm:mt-8 pl-4 sm:pl-5 border-l-4 border-black">
              <p className="italic text-sm sm:text-base md:text-lg text-foreground leading-relaxed">
                &ldquo;While smaller, private equity has historically generated higher
                long-term net returns, often outpacing the S&amp;P 500 over 10- and
                20-year periods.&rdquo;
              </p>
              <cite className="block mt-2 text-xs sm:text-sm not-italic font-extrabold uppercase tracking-wider text-muted-foreground">
                — Start Engine
              </cite>
            </blockquote>
          </div>
          <div className="p-6 sm:p-8 md:p-10 flex flex-col">
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground leading-none">
              $113T
            </div>
            <div className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-foreground">
              Total addressable
            </div>
            <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              The private markets opportunity we can bring on chain.
            </p>
          </div>
        </motion.div>

        {/* ─── Frame 20 — closer headline ─────────────────────────────── */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] text-foreground"
        >
          This will be the{" "}
          <span className="underline decoration-2 sm:decoration-[3px] md:decoration-4 underline-offset-2 sm:underline-offset-4">
            largest redistribution of wealth the world has ever seen.
          </span>
        </motion.h2>
      </div>
    </section>
  );
}
