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
  { src: '/homepagesquares/text.svg',   alt: 'Text',   pos: 'top-[6%]   left-[26%]',  size: 'w-20 md:w-28', rot: '-rotate-[4deg]' },
  { src: '/homepagesquares/audio.svg',  alt: 'Audio',  pos: 'top-[10%]  right-[8%]',  size: 'w-20 md:w-28', rot: 'rotate-[3deg]' },
  { src: '/homepagesquares/vision.svg', alt: 'Vision', pos: 'top-[32%]  left-[10%]',  size: 'w-20 md:w-28', rot: '-rotate-[3deg]' },
  { src: '/homepagesquares/code.svg',   alt: 'Code',   pos: 'top-[36%]  right-[4%]',  size: 'w-20 md:w-28', rot: '-rotate-[3deg]' },
  { src: '/homepagesquares/videos.svg', alt: 'Video',  pos: 'top-[58%]  left-[18%]',  size: 'w-20 md:w-28', rot: '-rotate-[4deg]' },
  { src: '/homepagesquares/agents.svg', alt: 'Agents', pos: 'top-[62%]  right-[2%]',  size: 'w-20 md:w-28', rot: '-rotate-[3deg]' },
  { src: '/homepagesquares/3D.svg',     alt: '3D',     pos: 'bottom-[2%] right-[22%]', size: 'w-20 md:w-28', rot: 'rotate-[4deg]' },
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

          {/* Right — geometric stage. Backdrop is built in CSS (pink and
              lime solid circles + wide concrete wall) so the proportions
              match the comp without being constrained by the composite
              PNG's narrow clipboard-style platform. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative aspect-[19/14] w-full max-w-[720px] mx-auto"
          >
            {/* Pink circle — large, behind the robot, slightly above centre. */}
            <div
              aria-hidden
              className="absolute"
              style={{
                top: '4%',
                left: '24%',
                width: '54%',
                aspectRatio: '1 / 1',
                background: '#f0a8d8',
                borderRadius: '9999px',
              }}
            />
            {/* Lime circle — right edge, peeking from behind. */}
            <div
              aria-hidden
              className="absolute"
              style={{
                top: '14%',
                right: '-6%',
                width: '46%',
                aspectRatio: '1 / 1',
                background: '#c8e83a',
                borderRadius: '9999px',
              }}
            />
            {/* Concrete wall — full width, lower half, with two dark
                circular "screws" at the left and right. */}
            <div
              aria-hidden
              className="absolute left-0 right-0"
              style={{
                bottom: 0,
                height: '40%',
                background: '#d6d0c4',
                borderTop: '2px solid #000',
              }}
            >
              <div
                className="absolute rounded-full bg-[#7a7568] border-2 border-black"
                style={{ left: '6%', top: '38%', width: '4%', aspectRatio: '1 / 1' }}
              />
              <div
                className="absolute rounded-full bg-[#7a7568] border-2 border-black"
                style={{ right: '6%', top: '38%', width: '4%', aspectRatio: '1 / 1' }}
              />
            </div>
            {/* Mascot: bottom clipped at the concrete top edge so it
                visually peeks over the wall. */}
            <Image
              src="/home/09_robot_mascot.png"
              alt="Zoo robot mascot"
              width={520}
              height={520}
              priority
              className="absolute left-1/2 top-[12%] -translate-x-1/2 w-[44%] h-auto select-none"
              style={{ clipPath: 'inset(0 0 22% 0)' }}
            />
            {modalityCards.map((c, i) => (
              <motion.div
                key={c.alt}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                className={`absolute ${c.pos} ${c.size} ${c.rot} select-none`}
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
