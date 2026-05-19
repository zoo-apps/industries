"use client";

import { Reveal } from "@/components/Reveal";

const leaders = [
  { name: "Antje Worring", title: "Chief Executive Officer", image: "/leadership/antje-worring.png" },
  { name: "Zach Kelling", title: "Founding Chief Technology Officer", image: "/leadership/zach-kelling.png" },
  { name: "Dave Lorenzini", title: "Chief Strategy Officer", image: "/leadership/dave-lorenzini.jpg" },
  { name: "Michael Kelling", title: "President", image: "/leadership/michael-kelling.png" },
  { name: "Vincent Butta", title: "Chief Revenue Officer", image: "/leadership/vincent-butta.jpg" },
];

export default function Leadership3() {
  return (
    <section
      className="px-6 sm:px-10 lg:px-16 py-24 sm:py-32 border-t"
      style={{ borderColor: "rgba(26,19,8,0.18)" }}
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div
            className="text-[10px] sm:text-xs uppercase tracking-[0.32em] font-semibold mb-6"
            style={{ color: "rgba(26,19,8,0.55)" }}
          >
            Chapter VI &nbsp;·&nbsp; The Masthead
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-3xl"
            style={{ fontWeight: 500 }}
          >
            The team shipping open AI infrastructure.
          </h2>
        </Reveal>

        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">
          {leaders.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.05}>
              <figure className="text-center">
                <div
                  className="rounded-full w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto overflow-hidden aspect-square border"
                  style={{ borderColor: "rgba(26,19,8,0.35)" }}
                >
                  <img
                    src={l.image}
                    alt={l.name}
                    loading="lazy"
                    className="rounded-full w-full h-full object-cover grayscale"
                  />
                </div>
                <figcaption
                  className="mt-4 sm:mt-5 text-base sm:text-lg tracking-tight"
                  style={{ fontWeight: 500 }}
                >
                  {l.name}
                </figcaption>
                <div
                  className="text-[10px] sm:text-xs italic mt-1"
                  style={{ color: "rgba(26,19,8,0.6)" }}
                >
                  {l.title}
                </div>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p
            className="mt-14 sm:mt-16 text-sm sm:text-base italic"
            style={{ color: "rgba(26,19,8,0.7)" }}
          >
            <a
              href="/team"
              className="rounded underline underline-offset-[6px] decoration-[1.5px]"
              style={{ textDecorationColor: "rgba(26,19,8,0.35)" }}
            >
              The full team is listed in the team directory →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
