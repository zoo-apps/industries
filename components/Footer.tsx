'use client'

import { Box } from '@hanzo/ui'
import Link from 'next/link'
import { Check, Github, FileText, Award, ExternalLink } from 'lucide-react'
import Logo from './Logo'
import { cn } from '@/lib/utils'
import site from '@/site.config'

const linkCn = 'text-sm transition-colors text-muted-foreground hover:text-foreground'

export default function Footer() {
  return (
    <Box tag="footer" className="border-t border-border bg-background text-foreground">
      <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Box className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <Box className="md:col-span-2">
            <Logo size="md" showText={true} className="mb-6" />
            <Box tag="p" className="mb-6 max-w-md text-muted-foreground">
              {site.brand.description}
            </Box>
            <Box className="flex items-center space-x-6">
              <Link href="/open-source" className="flex items-center space-x-2 group">
                <Github className="h-5 w-5 transition-colors text-muted-foreground group-hover:text-foreground" />
                <Box tag="span" className="text-sm transition-colors text-muted-foreground group-hover:text-foreground">Open Source</Box>
              </Link>
              <Link href="/research#papers" className="flex items-center space-x-2 group">
                <FileText className="h-5 w-5 transition-colors text-muted-foreground group-hover:text-foreground" />
                <Box tag="span" className="text-sm transition-colors text-muted-foreground group-hover:text-foreground">130+ Papers</Box>
              </Link>
            </Box>
          </Box>

          <div>
            <Box tag="h4" className="font-semibold mb-4">Products</Box>
            <Box tag="ul" className="space-y-3">
              <li><Box tag="a" href={site.links.platform} target="_blank" rel="noopener noreferrer" className={linkCn}>Zoo Industries</Box></li>
              <li><Box tag="a" href={site.links.bot} target="_blank" rel="noopener noreferrer" className={linkCn}>Zoo Bot</Box></li>
              <li><Box tag="a" href={site.links.dev} target="_blank" rel="noopener noreferrer" className={linkCn}>Zoo Dev</Box></li>
              <li><Box tag="a" href={site.links.team} target="_blank" rel="noopener noreferrer" className={linkCn}>Zoo Team</Box></li>
              <li><Box tag="a" href={site.links.chat} target="_blank" rel="noopener noreferrer" className={linkCn}>Zoo Chat</Box></li>
              <li><Link href="/models" className={linkCn}>Zen Models</Link></li>
            </Box>
          </div>

          <div>
            <Box tag="h4" className="font-semibold mb-4">Research</Box>
            <Box tag="ul" className="space-y-3">
              <li><Link href="/models" className={linkCn}>AI & Machine Learning</Link></li>
              <li><Box tag="a" href="https://papers.zoo.ngo" target="_blank" rel="noopener noreferrer" className={linkCn}>Cryptography</Box></li>
              <li><Box tag="a" href={site.links.network} target="_blank" rel="noopener noreferrer" className={linkCn}>Consensus & Networks</Box></li>
              <li><Box tag="a" href="https://papers.zoo.ngo" target="_blank" rel="noopener noreferrer" className={linkCn}>Papers</Box></li>
            </Box>
          </div>

          <div>
            <Box tag="h4" className="font-semibold mb-4">Company</Box>
            <Box tag="ul" className="space-y-3">
              <li><Link href="/about" className={linkCn}>About Us</Link></li>
              <li><Link href="/team" className={linkCn}>Team</Link></li>
              <li><Link href="/careers" className={linkCn}>Careers</Link></li>
              <li><Link href="/press" className={linkCn}>Press</Link></li>
              <li><Link href="/contact" className={linkCn}>Contact</Link></li>
            </Box>
          </div>
        </Box>

        {/* Powered by Zen banner */}
        <Box className="mt-12 pt-8 border-t border-border">
          <Box className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <Box tag="span" className="text-sm text-foreground/30">Powered by</Box>
            <Box tag="a" href={site.links.zenModels} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border transition-colors border-border bg-foreground/5 hover:bg-accent text-muted-foreground hover:text-foreground"
            >
              <Box tag="span" className="text-muted-foreground text-sm">&#9889;</Box>
              <Box tag="span" className="text-sm font-medium">Zen 5 Models</Box>
              <Box tag="span" className="text-xs text-muted-foreground">600M-1T+ params</Box>
            </Box>
          </Box>
        </Box>

        <Box className="pt-6 border-t border-border">
          <Box className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <Box className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <Box className="text-sm text-muted-foreground">
                &copy; {site.brand.foundedYear}-{new Date().getFullYear()} {site.brand.legalName}. All rights reserved.
              </Box>
              <Link href="/status" className="inline-flex items-center space-x-2 text-sm transition-colors text-muted-foreground hover:text-foreground">
                <Check className="h-4 w-4 text-muted-foreground" />
                <span>All systems operational</span>
              </Link>
            </Box>
            <Box className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Box className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-muted-foreground" />
                <Box tag="span" className="text-sm text-muted-foreground">{site.brand.badge}</Box>
              </Box>
              <Link href="/privacy" className={linkCn}>Privacy Policy</Link>
              <Link href="/terms" className={linkCn}>Terms of Service</Link>
              <Link href="/security" className={linkCn}>Security</Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
