"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Scroll-triggered reveal — content fades + drifts up + scales in as it
 * enters the viewport. Mirrors the timing curves used on Apple, Linear,
 * Vercel: long-tail easeOutQuint, ~700 ms duration, modest distance.
 *
 * Use as a sibling-spacing primitive: each ``<Reveal delay={n*0.05}>``
 * staggers smoothly without per-component scroll listeners. ``once``
 * makes the animation play a single time (prevents re-firing on
 * back-scroll, which feels twitchy).
 *
 * Honours ``prefers-reduced-motion`` — children render at the final state
 * with no animation when the OS toggle is on.
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  scale = 0.985,
  duration = 0.7,
  once = true,
  className,
}: {
  children: ReactNode;
  /** Seconds of head-start before this element animates — useful for stagger. */
  delay?: number;
  /** Starting Y offset in px (positive = comes from below). */
  y?: number;
  /** Starting scale. 1 disables the scale-in. */
  scale?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, margin: "0px 0px -12% 0px" }}
      transition={{
        duration,
        delay,
        // easeOutQuint — pro sites' favourite. Fast start, long tail.
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
