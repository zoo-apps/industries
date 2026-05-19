"use client";

import { Reveal } from "@/components/Reveal";

/**
 * Section 6 of 8 — the 5-layer open AI stack. The product investors
 * are buying when they fund Zoo Industries.
 *
 * Strictly 5 layers. Each layer card has a colour accent so the reader
 * can scan the stack visually even before reading any copy.
 */

// Each layer of the open AI stack is a live public site. The ``href``
// here is the canonical URL — they're rendered as anchors so the deck
// reader can click straight into the property they want.
const layers: Array<{
  tier: string;
  domain: string;
  href: string;
  body: string;
  color: string;
}> = [
  {
    tier: "Models",
    domain: "zenlm.org",
    href: "https://zenlm.org",
    body:
      "Zen5 — open, private, local AI. Live today.",
    color: "var(--brand-yellow)",
  },
  {
    tier: "Compute",
    domain: "zoo.cloud",
    href: "https://zoo.cloud",
    body: "Decentralized GPU and inference network.",
    color: "var(--brand-green)",
  },
  {
    tier: "Settlement",
    domain: "zoo.network",
    href: "https://zoo.network",
    body:
      "Post-quantum, GPU-native blockchain. EVM + block STM + GPU consensus.",
    color: "var(--brand-cyan)",
  },
  {
    tier: "Financing",
    domain: "zoo.fund",
    href: "https://zoo.fund",
    body: "Tokenized infrastructure financing with transparent economics.",
    color: "var(--brand-blue)",
  },
  {
    tier: "Governance",
    domain: "zoo.vote",
    href: "https://zoo.vote",
    body: "Open community-owned decision-making.",
    color: "var(--brand-magenta)",
  },
];

export default function TheStack() {
  return (
    <section
      data-slide
      className="min-h-[100svh] flex items-center snap-start py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "color-mix(in oklab, var(--brand-blue) 12%, transparent)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
            The open AI stack
          </h2>
          <p className="mt-3 text-center text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            zenlm.org · zoo.cloud · zoo.network · zoo.fund · zoo.vote
          </p>
        </Reveal>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {layers.map((layer, i) => (
            <Reveal key={layer.domain} delay={i * 0.06} className="h-full">
              {/* Each card is an anchor — the whole tile is a click
                  target into its respective Zoo property. Hover lifts
                  the card a touch + extends the offset-shadow so the
                  brutalist "press" affordance is obvious. */}
              <a
                href={layer.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full border-2 border-black p-5 sm:p-6 shadow-[6px_6px_0_0_#000] flex flex-col text-black transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[10px_10px_0_0_#000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                style={{ background: layer.color }}
              >
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-black/70">
                  {layer.tier}
                </div>
                <div className="mt-2 text-lg sm:text-xl font-extrabold tracking-tight break-all flex items-center gap-1.5">
                  {layer.domain}
                  <span
                    aria-hidden
                    className="opacity-50 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </div>
                <p className="mt-3 text-sm sm:text-[15px] font-medium leading-relaxed flex-1 text-black/85">
                  {layer.body}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
