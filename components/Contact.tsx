"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Microscope, Building2 } from "lucide-react";

type Contact = { name: string; role: string; email: string };

const researchDivision: Contact[] = [
  { name: "Research Partnerships", role: "Academic & Industry Collaboration", email: "research@zoo.industries" },
];

const commercialDivision: Contact[] = [
];

function ContactRow({ c }: { c: Contact }) {
  return (
    <div className="border-2 border-black p-4 sm:p-5 bg-white/40">
      <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-tight text-foreground leading-tight">
        {c.name}
      </h4>
      <p className="mt-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.15em] text-muted-foreground">
        {c.role}
      </p>
      <a
        href={`mailto:${c.email}`}
        className="mt-3 inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-foreground underline underline-offset-4 decoration-2 hover:decoration-[5px] hover:text-[var(--brand-yellow)] transition-colors"
      >
        <Mail className="w-3.5 h-3.5" />
        {c.email}
      </a>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">

        {/* ─── Header ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h3 className="relative inline-block text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-foreground mb-6 sm:mb-8">
            Research collaboration
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
            Let&apos;s build together.
          </h2>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            From research collaborations to enterprise AI deployments, we partner
            with teams pushing the boundaries of what&apos;s possible.
          </p>
        </motion.div>

        {/* ─── Research + Commercial divisions ──────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* Research */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="border-2 border-black bg-white/60 shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000] p-6 sm:p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="shrink-0 w-11 h-11 flex items-center justify-center border-2 border-black bg-white shadow-[3px_3px_0_0_#000]">
                <Microscope className="w-5 h-5 text-black" strokeWidth={2.25} />
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-extrabold uppercase tracking-tight">
                Research division
              </h4>
            </div>
            <div className="space-y-4">
              {researchDivision.map((c) => <ContactRow key={c.email} c={c} />)}
            </div>
          </motion.div>

          {/* Commercial */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
            className="border-2 border-black bg-white/60 shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000] p-6 sm:p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="shrink-0 w-11 h-11 flex items-center justify-center border-2 border-black bg-white shadow-[3px_3px_0_0_#000]">
                <Building2 className="w-5 h-5 text-black" strokeWidth={2.25} />
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-extrabold uppercase tracking-tight">
                Commercial division
              </h4>
            </div>
            <div className="space-y-4">
              {commercialDivision.map((c) => <ContactRow key={c.email} c={c} />)}
            </div>
          </motion.div>
        </div>

        {/* ─── HQ + Secure Line + Inquiries — three brutalist tiles ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
        >
          <div className="border-2 border-black bg-white/60 shadow-[6px_6px_0_0_#000] md:shadow-[8px_8px_0_0_#000] p-6 sm:p-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="shrink-0 w-10 h-10 flex items-center justify-center border-2 border-black bg-white shadow-[3px_3px_0_0_#000]">
                <MapPin className="w-4 h-4 text-black" strokeWidth={2.25} />
              </div>
              <h5 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em]">
                Corporate HQ
              </h5>
            </div>
            <p className="text-sm sm:text-base text-foreground leading-relaxed">
              1824 S. Fairfax Ave<br />
              Los Angeles, CA 90019<br />
              United States
            </p>
          </div>

          <div className="border-2 border-black bg-white/60 shadow-[6px_6px_0_0_#000] md:shadow-[8px_8px_0_0_#000] p-6 sm:p-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="shrink-0 w-10 h-10 flex items-center justify-center border-2 border-black bg-white shadow-[3px_3px_0_0_#000]">
                <Phone className="w-4 h-4 text-black" strokeWidth={2.25} />
              </div>
              <h5 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em]">
                Secure line
              </h5>
            </div>
            <a
              href="tel:+19137774443"
              className="text-base sm:text-lg font-extrabold tabular-nums text-foreground underline underline-offset-4 decoration-2 hover:decoration-[5px] hover:text-[var(--brand-yellow)] transition-colors"
            >
              +1 (913) 777-4443
            </a>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              Available 24/7
            </p>
          </div>

          <div className="border-2 border-black bg-white/60 shadow-[6px_6px_0_0_#000] md:shadow-[8px_8px_0_0_#000] p-6 sm:p-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="shrink-0 w-10 h-10 flex items-center justify-center border-2 border-black bg-white shadow-[3px_3px_0_0_#000]">
                <Mail className="w-4 h-4 text-black" strokeWidth={2.25} />
              </div>
              <h5 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em]">
                General inquiries
              </h5>
            </div>
            <ul className="space-y-1.5 text-sm sm:text-base">
              {["info@zoo.industries", "contracts@zoo.industries", "security@zoo.industries"].map((e) => (
                <li key={e}>
                  <a
                    href={`mailto:${e}`}
                    className="font-extrabold text-foreground underline underline-offset-4 decoration-2 hover:decoration-[5px] hover:text-[var(--brand-yellow)] transition-colors"
                  >
                    {e}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
