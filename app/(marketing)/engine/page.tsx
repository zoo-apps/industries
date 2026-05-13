import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Zoo Engine',
  description:
    'Cloud GPU inference for Zen models — H100s, MI300X, and Trainium pooled across the Zoo Network. Token-priced, latency-targeted, multi-region. The runtime behind every Zoo product.',
  openGraph: {
    title: 'Zoo Engine — Zoo Industries',
    description: 'Cloud GPU inference for Zen — H100s, MI300X, Trainium, pooled and tokenised.',
    url: 'https://zoo.industries/engine',
    siteName: 'Zoo Industries',
    type: 'website',
  },
}

export default function Page() {
  return <PageClient />
}
