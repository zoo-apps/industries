import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Model API',
  description:
    'One OpenAI-compatible endpoint for 45+ Zen models across text, vision, image, video, audio, code, 3D, and agents. Powered by Zen MoDE routing on the Zoo Network — 25% of compute revenue shared with OSS contributors via Proof of AI.',
  openGraph: {
    title: 'Model API — Zoo Industries',
    description:
      '45+ open-weight Zen models on one OpenAI-compatible API. Edge to frontier — 0.6B → 1T+ params. Apache 2.0, with Proof-of-AI revenue share to contributors.',
    url: 'https://zoo.industries/api',
    siteName: 'Zoo Industries',
    type: 'website',
  },
}

export default function Page() {
  return <PageClient />
}
