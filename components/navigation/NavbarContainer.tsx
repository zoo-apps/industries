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

  // Brutalist nav: solid white at all times. Hard 2-px black bottom
  // border on scroll for separation; transparent border off-scroll so
  // the bar reads as one continuous slab with the TopBanner above.
  // No frosted blur, no opacity — the white must be unambiguous over
  // the iridescent page gradient + hero.
  return (
    <nav
      className={cn(
        'fixed left-0 right-0 z-50 transition-colors duration-200 top-[38px] bg-white dark:bg-black',
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
