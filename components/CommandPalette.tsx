"use client";

import { Box, css } from '@hanzo/ui'
import { M } from '@/components/motion'
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, ArrowRight, Terminal, Brain, Bot, Database, Zap, Shield, Cloud,
  Code, Server, Globe, CreditCard, Users, FileText, Settings, ExternalLink,
  Command, Lock, BookOpen, Newspaper, Building, Network, Cpu,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CommandItem {
  id: string;
  title: string;
  description?: string;
  href: string;
  icon: React.ElementType;
  category: string;
  external?: boolean;
  keywords?: string[];
}

const commands: CommandItem[] = [
  { id: "zen", title: "ZEN", description: "AI orchestration platform", href: "/products/zen", icon: Brain, category: "Products", keywords: ["ai", "orchestration", "platform", "models"] },
  { id: "koan", title: "KOAN", description: "Enterprise knowledge management", href: "/products/koan", icon: Database, category: "Products", keywords: ["knowledge", "enterprise", "insights", "rag"] },
  { id: "hanzo-ai", title: "Zoo Industries", description: "Comprehensive AI platform", href: "/products/hanzo-ai", icon: Bot, category: "Products", keywords: ["ai", "models", "api", "llm"] },
  { id: "hanzo-dx", title: "Zoo DX", description: "Developer experience platform", href: "/products/hanzo-dx", icon: Code, category: "Products", keywords: ["developer", "tools", "sdk"] },
  { id: "hanzo-ml", title: "Zoo ML", description: "ML operations platform", href: "/products/hanzo-ml", icon: Cpu, category: "Products", keywords: ["mlops", "training", "deployment"] },
  { id: "hanzo-dev", title: "Zoo Dev", description: "Accelerated development", href: "/products/hanzo-dev", icon: Terminal, category: "Products", keywords: ["code", "development", "ai"] },
  { id: "hanzo-team", title: "Zoo Team", description: "Collaboration platform", href: "/products/hanzo-team", icon: Users, category: "Products", keywords: ["team", "collaboration", "project"] },
  { id: "hanzo-cloud", title: "Zoo Cloud", description: "Private AI cloud infrastructure", href: "/products/hanzo-cloud", icon: Cloud, category: "Products", keywords: ["cloud", "infrastructure", "compute", "gpu"] },
  { id: "hanzo-bot", title: "Zoo Bot", description: "Autonomous AI agent framework", href: "/products/hanzo-bot", icon: Bot, category: "Products", keywords: ["bot", "agent", "autonomous", "workforce"] },
  { id: "research", title: "Research", description: "AI research and publications", href: "/research", icon: FileText, category: "Platform", keywords: ["research", "papers", "publications"] },
  { id: "cryptography", title: "Cryptography", description: "Post-quantum cryptography", href: "/research#crypto", icon: Lock, category: "Platform", keywords: ["crypto", "quantum", "security"] },
  { id: "consensus", title: "Consensus", description: "Consensus protocols", href: "/research#consensus", icon: Network, category: "Platform", keywords: ["consensus", "blockchain", "protocols"] },
  { id: "cloud", title: "Zoo Cloud", description: "Private AI compute", href: "/products/hanzo-cloud", icon: Cloud, category: "Platform", keywords: ["cloud", "compute", "gpu", "private"] },
  { id: "services", title: "Services", description: "Professional services", href: "/services", icon: Server, category: "Platform", keywords: ["consulting", "services", "professional"] },
  { id: "capabilities", title: "Capabilities", description: "AI capabilities overview", href: "/capabilities", icon: Zap, category: "Platform", keywords: ["capabilities", "features", "ai"] },
  { id: "docs", title: "Documentation", description: "API docs and guides", href: "https://docs.zoo.ngo", icon: FileText, category: "Resources", external: true, keywords: ["api", "guide", "tutorial"] },
  { id: "models", title: "AI Models", description: "Foundation models", href: "/models", icon: Brain, category: "Resources", keywords: ["models", "llm", "ai"] },
  { id: "case-studies", title: "Case Studies", description: "Success stories", href: "/case-studies", icon: BookOpen, category: "Resources", keywords: ["case", "study", "success"] },
  { id: "examples", title: "Examples", description: "Technical demonstrations", href: "/examples", icon: Code, category: "Resources", keywords: ["examples", "demo", "technical"] },
  { id: "pricing", title: "Pricing", description: "Plans and pricing", href: "/pricing", icon: CreditCard, category: "Resources", keywords: ["cost", "price", "plan"] },
  { id: "status", title: "Status", description: "System status", href: "/status", icon: Settings, category: "Resources", keywords: ["uptime", "health", "status"] },
  { id: "about", title: "About", description: "About Zoo Industries", href: "/about", icon: Building, category: "Company", keywords: ["about", "company", "mission"] },
  { id: "team", title: "Team", description: "Meet the team", href: "/team", icon: Users, category: "Company", keywords: ["team", "people", "leadership"] },
  { id: "press", title: "Press", description: "News and media", href: "/press", icon: Newspaper, category: "Company", keywords: ["news", "press", "media"] },
  { id: "security", title: "Security", description: "Security practices", href: "/security", icon: Shield, category: "Company", keywords: ["compliance", "soc2", "security"] },
  { id: "contact", title: "Contact", description: "Get in touch", href: "/contact", icon: Users, category: "Company", keywords: ["support", "help", "contact"] },
  { id: "solutions", title: "Solutions", description: "Industry solutions", href: "/solutions", icon: Globe, category: "Company", keywords: ["solutions", "industries", "use cases"] },
];

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const filteredCommands = search
    ? commands.filter(
        (cmd) =>
          cmd.title.toLowerCase().includes(search.toLowerCase()) ||
          cmd.description?.toLowerCase().includes(search.toLowerCase()) ||
          cmd.keywords?.some((k) => k.toLowerCase().includes(search.toLowerCase()))
      )
    : commands;

  const groupedCommands = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {} as Record<string, CommandItem[]>);

  const flatCommands = Object.values(groupedCommands).flat();

  useEffect(() => { setSelectedIndex(0); }, [search]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setSearch("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % flatCommands.length);
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + flatCommands.length) % flatCommands.length);
          break;
        case "Enter":
          e.preventDefault();
          if (flatCommands[selectedIndex]) {
            const cmd = flatCommands[selectedIndex];
            if (cmd.external) window.open(cmd.href, "_blank");
            else router.push(cmd.href);
            onClose();
          }
          break;
        case "Escape":
          onClose();
          break;
      }
    },
    [flatCommands, selectedIndex, router, onClose]
  );

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => document.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isOpen, onClose]);

  const handleSelect = (cmd: CommandItem) => {
    if (cmd.external) window.open(cmd.href, "_blank");
    else router.push(cmd.href);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <M
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[100]"
          />

          <M
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[10%] left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] max-w-xl z-[101]"
          >
            <Box className={cn(
              "border rounded-xl shadow-2xl overflow-hidden",
              "bg-secondary border-border"
            )}>
              <Box className={cn(
                "flex items-center gap-3 px-4 py-3 border-b",
                "border-border"
              )}>
                <Search style={css(cn("w-5 h-5", "text-muted-foreground"))} />
                <Box tag="input"
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search pages, products, docs..."
                  className={cn(
                    "flex-1 bg-transparent text-sm outline-none",
                    "text-foreground placeholder-muted-foreground"
                  )}
                />
                <Box tag="kbd" className={cn(
                  "px-2 py-1 text-[10px] font-mono rounded",
                  "bg-foreground/10 text-muted-foreground"
                )}>
                  ESC
                </Box>
              </Box>

              <Box className="max-h-[400px] overflow-y-auto py-2">
                {Object.keys(groupedCommands).length === 0 ? (
                  <Box className={cn(
                    "px-4 py-8 text-center text-sm",
                    "text-muted-foreground"
                  )}>
                    No results found for "{search}"
                  </Box>
                ) : (
                  Object.entries(groupedCommands).map(([category, items]) => (
                    <div key={category}>
                      <Box className={cn(
                        "px-4 py-2 text-[10px] font-semibold uppercase tracking-wider",
                        "text-muted-foreground"
                      )}>
                        {category}
                      </Box>
                      {items.map((cmd) => {
                        const Icon = cmd.icon;
                        const index = flatCommands.findIndex((c) => c.id === cmd.id);
                        const isSelected = index === selectedIndex;

                        return (
                          <Box tag="button"
                            key={cmd.id}
                            onClick={() => handleSelect(cmd)}
                            onMouseEnter={() => setSelectedIndex(index)}
                            className={cn(
                              "w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors",
                              isSelected
                                ? "bg-foreground/10 text-foreground"
                                : "text-muted-foreground hover:bg-accent"
                            )}
                          >
                            <Box className={cn(
                              "w-8 h-8 rounded-lg flex items-center justify-center",
                              isSelected
                                ? "bg-foreground/15"
                                : "bg-foreground/10"
                            )}>
                              <Icon style={css(cn(
                                "w-4 h-4",
                                isSelected
                                  ? "text-foreground"
                                  : "text-muted-foreground"
                              ))} />
                            </Box>
                            <Box className="flex-1 min-w-0">
                              <Box className="flex items-center gap-2">
                                <Box tag="span" className="text-sm font-medium truncate">{cmd.title}</Box>
                                {cmd.external && (
                                  <ExternalLink style={css(cn(
                                    "w-3 h-3",
                                    "text-muted-foreground"
                                  ))} />
                                )}
                              </Box>
                              {cmd.description && (
                                <Box className={cn(
                                  "text-xs truncate",
                                  "text-muted-foreground"
                                )}>
                                  {cmd.description}
                                </Box>
                              )}
                            </Box>
                            {isSelected && (
                              <ArrowRight style={css(cn(
                                "w-4 h-4",
                                "text-muted-foreground"
                              ))} />
                            )}
                          </Box>
                        );
                      })}
                    </div>
                  ))
                )}
              </Box>

              <Box className={cn(
                "px-4 py-2 border-t flex items-center justify-between",
                "border-border"
              )}>
                <Box className={cn(
                  "flex items-center gap-4 text-[10px]",
                  "text-muted-foreground"
                )}>
                  <Box tag="span" className="flex items-center gap-1">
                    <Box tag="kbd" className={cn("px-1.5 py-0.5 rounded", "bg-foreground/10")}>up</Box>
                    <Box tag="kbd" className={cn("px-1.5 py-0.5 rounded", "bg-foreground/10")}>down</Box>
                    Navigate
                  </Box>
                  <Box tag="span" className="flex items-center gap-1">
                    <Box tag="kbd" className={cn("px-1.5 py-0.5 rounded", "bg-foreground/10")}>enter</Box>
                    Select
                  </Box>
                </Box>
                <Box className={cn(
                  "flex items-center gap-1 text-[10px]",
                  "text-muted-foreground"
                )}>
                  <Command style={css('w-3 h-3')} />
                  <span>K to toggle</span>
                </Box>
              </Box>
            </Box>
          </M>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
