"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

// One tile per ecosystem slug. Renders the JPG when present; falls back
// to the emoji glyph only if the image is missing or fails to load. The
// previous markup painted the emoji on top of the loaded image — that's
// why the bear photo wasn't visible.
function EcosystemTile({
  slug,
  alt,
  emoji,
  objectPosition,
}: {
  slug: string;
  alt: string;
  emoji: string;
  objectPosition?: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative aspect-square border-2 border-black shadow-[6px_6px_0_0_#000] bg-white overflow-hidden">
      {!failed && (
        <img
          src={`/ecosystem/${slug}.jpg`}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="w-full h-full object-cover"
          style={objectPosition ? { objectPosition } : undefined}
        />
      )}
      {failed && (
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl pointer-events-none"
        >
          {emoji}
        </span>
      )}
    </div>
  );
}

// Small image strip under the Foundation prose. Files live in
// /public/ecosystem/<slug>.jpg — drop replacements there to swap.
// ``objectPosition`` overrides CSS ``object-position`` so off-centre
// subjects (e.g. the eagle photo where the bird sits in the upper-left
// third of a portrait crop) land in the middle of the square tile.
const ecosystemImages = [
  { slug: "bear", alt: "Bear", emoji: "🐻" },
  { slug: "drought", alt: "Drought / dry tree", emoji: "🌳" },
  { slug: "lake", alt: "Lake", emoji: "🏞️" },
  { slug: "eagle", alt: "Eagle in flight", emoji: "🦅", objectPosition: "30% 35%" },
  { slug: "forest", alt: "Forest", emoji: "🌲" },
  { slug: "whale", alt: "Whale tail", emoji: "🐋" },
];

export default function Ecosystem() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ── Foundation header ───────────────────────────── */}
        <motion.div {...fade} transition={{ duration: 0.5 }} className="mb-10">
          <span className="pill pill-rainbow text-2xl md:text-4xl">
            FOUNDATION
          </span>
        </motion.div>

        <motion.div
          {...fade}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-extrabold underline underline-offset-4 mb-6">
            Charity &amp; Funding Portal
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-base md:text-lg">
            <div className="space-y-5">
              <p className="font-bold">
                Zoo Foundation donates all proceeds to Verified Charities and
                Non-Profits, Supporting the preservation of animals, endangered
                species, and scientific research.
              </p>
              <p>
                Zoo works with charities to fund projects/research related to
                the preservation of life and also specifically AI safety.
              </p>
              <p>
                A seamless DeFi layer will allow our foundation to fund compute
                costs, cover operational expenses, and support animal
                preservation.
              </p>
            </div>
            <div className="space-y-5 italic">
              <p>
                Zoo Labs started as a crypto-game that reached notoriety and a
                nearly $3 billion USD marketcap at all-time high.
              </p>
              <p>
                Our charity was legally approved on 06/02/2025, with our
                corporation formed on 04/22/2022, and now Zoo Labs Foundation
                is revenue tax exempt. EIN 88-3538992
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Image strip ─────────────────────────────────── */}
        <motion.div
          {...fade}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4 mb-14"
        >
          {ecosystemImages.map((img) => (
            <EcosystemTile key={img.slug} {...img} />
          ))}
        </motion.div>

        {/* ── Three category blocks ───────────────────────── */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* $ZOO Network */}
          <motion.div {...fade} transition={{ duration: 0.5, delay: 0.15 }}>
            <div className="mb-6 flex items-center gap-2">
              <span className="pill pill-green text-lg md:text-xl">
                $ZOO NETWORK
              </span>
              <span aria-label="USA" className="text-2xl">🇺🇸</span>
            </div>
            <div className="space-y-3 mb-6 text-base font-medium">
              <p>
                Now <u>anyone</u> can buy pre-IPO stocks on chain, legally and
                securely.
              </p>
              <p className="underline">USA backed compliance is a win win.</p>
            </div>
            <div className="panel panel-green space-y-4">
              <p className="font-bold">
                Exclusive access to regulated tokenization infrastructure
              </p>
              <p>
                Through , ZOO can bring GPU-backed AI
                infrastructure into a regulated market structure, leveraging
                broker-dealer, ATS, transfer agency, and blockchain settlement
                rails to reach accredited and institutional capital beyond
                crypto-native investors.
              </p>
            </div>
          </motion.div>

          {/* Zoo Industries */}
          <motion.div {...fade} transition={{ duration: 0.5, delay: 0.25 }}>
            <div className="mb-6">
              <span className="pill pill-pink text-lg md:text-xl">
                ZOO INDUSTRIES
              </span>
            </div>
            <div className="space-y-3 mb-6 text-base font-medium">
              <p className="underline">Selling &amp; Mining AI Compute</p>
            </div>
            <div className="panel panel-pink space-y-4 text-white">
              <p className="font-bold">
                To truly democratize data and computation in AI, we must
                leverage blockchain to decentralize compute and knowledge.
              </p>
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
            </div>
          </motion.div>

          {/* Zoo Labs */}
          <motion.div {...fade} transition={{ duration: 0.5, delay: 0.35 }}>
            <div className="mb-6">
              <span className="pill pill-blue text-lg md:text-xl text-white">
                ZOO LABS
              </span>
            </div>
            <div className="space-y-3 mb-6 text-base font-medium">
              <p className="underline">Our Future Research</p>
            </div>
            <div className="panel panel-blue space-y-4 text-white">
              <p className="font-bold">
                To further promote our mission to save endangered species, Zoo
                will introduce an engaging haptic sensory Lab in the Bay Area.
              </p>
              <p>
                We can ensure monetization through a physical location and
                research laboratory with exciting multi-haptic experiences to
                ultimately enhance your live cognition and memory.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
