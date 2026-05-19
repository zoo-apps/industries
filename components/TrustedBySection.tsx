"use client";

import { motion } from "framer-motion";
import { partnerLogos } from "@/lib/constants/partner-logos";
import site from "@/site.config";

export default function TrustedBySection() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">

        {/* ─── Header — eyebrow with scroll-draw underline + big title ─── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h3 className="relative inline-block text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-foreground mb-6 sm:mb-8">
            Investors &amp; partners
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="absolute left-0 right-0 -bottom-2 h-[3px] bg-black origin-left"
            />
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-foreground">
            Backed by world-class partners.
          </h2>
        </motion.div>

        {/* ─── Partner logo grid — one brutalist panel ──────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
          className="border-2 border-black bg-white/60 shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000] p-6 sm:p-8 md:p-10"
        >
          <div className="flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-12 gap-y-6 sm:gap-y-8">
            {partnerLogos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  loading="lazy"
                  className={`w-auto ${logo.className ?? "h-6 sm:h-7"}`}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* ─── Trusted-by marquee — black bar, white text, endless scroll ─ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
          className="border-2 border-black bg-black shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000] overflow-hidden"
        >
          <style>
            {`@keyframes brand-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}
          </style>
          <div className="px-4 sm:px-6 py-2 border-b-2 border-white/20">
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-white/60">
              Trusted by
            </span>
          </div>
          <div className="relative overflow-hidden">
            <div
              className="flex gap-10 sm:gap-14 py-4 sm:py-5 px-6 text-sm sm:text-base font-extrabold uppercase tracking-wider text-white w-max"
              style={{ animation: "brand-marquee 30s linear infinite" }}
            >
              {[...site.clients, ...site.clients].map((client, index) => (
                <span key={`${client}-${index}`} className="whitespace-nowrap">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
