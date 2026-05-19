"use client";

import { Reveal } from "@/components/Reveal";

const companies = [
  { name: "SpaceX", sector: "Space launch · satellite internet", valuation: "$1.75T" },
  { name: "Anthropic", sector: "Frontier AI models", valuation: "$1.20T" },
  { name: "OpenAI", sector: "Frontier AI models", valuation: "$852B" },
  { name: "Stripe", sector: "Payments infrastructure", valuation: "$159B" },
  { name: "Databricks", sector: "Data + AI platform", valuation: "$134B" },
];

export default function Comparables3() {
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
            Chapter III &nbsp;·&nbsp; Comparables
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-3xl"
            style={{ fontWeight: 500 }}
          >
            Private AI is already valued like public mega-caps.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <table className="mt-12 sm:mt-16 w-full">
            <thead>
              <tr className="text-left">
                <th
                  className="py-3 text-[10px] sm:text-xs uppercase tracking-[0.24em] font-semibold border-b-2"
                  style={{
                    color: "rgba(26,19,8,0.55)",
                    borderColor: "rgba(26,19,8,0.55)",
                    width: "3rem",
                  }}
                >
                  №
                </th>
                <th
                  className="py-3 text-[10px] sm:text-xs uppercase tracking-[0.24em] font-semibold border-b-2"
                  style={{
                    color: "rgba(26,19,8,0.55)",
                    borderColor: "rgba(26,19,8,0.55)",
                  }}
                >
                  Company
                </th>
                <th
                  className="hidden sm:table-cell py-3 text-[10px] sm:text-xs uppercase tracking-[0.24em] font-semibold border-b-2"
                  style={{
                    color: "rgba(26,19,8,0.55)",
                    borderColor: "rgba(26,19,8,0.55)",
                  }}
                >
                  Sector
                </th>
                <th
                  className="py-3 text-right text-[10px] sm:text-xs uppercase tracking-[0.24em] font-semibold border-b-2"
                  style={{
                    color: "rgba(26,19,8,0.55)",
                    borderColor: "rgba(26,19,8,0.55)",
                  }}
                >
                  Valuation
                </th>
              </tr>
            </thead>
            <tbody>
              {companies.map((c, i) => (
                <tr
                  key={c.name}
                  className="border-b align-baseline"
                  style={{ borderColor: "rgba(26,19,8,0.18)" }}
                >
                  <td
                    className="py-5 sm:py-6 tabular-nums text-sm sm:text-base"
                    style={{ color: "rgba(26,19,8,0.55)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </td>
                  <td
                    className="py-5 sm:py-6 text-xl sm:text-2xl md:text-3xl tracking-tight pr-4"
                    style={{ fontWeight: 500 }}
                  >
                    {c.name}
                  </td>
                  <td
                    className="hidden sm:table-cell py-5 sm:py-6 italic text-sm sm:text-base"
                    style={{ color: "rgba(26,19,8,0.65)" }}
                  >
                    {c.sector}
                  </td>
                  <td
                    className="py-5 sm:py-6 text-right text-lg sm:text-xl md:text-2xl tabular-nums"
                    style={{ fontWeight: 500 }}
                  >
                    {c.valuation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal delay={0.3}>
          <p
            className="mt-8 text-xs sm:text-sm max-w-2xl leading-[1.7] italic"
            style={{ color: "rgba(26,19,8,0.55)" }}
          >
            Source: World Bank and Preqin data, as cited in McKinsey &amp;
            Company's "Global Private Markets Review 2020." Year-end 2019;
            growth rates indexed to 2000 values.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
