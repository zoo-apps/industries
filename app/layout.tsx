import type { Metadata, Viewport } from 'next'
import { Hanzo } from '@hanzo/ui'
import { ThemeProvider } from '@/components/ThemeProvider'
import site from '@/site.config'
// Zen — the one family, sans and mono. @hanzo/design ships both variable faces
// and declares their @font-face, so this site loads no font itself and nothing
// has to be attached to <html>. globals.css names the family once, in @theme.
import '@hanzo/design/tokens/fonts.css'
import './globals.css'

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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        {/* Light-only — the brutalist iridescent palette isn't designed
            for dark backgrounds; ``enableSystem`` was flipping anyone
            whose OS is in dark mode to ``--background: #0a0a0a``, which
            turned the navbar (``bg-background/85``) into a black bar
            over the gradient body. */}
        {/* The root every @hanzo/ui component reads its config from. Without it
            a prerender throws `Missing theme.` from inside gui — a message that
            names neither the component nor the missing provider. `light` here
            for the same reason ThemeProvider forces it below. */}
        <Hanzo theme="light">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            forcedTheme="light"
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </Hanzo>
        {/* Zoo Analytics — privacy-first, respects DNT, no cookies */}
        <script defer src={site.analytics.scriptUrl} data-website-id={site.analytics.siteId} data-do-not-track="true" data-exclude-search="true" />
      </body>
    </html>
  )
}
