"use client";

import { Box, sx } from '@hanzo/ui'
import { M } from '@/components/motion'
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { cn } from "@/lib/utils";

export default function PageClient() {
  const router = useRouter();
  return (
    <Box className={cn("min-h-screen transition-colors duration-300", "bg-background text-foreground")}>
      <Box tag="main" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <Box className="max-w-4xl mx-auto text-center">
          <M
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box tag="h1" className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8">
              Coming Soon
            </Box>
            <Box tag="p" className={cn("text-xl sm:text-2xl mb-12", "text-muted-foreground")}>
              We're working on something amazing. This page will be available shortly.
            </Box>
            <Box className="space-x-4">
              <Button
                size="lg"
                {...sx(cn("bg-primary text-primary-foreground hover:bg-primary/90"))}
                onClick={() => router.push("/")}
              >
                Back to Home
              </Button>
              <Button
                size="lg"
                variant="outline"
                {...sx(cn("border-primary text-foreground hover:bg-primary hover:text-primary-foreground"))}
                onClick={() => router.push("/contact")}
              >
                Contact Us
              </Button>
            </Box>
          </M>
        </Box>
      </Box>
    </Box>
  );
}
