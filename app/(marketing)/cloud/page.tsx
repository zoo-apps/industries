import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Zoo Cloud',
  description:
    'The full Zoo platform — Zen models, GPU inference, agent runtime, identity, storage, and on-chain billing — composed under one workspace. The product behind every Zoo Industries deployment.',
  openGraph: {
    title: 'Zoo Cloud — Zoo Industries',
    description: 'The Zoo platform: models + Engine + agents + identity + on-chain billing.',
    url: 'https://zoo.industries/cloud',
    siteName: 'Zoo Industries',
    type: 'website',
  },
}

export default function Page() {
  return <PageClient />
}
