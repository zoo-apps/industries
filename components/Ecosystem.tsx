"use client";

import { Box } from '@hanzo/ui'
import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

// Small image strip under the Foundation prose. Files live in
// /public/ecosystem/<slug>.jpg — drop replacements there to swap.
const ecosystemImages = [
  { slug: "bear",    alt: "Bear" },
  { slug: "drought", alt: "Drought / dry tree" },
  { slug: "lake",    alt: "Lake" },
  { slug: "eagle",   alt: "Eagle in flight" },
  { slug: "forest",  alt: "Forest" },
  { slug: "whale",   alt: "Whale tail" },
];

export default function Ecosystem() {
  return (
    <Box tag="section" className="py-20 px-4 md:px-8">
      <Box className="max-w-7xl mx-auto">
        {/* ── Foundation header ───────────────────────────── */}
        <motion.div {...fade} transition={{ duration: 0.5 }} className="mb-10">
          <Box tag="span" className="pill pill-rainbow text-2xl md:text-4xl">
            FOUNDATION
          </Box>
        </motion.div>

        <motion.div
          {...fade}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <Box tag="h3" className="text-2xl md:text-3xl font-extrabold underline underline-offset-4 mb-6">
            Charity &amp; Funding Portal
          </Box>
          <Box className="grid md:grid-cols-2 gap-8 text-base md:text-lg">
            <Box className="space-y-5">
              <Box tag="p" className="font-bold">
                Zoo Foundation donates all proceeds to Verified Charities and
                Non-Profits, Supporting the preservation of animals, endangered
                species, and scientific research.
              </Box>
              <p>
                Zoo works with charities to fund projects/research related to
                the preservation of life and also specifically AI safety.
              </p>
              <p>
                A seamless DeFi layer will allow our foundation to fund compute
                costs, cover operational expenses, and support animal
                preservation.
              </p>
            </Box>
            <Box className="space-y-5 italic">
              <p>
                Zoo Labs started as a crypto-game that reached notoriety and a
                nearly $3 billion USD marketcap at all-time high.
              </p>
              <p>
                Our charity was legally approved on 06/02/2025, with our
                corporation formed on 04/22/2022, and now Zoo Labs Foundation
                is revenue tax exempt. EIN 88-3538992
              </p>
            </Box>
          </Box>
        </motion.div>

        {/* ── Image strip ─────────────────────────────────── */}
        <motion.div
          {...fade}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4 mb-14"
        >
          {ecosystemImages.map((img) => (
            <Box
              key={img.slug}
              className="relative aspect-square border-2 border-black shadow-[6px_6px_0_0_#000] bg-white overflow-hidden"
            >
              <img
                src={`/ecosystem/${img.slug}.jpg`}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </Box>
          ))}
        </motion.div>

        {/* ── Three category blocks ───────────────────────── */}
        <Box className="grid md:grid-cols-3 gap-10">
          {/* $ZOO Network */}
          <motion.div {...fade} transition={{ duration: 0.5, delay: 0.15 }}>
            <Box className="mb-6 flex items-center gap-2">
              <Box tag="span" className="pill pill-green text-lg md:text-xl">
                $ZOO NETWORK
              </Box>
              <Box tag="span" aria-label="USA" className="text-2xl">🇺🇸</Box>
            </Box>
            <Box className="space-y-3 mb-6 text-base font-medium">
              <p>
                Now <u>anyone</u> can buy pre-IPO stocks on chain, legally and
                securely.
              </p>
              <Box tag="p" className="underline">USA backed compliance is a win win.</Box>
            </Box>
            <Box className="panel panel-green space-y-4">
              <Box tag="p" className="font-bold">
                Exclusive access to regulated tokenization infrastructure
              </Box>
              <p>
                Through our regulated tokenization partner, ZOO can bring
                GPU-backed AI infrastructure into a regulated market structure,
                leveraging broker-dealer, ATS, transfer agency, and blockchain
                settlement rails to reach accredited and institutional capital
                beyond crypto-native investors.
              </p>
            </Box>
          </motion.div>

          {/* Zoo Industries */}
          <motion.div {...fade} transition={{ duration: 0.5, delay: 0.25 }}>
            <Box className="mb-6">
              <Box tag="span" className="pill pill-pink text-lg md:text-xl">
                ZOO INDUSTRIES
              </Box>
            </Box>
            <Box className="space-y-3 mb-6 text-base font-medium">
              <Box tag="p" className="underline">Selling &amp; Mining AI Compute</Box>
            </Box>
            <Box className="panel space-y-4 text-black bg-white">
              <Box tag="p" className="font-bold">
                To truly democratize data and computation in AI, we must
                leverage blockchain to decentralize compute and knowledge.
              </Box>
              <p>
                We will also generate revenue by charging users for AI and
                compute usage, creating another highly profitable revenue
                stream.
              </p>
              <p>
                Creating a token backed by AI tokens will give the AI token
                real economic value. We can further democratize the system and
                reduce plutocratic influence.
              </p>
            </Box>
          </motion.div>

          {/* Zoo Labs */}
          <motion.div {...fade} transition={{ duration: 0.5, delay: 0.35 }}>
            <Box className="mb-6">
              <Box tag="span" className="pill pill-blue text-lg md:text-xl text-white">
                ZOO LABS
              </Box>
            </Box>
            <Box className="space-y-3 mb-6 text-base font-medium">
              <Box tag="p" className="underline">Our Future Research</Box>
            </Box>
            <Box className="panel space-y-4 text-black bg-white">
              <Box tag="p" className="font-bold">
                To further promote our mission to save endangered species, Zoo
                will introduce an engaging haptic sensory Lab in the Bay Area.
              </Box>
              <p>
                We can ensure monetization through a physical location and
                research laboratory with exciting multi-haptic experiences to
                ultimately enhance your live cognition and memory.
              </p>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}
