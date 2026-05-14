'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { KeyRound, Sparkles, BookOpen } from 'lucide-react'
import site from '@/site.config'

// Floating modality cards laid out around the robot mascot, matching
// the comp: a top arc (text / audio), a middle band straddling the
// concrete wall (vision / code), and a lower tier on the platform
// (video / agents / 3D). Subtle rotation per card so they read as
// individually placed rather than gridded.
const modalityCards = [
  { src: '/homepagesquares/3D.svg',     alt: '3D',     pos: 'top-[4%]   left-[16%]',  size: 'w-20 md:w-28', rot: 'rotate-[4deg]' },
  { src: '/homepagesquares/text.svg',   alt: 'Text',   pos: 'top-[2%]   left-[46%]',  size: 'w-20 md:w-28', rot: '-rotate-[4deg]' },
  { src: '/homepagesquares/vision.svg', alt: 'Vision', pos: 'top-[28%]  left-[6%]',   size: 'w-20 md:w-28', rot: '-rotate-[5deg]' },
  { src: '/homepagesquares/audio.svg',  alt: 'Audio',  pos: 'top-[24%]  right-[10%]', size: 'w-20 md:w-28', rot: 'rotate-[3deg]' },
  { src: '/homepagesquares/code.svg',   alt: 'Code',   pos: 'top-[46%]  right-[14%]', size: 'w-20 md:w-28', rot: '-rotate-[3deg]' },
  { src: '/homepagesquares/videos.svg', alt: 'Video',  pos: 'bottom-[10%] left-[2%]', size: 'w-20 md:w-28', rot: '-rotate-[4deg]' },
  { src: '/homepagesquares/agents.svg', alt: 'Agents', pos: 'bottom-[8%] right-[8%]', size: 'w-20 md:w-28', rot: 'rotate-[3deg]' },
]

const features = [
  { src: '/home/12_feature_45_open_models.png',       alt: '45+ Open Models',         h: '45+ OPEN MODELS',     p: 'From 0.6B to 1T+ parameters across every modality.' },
  { src: '/home/13_feature_one_api_all_modalities.png', alt: 'One API. All Modalities', h: 'ONE API. ALL MODALITIES.', p: 'Text, vision, image, video, audio, code, 3D, and agents.' },
  { src: '/home/14_feature_openai_compatible.png',    alt: 'OpenAI-Compatible',       h: 'OPENAI-COMPATIBLE',   p: 'Same SDK, same JSON. Seamless integration.' },
  { src: '/home/15_feature_enterprise_ready.png',     alt: 'Enterprise Ready',        h: 'ENTERPRISE READY',    p: 'Secure, scalable, and built for production.' },
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

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center relative">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <span className="inline-block mb-6 px-3 py-1 text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] bg-[var(--brand-blue)] text-[var(--brand-yellow)] border-2 border-black">
              Zen Model API
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-extrabold uppercase tracking-[-0.02em] leading-[0.95] text-foreground">
              One endpoint.<br />Every modality.
            </h1>
            <p className="mt-6 md:mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              OpenAI-compatible API for 45+ open-weight Zen models — edge to
              frontier, 0.6B to 1T+ parameters — across text, vision, image,
              video, audio, code, 3D, and agents. Same SDK, same JSON, your
              choice of model.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={site.links.modelApi} target="_blank" rel="noopener noreferrer">
                <button
                  className="inline-flex items-center gap-2 px-5 md:px-6 py-3 md:py-3.5 text-sm md:text-base font-extrabold uppercase tracking-wider bg-[var(--brand-yellow)] text-black border-2 border-black shadow-[6px_6px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000] transition-all"
                >
                  <KeyRound className="w-4 h-4" />
                  Get an API key
                </button>
              </a>
              <a href={site.links.huggingFace} target="_blank" rel="noopener noreferrer">
                <button
                  className="inline-flex items-center gap-2 px-5 md:px-6 py-3 md:py-3.5 text-sm md:text-base font-extrabold uppercase tracking-wider bg-[var(--brand-magenta)] text-black border-2 border-black shadow-[6px_6px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000] transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  Browse weights
                </button>
              </a>
              <Link href="/models">
                <button
                  className="inline-flex items-center gap-2 px-5 md:px-6 py-3 md:py-3.5 text-sm md:text-base font-extrabold uppercase tracking-wider bg-[var(--brand-blue)] text-[var(--brand-yellow)] border-2 border-black shadow-[6px_6px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000] transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  Model catalog
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right — geometric stage. Backdrop is circles.svg (orange/red
              and yellow gradient circles), the zebra peeks over a CSS
              picket fence drawn in front of it, and the seven modality
              cards float around. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative aspect-[5/4] w-full max-w-[720px] mx-auto"
          >
            {/* Backdrop circles — sit behind everything. */}
            <Image
              src="/homepagesquares/circles.svg"
              alt=""
              aria-hidden
              fill
              priority
              className="object-contain select-none pointer-events-none z-0"
            />
            {/* Zebra mascot — centred, peeking over the fence. */}
            <Image
              src="/homepagesquares/zebra.svg"
              alt="Zoo zebra mascot"
              width={1200}
              height={900}
              priority
              className="absolute left-1/2 top-[18%] -translate-x-1/2 w-[48%] h-auto select-none z-10"
            />
            {/* White picket fence — bottom 38% of the frame, in front of
                the zebra, behind the cards. */}
            <div aria-hidden className="absolute left-0 right-0 bottom-0 h-[36%] z-20 flex items-end gap-[1%] px-[2%]">
              {Array.from({ length: 11 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-full bg-white border-2 border-black"
                  style={{ clipPath: 'polygon(0% 12%, 50% 0%, 100% 12%, 100% 100%, 0% 100%)' }}
                />
              ))}
              {/* Horizontal rail across the pickets */}
              <div className="absolute left-[2%] right-[2%] top-[55%] h-[6%] bg-white border-y-2 border-black" />
            </div>
            {/* Modality cards — top layer, scatter around the mascot. */}
            {modalityCards.map((c, i) => (
              <motion.div
                key={c.alt}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                className={`absolute z-30 ${c.pos} ${c.size} ${c.rot} select-none`}
              >
                <Image src={c.src} alt={c.alt} width={190} height={190} className="w-full h-auto" />
              </motion.div>
            ))}
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
