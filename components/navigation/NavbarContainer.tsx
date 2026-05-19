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

  // Brutalist nav: no rounded pill. Transparent until scrolled, then a
  // sharp-edged backdrop-blur strip so type stays legible over content
  // without introducing a curved-pill silhouette that fights the blocky
  // page treatment. Border-b-only keeps the bar visually flat.
  return (
    <nav className="fixed top-10 left-0 right-0 z-50 transition-colors duration-300">
      <div
        className={cn(
          'transition-colors duration-300',
          scrolled
            ? 'backdrop-blur-md bg-background/80 border-b-2 border-black'
            : 'bg-transparent',
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          {children}
        </div>
      </div>
    </nav>
  )
}
