"use client";

import { Box, css } from '@hanzo/ui'
import { M } from '@/components/motion'
import { motion } from "framer-motion";
import { Brain, Shield, Network, Sparkles, Cpu, Lock, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PageClient() {
  const caseStudies = [
    {
      icon: Brain,
      category: "AI Training",
      title: "Training-Free GRPO: Efficient Model Adaptation",
      description: "Developed Training-Free GRPO achieving dramatic training cost reduction versus traditional fine-tuning methods",
      results: [
        "Significant reduction in training costs",
        "100x data efficiency (100 examples vs 10,000+)",
        "Comparable performance to full fine-tuning",
        "Open-sourced via Zoo Labs Foundation"
      ],
      technologies: ["GRPO", "LoRA", "Zen MoDE", "Distributed Training"],
      impact: "Democratizing AI training for researchers and organizations worldwide",
      link: "https://github.com/zooai/gym"
    },
    {
      icon: Sparkles,
      category: "Research Publication",
      title: "Active Semantic Optimization (ASO)",
      description: "Published ASO framework achieving 18.2% SWE-bench resolution through training-free adaptation",
      results: [
        "18.2% SWE-bench resolution rate",
        "BitDelta 1-bit compression for model adaptation",
        "Zero additional training required",
        "Published HIP-002 specification"
      ],
      technologies: ["TF-GRPO", "BitDelta", "1-bit Compression", "Semantic Optimization"],
      impact: "Advancing state-of-the-art in efficient model adaptation",
      link: "https://github.com/zooai/papers"
    },
    {
      icon: Shield,
      category: "Post-Quantum Cryptography",
      title: "Quasar: Quantum-Secure Consensus",
      description: "Developed dual-certificate quantum-secure finality using BLS and Corona threshold signatures",
      results: [
        "Post-quantum secure finality guarantees",
        "Dual-certificate architecture for safety",
        "Integration with existing consensus protocols",
        "29 research papers published"
      ],
      technologies: ["FALCON", "Corona", "BLS Signatures", "Threshold Cryptography"],
      impact: "Future-proofing blockchain infrastructure against quantum threats",
      link: "https://github.com/luxfi/papers"
    },
    {
      icon: Network,
      category: "Consensus Protocols",
      title: "Lux Multi-Consensus Architecture",
      description: "Built multi-consensus blockchain with Wave, Focus, and Quasar protocols",
      results: [
        "Sub-second finality with Wave consensus",
        "High-throughput with Focus protocol",
        "Quantum-secure with Quasar consensus",
        "TEE attestation integration"
      ],
      technologies: ["Snow++", "DAG Consensus", "TEE", "Post-Quantum Crypto"],
      impact: "Creating the most versatile consensus framework for diverse use cases",
      link: "https://github.com/luxfi/papers"
    },
    {
      icon: Cpu,
      category: "AI Models",
      title: "Zen Model Family (600M–1T+ parameters)",
      description: "Released 100+ model weights spanning text, vision, video, audio, 3D, code, and agents",
      results: [
        "41 models across 8 families",
        "1.04T MoE flagship (zen5-max, Zen MoDE architecture)",
        "671B MoE (zen-max) with 71.3% SWE-bench",
        "Zen5 (2T+) in training — on-chain via NVIDIA TEE"
      ],
      technologies: ["Zen MoDE", "Flash Attention", "MoE", "Mixture of Diverse Experts"],
      impact: "Providing accessible, efficient frontier AI to the research community",
      link: "https://huggingface.co/zenlm"
    },
    {
      icon: Lock,
      category: "AI Economics",
      title: "Hamiltonian Market Maker (HMM)",
      description: "Novel invariant H(Psi,Theta) = kappa for decentralized AI compute markets",
      results: [
        "<200ms quote latency",
        "Hamiltonian invariant pricing",
        "No impermanent loss for providers",
        "Published HIP-004 specification"
      ],
      technologies: ["AMM", "Energy-based Pricing", "Compute Markets", "DeFi"],
      impact: "Enabling efficient, fair markets for AI compute resources",
      link: "https://github.com/zooai/papers"
    },
    {
      icon: Zap,
      category: "Agent Infrastructure",
      title: "ZAP: Zero-copy Agent Protocol",
      description: "The MCP Killer -- unified protocol achieving ~500x faster agent communication with zero-copy RPC",
      results: [
        "<1us local latency (vs 500us MCP)",
        "1.2M/s throughput (vs 2.2k/s MCP)",
        "~5% message overhead (vs 40% JSON)",
        "40-50x infrastructure cost reduction"
      ],
      technologies: ["ZAP Binary Format", "Zero-copy", "Metastable Consensus", "Post-Quantum"],
      impact: "Enabling real-time agent swarms with native consensus and capability security",
      link: "https://github.com/zap-proto/zap"
    }
  ];

  return (
    <Box className={cn("min-h-screen transition-colors duration-300", "bg-background text-foreground")}>
      <Box tag="main" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <Box className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <M
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Box tag="h1" className="text-5xl sm:text-6xl font-bold mb-6">
              Research Impact
            </Box>
            <Box tag="p" className={cn("text-xl sm:text-2xl max-w-3xl mx-auto", "text-muted-foreground")}>
              Delivering measurable breakthroughs in AI efficiency, cryptography, and distributed systems
            </Box>
          </M>

          {/* Success Metrics */}
          <M
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            <Box className={cn("p-6 rounded-lg text-center", "bg-foreground/5 border border-border")}>
              <Box className="text-3xl font-bold mb-2">130+</Box>
              <Box className={cn("text-sm", "text-muted-foreground")}>Research Papers</Box>
            </Box>
            <Box className={cn("p-6 rounded-lg text-center", "bg-foreground/5 border border-border")}>
              <Box className="text-3xl font-bold mb-2">100+</Box>
              <Box className={cn("text-sm", "text-muted-foreground")}>AI Model Weights</Box>
            </Box>
            <Box className={cn("p-6 rounded-lg text-center", "bg-foreground/5 border border-border")}>
              <Box className="text-3xl font-bold mb-2">2,500+</Box>
              <Box className={cn("text-sm", "text-muted-foreground")}>OSS Projects</Box>
            </Box>
            <Box className={cn("p-6 rounded-lg text-center", "bg-foreground/5 border border-border")}>
              <Box className="text-3xl font-bold mb-2">4</Box>
              <Box className={cn("text-sm", "text-muted-foreground")}>Research Organizations</Box>
            </Box>
          </M>

          {/* Case Studies Grid */}
          <Box className="space-y-12">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <M tag="a"
                  key={study.title}
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.3) }}
                  className={cn("block rounded-lg p-8 transition-colors group", "bg-foreground/5 border border-border hover:border-border")}
                >
                  <Box className="flex items-start space-x-4 mb-6">
                    <Box className="flex-shrink-0">
                      <Box className={cn("w-12 h-12 rounded-lg flex items-center justify-center transition-colors", "bg-primary group-hover:bg-primary/90")}>
                        <Icon style={css(cn("w-6 h-6", "text-primary-foreground"))} />
                      </Box>
                    </Box>
                    <Box className="flex-1">
                      <Box className={cn("text-sm mb-1", "text-muted-foreground")}>{study.category}</Box>
                      <Box tag="h3" className={cn("text-2xl font-semibold mb-2 transition-colors", "group-hover:text-foreground/80")}>{study.title}</Box>
                      <Box tag="p" className={cn("text-muted-foreground")}>{study.description}</Box>
                    </Box>
                  </Box>

                  <Box className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <Box tag="h4" className="text-lg font-semibold mb-3">Key Results</Box>
                      <Box tag="ul" className="space-y-2">
                        {study.results.map((result, idx) => (
                          <Box tag="li" key={idx} className="flex items-start">
                            <Box className={cn("w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0", "bg-primary")} />
                            <Box tag="span" className={cn("text-sm", "text-muted-foreground")}>{result}</Box>
                          </Box>
                        ))}
                      </Box>
                    </div>
                    <div>
                      <Box tag="h4" className="text-lg font-semibold mb-3">Technologies Used</Box>
                      <Box className="flex flex-wrap gap-2 mb-4">
                        {study.technologies.map((tech, idx) => (
                          <Box tag="span"
                            key={idx}
                            className={cn("px-3 py-1 rounded-full text-sm", "bg-foreground/10 text-muted-foreground")}
                          >
                            {tech}
                          </Box>
                        ))}
                      </Box>
                      <Box className={cn("text-sm", "text-muted-foreground")}>
                        <strong>Impact:</strong> {study.impact}
                      </Box>
                    </div>
                  </Box>
                </M>
              );
            })}
          </Box>

          {/* CTA Section */}
          <M
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="mt-20 text-center"
          >
            <Box tag="h2" className="text-3xl font-bold mb-6">
              Explore Our Research
            </Box>
            <Box tag="p" className={cn("text-xl mb-8 max-w-2xl mx-auto", "text-muted-foreground")}>
              Dive deeper into our published papers and open source projects
            </Box>
            <Box className="flex flex-col sm:flex-row gap-4 justify-center">
              <Box tag="a"
                href="/research#papers"
                className={cn("inline-block px-8 py-4 rounded-lg font-semibold transition-colors", "bg-primary text-primary-foreground hover:bg-primary/90")}
              >
                View All Papers
              </Box>
              <Box tag="a"
                href="https://github.com/zooai"
                target="_blank"
                rel="noopener noreferrer"
                className={cn("inline-block bg-transparent px-8 py-4 rounded-lg font-semibold transition-colors", "border border-primary text-foreground hover:bg-accent")}
              >
                Open Source
              </Box>
            </Box>
          </M>
        </Box>
      </Box>
    </Box>
  );
}
