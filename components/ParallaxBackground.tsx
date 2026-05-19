"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Real parallax backdrop.
 *
 * Big soft brand-colour blobs pinned with ``position: fixed`` so they
 * stay inside the viewport while the page scrolls. Each blob also has a
 * scroll-linked Y/X offset (much smaller than the page travel) so it
 * drifts slightly as you scroll — the eye reads the foreground moving
 * past a slower-moving backdrop and registers depth. That's parallax in
 * the literal sense: two layers, two scroll rates.
 *
 * The blobs sit behind everything (``-z-10``) and are pointer-events:none,
 * so they never affect layout or interaction. They blur to a soft wash so
 * they read as atmosphere rather than as content.
 *
 * ``prefers-reduced-motion`` flattens the drift to zero; the wash still
 * shows but no longer animates.
 */
export function ParallaxBackground() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Three layers, each drifting different amounts and directions across
  // the entire scroll length. Foreground content moves at scroll rate 1;
  // these layers move at fractions thereof — that's where parallax depth
  // comes from. Reduced-motion users get static blobs.
  const y1 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -240]);
  const y2 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -380]);
  const y3 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -160]);
  const x1 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 80]);
  const x2 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -120]);
  const x3 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 60]);

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
    >
      {/* Yellow blob — top-left */}
      <motion.div
        style={{ y: y1, x: x1, background: "var(--brand-yellow)" }}
        className="absolute -top-[15vh] -left-[10vw] w-[55vw] h-[55vw] rounded-full opacity-40 blur-3xl"
      />
      {/* Magenta blob — top-right */}
      <motion.div
        style={{ y: y2, x: x2, background: "var(--brand-magenta)" }}
        className="absolute -top-[20vh] -right-[15vw] w-[60vw] h-[60vw] rounded-full opacity-35 blur-3xl"
      />
      {/* Blue blob — bottom-left, lazier */}
      <motion.div
        style={{ y: y3, x: x3, background: "var(--brand-blue)" }}
        className="absolute -bottom-[10vh] -left-[15vw] w-[50vw] h-[50vw] rounded-full opacity-30 blur-3xl"
      />
      {/* Green blob — bottom-right, mirror of yellow */}
      <motion.div
        style={{ y: y2, x: x1, background: "var(--brand-green)" }}
        className="absolute -bottom-[20vh] -right-[10vw] w-[55vw] h-[55vw] rounded-full opacity-30 blur-3xl"
      />
      {/* Cyan blob — centre, smallest, slowest */}
      <motion.div
        style={{ y: y3, x: x2, background: "var(--brand-cyan)" }}
        className="absolute top-[40vh] left-[35vw] w-[35vw] h-[35vw] rounded-full opacity-25 blur-3xl"
      />
    </div>
  );
}
