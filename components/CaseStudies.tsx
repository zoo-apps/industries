"use client";

import { Box } from '@hanzo/ui'
import { M } from '@/components/motion'
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CaseStudies() {
  const caseStudies = [
    {
      category: "AI Training",
      title: "Training-Free GRPO: Efficient Fine-tuning",
      client: "Zoo Labs Foundation",
      description: "Implemented Training-Free GRPO achieving dramatic training cost reduction versus traditional methods. 100× data efficiency with only 100 examples instead of 10,000+.",
      impact: "100× data efficiency",
      year: "2025",
      link: "https://github.com/zooai/gym"
    },
    {
      category: "Research Publication",
      title: "Active Semantic Optimization",
      client: "Zoo Industries Research",
      description: "Published ASO framework achieving 18.2% SWE-bench resolution with 1-bit BitDelta compression providing 29.5× memory savings for model adaptation.",
      impact: "18.2% benchmark",
      year: "2025",
      link: "https://github.com/zooai/papers"
    },
    {
      category: "Consensus Protocol",
      title: "Post-Quantum Secure Blockchain",
      client: "Lux Network",
      description: "Developed Quasar consensus with dual-certificate quantum-secure finality using BLS and Corona threshold signatures. 24 research papers published.",
      impact: "Quantum-secure",
      year: "2025",
      link: "https://github.com/luxfi/papers"
    },
    {
      category: "Model Development",
      title: "Zen Model Family (600M–1T+ params)",
      client: "Zen LM",
      description: "Released 100+ model weights spanning text, vision, video, audio, 3D, code, and agents. Open weights from 0.6B to 1T+ parameters. Zen5 (2T+) in training.",
      impact: "1T+ frontier model",
      year: "2025",
      link: "https://huggingface.co/zenlm"
    }
  ];

  return (
    <Box tag="section" className={cn(
      "py-20 transition-colors duration-300",
      "bg-foreground/[0.03]"
    )}>
      <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Box className="text-center mb-16">
          <M tag="h2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Research Impact
          </M>
          <M tag="p"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn(
              "text-xl max-w-3xl mx-auto",
              "text-muted-foreground"
            )}
          >
            Delivering measurable breakthroughs in AI efficiency, cryptography,
            and distributed systems through open research
          </M>
        </Box>

        <Box className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <M tag="a"
              key={study.title}
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "p-8 rounded-lg border transition-all group cursor-pointer",
                "bg-background/50 border-border hover:border-border"
              )}
            >
              <Box className="flex justify-between items-start mb-4">
                <Box tag="span" className={cn(
                  "text-sm font-medium uppercase tracking-wider",
                  "text-muted-foreground"
                )}>
                  {study.category}
                </Box>
                <Box tag="span" className={cn(
                  "text-sm",
                  "text-muted-foreground"
                )}>{study.year}</Box>
              </Box>

              <Box tag="h3" className="text-xl font-semibold mb-2">{study.title}</Box>
              <Box tag="p" className={cn(
                "text-sm mb-4 font-medium",
                "text-muted-foreground"
              )}>{study.client}</Box>
              <Box tag="p" className={cn(
                "mb-6",
                "text-muted-foreground"
              )}>{study.description}</Box>

              <Box className="flex items-center justify-between">
                <Box className={cn(
                  "px-4 py-2 rounded-md",
                  "bg-foreground/10"
                )}>
                  <Box tag="span" className="text-sm font-semibold">{study.impact}</Box>
                </Box>
                <ExternalLink className={cn(
                  "w-5 h-5 transition-colors",
                  "text-foreground/30 group-hover:text-foreground"
                )} />
              </Box>
            </M>
          ))}
        </Box>

        <M
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Box tag="a"
            href="/research#papers"
            className="inline-flex items-center font-semibold hover:underline"
          >
            View All Research Papers
            <ArrowRight className="w-4 h-4 ml-2" />
          </Box>
        </M>
      </Box>
    </Box>
  );
}
