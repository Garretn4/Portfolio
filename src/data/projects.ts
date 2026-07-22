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
    summary: 'Services that move leads and communications through a pipeline without a human in the loop.',
    projects: [
      {
        name: 'lead-pool',
        title: 'Lead Pool',
        blurb:
          'Automated lead-distribution service that routes inbound leads to the right rep in real time.',
        tags: ['TypeScript', 'Vercel', 'Node'],
        isPrivate: true,
        live: 'https://lead-pool-ruddy.vercel.app',
      },
      {
        name: 'fex-quoter',
        title: 'FEX Quoter',
        blurb:
          'Login-gated final-expense carrier recommender with per-user accounts, quote history, audit logging, and an admin dashboard.',
        tags: ['Node', 'Express', 'SQLite', 'Render'],
        isPrivate: true,
      },
      {
        name: 'dialer',
        title: 'Dialer',
        blurb: 'Browser-based power dialer for running outbound calling workflows from one screen.',
        tags: ['TypeScript', 'Vercel', 'Telephony'],
        isPrivate: true,
        live: 'https://dialer-xi-two.vercel.app',
      },
      {
        name: 'fb-calendly-skeleton',
        title: 'FB → Calendly Pipeline',
        blurb: 'Turns inbound Facebook leads into booked Calendly appointments automatically.',
        tags: ['Python', 'Webhooks', 'Automation'],
        isPrivate: true,
      },
      {
        name: 'CommSync',
        title: 'CommSync',
        blurb: 'Backend service for keeping communications in sync across channels.',
        tags: ['Python', 'API', 'Server'],
        isPrivate: true,
      },
    ],
  },
  {
    id: 'trading',
    label: 'Trading & Quant',
    summary: 'Experiments in market data, strategy, and automated execution.',
    projects: [
      {
        name: 'binance-triangular-arbitrage',
        title: 'Triangular Arbitrage Bot',
        blurb:
          'Scans Binance order books for triangular arbitrage opportunities across trading pairs.',
        tags: ['Python', 'Binance API', 'Trading'],
        repo: `${GH}/binance-triangular-arbitrage`,
      },
      {
        name: 'Quant',
        title: 'Quant',
        blurb: 'A sandbox for quantitative trading strategies and backtesting ideas.',
        tags: ['Python', 'Research'],
        isPrivate: true,
      },
    ],
  },
  {
    id: 'infra',
    label: 'Infrastructure & Hardware',
    summary: 'Self-hosted stacks and the physical environment they run on.',
    projects: [
      {
        name: 'pi-stack',
        title: 'Pi Stack',
        blurb: 'A self-hosted service stack running on Raspberry Pi hardware.',
        tags: ['Python', 'Raspberry Pi', 'Self-hosted'],
        isPrivate: true,
      },
      {
        name: 'home-automation-lab',
        title: 'Home Automation Lab',
        blurb: 'Configuration and notes for my current home automation setup.',
        tags: ['IoT', 'Automation', 'Config'],
        repo: `${GH}/home-automation-lab`,
      },
      {
        name: 'Personal-OS',
        title: 'Personal OS',
        blurb: 'A personal dashboard and workflow layer for running day-to-day operations.',
        tags: ['JavaScript', 'Dashboard'],
        isPrivate: true,
      },
    ],
  },
  {
    id: 'notion',
    label: 'Notion Widgets',
    summary: 'Embeddable widgets that extend Notion dashboards.',
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
        blurb: 'A custom sidebar widget to navigate a Notion workspace.',
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
