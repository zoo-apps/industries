"use client";

import { Box, css, sx } from '@hanzo/ui'
import { useEffect } from "react";
import { Button } from "@hanzo/ui";
import { ExternalLink } from "lucide-react";

export default function PageClient() {
  useEffect(() => {
    // Auto-redirect after 2 seconds
    const timer = setTimeout(() => {
      window.location.href = "https://zoo.id";
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box className="min-h-screen flex items-center justify-center px-4 bg-background">
      <Box className="max-w-md w-full space-y-8 text-center">
        <div>
          <Box tag="h2" className="mt-6 text-3xl font-extrabold text-foreground">
            Sign in to Zoo
          </Box>
          <Box tag="p" className="mt-4 text-muted-foreground">
            Authentication is handled securely through Zoo ID.
            You will be redirected automatically.
          </Box>
        </div>
        <div>
          <a href="https://zoo.id">
            <Button {...sx('w-full bg-primary text-primary-foreground hover:bg-primary/90')}>
              Continue to Zoo ID <ExternalLink style={css('w-4 h-4 ml-2')} />
            </Button>
          </a>
        </div>
      </Box>
    </Box>
  );
}
