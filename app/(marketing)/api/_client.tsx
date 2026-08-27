'use client'

import { Box, css } from '@hanzo/ui'
import { M } from '@/components/motion'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Brain, Sparkles, Code2, Eye, Image as ImageIcon, Video, Music, Box as BoxIcon,
  Bot, Cpu, Network, Shield, Zap, ArrowRight, Github, FileText, KeyRound,
} from 'lucide-react'
import site from '@/site.config'

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

const modalities = [
  { label: 'Text', desc: 'Chat completions, structured output, function calling. zen-eco → zen5-max.', icon: Brain, color: 'pill-pink' },
  { label: 'Vision', desc: 'Multimodal understanding over images, screenshots, documents, charts.', icon: Eye, color: 'pill-cyan' },
  { label: 'Image', desc: 'Generation, editing, in-painting. zen-artist family.', icon: ImageIcon, color: 'pill-yellow' },
  { label: 'Video', desc: 'Text-to-video, image-to-video, world models. zen-director and zen-voyager.', icon: Video, color: 'pill-blue' },
  { label: 'Audio', desc: 'Speech, music, foley, live translation. zen-scribe, zen-dub, zen-musician.', icon: Music, color: 'pill-green' },
  { label: 'Code', desc: 'Completion, refactoring, agentic coding. zen-coder and zen5-coder-pro.', icon: Code2, color: 'pill-red' },
  { label: '3D & Spatial', desc: 'Mesh, scene, and asset generation. zen-3d and zen-world.', icon: BoxIcon, color: 'pill-cyan' },
  { label: 'Agents', desc: 'Tool-using autonomous loops with planner + executor. zen-agent.', icon: Bot, color: 'pill-pink' },
]

const endpoints = [
  { method: 'POST', path: '/v1/chat/completions', desc: 'OpenAI-compatible chat. Drop in any zen-* model.' },
  { method: 'POST', path: '/v1/responses',        desc: 'Streaming responses with structured output and tool use.' },
  { method: 'POST', path: '/v1/embeddings',       desc: 'zen-embedding — semantic vectors for search and RAG.' },
  { method: 'POST', path: '/v1/rerank',           desc: 'zen-reranker — score and reorder candidate documents.' },
  { method: 'POST', path: '/v1/images/generations', desc: 'zen-artist text-to-image and zen-artist-edit in-painting.' },
  { method: 'POST', path: '/v1/videos/generations', desc: 'zen-director, zen-video, zen-video-i2v.' },
  { method: 'POST', path: '/v1/audio/speech',       desc: 'zen-dub, zen-translator. Cloning, dubbing, real-time.' },
  { method: 'POST', path: '/v1/audio/transcriptions', desc: 'zen-scribe — 99-language ASR with diarisation.' },
  { method: 'POST', path: '/v1/agents',           desc: 'Spawn a zen-agent with tools, memory, and budget.' },
  { method: 'GET',  path: '/v1/models',           desc: 'List the live model catalog and live token prices.' },
]

const ecosystemPoints = [
  {
    h: 'Zen MoDE',
    p: 'Mixture of Diverse Experts. Routing layer that picks the right Zen specialist per request — language, vision, code, or tool-use — instead of paying frontier prices on every token.',
    color: 'var(--brand-magenta)',
  },
  {
    h: 'Open weights',
    p: 'Every Zen model is Apache 2.0 on Hugging Face. Self-host on your own GPUs, run on Zoo Cloud, or use the public API — same weights, your choice.',
    color: 'var(--brand-green)',
  },
  {
    h: 'Proof of AI (PoAI)',
    p: 'Compute is verified on-chain via Zoo Network. 25% of every API dollar flows back to the OSS contributors whose code shipped the request, scored via SBOM attribution.',
    color: 'var(--brand-yellow)',
  },
  {
    h: '$AI is mineable',
    p: 'Run a node, contribute inference, mine $AI. $ZOO is the fixed-supply governance token; $AI is the compute-meter token, both live on Zoo Network with a regulated bridge via an external tokenization partner.',
    color: 'var(--brand-cyan)',
  },
  {
    h: 'DSO — Decentralized Semantic Optimization',
    p: 'ZIP-001. Models continually optimize against a community-curated objective set, instead of a single lab\'s reward model. Same idea as RLHF, but the H is everyone.',
    color: 'var(--brand-blue)',
  },
  {
    h: 'Regulated tokenization rails',
    p: 'Tokenized GPU infrastructure distributed through a registered broker-dealer / ATS with transfer agency and blockchain settlement — the same private-market vehicle that gates SpaceX and Anthropic equity today.',
    color: 'var(--brand-red)',
  },
]

const codeExample = `# Install
pip install zooai openai

# OpenAI-compatible — point any SDK at api.zoo.network
from openai import OpenAI

client = OpenAI(
    api_key="zk-...",
    base_url="https://api.zoo.network/v1",
)

# Text
response = client.chat.completions.create(
    model="zen-omni-8b",
    messages=[{"role": "user", "content": "Summarise this paper for me."}],
)

# Vision (same endpoint, image in the message)
client.chat.completions.create(
    model="zen-omni-8b",
    messages=[{"role": "user", "content": [
        {"type": "text", "text": "What is this chart showing?"},
        {"type": "image_url", "image_url": {"url": "https://..."}},
    ]}],
)

# Embeddings
client.embeddings.create(model="zen-embedding", input=["..."])
`

export default function PageClient() {
  return (
    <Box tag="main" className="bg-background text-foreground">
      {/* Hero */}
      <Box tag="section" className="py-24 px-4">
        <Box className="max-w-5xl mx-auto text-center">
          <M {...fade} transition={{ duration: 0.5 }}>
            <Box tag="span" className="inline-block mt-6 mb-6 text-sm md:text-base font-extrabold uppercase tracking-[0.2em] underline underline-offset-[6px] decoration-2">
              Zen Model API
            </Box>
            <Box tag="h1" className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              One endpoint.<br />Every modality.
            </Box>
            <Box tag="p" className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-muted-foreground">
              OpenAI-compatible API for 45+ open-weight Zen models — edge to frontier,
              0.6B to 1T+ parameters — across text, vision, image, video, audio, code,
              3D, and agents. Same SDK, same JSON, your choice of model.
            </Box>
            <Box className="flex flex-wrap gap-4 justify-center">
              <a href={site.links.modelApi} target="_blank" rel="noopener noreferrer">
                <Box tag="button" className="btn-brutalist pill-pink">
                  <KeyRound style={css('w-4 h-4')} />
                  Get an API key
                </Box>
              </a>
              <a href={site.links.huggingFace} target="_blank" rel="noopener noreferrer">
                <Box tag="button" className="btn-brutalist pill-green">
                  <Sparkles style={css('w-4 h-4')} />
                  Browse weights
                </Box>
              </a>
              <Link href="/models">
                <Box tag="button" className="btn-brutalist pill-cyan">
                  Model catalog
                  <ArrowRight style={css('w-4 h-4')} />
                </Box>
              </Link>
            </Box>
          </M>
        </Box>
      </Box>

      {/* Modalities */}
      <Box tag="section" className="py-16 px-4 md:px-8">
        <Box className="max-w-7xl mx-auto">
          <M {...fade} transition={{ duration: 0.5 }} className="mb-10">
            <Box tag="span" className="pill pill-yellow text-lg md:text-2xl">Modalities</Box>
            <Box tag="h2" className="mt-10 text-2xl md:text-3xl font-extrabold underline underline-offset-4">
              One SDK across eight modalities — pick the model, keep the contract.
            </Box>
          </M>
          <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {modalities.map((m, i) => {
              const Icon = m.icon
              return (
                <M
                  key={m.label}
                  {...fade}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="bg-white border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] p-5 md:p-6 text-black"
                >
                  <Box className="flex items-center gap-3 mb-3">
                    <Box className={`w-10 h-10 border-2 border-black flex items-center justify-center ${m.color}`}>
                      <Icon style={css('w-5 h-5 text-black')} />
                    </Box>
                    <Box tag="h4" className="text-lg md:text-xl font-extrabold uppercase tracking-tight">{m.label}</Box>
                  </Box>
                  <Box tag="p" className="text-sm md:text-base font-medium text-black/80">{m.desc}</Box>
                </M>
              )
            })}
          </Box>
        </Box>
      </Box>

      {/* Ecosystem */}
      <Box tag="section" className="py-16 px-4 md:px-8 bg-foreground/5">
        <Box className="max-w-7xl mx-auto">
          <M {...fade} transition={{ duration: 0.5 }} className="mb-10">
            <Box tag="span" className="pill pill-blue text-lg md:text-2xl">How it works</Box>
            <Box tag="h2" className="mt-10 text-2xl md:text-3xl font-extrabold underline underline-offset-4">
              The API is the surface. The ecosystem is the leverage.
            </Box>
            <Box tag="p" className="mt-4 max-w-3xl text-base md:text-lg text-muted-foreground">
              Most LLM APIs charge you per token and keep all the margin. Zoo's API
              is a thin gateway over an open model network: open weights, on-chain
              attribution, and a revenue split designed so the people who built the
              models actually get paid.
            </Box>
          </M>
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {ecosystemPoints.map((card, i) => (
              <M
                key={card.h}
                {...fade}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-5 md:p-6 border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] text-black"
                style={{ backgroundColor: card.color }}
              >
                <Box tag="h4" className="text-lg md:text-xl font-extrabold uppercase mb-2 tracking-tight">{card.h}</Box>
                <Box tag="p" className="text-sm md:text-base font-medium">{card.p}</Box>
              </M>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Endpoints */}
      <Box tag="section" className="py-16 px-4 md:px-8">
        <Box className="max-w-6xl mx-auto">
          <M {...fade} transition={{ duration: 0.5 }} className="mb-10">
            <Box tag="span" className="pill pill-green text-lg md:text-2xl">Endpoints</Box>
            <Box tag="h2" className="mt-10 text-2xl md:text-3xl font-extrabold underline underline-offset-4">
              REST + streaming. OpenAI-compatible where it matters.
            </Box>
          </M>
          <Box className="bg-white border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] overflow-hidden">
            <Box tag="table" className="w-full text-left text-sm md:text-base">
              <Box tag="thead" className="bg-black text-white">
                <tr>
                  <Box tag="th" className="px-4 py-3 font-extrabold uppercase tracking-wider w-20">Verb</Box>
                  <Box tag="th" className="px-4 py-3 font-extrabold uppercase tracking-wider">Path</Box>
                  <Box tag="th" className="px-4 py-3 font-extrabold uppercase tracking-wider hidden md:table-cell">What it does</Box>
                </tr>
              </Box>
              <Box tag="tbody" className="text-black">
                {endpoints.map((e, i) => (
                  <Box tag="tr" key={e.path} className={i % 2 === 1 ? 'bg-black/5' : ''}>
                    <Box tag="td" className="px-4 py-3 font-mono font-bold">{e.method}</Box>
                    <Box tag="td" className="px-4 py-3 font-mono">{e.path}</Box>
                    <Box tag="td" className="px-4 py-3 text-black/80 hidden md:table-cell">{e.desc}</Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          <Box tag="p" className="mt-4 text-sm text-muted-foreground">
            Base URL: <Box tag="code" className="font-mono">{site.links.modelApi}/v1</Box>. Auth via
            <Box tag="code" className="font-mono"> Authorization: Bearer zk-...</Box> header — same as OpenAI.
          </Box>
        </Box>
      </Box>

      {/* Quick start */}
      <Box tag="section" className="py-16 px-4 md:px-8 bg-foreground/5">
        <Box className="max-w-5xl mx-auto">
          <M {...fade} transition={{ duration: 0.5 }} className="mb-8">
            <Box tag="span" className="pill pill-cyan text-lg md:text-2xl">Quick start</Box>
            <Box tag="h2" className="mt-10 text-2xl md:text-3xl font-extrabold underline underline-offset-4">
              Three lines and the OpenAI SDK you already have.
            </Box>
          </M>
          <Box className="bg-black border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] p-6 overflow-x-auto">
            <Box tag="pre" className="text-sm md:text-base text-[var(--brand-green)] font-mono">{codeExample}</Box>
          </Box>
        </Box>
      </Box>

      {/* Authentication & identity */}
      <Box tag="section" className="py-16 px-4 md:px-8">
        <Box className="max-w-7xl mx-auto">
          <M {...fade} transition={{ duration: 0.5 }} className="mb-10">
            <Box tag="span" className="pill pill-red text-lg md:text-2xl">Authentication</Box>
            <Box tag="h2" className="mt-10 text-2xl md:text-3xl font-extrabold underline underline-offset-4">
              Two ways to prove you are you.
            </Box>
          </M>
          <Box className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <Box className="p-5 md:p-6 bg-white border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] text-black">
              <Box className="flex items-center gap-3 mb-3">
                <Box className="w-10 h-10 border-2 border-black flex items-center justify-center pill-yellow">
                  <KeyRound style={css('w-5 h-5 text-black')} />
                </Box>
                <Box tag="h4" className="text-lg md:text-xl font-extrabold uppercase tracking-tight">API key</Box>
              </Box>
              <Box tag="p" className="text-sm md:text-base text-black/80">
                Issue a key from your Zoo Industries account. Format <Box tag="code" className="font-mono">zk-...</Box>.
                Scoped to a workspace, rotatable, with per-key spend limits and audit log. Drop-in
                replacement for an OPENAI_API_KEY env var.
              </Box>
            </Box>
            <Box className="p-5 md:p-6 bg-white border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] text-black">
              <Box className="flex items-center gap-3 mb-3">
                <Box className="w-10 h-10 border-2 border-black flex items-center justify-center pill-cyan">
                  <Shield style={css('w-5 h-5 text-black')} />
                </Box>
                <Box tag="h4" className="text-lg md:text-xl font-extrabold uppercase tracking-tight">Zoo ID (DID)</Box>
              </Box>
              <Box tag="p" className="text-sm md:text-base text-black/80">
                For agents, devices, and self-sovereign workflows: sign requests with a Zoo ID
                decentralized identifier. No key to leak — capabilities are scoped on-chain and
                revocable per-counterparty.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Pricing */}
      <Box tag="section" className="py-16 px-4 md:px-8 bg-foreground/5">
        <Box className="max-w-6xl mx-auto">
          <M {...fade} transition={{ duration: 0.5 }} className="mb-10">
            <Box tag="span" className="pill pill-yellow text-lg md:text-2xl">Pricing</Box>
            <Box tag="h2" className="mt-10 text-2xl md:text-3xl font-extrabold underline underline-offset-4">
              Pay for tokens. 25% of that pays the people who built the model.
            </Box>
          </M>
          <Box className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <Box className="p-5 md:p-6 bg-white border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] text-black">
              <Box className="text-3xl md:text-4xl font-extrabold mb-2">$0</Box>
              <Box tag="h4" className="text-base md:text-lg font-extrabold uppercase tracking-tight mb-2">Open weights</Box>
              <Box tag="p" className="text-sm md:text-base text-black/80">
                Pull the model from Hugging Face under Apache 2.0 and run it yourself.
                No license fee, no rate limit, no phone-home.
              </Box>
            </Box>
            <Box className="p-5 md:p-6 bg-white border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] text-black">
              <Box className="text-3xl md:text-4xl font-extrabold mb-2">$ / 1M tok</Box>
              <Box tag="h4" className="text-base md:text-lg font-extrabold uppercase tracking-tight mb-2">Hosted API</Box>
              <Box tag="p" className="text-sm md:text-base text-black/80">
                Per-token metering on Zoo Cloud GPUs. Live prices on
                <Box tag="code" className="font-mono"> GET /v1/models</Box>. Volume tiers and committed-use
                discounts for production traffic.
              </Box>
            </Box>
            <Box className="p-5 md:p-6 bg-white border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] text-black">
              <Box className="text-3xl md:text-4xl font-extrabold mb-2">25%</Box>
              <Box tag="h4" className="text-base md:text-lg font-extrabold uppercase tracking-tight mb-2">→ OSS</Box>
              <Box tag="p" className="text-sm md:text-base text-black/80">
                A quarter of every API dollar is split back to the contributors whose
                repos served the request — automatic, on-chain, no application form.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* CTA */}
      <Box tag="section" className="py-24 px-4 md:px-8">
        <Box className="max-w-4xl mx-auto text-center">
          <Box tag="h2" className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Build something open.
          </Box>
          <Box tag="p" className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            45+ models, Apache 2.0 weights, one API surface, and a revenue model that
            actually pays the people who made the models possible.
          </Box>
          <Box className="flex flex-wrap gap-4 justify-center">
            <a href={site.links.modelApi} target="_blank" rel="noopener noreferrer">
              <Box tag="button" className="btn-brutalist pill-pink">
                <KeyRound style={css('w-4 h-4')} />
                Get an API key
              </Box>
            </a>
            <a href={site.links.huggingFace} target="_blank" rel="noopener noreferrer">
              <Box tag="button" className="btn-brutalist pill-green">
                <Github style={css('w-4 h-4')} />
                Zen on Hugging Face
              </Box>
            </a>
            <a href="https://papers.zoo.ngo" target="_blank" rel="noopener noreferrer">
              <Box tag="button" className="btn-brutalist pill-cyan">
                <FileText style={css('w-4 h-4')} />
                Read the papers
              </Box>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
