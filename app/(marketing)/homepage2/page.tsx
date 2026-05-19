import type { Metadata } from "next";
import PageClient from "./_client";

export const metadata: Metadata = {
  title: "Zoo Industries · Slide Deck (Prototype)",
  description:
    "Slide-deck variant of zoo.industries — investor narrative with the 3D AI-coin network backdrop.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <PageClient />;
}
