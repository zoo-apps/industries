import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Zoo Dev',
  description:
    'AI coding agent that lives in your repo. Reads the whole tree, runs your tests, opens PRs against rules you actually wrote — not a snippet predictor, an engineer.',
  openGraph: {
    title: 'Zoo Dev — Zoo Industries',
    description: 'AI engineer in your repo. Whole-tree context, real test runs, real PRs.',
    url: 'https://zoo.industries/dev',
    siteName: 'Zoo Industries',
    type: 'website',
  },
}

export default function Page() {
  return <PageClient />
}
