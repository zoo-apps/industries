'use client'

import { Box } from '@hanzo/ui'
import { M } from '@/components/motion'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Bot, Sparkles, ArrowRight, Brain, MessageSquare, Mail, Search, Phone,
  FileText, BarChart3, Wrench, Zap,
} from 'lucide-react'
import site from '@/site.config'

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

const roles = [
  { h: 'Researcher',     p: 'Reads the web, your docs, and your past decisions. Cites every claim, never silently summarises.', icon: Search },
  { h: 'Writer',         p: 'Drafts in your voice. Knows when to quote, when to paraphrase, and when to say "ask a human."',     icon: FileText },
  { h: 'Support agent',  p: 'Tier-1 ticket triage with hand-off rules. Talks to your ticketing system, not from a separate inbox.', icon: MessageSquare },
  { h: 'Sales rep',      p: 'Qualifies inbound, drafts replies, books meetings, never invents a price your CRM does not know.',  icon: Phone },
  { h: 'Ops analyst',    p: 'Watches dashboards. Files anomalies as tickets. Writes the post-mortem before the room asks for it.', icon: BarChart3 },
  { h: 'Maintainer',     p: 'Triages issues, runs CI fixes, opens PRs against repo rules you actually defined.', icon: Wrench },
]

const features = [
  { h: 'Shared memory',     p: 'All bots in a workspace read from the same vector store and the same write-through fact graph. Stop re-explaining yourself.' },
  { h: 'Shared tools',      p: 'Add a tool once — Slack, GitHub, Linear, Stripe, your internal API — every bot inherits the permission scope you grant.' },
  { h: 'Shared voice',      p: 'A brand spec (tone, banned phrases, escalation rules) loads as system context for every bot. Switch a bot, keep the voice.' },
  { h: 'Hand-off graph',    p: 'Define which bot escalates to which, and to which human. The bots route the work, you review the trace.' },
  { h: 'Budget caps',       p: 'Per-bot and per-workspace spend limits. Hard cut-off, not a warning email after the bill arrives.' },
  { h: 'Audit trail',       p: 'Every tool call, every prompt, every response. Replayable. Export to your SIEM.' },
]

export default function PageClient() {
  return (
    <Box tag="main" className="bg-background text-foreground">
      <Box tag="section" className="py-24 px-4">
        <Box className="max-w-5xl mx-auto text-center">
          <M {...fade} transition={{ duration: 0.5 }}>
            <Box tag="span" className="inline-block mt-6 mb-6 text-sm md:text-base font-extrabold uppercase tracking-[0.2em] underline underline-offset-[6px] decoration-2">
              Zoo Bot
            </Box>
            <Box tag="h1" className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              AI team.<br />In a box.
            </Box>
            <Box tag="p" className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-muted-foreground">
              Hire a researcher, a writer, a support agent, and three more
              specialists — all sharing one memory, one toolbox, and one brand
              voice. Built on Zen models, paid for by tokens, audited end-to-end.
            </Box>
            <Box className="flex flex-wrap gap-4 justify-center">
              <a href={site.links.bot} target="_blank" rel="noopener noreferrer">
                <Box tag="button" className="btn-brutalist pill-pink">
                  <Sparkles className="w-4 h-4" />
                  Spin up a workspace
                </Box>
              </a>
              <Link href="/api">
                <Box tag="button" className="btn-brutalist pill-blue">
                  <Brain className="w-4 h-4" />
                  Built on Zen API
                </Box>
              </Link>
            </Box>
          </M>
        </Box>
      </Box>

      <Box tag="section" className="py-16 px-4 md:px-8">
        <Box className="max-w-7xl mx-auto">
          <M {...fade} transition={{ duration: 0.5 }} className="mb-10">
            <Box tag="span" className="pill pill-yellow text-lg md:text-2xl">Roles you can hire</Box>
            <Box tag="h2" className="mt-10 md:mt-12 text-2xl md:text-3xl font-extrabold underline underline-offset-4">
              Six specialists, one workspace, infinite seats.
            </Box>
          </M>
          <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {roles.map((r, i) => {
              const Icon = r.icon
              return (
                <M
                  key={r.h}
                  {...fade}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] p-5 md:p-6 text-black"
                >
                  <Box className="flex items-center gap-3 mb-3">
                    <Box className="w-10 h-10 border-2 border-black flex items-center justify-center pill-cyan">
                      <Icon className="w-5 h-5 text-black" />
                    </Box>
                    <Box tag="h4" className="text-lg md:text-xl font-extrabold uppercase tracking-tight">{r.h}</Box>
                  </Box>
                  <Box tag="p" className="text-sm md:text-base font-medium text-black/80">{r.p}</Box>
                </M>
              )
            })}
          </Box>
        </Box>
      </Box>

      <Box tag="section" className="py-16 px-4 md:px-8 bg-foreground/5">
        <Box className="max-w-7xl mx-auto">
          <M {...fade} transition={{ duration: 0.5 }} className="mb-10">
            <Box tag="span" className="pill pill-green text-lg md:text-2xl">What you get</Box>
            <Box tag="h2" className="mt-10 md:mt-12 text-2xl md:text-3xl font-extrabold underline underline-offset-4">
              Six bots that act like a team, not six chatbots that act like strangers.
            </Box>
          </M>
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {features.map((f, i) => (
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
            Stop hiring 2025 chatbots.
          </Box>
          <Box tag="p" className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hire a team. Same memory, same tools, same voice. Three free seats to start.
          </Box>
          <Box className="flex flex-wrap gap-4 justify-center">
            <a href={site.links.bot} target="_blank" rel="noopener noreferrer">
              <Box tag="button" className="btn-brutalist pill-pink">
                <Bot className="w-4 h-4" />
                Open Zoo Bot
              </Box>
            </a>
            <Link href="/engine">
              <Box tag="button" className="btn-brutalist pill-green">
                <Zap className="w-4 h-4" />
                On Zoo Engine
                <ArrowRight className="w-4 h-4" />
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
