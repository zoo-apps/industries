"use client";

/**
 * Decorative SVG network — nodes + edges pulsing softly. Reads as a
 * decentralized AI graph without being literal. Everything animates on
 * the compositor (``opacity`` and ``transform: scale``) so it's GPU-only
 * even with 25-ish nodes onscreen.
 *
 * Honours ``prefers-reduced-motion`` via a media query in the inline
 * keyframes: animations short-circuit to ``none`` and the graph is
 * displayed as a static composition.
 *
 * The graph is built once (deterministic positions seeded at module
 * scope) so it never reflows on re-render. ``viewBox`` keeps it sharp
 * at every viewport — placed as a full-bleed background behind the
 * hero content.
 */

// 24 nodes in a slightly off-grid layout — viewBox 1000×700 so it
// matches a typical hero aspect ratio and scales cleanly. Coordinates
// are hand-picked so the constellation reads as organic, not gridded.
const NODES: Array<{ x: number; y: number; r: number; delay: number }> = [
  { x: 70,  y: 110, r: 4,   delay: 0.0 },
  { x: 180, y: 60,  r: 3,   delay: 0.4 },
  { x: 310, y: 140, r: 5,   delay: 0.9 },
  { x: 420, y: 80,  r: 3,   delay: 1.4 },
  { x: 540, y: 130, r: 4,   delay: 1.8 },
  { x: 660, y: 70,  r: 3.5, delay: 2.3 },
  { x: 780, y: 130, r: 4,   delay: 0.6 },
  { x: 900, y: 90,  r: 3,   delay: 1.0 },
  { x: 120, y: 260, r: 3.5, delay: 1.2 },
  { x: 250, y: 320, r: 4,   delay: 0.2 },
  { x: 390, y: 250, r: 5,   delay: 2.1 },
  { x: 520, y: 310, r: 3.5, delay: 1.5 },
  { x: 650, y: 240, r: 4,   delay: 0.8 },
  { x: 790, y: 290, r: 3,   delay: 1.7 },
  { x: 920, y: 250, r: 4.5, delay: 0.5 },
  { x: 60,  y: 420, r: 3,   delay: 1.9 },
  { x: 190, y: 480, r: 4,   delay: 0.3 },
  { x: 330, y: 410, r: 3.5, delay: 1.3 },
  { x: 470, y: 470, r: 4.5, delay: 2.0 },
  { x: 600, y: 410, r: 3,   delay: 0.7 },
  { x: 730, y: 470, r: 4,   delay: 1.6 },
  { x: 870, y: 430, r: 3.5, delay: 1.1 },
  { x: 130, y: 600, r: 3,   delay: 2.2 },
  { x: 500, y: 620, r: 5,   delay: 0.0 },
];

// Edges connect each node to ~2 nearest neighbours, hand-picked so the
// graph reads as a network not a soup. Indexed into NODES.
const EDGES: Array<[number, number]> = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7],
  [0, 8], [1, 9], [2, 10], [3, 11], [4, 12], [5, 13], [6, 14], [7, 14],
  [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14],
  [8, 15], [9, 16], [10, 17], [11, 18], [12, 19], [13, 20], [14, 21],
  [15, 16], [16, 17], [17, 18], [18, 19], [19, 20], [20, 21],
  [16, 22], [18, 23], [19, 23],
];

// Each brand colour cycles across nodes so the constellation reads
// "open AI network" not "single product".
const NODE_COLORS = [
  "var(--brand-yellow)",
  "var(--brand-green)",
  "var(--brand-cyan)",
  "var(--brand-blue)",
  "var(--brand-magenta)",
];

export default function NetworkAnimation() {
  return (
    <>
      <style jsx>{`
        .net-edge {
          stroke: #000;
          stroke-width: 1;
          opacity: 0.12;
          animation: edge-pulse 6s ease-in-out infinite;
        }
        .net-node {
          transform-origin: center;
          transform-box: fill-box;
          animation: node-pulse 4s ease-in-out infinite;
        }
        @keyframes edge-pulse {
          0%, 100% { opacity: 0.08; }
          50%      { opacity: 0.22; }
        }
        @keyframes node-pulse {
          0%, 100% { transform: scale(1);   opacity: 0.55; }
          50%      { transform: scale(1.4); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .net-edge, .net-node {
            animation: none;
          }
        }
      `}</style>
      <svg
        viewBox="0 0 1000 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
      >
        {EDGES.map(([a, b], i) => {
          const A = NODES[a];
          const B = NODES[b];
          return (
            <line
              key={`e${i}`}
              x1={A.x}
              y1={A.y}
              x2={B.x}
              y2={B.y}
              className="net-edge"
              style={{ animationDelay: `${(i % 7) * 0.5}s` }}
            />
          );
        })}
        {NODES.map((n, i) => (
          <circle
            key={`n${i}`}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={NODE_COLORS[i % NODE_COLORS.length]}
            stroke="#000"
            strokeWidth="1"
            className="net-node"
            style={{ animationDelay: `${n.delay}s` }}
          />
        ))}
      </svg>
    </>
  );
}
