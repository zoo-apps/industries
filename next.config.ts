import { createRequire } from 'node:module'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { NextConfig } from 'next'

// @hanzo/ui renders through @hanzo/gui, whose graph names react-native. On the
// web that IS react-native-web, and the `.web.*` siblings have to win — say it
// once, for both bundlers, from the library that needs it.
const require = createRequire(import.meta.url)
const withGui = require('@hanzo/ui/next') as (c: NextConfig, dir: string) => NextConfig

const config: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: false,
  // The type errors are gone; the build can say so.
  typescript: { ignoreBuildErrors: false },
}

export default withGui(config, dirname(fileURLToPath(import.meta.url)))
