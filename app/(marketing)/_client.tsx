'use client'

import dynamic from 'next/dynamic'
import { Toaster, TooltipProvider } from '@hanzo/ui'
import Navbar from '@/components/Navbar'
import TopBanner from '@/components/TopBanner'
import Footer from '@/components/Footer'

const GlobalChatWidget = dynamic(() => import('@/components/GlobalChatWidget'), { ssr: false })

export default function MarketingShell({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TooltipProvider delay={700}>
      <Toaster />
      <div className="min-h-screen bg-background text-foreground">
        <TopBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <GlobalChatWidget />
      </div>
    </TooltipProvider>
  )
}
