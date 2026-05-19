"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Brain, Shield, Network, Sparkles } from "lucide-react";

const researchAreas = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "100+ model weights from 0.6B to 1T+ with Training-Free GRPO optimization.",
    papers: [
      { title: "Active Semantic Optimization (ASO)", href: "https://github.com/zooai/papers", result: "18.2% SWE-bench resolution" },
      { title: "Decentralized Semantic Optimization", href: "https://github.com/zooai/papers", result: "15.2% multi-agent improvement" },
      { title: "HLLM Training-Free GRPO",            href: "https://github.com/zooai/gym",    result: "$18 vs $10,000+ training cost" },
    ],
    link: "/research#papers",
  },
  {
    icon: Shield,
    title: "Cryptography & Security",
    description: "Post-quantum cryptography and GPU-accelerated fully homomorphic encryption.",
    papers: [
      { title: "Quasar Consensus",       href: "https://github.com/luxfi/papers", result: "Quantum-secure finality" },
      { title: "ETHFALCON Post-Quantum", href: "https://github.com/luxfi/papers", result: "FALCON signatures for EVM" },
      { title: "NTT Transform",          href: "https://github.com/luxfi/papers", result: "85% gas reduction for PQ crypto" },
    ],
    link: "/research#papers",
  },
  {
    icon: Network,
    title: "Consensus & Networks",
    description: "Multi-consensus blockchain architecture with TEE attestation.",
    papers: [
      { title: "Lux Multi-Consensus",       href: "https://github.com/luxfi/papers",        result: "Wave, Focus, Quasar protocols" },
      { title: "Hamiltonian Market Maker",  href: "https://github.com/zooai/papers",        result: "<200 ms quote latency" },
      { title: "ZAP Protocol",              href: "https://github.com/zap-protocol/zap",    result: "Zero-copy AI agent RPC" },
    ],
    link: "/research#papers",
  },
  {
    icon: Sparkles,
    title: "Zen AI Models",
    description: "Zen5/5 — from 4B to 2T+ MoDE parameters with GT-QLoRA MoE fine-tuning.",
    papers: [
      { title: "GT-QLoRA: MoE Fine-Tuning",      href: "https://zenlm.org/papers/zen5-ultra-gt-qlora.pdf", result: "Gate-targeted behavioral mod" },
      { title: "Zen5 Model Family",              href: "https://huggingface.co/zenlm",                    result: "4B–1T+ abliterated models" },
      { title: "Zen5 Ultra (Research Preview)",  href: "https://zenlm.org/docs/models#zen5",              result: "2T+ MoDE — request access" },
    ],
    link: "/models",
  },
];

const featuredPapers = [
  {
    date: "Jan 2026",
    category: "AI Training",
    title: "Training-Free Adaptation via Active Semantic Optimization",
    description: "Achieving 18.2% SWE-bench resolution with zero additional training through TF-GRPO and BitDelta compression.",
    href: "https://github.com/zooai/papers",
  },
  {
    date: "Jan 2026",
    category: "Cryptography",
    title: "Quasar: Dual-Certificate Quantum-Secure Consensus",
    description: "Post-quantum finality using BLS and Ringtail threshold signatures for blockchain security.",
    href: "https://github.com/luxfi/papers",
  },
  {
    date: "Dec 2025",
    category: "AI Economics",
    title: "Hamiltonian Market Maker for Decentralized AI Compute",
    description: "Novel invariant H(Ψ,Θ) = κ achieving <200 ms latency and 98.7% price stability for AI compute markets.",
    href: "https://github.com/zooai/papers",
  },
];

export default function ResearchHighlights() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">

        {/* ─── Section header — brutalist eyebrow + big title ────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h3 className="relative inline-block text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-foreground mb-6 sm:mb-8">
            Research at the frontier
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="absolute left-0 right-0 -bottom-2 h-[3px] bg-black origin-left"
            />
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-foreground">
            58 papers across AI, cryptography, consensus, and distributed systems.
          </h2>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Our research teams investigate the safety, efficiency, and societal
            impacts of AI.
          </p>
        </motion.div>

        {/* ─── Research areas — 4 brutalist panels ────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {researchAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 + i * 0.08 }}
              className="border-2 border-black bg-white/60 shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000] p-6 sm:p-8 md:p-10"
            >
              <div className="flex items-start gap-4 mb-5 sm:mb-6">
                <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border-2 border-black bg-white shadow-[3px_3px_0_0_#000] hover:bg-[var(--brand-yellow)] transition-colors cursor-pointer">
                  <area.icon className="w-6 h-6 sm:w-7 sm:h-7 text-black" strokeWidth={2.25} />
                </div>
                <div className="min-w-0">
                  <Link
                    href={area.link}
                    className="inline-block text-base sm:text-lg md:text-xl font-extrabold uppercase tracking-tight text-foreground leading-tight underline underline-offset-4 decoration-2 hover:decoration-[5px] transition-all"
                  >
                    <h4>{area.title}</h4>
                  </Link>
                  <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>

              <ul className="border-2 border-black divide-y-2 divide-black mb-6 bg-white/40">
                {area.papers.map((p) => (
                  <li key={p.title}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 px-3 sm:px-4 py-2.5 sm:py-3 hover:bg-[var(--brand-yellow)] hover:text-black transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-extrabold uppercase tracking-tight">
                        {p.title}
                      </span>
                      <span className="shrink-0 text-[10px] sm:text-xs font-bold tabular-nums whitespace-nowrap">
                        {p.result}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <Link
                href={area.link}
                className="group/link inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-[0.15em] text-foreground underline underline-offset-4 decoration-2 hover:decoration-[5px] hover:text-black transition-all"
              >
                <span className="group-hover/link:font-black">View all papers</span>
                <ArrowRight
                  className="w-3.5 h-3.5 group-hover/link:w-4 group-hover/link:h-4 group-hover/link:translate-x-0.5 transition-all"
                  strokeWidth={2.5}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ─── Latest Publications — three brutalist rows ─────── */}
        <div>
          <h3 className="relative inline-block text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-foreground mb-6 sm:mb-8">
            Latest publications
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="absolute left-0 right-0 -bottom-2 h-[3px] bg-black origin-left"
            />
          </h3>
          <div className="border-2 border-black bg-white/60 divide-y-2 divide-black shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000]">
            {featuredPapers.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 + i * 0.1 }}
                className="group grid grid-cols-1 sm:grid-cols-[120px_1fr_auto] gap-3 sm:gap-6 items-start px-5 sm:px-7 md:px-9 py-5 sm:py-6 md:py-7 hover:bg-foreground/[0.04] transition-colors"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-foreground">
                    {p.date}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {p.category}
                  </span>
                </div>
                <div className="min-w-0">
                  <h4 className="text-base sm:text-lg md:text-xl font-extrabold tracking-tight leading-tight text-foreground group-hover:underline underline-offset-4">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
                <ExternalLink
                  aria-hidden
                  className="hidden sm:block w-5 h-5 mt-1 shrink-0 text-foreground opacity-40 group-hover:opacity-100 transition-opacity"
                />
              </motion.a>
            ))}
          </div>
        </div>

        {/* ─── CTA — brutalist button ──────────────────────────── */}
        <div className="text-center">
          <Link href="/research">
            <button className="inline-flex items-center gap-2 px-6 md:px-7 py-3.5 md:py-4 text-sm md:text-base font-extrabold uppercase tracking-wider bg-[var(--brand-yellow)] text-black border-2 border-black shadow-[6px_6px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000] transition-all">
              View all research
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
