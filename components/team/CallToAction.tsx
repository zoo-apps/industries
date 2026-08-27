"use client";

import { Box } from '@hanzo/ui'
import Link from "next/link";
import { Button } from "@hanzo/ui";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CallToAction() {
  return (
    <Box className="mt-16">
      {/* Stats bar */}
      <Box className={cn(
        "grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-8 rounded-2xl border",
        "border-border bg-foreground/5"
      )}>
        <Box className="text-center">
          <Box className={cn("text-2xl font-bold", "text-foreground")}>
            2,500+
          </Box>
          <Box className={cn("text-sm", "text-muted-foreground")}>
            OSS Projects
          </Box>
        </Box>
        <Box className="text-center">
          <Box className={cn("text-2xl font-bold", "text-foreground")}>
            130+
          </Box>
          <Box className={cn("text-sm", "text-muted-foreground")}>
            Research Papers
          </Box>
        </Box>
        <Box className="text-center">
          <Box className={cn("text-2xl font-bold", "text-foreground")}>
            100+
          </Box>
          <Box className={cn("text-sm", "text-muted-foreground")}>
            AI Model Weights
          </Box>
        </Box>
        <Box className="text-center">
          <Box className={cn("text-2xl font-bold", "text-foreground")}>
            $1B+
          </Box>
          <Box className={cn("text-sm", "text-muted-foreground")}>
            Client Revenue
          </Box>
        </Box>
      </Box>

      {/* CTA */}
      <Box className="text-center">
        <Box tag="h2" className={cn(
          "text-3xl font-bold mb-4",
          "text-foreground"
        )}>
          Build With Us
        </Box>
        <Box tag="p" className={cn(
          "mb-8 max-w-2xl mx-auto",
          "text-muted-foreground"
        )}>
          We're hiring across engineering, research, and operations. Come build the future of AI.
        </Box>
        <Box className="flex flex-wrap justify-center gap-4">
          <Link href="/careers">
            <Button
              size="lg"
              className={cn(
                "rounded-full px-8",
                "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              View Open Roles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className={cn(
                "rounded-full px-8",
                "border-border text-foreground hover:bg-accent"
              )}
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
