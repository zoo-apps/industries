"use client";

import { Reveal } from "@/components/Reveal";

const layers = [
  { tier: "Models", domain: "zenlm.org", href: "https://zenlm.org", body: "Zen5 — open, private, local AI. Built on DeepSeek 4 Pro and DS4 Flash. Live today." },
  { tier: "Compute", domain: "zoo.cloud", href: "https://zoo.cloud", body: "Decentralized GPU and inference network." },
  { tier: "Settlement", domain: "zoo.network", href: "https://zoo.network", body: "Post-quantum, GPU-native blockchain. EVM, block STM, consensus on GPU." },
  { tier: "Financing", domain: "zoo.fund", href: "https://zoo.fund", body: "Tokenized infrastructure financing with transparent economics." },
  { tier: "Governance", domain: "zoo.vote", href: "https://zoo.vote", body: "Open community-owned decision-making." },
];

export default function Stack3() {
  return (
    <section
      className="px-6 sm:px-10 lg:px-16 py-24 sm:py-32 border-t"
      style={{ borderColor: "rgba(26,19,8,0.18)" }}
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div
            className="text-[10px] sm:text-xs uppercase tracking-[0.32em] font-semibold mb-6"
            style={{ color: "rgba(26,19,8,0.55)" }}
          >
            Chapter IV &nbsp;·&nbsp; The Stack
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-3xl"
            style={{ fontWeight: 500 }}
          >
            Five domains. One open AI economy.
          </h2>
        </Reveal>

        <div
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border"
          style={{
            backgroundColor: "rgba(26,19,8,0.18)",
            borderColor: "rgba(26,19,8,0.18)",
            gap: "1px",
          }}
        >
          {layers.map((l, i) => (
            <Reveal key={l.domain} delay={i * 0.05} className="h-full">
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full p-6 sm:p-7 transition-colors group"
                style={{ backgroundColor: "#f5efe0" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ebe3d0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#f5efe0";
                }}
              >
                <div
                  className="text-[10px] sm:text-xs uppercase tracking-[0.28em] font-semibold"
                  style={{ color: "rgba(26,19,8,0.55)" }}
                >
                  {l.tier}
                </div>
                <div
                  className="mt-3 text-xl sm:text-2xl tracking-tight break-all"
                  style={{ fontWeight: 500 }}
                >
                  {l.domain}
                  <span
                    aria-hidden
                    className="ml-1 inline-block italic transition-transform group-hover:translate-x-1"
                    style={{ color: "#7a2e2e" }}
                  >
                    ↗
                  </span>
                </div>
                <p
                  className="mt-3 text-sm sm:text-base leading-[1.65]"
                  style={{ color: "rgba(26,19,8,0.7)" }}
                >
                  {l.body}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
