import type { Metadata } from "next";
import PageClient from "./_client";

export const metadata: Metadata = {
  title: "Zoo Industries · Quarterly (Prototype)",
  description:
    "Trusted-institution editorial of zoo.industries. The open AI economy, in print form.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <PageClient />;
}
