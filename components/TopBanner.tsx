'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function TopBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[var(--brand-green)] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center gap-3 text-center text-sm font-semibold">
        <Sparkles className="w-4 h-4 shrink-0" aria-hidden />
        <span className="truncate">Run private AI on your laptop. Earn coin sharing your compute.</span>
        <Link
          href="/install"
          className="inline-flex items-center gap-1 font-extrabold uppercase tracking-wide underline underline-offset-2 hover:no-underline shrink-0"
        >
          Learn more <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  )
}
