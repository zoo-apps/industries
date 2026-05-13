// site.config.ts — Single source of truth for brand data.
// Fork this file (and public assets) to rebrand the entire site.

const siteConfig = {
  brand: {
    name: 'Zoo',
    legalName: 'Zoo Industries Inc & Zoo Labs Foundation',
    tagline: 'Open AI Research Network',
    description:
      'Open AI research network advancing decentralized AI (DeAI), decentralized science (DeSci), and frontier model development. Community-governed via ZIPs (Zoo Improvement Proposals).',
    domain: 'zoo.industries',
    url: 'https://zoo.industries',
    foundedYear: 2020,
    badge: '501(c)(3) Foundation',
  },
  seo: {
    titleTemplate: '%s | Zoo Industries',
    defaultTitle: 'Zoo Industries — Open AI Research Network',
    ogImage: '/og-image.png',
    faviconPath: '/favicon.svg?v=rgb',
    themeColor: '#000000',
  },
  links: {
    github: 'https://github.com/zooai',
    twitter: 'https://x.com/zoo_labs',
    docs: 'https://docs.zoo.ngo',
    huggingFace: 'https://huggingface.co/zenlm',
    platform: 'https://zoo.ngo',
    chat: 'https://zoo.chat',
    bot: 'https://zoo.bot',
    botApp: 'https://app.zoo.bot',
    dev: 'https://zoo.ngo/dev',
    team: 'https://zoo.team',
    engine: 'https://engine.zoo.ngo',
    edge: 'https://edge.zoo.ngo',
    zenModels: 'https://zoo.ngo/zen',
    modelApi: 'https://api.zoo.network',
    foundation: 'https://zoo.ngo',
    zips: 'https://zips.zoo.ngo',
    network: 'https://zoo.network',
    discord: 'https://discord.gg/edmZPTZjH9',
  },
  analytics: {
    scriptUrl: 'https://insights.zoo.ngo/script.js',
    siteId: '',
  },
  chat: {
    apiUrl: 'https://api.zoo.network',
    iamAuthorizeUrl: 'https://zoo.id/oauth/authorize',
    iamClientId: 'zoo-app-client-id',
    freeMessageLimit: 1,
  },
  stats: [
    { value: '501(c)(3)', label: 'Foundation' },
    { value: '130+', label: 'Research Papers' },
    { value: '2,500+', label: 'OSS Projects' },
    { value: 'DeAI / DeSci', label: 'Decentralized Research' },
  ],
  clients: [
    'Lux Network', 'Zen LM', 'Pars Network', 'Hanzo AI',
    'Zoo Labs Foundation', 'zooai', 'zoofoundation',
  ],
} as const

export type SiteConfig = typeof siteConfig
export default siteConfig
