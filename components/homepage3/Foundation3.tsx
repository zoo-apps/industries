"use client";

import { Reveal } from "@/components/Reveal";

const entities = [
  { label: "$ZOO Network", headline: "Regulated tokenization rails", body: "Compliant on-chain settlement for GPU-backed AI infrastructure via broker-dealer, ATS, and transfer-agency partners." },
  { label: "Zoo Industries", headline: "For-profit front-end", body: "The product surface. Opens regulated access to digital securities, runs Zen5 inference, and routes proceeds through the protocol." },
  { label: "Zoo Labs", headline: "501(c)(3) foundation", body: "Houses the open-source commons, governs the protocol, and directs proceeds to wildlife preservation." },
];

export default function Foundation3() {
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
            Chapter V &nbsp;·&nbsp; The Foundation
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-3xl"
            style={{ fontWeight: 500 }}
          >
            Three entities. <em>One mission.</em>
          </h2>
        </Reveal>

        <div
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 border"
          style={{
            backgroundColor: "rgba(26,19,8,0.18)",
            borderColor: "rgba(26,19,8,0.18)",
            gap: "1px",
          }}
        >
          {entities.map((e, i) => (
            <Reveal key={e.label} delay={i * 0.06} className="h-full">
              <article
                className="h-full p-7 sm:p-8 flex flex-col"
                style={{ backgroundColor: "#f5efe0" }}
              >
                <div
                  className="text-[10px] sm:text-xs uppercase tracking-[0.28em] font-semibold"
                  style={{ color: "rgba(26,19,8,0.55)" }}
                >
                  {e.label}
                </div>
                <div
                  className="mt-3 text-xl sm:text-2xl tracking-tight"
                  style={{ fontWeight: 500 }}
                >
                  {e.headline}
                </div>
                <p
                  className="mt-4 text-sm sm:text-base leading-[1.7] flex-1"
                  style={{ color: "rgba(26,19,8,0.72)" }}
                >
                  {e.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
