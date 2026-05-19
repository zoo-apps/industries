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

  // Brutalist nav: full-bleed bar, single hard bottom border. Background
  // becomes opaque + blurs once the user scrolls so the navbar sits cleanly
  // over body content. No rounded pill, no shadow halo — square edges only.
  return (
    <nav
      className={cn(
        'fixed top-10 left-0 right-0 z-50 transition-colors duration-200',
        scrolled
          ? 'bg-background/85 backdrop-blur-md border-b-2 border-black'
          : 'bg-transparent border-b-2 border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        {children}
      </div>
    </nav>
  )
}
