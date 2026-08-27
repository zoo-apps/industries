"use client";

import { Box } from '@hanzo/ui'
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// The full stack — organized by layer
const stackLayers = [
  {
    label: "Frontier Models",
    items: [
      { name: "ZEN", description: "Frontier AI models — 600M to 1T+ params", link: "/products/zen" },
      { name: "KOAN", description: "Enterprise knowledge and retrieval", link: "/products/koan" },
    ],
  },
  {
    label: "AI Platform",
    items: [
      { name: "ZOO", description: "Full-stack AI platform — training, inference, orchestration", link: "/products/hanzo-ai" },
      { name: "ZOO ML", description: "ML operations — experiment tracking, model registry, pipelines", link: "/products/hanzo-ml" },
      { name: "LLM GATEWAY", description: "Unified proxy for 100+ models with auth, billing, observability", link: "/products/hanzo-ai" },
      { name: "MCP", description: "Model Context Protocol — 260+ tools for AI agents", link: "/products/hanzo-ai" },
    ],
  },
  {
    label: "Agents & Bots",
    items: [
      { name: "ZOO DEV", description: "Agentic coding — AI pair programmer with full codebase context", link: "/products/hanzo-dev" },
      { name: "ZOO BOT", description: "Bot platform — deploy, orchestrate, and monitor AI agents at scale", link: "/products/hanzo-bot" },
      { name: "AGENT SDK", description: "Multi-agent framework — planning, tool use, memory, coordination", link: "/products/hanzo-ai" },
    ],
  },
  {
    label: "Cloud & Infrastructure",
    items: [
      { name: "ZOO CLOUD", description: "AI-native PaaS — deploy anything with zero-trust security", link: "/products/hanzo-cloud" },
      { name: "ZOO ENGINE", description: "Cloud GPU inference — 60+ architectures, CUDA/Metal", link: "https://engine.zoo.ngo" },
      { name: "ZOO EDGE", description: "On-device AI — run models locally, in browser, or embedded", link: "https://edge.zoo.ngo" },
      { name: "ZOO NETWORK", description: "Confidential compute — private, decentralized AI workloads", link: "/products/hanzo-network" },
      { name: "IAM", description: "Multi-tenant identity — SSO, OAuth, JWT across all services", link: "/products/hanzo-cloud" },
      { name: "KMS", description: "Secrets management — org-scoped, auditable, zero-trust", link: "/products/hanzo-cloud" },
    ],
  },
  {
    label: "Developer Experience",
    items: [
      { name: "ZOO DX", description: "Developer platform — SDKs, APIs, CLI, documentation", link: "/products/hanzo-dx" },
      { name: "ZOO TEAM", description: "Collaboration — shared workspaces, review, coordination", link: "/products/hanzo-team" },
      { name: "CONSOLE", description: "Unified dashboard — usage, billing, observability, project management", link: "/products/hanzo-ai" },
    ],
  },
];

const stats = [
  { value: "130+", label: "Research Papers" },
  { value: "2,500+", label: "OSS Projects" },
  { value: "100+", label: "AI Model Weights" },
  { value: "100+", label: "LLM Providers" },
  { value: "260+", label: "MCP Tools" },
];

const capabilities = [
  {
    title: "Private by Default",
    description: "AI that runs without routing data through centralized third parties. Confidential compute, secure enclaves, and privacy-preserving execution for sensitive workloads.",
  },
  {
    title: "Full-Stack Vertical Integration",
    description: "Models, training, inference, cloud, identity, secrets, observability, and developer tools — one integrated stack, not a patchwork of vendors.",
  },
  {
    title: "Open Source Infrastructure",
    description: "300+ open source repos powering critical AI software supply chains. Public tooling, reference implementations, and sustainable incentive mechanisms.",
  },
  {
    title: "Secure-by-Design Operations",
    description: "Audit trails, policy enforcement, human-in-the-loop approvals, incident-ready logging. Built for regulated and mission-critical environments.",
  },
];

export default function PageClient() {
  return (
      <Box tag="main" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <Box className="max-w-5xl mx-auto">
          {/* Logo + Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <img
              src="/zoo-logo.svg"
              alt="Zoo"
              className="w-16 h-16 mb-8"
            />
            <Box tag="h1" className="text-5xl sm:text-6xl font-bold mb-6">
              Full-Stack Private AI
            </Box>
            <Box tag="p" className={cn("text-xl max-w-3xl", "text-muted-foreground")}>
              Zoo is an AI company building a vertically integrated
              stack — from frontier models to confidential compute to developer tools.
              We make powerful AI private by default, enabling sensitive workloads in
              government, defense, healthcare, and finance without routing data through
              centralized third parties.
            </Box>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn(
              "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20 py-8 border-y",
              "border-border"
            )}
          >
            {stats.map((stat) => (
              <Box key={stat.label} className="text-center">
                <Box className="text-2xl font-bold mb-1">{stat.value}</Box>
                <Box className={cn("text-sm", "text-muted-foreground")}>{stat.label}</Box>
              </Box>
            ))}
          </motion.div>

          {/* Core Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-20"
          >
            <Box tag="h2" className="text-3xl font-bold mb-8">Why Zoo</Box>
            <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((cap) => (
                <Box
                  key={cap.title}
                  className={cn(
                    "p-6 rounded-lg border",
                    "border-border"
                  )}
                >
                  <Box tag="h3" className="text-lg font-semibold mb-2">{cap.title}</Box>
                  <Box tag="p" className={cn("text-sm", "text-muted-foreground")}>
                    {cap.description}
                  </Box>
                </Box>
              ))}
            </Box>
          </motion.div>

          {/* The Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-20"
          >
            <Box tag="h2" className="text-3xl font-bold mb-2">The Stack</Box>
            <Box tag="p" className={cn("text-lg mb-10", "text-muted-foreground")}>
              Vertically integrated from models to cloud — every layer built to work together.
            </Box>

            {stackLayers.map((layer, layerIndex) => (
              <Box key={layer.label} className="mb-10 last:mb-0">
                <Box className="flex items-center gap-3 mb-4">
                  <Box tag="span" className={cn(
                    "text-xs font-mono font-medium px-2 py-1 rounded",
                    "bg-foreground/10 text-muted-foreground"
                  )}>
                    {String(layerIndex + 1).padStart(2, "0")}
                  </Box>
                  <Box tag="h3" className="text-xl font-semibold">{layer.label}</Box>
                </Box>
                <Box className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-10">
                  {layer.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.link}
                      className={cn(
                        "flex items-center justify-between px-5 py-3 rounded-lg border transition-colors group",
                        "border-border hover:bg-accent"
                      )}
                    >
                      <div>
                        <Box className="font-semibold text-sm group-hover:underline">{item.name}</Box>
                        <Box className={cn("text-xs", "text-muted-foreground")}>
                          {item.description}
                        </Box>
                      </div>
                      <Box tag="span" className={cn("text-sm", "text-foreground/20")}>→</Box>
                    </Link>
                  ))}
                </Box>
              </Box>
            ))}
          </motion.div>

          {/* Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-20"
          >
            <Box tag="h2" className="text-3xl font-bold mb-8">Platforms</Box>
            <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "zoo.ngo", description: "AI platform", href: "https://zoo.ngo" },
                { name: "zoo.industries", description: "Enterprise & defense", href: "https://zoo.industries" },
                { name: "zoo.network", description: "Confidential compute", href: "https://zoo.network" },
                { name: "cloud.zoo.ngo", description: "Cloud PaaS", href: "https://cloud.zoo.ngo" },
                { name: "llm.zoo.ngo", description: "LLM gateway (100+ models)", href: "https://llm.zoo.ngo" },
                { name: "docs.zoo.ngo", description: "API documentation", href: "https://docs.zoo.ngo" },
              ].map((platform) => (
                <Box tag="a"
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "px-5 py-4 rounded-lg border transition-colors group",
                    "border-border hover:bg-accent"
                  )}
                >
                  <Box className="font-medium font-mono text-sm group-hover:underline">{platform.name}</Box>
                  <Box className={cn("text-sm", "text-muted-foreground")}>
                    {platform.description}
                  </Box>
                </Box>
              ))}
            </Box>
          </motion.div>

          {/* Open Source */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-20"
          >
            <Box tag="h2" className="text-3xl font-bold mb-8">Open Source</Box>
            <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "Zoo Industries",
                  role: "AI infrastructure and developer tools",
                  detail: "MCP, LLM Gateway, Agent SDK, Cloud PaaS, CLI, SDKs. 300+ repos.",
                  href: "https://github.com/zooai",
                },
                {
                  name: "Zen LM",
                  role: "Frontier model family",
                  detail: "100+ model weights from 600M to 1T+ params. Text, vision, video, audio, 3D, code, agents.",
                  href: "https://github.com/zenlm",
                },
              ].map((org) => (
                <Box tag="a"
                  key={org.name}
                  href={org.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-6 rounded-lg border transition-colors group",
                    "border-border hover:border-border"
                  )}
                >
                  <Box tag="h3" className="text-xl font-semibold mb-1 group-hover:underline">{org.name}</Box>
                  <Box tag="p" className={cn("text-sm font-medium mb-2", "text-muted-foreground")}>
                    {org.role}
                  </Box>
                  <Box tag="p" className={cn("text-sm", "text-muted-foreground")}>
                    {org.detail}
                  </Box>
                </Box>
              ))}
            </Box>
          </motion.div>

          {/* OSS Revenue Sharing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className={cn(
              "mb-20 p-8 md:p-10 rounded-lg border",
              "border-border bg-foreground/[0.03]"
            )}
          >
            <Box className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <Box className="flex-1">
                <Box tag="h3" className="text-xl font-semibold mb-2">OSS Revenue Sharing</Box>
                <Box tag="p" className={cn("text-sm leading-relaxed", "text-muted-foreground")}>
                  We dedicate 25% of all compute costs to open source contributors
                  — distributed transparently based on verified SBOMs. Connect your
                  GitHub and wallet to earn.
                </Box>
              </Box>
              <Box className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/open-source"
                  className={cn(
                    "px-5 py-2.5 rounded-lg border text-sm font-medium text-center transition-colors",
                    "border-border hover:bg-accent"
                  )}
                >
                  Learn More
                </Link>
                <Box tag="a"
                  href="https://zoo.ngo/oss/connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "px-5 py-2.5 rounded-lg text-sm font-medium text-center transition-colors",
                    "bg-foreground text-background hover:bg-foreground/90"
                  )}
                >
                  Connect & Earn
                </Box>
              </Box>
            </Box>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={cn(
              "p-8 md:p-12 rounded-lg border",
              "border-border bg-foreground/[0.02]"
            )}
          >
            <Box tag="h2" className="text-3xl font-bold mb-4">Mission</Box>
            <Box tag="p" className={cn("text-lg", "text-muted-foreground")}>
              Make powerful AI private by default. We build full-stack AI infrastructure
              that converts compute into operational advantage — enabling sensitive workloads
              in healthcare, finance, defense, and government without requiring organizations
              to route data through centralized third parties. We publish our research openly,
              treat open source as critical infrastructure, and ship production systems that
              teams depend on.
            </Box>
          </motion.div>
        </Box>
      </Box>
  );
}
