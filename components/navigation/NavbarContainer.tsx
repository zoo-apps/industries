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

  // Brutalist nav: full-bleed bar, single hard bottom border. Pinned
  // flush against the TopBanner at ``top-[38px]``. Background is solid
  // ``bg-white`` (no /opacity, no backdrop-blur) — at lower opacities
  // the iridescent body gradient bled through and ``backdrop-blur``
  // averaged the colors into a muddy grey, which read as a "dark
  // overlay" on production. Solid white reads cleanly at every scroll
  // position over every gradient hue.
  return (
    <nav
      className={cn(
        'fixed left-0 right-0 z-50 transition-shadow duration-200 top-[38px] bg-white',
        scrolled
          ? 'border-b-2 border-black'
          : 'border-b-2 border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        {children}
      </div>
    </nav>
  )
}
