"use client";

import { Box } from '@hanzo/ui'
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HEXAGRAMS = ["䷀", "䷸", "䷹", "䷺", "䷻", "䷼", "䷽", "䷾", "䷿", "䷡"];

// All 64 I-Ching hexagrams
const ALL_64 = Array.from({ length: 64 }, (_, i) =>
  String.fromCodePoint(0x4dc0 + i)
);

const activeSet = new Set([0, 33, 56, 57, 58, 59, 60, 61, 62, 63]);

export default function PhilosophyBridge() {
  return (
    <Box tag="section" className="py-24 px-4 border-t border-border/30">
      <Box className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* All 64 hexagram grid */}
          <Box className="grid grid-cols-8 gap-1 max-w-xs mx-auto mb-10">
            {ALL_64.map((g, i) => (
              <Box
                key={i}
                className={`flex items-center justify-center w-9 h-9 text-xl rounded transition-colors ${
                  activeSet.has(i)
                    ? "text-foreground/80"
                    : "text-foreground/15"
                }`}
              >
                {g}
              </Box>
            ))}
          </Box>

          <Box tag="h2" className="text-2xl md:text-3xl font-bold mb-3">
            易經 · The Engineering Philosophy
          </Box>
          <Box tag="p" className="text-muted-foreground max-w-xl mx-auto text-sm mb-2">
            Ten principles drawn from the 64 hexagrams of the I-Ching.
            Orthogonality. Smallness. Completeness. Clarity. Composability.
          </Box>
          <Box tag="p" className="text-muted-foreground/60 max-w-xl mx-auto text-xs mb-8 font-mono">
            Ancient pattern language for systems that last.
            The same framework behind every model, protocol, and line of code we ship.
          </Box>

          <Link
            href="https://zoo.ngo/philosophy"
            className="inline-flex items-center px-6 py-3 rounded-full font-medium border border-border/50 bg-transparent hover:bg-white/5 text-sm text-foreground transition-colors gap-2"
          >
            The Zen of Zoo <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </Box>
    </Box>
  );
}
