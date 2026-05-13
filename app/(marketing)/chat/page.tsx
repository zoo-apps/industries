import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Zoo Chat',
  description:
    'One chat interface for every Zen model — text, vision, image, audio, code — with workspaces, shared bots, and on-chain billing. Local-first, end-to-end encrypted.',
  openGraph: {
    title: 'Zoo Chat — Zoo Industries',
    description: 'One chat for every Zen model. Workspaces, shared bots, E2E encrypted.',
    url: 'https://zoo.industries/chat',
    siteName: 'Zoo Industries',
    type: 'website',
  },
}

export default function Page() {
  return <PageClient />
}
