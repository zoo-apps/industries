"use client";

import { Box } from '@hanzo/ui'
import { M } from '@/components/motion'
import { motion } from "framer-motion";

export default function Leadership() {
  const leaders = [
    {
      name: "Antje Worring",
      title: "Chief Executive Officer",
      bio: "Sets company vision and strategy across Zoo's research, product, and operations. Drives execution and organizational effectiveness end to end.",
      image: "/leadership/antje-worring.png"
    },
    {
      name: "Zach Kelling",
      title: "Founding CTO",
      bio: "Technical founder driving Zoo's mission to build frontier AI. Leads architecture, product vision, and technical strategy across the full stack.",
      image: "/leadership/zach-kelling.png"
    },
    {
      name: "Dave Lorenzini",
      title: "Chief Strategy Officer",
      bio: "Strategy visionary with decades of experience in immersive computing and AI. Leads strategic planning, partnerships, and long-term company direction.",
      image: "/leadership/dave-lorenzini.jpg"
    },
    {
      name: "Michael Kelling",
      title: "President",
      bio: "Strategic operations leader overseeing commercial expansion and enterprise partnerships. Expert in scaling AI solutions for global impact.",
      image: "/leadership/michael-kelling.png"
    },
    {
      name: "Vincent Butta",
      title: "Chief Revenue Officer",
      bio: "Driving revenue growth and commercial strategy. Expert in scaling enterprise sales and building high-performance go-to-market organizations.",
      image: "/leadership/vincent-butta.jpg"
    },
    {
      name: 'Major "Dream" Williams',
      title: "Chief Visionary Officer",
      bio: "Visionary leader with diverse talents in finance, entrepreneurship, and technology. Inspires and collaborates with international thought leaders to transform challenges into opportunities.",
      image: "/leadership/major-williams.png"
    },
    {
      name: "Danielle Savage",
      title: "Chief Brand Officer",
      bio: "Brand visionary elevating Zoo's global presence and market positioning. Expert in creating compelling brand narratives and customer experiences.",
      image: "/leadership/danielle-savage.png"
    },
    {
      name: "Anastasia Zacharaoff",
      title: "VP Engineering",
      bio: "Engineering leader driving technical excellence and innovation. Expert in building high-performing engineering teams and scalable systems.",
      image: "/leadership/anastasia-zacharaoff.png"
    },
    {
      name: "Rob Ruiz",
      title: "VP Strategy",
      bio: "Strategic planning expert developing business intelligence and growth initiatives. Focused on market analysis and strategic partnerships.",
      image: "/leadership/rob-ruiz.png"
    },
    {
      name: "Ole Brereton",
      title: "Executive VP",
      bio: "Senior executive driving strategic initiatives and high-impact partnerships across the organization.",
      image: "/leadership/ole-brereton.png"
    }
  ];

  return (
    <Box tag="section" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <Box className="max-w-6xl mx-auto space-y-12 sm:space-y-16">

        {/* ─── Header — eyebrow with scroll-draw underline + big title ─── */}
        <M
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <Box tag="h3" className="relative inline-block text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-foreground mb-6 sm:mb-8">
            Leadership team
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
            Deep AI expertise, operational excellence.
          </Box>
          <Box tag="p" className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Driving innovation in frontier AI research while staying focused on
            safety and alignment.
          </Box>
        </M>

        {/* ─── Leader cards — brutalist panels ──────────────────────── */}
        <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {leaders.map((leader, i) => (
            <M
              key={leader.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 + i * 0.05 }}
              className="border-2 border-black bg-white/60 shadow-[6px_6px_0_0_#000] md:shadow-[8px_8px_0_0_#000] p-5 sm:p-6 md:p-7 flex flex-col"
            >
              {/* Avatar disc. ``rounded-full`` survives the brutalist
                  global radius reset because it's explicitly listed in
                  the ``:not(.rounded-full)`` exemption. */}
              <Box className="w-24 h-24 sm:w-28 sm:h-28 mx-auto aspect-square overflow-hidden rounded-full border-2 border-black mb-4">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover grayscale rounded-full"
                />
              </Box>
              <Box tag="h4" className="text-sm sm:text-base font-extrabold uppercase tracking-tight text-foreground text-center leading-tight">
                {leader.name}
              </Box>
              <Box tag="p" className="mt-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.15em] text-muted-foreground text-center">
                {leader.title}
              </Box>
              <Box tag="p" className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed text-center">
                {leader.bio}
              </Box>
            </M>
          ))}
        </Box>

        {/* ─── Stats row — three brutalist tiles ────────────────────── */}
        <M
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
        >
          {[
            { v: "2,500+", l: "OSS Projects" },
            { v: "130+",   l: "Research Papers" },
            { v: "100+",   l: "AI Model Weights" },
          ].map((s) => (
            <Box
              key={s.l}
              className="border-2 border-black bg-white/60 shadow-[6px_6px_0_0_#000] md:shadow-[8px_8px_0_0_#000] p-6 sm:p-7 md:p-8 text-center"
            >
              <Box className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-none">
                {s.v}
              </Box>
              <Box className="mt-3 text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-muted-foreground">
                {s.l}
              </Box>
            </Box>
          ))}
        </M>
      </Box>
    </Box>
  );
}
