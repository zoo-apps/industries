"use client";

import { Box } from '@hanzo/ui'
import { M } from '@/components/motion'
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { cn } from "@/lib/utils";
import {
  Download,
  Mail,
  ExternalLink,
  FileText,
  Palette,
  Building2,
  Calendar,
  Globe,
  Phone,
  Users,
  Award,
  Rocket,
  BookOpen,
  Github,
} from "lucide-react";

// Comprehensive press releases - chronological history
const pressReleases = [
  {
    date: "January 2025",
    title: "ZAP Protocol: The MCP Killer",
    description: "Zoo announces ZAP (Zero-copy Agent Protocol), achieving ~500x faster agent communication than MCP with zero-copy RPC and native consensus.",
    link: "https://github.com/zap-proto/zap",
    type: "Product",
  },
  {
    date: "January 2025",
    title: "Zen Model Family Reaches 22 Models",
    description: "Zen LM releases complete model family from 600M to 1T+ parameters, including Coder, Omni (multimodal), and Nano (edge) variants.",
    link: "https://huggingface.co/zenlm",
    type: "Research",
  },
  {
    date: "December 2024",
    title: "Training-Free GRPO: Efficient Model Adaptation",
    description: "Zoo Labs Foundation releases Training-Free GRPO, dramatically reducing AI training costs while maintaining performance through data-efficient fine-tuning.",
    link: "https://github.com/zooai/gym",
    type: "Research",
  },
  {
    date: "December 2024",
    title: "Lux Network FHE Implementation",
    description: "Lux releases GPU-accelerated Fully Homomorphic Encryption with 100x speedup, enabling practical privacy-preserving AI inference.",
    link: "https://github.com/luxfi/fhe",
    type: "Infrastructure",
  },
  {
    date: "November 2024",
    title: "Quasar: Post-Quantum Secure Consensus",
    description: "Lux Network introduces Quasar consensus with FALCON signatures and Corona threshold cryptography for quantum-resistant blockchain finality.",
    link: "https://github.com/luxfi/papers",
    type: "Research",
  },
  {
    date: "October 2024",
    title: "Hamiltonian Market Maker (HMM) Published",
    description: "HIP-004 specification released for decentralized AI compute markets with Hamiltonian invariant pricing and <200ms quote latency.",
    link: "https://github.com/zooai/papers",
    type: "Research",
  },
  {
    date: "September 2024",
    title: "Active Semantic Optimization (ASO) Framework",
    description: "Published ASO achieving 18.2% SWE-bench resolution through training-free adaptation and BitDelta 1-bit compression.",
    link: "https://github.com/zooai/papers",
    type: "Research",
  },
  {
    date: "August 2024",
    title: "Zoo MCP Reaches 260+ Tools",
    description: "Model Context Protocol toolkit expands to over 260 tools for AI model integration, file operations, and developer workflows.",
    link: "https://github.com/zooai/mcp",
    type: "Product",
  },
  {
    date: "2023",
    title: "Zoo Labs Foundation Established",
    description: "501(c)(3) non-profit founded for open AI research, decentralized training (DSO), and community-driven governance via zips.zoo.ngo.",
    link: "https://zoo.ngo",
    type: "Organization",
  },
  {
    date: "2022",
    title: "Lux Network Multi-Consensus Architecture",
    description: "Released multi-consensus blockchain with Wave (sub-second finality), Focus (high-throughput), and TEE attestation integration.",
    link: "https://lux.network",
    type: "Infrastructure",
  },
  {
    date: "2016",
    title: "Zoo Industries Founded",
    description: "Zoo Industries Inc founded in Los Angeles to build frontier AI infrastructure and enterprise AI solutions.",
    type: "Milestone",
  },
];

// Social links
const socialLinks = [
  { name: "X (Twitter)", handle: "@zoo_labs", href: "https://x.com/zoo_labs", icon: Globe },
  { name: "LinkedIn", handle: "zooai", href: "https://linkedin.com/company/zoo-labs", icon: Users },
  { name: "GitHub", handle: "zooai", href: "https://github.com/zooai", icon: Github },
  { name: "Discord", handle: "hanzo", href: "https://discord.gg/hanzo", icon: Users },
];

// Brand colors
const brandColors = [
  { name: "Black", hex: "#000000", usage: "Primary brand color" },
  { name: "White", hex: "#FFFFFF", usage: "Light backgrounds, text on dark" },
  { name: "Gray 900", hex: "#111111", usage: "Dark UI elements" },
  { name: "Gray 400", hex: "#9CA3AF", usage: "Secondary text" },
];

const typeColors: Record<string, string> = {
  "Product": "bg-foreground/10 text-muted-foreground border-border",
  "Research": "bg-foreground/10 text-muted-foreground border-border/20",
  "Infrastructure": "bg-foreground/10 text-muted-foreground border-border",
  "Organization": "bg-foreground/10 text-muted-foreground border-border",
  "Milestone": "bg-foreground/10 text-muted-foreground border-border",
};

const LogoPreview = () => (
  <img src="/zoo-logo.svg" alt="Zoo" className="w-12 h-12" />
);

export default function PageClient() {
  return (
    <Box className={cn("min-h-screen transition-colors duration-300", "bg-background text-foreground")}>
      <Box tag="main" className="pt-16">
        {/* Hero */}
        <Box tag="section" className={cn("py-24 px-4 bg-gradient-to-b", "from-white/5 to-transparent")}>
          <Box className="max-w-5xl mx-auto text-center">
            <M
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box className={cn("inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-medium mb-6", "bg-primary text-primary-foreground")}>
                <FileText className="w-4 h-4" />
                Press Room
              </Box>
              <Box tag="h1" className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Press & Media
              </Box>
              <Box tag="p" className={cn("text-xl max-w-2xl mx-auto mb-8", "text-muted-foreground")}>
                Download brand assets, access press releases, and find everything you need to write about Zoo Industries.
              </Box>
              <Box className="flex flex-wrap gap-4 justify-center">
                <a href="mailto:press@zoo.ngo">
                  <Button className={cn("gap-2", "bg-primary text-primary-foreground hover:bg-primary/90")}>
                    <Mail className="w-4 h-4" />
                    Contact Press Team
                  </Button>
                </a>
                <a href="https://github.com/zooai/brand" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <Download className="w-4 h-4" />
                    Download Press Kit
                  </Button>
                </a>
              </Box>
            </M>
          </Box>
        </Box>

        {/* Company Overview */}
        <Box tag="section" className="py-16 px-4">
          <Box className="max-w-6xl mx-auto">
            <Box className="flex items-center gap-3 mb-6">
              <Building2 className={cn("w-6 h-6", "text-muted-foreground")} />
              <Box tag="h2" className="text-2xl font-bold">About Zoo Industries</Box>
            </Box>
            <Box className="max-w-3xl">
              <Box tag="p" className={cn("text-lg leading-relaxed mb-4", "text-muted-foreground")}>
                <strong>Zoo Industries Inc</strong> (Techstars '17) is a frontier AI research lab building next-generation AI infrastructure. Founded in 2016 in Los Angeles, Zoo develops large language models, AI training frameworks, and enterprise AI platforms.
              </Box>
              <Box tag="p" className={cn("text-lg leading-relaxed mb-4", "text-muted-foreground")}>
                Our research spans efficient model training (Training-Free GRPO, ASO), post-quantum cryptography, fully homomorphic encryption, and decentralized AI infrastructure. We publish open research and release open-source AI models through the Zen LM family.
              </Box>
              <Box tag="p" className={cn("text-lg leading-relaxed", "text-muted-foreground")}>
                Zoo operates alongside partner organizations: <strong>Zoo Labs Foundation</strong> (501c3 open AI research), <strong>Zen LM</strong> (frontier models), and <strong>Lux Network</strong> (blockchain infrastructure).
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Press Contact */}
        <Box tag="section" className={cn("py-16 px-4", "bg-foreground/5")}>
          <Box className="max-w-6xl mx-auto">
            <Box className="flex items-center gap-3 mb-8">
              <Mail className={cn("w-6 h-6", "text-muted-foreground")} />
              <Box tag="h2" className="text-2xl font-bold">Press Contact</Box>
            </Box>
            <Box className="grid md:grid-cols-3 gap-6">
              <Box className={cn("p-6 rounded-xl border", "bg-foreground/5 border-border")}>
                <Box tag="h3" className="font-semibold mb-4">Media Inquiries</Box>
                <Box className="space-y-3">
                  <Box tag="a"
                    href="mailto:press@zoo.ngo"
                    className={cn("flex items-center gap-2 transition-colors", "text-muted-foreground hover:text-foreground")}
                  >
                    <Mail className="w-4 h-4" />
                    press@zoo.ngo
                  </Box>
                  <Box className={cn("flex items-center gap-2", "text-muted-foreground")}>
                    <Phone className="w-4 h-4" />
                    +1 (913) 777-4443
                  </Box>
                </Box>
              </Box>
              <Box className={cn("p-6 rounded-xl border", "bg-foreground/5 border-border")}>
                <Box tag="h3" className="font-semibold mb-4">Headquarters</Box>
                <Box className={cn("space-y-1", "text-muted-foreground")}>
                  <Box tag="p" className={cn("font-medium", "text-muted-foreground")}>Zoo Industries Inc</Box>
                  <p>Los Angeles, California</p>
                  <p>United States</p>
                </Box>
              </Box>
              <Box className={cn("p-6 rounded-xl border", "bg-foreground/5 border-border")}>
                <Box tag="h3" className="font-semibold mb-4">Schedule Interview</Box>
                <Box tag="p" className={cn("text-sm mb-4", "text-muted-foreground")}>Book time with our communications team.</Box>
                <a href="https://cal.com/hanzo" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline" className="w-full gap-2">
                    <Calendar className="w-4 h-4" />
                    Schedule via Cal.com
                  </Button>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Brand Assets */}
        <Box tag="section" className="py-16 px-4">
          <Box className="max-w-6xl mx-auto">
            <Box className="flex items-center justify-between mb-8">
              <Box className="flex items-center gap-3">
                <Palette className={cn("w-6 h-6", "text-muted-foreground")} />
                <Box tag="h2" className="text-2xl font-bold">Brand Assets</Box>
              </Box>
              <a href="https://github.com/zooai/brand" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="w-4 h-4" />
                  View on GitHub
                </Button>
              </a>
            </Box>

            <Box className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Dark Background Logo */}
              <Box className={cn("rounded-xl border overflow-hidden", "border-border")}>
                <Box className="h-32 bg-background flex items-center justify-center">
                  <LogoPreview />
                </Box>
                <Box className={cn("p-4", "bg-foreground/5")}>
                  <Box tag="h3" className="font-semibold mb-1">Logo - Dark Background</Box>
                  <Box tag="p" className={cn("text-sm mb-2", "text-muted-foreground")}>White logo for dark backgrounds</Box>
                  <Box tag="p" className={cn("text-xs", "text-foreground/30")}>SVG, PNG available</Box>
                </Box>
              </Box>

              {/* Light Background Logo */}
              <Box className={cn("rounded-xl border overflow-hidden", "border-border")}>
                <Box className={cn("h-32 flex items-center justify-center border-b", "bg-primary border-border")}>
                  <LogoPreview />
                </Box>
                <Box className={cn("p-4", "bg-foreground/5")}>
                  <Box tag="h3" className="font-semibold mb-1">Logo - Light Background</Box>
                  <Box tag="p" className={cn("text-sm mb-2", "text-muted-foreground")}>Black logo for light backgrounds</Box>
                  <Box tag="p" className={cn("text-xs", "text-foreground/30")}>SVG, PNG available</Box>
                </Box>
              </Box>

              {/* Brand Colors */}
              <Box className={cn("rounded-xl border overflow-hidden", "border-border")}>
                <Box className="h-32 grid grid-cols-2 grid-rows-2">
                  {brandColors.map((color) => (
                    <Box
                      key={color.name}
                      className="flex items-center justify-center text-xs font-medium"
                      style={{
                        backgroundColor: color.hex,
                        color: color.hex === "#000000" || color.hex === "#111111" ? "#fff" : "#000"
                      }}
                    >
                      {color.hex}
                    </Box>
                  ))}
                </Box>
                <Box className={cn("p-4", "bg-foreground/5")}>
                  <Box tag="h3" className="font-semibold mb-1">Brand Colors</Box>
                  <Box tag="p" className={cn("text-sm mb-2", "text-muted-foreground")}>Primary color palette</Box>
                  <Box tag="p" className={cn("text-xs", "text-foreground/30")}>Black, White, Grays</Box>
                </Box>
              </Box>
            </Box>

            <Box className="flex flex-wrap gap-4">
              <a href="https://github.com/zooai/brand/archive/refs/heads/main.zip">
                <Button className={cn("gap-2", "bg-primary text-primary-foreground hover:bg-primary/90")}>
                  <Download className="w-4 h-4" />
                  Download All Assets (ZIP)
                </Button>
              </a>
              <a href="https://github.com/zooai/brand/blob/main/GUIDELINES.md" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <BookOpen className="w-4 h-4" />
                  Brand Guidelines
                </Button>
              </a>
            </Box>
          </Box>
        </Box>

        {/* Press Releases Timeline */}
        <Box tag="section" className={cn("py-16 px-4", "bg-foreground/5")}>
          <Box className="max-w-6xl mx-auto">
            <Box className="flex items-center gap-3 mb-8">
              <Calendar className={cn("w-6 h-6", "text-muted-foreground")} />
              <Box tag="h2" className="text-2xl font-bold">Press Releases & Announcements</Box>
            </Box>
            <Box className="space-y-4">
              {pressReleases.map((release, index) => (
                <M
                  key={release.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={cn("p-6 rounded-xl border transition-colors group", "bg-foreground/5 border-border hover:border-border")}
                >
                  <Box className="flex flex-col md:flex-row md:items-start gap-4">
                    <Box className="flex-shrink-0 w-24">
                      <Box className={cn("text-sm font-medium", "text-foreground/90")}>{release.date}</Box>
                      {release.type && (
                        <Box tag="span" className={cn("inline-block mt-1 px-2 py-0.5 text-xs rounded-full border", typeColors[release.type] || ("bg-foreground/10 text-muted-foreground border-border"))}>
                          {release.type}
                        </Box>
                      )}
                    </Box>
                    <Box className="flex-1">
                      <Box tag="h3" className="font-semibold mb-2 group-hover:underline">{release.title}</Box>
                      <Box tag="p" className={cn("text-sm", "text-muted-foreground")}>{release.description}</Box>
                    </Box>
                    {release.link && (
                      <Box tag="a"
                        href={release.link}
                        target={release.link.startsWith("http") ? "_blank" : undefined}
                        rel={release.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex-shrink-0"
                      >
                        <Button variant="ghost" size="sm" className={cn("gap-1", "text-muted-foreground hover:text-foreground")}>
                          Learn more
                          <ExternalLink className="w-3 h-3" />
                        </Button>
                      </Box>
                    )}
                  </Box>
                </M>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Social Media */}
        <Box tag="section" className="py-16 px-4">
          <Box className="max-w-6xl mx-auto">
            <Box className="flex items-center gap-3 mb-8">
              <Globe className={cn("w-6 h-6", "text-muted-foreground")} />
              <Box tag="h2" className="text-2xl font-bold">Connect With Us</Box>
            </Box>
            <Box className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Box tag="a"
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn("p-4 rounded-xl border transition-colors text-center group", "bg-foreground/5 border-border hover:border-border")}
                  >
                    <Icon className={cn("w-5 h-5 mx-auto mb-2 transition-colors", "text-muted-foreground group-hover:text-foreground")} />
                    <Box className="font-semibold mb-1">{social.name}</Box>
                    <Box className={cn("text-sm", "text-muted-foreground")}>{social.handle}</Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>

        {/* Leadership */}
        <Box tag="section" className={cn("py-16 px-4", "bg-foreground/5")}>
          <Box className="max-w-6xl mx-auto">
            <Box className="flex items-center gap-3 mb-8">
              <Users className={cn("w-6 h-6", "text-muted-foreground")} />
              <Box tag="h2" className="text-2xl font-bold">Leadership & Executive Bios</Box>
            </Box>
            <Box className={cn("p-8 rounded-xl border text-center", "bg-foreground/5 border-border")}>
              <Award className={cn("w-12 h-12 mx-auto mb-4", "text-muted-foreground")} />
              <Box tag="p" className={cn("mb-6", "text-muted-foreground")}>
                For executive bios, headshots, and interview requests, please contact our press team directly.
              </Box>
              <Box className="flex flex-wrap gap-4 justify-center">
                <Link href="/team">
                  <Button variant="outline" className="gap-2">
                    <Users className="w-4 h-4" />
                    View Team Page
                  </Button>
                </Link>
                <a href="mailto:press@zoo.ngo">
                  <Button className={cn("gap-2", "bg-primary text-primary-foreground hover:bg-primary/90")}>
                    <Mail className="w-4 h-4" />
                    Request Executive Bios
                  </Button>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Coverage Guidelines */}
        <Box tag="section" className="py-16 px-4">
          <Box className="max-w-6xl mx-auto">
            <Box className="flex items-center gap-3 mb-8">
              <BookOpen className={cn("w-6 h-6", "text-muted-foreground")} />
              <Box tag="h2" className="text-2xl font-bold">Coverage Guidelines</Box>
            </Box>
            <Box className="grid md:grid-cols-2 gap-6">
              <Box className={cn("p-6 rounded-xl border", "bg-foreground/5 border-border")}>
                <Box tag="h3" className="font-semibold mb-3">Preferred Terminology</Box>
                <Box tag="ul" className={cn("space-y-2 text-sm", "text-muted-foreground")}>
                  <li><strong>Company Name:</strong> Zoo Industries or Zoo Industries Inc</li>
                  <li><strong>Not:</strong> ZOO, Zoo, or Zoo.ngo</li>
                  <li><strong>Products:</strong> Zen, KOAN, Zoo Dev, Zoo Cloud</li>
                  <li><strong>Partners:</strong> Zoo Labs Foundation, Lux Network, Zen LM</li>
                </Box>
              </Box>
              <Box className={cn("p-6 rounded-xl border", "bg-foreground/5 border-border")}>
                <Box tag="h3" className="font-semibold mb-3">Key Facts</Box>
                <Box tag="ul" className={cn("space-y-2 text-sm", "text-muted-foreground")}>
                  <li><strong>Founded:</strong> 2016 in Los Angeles</li>
                  <li><strong>Research:</strong> <Box tag="a" href="/research#papers" className="underline hover:opacity-80">Published papers</Box></li>
                  <li><strong>Models:</strong> <Box tag="a" href="https://huggingface.co/zenlm" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">Zen LM family</Box></li>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
