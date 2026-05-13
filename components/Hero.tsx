'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { KeyRound, Sparkles, BookOpen } from 'lucide-react'
import site from '@/site.config'

// Floating modality cards laid out around the robot mascot. Each entry
// targets a position around the centre — desktop only; on mobile we just
// fan them under the mascot in a wrapped row so the page still works.
const modalityCards = [
  { src: '/home/11_modality_text_card.png',   alt: 'Text',   className: 'top-[2%]   left-[6%]   w-28 md:w-36' },
  { src: '/home/11_modality_audio_card.png',  alt: 'Audio',  className: 'top-[8%]   right-[18%] w-28 md:w-36' },
  { src: '/home/11_modality_vision_card.png', alt: 'Vision', className: 'top-[28%]  left-[2%]  w-28 md:w-36' },
  { src: '/home/11_modality_code_card.png',   alt: 'Code',   className: 'top-[32%]  right-[6%] w-28 md:w-36' },
  { src: '/home/11_modality_video_card.png',  alt: 'Video',  className: 'top-[56%]  left-[8%]  w-28 md:w-36' },
  { src: '/home/11_modality_agents_card.png', alt: 'Agents', className: 'top-[58%]  right-[10%] w-28 md:w-36' },
  { src: '/home/11_modality_3d_card.png',     alt: '3D',     className: 'bottom-[4%] right-[28%] w-28 md:w-36' },
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

          {/* Right — geometric stage with mascot + floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative aspect-[4/3] w-full max-w-[640px] mx-auto"
          >
            <Image
              src="/home/10_hero_geometric_backdrop.png"
              alt=""
              aria-hidden
              fill
              priority
              className="object-contain select-none pointer-events-none"
            />
            <Image
              src="/home/09_robot_mascot.png"
              alt="Zoo robot mascot"
              width={520}
              height={520}
              priority
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[42%] w-[58%] h-auto select-none"
            />
            {modalityCards.map((c, i) => (
              <motion.div
                key={c.alt}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                className={`absolute ${c.className} select-none`}
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
