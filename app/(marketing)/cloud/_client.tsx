'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Cloud, Brain, Server, Bot, MessageSquare, Code2, Smartphone, Database,
  Shield, KeyRound, ArrowRight, Sparkles, Wallet,
} from 'lucide-react'
import site from '@/site.config'

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

const stack = [
  { h: 'Zen models',     p: '45+ open-weight models across 8 modalities — text, vision, image, video, audio, code, 3D, agents.', icon: Brain,         href: '/models',   color: 'pill-pink' },
  { h: 'Zoo Engine',     p: 'Pooled GPU inference. H100s, MI300X, Trainium, idle Apple silicon — routed by latency and cost.', icon: Server,         href: '/engine',   color: 'pill-blue' },
  { h: 'Zoo Bot',        p: 'AI team in a box. Specialised agents that share memory, tools, and brand voice.',                  icon: Bot,            href: '/bot',      color: 'pill-yellow' },
  { h: 'Zoo Dev',        p: 'Engineering agent that lives in your repo, runs your tests, opens real PRs.',                       icon: Code2,          href: '/dev',      color: 'pill-cyan' },
  { h: 'Zoo Chat',       p: 'One chat for every Zen model. Workspaces, shared bots, E2E encrypted.',                             icon: MessageSquare,  href: '/chat',     color: 'pill-green' },
  { h: 'Zoo Edge',       p: 'On-device Zen. zen-nano on a phone, zen-eco on a laptop, fully offline.',                           icon: Smartphone,     href: '/edge',     color: 'pill-red' },
]

const platform = [
  { h: 'Workspaces & identity', p: 'Zoo ID DIDs for humans and agents. Per-workspace policy, on-chain audit, SSO into your IdP.' },
  { h: 'Object storage',        p: 'S3-compatible buckets with optional confidential mode. Models and agents read from buckets directly.' },
  { h: 'Vector store',          p: 'Built-in vector DB tuned for zen-embedding. No second piece of infrastructure to deploy.' },
  { h: 'Token billing',         p: 'Per-token metering across every product. Pay in $AI from your wallet or by card — same invoice.' },
  { h: 'On-chain receipts',     p: 'Every API call is an attestation on Zoo Network. Auditable, replayable, exportable to your SIEM.' },
  { h: 'Compliance posture',    p: 'SOC 2-aligned controls, region pinning, data-residency policy, TEE inference on supported SKUs.' },
]

export default function PageClient() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...fade} transition={{ duration: 0.5 }}>
            <span className="inline-block mt-6 mb-6 text-sm md:text-base font-extrabold uppercase tracking-[0.2em] underline underline-offset-[6px] decoration-2">
              Zoo Cloud
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              One platform.<br />Every Zoo.
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-muted-foreground">
              Models, inference, agents, chat, edge — composed under one
              workspace, billed by token, settled on the Zoo Network. The
              foundation behind every Zoo Industries deployment, and the
              fastest way to ship AI without picking eight vendors.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://zoo.cloud" target="_blank" rel="noopener noreferrer">
                <button className="btn-brutalist pill-pink">
                  <Cloud className="w-4 h-4" />
                  Open Zoo Cloud
                </button>
              </a>
              <Link href="/api">
                <button className="btn-brutalist pill-blue">
                  <Brain className="w-4 h-4" />
                  Model API
                </button>
              </Link>
              <Link href="/pricing">
                <button className="btn-brutalist pill-green">
                  <Wallet className="w-4 h-4" />
                  Pricing
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fade} transition={{ duration: 0.5 }} className="mb-10">
            <span className="pill pill-yellow text-lg md:text-2xl">The stack</span>
            <h2 className="mt-10 md:mt-12 text-2xl md:text-3xl font-extrabold underline underline-offset-4">
              Six products. One brain.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {stack.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.h}
                  {...fade}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] p-5 md:p-6 text-black"
                >
                  <div className={`w-10 h-10 border-2 border-black flex items-center justify-center mb-3 ${s.color}`}>
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                  <h4 className="text-lg md:text-xl font-extrabold uppercase tracking-tight mb-2">{s.h}</h4>
                  <p className="text-sm md:text-base font-medium text-black/80 mb-3">{s.p}</p>
                  <Link href={s.href} className="text-sm font-extrabold uppercase tracking-wider underline underline-offset-4 inline-flex items-center gap-1">
                    Open <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-foreground/5">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fade} transition={{ duration: 0.5 }} className="mb-10">
            <span className="pill pill-cyan text-lg md:text-2xl">Underneath</span>
            <h2 className="mt-10 md:mt-12 text-2xl md:text-3xl font-extrabold underline underline-offset-4">
              Identity, storage, billing, audit — without the integration tax.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {platform.map((f, i) => (
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
            Pick eight vendors. Or pick one.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Zoo Cloud composes the whole stack — models, GPU, agents, identity,
            billing — under one workspace, with one bill, and one audit log.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://zoo.cloud" target="_blank" rel="noopener noreferrer">
              <button className="btn-brutalist pill-pink">
                <Sparkles className="w-4 h-4" />
                Start free
              </button>
            </a>
            <a href={site.links.modelApi} target="_blank" rel="noopener noreferrer">
              <button className="btn-brutalist pill-green">
                <KeyRound className="w-4 h-4" />
                Or just the API
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
