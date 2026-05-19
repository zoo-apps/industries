"use client";

import { Reveal } from "@/components/Reveal";

const numbers = [
  { v: "501(c)(3)", l: "Foundation parent" },
  { v: "130+", l: "Research papers" },
  { v: "727+", l: "Open source repos" },
  { v: "Zen5", l: "Models live" },
  { v: "25%", l: "Compute revenue to OSS" },
];

export default function Traction3() {
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
            Chapter VII &nbsp;·&nbsp; Traction
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-3xl"
            style={{ fontWeight: 500 }}
          >
            A decade of open AI, shipped in production.
          </h2>
        </Reveal>

        <div
          className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 py-10 sm:py-12 border-y"
          style={{ borderColor: "rgba(26,19,8,0.35)" }}
        >
          {numbers.map((n, i) => (
            <Reveal key={n.l} delay={i * 0.05}>
              <div>
                <div
                  className="text-3xl sm:text-4xl md:text-5xl tracking-tight tabular-nums"
                  style={{ fontWeight: 500 }}
                >
                  {n.v}
                </div>
                <div
                  className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.22em] italic"
                  style={{ color: "rgba(26,19,8,0.6)" }}
                >
                  {n.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
