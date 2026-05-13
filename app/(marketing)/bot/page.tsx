import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Zoo Bot',
  description:
    'AI team in a box. Spin up specialized agents — research, writing, support, sales, ops — that share memory, tools, and a shared brand voice. Built on Zen models with the Zoo Network revenue share.',
  openGraph: {
    title: 'Zoo Bot — Zoo Industries',
    description: 'AI team in a box: specialised agents that share memory, tools, and voice.',
    url: 'https://zoo.industries/bot',
    siteName: 'Zoo Industries',
    type: 'website',
  },
}

export default function Page() {
  return <PageClient />
}
