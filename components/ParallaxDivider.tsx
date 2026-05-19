"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/**
 * Visible parallax beat between sections.
 *
 * The previous version painted small static chips, which moved
 * imperceptibly relative to the page. This version uses two wide bands
 * that drift in *opposite* directions on both X and Y as the user scrolls
 * past, plus a colour stripe overlay. The opposing motion is what makes
 * parallax read — without two layers moving against each other there is
 * no depth cue and the eye assumes the band is glued to the page.
 *
 * Heights are big (240/320 px) so the motion plays out over enough scroll
 * distance to be obvious, and the band extends past the viewport edges so
 * the layers can travel into negative space without revealing seams.
 *
 * Respects ``prefers-reduced-motion`` — both translations fall to zero
 * and the bands hold still.
 */
export function ParallaxDivider({
  className,
}: {
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Top band: drifts LEFT and slightly UP as you scroll down.
  const xTop = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [220, -220],
  );
  const yTop = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [40, -40],
  );
  const rotTop = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [-2.5, -1],
  );

  // Bottom band: drifts RIGHT and slightly DOWN. Opposite direction =
  // depth cue, which is what the eye reads as parallax.
  const xBot = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [-260, 260],
  );
  const yBot = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [-40, 40],
  );
  const rotBot = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [2.5, 1],
  );

  // Midline pill: small, opposing the bands. Lives in the middle of the
  // gap and bounces gently to anchor the eye.
  const yMid = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [50, -50],
  );

  return (
    <div
      ref={ref}
      aria-hidden
      className={`relative h-60 md:h-80 overflow-hidden pointer-events-none select-none ${className ?? ""}`}
    >
      {/* Top band — pink → yellow gradient stripe, drifts left + up */}
      <motion.div
        style={{ x: xTop, y: yTop, rotate: rotTop }}
        className="absolute -left-[20%] top-[20%] w-[140%] h-10 md:h-12 border-2 border-black shadow-[6px_6px_0_0_#000]"
      >
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(90deg, var(--brand-magenta) 0%, var(--brand-yellow) 100%)",
          }}
        />
      </motion.div>

      {/* Bottom band — cyan → green gradient stripe, drifts right + down */}
      <motion.div
        style={{ x: xBot, y: yBot, rotate: rotBot }}
        className="absolute -left-[20%] bottom-[20%] w-[140%] h-10 md:h-12 border-2 border-black shadow-[6px_6px_0_0_#000]"
      >
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(90deg, var(--brand-blue) 0%, var(--brand-green) 100%)",
          }}
        />
      </motion.div>

      {/* Midline chip cluster — small, anchored, opposes the bands' Y */}
      <motion.div
        style={{ y: yMid }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center gap-3 md:gap-4"
      >
        <span
          className="w-4 h-4 md:w-5 md:h-5 border-2 border-black shadow-[3px_3px_0_0_#000]"
          style={{ background: "var(--brand-yellow)" }}
        />
        <span
          className="w-4 h-4 md:w-5 md:h-5 border-2 border-black shadow-[3px_3px_0_0_#000]"
          style={{ background: "var(--brand-magenta)" }}
        />
        <span
          className="w-4 h-4 md:w-5 md:h-5 border-2 border-black shadow-[3px_3px_0_0_#000]"
          style={{ background: "var(--brand-blue)" }}
        />
        <span
          className="w-4 h-4 md:w-5 md:h-5 border-2 border-black shadow-[3px_3px_0_0_#000]"
          style={{ background: "var(--brand-green)" }}
        />
      </motion.div>
    </div>
  );
}
