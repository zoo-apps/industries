"use client";

import { Box, css, sx } from '@hanzo/ui'
import { M } from '@/components/motion'
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { Input } from "@hanzo/ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@hanzo/ui';
import {
  Search,
  Book,
  Code2,
  MessageCircle,
  Mail,
  FileText,
  Rocket,
  Shield,
  Zap,
  ExternalLink,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I get started with Zoo Industries?",
        a: "Getting started is easy. Sign up for a free account at zoo.ngo, obtain your API key from the dashboard, and follow our quickstart guide. You can make your first API call within minutes.",
      },
      {
        q: "What programming languages are supported?",
        a: "We provide official SDKs for Python, JavaScript/TypeScript, Go, Ruby, and Java. Our REST API can be accessed from any language that supports HTTP requests.",
      },
      {
        q: "Is there a free tier available?",
        a: "Yes! We offer a free tier with $5 in credits to help you explore our platform. This includes access to all models and features with some rate limiting.",
      },
    ],
  },
  {
    category: "Billing & Pricing",
    questions: [
      {
        q: "How does pricing work?",
        a: "We use a pay-as-you-go model based on token usage. Different models have different pricing tiers. Enterprise customers can contact us for custom volume pricing and committed use discounts.",
      },
      {
        q: "Can I set spending limits?",
        a: "Absolutely. You can configure hard and soft spending limits in your dashboard. We'll notify you when you approach your limits and can automatically pause usage if needed.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards, ACH transfers for US customers, and wire transfers for enterprise accounts. Invoicing is available for qualified enterprise customers.",
      },
    ],
  },
  {
    category: "Security & Compliance",
    questions: [
      {
        q: "Is my data secure?",
        a: "Security is our top priority. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We maintain SOC 2 Type II certification and undergo regular third-party security audits.",
      },
      {
        q: "Do you train on my data?",
        a: "No. We never use your API data to train our models. Your data is processed only to fulfill your requests and is automatically deleted after processing unless you explicitly enable data retention.",
      },
      {
        q: "What compliance certifications do you have?",
        a: "We maintain SOC 2 Type II, ISO 27001, HIPAA (with BAA), and GDPR compliance. Additional certifications including FedRAMP are in progress for government customers.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        q: "What are the rate limits?",
        a: "Rate limits vary by plan and model. Free tier has 60 requests per minute, while paid plans offer higher limits. Enterprise customers can request custom rate limits based on their needs.",
      },
      {
        q: "How do I handle errors?",
        a: "Our API uses standard HTTP status codes. Implement exponential backoff for 429 (rate limit) and 5xx errors. Check our error handling guide for detailed best practices and code examples.",
      },
      {
        q: "Can I fine-tune models?",
        a: "Yes, enterprise customers can fine-tune base models on their own data. Contact our sales team to learn more about fine-tuning capabilities, pricing, and requirements.",
      },
    ],
  },
];

const documentationLinks = [
  {
    title: "API Reference",
    description: "Complete API documentation with examples",
    icon: Code2,
    href: "https://docs.zoo.ngo/api",
  },
  {
    title: "Quickstart Guide",
    description: "Get up and running in 5 minutes",
    icon: Rocket,
    href: "https://docs.zoo.ngo/quickstart",
  },
  {
    title: "SDK Documentation",
    description: "Language-specific SDK guides",
    icon: Book,
    href: "https://docs.zoo.ngo/sdks",
  },
  {
    title: "Security Overview",
    description: "Security practices and compliance",
    icon: Shield,
    href: "https://docs.zoo.ngo/security",
  },
  {
    title: "Best Practices",
    description: "Optimization and usage patterns",
    icon: Zap,
    href: "https://docs.zoo.ngo/best-practices",
  },
  {
    title: "Changelog",
    description: "Latest updates and releases",
    icon: FileText,
    href: "https://docs.zoo.ngo/changelog",
  },
];

export default function PageClient() {
  return (
    <Box className={cn("min-h-screen transition-colors duration-300", "bg-background text-foreground")}>
      <Box tag="main" className="pt-24">
        {/* Hero Section */}
        <Box tag="section" className="py-24 px-4">
          <Box className="max-w-7xl mx-auto">
            <M
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <Box className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/10 border border-border rounded-full mb-6">
                <HelpCircle style={css('w-4 h-4 text-foreground')} />
                <Box tag="span" className="text-foreground text-sm font-medium">Help Center</Box>
              </Box>
              <Box tag="h1" className="text-4xl md:text-6xl font-bold mb-6">
                How can we help?
              </Box>
              <Box tag="p" className={cn("text-xl max-w-2xl mx-auto mb-8", "text-muted-foreground")}>
                Find answers to common questions, explore our documentation, or get in touch with our support team.
              </Box>

              {/* Search */}
              <Box className="max-w-xl mx-auto relative">
                <Search style={css(cn("absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5", "text-muted-foreground"))} />
                <Input
                  type="text"
                  placeholder="Search for help articles..."
                  {...sx(cn(
                    "w-full pl-12 pr-4 py-6 rounded-xl text-lg",
                    "bg-foreground/5 border-border text-foreground placeholder:text-muted-foreground"
                  ))}
                />
              </Box>
            </M>
          </Box>
        </Box>

        {/* Documentation Links */}
        <Box tag="section" className={cn("py-24 px-4", "bg-foreground/[0.03]")}>
          <Box className="max-w-7xl mx-auto">
            <M
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Box tag="h2" className="text-3xl font-bold mb-4">Documentation</Box>
              <Box tag="p" className={cn("text-muted-foreground")}>Explore our comprehensive documentation and guides</Box>
            </M>

            <Box className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documentationLinks.map((doc, index) => {
                const Icon = doc.icon;
                return (
                  <M tag="a"
                    key={doc.title}
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={cn(
                      "border rounded-xl p-6 hover:border-border transition-colors group",
                      "bg-foreground/5 border-border"
                    )}
                  >
                    <Box className="flex items-start justify-between mb-4">
                      <Box className="w-12 h-12 bg-foreground/10 rounded-lg flex items-center justify-center">
                        <Icon style={css('w-6 h-6 text-foreground')} />
                      </Box>
                      <Box tag="span" className={cn('grid', cn("w-4 h-4 group-hover:text-foreground transition-colors", "text-foreground/20"))}>
                        <ExternalLink style={css('w-full h-full')} />
                      </Box>
                    </Box>
                    <Box tag="h3" className="text-xl font-semibold mb-2 group-hover:text-foreground transition-colors">
                      {doc.title}
                    </Box>
                    <Box tag="p" className={cn("text-sm", "text-muted-foreground")}>{doc.description}</Box>
                  </M>
                );
              })}
            </Box>
          </Box>
        </Box>

        {/* FAQ Section */}
        <Box tag="section" className="py-24 px-4">
          <Box className="max-w-7xl mx-auto">
            <M
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Box tag="h2" className="text-3xl font-bold mb-4">Frequently Asked Questions</Box>
              <Box tag="p" className={cn("text-muted-foreground")}>Quick answers to common questions</Box>
            </M>

            <Box className="grid lg:grid-cols-2 gap-8">
              {faqs.map((category, categoryIndex) => (
                <M
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "border rounded-xl p-6",
                    "bg-foreground/5 border-border"
                  )}
                >
                  <Box tag="h3" className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Box tag="span" className="w-2 h-2 bg-primary rounded-full" />
                    {category.category}
                  </Box>
                  <Accordion type="single" collapsible {...sx('space-y-2')}>
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        {...sx(cn("border-border"))}
                      >
                        <AccordionTrigger {...sx('text-left hover:text-foreground hover:no-underline py-3')}>
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent {...sx(cn("pb-4", "text-muted-foreground"))}>
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </M>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Contact Support Section */}
        <Box tag="section" className={cn("py-24 px-4", "bg-foreground/[0.03]")}>
          <Box className="max-w-7xl mx-auto">
            <M
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Box tag="h2" className="text-3xl font-bold mb-4">Need More Help?</Box>
              <Box tag="p" className={cn("text-muted-foreground")}>Our support team is here to assist you</Box>
            </M>

            <Box className="grid md:grid-cols-3 gap-6">
              <M
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "border rounded-xl p-8 text-center hover:border-border transition-colors",
                  "bg-foreground/5 border-border"
                )}
              >
                <Box className="w-16 h-16 bg-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle style={css('w-8 h-8 text-foreground')} />
                </Box>
                <Box tag="h3" className="text-xl font-semibold mb-3">Live Chat</Box>
                <Box tag="p" className={cn("mb-6", "text-muted-foreground")}>
                  Chat with our support team in real-time for immediate assistance.
                </Box>
                <a href="https://zoo.bot" target="_blank" rel="noopener noreferrer">
                  <Button {...sx('bg-primary hover:bg-primary/90 text-foreground w-full')}>
                    Start Chat
                  </Button>
                </a>
              </M>

              <M
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className={cn(
                  "border rounded-xl p-8 text-center hover:border-border transition-colors",
                  "bg-foreground/5 border-border"
                )}
              >
                <Box className="w-16 h-16 bg-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail style={css('w-8 h-8 text-foreground')} />
                </Box>
                <Box tag="h3" className="text-xl font-semibold mb-3">Email Support</Box>
                <Box tag="p" className={cn("mb-6", "text-muted-foreground")}>
                  Send us a detailed message and we'll respond within 24 hours.
                </Box>
                <a href="mailto:support@zoo.ngo">
                  <Button variant="outline" {...sx(cn(
                    "w-full",
                    "border-border text-foreground hover:bg-accent"
                  ))}>
                    support@zoo.ngo
                  </Button>
                </a>
              </M>

              <M
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className={cn(
                  "border rounded-xl p-8 text-center hover:border-border transition-colors",
                  "bg-foreground/5 border-border"
                )}
              >
                <Box className="w-16 h-16 bg-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Book style={css('w-8 h-8 text-foreground')} />
                </Box>
                <Box tag="h3" className="text-xl font-semibold mb-3">Community</Box>
                <Box tag="p" className={cn("mb-6", "text-muted-foreground")}>
                  Join our Discord community to connect with other developers.
                </Box>
                <a href="https://discord.gg/hanzo" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" {...sx(cn(
                    "w-full",
                    "border-border text-foreground hover:bg-accent"
                  ))}>
                    Join Discord
                  </Button>
                </a>
              </M>
            </Box>
          </Box>
        </Box>

        {/* Enterprise Support */}
        <Box tag="section" className="py-24 px-4">
          <Box className="max-w-7xl mx-auto">
            <M
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-white/10 to-transparent border border-border rounded-2xl p-8 md:p-12"
            >
              <Box className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Box tag="h2" className="text-3xl md:text-4xl font-bold mb-4">
                    Enterprise Support
                  </Box>
                  <Box tag="p" className={cn("mb-6", "text-muted-foreground")}>
                    Get dedicated support, custom SLAs, and direct access to our engineering team with an enterprise plan.
                  </Box>
                  <Box tag="ul" className={cn("space-y-3 mb-8", "text-muted-foreground")}>
                    <Box tag="li" className="flex items-center gap-2">
                      <Box tag="span" className="w-1.5 h-1.5 bg-primary rounded-full" />
                      24/7 priority support
                    </Box>
                    <Box tag="li" className="flex items-center gap-2">
                      <Box tag="span" className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Dedicated success manager
                    </Box>
                    <Box tag="li" className="flex items-center gap-2">
                      <Box tag="span" className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Custom SLA agreements
                    </Box>
                    <Box tag="li" className="flex items-center gap-2">
                      <Box tag="span" className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Direct engineering support
                    </Box>
                  </Box>
                  <Link href="/contact">
                    <Button {...sx('bg-primary hover:bg-primary/90 text-foreground')}>
                      Contact Sales
                    </Button>
                  </Link>
                </div>
                <Box className="hidden md:flex justify-center">
                  <Box className="w-48 h-48 bg-foreground/10 rounded-full flex items-center justify-center">
                    <Shield style={css('w-24 h-24 text-foreground')} />
                  </Box>
                </Box>
              </Box>
            </M>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
