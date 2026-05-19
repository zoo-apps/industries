'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Code2, Sparkles, GitPullRequest, TestTube2, FileSearch, Wrench,
  Brain, Bug, ArrowRight, Terminal, Github,
} from 'lucide-react'
import site from '@/site.config'

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

const skills = [
  { h: 'Reads the whole repo',  p: 'Indexes every file, every test, every CI config. Not a 200-line code window — the actual project.', icon: FileSearch },
  { h: 'Runs your tests',       p: 'Spins a sandbox, runs pytest / vitest / go test / cargo test, reads the output, fixes the regression, runs them again.', icon: TestTube2 },
  { h: 'Opens real PRs',        p: 'Branch, commit, push, draft a description with the diff highlights and the issue link. You review like any teammate.', icon: GitPullRequest },
  { h: 'Refactors with intent', p: 'Renames across the call graph, extracts shared helpers, threads context through async chains — without breaking adjacent code.', icon: Wrench },
  { h: 'Debugs with you',       p: 'Attach to a failing CI run, get a hypothesis + the diff that fixes it. Or watch it work the repro loop on its own.', icon: Bug },
  { h: 'Lives in your terminal', p: 'CLI agent, IDE plug-in, GitHub bot — same brain, same memory, three doorways into it.', icon: Terminal },
]

const guardrails = [
  { h: 'Allowlist commands',    p: 'It can run pytest. It cannot run rm -rf. Default deny, you grant what it needs.' },
  { h: 'Read-only by default',  p: 'No writes outside its sandbox until you flip a flag. Branches and PRs go through the same review you have today.' },
  { h: 'Per-repo budget',       p: 'Hard token cap per task and per day. The agent stops cleanly, not in the middle of a half-applied refactor.' },
  { h: 'Audit log',             p: 'Every shell command, every file read, every web fetch. Replayable. Pipe it into your existing dev-tools observability.' },
]

export default function PageClient() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...fade} transition={{ duration: 0.5 }}>
            <span className="inline-block mt-6 mb-6 text-sm md:text-base font-extrabold uppercase tracking-[0.2em] underline underline-offset-[6px] decoration-2">
              Zoo Dev
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              An engineer.<br />Not a snippet predictor.
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-muted-foreground">
              Zoo Dev clones your repo, reads the whole tree, runs your tests in
              a sandbox, and opens a real PR — with the diff, the rationale, and
              the failing-then-passing test output. Powered by zen-coder and
              zen5-coder-pro on the same revenue-shared network as the rest of Zoo.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={site.links.dev} target="_blank" rel="noopener noreferrer">
                <button className="btn-brutalist pill-pink">
                  <Terminal className="w-4 h-4" />
                  Install the CLI
                </button>
              </a>
              <a href="https://github.com/zooai" target="_blank" rel="noopener noreferrer">
                <button className="btn-brutalist pill-green">
                  <Github className="w-4 h-4" />
                  GitHub bot
                </button>
              </a>
              <Link href="/models">
                <button className="btn-brutalist pill-blue">
                  <Brain className="w-4 h-4" />
                  zen-coder models
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fade} transition={{ duration: 0.5 }} className="mb-10">
            <span className="pill pill-cyan text-lg md:text-2xl">What it does</span>
            <h2 className="mt-10 md:mt-12 text-2xl md:text-3xl font-extrabold underline underline-offset-4">
              The work of a junior engineer with the memory of a senior one.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {skills.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.h}
                  {...fade}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] p-5 md:p-6 text-black"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 border-2 border-black flex items-center justify-center pill-yellow">
                      <Icon className="w-5 h-5 text-black" />
                    </div>
                    <h4 className="text-lg md:text-xl font-extrabold uppercase tracking-tight">{s.h}</h4>
                  </div>
                  <p className="text-sm md:text-base font-medium text-black/80">{s.p}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-foreground/5">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fade} transition={{ duration: 0.5 }} className="mb-10">
            <span className="pill pill-red text-lg md:text-2xl">Guardrails</span>
            <h2 className="mt-10 md:mt-12 text-2xl md:text-3xl font-extrabold underline underline-offset-4">
              Powerful enough to write code, scoped enough to ship it.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {guardrails.map((g, i) => (
              <motion.div
                key={g.h}
                {...fade}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-5 md:p-6 bg-white border-2 border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] text-black"
              >
                <h4 className="text-base md:text-lg font-extrabold uppercase mb-2 tracking-tight">{g.h}</h4>
                <p className="text-sm md:text-base font-medium text-black/80">{g.p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Add the seventh engineer.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Zoo Dev sits inside your repo, your terminal, and your CI. Three
            doorways to one agent that actually remembers the last fix it shipped.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={site.links.dev} target="_blank" rel="noopener noreferrer">
              <button className="btn-brutalist pill-pink">
                <Code2 className="w-4 h-4" />
                Get Zoo Dev
              </button>
            </a>
            <Link href="/api">
              <button className="btn-brutalist pill-green">
                On the Zen API
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
