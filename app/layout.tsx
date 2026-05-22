import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import site from '@/site.config'
import './globals.css'

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const mono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(site.brand.url),
  title: {
    template: site.seo.titleTemplate,
    default: site.seo.defaultTitle,
  },
  description: site.brand.description,
  openGraph: {
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: site.seo.defaultTitle }],
    siteName: site.brand.tagline,
    type: 'website',
    url: site.brand.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.brand.name,
    description: site.brand.description,
    images: ['/opengraph-image'],
  },
  icons: { icon: site.seo.faviconPath },
}

export const viewport: Viewport = {
  themeColor: site.seo.themeColor,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        {/* Light-only — the brutalist iridescent palette isn't designed
            for dark backgrounds; ``enableSystem`` was flipping anyone
            whose OS is in dark mode to ``--background: #0a0a0a``, which
            turned the navbar (``bg-background/85``) into a black bar
            over the gradient body. */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* Zoo Analytics — privacy-first, respects DNT, no cookies */}
        <script defer src={site.analytics.scriptUrl} data-website-id={site.analytics.siteId} data-do-not-track="true" data-exclude-search="true" />
      </body>
    </html>
  )
}
