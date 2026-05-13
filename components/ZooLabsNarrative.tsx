"use client";

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
    <section id={id} className="py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
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
    <motion.div {...fade} transition={{ duration: 0.5 }} className="mb-8">
      <span className={`pill ${pillClass} text-lg md:text-2xl`}>{title}</span>
      {subtitle && (
        <h3 className="mt-10 md:mt-12 text-xl md:text-2xl font-extrabold underline underline-offset-4">
          {subtitle}
        </h3>
      )}
    </motion.div>
  );
}

export default function ZooLabsNarrative() {
  return (
    <>
      {/* ── Tagline ─────────────────────────────────────────── */}
      <Section>
        <motion.div
          {...fade}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Open AI for the future of tomorrow.
          </p>
        </motion.div>
      </Section>

      {/* ── Conservation activities ─────────────────────────── */}
      <Section id="conservation">
        <SectionHead
          pillClass="pill-green"
          title="Conservation"
          subtitle="Our non-profit supports Open AI research and charities aligned with ending extinction."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
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
            <motion.div
              key={card.h}
              {...fade}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-5 md:p-6 border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] text-black"
              style={{ backgroundColor: card.c }}
            >
              <h4 className="text-lg md:text-xl font-extrabold uppercase mb-2 tracking-tight">
                {card.h}
              </h4>
              <p className="text-sm md:text-base font-medium">{card.p}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Zoo Bots ────────────────────────────────────────── */}
      <Section id="bots">
        <SectionHead
          pillClass="pill-pink"
          title="Zoo Bots"
          subtitle="Agentic AI for all ages."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {[
            "Private local AI that runs on your computer for free, or in Zoo Cloud.",
            "Intelligent animal agents with a gamified economy and marketplace.",
            "Supports endangered species and wildlife in the real world.",
            "Autonomous creation and task execution.",
            " gives blockchain investors access to $113 Trillion worth of digital securities.",
          ].map((line, i) => (
            <motion.div
              key={i}
              {...fade}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="panel"
            >
              <p className="text-base md:text-lg font-medium">{line}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Problem ─────────────────────────────────────────── */}
      <Section id="problem">
        <SectionHead pillClass="pill-red" title="Problem?" />
        <p className="text-lg md:text-2xl font-bold mb-6 md:mb-8 max-w-4xl">
          AI is controlled by just a few monopolies world-wide, while emerging
          technology has been bombarded with nefarious actors time and time
          again.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
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
            <motion.div
              key={card.h}
              {...fade}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="panel"
            >
              <h4 className="text-base md:text-lg font-extrabold uppercase mb-2 tracking-tight">
                {card.h}
              </h4>
              <p className="text-sm md:text-base">{card.p}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Private Equity on Chain ────────────────────────── */}
      <Section id="pe-on-chain">
        <SectionHead
          pillClass="pill-blue"
          title="Private Equity on Chain"
          subtitle="The biggest redistribution of wealth the world is yet to see."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          <motion.div {...fade} transition={{ duration: 0.5 }} className="panel lg:col-span-2 space-y-4">
            <p className="text-base md:text-lg font-medium">
              Through , ZOO gains a compliant path to tokenize and
              distribute GPU-backed AI infrastructure using broker-dealer, ATS,
              transfer agency, and blockchain settlement rails.
            </p>
            <blockquote className="border-l-4 border-black pl-4 italic text-sm md:text-base">
              "While smaller, private equity has historically generated higher
              long-term net returns, often outpacing the S&amp;P 500 over 10-
              and 20-year periods."
              <span className="block not-italic mt-2 text-xs md:text-sm font-semibold">
                — Start Engine
              </span>
            </blockquote>
          </motion.div>
          <motion.div
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
              <div
                key={s.l}
                className="p-3 md:p-4 border-2 border-black bg-white text-center"
              >
                <div className="text-lg md:text-2xl font-extrabold">{s.v}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-wider font-semibold text-black/70">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <p className="text-xs md:text-sm text-black/60 max-w-3xl">
          Source: Based on World Bank and Preqin data, as cited in McKinsey
          &amp; Company's "Global Private Markets Review 2020." Data as of year
          end 2019. Growth rates indexed to 2000 values.
        </p>
      </Section>

      {/* ── How Zoo Works ───────────────────────────────────── */}
      <Section id="how">
        <SectionHead pillClass="pill-yellow" title="How does Zoo work?" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {[
            "Collect and trade different Zoo Bots — each AI is an emotionally intelligent 3D replica of an endangered species, with direct charitable donations to wildlife charities.",
            "Choose your display. Your experience is unique and tailored to whichever compatible device you use.",
            "Train up your buddy to be a specialist and sell them to collect $ZOO coin, and mine $AI.",
            "Play, learn, and task your buddy with almost anything. Trade them or sell copies.",
            "Exchange your $AI or $ZOO coins for any other cryptocurrency, and up to 13,000+ digital securities via our regulated ATS partner, .",
          ].map((step, i) => (
            <motion.div
              key={i}
              {...fade}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-4 md:p-5 border-2 border-black bg-white shadow-[6px_6px_0_0_#000]"
            >
              <div className="text-2xl md:text-3xl font-extrabold mb-2 text-[var(--brand-magenta)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-sm md:text-base font-medium">{step}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Mine AI / Foundation mission ────────────────────── */}
      <Section id="mine-ai">
        <SectionHead
          pillClass="pill-rainbow"
          title="Mine AI · Save the Species"
          subtitle="The Zoo Labs Foundation, a 501(c)(3) tax-exempt non-profit committed to preserving life on Earth."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {[
            "Uniquely connecting donors to local private AI and funding wildlife in need.",
            "Fun immersive experiences that incentivize large donations.",
            "Inclusive of all economic backgrounds — volunteer or visit the sanctuaries in style.",
          ].map((line, i) => (
            <div key={i} className="panel">
              <p className="text-base md:text-lg font-medium">{line}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Five-Layer Stack ────────────────────────────────── */}
      <Section id="stack">
        <SectionHead
          pillClass="pill-pink"
          title="The Open AI Infrastructure Stack"
          subtitle="zenlm.org · zoo.cloud · zoo.network · zoo.fund · zoo.vote"
        />
        <p className="text-base md:text-lg max-w-4xl mb-6 md:mb-8 font-medium">
          Zoo is building the foundational layer for open AI — from openly
          trained models to decentralized compute to governance. Competing
          directly with closed ecosystems by making AI accessible, transparent,
          and locally deployable.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {[
            {
              h: "zenlm.org",
              s: "Models",
              p: "Openly trained, free, private local AI models.",
              c: "var(--brand-yellow)",
            },
            {
              h: "zoo.cloud",
              s: "Compute",
              p: "Decentralized GPU/inference network.",
              c: "var(--brand-green)",
            },
            {
              h: "zoo.network",
              s: "Settlement",
              p: "Post-quantum, GPU-native blockchain (EVM, block STM, consensus on GPU) + Open AI mining.",
              c: "var(--brand-cyan)",
            },
            {
              h: "zoo.fund",
              s: "Financing",
              p: "Tokenized infrastructure financing with transparent economics.",
              c: "var(--brand-blue)",
            },
            {
              h: "zoo.vote",
              s: "Governance",
              p: "Open governance — community-owned decision-making.",
              c: "var(--brand-magenta)",
            },
          ].map((layer, i) => (
            <motion.div
              key={layer.h}
              {...fade}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-4 md:p-5 border-2 border-black shadow-[6px_6px_0_0_#000] text-black"
              style={{ backgroundColor: layer.c }}
            >
              <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold mb-1 opacity-70">
                {layer.s}
              </div>
              <div className="text-lg md:text-xl font-extrabold mb-2 break-all">
                {layer.h}
              </div>
              <p className="text-xs md:text-sm font-medium">{layer.p}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Five Competitive Advantages ─────────────────────── */}
      <Section id="advantages">
        <SectionHead
          pillClass="pill-green"
          title="Five Competitive Advantages"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
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
            <motion.div
              key={a.n}
              {...fade}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="panel"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-[var(--brand-green)] mb-2">
                {a.n}
              </div>
              <h4 className="text-base md:text-lg font-extrabold uppercase tracking-tight mb-2">
                {a.h}
              </h4>
              <p className="text-sm md:text-base">{a.p}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Three Markets ────────────────────────────────────── */}
      <Section id="markets">
        <SectionHead
          pillClass="pill-cyan"
          title="Three Markets"
          subtitle="Three customer segments served by one open stack."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
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
              c: "var(--brand-blue)",
            },
          ].map((m, i) => (
            <motion.div
              key={m.h}
              {...fade}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-5 md:p-6 border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] text-black"
              style={{ backgroundColor: m.c }}
            >
              <h4 className="text-lg md:text-2xl font-extrabold uppercase mb-3 tracking-tight">
                {m.h}
              </h4>
              <p className="text-sm md:text-base font-medium">{m.p}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Multisensory AI ─────────────────────────────────── */}
      <Section id="multisensory">
        <SectionHead
          pillClass="pill-blue"
          title="Beyond ChatGPT · Multisensory AI"
          subtitle="Multi-sensory evocation across devices boosts learning and retention."
        />
        <p className="text-base md:text-lg max-w-4xl mb-8 md:mb-10 font-medium">
          Interacting with an animal agent through compatible platforms (VR
          headsets, projection mapping, LED panels, desktops, tablets/phones)
          that incorporates multisensory cues — visual, spatial audio, scent,
          and optional gentle haptics — produces greater immediate learning
          gains, stronger delayed recall, and improved transfer compared to
          visual-only conditions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-8 md:mb-10">
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
            <div key={c.h} className="panel">
              <h4 className="text-base md:text-lg font-extrabold uppercase mb-2 tracking-tight">
                {c.h}
              </h4>
              <p className="text-sm md:text-base">{c.p}</p>
            </div>
          ))}
        </div>

        <h4 className="text-lg md:text-xl font-extrabold uppercase mb-4 md:mb-5 tracking-tight">
          Compatible devices
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {[
            "VR Headsets",
            "Projection Mapping",
            "LED Panels",
            "Computers · TVs",
            "Volumetric 3D",
            "Tablets · Phones",
          ].map((d, i) => (
            <div
              key={d}
              className="p-3 md:p-4 border-2 border-black bg-white text-center font-extrabold uppercase tracking-tight text-xs md:text-sm shadow-[4px_4px_0_0_#000] md:shadow-[6px_6px_0_0_#000]"
            >
              {d}
            </div>
          ))}
        </div>
      </Section>

      {/* ── Closing CTA ─────────────────────────────────────── */}
      <Section id="invest">
        <motion.div
          {...fade}
          transition={{ duration: 0.5 }}
          className="p-8 md:p-12 border-2 border-black bg-[var(--brand-magenta)] text-black shadow-[6px_6px_0_0_#000] md:shadow-[12px_12px_0_0_#000] text-center"
        >
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight mb-4">
            Welcome to the ZOO!
          </h3>
          <p className="text-base md:text-lg font-medium mb-6 md:mb-8 max-w-2xl mx-auto">
            Contact{" "}
            <a href="mailto:a@zoo.ngo" className="underline font-extrabold">
              a@zoo.ngo
            </a>{" "}
            to invest, or for unique sponsorship and partnership opportunities.
          </p>
          <a
            href="mailto:a@zoo.ngo"
            className="btn-brutalist bg-white text-base md:text-lg"
          >
            Get in touch
          </a>
        </motion.div>
      </Section>
    </>
  );
}
