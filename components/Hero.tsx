'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Download,
  Coins,
  BookOpen,
  Unlock,
  Laptop,
  Pickaxe,
  Users,
  type LucideIcon,
} from 'lucide-react'

type Feature = { icon: LucideIcon; tint: string; h: string; p: string }

const features: Feature[] = [
  { icon: Unlock,  tint: 'var(--brand-yellow)',  h: 'FREE + OPEN',          p: '45+ open Zen models. No subscription. No vendor lock-in.' },
  { icon: Laptop,  tint: 'var(--brand-cyan)',    h: 'STAYS ON YOUR MACHINE', p: 'Run AI locally — chat, images, voice, code. Your data never leaves.' },
  { icon: Pickaxe, tint: 'var(--brand-magenta)', h: 'EARN AI COIN',          p: 'Share spare GPU + data and get paid. Mine coin while you sleep.' },
  { icon: Users,   tint: 'var(--brand-green)',   h: 'BUILT BY THE COMMUNITY', p: 'Open source, audited, owned by the people using it.' },
]

export default function Hero() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-8 overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto relative">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-[-0.02em] leading-[0.95] text-foreground">
              Your AI.<br />Your data.<br />Your coin.
            </h1>
            <p className="mt-6 md:mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Stop renting AI from giants. Run powerful open Zen models on
              your own laptop — chat, images, voice, code — with nothing leaving
              your machine. Share your spare GPU and data, and earn AI coin in
              return. Yours to keep. Yours to spend.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/install">
                <button
                  className="inline-flex items-center gap-2 px-5 md:px-6 py-3 md:py-3.5 text-sm md:text-base font-extrabold uppercase tracking-wider bg-[var(--brand-yellow)] text-black border-2 border-black shadow-[6px_6px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000] transition-all"
                >
                  <Download className="w-4 h-4" />
                  Run Zen at home
                </button>
              </Link>
              <Link href="/cloud">
                <button
                  className="inline-flex items-center gap-2 px-5 md:px-6 py-3 md:py-3.5 text-sm md:text-base font-extrabold uppercase tracking-wider bg-[var(--brand-magenta)] text-black border-2 border-black shadow-[6px_6px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000] transition-all"
                >
                  <Coins className="w-4 h-4" />
                  Start earning coin
                </button>
              </Link>
              <Link href="/models">
                <button
                  className="inline-flex items-center gap-2 px-5 md:px-6 py-3 md:py-3.5 text-sm md:text-base font-extrabold uppercase tracking-wider bg-[var(--brand-blue)] text-white border-2 border-black shadow-[6px_6px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000] transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  Browse models
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="relative border-y-2 border-black bg-[var(--brand-yellow)]/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
          {features.map((f) => (
            <div key={f.h} className="flex items-center gap-4 px-5 md:px-6 py-5 md:py-6">
              <div
                className="shrink-0 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 border-2 border-black"
                style={{ backgroundColor: f.tint }}
                aria-hidden
              >
                <f.icon className="w-7 h-7 md:w-9 md:h-9 text-black" strokeWidth={2.25} />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm md:text-base font-extrabold uppercase tracking-tight text-foreground">{f.h}</h4>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">{f.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
