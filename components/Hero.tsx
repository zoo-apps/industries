'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Download, Coins, BookOpen } from 'lucide-react'

const features = [
  { src: '/home/12_feature_45_open_models.png',       alt: 'Free + open',     h: 'FREE + OPEN',         p: '45+ open Zen models. No subscription. No vendor lock-in.' },
  { src: '/home/13_feature_one_api_all_modalities.png', alt: 'Stays on your machine', h: 'STAYS ON YOUR MACHINE', p: 'Run AI locally — chat, images, voice, code. Your data never leaves.' },
  { src: '/home/14_feature_openai_compatible.png',    alt: 'Earn AI coin',     h: 'EARN AI COIN',        p: 'Share spare GPU + data and get paid. Mine coin while you sleep.' },
  { src: '/home/15_feature_enterprise_ready.png',     alt: 'Built by the community', h: 'BUILT BY THE COMMUNITY', p: 'Open source, audited, owned by the people using it.' },
]

export default function Hero() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-8 overflow-hidden bg-background">
        {/* Decorative dot grid — top right, desktop only */}
        <Image
          src="/home/17_dot_grid.png"
          alt=""
          aria-hidden
          width={280}
          height={180}
          className="hidden md:block absolute top-24 right-8 lg:right-16 opacity-90 select-none pointer-events-none"
        />

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
              <Image src={f.src} alt={f.alt} width={120} height={120} className="w-14 h-14 md:w-16 md:h-16 shrink-0" />
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
