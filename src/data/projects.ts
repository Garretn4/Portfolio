export type Project = {
  name: string
  title: string
  blurb: string
  tags: string[]
  repo?: string
  live?: string
  isPrivate?: boolean
}

export type ProjectGroup = {
  id: string
  label: string
  summary: string
  projects: Project[]
}

const GH = 'https://github.com/Garretn4'

export const groups: ProjectGroup[] = [
  {
    id: 'automation',
    label: 'Automation & Lead Systems',
    summary: 'Services that take a lead from ad click to booked call with no one touching it.',
    projects: [
      {
        name: 'lead-pool',
        title: 'Lead Pool',
        blurb: 'Routes inbound leads to the right rep the moment they arrive.',
        tags: ['TypeScript', 'Vercel', 'Node'],
        isPrivate: true,
        live: 'https://lead-pool-ruddy.vercel.app',
      },
      {
        name: 'fex-quoter',
        title: 'FEX Quoter',
        blurb:
          'Agents log in, run a quote, and get the best-fit final-expense carrier. Saves every quote and audits every action.',
        tags: ['Node', 'Express', 'SQLite', 'Render'],
        isPrivate: true,
      },
      {
        name: 'dialer',
        title: 'Dialer',
        blurb: 'Power dialer that runs a full outbound calling session in the browser.',
        tags: ['TypeScript', 'Vercel', 'Telephony'],
        isPrivate: true,
        live: 'https://dialer-xi-two.vercel.app',
      },
      {
        name: 'fb-calendly-skeleton',
        title: 'FB → Calendly Pipeline',
        blurb: 'Books Facebook leads straight into Calendly appointments.',
        tags: ['Python', 'Webhooks', 'Automation'],
        isPrivate: true,
      },
      {
        name: 'CommSync',
        title: 'CommSync',
        blurb: 'Backend service that keeps conversations in sync across channels.',
        tags: ['Python', 'API', 'Server'],
        isPrivate: true,
      },
    ],
  },
  {
    id: 'trading',
    label: 'Trading & Quant',
    summary: 'Bots and backtests against live market data.',
    projects: [
      {
        name: 'binance-triangular-arbitrage',
        title: 'Triangular Arbitrage Bot',
        blurb: 'Scans Binance order books for triangular arbitrage across trading pairs.',
        tags: ['Python', 'Binance API', 'Trading'],
        repo: `${GH}/binance-triangular-arbitrage`,
      },
      {
        name: 'Quant',
        title: 'Quant',
        blurb: 'Where I backtest trading strategy ideas before risking money on them.',
        tags: ['Python', 'Research'],
        isPrivate: true,
      },
    ],
  },
  {
    id: 'infra',
    label: 'Infrastructure & Hardware',
    summary: 'Services I run on my own hardware.',
    projects: [
      {
        name: 'pi-stack',
        title: 'Pi Stack',
        blurb: 'The service stack that runs on my Raspberry Pis.',
        tags: ['Python', 'Raspberry Pi', 'Self-hosted'],
        isPrivate: true,
      },
      {
        name: 'home-automation-lab',
        title: 'Home Automation Lab',
        blurb: 'Config and notes for my home automation setup.',
        tags: ['IoT', 'Automation', 'Config'],
        repo: `${GH}/home-automation-lab`,
      },
      {
        name: 'Personal-OS',
        title: 'Personal OS',
        blurb: 'A dashboard for running my day to day.',
        tags: ['JavaScript', 'Dashboard'],
        isPrivate: true,
      },
    ],
  },
  {
    id: 'notion',
    label: 'Notion Widgets',
    summary: 'Widgets I embed in Notion dashboards.',
    projects: [
      {
        name: 'notionCalendar',
        title: 'Notion Calendar',
        blurb: 'An embeddable calendar widget for Notion pages.',
        tags: ['HTML', 'Widget'],
        repo: `${GH}/notionCalendar`,
        live: 'https://garretn4.github.io/notionCalendar/',
      },
      {
        name: 'notionWeather',
        title: 'Notion Weather',
        blurb: 'A live weather widget for Notion dashboards.',
        tags: ['HTML', 'Widget'],
        repo: `${GH}/notionWeather`,
      },
      {
        name: 'notionSidebar',
        title: 'Notion Sidebar',
        blurb: 'A sidebar widget for navigating a Notion workspace.',
        tags: ['HTML', 'Widget'],
        repo: `${GH}/notionSidebar`,
      },
    ],
  },
]

export const stack = [
  'TypeScript',
  'Python',
  'JavaScript',
  'React',
  'Node',
  'Vercel',
  'Raspberry Pi',
]
