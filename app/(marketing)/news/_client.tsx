"use client";

import { Box, css } from '@hanzo/ui'
import { M } from '@/components/motion'
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { cn } from "@/lib/utils";
import { Calendar, ExternalLink, FileText, Megaphone } from "lucide-react";

const announcements = [
  {
    date: "February 2026",
    year: "2026",
    items: [
      {
        day: "26",
        title: "Earn While You Sleep: 20% Idle Compute Revenue Sharing",
        description: "Every Zoo account now earns up to 20% of revenue when your allocated compute and LLM capacity is resold while idle. All plans eligible — Developer, Pro, Team, and Enterprise. Payouts via account credit or direct deposit.",
        type: "Product Launch",
        link: "/pricing",
      },
      {
        day: "26",
        title: "Zoo Open Source Fund: 20% of Revenue to OSS Developers",
        description: "We're committing 20% of all platform revenue directly to the open source developers whose work powers our infrastructure. Distributed proportionally based on actual OSS dependency usage across the platform.",
        type: "Company News",
        link: "/pricing",
      },
      {
        day: "26",
        title: "Transparent Pricing: No Hidden Fees, No Egress Charges",
        description: "Zoo adopts a transparent pricing policy: no hidden fees, no egress charges, no surprise bills. Every invoice includes a clear cost breakdown. Combined with idle revenue sharing and OSS funding, this is pricing that works for everyone.",
        type: "Company News",
        link: "/pricing",
      },
      {
        day: "25",
        title: "390+ AI Models Now Available via Zoo LLM Gateway",
        description: "The Zoo LLM Gateway now serves 47 Zen models and 344+ third-party models from 58 providers through a single API. Live pricing at api.zoo.network, synced every 6 hours.",
        type: "Product Launch",
        link: "/models",
      },
      {
        day: "24",
        title: "Canonical Pricing API Launches at api.zoo.network",
        description: "All Zoo pricing — subscriptions, model costs, cloud plans, blockchain RPC, and transparent pricing policy — now served from a single canonical API. No more hardcoded prices across surfaces.",
        type: "Product Launch",
        link: "/pricing",
      },
    ],
  },
  {
    date: "January 2025",
    year: "2025",
    items: [
      {
        day: "15",
        title: "Zoo Launches ZEN Platform",
        description: "Zoo Industries announces the general availability of ZEN, its next-generation AI orchestration platform designed for enterprise deployments at scale.",
        type: "Product Launch",
        link: "/models",
      },
      {
        day: "05",
        title: "130+ Research Papers Published",
        description: "Zoo research teams publish comprehensive papers across frontier AI, post-quantum cryptography, and consensus protocols.",
        type: "Research",
        link: "/research",
      },
    ],
  },
  {
    date: "December 2024",
    year: "2024",
    items: [
      {
        day: "20",
        title: "KOAN 2.0 Released",
        description: "Major update to our enterprise knowledge management platform brings advanced RAG capabilities and improved performance.",
        type: "Product Update",
        link: "/products/koan",
      },
      {
        day: "15",
        title: "2,500+ Open Source Projects",
        description: "Zoo's open source ecosystem reaches 2,500+ repositories across AI infrastructure, blockchain, and developer tools.",
        type: "Milestone",
        link: "https://github.com/zooai",
      },
      {
        day: "08",
        title: "130+ Research Papers Published",
        description: "Research teams across Zoo Industries, Lux, Zoo Labs, and Zen LM publish comprehensive papers on frontier AI, post-quantum cryptography, and consensus protocols.",
        type: "Research",
        link: "/research",
      },
    ],
  },
  {
    date: "November 2024",
    year: "2024",
    items: [
      {
        day: "28",
        title: "Zoo Dev 2.0 Announced",
        description: "Next-generation AI coding assistant with advanced multimodal capabilities and improved context handling.",
        type: "Product Launch",
        link: "/products/hanzo-dev",
      },
      {
        day: "15",
        title: "260+ MCP Tools Released",
        description: "Zoo MCP server ships with 260+ tools for AI models, covering file operations, search, browser automation, and more.",
        type: "Product Launch",
        link: "https://github.com/zooai/mcp",
      },
      {
        day: "01",
        title: "Los Angeles HQ Expansion",
        description: "Zoo expands headquarters to accommodate growing team and new research facilities in LA.",
        type: "Company News",
        link: "/careers",
      },
    ],
  },
];

const pressReleases = [
  {
    title: "Zoo Launches Idle Compute Revenue Sharing — All Accounts Earn Up to 20%",
    date: "February 26, 2026",
    summary: "Every Zoo account now earns up to 20% of revenue generated when their allocated compute and LLM capacity is resold during idle periods. Available across all plans from Developer (free) to Enterprise.",
  },
  {
    title: "Zoo Open Source Fund: 20% of Platform Revenue to OSS Developers",
    date: "February 26, 2026",
    summary: "Zoo commits 20% of all platform revenue to the open source developers and projects that power its infrastructure, distributed proportionally to actual dependency usage.",
  },
  {
    title: "Zoo Adopts Transparent Pricing Policy: No Hidden Fees, No Egress Charges",
    date: "February 26, 2026",
    summary: "New transparent pricing policy guarantees no hidden fees, no egress charges, and no surprise bills. Every invoice includes a clear cost breakdown alongside idle revenue sharing and OSS fund contributions.",
  },
  {
    title: "Canonical Pricing API and 390+ AI Models Now Live",
    date: "February 25, 2026",
    summary: "api.zoo.network launches as the single source of truth for all Zoo pricing data. The LLM Gateway now serves 47 Zen models and 344+ third-party models from 58 providers.",
  },
  {
    title: "Zoo Industries Announces ZEN Platform General Availability",
    date: "January 15, 2025",
    summary: "Enterprise AI orchestration platform now available to all customers with enhanced security features.",
  },
  {
    title: "130+ Research Papers Published Across AI, Cryptography, and Consensus",
    date: "January 5, 2025",
    summary: "Zoo and partner organizations publish 130+ research papers spanning frontier AI, post-quantum cryptography, and consensus protocols.",
  },
  {
    title: "KOAN 2.0: Redefining Enterprise Knowledge Management",
    date: "December 20, 2024",
    summary: "Major platform update brings 3x faster search, improved accuracy, and new collaboration features.",
  },
];

const typeColors: Record<string, string> = {
  "Product Launch": "bg-primary",
  "Funding": "bg-foreground/20",
  "Partnership": "bg-foreground/20",
  "Product Update": "bg-foreground/20",
  "Milestone": "bg-foreground/30",
  "Research": "bg-foreground/40",
  "Company News": "bg-foreground/50",
};

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
              className="text-center mb-16"
            >
              <Box className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/10 border border-border rounded-full mb-6">
                <Megaphone style={css('w-4 h-4 text-foreground')} />
                <Box tag="span" className="text-foreground text-sm font-medium">News & Announcements</Box>
              </Box>
              <Box tag="h1" className="text-4xl md:text-6xl font-bold mb-6">
                Latest from Zoo
              </Box>
              <Box tag="p" className={cn("text-xl max-w-2xl mx-auto", "text-muted-foreground")}>
                Stay up to date with product launches, company milestones, partnerships, and research breakthroughs.
              </Box>
            </M>
          </Box>
        </Box>

        {/* Timeline Section */}
        <Box tag="section" className={cn("py-24 px-4", "bg-foreground/5")}>
          <Box className="max-w-7xl mx-auto">
            <M tag="h2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12"
            >
              Timeline
            </M>

            <Box className="relative">
              {/* Timeline line */}
              <Box className={cn("absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5", "bg-foreground/10")} />

              {announcements.map((month, monthIndex) => (
                <Box key={month.date} className="mb-16">
                  <M
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: monthIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex items-center mb-8"
                  >
                    <Box className={cn("absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4", "border-background")} />
                    <Box className="ml-8 md:ml-0 md:absolute md:left-1/2 md:transform md:translate-x-6">
                      <Box tag="span" className="text-xl font-bold">{month.date}</Box>
                    </Box>
                  </M>

                  <Box className="space-y-6 ml-8 md:ml-0">
                    {month.items.map((item, itemIndex) => (
                      <M
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={cn(
                          "md:w-[calc(50%-2rem)]",
                          itemIndex % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                        )}
                      >
                        <Box className={cn(
                          "border rounded-xl p-6 transition-colors group hover:border-border",
                          "bg-foreground/5 border-border"
                        )}>
                          <Box className="flex items-center gap-3 mb-3">
                            <Box tag="span" className={cn("px-2 py-1 text-xs font-medium text-foreground rounded", typeColors[item.type] || "bg-background/50")}>
                              {item.type}
                            </Box>
                            <Box tag="span" className={cn("text-sm flex items-center gap-1", "text-muted-foreground")}>
                              <Calendar style={css('w-3 h-3')} />
                              {month.date.split(" ")[0]} {item.day}
                            </Box>
                          </Box>
                          <Box tag="h3" className="text-xl font-bold mb-2 group-hover:text-foreground transition-colors">
                            {item.title}
                          </Box>
                          <Box tag="p" className={cn("text-sm mb-4", "text-muted-foreground")}>{item.description}</Box>
                          <Box tag="a"
                            href={item.link}
                            className="text-foreground text-sm font-medium flex items-center gap-1 hover:underline"
                          >
                            Read more
                            <ExternalLink style={css('w-3 h-3')} />
                          </Box>
                        </Box>
                      </M>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Press Releases Section */}
        <Box tag="section" className="py-24 px-4">
          <Box className="max-w-7xl mx-auto">
            <M
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-12"
            >
              <Box className="flex items-center gap-3">
                <FileText style={css('w-6 h-6 text-foreground')} />
                <Box tag="h2" className="text-3xl font-bold">Press Releases</Box>
              </Box>
              <Button variant="outline" className={cn("border-border text-foreground hover:bg-accent")}>
                View All
              </Button>
            </M>

            <Box className="grid gap-6">
              {pressReleases.map((release, index) => (
                <M
                  key={release.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "border rounded-xl p-6 transition-colors group cursor-pointer hover:border-border",
                    "bg-foreground/5 border-border"
                  )}
                >
                  <Box className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <Box className="flex-1">
                      <Box tag="span" className={cn("text-sm", "text-muted-foreground")}>{release.date}</Box>
                      <Box tag="h3" className="text-xl font-bold mt-1 mb-2 group-hover:text-foreground transition-colors">
                        {release.title}
                      </Box>
                      <Box tag="p" className={cn("text-sm", "text-muted-foreground")}>{release.summary}</Box>
                    </Box>
                    <Button
                      variant="ghost"
                      className="text-foreground hover:text-foreground hover:bg-accent whitespace-nowrap"
                    >
                      Read Release
                      <ExternalLink style={css('w-4 h-4 ml-2')} />
                    </Button>
                  </Box>
                </M>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Media Contact */}
        <Box tag="section" className={cn("py-24 px-4", "bg-foreground/5")}>
          <Box className="max-w-7xl mx-auto">
            <M
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Box tag="h2" className="text-4xl md:text-5xl font-bold mb-6">
                Media Inquiries
              </Box>
              <Box tag="p" className={cn("mb-8 max-w-xl mx-auto", "text-muted-foreground")}>
                For press inquiries, interviews, or additional information, please contact our media relations team.
              </Box>
              <Box className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:press@zoo.ngo">
                  <Button className="bg-primary hover:bg-primary/90 text-foreground">
                    Contact Press Team
                  </Button>
                </a>
                <Button variant="outline" className={cn("border-border text-foreground hover:bg-accent")}>
                  Download Press Kit
                </Button>
              </Box>
            </M>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
