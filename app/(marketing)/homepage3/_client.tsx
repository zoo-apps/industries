"use client";

import Masthead3 from "@/components/homepage3/Masthead3";
import Hero3 from "@/components/homepage3/Hero3";
import Opportunity3 from "@/components/homepage3/Opportunity3";
import Path3 from "@/components/homepage3/Path3";
import Comparables3 from "@/components/homepage3/Comparables3";
import Stack3 from "@/components/homepage3/Stack3";
import Foundation3 from "@/components/homepage3/Foundation3";
import Leadership3 from "@/components/homepage3/Leadership3";
import Traction3 from "@/components/homepage3/Traction3";
import Access3 from "@/components/homepage3/Access3";
import Colophon3 from "@/components/homepage3/Colophon3";

/**
 * /homepage3 — "The Quarterly".
 *
 * Trusted-institution editorial layout. Aesthetic references: Bloomberg
 * print spreads, Stripe Atlas, BlackRock investor decks, Council on
 * Foreign Relations long-reads. The page is paginated as if it were an
 * annual report — masthead with volume/issue, ornamental dividers,
 * tabular figures, drop caps on the lead, a colophon at the foot.
 *
 * Type system: serif (Times / Tiempos fallback) across display *and*
 * body. Sans only on labels and tabular numerals.
 *
 * Palette: cream paper ``#f5efe0``, ink ``#1a1308``, single wax-seal
 * accent ``#7a2e2e``. Hairlines at ``rgba(26,19,8,0.18)``.
 */
export default function PageClient() {
  return (
    <main
      className="antialiased"
      style={{
        backgroundColor: "#f5efe0",
        color: "#1a1308",
        minHeight: "100vh",
        fontFamily:
          '"Times New Roman", "Tiempos Text", Georgia, "Iowan Old Style", serif',
      }}
    >
      <Masthead3 />
      <Hero3 />
      <Opportunity3 />
      <Path3 />
      <Comparables3 />
      <Stack3 />
      <Foundation3 />
      <Leadership3 />
      <Traction3 />
      <Access3 />
      <Colophon3 />
    </main>
  );
}
