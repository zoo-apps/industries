'use client'

import { Box } from '@hanzo/ui'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  MessageSquare, Sparkles, Lock, Users, Brain, Eye, Image as ImageIcon,
  Music, Code2, Smartphone, Cloud, ArrowRight,
} from 'lucide-react'
import site from '@/site.config'

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

const modalitySwitches = [
  { h: 'Talk',      p: 'Default to zen-eco for fast turns or zen5-pro for thinking. Switch per-message, no new tab needed.', icon: Brain,      color: 'pill-pink' },
  { h: 'See',       p: 'Drop a screenshot, a PDF, or a chart. zen-omni reads it like context, not a separate upload step.', icon: Eye,         color: 'pill-cyan' },
  { h: 'Draw',      p: 'Hit / image and zen-artist takes over. Inline edits via zen-artist-edit. No model picker dropdown.', icon: ImageIcon,   color: 'pill-yellow' },
  { h: 'Listen',    p: 'Voice mode with zen-translator and zen-scribe — 99 languages, low-latency, optional transcript.',    icon: Music,       color: 'pill-green' },
  { h: 'Code',      p: 'Code-aware completions with zen-coder, run a snippet in a sandboxed runtime, get the output back inline.', icon: Code2, color: 'pill-blue' },
]

const features = [
  { h: 'Workspaces',         p: 'Personal, team, and shared spaces. Same chat history syncs across web, desktop, mobile.' },
  { h: 'Shared bots',        p: 'Drop a Zoo Bot into a chat. The bot has its own tools, your conversation, no separate tab.' },
  { h: 'End-to-end encrypted', p: 'Messages encrypted to your device key. We see ciphertext; the model sees plaintext only at inference, in-enclave.' },
  { h: 'On-chain billing',   p: 'Pay per token with $AI from your wallet, or by card. Per-message receipt with the routing trace.' },
  { h: 'Local-first',        p: 'History lives on-device, syncs over CRDT. Works offline against a local zen-nano build, syncs when online.' },
  { h: 'Tools & MCP',        p: 'Hook into the Model Context Protocol. Your tools, your data, your sandboxes — same chat surface.' },
]

export default function PageClient() {
  return (
    <Box tag="main" className="bg-background text-foreground">
      <Box tag="section" className="py-24 px-4">
        <Box className="max-w-5xl mx-auto text-center">
          <motion.div {...fade} transition={{ duration: 0.5 }}>
            <Box tag="span" className="inline-block mt-6 mb-6 text-sm md:text-base font-extrabold uppercase tracking-[0.2em] underline underline-offset-[6px] decoration-2">
              Zoo Chat
            </Box>
            <Box tag="h1" className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              One chat.<br />Every model.
            </Box>
            <Box tag="p" className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-muted-foreground">
              Pick a model, swap it mid-conversation, share the thread with
              your team — and never lose context. Talk, see, draw, listen, and
              code from the same input box. End-to-end encrypted, local-first,
              billed per token in $AI or fiat.
            </Box>
            <Box className="flex flex-wrap gap-4 justify-center">
              <a href={site.links.chat} target="_blank" rel="noopener noreferrer">
                <Box tag="button" className="btn-brutalist pill-pink">
                  <Sparkles className="w-4 h-4" />
                  Open Zoo Chat
                </Box>
              </a>
              <Link href="/api">
                <Box tag="button" className="btn-brutalist pill-blue">
                  <Brain className="w-4 h-4" />
                  API behind the chat
                </Box>
              </Link>
            </Box>
          </motion.div>
        </Box>
      </Box>

      <Box tag="section" className="py-16 px-4 md:px-8">
        <Box className="max-w-7xl mx-auto">
          <motion.div {...fade} transition={{ duration: 0.5 }} className="mb-10">
            <Box tag="span" className="pill pill-yellow text-lg md:text-2xl">Five inputs, one box</Box>
            <Box tag="h2" className="mt-10 md:mt-12 text-2xl md:text-3xl font-extrabold underline underline-offset-4">
              Talk, see, draw, listen, code — without picking a tab.
            </Box>
          </motion.div>
          <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
            {modalitySwitches.map((m, i) => {
              const Icon = m.icon
              return (
                <motion.div
                  key={m.h}
                  {...fade}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] p-5 md:p-6 text-black"
                >
                  <Box className={`w-10 h-10 border-2 border-black flex items-center justify-center mb-3 ${m.color}`}>
                    <Icon className="w-5 h-5 text-black" />
                  </Box>
                  <Box tag="h4" className="text-lg md:text-xl font-extrabold uppercase tracking-tight mb-2">{m.h}</Box>
                  <Box tag="p" className="text-sm md:text-base font-medium text-black/80">{m.p}</Box>
                </motion.div>
              )
            })}
          </Box>
        </Box>
      </Box>

      <Box tag="section" className="py-16 px-4 md:px-8 bg-foreground/5">
        <Box className="max-w-7xl mx-auto">
          <motion.div {...fade} transition={{ duration: 0.5 }} className="mb-10">
            <Box tag="span" className="pill pill-cyan text-lg md:text-2xl">What's under the hood</Box>
            <Box tag="h2" className="mt-10 md:mt-12 text-2xl md:text-3xl font-extrabold underline underline-offset-4">
              Chat that actually respects the chats.
            </Box>
          </motion.div>
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.h}
                {...fade}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-5 md:p-6 bg-white border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] text-black"
              >
                <Box tag="h4" className="text-lg md:text-xl font-extrabold uppercase mb-2 tracking-tight">{f.h}</Box>
                <Box tag="p" className="text-sm md:text-base font-medium text-black/80">{f.p}</Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Box>

      <Box tag="section" className="py-24 px-4 md:px-8">
        <Box className="max-w-4xl mx-auto text-center">
          <Box tag="h2" className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Stop switching apps.
          </Box>
          <Box tag="p" className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Free tier on web, desktop, mobile. Workspaces are $4/seat/month.
            Every chat pays the people who built the model.
          </Box>
          <Box className="flex flex-wrap gap-4 justify-center">
            <a href={site.links.chat} target="_blank" rel="noopener noreferrer">
              <Box tag="button" className="btn-brutalist pill-pink">
                <MessageSquare className="w-4 h-4" />
                Open Zoo Chat
              </Box>
            </a>
            <Link href="/edge">
              <Box tag="button" className="btn-brutalist pill-green">
                <Smartphone className="w-4 h-4" />
                On-device mode
                <ArrowRight className="w-4 h-4" />
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
