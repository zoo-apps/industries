"use client";

import { Box, css } from '@hanzo/ui'
import { M } from '@/components/motion'
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Microscope, Building2 } from "lucide-react";

type Contact = { name: string; role: string; email: string };

const researchDivision: Contact[] = [
  { name: "Antje Karina Worring",  role: "Chief Executive Officer",        email: "a@zoo.industries"        },
  { name: "Research Partnerships", role: "Academic & Industry Collaboration", email: "research@zoo.industries" },
];

const commercialDivision: Contact[] = [
  { name: "Zach Kelling",   role: "Founding CTO",            email: "zach@zoo.industries" },
  { name: "Dave Lorenzini", role: "Chief Strategy Officer",  email: "dave@zoo.industries" },
];

function ContactRow({ c }: { c: Contact }) {
  return (
    <Box className="border-2 border-black p-4 sm:p-5 bg-white/40">
      <Box tag="h4" className="text-sm sm:text-base font-extrabold uppercase tracking-tight text-foreground leading-tight">
        {c.name}
      </Box>
      <Box tag="p" className="mt-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.15em] text-muted-foreground">
        {c.role}
      </Box>
      <Box tag="a"
        href={`mailto:${c.email}`}
        className="mt-3 inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-foreground underline underline-offset-4 decoration-2 hover:decoration-[5px] hover:text-[var(--brand-yellow)] transition-colors"
      >
        <Mail style={css('w-3.5 h-3.5')} />
        {c.email}
      </Box>
    </Box>
  );
}

export default function Contact() {
  return (
    <Box tag="section" id="contact" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <Box className="max-w-6xl mx-auto space-y-12 sm:space-y-16">

        {/* ─── Header ────────────────────────────────────────────── */}
        <M
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <Box tag="h3" className="relative inline-block text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-foreground mb-6 sm:mb-8">
            Research collaboration
            <M tag="span"
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="absolute left-0 right-0 -bottom-2 h-[3px] bg-black origin-left"
            />
          </Box>
          <Box tag="h2" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-foreground">
            Let&apos;s build together.
          </Box>
          <Box tag="p" className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            From research collaborations to enterprise AI deployments, we partner
            with teams pushing the boundaries of what&apos;s possible.
          </Box>
        </M>

        {/* ─── Research + Commercial divisions ──────────────────── */}
        <Box className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* Research */}
          <M
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="border-2 border-black bg-white/60 shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000] p-6 sm:p-8 md:p-10"
          >
            <Box className="flex items-center gap-3 mb-5 sm:mb-6">
              <Box className="shrink-0 w-11 h-11 flex items-center justify-center border-2 border-black bg-white shadow-[3px_3px_0_0_#000]">
                <Microscope style={css('w-5 h-5 text-black')} strokeWidth={2.25} />
              </Box>
              <Box tag="h4" className="text-base sm:text-lg md:text-xl font-extrabold uppercase tracking-tight">
                Research division
              </Box>
            </Box>
            <Box className="space-y-4">
              {researchDivision.map((c) => <ContactRow key={c.email} c={c} />)}
            </Box>
          </M>

          {/* Commercial */}
          <M
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
            className="border-2 border-black bg-white/60 shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000] p-6 sm:p-8 md:p-10"
          >
            <Box className="flex items-center gap-3 mb-5 sm:mb-6">
              <Box className="shrink-0 w-11 h-11 flex items-center justify-center border-2 border-black bg-white shadow-[3px_3px_0_0_#000]">
                <Building2 style={css('w-5 h-5 text-black')} strokeWidth={2.25} />
              </Box>
              <Box tag="h4" className="text-base sm:text-lg md:text-xl font-extrabold uppercase tracking-tight">
                Commercial division
              </Box>
            </Box>
            <Box className="space-y-4">
              {commercialDivision.map((c) => <ContactRow key={c.email} c={c} />)}
            </Box>
          </M>
        </Box>

        {/* ─── HQ + Secure Line + Inquiries — three brutalist tiles ── */}
        <M
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
        >
          <Box className="border-2 border-black bg-white/60 shadow-[6px_6px_0_0_#000] md:shadow-[8px_8px_0_0_#000] p-6 sm:p-7">
            <Box className="flex items-center gap-3 mb-4">
              <Box className="shrink-0 w-10 h-10 flex items-center justify-center border-2 border-black bg-white shadow-[3px_3px_0_0_#000]">
                <MapPin style={css('w-4 h-4 text-black')} strokeWidth={2.25} />
              </Box>
              <Box tag="h5" className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em]">
                Corporate HQ
              </Box>
            </Box>
            <Box tag="p" className="text-sm sm:text-base text-foreground leading-relaxed">
              1824 S. Fairfax Ave<br />
              Los Angeles, CA 90019<br />
              United States
            </Box>
          </Box>

          <Box className="border-2 border-black bg-white/60 shadow-[6px_6px_0_0_#000] md:shadow-[8px_8px_0_0_#000] p-6 sm:p-7">
            <Box className="flex items-center gap-3 mb-4">
              <Box className="shrink-0 w-10 h-10 flex items-center justify-center border-2 border-black bg-white shadow-[3px_3px_0_0_#000]">
                <Phone style={css('w-4 h-4 text-black')} strokeWidth={2.25} />
              </Box>
              <Box tag="h5" className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em]">
                Secure line
              </Box>
            </Box>
            <Box tag="a"
              href="tel:+19137774443"
              className="text-base sm:text-lg font-extrabold tabular-nums text-foreground underline underline-offset-4 decoration-2 hover:decoration-[5px] hover:text-[var(--brand-yellow)] transition-colors"
            >
              +1 (913) 777-4443
            </Box>
            <Box tag="p" className="mt-2 text-xs sm:text-sm text-muted-foreground">
              Available 24/7
            </Box>
          </Box>

          <Box className="border-2 border-black bg-white/60 shadow-[6px_6px_0_0_#000] md:shadow-[8px_8px_0_0_#000] p-6 sm:p-7">
            <Box className="flex items-center gap-3 mb-4">
              <Box className="shrink-0 w-10 h-10 flex items-center justify-center border-2 border-black bg-white shadow-[3px_3px_0_0_#000]">
                <Mail style={css('w-4 h-4 text-black')} strokeWidth={2.25} />
              </Box>
              <Box tag="h5" className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em]">
                General inquiries
              </Box>
            </Box>
            <Box tag="ul" className="space-y-1.5 text-sm sm:text-base">
              {["info@zoo.industries", "contracts@zoo.industries", "security@zoo.industries"].map((e) => (
                <li key={e}>
                  <Box tag="a"
                    href={`mailto:${e}`}
                    className="font-extrabold text-foreground underline underline-offset-4 decoration-2 hover:decoration-[5px] hover:text-[var(--brand-yellow)] transition-colors"
                  >
                    {e}
                  </Box>
                </li>
              ))}
            </Box>
          </Box>
        </M>
      </Box>
    </Box>
  );
}
