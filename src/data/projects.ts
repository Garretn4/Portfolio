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
        tests: 3265,
        story: {
          problem:
            'Contractors screen hundreds of SAM.gov notices by hand and cannot say afterwards why one was worth chasing.',
          constraint:
            'The SAM.gov API allows ten calls a day. The test suite has to run offline, and no black box is allowed in the decision.',
          decision:
            'Local-first SQLite, two free data sources, and a named rule behind every yes and no. Each data pull shows whether it spends a quota slot before you press it.',
          outcome:
            '3,265 offline tests, live API tests behind a separate marker, and a 900-line runbook.',
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
    id: 'aviation',
    label: 'Aviation',
    summary: 'Speech-to-text for the radio, built for an iPad in the cockpit.',
    projects: [
      {
        name: 'CommSync',
        year: '2025',
        tests: 44,
        title: 'CommSync',
        blurb:
          'Transcribes air traffic control audio live on an iPad so the pilot is not scribbling clearances mid-flight. Streams audio over a WebSocket to a Whisper backend and keeps a searchable log.',
        tags: ['Python', 'FastAPI', 'Whisper', 'WebSockets'],
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
          'One small program that turns the machines I already own into a remote control. Start, stop, and watch a script on the box it belongs on, from a phone. Wakes sleeping machines, invites guests with a link, and runs end-to-end encrypted with no cloud account.',
        tags: ['Go', 'Networking', 'Post-quantum crypto'],
        year: '2026',
        tests: 2281,
        image: shot('arxspec'),
        isPrivate: true,
      },
      {
        name: 'pi-stack',
        year: '2026',
        tests: 96,
        title: 'Pi Stack',
        blurb: 'Docker Compose services behind Caddy on a pair of Raspberry Pis, plus the setup and recovery docs to rebuild it from a blank SSD.',
        tags: ['Python', 'Raspberry Pi', 'Self-hosted'],
        isPrivate: true,
      },
      {
        name: 'home-automation-lab',
        year: '2025',
        title: 'Home Automation Lab',
        blurb: 'Home Assistant on a Raspberry Pi, ESP32 sensors via ESPHome, and a HomeKit bridge. Automations, dashboards, and device configs.',
        tags: ['Home Assistant', 'ESPHome', 'HomeKit'],
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
          'Agents log in, run a quote, and get the best-fit final-expense carrier with an approval estimate that learns from real outcomes. Saves every quote and audits every action.',
        tags: ['Node', 'Express', 'SQLite', 'Nearest neighbors', 'Bayesian'],
        image: shot('fex-quoter'),
        story: {
          problem:
            'Carrier underwriting guides say who should be approved. Real decisions drift from the guides, and agents only learn that by getting declined.',
          constraint:
            'Outcome history starts at zero and stays small per carrier, so the estimate has to be useful with no data and cannot be swung by one decline.',
          decision:
            'Rules produce a prior. Nearest neighbors then score every logged outcome for similarity on age, tobacco, gender, BMI, state, face amount, and conditions, drop weak matches, and weight the rest by similarity and a 180-day half-life. A Beta-Binomial update blends that evidence with the prior, where the rules count as five observations.',
          outcome:
            'With no history the estimate equals the rules. As similar outcomes accumulate it converges on the observed approval rate, and each carrier shows the top alternatives that placed its declines.',
        },
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
    ],
  },
  {
    id: 'trading',
    label: 'Quant & Data',
    summary: 'Bots, backtests, and analysis against live data.',
    projects: [
      {
        name: 'binance-triangular-arbitrage',
        year: '2025',
        title: 'Exchange Arbitrage Scanner',
        blurb:
          'Watches the same coins on Coinbase, Kraken, Binance.US, and a DEX, nets out each venue\'s fees, and flags spreads that would still clear. Simulates the trade instead of placing it.',
        tags: ['Python', 'Exchange APIs', 'Trading'],
        repo: `${GH}/binance-triangular-arbitrage`,
      },
      {
        name: 'Quant',
        year: '2026',
        tests: 85,
        title: 'Quant',
        blurb:
          'A paper-trading leg capped at five dollars, a simulation fleet that culls and mutates strategy variants every six hours, and a review loop that can promote a winner but can never touch the risk limits.',
        tags: ['Python', 'Research'],
        isPrivate: true,
      },
      {
        name: 'ff-analyst',
        year: '2026',
        tests: 185,
        title: 'FF Analyst',
        blurb:
          'Trade and league analysis for Sleeper fantasy football leagues. Pulls league data and NFL stats into DuckDB and runs the analysis locally.',
        tags: ['Python', 'DuckDB', 'Polars', 'NiceGUI'],
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
