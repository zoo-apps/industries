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

  // Apple-style frosted glass nav.
  //
  // Top of page (not scrolled): fully transparent — no bg, no border,
  // no blur. The hero gradient flows through cleanly behind the logo +
  // nav links. The wordmark itself carries the page identity.
  //
  // Scrolled past 50px: switch to translucent frosted glass. Heavy
  // backdrop-blur (xl + saturate boost) imitates iOS / macOS chrome,
  // sitting *on top of* the page rather than replacing it. Subtle
  // hairline border + tiny shadow gives the slab depth without going
  // grey. Dark-mode mirrors the same recipe over black.
  return (
    <nav
      className={cn(
        'fixed left-0 right-0 z-50 top-[38px] transition-all duration-300',
        scrolled
          ? 'bg-white/60 dark:bg-black/50 backdrop-blur-2xl backdrop-saturate-150 border-b border-black/5 dark:border-white/10 shadow-[0_1px_0_0_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.12)]'
          : 'bg-transparent border-b border-transparent backdrop-blur-0'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        {children}
      </div>
    </nav>
  )
}
