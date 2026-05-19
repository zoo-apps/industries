"use client";

import { Reveal } from "@/components/Reveal";

const steps = [
  { label: "GPU-backed AI infrastructure", body: "High-demand, cash-generative compute assets — the productive base of the open AI economy." },
  { label: "Tokenized private equity", body: "Economic exposure to private AI companies wrapped as compliant on-chain securities." },
  { label: "ATS trading", body: "Broker-dealer compliant secondary trading in a regulated Alternative Trading System." },
  { label: "Transfer agency", body: "Onboarding, cap-table management, dividends and disclosures handled by registered agents." },
  { label: "On-chain settlement", body: "Transparent, secure, near-instant settlement on a post-quantum, GPU-native chain." },
];

export default function Path3() {
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
            Chapter II &nbsp;·&nbsp; The Path
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-3xl"
            style={{ fontWeight: 500 }}
          >
            Five steps from the data centre to the investor's wallet.
          </h2>
        </Reveal>

        <ol className="mt-12 sm:mt-16">
          {steps.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <li
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-7 sm:py-9 border-t"
                style={{ borderColor: "rgba(26,19,8,0.18)" }}
              >
                <div
                  className="md:col-span-2 text-2xl sm:text-3xl italic tabular-nums"
                  style={{ color: "rgba(26,19,8,0.55)", fontWeight: 500 }}
                >
                  {String(i + 1).padStart(2, "0")}.
                </div>
                <div className="md:col-span-4">
                  <div
                    className="text-xl sm:text-2xl tracking-tight"
                    style={{ fontWeight: 500 }}
                  >
                    {s.label}
                  </div>
                </div>
                <p
                  className="md:col-span-6 text-base sm:text-lg leading-[1.7] max-w-prose"
                  style={{ color: "rgba(26,19,8,0.72)" }}
                >
                  {s.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
