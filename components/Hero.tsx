'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import site from '@/site.config'

export default function Hero() {
  // Scroll-linked drift on the zoo composite. As the hero leaves the
  // viewport, the artwork translates upward and fades out a touch,
  // letting the next section meet the reader at a clean baseline.
  const heroRef = useRef<HTMLDivElement | null>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -160])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.4])
  const headlineY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -40])

  return (
    <div ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 bg-background">
      {/* Background: CSS-only grid + blurred radial dots. No images, no icons. */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] bg-foreground/5" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] bg-foreground/[0.03]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        {/* Two-column on lg+: text left, image right. On mobile the grid
            stacks; per spec the image renders first (above the text) on
            small screens — done with ``order-1`` on the image column and
            ``order-2`` on the text, both reset on ``lg+`` so desktop reads
            left-to-right.
            ``items-end`` on lg+ aligns the bottom of the image with the
            bottom of the text column — i.e. the bottom row of buttons. */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center lg:items-end">
          {/* Text column. Scroll-linked Y drift on the whole column so as
              the hero scrolls off-screen the headline rises slightly,
              giving the page a "settling" feel rather than a hard cut. */}
          <motion.div
            style={{ y: headlineY }}
            className="order-2 lg:order-none text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground"
            >
              AI research and infrastructure
              <br />
              <span className="text-muted-foreground">as open, public goods.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed text-muted-foreground"
            >
              Zoo builds open-weight models, cloud infrastructure, and agent
              frameworks — freely available to researchers, developers, and the
              broader AI ecosystem. 727+ open source repos. MIT and Apache
              licensed. 25% of compute revenue goes back to OSS contributors.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/research">
                <button className="btn-brutalist pill-pink w-full sm:w-auto">
                  Explore Our Research
                </button>
              </Link>
              <a href={site.links.platform} target="_blank" rel="noopener noreferrer">
                <button className="btn-brutalist pill-yellow w-full sm:w-auto">
                  Try Zen AI
                </button>
              </a>
              <a href={site.links.bot} target="_blank" rel="noopener noreferrer">
                <button className="btn-brutalist pill-blue w-full sm:w-auto">
                  Deploy AI Team
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Image column. ``lg:scale-[1.25]`` makes the artwork render 25%
              larger on desktop without resizing the grid track (so the text
              column stays its natural width). ``lg:origin-bottom`` keeps the
              scale anchored at the bottom edge — combined with the parent
              grid's ``lg:items-end`` that pins the image's bounding-box
              bottom to the bottom of the text column (i.e. the last row of
              buttons), the visible artwork ends exactly at the same level
              as the bottom of the button row. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            // ``imageY`` / ``imageOpacity`` drive the scroll-linked motion
            // so the artwork drifts upward and fades as the reader scrolls
            // out of the hero. ``style`` composes those scroll motion-
            // values cleanly with the static animate values above.
            // ``lg:translate-y-[40px]`` slides the composite down so the
            // fence lands near the bottom of the brutalist button shadow
            // boxes. ``order-1`` makes the image render first on mobile.
            style={{ y: imageY, opacity: imageOpacity }}
            className="order-1 lg:order-none relative w-full max-w-md sm:max-w-lg lg:max-w-none mx-auto lg:scale-[1.25] lg:origin-bottom lg:translate-y-[40px] overflow-visible drop-shadow-[0_24px_48px_rgba(0,0,0,0.28)]"
          >
            <Image
              src="/hero/zooimg.png"
              alt=""
              aria-hidden
              width={1034}
              height={970}
              priority
              sizes="(min-width: 1024px) 62vw, (min-width: 640px) 32rem, 28rem"
              className="w-full h-auto select-none"
            />
          </motion.div>
        </div>

        {/* Stats row — always full-width below the two-column content. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-12"
        >
          {site.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm mt-1 text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
