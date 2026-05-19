"use client";

/**
 * Editorial masthead — the page's name plate. Sits above the hero with
 * a heavy hairline beneath, like the masthead of a newspaper. Bears
 * the institution name, volume / issue, and date stamp.
 */
export default function Masthead3() {
  return (
    <header
      className="px-6 sm:px-10 lg:px-16 pt-28 sm:pt-32 pb-6 sm:pb-8 border-b"
      style={{ borderColor: "rgba(26,19,8,0.5)" }}
    >
      <div className="max-w-6xl mx-auto flex items-end justify-between gap-6">
        <div>
          <div
            className="text-[10px] sm:text-xs uppercase tracking-[0.32em] font-semibold"
            style={{ color: "rgba(26,19,8,0.55)" }}
          >
            Zoo Industries · The Quarterly
          </div>
          <div
            className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl leading-none tracking-tight"
            style={{ fontStyle: "italic", fontWeight: 500 }}
          >
            Vol. I &nbsp;&middot;&nbsp; The Open AI Economy
          </div>
        </div>
        <div className="text-right">
          <div
            className="text-[10px] sm:text-xs uppercase tracking-[0.32em] font-semibold"
            style={{ color: "rgba(26,19,8,0.55)" }}
          >
            Year of Issue
          </div>
          <div
            className="mt-2 text-xl sm:text-2xl md:text-3xl tabular-nums tracking-tight"
            style={{ fontWeight: 500 }}
          >
            MMXXVI
          </div>
        </div>
      </div>
    </header>
  );
}
