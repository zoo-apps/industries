'use client'

import { Box, css } from '@hanzo/ui'
import { M } from '@/components/motion'
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
    <Box tag="main" className="bg-background text-foreground">
      <Box tag="section" className="py-24 px-4">
        <Box className="max-w-5xl mx-auto text-center">
          <M {...fade} transition={{ duration: 0.5 }}>
            <Box tag="span" className="inline-block mt-6 mb-6 text-sm md:text-base font-extrabold uppercase tracking-[0.2em] underline underline-offset-[6px] decoration-2">
              Zoo Cloud
            </Box>
            <Box tag="h1" className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              One platform.<br />Every Zoo.
            </Box>
            <Box tag="p" className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-muted-foreground">
              Models, inference, agents, chat, edge — composed under one
              workspace, billed by token, settled on the Zoo Network. The
              foundation behind every Zoo Industries deployment, and the
              fastest way to ship AI without picking eight vendors.
            </Box>
            <Box className="flex flex-wrap gap-4 justify-center">
              <a href="https://zoo.cloud" target="_blank" rel="noopener noreferrer">
                <Box tag="button" className="btn-brutalist pill-pink">
                  <Cloud style={css('w-4 h-4')} />
                  Open Zoo Cloud
                </Box>
              </a>
              <Link href="/api">
                <Box tag="button" className="btn-brutalist pill-blue">
                  <Brain style={css('w-4 h-4')} />
                  Model API
                </Box>
              </Link>
              <Link href="/pricing">
                <Box tag="button" className="btn-brutalist pill-green">
                  <Wallet style={css('w-4 h-4')} />
                  Pricing
                </Box>
              </Link>
            </Box>
          </M>
        </Box>
      </Box>

      <Box tag="section" className="py-16 px-4 md:px-8">
        <Box className="max-w-7xl mx-auto">
          <M {...fade} transition={{ duration: 0.5 }} className="mb-10">
            <Box tag="span" className="pill pill-yellow text-lg md:text-2xl">The stack</Box>
            <Box tag="h2" className="mt-10 md:mt-12 text-2xl md:text-3xl font-extrabold underline underline-offset-4">
              Six products. One brain.
            </Box>
          </M>
          <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {stack.map((s, i) => {
              const Icon = s.icon
              return (
                <M
                  key={s.h}
                  {...fade}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] p-5 md:p-6 text-black"
                >
                  <Box className={`w-10 h-10 border-2 border-black flex items-center justify-center mb-3 ${s.color}`}>
                    <Icon style={css('w-5 h-5 text-black')} />
                  </Box>
                  <Box tag="h4" className="text-lg md:text-xl font-extrabold uppercase tracking-tight mb-2">{s.h}</Box>
                  <Box tag="p" className="text-sm md:text-base font-medium text-black/80 mb-3">{s.p}</Box>
                  <Link href={s.href} style={css('text-sm font-extrabold uppercase tracking-wider underline underline-offset-4 inline-flex items-center gap-1')}>
                    Open <ArrowRight style={css('w-3 h-3')} />
                  </Link>
                </M>
              )
            })}
          </Box>
        </Box>
      </Box>

      <Box tag="section" className="py-16 px-4 md:px-8 bg-foreground/5">
        <Box className="max-w-7xl mx-auto">
          <M {...fade} transition={{ duration: 0.5 }} className="mb-10">
            <Box tag="span" className="pill pill-cyan text-lg md:text-2xl">Underneath</Box>
            <Box tag="h2" className="mt-10 md:mt-12 text-2xl md:text-3xl font-extrabold underline underline-offset-4">
              Identity, storage, billing, audit — without the integration tax.
            </Box>
          </M>
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {platform.map((f, i) => (
              <M
                key={f.h}
                {...fade}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-5 md:p-6 bg-white border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] text-black"
              >
                <Box tag="h4" className="text-lg md:text-xl font-extrabold uppercase mb-2 tracking-tight">{f.h}</Box>
                <Box tag="p" className="text-sm md:text-base font-medium text-black/80">{f.p}</Box>
              </M>
            ))}
          </Box>
        </Box>
      </Box>

      <Box tag="section" className="py-24 px-4 md:px-8">
        <Box className="max-w-4xl mx-auto text-center">
          <Box tag="h2" className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Pick eight vendors. Or pick one.
          </Box>
          <Box tag="p" className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Zoo Cloud composes the whole stack — models, GPU, agents, identity,
            billing — under one workspace, with one bill, and one audit log.
          </Box>
          <Box className="flex flex-wrap gap-4 justify-center">
            <a href="https://zoo.cloud" target="_blank" rel="noopener noreferrer">
              <Box tag="button" className="btn-brutalist pill-pink">
                <Sparkles style={css('w-4 h-4')} />
                Start free
              </Box>
            </a>
            <a href={site.links.modelApi} target="_blank" rel="noopener noreferrer">
              <Box tag="button" className="btn-brutalist pill-green">
                <KeyRound style={css('w-4 h-4')} />
                Or just the API
                <ArrowRight style={css('w-4 h-4')} />
              </Box>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
