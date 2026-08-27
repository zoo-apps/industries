"use client";

import { Box, css } from '@hanzo/ui'
import { Shield, Lock, Key, UserCheck, Server, FileCheck } from "lucide-react";
import { Button } from "@hanzo/ui";
import { cn } from "@/lib/utils";

export default function PageClient() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Best-in-class security practices and infrastructure to protect your data and applications"
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data in transit and at rest is encrypted using industry-standard protocols"
    },
    {
      icon: Key,
      title: "Access Controls",
      description: "Fine-grained permissions and role-based access control (RBAC) for team management"
    },
    {
      icon: UserCheck,
      title: "Identity & Authentication",
      description: "Multi-factor authentication and single sign-on (SSO) support"
    },
    {
      icon: Server,
      title: "Data Protection",
      description: "Regular backups and disaster recovery protocols to ensure data safety"
    },
    {
      icon: FileCheck,
      title: "Compliance",
      description: "SOC 2 Type II certified, GDPR compliant, and ISO 27001 certified"
    }
  ];

  return (
    <Box className={cn("min-h-screen transition-colors duration-300", "bg-background text-foreground")}>
      <Box tag="main" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <Box className="max-w-7xl mx-auto">
          <Box className="text-center mb-16">
            <Box tag="h1" className="text-4xl font-bold mb-4">
              Security First, Always
            </Box>
            <Box tag="p" className={cn("text-xl max-w-2xl mx-auto", "text-muted-foreground")}>
              We prioritize the security and privacy of your data with enterprise-grade protection at every layer
            </Box>
          </Box>

          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Box
                  key={index}
                  className={cn(
                    "border rounded-lg p-6 transition-colors",
                    "bg-foreground/5 border-border hover:border-border"
                  )}
                >
                  <Box className="flex items-center space-x-4 mb-4">
                    <Box className={cn("p-2 rounded-lg", "bg-foreground/10")}>
                      <Icon style={css('h-6 w-6')} />
                    </Box>
                    <Box tag="h3" className="text-lg font-medium">
                      {feature.title}
                    </Box>
                  </Box>
                  <Box tag="p" className={cn("text-muted-foreground")}>
                    {feature.description}
                  </Box>
                </Box>
              );
            })}
          </Box>

          <Box className="mt-16 text-center space-y-8">
            <Box className={cn(
              "rounded-lg p-8",
              "bg-gradient-to-r from-white/5 to-white/10"
            )}>
              <Box tag="h2" className="text-2xl font-bold mb-4">
                SOC 2 Type II Certified
              </Box>
              <Box tag="p" className={cn("mb-6", "text-muted-foreground")}>
                Our security practices and controls have been audited and certified by independent third-party auditors
              </Box>
              <a href="/contact">
                <Button
                  variant="outline"
                  className={cn(
                    "text-foreground border-primary hover:bg-accent"
                  )}
                >
                  Request Security Documentation
                </Button>
              </a>
            </Box>

            <Box className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Box className={cn(
                "border rounded-lg p-6",
                "bg-foreground/5 border-border"
              )}>
                <Box className="text-3xl font-bold mb-2">99.99%</Box>
                <Box className={cn("text-muted-foreground")}>Uptime SLA</Box>
              </Box>
              <Box className={cn(
                "border rounded-lg p-6",
                "bg-foreground/5 border-border"
              )}>
                <Box className="text-3xl font-bold mb-2">24/7</Box>
                <Box className={cn("text-muted-foreground")}>Security Monitoring</Box>
              </Box>
              <Box className={cn(
                "border rounded-lg p-6",
                "bg-foreground/5 border-border"
              )}>
                <Box className="text-3xl font-bold mb-2">100%</Box>
                <Box className={cn("text-muted-foreground")}>Data Encryption</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
