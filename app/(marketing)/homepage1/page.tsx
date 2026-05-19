import type { Metadata } from "next";
import PageClient from "./_client";

export const metadata: Metadata = {
  title: "Zoo Industries · Classic (Backup)",
  description:
    "Backup of the previous Zoo Industries home composition — Hero, Ecosystem, ZooLabsNarrative, ServicesOverview, ResearchHighlights, Leadership, TrustedBy, Contact.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <PageClient />;
}
