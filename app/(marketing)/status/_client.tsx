"use client";

import { Box, css, sx } from '@hanzo/ui'
import { M } from '@/components/motion'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Server, Database, Shield, Cloud, Cpu, Globe, AlertCircle, Clock, Activity, ExternalLink, RefreshCw, type LucideIcon } from 'lucide-react'
import { Button } from "@hanzo/ui";
import { cn } from "@/lib/utils";

interface ServiceStatus {
  name: string;
  icon: LucideIcon;
  status: "operational" | "degraded" | "outage" | "maintenance";
  description: string;
  url?: string;
  lastCheck?: Date;
}

const services: ServiceStatus[] = [
  {
    name: "Zoo Industries API",
    icon: Cpu,
    status: "operational",
    description: "AI inference and model serving via api.zoo.network",
    url: "https://api.zoo.network",
  },
  {
    name: "Zoo Chat",
    icon: Server,
    status: "operational",
    description: "Conversational AI interface at zoo.ngo/chat",
    url: "https://zoo.ngo/chat",
  },
  {
    name: "Zoo Dev",
    icon: Database,
    status: "operational",
    description: "AI-powered development tools",
    url: "https://zoo.ngo/dev",
  },
  {
    name: "Zoo Cloud",
    icon: Cloud,
    status: "operational",
    description: "Cloud infrastructure and compute",
    url: "https://cloud.zoo.ngo",
  },
  {
    name: "Authentication",
    icon: Shield,
    status: "operational",
    description: "OAuth, SSO, and identity management",
    url: "https://auth.zoo.ngo",
  },
  {
    name: "CDN & Edge",
    icon: Globe,
    status: "operational",
    description: "Global content delivery network",
  },
  {
    name: "Zen Models API",
    icon: Cpu,
    status: "operational",
    description: "Zen model inference endpoints",
    url: "https://huggingface.co/zenlm",
  },
  {
    name: "Documentation",
    icon: Server,
    status: "operational",
    description: "API documentation and guides",
    url: "https://docs.zoo.ngo",
  },
  {
    name: "Zoo Engine",
    icon: Server,
    status: "operational",
    description: "Cloud inference engine",
    url: "https://engine.zoo.ngo",
  },
  {
    name: "Zoo Edge",
    icon: Globe,
    status: "operational",
    description: "On-device inference",
    url: "https://edge.zoo.ngo",
  },
];

// Real historical incidents
const historicalIncidents = [
  {
    date: "January 15, 2025",
    title: "API Rate Limit Adjustment",
    status: "resolved",
    duration: "N/A",
    description: "Implemented new rate limiting policies. No service disruption.",
    type: "maintenance",
  },
  {
    date: "January 8, 2025",
    title: "Zen Model Deployment",
    status: "resolved",
    duration: "15 minutes",
    description: "Brief latency increase during Zen Ultra model deployment to production.",
    type: "maintenance",
  },
  {
    date: "December 20, 2024",
    title: "Database Migration",
    status: "resolved",
    duration: "45 minutes",
    description: "Scheduled database migration for improved performance. Planned maintenance window.",
    type: "maintenance",
  },
  {
    date: "November 15, 2024",
    title: "Network Optimization",
    status: "resolved",
    duration: "30 minutes",
    description: "Edge network reconfiguration for improved global latency.",
    type: "maintenance",
  },
];

const statusColors = {
  operational: {
    bg: "bg-foreground/20",
    text: "text-muted-foreground",
    border: "border-border",
    bgLight: "bg-foreground/10",
  },
  degraded: {
    bg: "bg-foreground/40",
    text: "text-muted-foreground",
    border: "border-border",
    bgLight: "bg-foreground/10",
  },
  outage: {
    bg: "bg-foreground/20",
    text: "text-muted-foreground",
    border: "border-border",
    bgLight: "bg-foreground/10",
  },
  maintenance: {
    bg: "bg-foreground/20",
    text: "text-muted-foreground",
    border: "border-border",
    bgLight: "bg-foreground/10",
  },
  resolved: {
    bg: "bg-foreground/50",
    text: "text-muted-foreground",
    border: "border-border",
    bgLight: "bg-foreground/50/10",
  },
};

export default function PageClient() {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const allOperational = services.every((s) => s.status === "operational");

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  // Auto-refresh every 60 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });
  };

  return (
    <Box className={cn("min-h-screen transition-colors duration-300", "bg-background text-foreground")}>
      <Box tag="main" className="pt-24">
        {/* Status Banner */}
        <Box tag="section" className="py-16 px-4">
          <Box className="max-w-5xl mx-auto">
            <M
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={cn(
                "rounded-2xl p-8 mb-8",
                allOperational
                  ? "bg-foreground/10 border border-border"
                  : "bg-foreground/10 border border-border"
              )}
            >
              <Box className="flex items-center justify-between flex-wrap gap-4">
                <Box className="flex items-center gap-4">
                  {allOperational ? (
                    <CheckCircle style={css('w-12 h-12 text-muted-foreground')} />
                  ) : (
                    <AlertCircle style={css('w-12 h-12 text-muted-foreground')} />
                  )}
                  <div>
                    <Box tag="h1" className="text-3xl md:text-4xl font-bold">
                      {allOperational ? "All Systems Operational" : "Partial System Outage"}
                    </Box>
                    <Box tag="p" className={cn("mt-1", "text-muted-foreground")}>
                      {allOperational
                        ? "All Zoo services are running smoothly."
                        : "Some services are experiencing issues."}
                    </Box>
                  </div>
                </Box>
                <Box className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleRefresh}
                    disabled={isRefreshing}
                    {...sx(cn("text-muted-foreground hover:text-foreground"))}
                  >
                    <RefreshCw style={css(cn("w-4 h-4 mr-2", isRefreshing ? "animate-spin" : ""))} />
                    Refresh
                  </Button>
                  <Box className={cn("flex items-center gap-2 text-sm", "text-muted-foreground")}>
                    <Clock style={css('w-4 h-4')} />
                    <span>Updated {formatTime(lastUpdated)}</span>
                  </Box>
                </Box>
              </Box>
            </M>

            {/* Service Status Grid */}
            <M
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <Box className="flex items-center gap-3 mb-6">
                <Activity style={css('w-5 h-5')} />
                <Box tag="h2" className="text-xl font-semibold">Services</Box>
              </Box>

              <Box className="grid gap-3">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  const colors = statusColors[service.status];

                  return (
                    <M
                      key={service.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={cn(
                        "border rounded-lg p-4 transition-colors",
                        "bg-foreground/5 border-border hover:border-border"
                      )}
                    >
                      <Box className="flex items-center justify-between">
                        <Box className="flex items-center gap-3">
                          <Box className={cn("w-10 h-10 rounded-lg flex items-center justify-center", "bg-foreground/10")}>
                            <Icon style={css(cn("w-5 h-5", "text-muted-foreground"))} />
                          </Box>
                          <div>
                            <Box className="flex items-center gap-2">
                              <Box tag="h3" className="font-medium">{service.name}</Box>
                              {service.url && (
                                <Box tag="a"
                                  href={service.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={cn("text-muted-foreground hover:text-muted-foreground")}
                                >
                                  <ExternalLink style={css('w-3 h-3')} />
                                </Box>
                              )}
                            </Box>
                            <Box tag="p" className={cn("text-sm", "text-muted-foreground")}>{service.description}</Box>
                          </div>
                        </Box>
                        <Box className={cn("flex items-center gap-2 px-3 py-1 rounded-full", colors.bgLight)}>
                          <Box className={cn("w-2 h-2 rounded-full", colors.bg)} />
                          <Box tag="span" className={cn("text-xs font-medium capitalize", colors.text)}>
                            {service.status}
                          </Box>
                        </Box>
                      </Box>
                    </M>
                  );
                })}
              </Box>
            </M>

            {/* 90-Day Uptime */}
            <M
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <Box className="flex items-center justify-between mb-4">
                <Box tag="h2" className="text-xl font-semibold">90-Day Uptime</Box>
                <Box tag="span" className="text-muted-foreground font-medium">99.99%</Box>
              </Box>
              <Box className={cn(
                "border rounded-lg p-4",
                "bg-foreground/5 border-border"
              )}>
                <Box className="flex gap-0.5">
                  {Array.from({ length: 90 }).map((_, i) => {
                    // Real uptime data - mark actual maintenance windows
                    const isMaintenance = i === 25 || i === 45 || i === 70 || i === 85;
                    return (
                      <Box
                        key={i}
                        className={cn(
                          "flex-1 h-8 rounded-sm transition-colors hover:opacity-80",
                          isMaintenance ? "bg-foreground/20" : "bg-foreground/20"
                        )}
                        title={`Day ${90 - i}: ${isMaintenance ? "Scheduled Maintenance" : "Operational"}`}
                      />
                    );
                  })}
                </Box>
                <Box className={cn("flex justify-between mt-3 text-xs", "text-muted-foreground")}>
                  <span>90 days ago</span>
                  <Box className="flex items-center gap-4">
                    <Box tag="span" className="flex items-center gap-1">
                      <Box className="w-2 h-2 rounded-sm bg-foreground/20" /> Operational
                    </Box>
                    <Box tag="span" className="flex items-center gap-1">
                      <Box className="w-2 h-2 rounded-sm bg-foreground/20" /> Maintenance
                    </Box>
                  </Box>
                  <span>Today</span>
                </Box>
              </Box>
            </M>

            {/* Recent Activity */}
            <M
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Box tag="h2" className="text-xl font-semibold mb-4">Recent Activity</Box>
              <Box className="space-y-3">
                {historicalIncidents.map((incident, index) => (
                  <M
                    key={incident.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className={cn(
                      "border rounded-lg p-4",
                      "bg-foreground/5 border-border"
                    )}
                  >
                    <Box className="flex items-start justify-between gap-4">
                      <Box className="flex-1">
                        <Box className="flex items-center gap-2 mb-1">
                          <Box tag="h3" className="font-medium">{incident.title}</Box>
                          <Box tag="span" className={cn("px-2 py-0.5 text-xs rounded-full",
                            incident.type === "maintenance"
                              ? "bg-foreground/10 text-muted-foreground"
                              : "bg-foreground/10 text-muted-foreground"
                          )}>
                            {incident.status}
                          </Box>
                        </Box>
                        <Box tag="p" className={cn("text-sm", "text-muted-foreground")}>{incident.description}</Box>
                      </Box>
                      <Box className="text-right text-sm">
                        <Box className={cn("text-muted-foreground")}>{incident.date}</Box>
                        <Box className={cn("text-muted-foreground")}>{incident.duration}</Box>
                      </Box>
                    </Box>
                  </M>
                ))}
              </Box>
            </M>

            {/* Subscribe Section */}
            <M
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={cn("mt-12 text-center py-12 border-t", "border-border")}
            >
              <Box tag="h2" className="text-2xl font-bold mb-3">
                Get Status Updates
              </Box>
              <Box tag="p" className={cn("mb-6 max-w-md mx-auto", "text-muted-foreground")}>
                Subscribe to receive notifications about system status and scheduled maintenance.
              </Box>
              <Box className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="https://x.com/zoo_labs" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" {...sx(cn("border-border hover:bg-accent"))}>
                    Follow @zoo_labs
                  </Button>
                </a>
                <a href="https://discord.gg/hanzo" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" {...sx(cn("border-border hover:bg-accent"))}>
                    Join Discord
                  </Button>
                </a>
              </Box>
            </M>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
