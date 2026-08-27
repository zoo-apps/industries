"use client";

import { Box, css } from '@hanzo/ui'
import { M } from '@/components/motion'
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@hanzo/ui";
import { Code, Database, Cloud, Shield, Lightbulb, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PageClient() {
  const services = [
    {
      icon: Code,
      title: "Custom AI Development",
      description: "End-to-end AI solution development tailored to your specific business needs",
      offerings: [
        "Model architecture design",
        "Training pipeline setup",
        "Fine-tuning and optimization",
        "API development and integration"
      ]
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Build robust data infrastructure to power your AI and analytics initiatives",
      offerings: [
        "Data pipeline architecture",
        "ETL/ELT development",
        "Real-time streaming",
        "Data warehouse design"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automation for modern applications",
      offerings: [
        "Multi-cloud architecture",
        "CI/CD pipeline setup",
        "Infrastructure as Code",
        "Kubernetes orchestration"
      ]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Comprehensive security solutions to protect your data and systems",
      offerings: [
        "Security assessments",
        "Compliance consulting",
        "Penetration testing",
        "Security architecture design"
      ]
    },
    {
      icon: Lightbulb,
      title: "AI Strategy Consulting",
      description: "Strategic guidance to maximize the value of AI in your organization",
      offerings: [
        "AI readiness assessment",
        "Use case identification",
        "ROI analysis",
        "Implementation roadmap"
      ]
    },
    {
      icon: Users,
      title: "Training & Support",
      description: "Empower your team with the knowledge and skills to succeed with AI",
      offerings: [
        "Technical workshops",
        "Custom training programs",
        "24/7 support",
        "Documentation & knowledge transfer"
      ]
    }
  ];

  const engagementModels = [
    {
      title: "Project-Based",
      description: "Fixed-scope engagements with clear deliverables and timelines",
      ideal: "Organizations with well-defined projects and specific outcomes"
    },
    {
      title: "Dedicated Teams",
      description: "Embedded experts working as an extension of your team",
      ideal: "Companies needing ongoing development and support"
    },
    {
      title: "Consulting & Advisory",
      description: "Strategic guidance and technical expertise on demand",
      ideal: "Organizations exploring AI opportunities and best practices"
    }
  ];

  return (
    <Box className={cn("min-h-screen transition-colors duration-300", "bg-background text-foreground")}>
      {/* Hero Section */}
      <Box tag="section" className={cn("pt-24 pb-16 bg-gradient-to-b", "from-white/5 to-transparent")}>
        <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <M
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Box tag="h1" className="text-5xl font-bold mb-6">Professional Services</Box>
            <Box tag="p" className={cn("text-xl max-w-3xl mx-auto mb-8", "text-muted-foreground")}>
              From strategy to implementation, we provide end-to-end services to deploy
              AI and modern infrastructure in production
            </Box>
            <Box className="flex justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className={cn("bg-primary text-primary-foreground hover:bg-primary/90")}>
                  Get Started
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline">
                  View Case Studies
                </Button>
              </Link>
            </Box>
          </M>
        </Box>
      </Box>

      {/* Services Grid */}
      <Box tag="section" className="py-20">
        <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <M
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Box tag="h2" className="text-4xl font-bold mb-4">
              Comprehensive Service Offerings
            </Box>
            <Box tag="p" className={cn("text-xl max-w-3xl mx-auto", "text-muted-foreground")}>
              Expert services across the entire technology stack, delivered by our team
              of specialists
            </Box>
          </M>

          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <M
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn("p-8 rounded-lg border hover:shadow-lg transition-shadow", "bg-foreground/5 border-border")}
                >
                  <Box className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-6", "bg-primary")}>
                    <Icon style={css(cn("w-6 h-6", "text-primary-foreground"))} />
                  </Box>
                  <Box tag="h3" className="text-xl font-semibold mb-3">{service.title}</Box>
                  <Box tag="p" className={cn("mb-6", "text-muted-foreground")}>{service.description}</Box>
                  <Box tag="ul" className="space-y-2">
                    {service.offerings.map((offering) => (
                      <Box tag="li" key={offering} className={cn("flex items-start text-sm", "text-muted-foreground")}>
                        <Box tag="span" className="mr-2">*</Box>
                        {offering}
                      </Box>
                    ))}
                  </Box>
                </M>
              );
            })}
          </Box>
        </Box>
      </Box>

      {/* Engagement Models */}
      <Box tag="section" className={cn("py-20", "bg-foreground/5")}>
        <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <M
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Box tag="h2" className="text-4xl font-bold mb-4">Flexible Engagement Models</Box>
            <Box tag="p" className={cn("text-xl max-w-3xl mx-auto", "text-muted-foreground")}>
              Choose the engagement model that best fits your needs and budget
            </Box>
          </M>

          <Box className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <M
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn("p-8 rounded-lg shadow-sm", "bg-foreground/5")}
              >
                <Box tag="h3" className="text-2xl font-semibold mb-4">{model.title}</Box>
                <Box tag="p" className={cn("mb-4", "text-muted-foreground")}>{model.description}</Box>
                <Box tag="p" className={cn("text-sm", "text-muted-foreground")}>
                  <strong>Ideal for:</strong> {model.ideal}
                </Box>
              </M>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Process Section */}
      <Box tag="section" className={cn("py-20", "bg-foreground/5")}>
        <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <M
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Box tag="h2" className={cn("text-4xl font-bold mb-4", "text-foreground")}>Our Process</Box>
            <Box tag="p" className={cn("text-xl max-w-3xl mx-auto", "text-muted-foreground")}>
              A proven methodology that ensures successful outcomes
            </Box>
          </M>

          <Box className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understand your goals and challenges" },
              { step: "02", title: "Strategy", desc: "Design the optimal solution approach" },
              { step: "03", title: "Implementation", desc: "Build and deploy with excellence" },
              { step: "04", title: "Support", desc: "Ensure long-term success" }
            ].map((phase, index) => (
              <M
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <Box className={cn("text-5xl font-bold mb-4", "text-foreground/30")}>{phase.step}</Box>
                <Box tag="h3" className={cn("text-xl font-semibold mb-2", "text-foreground")}>{phase.title}</Box>
                <Box tag="p" className={cn("text-muted-foreground")}>{phase.desc}</Box>
              </M>
            ))}
          </Box>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box tag="section" className="py-20">
        <Box className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <M
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box tag="h2" className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </Box>
            <Box tag="p" className={cn("text-xl mb-8", "text-muted-foreground")}>
              Let's discuss how our services can help you achieve your goals
            </Box>
            <Button size="lg" className={cn("bg-primary text-primary-foreground hover:bg-primary/90")}>
              Schedule a Consultation
            </Button>
          </M>
        </Box>
      </Box>
    </Box>
  );
}
