"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Wraps a slide's content with scroll-linked parallax. As the slide
 * enters from below the content drifts up at ~0.4x of scroll velocity,
 * passes through neutral at viewport-centre, then continues drifting
 * upward as the slide exits to the top. The eye registers the
 * differential between content (slow) and the slide frame (snapping)
 * as depth — i.e. parallax.
 *
 * Only ``transform`` and ``opacity`` animate, both compositor-safe,
 * so the motion runs entirely on the GPU. ``prefers-reduced-motion``
 * flattens distance to zero — the wrapper is still in the tree but
 * never moves.
 *
 * Default ``distance`` is 80 px. Bump it to 120 px for sections where
 * you want the content to feel more dramatic (Hero, SeedAsk).
 */
export function SlideParallax({
  children,
  distance = 80,
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
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    reduce ? [1, 1, 1, 1] : [0.35, 1, 1, 0.35],
  );

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={`transform-gpu ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}
