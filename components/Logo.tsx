'use client'

import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { logo: 'h-7 w-7',  text: 'text-xl' },
  md: { logo: 'h-9 w-9',  text: 'text-2xl' },
  lg: { logo: 'h-12 w-12', text: 'text-3xl' },
}

// Brand lockup: CMYK Venn mark + ZOO AI wordmark, matching the real
// Zoo logo from the pitch deck cover ("ZOO AI · Open AI for the future
// of tomorrow.").
export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  return (
    <Link href="/" className={cn('flex items-center gap-2.5 group', className)}>
      <Image
        src="/zoo-logo.svg"
        alt="ZOO INDUSTRIES"
        width={48}
        height={48}
        className={cn(sizes[size].logo, 'transition-transform duration-300 group-hover:scale-105')}
        priority
      />
      {showText && (
        <span className={cn(
          'font-extrabold uppercase tracking-tight transition-colors duration-300',
          sizes[size].text,
          'text-foreground group-hover:text-foreground/90'
        )}>
          ZOO&nbsp;<span className="font-light">INDUSTRIES</span>
        </span>
      )}
    </Link>
  )
}
