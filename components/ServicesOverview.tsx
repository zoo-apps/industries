"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Database, Cloud, Brain, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ServicesOverview() {
  const services = [
    {
      icon: Brain,
      title: "Frontier AI Models",
      description: "State-of-the-art language models and multimodal AI — the Zen family spans 600M to 1T+ parameters across text, vision, audio, video, and 3D",
      capabilities: ["Zen MoE Architecture", "Constitutional AI", "RLHF Training", "Safety Benchmarks"],
      link: "/models",
      cta: "Explore Zen Models",
      external: false,
      color: "var(--brand-magenta)",
    },
    {
      icon: Shield,
      title: "AI Safety & Alignment",
      description: "Research and implementation of AI safety measures, interpretability tools, and alignment techniques across all Zoo products",
      capabilities: ["Mechanistic Interpretability", "Value Alignment", "Robustness Testing", "Safety Monitoring"],
      link: "/research",
      cta: "Read Our Research",
      external: false,
      color: "var(--brand-green)",
    },
    {
      icon: Database,
      title: "AI Workforce & Automation",
      description: "Deploy an autonomous AI team — Zoo Bot gives you 16 specialized AI agents for engineering, design, marketing, and operations",
      capabilities: ["Zoo Bot — AI team in a box", "Zoo Dev — AI coding agent", "Zoo Team — Augmented engineering", "Zoo Chat — AI assistant"],
      link: "https://zoo.bot",
      cta: "Try Zoo Bot",
      external: true,
      color: "var(--brand-blue)",
    },
    {
      icon: Cloud,
      title: "Platform & Infrastructure",
      description: "Enterprise-grade AI platform with LLM gateway supporting 200+ models, secure deployment, and resilient infrastructure — from edge to cloud",
      capabilities: ["Zoo Industries — Full AI platform", "LLM Gateway — 200+ models, one API", "Zoo Engine — Cloud GPU inference", "Zoo Edge — On-device AI inference", "SBOM-verified OSS revenue sharing (25%)"],
      link: "https://zoo.ngo",
      cta: "Try Zoo Industries",
      external: true,
      color: "var(--brand-cyan)",
    }
  ];

  return (
    <section id="capabilities" className={cn(
      "py-20 transition-colors duration-300",
      "bg-secondary"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "text-4xl font-bold mb-4",
              "text-foreground"
            )}
          >
            Building the Future of Safe AI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn(
              "text-xl max-w-3xl mx-auto",
              "text-muted-foreground"
            )}
          >
            From frontier model development to edge deployment, we're advancing AI capabilities
            while prioritizing safety, privacy, and human alignment at every step
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-rainbow-hover p-8 border-2 border-black bg-white text-black shadow-[10px_10px_0_0_#000]"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center bg-black">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-extrabold mb-3 text-black uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-black/80 font-medium">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {service.capabilities.map((capability) => (
                        <div key={capability} className="flex items-center text-sm text-black/90 font-medium">
                          <div className="w-2 h-2 mr-2 bg-black" />
                          {capability}
                        </div>
                      ))}
                    </div>
                    {service.external ? (
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-black underline underline-offset-2 hover:no-underline"
                      >
                        {service.cta} <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link href={service.link}
                        className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-black underline underline-offset-2 hover:no-underline"
                      >
                        {service.cta} <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
