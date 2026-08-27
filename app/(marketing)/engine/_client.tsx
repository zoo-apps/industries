'use client'

import { Box } from '@hanzo/ui'
import { M } from '@/components/motion'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Server, Cpu, Zap, Globe, Shield, Network, ArrowRight, Brain,
  KeyRound, BarChart3, Layers,
} from 'lucide-react'
import site from '@/site.config'

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

const fleet = [
  { h: 'NVIDIA H100 / H200', p: 'Frontier text + multimodal. The default for zen5-max, zen5 (MoE), zen-omni at scale.',          color: 'pill-pink' },
  { h: 'AMD MI300X',         p: '192 GB HBM3 per card — fits zen5-max with room. Better $/token on context-heavy workloads.',     color: 'pill-yellow' },
  { h: 'AWS Trainium 2',     p: 'Lowest $/token for embeddings, reranking, and zen-eco-4b. Default route for cheap-and-fast.',    color: 'pill-cyan' },
  { h: 'Apple M-series',     p: 'Pooled Mac Studios for low-load batch jobs. Underused capacity → cheap inference on the edge of the cloud.', color: 'pill-green' },
]

const features = [
  { h: 'Token-priced',       p: 'Per-million-token billing, settled in $AI or fiat. Live prices on GET /v1/models — no hidden GPU-hour markup.' },
  { h: 'Latency-targeted',   p: 'Pick p50 / p95 SLOs on a request, the router picks the region and the chip class to hit them.' },
  { h: 'Multi-region',       p: 'PoPs in NA-East, NA-West, EU, APAC, and emerging dDC (decentralised data centre) nodes on the Zoo Network.' },
  { h: 'Pooled supply',      p: 'Independent operators contribute capacity, the network routes load. No single vendor lock, no single failure domain.' },
  { h: 'PoAI revenue share', p: '25% of compute revenue routes back to OSS contributors. Verified on-chain via Proof of AI attestations.' },
  { h: 'Confidential',       p: 'TEE-backed inference on supported SKUs. Prompts and weights stay encrypted to the attesting enclave.' },
]

export default function PageClient() {
  return (
    <Box tag="main" className="bg-background text-foreground">
      <Box tag="section" className="py-24 px-4">
        <Box className="max-w-5xl mx-auto text-center">
          <M {...fade} transition={{ duration: 0.5 }}>
            <Box tag="span" className="inline-block mt-6 mb-6 text-sm md:text-base font-extrabold uppercase tracking-[0.2em] underline underline-offset-[6px] decoration-2">
              Zoo Engine
            </Box>
            <Box tag="h1" className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              The runtime<br />behind every Zoo.
            </Box>
            <Box tag="p" className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-muted-foreground">
              Pooled H100, MI300X, Trainium, and idle Apple silicon — routed
              by latency, priced by token, settled on-chain. The same engine
              powers Zoo Chat, Zoo Bot, Zoo Dev, and every external Zen API call.
            </Box>
            <Box className="flex flex-wrap gap-4 justify-center">
              <a href={site.links.engine} target="_blank" rel="noopener noreferrer">
                <Box tag="button" className="btn-brutalist pill-pink">
                  <KeyRound className="w-4 h-4" />
                  Get capacity
                </Box>
              </a>
              <Link href="/api">
                <Box tag="button" className="btn-brutalist pill-blue">
                  <Brain className="w-4 h-4" />
                  API spec
                </Box>
              </Link>
            </Box>
          </M>
        </Box>
      </Box>

      <Box tag="section" className="py-16 px-4 md:px-8">
        <Box className="max-w-7xl mx-auto">
          <M {...fade} transition={{ duration: 0.5 }} className="mb-10">
            <Box tag="span" className="pill pill-blue text-lg md:text-2xl">The fleet</Box>
            <Box tag="h2" className="mt-10 md:mt-12 text-2xl md:text-3xl font-extrabold underline underline-offset-4">
              Four chip families, one routing policy.
            </Box>
          </M>
          <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {fleet.map((f, i) => (
              <M
                key={f.h}
                {...fade}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] p-5 md:p-6 text-black"
              >
                <Box className={`w-10 h-10 border-2 border-black flex items-center justify-center mb-3 ${f.color}`}>
                  <Cpu className="w-5 h-5 text-black" />
                </Box>
                <Box tag="h4" className="text-lg md:text-xl font-extrabold uppercase tracking-tight mb-2">{f.h}</Box>
                <Box tag="p" className="text-sm md:text-base font-medium text-black/80">{f.p}</Box>
              </M>
            ))}
          </Box>
        </Box>
      </Box>

      <Box tag="section" className="py-16 px-4 md:px-8 bg-foreground/5">
        <Box className="max-w-7xl mx-auto">
          <M {...fade} transition={{ duration: 0.5 }} className="mb-10">
            <Box tag="span" className="pill pill-green text-lg md:text-2xl">How it routes</Box>
            <Box tag="h2" className="mt-10 md:mt-12 text-2xl md:text-3xl font-extrabold underline underline-offset-4">
              Capacity is fungible. Latency, cost, and trust are not.
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
            Stop renting GPU-hours.
          </Box>
          <Box tag="p" className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Pay for the tokens you actually produce. Pool with the people who
            actually own the chips. Zoo Engine is the inference layer the rest
            of Zoo is built on — and it's open to you too.
          </Box>
          <Box className="flex flex-wrap gap-4 justify-center">
            <a href={site.links.engine} target="_blank" rel="noopener noreferrer">
              <Box tag="button" className="btn-brutalist pill-pink">
                <Server className="w-4 h-4" />
                Provision capacity
              </Box>
            </a>
            <Link href="/edge">
              <Box tag="button" className="btn-brutalist pill-green">
                <Network className="w-4 h-4" />
                Or run it on the edge
                <ArrowRight className="w-4 h-4" />
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
