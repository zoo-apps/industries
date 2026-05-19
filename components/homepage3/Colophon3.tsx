"use client";

/**
 * Colophon — the closing print-style footer. Names the parent
 * foundation, the regulated path, EIN, and the standard accredited-
 * investor / informational language. Sits below all chapters as the
 * "publication notes" of the page.
 */
export default function Colophon3() {
  return (
    <footer
      className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-t"
      style={{ borderColor: "rgba(26,19,8,0.35)" }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div
            className="text-[10px] sm:text-xs uppercase tracking-[0.32em] font-semibold mb-3"
            style={{ color: "rgba(26,19,8,0.55)" }}
          >
            Colophon
          </div>
          <div
            className="text-xl sm:text-2xl tracking-tight italic"
            style={{ fontWeight: 500 }}
          >
            Zoo Industries · The Quarterly
          </div>
          <div
            className="mt-3 text-sm leading-[1.7]"
            style={{ color: "rgba(26,19,8,0.7)" }}
          >
            Vol. I &middot; The Open AI Economy &middot; MMXXVI
          </div>
        </div>

        <div className="md:col-span-8 text-sm sm:text-base leading-[1.8]" style={{ color: "rgba(26,19,8,0.75)" }}>
          <p>
            <strong style={{ fontWeight: 600 }}>Publisher.</strong> Zoo Labs
            Foundation — a 501(c)(3) tax-exempt non-profit, EIN 88-3538992 —
            owns the open-source commons. Zoo Industries Inc. is its
            for-profit operating front-end.
          </p>
          <p className="mt-4">
            <strong style={{ fontWeight: 600 }}>Securities.</strong> Digital
            securities are offered through{" "}
            <a
              href="https://"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded underline underline-offset-[5px] decoration-[1.5px]"
              style={{ textDecorationColor: "rgba(26,19,8,0.35)" }}
            >
              
            </a>
            , a SEC-registered broker-dealer and ATS, and are limited to
            accredited investors. This page is informational only and not
            an offer to sell securities.
          </p>
        </div>
      </div>
    </footer>
  );
}
