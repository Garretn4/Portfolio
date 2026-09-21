export type Story = {
  problem: string
  constraint: string
  decision: string
  outcome: string
}

export type Project = {
  name: string
  title: string
  blurb: string
  tags: string[]
  /** Year the work happened. */
  year: string
  /** Automated test cases in the repo. Omitted when there are none worth counting. */
  tests?: number
  /** Short case study shown behind a toggle. */
  story?: Story
  /** Pre-blurred screenshot. Shows the look without showing the details. */
  image?: string
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

const shots = import.meta.glob('../../assets/images/projects/*.{png,jpg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

/** Resolves a screenshot by basename, or undefined if it has not been captured yet. */
function shot(base: string): string | undefined {
  const hit = Object.entries(shots).find(([k]) => k.includes(`/${base}.`))
  return hit?.[1]
}

export const groups: ProjectGroup[] = [
  {
    id: 'govcon',
    label: 'GovCon & Compliance Tools',
    summary: 'Local-first tools that turn public federal data into decisions.',
    projects: [
      {
        name: 'sam.gov_api_harness',
        title: 'Capture Filter',
        blurb:
          'Type in a government contractor and it works out what they actually win, then screens open federal opportunities and says which ones are worth their time and why. Every yes and no comes with the rule behind it.',
        tags: ['Python', 'SAM.gov', 'USASpending'],
        year: '2026',
        tests: 3130,
        story: {
          problem:
            'Contractors screen hundreds of SAM.gov notices by hand and cannot say afterwards why one was worth chasing.',
          constraint:
            'The SAM.gov API allows ten calls a day. The test suite has to run offline, and no black box is allowed in the decision.',
          decision:
            'Local-first SQLite, two free data sources, and a named rule behind every yes and no. Each data pull shows whether it spends a quota slot before you press it.',
          outcome:
            '3,130 offline tests, live API tests behind a separate marker, and a 900-line runbook.',
        },
        image: shot('capture-filter'),
        isPrivate: true,
      },
      {
        name: 'pqc-mapped',
        title: 'CBOM Register',
        blurb:
          'Turns cryptographic scanner output into a prioritized compliance inventory. One evidence set covers post-quantum migration, FIPS 140-3, and TLS 1.3 deadlines.',
        tags: ['Python', 'CLI', 'Post-quantum crypto'],
        year: '2026',
        tests: 163,
        image: shot('cbom-register'),
        isPrivate: true,
      },
    ],
  },
  {
    id: 'infra',
    label: 'Infrastructure & Networking',
    summary: 'Services I run on my own hardware, and the tooling that ties the machines together.',
    projects: [
      {
        name: 'ArxSpec',
        title: 'ArxSpec',
        blurb:
          'One small program that turns the machines I already own into a remote control. Start, stop, and watch a script on the box it belongs on, from any device including a phone.',
        tags: ['Go', 'Networking', 'Post-quantum crypto'],
        year: '2026',
        tests: 1125,
        image: shot('arxspec'),
        isPrivate: true,
      },
      {
        name: 'pi-stack',
        year: '2026',
        tests: 96,
        title: 'Pi Stack',
        blurb: 'The service stack that runs on my Raspberry Pis.',
        tags: ['Python', 'Raspberry Pi', 'Self-hosted'],
        isPrivate: true,
      },
      {
        name: 'home-automation-lab',
        year: '2025',
        title: 'Home Automation Lab',
        blurb: 'Config and notes for my home automation setup.',
        tags: ['IoT', 'Automation', 'Config'],
        repo: `${GH}/home-automation-lab`,
      },
      {
        name: 'Personal-OS',
        year: '2026',
        title: 'Personal OS',
        blurb: 'A dashboard for running my day to day.',
        tags: ['JavaScript', 'Dashboard'],
        isPrivate: true,
      },
    ],
  },
  {
    id: 'automation',
    label: 'Automation & Lead Systems',
    summary: 'Services that take a lead from ad click to booked call with no one touching it.',
    projects: [
      {
        name: 'lead-pool',
        year: '2026',
        tests: 3715,
        title: 'Lead Pool',
        blurb: 'Routes inbound leads to the right rep the moment they arrive.',
        tags: ['TypeScript', 'Next.js', 'Supabase'],
        image: shot('lead-pool'),
        story: {
          problem:
            'Leads landed in a group chat and sat there while reps argued over who owned them.',
          constraint:
            'Regulated vertical. Every lead needs consent on file, a do-not-call check, and a rep licensed in that state.',
          decision:
            'Presence-based routing with a claim window. A status-guarded atomic transition means exactly one rep claims, even on replays. A miss cascades to the next rep. Repeat misses bench you.',
          outcome:
            'Tenants cannot see each other\'s leads by construction, and every routing decision leaves an audit row. 3,715 automated tests.',
        },
        isPrivate: true,
      },
      {
        name: 'fex-quoter',
        year: '2026',
        title: 'FEX Quoter',
        blurb:
          'Agents log in, run a quote, and get the best-fit final-expense carrier. Saves every quote and audits every action.',
        tags: ['Node', 'Express', 'SQLite', 'Render'],
        image: shot('fex-quoter'),
        isPrivate: true,
      },
      {
        name: 'dialer',
        year: '2026',
        tests: 63,
        title: 'Dialer',
        blurb: 'Power dialer that runs a full outbound calling session in the browser.',
        tags: ['TypeScript', 'Vercel', 'Telephony'],
        isPrivate: true,
      },
      {
        name: 'fb-calendly-skeleton',
        year: '2026',
        title: 'FB → Calendly Pipeline',
        blurb: 'Books Facebook leads straight into Calendly appointments.',
        tags: ['Python', 'Webhooks', 'Automation'],
        isPrivate: true,
      },
      {
        name: 'CommSync',
        year: '2025',
        tests: 44,
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
        year: '2025',
        title: 'Triangular Arbitrage Bot',
        blurb: 'Scans Binance order books for triangular arbitrage across trading pairs.',
        tags: ['Python', 'Binance API', 'Trading'],
        repo: `${GH}/binance-triangular-arbitrage`,
      },
      {
        name: 'Quant',
        year: '2026',
        tests: 70,
        title: 'Quant',
        blurb: 'Where I backtest trading strategy ideas before risking money on them.',
        tags: ['Python', 'Research'],
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
        year: '2025',
        title: 'Notion Calendar',
        blurb: 'An embeddable calendar widget for Notion pages.',
        tags: ['HTML', 'Widget'],
        repo: `${GH}/notionCalendar`,
        live: 'https://garretn4.github.io/notionCalendar/',
      },
      {
        name: 'notionWeather',
        year: '2025',
        title: 'Notion Weather',
        blurb: 'A live weather widget for Notion dashboards.',
        tags: ['HTML', 'Widget'],
        repo: `${GH}/notionWeather`,
      },
      {
        name: 'notionSidebar',
        year: '2025',
        title: 'Notion Sidebar',
        blurb: 'A sidebar widget for navigating a Notion workspace.',
        tags: ['HTML', 'Widget'],
        repo: `${GH}/notionSidebar`,
      },
    ],
  },
]

export const stack = ['TypeScript', 'Python', 'Go', 'React', 'Node', 'FastAPI', 'SQLite', 'Raspberry Pi']

/** Sum of every card's test count. Used in the hero. */
export const totalTests = groups.flatMap((g) => g.projects).reduce((n, p) => n + (p.tests ?? 0), 0)
