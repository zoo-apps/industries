'use client'

import { useState, useEffect, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export default function NavbarContainer({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Brutalist nav: full-bleed bar, single hard bottom border. Sits flush
  // against the TopBanner — pinned via ``top-[var(--banner-h)]`` (set by
  // TopBanner so the two stack cleanly without a stripe of background
  // gradient peeking through). Square edges only; no rounded pill.
  return (
    <nav
      className={cn(
        'fixed left-0 right-0 z-50 transition-colors duration-200 top-[38px]',
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b-2 border-black'
          : 'bg-transparent border-b-2 border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        {children}
      </div>
    </nav>
  )
}
