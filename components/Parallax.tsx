"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Scroll-linked vertical parallax wrapper.
 *
 * As the wrapped section travels through the viewport its inner content is
 * translated on Y, creating the parallax depth effect — without changing
 * layout flow. The wrapper itself participates in the document like any
 * other block; only ``translateY`` is animated, so neighbouring sections
 * are unaffected.
 *
 * The default ``distance`` of 60 means: content sits at +60 px when the
 * section first appears at the bottom of the viewport and at –60 px by the
 * time the section exits the top. Adjust per section if a tile should
 * scroll faster (front layer) or slower (back layer).
 *
 * ``useReducedMotion`` honours the OS-level prefers-reduced-motion setting
 * — translation is short-circuited to zero when on, so the page is still
 * usable for visitors who need motion suppressed.
 */
export function Parallax({
  children,
  distance = 60,
  className,
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [distance, -distance],
  );
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
