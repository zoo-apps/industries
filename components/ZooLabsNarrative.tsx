"use client";

import { Box } from '@hanzo/ui'
import { M } from '@/components/motion'
import { motion } from "framer-motion";

// Content lifted from "Zoo Labs 2026 - draft.pdf" (the full pitch deck).
// All sections render as brutalist colored panels matching the rest of
// the site palette; responsive from mobile (single column) up to desktop.

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <Box tag="section" id={id} className="py-12 md:py-16 px-4 md:px-8">
      <Box className="max-w-7xl mx-auto">{children}</Box>
    </Box>
  );
}

function SectionHead({
  pillClass,
  title,
  subtitle,
}: {
  pillClass: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <M {...fade} transition={{ duration: 0.5 }} className="mb-8">
      <Box tag="span" className={`pill ${pillClass} text-lg md:text-2xl`}>{title}</Box>
      {subtitle && (
        <Box tag="h3" className="mt-10 md:mt-12 text-xl md:text-2xl font-extrabold underline underline-offset-4">
          {subtitle}
        </Box>
      )}
    </M>
  );
}

export default function ZooLabsNarrative() {
  return (
    <>
      {/* ── Tagline ─────────────────────────────────────────── */}
      <Section>
        <M
          {...fade}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Box tag="p" className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Open AI for the future of tomorrow.
          </Box>
        </M>
      </Section>

      {/* ── Conservation activities ─────────────────────────── */}
      <Section id="conservation">
        <SectionHead
          pillClass="pill-green"
          title="Conservation"
          subtitle="Our non-profit supports Open AI research and charities aligned with ending extinction."
        />
        <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {[
            {
              h: "Habitat & Health",
              p: "Landscaping and other on-the-ground activities like planning, that account for the health and safety of endangered species.",
              c: "var(--brand-green)",
            },
            {
              h: "Data & Anti-Poaching",
              p: "Collect data from these animals based on behavior and population dynamics to eliminate poaching.",
              c: "var(--brand-cyan)",
            },
            {
              h: "Rescue & Reintegration",
              p: "Rescue animals orphaned by poachers and help reintegrate these animals back into the wild.",
              c: "var(--brand-yellow)",
            },
            {
              h: "Policy",
              p: "Legal avenues to enact change in policy to create action and lasting impact, for the best routes to end extinction.",
              c: "var(--brand-magenta)",
            },
          ].map((card, i) => (
            <M
              key={card.h}
              {...fade}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-5 md:p-6 border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] text-black"
              style={{ backgroundColor: card.c }}
            >
              <Box tag="h4" className="text-lg md:text-xl font-extrabold uppercase mb-2 tracking-tight">
                {card.h}
              </Box>
              <Box tag="p" className="text-sm md:text-base font-medium">{card.p}</Box>
            </M>
          ))}
        </Box>
      </Section>

      {/* ── Zoo Bots ────────────────────────────────────────── */}
      <Section id="bots">
        <SectionHead
          pillClass="pill-pink"
          title="Zoo Bots"
          subtitle="Agentic AI for all ages."
        />
        <Box className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {[
            "Private local AI that runs on your computer for free, or in Zoo Cloud.",
            "Intelligent animal agents with a gamified economy and marketplace.",
            "Supports endangered species and wildlife in the real world.",
            "Autonomous creation and task execution.",
            "Regulated tokenization partners give blockchain investors access to $113 Trillion worth of digital securities.",
          ].map((line, i) => (
            <M
              key={i}
              {...fade}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="panel"
            >
              <Box tag="p" className="text-base md:text-lg font-medium">{line}</Box>
            </M>
          ))}
        </Box>
      </Section>

      {/* ── Problem ─────────────────────────────────────────── */}
      <Section id="problem">
        <SectionHead pillClass="pill-red" title="Problem?" />
        <Box tag="p" className="text-lg md:text-2xl font-bold mb-6 md:mb-8 max-w-4xl">
          AI is controlled by just a few monopolies world-wide, while emerging
          technology has been bombarded with nefarious actors time and time
          again.
        </Box>
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              h: "AI as a safety risk",
              p: "AI is a huge safety risk because it favors the profitization of the organization.",
            },
            {
              h: "Surveillance economics",
              p: "Corrupt and evil organizations will use your data against you. Your data can now be shared with government agencies and elite groups whether you like it or not — privacy is non-existent.",
            },
            {
              h: "Monopolization",
              p: "Monopolization removes competition that drives quality products and disruption.",
            },
            {
              h: "Predatory pricing",
              p: "Organizations like OpenAI, Anthropic, etc. charge people without any fair weighting — immeasurable pricing strategies that remove affordability and make AI inaccessible.",
            },
            {
              h: "Public market access",
              p: "Public market stocks are easily bought by anyone via brokerages on exchanges like the NYSE, offering high liquidity, transparency, and low minimums.",
            },
            {
              h: "Private market gatekeeping",
              p: "Private market stocks are shares in private companies, typically restricted to accredited or institutional investors with lower liquidity and limited transparency.",
            },
          ].map((card, i) => (
            <M
              key={card.h}
              {...fade}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="panel"
            >
              <Box tag="h4" className="text-base md:text-lg font-extrabold uppercase mb-2 tracking-tight">
                {card.h}
              </Box>
              <Box tag="p" className="text-sm md:text-base">{card.p}</Box>
            </M>
          ))}
        </Box>
      </Section>

      {/* ── Private Equity on Chain ────────────────────────── */}
      <Section id="pe-on-chain">
        <SectionHead
          pillClass="pill-blue"
          title="Private Equity on Chain"
          subtitle="The biggest redistribution of wealth the world is yet to see."
        />
        <Box className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          <M {...fade} transition={{ duration: 0.5 }} className="panel lg:col-span-2 space-y-4">
            <Box tag="p" className="text-base md:text-lg font-medium">
              Through our regulated tokenization partner, ZOO gains a compliant path to tokenize and
              distribute GPU-backed AI infrastructure using broker-dealer, ATS,
              transfer agency, and blockchain settlement rails.
            </Box>
            <Box tag="blockquote" className="border-l-4 border-black pl-4 italic text-sm md:text-base">
              "While smaller, private equity has historically generated higher
              long-term net returns, often outpacing the S&amp;P 500 over 10-
              and 20-year periods."
              <Box tag="span" className="block not-italic mt-2 text-xs md:text-sm font-semibold">
                — Start Engine
              </Box>
            </Box>
          </M>
          <M
            {...fade}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-3 md:gap-4"
          >
            {[
              { v: "$1.75T", l: "Hedge funds" },
              { v: "$852B", l: "Venture capital" },
              { v: "$1.2T", l: "Private credit" },
              { v: "$134B", l: "Real estate" },
              { v: "$159B", l: "Infrastructure" },
              { v: "$113T", l: "Total addressable" },
            ].map((s) => (
              <Box
                key={s.l}
                className="p-3 md:p-4 border-2 border-black bg-white text-center"
              >
                <Box className="text-lg md:text-2xl font-extrabold">{s.v}</Box>
                <Box className="text-[10px] md:text-xs uppercase tracking-wider font-semibold text-black/70">
                  {s.l}
                </Box>
              </Box>
            ))}
          </M>
        </Box>
        <Box tag="p" className="text-xs md:text-sm text-black/60 max-w-3xl">
          Source: Based on World Bank and Preqin data, as cited in McKinsey
          &amp; Company's "Global Private Markets Review 2020." Data as of year
          end 2019. Growth rates indexed to 2000 values.
        </Box>
      </Section>

      {/* ── How Zoo Works ───────────────────────────────────── */}
      <Section id="how">
        <SectionHead pillClass="pill-yellow" title="How does Zoo work?" />
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {[
            "Collect and trade different Zoo Bots — each AI is an emotionally intelligent 3D replica of an endangered species, with direct charitable donations to wildlife charities.",
            "Choose your display. Your experience is unique and tailored to whichever compatible device you use.",
            "Train up your buddy to be a specialist and sell them to collect $ZOO coin, and mine $AI.",
            "Play, learn, and task your buddy with almost anything. Trade them or sell copies.",
            "Exchange your $AI or $ZOO coins for any other cryptocurrency, and up to 13,000+ digital securities via our regulated ATS partner.",
          ].map((step, i) => (
            <M
              key={i}
              {...fade}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-4 md:p-5 border-2 border-black bg-white shadow-[6px_6px_0_0_#000]"
            >
              <Box className="text-2xl md:text-3xl font-extrabold mb-2 text-[var(--brand-magenta)]">
                {String(i + 1).padStart(2, "0")}
              </Box>
              <Box tag="p" className="text-sm md:text-base font-medium">{step}</Box>
            </M>
          ))}
        </Box>
      </Section>

      {/* ── Mine AI / Foundation mission ────────────────────── */}
      <Section id="mine-ai">
        <SectionHead
          pillClass="pill-rainbow"
          title="Mine AI · Save the Species"
          subtitle="The Zoo Labs Foundation, a 501(c)(3) tax-exempt non-profit committed to preserving life on Earth."
        />
        <Box className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {[
            "Uniquely connecting donors to local private AI and funding wildlife in need.",
            "Fun immersive experiences that incentivize large donations.",
            "Inclusive of all economic backgrounds — volunteer or visit the sanctuaries in style.",
          ].map((line, i) => (
            <Box key={i} className="panel">
              <Box tag="p" className="text-base md:text-lg font-medium">{line}</Box>
            </Box>
          ))}
        </Box>
      </Section>

      {/* ── Five-Layer Stack ────────────────────────────────── */}
      <Section id="stack">
        <SectionHead
          pillClass="pill-pink"
          title="The Open AI Infrastructure Stack"
          subtitle="zenlm.org · zoo.cloud · zoo.network · zoo.fund · zoo.vote"
        />
        <Box tag="p" className="text-base md:text-lg max-w-4xl mb-6 md:mb-8 font-medium">
          Zoo is building the foundational layer for open AI — from openly
          trained models to decentralized compute to governance. Competing
          directly with closed ecosystems by making AI accessible, transparent,
          and locally deployable.
        </Box>
        <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {[
            {
              h: "zenlm.org",
              s: "Models",
              p: "Openly trained, free, private local AI models.",
              c: "var(--brand-yellow)",
              href: "https://zenlm.org",
            },
            {
              h: "zoo.cloud",
              s: "Compute",
              p: "Decentralized GPU/inference network.",
              c: "var(--brand-green)",
              href: "https://zoo.cloud",
            },
            {
              h: "zoo.network",
              s: "Settlement",
              p: "Post-quantum, GPU-native blockchain (EVM, block STM, consensus on GPU) + Open AI mining.",
              c: "var(--brand-cyan)",
              href: "https://zoo.network",
            },
            {
              h: "zoo.fund",
              s: "Financing",
              p: "Tokenized infrastructure financing with transparent economics.",
              c: "var(--brand-yellow)",
              href: "https://zoo.fund",
            },
            {
              h: "zoo.vote",
              s: "Governance",
              p: "Open governance — community-owned decision-making.",
              c: "var(--brand-magenta)",
              href: "https://zoo.vote",
            },
          ].map((layer, i) => (
            <M tag="a"
              key={layer.h}
              href={layer.href}
              target="_blank"
              rel="noopener noreferrer"
              {...fade}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="block p-4 md:p-5 border-2 border-black shadow-[6px_6px_0_0_#000] text-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000] transition-transform"
              style={{ backgroundColor: layer.c }}
            >
              <Box className="text-[10px] md:text-xs uppercase tracking-widest font-bold mb-1 opacity-70">
                {layer.s}
              </Box>
              <Box className="text-lg md:text-xl font-extrabold mb-2 break-all">
                {layer.h}
              </Box>
              <Box tag="p" className="text-xs md:text-sm font-medium">{layer.p}</Box>
            </M>
          ))}
        </Box>
      </Section>

      {/* ── Five Competitive Advantages ─────────────────────── */}
      <Section id="advantages">
        <SectionHead
          pillClass="pill-green"
          title="Five Competitive Advantages"
        />
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {[
            {
              n: "01",
              h: "Openly trained models",
              p: "zenlm.org models are openly trained, fully transparent, and run privately on-device — no cloud dependency, no vendor lock-in.",
            },
            {
              n: "02",
              h: "Decentralized compute",
              p: "Compute distributed across the network, optimized for training instead of concentrated in a centralized cloud.",
            },
            {
              n: "03",
              h: "Community governance",
              p: "Guided by community participation rather than corporate control.",
            },
            {
              n: "04",
              h: "Transparent economics",
              p: "Pricing and incentives visible by design, unlike opaque vendor pricing.",
            },
            {
              n: "05",
              h: "Blockchain settlement",
              p: "Post-quantum, GPU-native blockchain — EVM, block STM, and consensus all run on GPU. Paired with Zoo's Open AI mining protocol.",
            },
          ].map((a, i) => (
            <M
              key={a.n}
              {...fade}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="panel"
            >
              <Box className="text-2xl md:text-3xl font-extrabold text-[var(--brand-green)] mb-2">
                {a.n}
              </Box>
              <Box tag="h4" className="text-base md:text-lg font-extrabold uppercase tracking-tight mb-2">
                {a.h}
              </Box>
              <Box tag="p" className="text-sm md:text-base">{a.p}</Box>
            </M>
          ))}
        </Box>
      </Section>

      {/* ── Three Markets ────────────────────────────────────── */}
      <Section id="markets">
        <SectionHead
          pillClass="pill-cyan"
          title="Three Markets"
          subtitle="Three customer segments served by one open stack."
        />
        <Box className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              h: "AI Researchers & Developers",
              p: "Use zenlm.org and zoo.cloud to build, train, and deploy models with open tooling and private local inference — instead of being locked into closed AI development platforms.",
              c: "var(--brand-magenta)",
            },
            {
              h: "Infrastructure Operators",
              p: "Use zoo.cloud to monetize compute and route demand efficiently, rather than relying on opaque marketplaces or vertically integrated providers.",
              c: "var(--brand-green)",
            },
            {
              h: "Enterprises",
              p: "Use zoo.network to deploy sovereign AI infrastructure with open, portable architecture instead of vendor-locked enterprise AI stacks.",
              c: "var(--brand-cyan)",
            },
          ].map((m, i) => (
            <M
              key={m.h}
              {...fade}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-5 md:p-6 border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] text-black"
              style={{ backgroundColor: m.c }}
            >
              <Box tag="h4" className="text-lg md:text-2xl font-extrabold uppercase mb-3 tracking-tight">
                {m.h}
              </Box>
              <Box tag="p" className="text-sm md:text-base font-medium">{m.p}</Box>
            </M>
          ))}
        </Box>
      </Section>

      {/* ── Multisensory AI ─────────────────────────────────── */}
      <Section id="multisensory">
        <SectionHead
          pillClass="pill-blue"
          title="Beyond ChatGPT · Multisensory AI"
          subtitle="Multi-sensory evocation across devices boosts learning and retention."
        />
        <Box tag="p" className="text-base md:text-lg max-w-4xl mb-8 md:mb-10 font-medium">
          Interacting with an animal agent through compatible platforms (VR
          headsets, projection mapping, LED panels, desktops, tablets/phones)
          that incorporates multisensory cues — visual, spatial audio, scent,
          and optional gentle haptics — produces greater immediate learning
          gains, stronger delayed recall, and improved transfer compared to
          visual-only conditions.
        </Box>
        <Box className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-8 md:mb-10">
          {[
            {
              h: "Playful endangered agents",
              p: "How do animals — especially adorable and playful creatures — contribute to the behavior of adults and children on a short and long term scale?",
            },
            {
              h: "Immersive living habitats",
              p: "Interacting with a projection-mapped animal agent that uses multisensory cues will produce higher immediate learning, better delayed recall, and stronger transfer than the same lesson delivered visual-only.",
            },
          ].map((c) => (
            <Box key={c.h} className="panel">
              <Box tag="h4" className="text-base md:text-lg font-extrabold uppercase mb-2 tracking-tight">
                {c.h}
              </Box>
              <Box tag="p" className="text-sm md:text-base">{c.p}</Box>
            </Box>
          ))}
        </Box>

        <Box tag="h4" className="relative inline-block text-lg md:text-xl font-extrabold uppercase mb-6 md:mb-7 tracking-tight">
          Compatible devices
          <M tag="span"
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="absolute left-0 right-0 -bottom-2 h-[3px] bg-black origin-left"
          />
        </Box>
        <Box className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {[
            "VR Headsets",
            "Projection Mapping",
            "LED Panels",
            "Computers · TVs",
            "Volumetric 3D",
            "Tablets · Phones",
          ].map((d, i) => (
            <M
              key={d}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + i * 0.08 }}
              className="p-3 md:p-4 border-2 border-black bg-white text-center font-extrabold uppercase tracking-tight text-xs md:text-sm shadow-[4px_4px_0_0_#000] md:shadow-[6px_6px_0_0_#000]"
            >
              {d}
            </M>
          ))}
        </Box>
      </Section>

      {/* ── Closing CTA ─────────────────────────────────────── */}
      <Section id="invest">
        <M
          {...fade}
          transition={{ duration: 0.5 }}
          className="p-8 md:p-12 border-2 border-black bg-[var(--brand-magenta)] text-black shadow-[6px_6px_0_0_#000] md:shadow-[12px_12px_0_0_#000] text-center"
        >
          <Box tag="h3" className="text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight mb-4">
            Welcome to the ZOO!
          </Box>
          <Box tag="p" className="text-base md:text-lg font-medium mb-6 md:mb-8 max-w-2xl mx-auto">
            Contact{" "}
            <Box tag="a" href="mailto:a@zoo.ngo" className="underline font-extrabold">
              a@zoo.ngo
            </Box>{" "}
            to invest, or for unique sponsorship and partnership opportunities.
          </Box>
          <Box tag="a"
            href="mailto:a@zoo.ngo"
            className="btn-brutalist bg-white text-base md:text-lg"
          >
            Get in touch
          </Box>
        </M>
      </Section>
    </>
  );
}
