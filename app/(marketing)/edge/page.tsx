import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Zoo Edge',
  description:
    'Zen models on the device. zen-nano on a phone, zen-eco on a Mac, zen-coder in your IDE — fully offline, fully private, with optional cloud fall-through.',
  openGraph: {
    title: 'Zoo Edge — Zoo Industries',
    description: 'On-device Zen — phone, laptop, watch. Offline, private, cloud-optional.',
    url: 'https://zoo.industries/edge',
    siteName: 'Zoo Industries',
    type: 'website',
  },
}

export default function Page() {
  return <PageClient />
}
