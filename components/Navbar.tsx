'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { M } from '@/components/motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Box, Button, css, sx } from '@hanzo/ui'
import { ChevronDown, ExternalLink, Menu, X, Bot, Code2, Cloud, Cpu, MessageSquare, BookOpen, Microscope, Brain, Shield, Network, Boxes, FlaskConical, FileText, Github, Sparkles, Video, Box as BoxIcon, Zap, Server, Smartphone, type LucideIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import NavbarContainer from './navigation/NavbarContainer'
import Logo from './Logo'
import { cn } from '@/lib/utils'
import site from '@/site.config'

const zenModels = [
  { name: 'zen-eco', params: '4B', description: 'Fast general-purpose LLM', icon: Brain, href: 'https://huggingface.co/zenlm/zen-eco-4b-instruct' },
  { name: 'zen-omni', params: '8B', description: 'Multimodal vision + audio', icon: Sparkles, href: 'https://huggingface.co/zenlm/zen-omni-8b' },
  { name: 'zen-director', params: '5B', description: 'Text-to-video generation', icon: Video, href: 'https://huggingface.co/zenlm/zen-director-5b' },
  { name: 'zen-3d', params: '3.3B', description: '3D asset generation', icon: BoxIcon, href: 'https://huggingface.co/zenlm/zen-3d' },
]

const quickAccess = [
  { label: 'Zoo Dev', desc: 'AI coding agent', href: site.links.dev, external: true },
  { label: 'Zoo Bot', desc: 'AI team in a box', href: site.links.bot, external: true },
  { label: 'Zoo Team', desc: 'Work with Zoo engineers', href: site.links.team, external: true },
  { label: 'All Zen Models', desc: '600M-1T+ parameters', href: '/models', external: false },
]

const loginItems = [
  { label: 'Zoo Industries', href: site.links.platform, external: true },
  { label: 'Zoo Chat', href: site.links.chat, external: true },
  { label: 'Zoo Bot', href: site.links.botApp, external: true },
]

function TryZooDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const router = useRouter()

  const clearTimeoutRef = useCallback(() => {
    if (timeoutRef.current) { clearTimeout(timeoutRef.current); timeoutRef.current = null }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setIsOpen(false)
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <Box className="relative" ref={menuRef}
      onMouseEnter={() => { clearTimeoutRef(); setIsOpen(true) }}
      onMouseLeave={() => { clearTimeoutRef(); timeoutRef.current = setTimeout(() => setIsOpen(false), 800) }}
    >
      <Box tag="button" onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'btn-brutalist pill-pink text-sm py-2 px-4',
          isOpen && 'translate-x-[2px] translate-y-[2px] shadow-[6px_6px_0_0_#000]'
        )}
      >
        Try Zen
        <ChevronDown style={css(cn('w-4 h-4 transition-transform duration-200', isOpen && 'rotate-180'))} />
      </Box>

      <AnimatePresence>
        {isOpen && (
          <M
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            className="absolute right-0 top-full w-[420px] max-w-[calc(100vw-2rem)] z-50"
          >
            <Box aria-hidden className="h-5" />
            <Box className="backdrop-blur-xl border rounded-2xl shadow-2xl overflow-hidden bg-white border-border shadow-background/50">
              {/* Zen AI Models */}
              <Box className="p-4">
                <Box className="flex items-center justify-between mb-3">
                  <Box className="flex items-center gap-2">
                    <Brain style={css('w-4 h-4 text-muted-foreground')} />
                    <Box tag="span" className="text-xs font-semibold uppercase tracking-wider text-foreground">Zen AI Models</Box>
                  </Box>
                  <Box tag="button" onClick={() => { setIsOpen(false); router.push('/models') }}
                    className="text-xs transition-colors text-muted-foreground hover:text-foreground">
                    View all &rarr;
                  </Box>
                </Box>
                <Box className="grid grid-cols-2 gap-2">
                  {zenModels.map((model) => {
                    const ModelIcon = model.icon
                    return (
                      <Box tag="a" key={model.name} href={model.href} target="_blank" rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="group flex items-start gap-3 p-3 rounded-xl transition-colors bg-foreground/5 hover:bg-accent"
                      >
                        <Box className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-foreground/10">
                          <Box tag="span" className="w-4 h-4 text-muted-foreground group-hover:text-foreground grid">
                            <ModelIcon style={css('w-full h-full')} />
                          </Box>
                        </Box>
                        <Box className="min-w-0">
                          <Box className="flex items-center gap-2">
                            <Box tag="span" className="text-sm font-medium text-foreground">{model.name}</Box>
                            <Box tag="span" className="text-[10px] font-mono text-muted-foreground">{model.params}</Box>
                          </Box>
                          <Box tag="p" className="text-xs truncate text-muted-foreground">{model.description}</Box>
                        </Box>
                      </Box>
                    )
                  })}
                </Box>
              </Box>

              <Box className="border-t border-border" />

              {/* Quick Access */}
              <Box className="py-2">
                <Box className="px-4 py-1.5">
                  <Box tag="span" className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Quick Access</Box>
                </Box>
                {quickAccess.map((item) =>
                  item.external ? (
                    <Box tag="a" key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between w-full py-2 px-4 transition-colors text-foreground hover:bg-accent"
                    >
                      <div>
                        <Box tag="span" className="text-sm">{item.label}</Box>
                        {item.desc && <Box tag="span" className="text-xs ml-2 text-foreground/30">{item.desc}</Box>}
                      </div>
                      <ExternalLink style={css('w-3.5 h-3.5 text-foreground/30')} />
                    </Box>
                  ) : (
                    <Box tag="button" key={item.label}
                      onClick={() => { setIsOpen(false); router.push(item.href) }}
                      className="flex items-center justify-between w-full py-2 px-4 text-left transition-colors text-foreground hover:bg-accent"
                    >
                      <div>
                        <Box tag="span" className="text-sm">{item.label}</Box>
                        {item.desc && <Box tag="span" className="text-xs ml-2 text-foreground/30">{item.desc}</Box>}
                      </div>
                    </Box>
                  )
                )}
              </Box>

              <Box className="border-t border-border" />

              {/* Login */}
              <Box className="py-2">
                <Box className="px-4 py-1.5">
                  <Box tag="span" className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Log in</Box>
                </Box>
                {loginItems.map((item) => (
                  <Box tag="a" key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between w-full py-2 px-4 transition-colors text-foreground hover:bg-accent"
                  >
                    <Box tag="span" className="text-sm">{item.label}</Box>
                    <ExternalLink style={css('w-3.5 h-3.5 text-foreground/30')} />
                  </Box>
                ))}
              </Box>
            </Box>
          </M>
        )}
      </AnimatePresence>
    </Box>
  )
}

interface MenuItem {
  label: string; href: string; description: string
  icon?: LucideIcon; external?: boolean
}
interface MenuConfig { title: string; items: MenuItem[] }

const navMenus: Record<string, MenuConfig> = {
  research: {
    title: 'Research',
    items: [
      { label: 'Overview', href: '/research', description: 'Our research mission and approach', icon: Microscope },
      { label: 'AI & Machine Learning', href: '/models', description: 'Frontier AI models and training', icon: Brain },
      { label: 'Cryptography', href: 'https://papers.zoo.ngo', description: 'Post-quantum and FHE research', icon: Shield, external: true },
      { label: 'Consensus & Networks', href: site.links.network, description: 'Distributed systems and blockchain', icon: Network, external: true },
      { label: 'Papers', href: '/research#papers', description: '130+ published research papers', icon: FileText },
      { label: 'Open Source', href: '/open-source', description: '727+ repos, revenue sharing', icon: Github },
      { label: 'Case Studies', href: '/case-studies', description: 'Real-world implementations', icon: Microscope },
    ],
  },
  models: {
    title: 'Models',
    items: [
      { label: 'Zen Models', href: '/models', description: '600M-1T+ parameter models', icon: Sparkles },
      { label: 'Zen Coder', href: '/models#code', description: 'Code generation and analysis', icon: Code2 },
      { label: 'Zen Omni', href: 'https://huggingface.co/zenlm/zen-omni-8b', description: 'Multimodal vision & audio', icon: Boxes, external: true },
      { label: 'Model API', href: '/api', description: 'API docs, endpoints, ecosystem', icon: Cpu },
      { label: 'Hugging Face', href: site.links.huggingFace, description: 'Download models', icon: Bot, external: true },
    ],
  },
  products: {
    title: 'Products',
    items: [
      { label: 'Zoo Cloud', href: '/cloud', description: 'Full AI platform and cloud', icon: Cloud },
      { label: 'Zoo Bot', href: '/bot', description: 'AI team in a box', icon: Bot },
      { label: 'Zoo Dev', href: '/dev', description: 'AI coding agent', icon: Code2 },
      { label: 'Zoo Chat', href: '/chat', description: 'AI chat & bot manager', icon: MessageSquare },
      { label: 'Zoo Engine', href: '/engine', description: 'Cloud GPU inference engine', icon: Server },
      { label: 'Zoo Edge', href: '/edge', description: 'On-device AI inference', icon: Smartphone },
      { label: 'Zoo Team', href: site.links.team, description: 'Work with Zoo engineers', icon: Boxes, external: true },
    ],
  },
  company: {
    title: 'Company',
    items: [
      { label: 'About', href: '/about', description: 'Our mission and values' },
      { label: 'Team', href: '/team', description: 'Leadership and AI workforce' },
      { label: 'Press', href: '/press', description: 'News and media coverage', icon: FileText },
      { label: 'Careers', href: '/careers', description: 'Join us' },
      { label: 'Contact', href: '/contact', description: 'Get in touch' },
    ],
  },
}

function DropdownMenu({ menu, isOpen, onOpen, onClose }: { menu: MenuConfig; isOpen: boolean; onOpen: () => void; onClose: () => void }) {
  const menuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearTimeoutRef = useCallback(() => {
    if (timeoutRef.current) { clearTimeout(timeoutRef.current); timeoutRef.current = null }
  }, [])

  useEffect(() => { return () => clearTimeoutRef() }, [clearTimeoutRef])

  const handleItemClick = (item: MenuItem) => {
    onClose()
    if (item.external) window.open(item.href, '_blank')
    else router.push(item.href)
  }

  return (
    <Box className="relative" ref={menuRef}
      onMouseEnter={() => { clearTimeoutRef(); onOpen() }}
      onMouseLeave={() => { clearTimeoutRef(); timeoutRef.current = setTimeout(onClose, 800) }}
    >
      <Box tag="button" onClick={() => isOpen ? onClose() : onOpen()}
        className={cn(
          'flex items-center gap-1 font-medium transition-all duration-200 text-sm py-2 px-3 rounded-lg',
          isOpen ? 'text-foreground bg-foreground/10' : 'text-muted-foreground hover:text-foreground hover:bg-accent'
        )}
      >
        {menu.title}
        <ChevronDown style={css(cn('w-4 h-4 transition-transform duration-200', isOpen && 'rotate-180'))} />
      </Box>

      <AnimatePresence>
        {isOpen && (
          <M
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            className="absolute left-0 top-full w-80 max-w-[calc(100vw-2rem)] z-50"
            onMouseEnter={() => { clearTimeoutRef(); onOpen() }}
            onMouseLeave={() => { clearTimeoutRef(); timeoutRef.current = setTimeout(onClose, 800) }}
          >
            <Box aria-hidden className="h-5" />
            <Box className="backdrop-blur-xl border rounded-xl shadow-2xl overflow-hidden bg-white border-border shadow-background/50">
              <Box className="py-2">
                {menu.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <Box tag="button" key={item.label} onClick={() => handleItemClick(item)}
                      className="w-full text-left px-4 py-3 transition-all duration-150 group flex items-center gap-3 hover:bg-accent"
                    >
                      {Icon && (
                        <Box className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors bg-foreground/10 group-hover:bg-accent">
                          <Box tag="span" className="w-4 h-4 text-muted-foreground group-hover:text-foreground grid">
                            <Icon style={css('w-full h-full')} />
                          </Box>
                        </Box>
                      )}
                      <Box className="flex-1 min-w-0">
                        <Box className="flex items-center justify-between">
                          <Box tag="span" className="font-medium text-sm transition-colors duration-150 text-foreground/90 group-hover:text-foreground">{item.label}</Box>
                          {item.external && <Box tag="span" className="w-3.5 h-3.5 flex-shrink-0 text-foreground/30 group-hover:text-muted-foreground grid">
   <ExternalLink style={css('w-full h-full')} />
 </Box>}
                        </Box>
                        <Box tag="p" className="text-xs mt-0.5 transition-colors duration-150 truncate text-muted-foreground group-hover:text-muted-foreground">{item.description}</Box>
                      </Box>
                    </Box>
                  )
                })}
              </Box>
            </Box>
          </M>
        )}
      </AnimatePresence>
    </Box>
  )
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpenMenu(null); setIsMobileMenuOpen(false) }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <NavbarContainer>
      <Logo size="md" showText={true} />

      <Box className="hidden md:flex items-center space-x-1">
        {Object.entries(navMenus).map(([key, menu]) => (
          <DropdownMenu key={key} menu={menu}
            isOpen={openMenu === key}
            onOpen={() => setOpenMenu(key)}
            onClose={() => setOpenMenu(null)}
          />
        ))}
      </Box>

      <Box className="hidden md:flex items-center space-x-3">
        <TryZooDropdown />
      </Box>

      <Box tag="button"
        className="md:hidden p-2 rounded-lg transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-accent"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <AnimatePresence mode="wait">
          {isMobileMenuOpen ? (
            <M key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X style={css('w-6 h-6')} />
            </M>
          ) : (
            <M key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <Menu style={css('w-6 h-6')} />
            </M>
          )}
        </AnimatePresence>
      </Box>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <M
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 md:hidden backdrop-blur-xl border-t rounded-b-2xl overflow-hidden bg-white border-border"
          >
            <Box className="py-4 space-y-4 px-4 max-h-[70vh] overflow-y-auto">
              {Object.entries(navMenus).map(([key, menu]) => (
                <Box key={key} className="space-y-2">
                  <Box className="text-xs font-medium uppercase tracking-wider px-2 text-muted-foreground">{menu.title}</Box>
                  {menu.items.map((item) => (
                    <Link key={item.label}
                      href={item.external ? '#' : item.href}
                      onClick={(e) => {
                        if (item.external) { e.preventDefault(); window.open(item.href, '_blank') }
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <Box tag="span" className="flex items-center justify-between py-2 px-2 rounded-lg transition-all duration-150 text-muted-foreground hover:text-foreground hover:bg-accent">
                      <span>{item.label}</span>
                      {item.external && <ExternalLink style={css('w-3.5 h-3.5 text-foreground/30')} />}
                      </Box>
                    </Link>
                  ))}
                </Box>
              ))}
              <Box className="pt-4 space-y-2 border-t border-border">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" {...sx('w-full border-border text-foreground hover:bg-accent')}>Contact</Button>
                </Link>
                <a href={site.links.platform} target="_blank" rel="noopener noreferrer">
                  <Button {...sx('w-full bg-primary text-primary-foreground hover:bg-primary/90')}>Try Zen</Button>
                </a>
              </Box>
            </Box>
          </M>
        )}
      </AnimatePresence>
    </NavbarContainer>
  )
}
