"use client";

import { useEffect, useState } from "react";

/**
 * Right-rail slide indicator. Watches every ``[data-slide]`` section
 * with an IntersectionObserver and highlights whichever is closest to
 * centred in the viewport. Clicking a dot scrolls to that slide.
 *
 * Renders on lg+ only — there's no room for the rail on mobile, and
 * the snap behaviour is enough of a hint on small screens. Hidden
 * during ``prefers-reduced-motion`` is overkill (no motion happens
 * here); we leave it visible.
 */
export function SlideIndicator() {
  const [slides, setSlides] = useState<HTMLElement[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const found = Array.from(
      document.querySelectorAll<HTMLElement>("[data-slide]"),
    );
    setSlides(found);

    if (found.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Most-visible entry wins. Single-pass; no debounce needed.
        let best: { idx: number; ratio: number } | null = null;
        entries.forEach((e) => {
          const idx = found.indexOf(e.target as HTMLElement);
          if (idx === -1) return;
          if (!best || e.intersectionRatio > best.ratio) {
            best = { idx, ratio: e.intersectionRatio };
          }
        });
        if (best && (best as { idx: number; ratio: number }).ratio > 0.4) {
          setActiveIdx((best as { idx: number; ratio: number }).idx);
        }
      },
      {
        // Trigger updates roughly every 25% so the dot tracks scroll
        // smoothly without firing on every pixel.
        threshold: [0.25, 0.5, 0.75, 1.0],
      },
    );

    found.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (slides.length === 0) return null;

  return (
    <nav
      aria-label="Slides"
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-3"
    >
      {slides.map((_, i) => (
        <button
          key={i}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={i === activeIdx ? "true" : undefined}
          onClick={() =>
            slides[i]?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className="group h-3 w-3 grid place-items-center"
        >
          <span
            className={`block transition-all duration-300 ease-out border-2 border-black transform-gpu ${
              i === activeIdx
                ? "w-3 h-3 bg-foreground"
                : "w-2 h-2 bg-transparent group-hover:bg-foreground/40"
            }`}
            style={{ borderRadius: "9999px" }}
          />
        </button>
      ))}
    </nav>
  );
}
