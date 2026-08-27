"use client";

import { Box, css } from '@hanzo/ui'
import { M } from '@/components/motion'
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BookOpen,
  Box as BoxIcon,
  Brain,
  Code,
  Copy,
  Check,
  Database,
  ExternalLink,
  Globe,
  Github,
  Lock,
  Network,
  Search,
  Server,
  Shield,
  Terminal,
  Wrench,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const sdks = [
  {
    language: "Python",
    pkg: "hanzo-ai",
    install: "pip install hanzo-ai",
    registry: "PyPI",
    registryUrl: "https://pypi.org/project/hanzo-ai/",
    github: "https://github.com/zooai/python-sdk",
    docs: "https://docs.zoo.ngo/sdk/python",
    icon: "py",
  },
  {
    language: "TypeScript / JavaScript",
    pkg: "@hanzo/sdk",
    install: "npm install @hanzo/sdk",
    registry: "npm",
    registryUrl: "https://www.npmjs.com/package/@hanzo/sdk",
    github: "https://github.com/zooai/js-sdk",
    docs: "https://docs.zoo.ngo/sdk/typescript",
    icon: "ts",
  },
  {
    language: "Go",
    pkg: "github.com/zooai/go-sdk",
    install: "go get github.com/zooai/go-sdk",
    registry: "pkg.go.dev",
    registryUrl: "https://pkg.go.dev/github.com/zooai/go-sdk",
    github: "https://github.com/zooai/go-sdk",
    docs: "https://docs.zoo.ngo/sdk/go",
    icon: "go",
  },
  {
    language: "Rust",
    pkg: "hanzo",
    install: "cargo add hanzo",
    registry: "crates.io",
    registryUrl: "https://crates.io/crates/hanzo",
    github: "https://github.com/zooai/rust-sdk",
    docs: "https://docs.zoo.ngo/sdk/rust",
    icon: "rs",
  },
];

const apis = [
  {
    title: "Cloud API",
    domain: "api.zoo.network",
    description:
      "REST API for all Zoo cloud services: compute, storage, inference, billing.",
    docs: "https://docs.zoo.ngo/api/cloud",
    icon: Globe,
  },
  {
    title: "LLM Gateway",
    domain: "llm.zoo.ngo",
    description:
      "Unified proxy for 100+ LLM providers. OpenAI-compatible endpoint with auth, billing, and observability.",
    docs: "https://docs.zoo.ngo/api/llm",
    icon: Brain,
  },
  {
    title: "IAM",
    domain: "zoo.id",
    description:
      "Identity, authentication, OAuth 2.0, and OpenID Connect for all Zoo services.",
    docs: "https://docs.zoo.ngo/api/iam",
    icon: Lock,
  },
  {
    title: "KMS",
    domain: "kms.zoo.ngo",
    description:
      "Secrets management, encryption keys, certificates, and org-scoped credential storage.",
    docs: "https://docs.zoo.ngo/api/kms",
    icon: Shield,
  },
];

const projects = [
  {
    name: "LLM Gateway",
    description: "Unified proxy for 100+ AI providers with auth, billing, and observability.",
    lang: "Python",
    repo: "llm",
    icon: Brain,
  },
  {
    name: "ORM",
    description: "Generics ORM with xorm compat, auto-serialization, and multi-backend support.",
    lang: "Go",
    repo: "orm",
    icon: Database,
  },
  {
    name: "MCP",
    description: "Model Context Protocol tools — 260+ tools for AI agents.",
    lang: "TypeScript",
    repo: "mcp",
    icon: Wrench,
  },
  {
    name: "Agent SDK",
    description: "Multi-agent orchestration with OpenAI-compatible interface.",
    lang: "Python",
    repo: "agent",
    icon: Network,
  },
  {
    name: "Operative",
    description: "Computer use for Claude — screen, keyboard, and browser automation.",
    lang: "Python",
    repo: "operative",
    icon: Terminal,
  },
  {
    name: "Chat",
    description: "AI chat with 14 Zen models, 100+ third-party, and MCP tools.",
    lang: "TypeScript",
    repo: "chat",
    icon: Code,
  },
  {
    name: "Search",
    description: "AI-powered search engine with generative UI.",
    lang: "TypeScript",
    repo: "search",
    icon: Search,
  },
  {
    name: "Flow",
    description: "Visual workflow builder for AI pipelines.",
    lang: "TypeScript",
    repo: "flow",
    icon: Network,
  },
  {
    name: "Platform",
    description: "PaaS alternative to Vercel and Heroku — deploy anything.",
    lang: "TypeScript",
    repo: "platform",
    icon: Server,
  },
  {
    name: "Vault",
    description: "PCI-compliant card tokenization and cardholder data environment.",
    lang: "Go",
    repo: "vault",
    icon: Shield,
  },
  {
    name: "Candle",
    description: "Rust ML framework — tensors, neural nets, GPU acceleration.",
    lang: "Rust",
    repo: "candle",
    icon: BoxIcon,
  },
  {
    name: "Jin",
    description: "Multimodal LLM framework — text, vision, audio, and 3D.",
    lang: "Python / Rust",
    repo: "jin",
    icon: Brain,
  },
  {
    name: "Node",
    description: "Blockchain/AI node with libp2p networking.",
    lang: "Rust",
    repo: "node",
    icon: Globe,
  },
  {
    name: "MPC",
    description: "Multi-party computation wallet — threshold signing and key management.",
    lang: "Go",
    repo: "mpc",
    icon: Lock,
  },
];

const infrastructure = [
  {
    title: "Zen Models",
    description: "41 AI models across 8 families — text, vision, image, audio, code, embeddings, and reranking.",
    href: "https://zenlm.org",
    icon: Brain,
  },
  {
    title: "Lux Network",
    description: "Settlement layer for AI compute with multi-consensus architecture and post-quantum cryptography.",
    href: "https://lux.network",
    icon: Globe,
  },
  {
    title: "Zoo Cloud",
    description: "Managed AI infrastructure — deploy models, manage workloads, monitor everything from one console.",
    href: "https://console.zoo.ngo",
    icon: Server,
  },
];

const codeExamples: Record<string, string> = {
  Python: `from hanzo import Zoo

client = Zoo()

response = client.chat.completions.create(
    model="zen5",
    messages=[
        {"role": "user", "content": "Explain quantum computing in one paragraph."}
    ],
)

print(response.choices[0].message.content)`,
  TypeScript: `import Zoo from "@hanzo/sdk";

const client = new Zoo();

const response = await client.chat.completions.create({
  model: "zen5",
  messages: [
    { role: "user", content: "Explain quantum computing in one paragraph." },
  ],
});

console.log(response.choices[0].message.content);`,
  Go: `package main

import (
    "context"
    "fmt"
    "github.com/zooai/go-sdk"
)

func main() {
    client := hanzo.NewClient()

    resp, _ := client.Chat.Completions.New(context.TODO(),
        hanzo.ChatCompletionNewParams{
            Model: "zen5",
            Messages: []hanzo.ChatCompletionMessageParam{
                {Role: "user", Content: "Explain quantum computing in one paragraph."},
            },
        },
    )

    fmt.Println(resp.Choices[0].Message.Content)
}`,
  Rust: `use hanzo::Client;

#[tokio::main]
async fn main() -> Result<(), hanzo::Error> {
    let client = Client::new();

    let response = client
        .chat()
        .completions()
        .create("zen5")
        .message("user", "Explain quantum computing in one paragraph.")
        .send()
        .await?;

    println!("{}", response.choices[0].message.content);
    Ok(())
}`,
};

const langBadgeColor: Record<string, string> = {
  Python: "bg-foreground/10 text-foreground",
  TypeScript: "bg-foreground/10 text-foreground",
  Go: "bg-foreground/10 text-foreground",
  Rust: "bg-foreground/10 text-foreground",
  "Python / Rust": "bg-foreground/10 text-foreground",
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function LangBadge({ lang }: { lang: string }) {
  return (
    <Box tag="span"
      className={cn(
        "text-[10px] font-mono font-medium px-2 py-0.5 rounded-full",
        langBadgeColor[lang] ?? "bg-foreground/10 text-foreground"
      )}
    >
      {lang}
    </Box>
  );
}

function SdkIconBadge({ icon }: { icon: string }) {
  return (
    <Box tag="span" className="flex items-center justify-center w-10 h-10 rounded-lg bg-foreground/5 font-mono text-sm font-bold">
      {icon}
    </Box>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <Box tag="button"
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className={cn(
        "p-1.5 rounded transition-colors",
        "hover:bg-foreground/10 text-muted-foreground hover:text-foreground"
      )}
      title="Copy"
    >
      {copied ? <Check style={css('w-3.5 h-3.5')} /> : <Copy style={css('w-3.5 h-3.5')} />}
    </Box>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function PageClient() {
  const [activeTab, setActiveTab] = useState("Python");

  return (
    <Box tag="main" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <Box className="max-w-6xl mx-auto">
        {/* Hero */}
        <M
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <Box className="flex items-center gap-3 mb-6">
            <BookOpen style={css('w-6 h-6 text-muted-foreground')} />
            <Box tag="span" className="text-sm font-mono text-muted-foreground">docs.zoo.ngo</Box>
          </Box>
          <Box tag="h1" className="text-5xl sm:text-6xl font-bold mb-6">
            Developer Documentation
          </Box>
          <Box tag="p" className={cn("text-xl max-w-3xl", "text-muted-foreground")}>
            Everything you need to build with Zoo — SDKs, APIs, guides, and
            reference documentation for every language and framework.
          </Box>
          <Box className="flex flex-wrap gap-3 mt-8">
            <Link href="/docs/sdk">
              <Button variant="primary" className="gap-2">
                Get Started <ArrowRight style={css('w-4 h-4')} />
              </Button>
            </Link>
            <Link href="/docs/api">
              <Button variant="outline" className="gap-2">
                API Reference <BookOpen style={css('w-4 h-4')} />
              </Button>
            </Link>
          </Box>
        </M>

        {/* SDKs */}
        <M
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-20"
        >
          <Box tag="h2" className="text-3xl font-bold mb-2">SDKs</Box>
          <Box tag="p" className={cn("text-lg mb-8", "text-muted-foreground")}>
            First-class client libraries for every major language.
          </Box>
          <Box className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sdks.map((sdk, i) => (
              <M
                key={sdk.language}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 + i * 0.03 }}
                className={cn(
                  "p-6 rounded-lg border transition-colors",
                  "border-border hover:border-foreground/20"
                )}
              >
                <Box className="flex items-start gap-4 mb-4">
                  <SdkIconBadge icon={sdk.icon} />
                  <Box className="flex-1 min-w-0">
                    <Box tag="h3" className="text-lg font-semibold">{sdk.language}</Box>
                    <Box tag="p" className="text-sm text-muted-foreground font-mono">{sdk.pkg}</Box>
                  </Box>
                </Box>
                <Box className="flex items-center gap-2 mb-4 bg-muted/50 rounded-lg px-4 py-2.5">
                  <Terminal style={css('w-3.5 h-3.5 text-muted-foreground shrink-0')} />
                  <Box tag="code" className="text-sm font-mono flex-1 truncate">{sdk.install}</Box>
                  <CopyButton text={sdk.install} />
                </Box>
                <Box className="flex flex-wrap gap-3 text-sm">
                  <Box tag="a"
                    href={sdk.registryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    {sdk.registry} <ExternalLink style={css('w-3 h-3')} />
                  </Box>
                  <Box tag="a"
                    href={sdk.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    GitHub <Github style={css('w-3 h-3')} />
                  </Box>
                  <Box tag="a"
                    href={sdk.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    Docs <BookOpen style={css('w-3 h-3')} />
                  </Box>
                </Box>
              </M>
            ))}
          </Box>
          <Box className="mt-4 text-center">
            <Link href="/docs/sdk">
              <Box tag="span" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
              View detailed SDK guides <ArrowRight style={css('w-3 h-3')} />
              </Box>
            </Link>
          </Box>
        </M>

        {/* API Reference */}
        <M
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-20"
        >
          <Box tag="h2" className="text-3xl font-bold mb-2">API Reference</Box>
          <Box tag="p" className={cn("text-lg mb-8", "text-muted-foreground")}>
            RESTful APIs with OpenAI-compatible endpoints.
          </Box>
          <Box className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {apis.map((api, i) => {
              const Icon = api.icon;
              return (
                <M tag="a"
                  key={api.title}
                  href={api.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.03 }}
                  className={cn(
                    "p-6 rounded-lg border transition-colors group",
                    "border-border hover:border-foreground/20"
                  )}
                >
                  <Box className="flex items-center gap-3 mb-3">
                    <Icon style={css('w-5 h-5 text-muted-foreground')} />
                    <Box tag="h3" className="text-lg font-semibold group-hover:underline">{api.title}</Box>
                  </Box>
                  <Box tag="p" className="text-xs font-mono text-muted-foreground mb-2">{api.domain}</Box>
                  <Box tag="p" className="text-sm text-muted-foreground">{api.description}</Box>
                </M>
              );
            })}
          </Box>
          <Box className="mt-4 text-center">
            <Link href="/docs/api">
              <Box tag="span" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
              View full API reference <ArrowRight style={css('w-3 h-3')} />
              </Box>
            </Link>
          </Box>
        </M>

        {/* Quick Start */}
        <M
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-20"
        >
          <Box tag="h2" className="text-3xl font-bold mb-2">Quick Start</Box>
          <Box tag="p" className={cn("text-lg mb-8", "text-muted-foreground")}>
            Make your first API call in any language.
          </Box>
          <Box className={cn("rounded-lg border overflow-hidden", "border-border")}>
            <Box className="flex border-b border-border">
              {Object.keys(codeExamples).map((lang) => (
                <Box tag="button"
                  key={lang}
                  onClick={() => setActiveTab(lang)}
                  className={cn(
                    "px-4 py-2.5 text-sm font-medium transition-colors",
                    activeTab === lang
                      ? "bg-foreground/5 text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.02]"
                  )}
                >
                  {lang}
                </Box>
              ))}
            </Box>
            <Box className="relative">
              <Box tag="pre" className="p-6 overflow-x-auto text-sm font-mono leading-relaxed bg-muted/50">
                <code>{codeExamples[activeTab]}</code>
              </Box>
              <Box className="absolute top-3 right-3">
                <CopyButton text={codeExamples[activeTab]} />
              </Box>
            </Box>
          </Box>
        </M>

        {/* Projects */}
        <M
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <Box tag="h2" className="text-3xl font-bold mb-2">Projects</Box>
          <Box tag="p" className={cn("text-lg mb-8", "text-muted-foreground")}>
            Open source infrastructure powering the Zoo ecosystem.
          </Box>
          <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return (
                <M tag="a"
                  key={project.name}
                  href={`https://github.com/zooai/${project.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.03 }}
                  className={cn(
                    "p-5 rounded-lg border transition-colors group",
                    "border-border hover:border-foreground/20"
                  )}
                >
                  <Box className="flex items-center justify-between mb-3">
                    <Box className="flex items-center gap-2">
                      <Icon style={css('w-4 h-4 text-muted-foreground')} />
                      <Box tag="h3" className="font-semibold group-hover:underline">{project.name}</Box>
                    </Box>
                    <LangBadge lang={project.lang} />
                  </Box>
                  <Box tag="p" className="text-sm text-muted-foreground mb-3">{project.description}</Box>
                  <Box className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Github style={css('w-3 h-3')} />
                    <Box tag="span" className="font-mono">zooai/{project.repo}</Box>
                  </Box>
                </M>
              );
            })}
          </Box>
        </M>

        {/* Infrastructure */}
        <M
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-20"
        >
          <Box tag="h2" className="text-3xl font-bold mb-2">Infrastructure</Box>
          <Box tag="p" className={cn("text-lg mb-8", "text-muted-foreground")}>
            The platforms and networks that power Zoo.
          </Box>
          <Box className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {infrastructure.map((item, i) => {
              const Icon = item.icon;
              return (
                <M tag="a"
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.03 }}
                  className={cn(
                    "p-6 rounded-lg border transition-colors group",
                    "border-border hover:border-foreground/20"
                  )}
                >
                  <Icon style={css('w-6 h-6 text-muted-foreground mb-3')} />
                  <Box tag="h3" className="text-lg font-semibold mb-2 group-hover:underline">{item.title}</Box>
                  <Box tag="p" className="text-sm text-muted-foreground">{item.description}</Box>
                </M>
              );
            })}
          </Box>
        </M>

        {/* CTA */}
        <M
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={cn(
            "p-8 md:p-12 rounded-lg border text-center",
            "border-border bg-foreground/[0.02]"
          )}
        >
          <Box tag="h2" className="text-3xl font-bold mb-4">Start Building</Box>
          <Box tag="p" className={cn("text-lg mb-8 max-w-2xl mx-auto", "text-muted-foreground")}>
            Create an account, grab your API key, and make your first call in under a minute.
          </Box>
          <Box className="flex flex-wrap justify-center gap-3">
            <a href="https://console.zoo.ngo" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="gap-2">
                Get API Key <ArrowRight style={css('w-4 h-4')} />
              </Button>
            </a>
            <a href="https://docs.zoo.ngo" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                Full Documentation <ExternalLink style={css('w-4 h-4')} />
              </Button>
            </a>
          </Box>
        </M>
      </Box>
    </Box>
  );
}
