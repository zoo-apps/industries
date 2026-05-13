'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Smartphone, Laptop, Watch, Cpu, Lock, WifiOff, Cloud, ArrowRight,
  Brain, Sparkles, Download,
} from 'lucide-react'
import site from '@/site.config'

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

const targets = [
  { h: 'Phone',  model: 'zen-nano',  size: '0.6B', icon: Smartphone, p: 'Sub-second responses on a recent iPhone or Pixel. Works inflight, on the subway, off-grid.', color: 'pill-pink' },
  { h: 'Laptop', model: 'zen-eco',   size: '4B',   icon: Laptop,     p: 'Local on Apple silicon, Snapdragon X, or any 16GB Linux box. CPU-only fallback for older hardware.', color: 'pill-yellow' },
  { h: 'Watch / wearable', model: 'zen-nano-q4', size: '0.6B int4', icon: Watch, p: 'Quantised to int4 for wrist-scale silicon. Always-on intent classification, never sends raw audio off the wrist.', color: 'pill-cyan' },
  { h: 'Edge box / router', model: 'zen-eco / zen-omni', size: '4-8B', icon: Cpu, p: 'Drop-in for home Wi-Fi or a branch router. Local family / staff inference, cloud fall-through optional.', color: 'pill-green' },
]

const features = [
  { h: 'Fully offline',       p: 'Once the weights are local, no request leaves the device. The app works on a plane, in a basement, in a SCIF.' },
  { h: 'Cloud fall-through',  p: 'When the task exceeds local capacity, fall through to Zoo Engine — with your consent, per request, in plain English.' },
  { h: 'Hardware-attested',   p: 'Optional TEE/secure-enclave attestation. The app proves the model has not been tampered with before you trust an answer.' },
  { h: 'Quantised, calibrated', p: 'Int8 and int4 ports calibrated against the float reference. We publish the accuracy delta — no silent regressions.' },
  { h: 'Same SDK as cloud',   p: 'Same Python / TS / Swift / Kotlin client as Zen API. Set base_url to localhost, the rest of your code is unchanged.' },
  { h: 'OTA model updates',   p: 'Signed model packages, delta updates, rollback. Pin to a version when stability matters more than newness.' },
]

export default function PageClient() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...fade} transition={{ duration: 0.5 }}>
            <span className="inline-block mt-6 mb-6 text-sm md:text-base font-extrabold uppercase tracking-[0.2em] underline underline-offset-[6px] decoration-2">
              Zoo Edge
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Zen on the<br />device. No cloud.
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-muted-foreground">
              zen-nano in your pocket, zen-eco on your laptop, zen-coder in your
              IDE — same models as the API, just running where your data already
              lives. Fully offline by default, with optional cloud fall-through
              when you really need a 1T-parameter answer.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={site.links.edge} target="_blank" rel="noopener noreferrer">
                <button className="btn-brutalist pill-pink">
                  <Download className="w-4 h-4" />
                  Install Zoo Edge
                </button>
              </a>
              <a href={site.links.huggingFace} target="_blank" rel="noopener noreferrer">
                <button className="btn-brutalist pill-green">
                  <Sparkles className="w-4 h-4" />
                  Grab the weights
                </button>
              </a>
              <Link href="/engine">
                <button className="btn-brutalist pill-blue">
                  <Cloud className="w-4 h-4" />
                  When you need cloud
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fade} transition={{ duration: 0.5 }} className="mb-10">
            <span className="pill pill-yellow text-lg md:text-2xl">Where it runs</span>
            <h2 className="mt-10 md:mt-12 text-2xl md:text-3xl font-extrabold underline underline-offset-4">
              Phone, laptop, watch, router — same brain, scaled to the silicon.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {targets.map((t, i) => {
              const Icon = t.icon
              return (
                <motion.div
                  key={t.h}
                  {...fade}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] p-5 md:p-6 text-black"
                >
                  <div className={`w-10 h-10 border-2 border-black flex items-center justify-center mb-3 ${t.color}`}>
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                  <h4 className="text-lg md:text-xl font-extrabold uppercase tracking-tight">{t.h}</h4>
                  <p className="text-xs font-mono text-black/60 mb-2">{t.model} · {t.size}</p>
                  <p className="text-sm md:text-base font-medium text-black/80">{t.p}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-foreground/5">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fade} transition={{ duration: 0.5 }} className="mb-10">
            <span className="pill pill-cyan text-lg md:text-2xl">Why on-device matters</span>
            <h2 className="mt-10 md:mt-12 text-2xl md:text-3xl font-extrabold underline underline-offset-4">
              The cloud is great when you need it. Edge is great when you don't.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.h}
                {...fade}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-5 md:p-6 bg-white border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] text-black"
              >
                <h4 className="text-lg md:text-xl font-extrabold uppercase mb-2 tracking-tight">{f.h}</h4>
                <p className="text-sm md:text-base font-medium text-black/80">{f.p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Your model. Your device. Your data.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Apache 2.0 weights. Open SDKs. No phone-home. When you outgrow the
            local chip, the same SDK falls through to Zoo Engine on your terms.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={site.links.edge} target="_blank" rel="noopener noreferrer">
              <button className="btn-brutalist pill-pink">
                <Smartphone className="w-4 h-4" />
                Get Zoo Edge
              </button>
            </a>
            <Link href="/api">
              <button className="btn-brutalist pill-green">
                <Brain className="w-4 h-4" />
                Same SDK, cloud-side
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
