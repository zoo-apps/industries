"use client";

import { Reveal } from "@/components/Reveal";

/**
 * Slide — Leadership. Five leaders maximum (5±3 cognitive load).
 * Pulls the C-suite from the full team list; the rest live on /team.
 * Avatars are circle-cropped via ``rounded-full`` (escapes the global
 * brutalist reset because the utility class matches the exception).
 */

const leaders = [
  {
    name: "Antje Worring",
    title: "CEO",
    image: "/leadership/antje-worring.png",
  },
  {
    name: "Zach Kelling",
    title: "Founding CTO",
    image: "/leadership/zach-kelling.png",
  },
  {
    name: "Dave Lorenzini",
    title: "Chief Strategy Officer",
    image: "/leadership/dave-lorenzini.jpg",
  },
  {
    name: "Michael Kelling",
    title: "President",
    image: "/leadership/michael-kelling.png",
  },
  {
    name: "Vincent Butta",
    title: "Chief Revenue Officer",
    image: "/leadership/vincent-butta.jpg",
  },
];

export default function LeadershipSlide() {
  return (
    <section
      data-slide
      className="min-h-[100svh] flex items-center snap-start py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "color-mix(in oklab, var(--brand-cyan) 12%, transparent)",
      }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <Reveal>
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Leadership
          </h2>
          <p className="mt-4 text-center text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A team that's been shipping open-source AI infrastructure since
            before it was fashionable.{" "}
            <a
              href="/team"
              className="underline underline-offset-4 hover:no-underline font-semibold"
            >
              See the full team →
            </a>
          </p>
        </Reveal>

        <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {leaders.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.06} className="h-full">
              <div className="text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto overflow-hidden rounded-full aspect-square border border-black transform-gpu">
                  <img
                    src={l.image}
                    alt={l.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale rounded-full"
                  />
                </div>
                <div className="mt-3 sm:mt-4 text-sm sm:text-base font-bold tracking-tight">
                  {l.name}
                </div>
                <div className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">
                  {l.title}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
