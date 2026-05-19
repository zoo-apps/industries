'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

/**
 * Zen5 launch banner. Background is an animated rainbow gradient — the
 * gradient is large (300%) and its position is animated, so the colours
 * appear to drift across the bar. ``background-position`` is one of the
 * few CSS properties that can be hardware-accelerated cleanly on most
 * browsers; the animation uses ``ease-in-out`` so the loop is seamless.
 *
 * The keyframes live inline (no globals edit needed) and respect
 * ``prefers-reduced-motion`` via the media query at the bottom.
 */
export default function TopBanner() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
.rainbow-banner {
  background-image: linear-gradient(90deg,
    var(--brand-yellow),
    var(--brand-green),
    var(--brand-cyan),
    var(--brand-blue),
    var(--brand-magenta),
    var(--brand-red),
    var(--brand-yellow));
  background-size: 300% 100%;
  animation: rainbow-shift 14s linear infinite;
}
@keyframes rainbow-shift {
  0%   { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}
@media (prefers-reduced-motion: reduce) {
  .rainbow-banner {
    animation: none;
    background-position: 0% 50%;
  }
}
          `,
        }}
      />
      <div className="rainbow-banner fixed top-0 left-0 right-0 z-[60] text-black border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center gap-3 text-center text-sm font-semibold">
          <Sparkles className="w-4 h-4 shrink-0" aria-hidden />
          <span className="truncate">
            Zen5 is here — the open AI model family, private and local
          </span>
          <Link
            href="/research"
            className="inline-flex items-center gap-1 font-extrabold uppercase tracking-wide underline underline-offset-2 hover:no-underline shrink-0"
          >
            Learn more <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </>
  )
}
