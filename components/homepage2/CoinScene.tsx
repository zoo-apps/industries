"use client";

/**
 * Blurred 3D coin-network backdrop.
 *
 * Each AI model / family is a "coin" floating in CSS-3D perspective —
 * a circular disc with a brand-coloured radial gradient and an embossed
 * label. Coins float on independent translateZ + rotateY loops so the
 * scene never settles into a static composition. Hairline SVG edges
 * connect them into a network that suggests zoo.network's mesh.
 *
 * The whole container is ``filter: blur(...)`` + low opacity so the
 * coins read as atmospheric depth, not foreground content. Foreground
 * hero text in front stays razor-sharp because the blur is scoped to
 * this container only.
 *
 * Everything animates on the compositor — ``transform`` and
 * ``opacity`` only. ``prefers-reduced-motion`` short-circuits the
 * float / spin keyframes so motion-sensitive visitors get a static
 * blurred composition.
 */

// Coin roster: Zen5 family — Nano (edge), Eco (4B), Pro (8B), Max
// (1T+ frontier), Coder, plus product spokes (Network, Cloud, Bot)
// so the graph reads as the full zoo.network of AI, not one model
// line. Branded entirely under the Zoo / Zen umbrella.
const COINS: Array<{
  label: string;
  sub: string;
  // Position as percentages of the scene viewport.
  x: number;
  y: number;
  // Z depth in pixels (positive = closer to viewer).
  z: number;
  // Coin diameter in px.
  size: number;
  // CSS colour stop — uses brand-* vars.
  color: string;
  // Float keyframe alias.
  floatKey: 1 | 2 | 3;
  // Stagger offset (seconds).
  delay: number;
}> = [
  { label: "ZEN5",  sub: "FLAGSHIP",  x: 50, y: 38, z:   30, size: 220, color: "var(--brand-yellow)",  floatKey: 1, delay: 0.0 },
  { label: "PRO",   sub: "ZEN5",      x: 18, y: 30, z:  -60, size: 160, color: "var(--brand-magenta)", floatKey: 2, delay: 0.6 },
  { label: "ECO",   sub: "ZEN5",      x: 82, y: 30, z:  -40, size: 150, color: "var(--brand-green)",   floatKey: 3, delay: 1.1 },
  { label: "NANO",  sub: "ZEN5",      x: 10, y: 68, z:  -80, size: 130, color: "var(--brand-cyan)",    floatKey: 1, delay: 1.6 },
  { label: "MAX",   sub: "ZEN5",      x: 90, y: 70, z:  -50, size: 140, color: "var(--brand-blue)",    floatKey: 2, delay: 2.0 },
  { label: "CODER", sub: "ZEN5",      x: 32, y: 75, z:  -30, size: 130, color: "var(--brand-red)",     floatKey: 3, delay: 0.3 },
  { label: "NETWORK", sub: "ZOO",   x: 68, y: 78, z: -100, size: 120, color: "var(--brand-blue)",    floatKey: 1, delay: 1.3 },
  { label: "CLOUD",   sub: "ZOO",   x: 50, y: 85, z:  -90, size: 110, color: "var(--brand-cyan)",    floatKey: 2, delay: 0.9 },
];

// Edges between coins (network mesh). Indexed into COINS.
const EDGES: Array<[number, number]> = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7],
  [1, 3], [1, 5], [2, 4], [2, 6], [3, 5], [4, 6], [5, 7], [6, 7],
];

const COIN_CSS = `
.coin-scene {
  perspective: 1400px;
  perspective-origin: 50% 40%;
  transform-style: preserve-3d;
  /* Light blur only — heavy blur turns circles into soft squares,
     which is the visual artefact the brief was trying to avoid. */
  filter: blur(4px);
  opacity: 0.95;
}
.coin {
  transform-style: preserve-3d;
  will-change: transform;
}
/* Single-layer coin disc: radius-clipped circle with a metallic
   radial gradient + inset highlights/shadows that imply 3D. No outer
   rim ring (which renders as a square halo when blurred). */
.coin-disc {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  border: 2px solid rgba(0,0,0,0.6);
  box-shadow:
    0 18px 36px -10px rgba(0,0,0,0.35),
    inset 0 12px 28px rgba(255,255,255,0.55),
    inset 0 -14px 28px rgba(0,0,0,0.32);
}
.coin-hi {
  position: absolute;
  top: 8%;
  left: 12%;
  width: 38%;
  height: 28%;
  border-radius: 9999px;
  background: radial-gradient(ellipse at 30% 30%,
              rgba(255,255,255,0.7) 0%,
              rgba(255,255,255,0)  70%);
  filter: blur(2px);
  pointer-events: none;
}
.coin-label {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  font-weight: 900;
  text-shadow: 0 1px 0 rgba(255,255,255,0.4);
}
.coin-label .coin-name {
  font-size: 1.6em;
  letter-spacing: 0.02em;
  line-height: 1;
}
.coin-label .coin-sub {
  margin-top: 0.35em;
  font-size: 0.55em;
  letter-spacing: 0.22em;
  opacity: 0.7;
}
@keyframes coin-float-1 {
  0%,100% { transform: translateZ(0)    rotateY(0deg); }
  50%     { transform: translateZ(40px) rotateY(20deg); }
}
@keyframes coin-float-2 {
  0%,100% { transform: translateZ(0)     rotateY(0deg)   rotateX(0deg); }
  50%     { transform: translateZ(-30px) rotateY(-25deg) rotateX(8deg); }
}
@keyframes coin-float-3 {
  0%,100% { transform: translateZ(0)     rotateY(0deg); }
  33%     { transform: translateZ(25px)  rotateY(15deg); }
  66%     { transform: translateZ(-20px) rotateY(-10deg); }
}
@keyframes edge-pulse-3d {
  0%,100% { opacity: 0.10; }
  50%     { opacity: 0.25; }
}
@media (prefers-reduced-motion: reduce) {
  .coin       { animation: none !important; }
  .net-edge3d { animation: none !important; }
}
`;

export default function CoinScene() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: COIN_CSS }} />

      <div className="coin-scene absolute inset-0 overflow-hidden pointer-events-none select-none">
        {/* Edges layer — SVG positioned absolutely behind the coins. */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
          className="absolute inset-0 w-full h-full"
        >
          {EDGES.map(([a, b], i) => {
            const A = COINS[a];
            const B = COINS[b];
            return (
              <line
                key={`e${i}`}
                className="net-edge3d"
                x1={A.x}
                y1={A.y}
                x2={B.x}
                y2={B.y}
                stroke="#000"
                strokeWidth="0.15"
                style={{
                  animation: `edge-pulse-3d 6s ease-in-out infinite`,
                  animationDelay: `${(i % 5) * 0.7}s`,
                }}
              />
            );
          })}
        </svg>

        {/* Coins layer */}
        {COINS.map((c, i) => (
          <div
            key={c.label + i}
            className="coin absolute"
            style={{
              left: `${c.x}%`,
              top: `${c.y}%`,
              width: c.size,
              height: c.size,
              transform: `translate3d(-50%, -50%, ${c.z}px)`,
              animation: `coin-float-${c.floatKey} ${
                10 + i * 0.6
              }s ease-in-out infinite`,
              animationDelay: `${c.delay}s`,
            }}
          >
            {/* ``data-circle`` exempts these from the global brutalist
                ``border-radius: 0 !important`` reset in globals.css —
                without it the discs render as squares regardless of the
                inline ``9999px`` rule. */}
            <div
              data-circle
              className="coin-disc"
              style={{
                background: `radial-gradient(circle at 32% 30%, color-mix(in oklab, ${c.color} 80%, #fff 20%) 0%, ${c.color} 40%, color-mix(in oklab, ${c.color} 65%, #000 0%) 75%, color-mix(in oklab, ${c.color} 40%, #000 35%) 100%)`,
              }}
            />
            <div data-circle className="coin-hi" />
            <div className="coin-label">
              <span className="coin-name">{c.label}</span>
              <span className="coin-sub">{c.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
