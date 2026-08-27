"use client";

import { Box } from '@hanzo/ui'
import { M } from '@/components/motion'
import { motion } from "framer-motion";
import { Globe, Server, Shield, Cpu, Network, Zap, Lock, Database } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PageClient() {
  const features = [
    {
      icon: Globe,
      title: "Global Distribution",
      description: "Deploy AI across multiple geographic regions for maximum resilience and compliance",
      details: [
        "Multi-region deployment capabilities",
        "Data sovereignty compliance",
        "Local inference for reduced latency",
        "Geographic load balancing"
      ]
    },
    {
      icon: Server,
      title: "Distributed Computing",
      description: "Harness the power of distributed systems for scalable AI operations",
      details: [
        "Horizontal scaling architecture",
        "Resource pooling and sharing",
        "Dynamic workload distribution",
        "Fault-tolerant design"
      ]
    },
    {
      icon: Shield,
      title: "Byzantine Fault Tolerance",
      description: "Maintain system integrity even with node failures or malicious actors",
      details: [
        "Consensus mechanisms",
        "Redundant validation",
        "Self-healing networks",
        "Attack resistance"
      ]
    },
    {
      icon: Cpu,
      title: "Edge Computing Integration",
      description: "Seamlessly integrate edge devices into your decentralized AI network",
      details: [
        "Edge-cloud hybrid architecture",
        "Local processing capabilities",
        "Intelligent data routing",
        "Bandwidth optimization"
      ]
    }
  ];

  const useCases = [
    {
      title: "Enterprise AI",
      description: "Resilient AI for mission-critical enterprise applications",
      icon: Shield
    },
    {
      title: "Financial Services",
      description: "Distributed AI for fraud detection and risk analysis",
      icon: Database
    },
    {
      title: "Healthcare Networks",
      description: "Privacy-preserving AI across medical institutions",
      icon: Network
    },
    {
      title: "Smart Cities",
      description: "Decentralized intelligence for urban infrastructure",
      icon: Zap
    }
  ];

  const benefits = [
    {
      metric: "99.999%",
      label: "Uptime with no single point of failure"
    },
    {
      metric: "10x",
      label: "Improved resilience over centralized systems"
    },
    {
      metric: "<5ms",
      label: "Local inference latency"
    },
    {
      metric: "100%",
      label: "Data sovereignty compliance"
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
              Decentralized AI Infrastructure
            </Box>
            <Box tag="p" className={cn("text-xl sm:text-2xl max-w-3xl mx-auto", "text-muted-foreground")}>
              Build resilient, distributed AI systems that operate without central points of failure
            </Box>
          </M>

          {/* Key Benefits */}
          <M
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {benefits.map((benefit, index) => (
              <Box
                key={index}
                className={cn(
                  "p-6 rounded-lg text-center border",
                  "bg-foreground/5 border-border"
                )}
              >
                <Box className="text-3xl font-bold mb-2">{benefit.metric}</Box>
                <Box className={cn("text-sm", "text-muted-foreground")}>{benefit.label}</Box>
              </Box>
            ))}
          </M>

          {/* Core Features */}
          <Box className="mb-20">
            <M tag="h2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center mb-12"
            >
              Core Capabilities
            </M>

            <Box className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <M
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={cn(
                      "border rounded-lg p-8",
                      "bg-foreground/5 border-border"
                    )}
                  >
                    <Box className="flex items-start space-x-4">
                      <Box className="flex-shrink-0">
                        <Box className={cn(
                          "w-12 h-12 rounded-lg flex items-center justify-center",
                          "bg-primary"
                        )}>
                          <Icon className={cn("w-6 h-6", "text-primary-foreground")} />
                        </Box>
                      </Box>
                      <Box className="flex-1">
                        <Box tag="h3" className="text-xl font-semibold mb-3">{feature.title}</Box>
                        <Box tag="p" className={cn("mb-4", "text-muted-foreground")}>{feature.description}</Box>
                        <Box tag="ul" className="space-y-2">
                          {feature.details.map((detail, idx) => (
                            <Box tag="li" key={idx} className="flex items-start">
                              <div className={cn("w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0", "bg-primary")} />
                              <Box tag="span" className={cn("text-sm", "text-muted-foreground")}>{detail}</Box>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </M>
                );
              })}
            </Box>
          </Box>

          {/* Architecture Diagram Placeholder */}
          <M
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "mb-20 border rounded-lg p-12 text-center",
              "bg-foreground/5 border-border"
            )}
          >
            <Network className={cn("w-24 h-24 mx-auto mb-4", "text-foreground/30")} />
            <Box tag="h3" className="text-2xl font-semibold mb-4">Decentralized Architecture</Box>
            <Box tag="p" className={cn("max-w-2xl mx-auto", "text-muted-foreground")}>
              Our decentralized AI infrastructure eliminates single points of failure through
              distributed consensus, redundant nodes, and intelligent failover mechanisms.
            </Box>
          </M>

          {/* Use Cases */}
          <Box className="mb-20">
            <M tag="h2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center mb-12"
            >
              Industry Applications
            </M>

            <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <M
                    key={useCase.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={cn(
                      "p-6 rounded-lg border text-center transition-colors",
                      "bg-foreground/5 border-border hover:border-border"
                    )}
                  >
                    <Icon className="w-12 h-12 mx-auto mb-4" />
                    <Box tag="h3" className="text-lg font-semibold mb-2">{useCase.title}</Box>
                    <Box tag="p" className={cn("text-sm", "text-muted-foreground")}>{useCase.description}</Box>
                  </M>
                );
              })}
            </Box>
          </Box>

          {/* Technical Specifications */}
          <M
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "mb-20 p-12 rounded-lg border",
              "bg-gradient-to-r from-white/5 to-transparent border-border"
            )}
          >
            <Box tag="h2" className="text-3xl font-bold mb-8 text-center">Technical Specifications</Box>
            <Box className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Box tag="h3" className="text-xl font-semibold mb-4">Consensus Protocol</Box>
                <Box tag="ul" className="space-y-2">
                  {["Byzantine Fault Tolerant (BFT)", "Practical Byzantine Fault Tolerance", "Raft consensus for coordination", "Custom AI workload consensus"].map((item) => (
                    <Box tag="li" key={item} className={cn("text-muted-foreground")}>• {item}</Box>
                  ))}
                </Box>
              </div>
              <div>
                <Box tag="h3" className="text-xl font-semibold mb-4">Network Architecture</Box>
                <Box tag="ul" className="space-y-2">
                  {["Peer-to-peer mesh network", "Encrypted communication channels", "Dynamic node discovery", "Load balancing algorithms"].map((item) => (
                    <Box tag="li" key={item} className={cn("text-muted-foreground")}>• {item}</Box>
                  ))}
                </Box>
              </div>
              <div>
                <Box tag="h3" className="text-xl font-semibold mb-4">Security Features</Box>
                <Box tag="ul" className="space-y-2">
                  {["End-to-end encryption", "Zero-knowledge proofs", "Secure multi-party computation", "Homomorphic encryption support"].map((item) => (
                    <Box tag="li" key={item} className={cn("text-muted-foreground")}>• {item}</Box>
                  ))}
                </Box>
              </div>
            </Box>
          </M>

          {/* CTA Section */}
          <M
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Box tag="h2" className="text-3xl font-bold mb-6">
              Ready to Decentralize Your AI Infrastructure?
            </Box>
            <Box tag="p" className={cn("text-xl mb-8 max-w-2xl mx-auto", "text-muted-foreground")}>
              Join the future of resilient, distributed AI systems
            </Box>
            <Box className="flex flex-col sm:flex-row gap-4 justify-center">
              <Box tag="a"
                href="/#contact"
                className={cn(
                  "inline-block px-8 py-4 rounded-lg font-semibold transition-colors",
                  "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                Get Started
              </Box>
              <Box tag="a"
                href="https://docs.google.com/document/d/1mWC6mo9Wd4s3KaWPTF_4QhLqh5lRmzED12wRnLq71Sk/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-block border px-8 py-4 rounded-lg font-semibold transition-colors",
                  "border-primary text-foreground hover:bg-primary hover:text-primary-foreground"
                )}
              >
                View Documentation
              </Box>
            </Box>
          </M>
        </Box>
      </Box>
    </Box>
  );
}
