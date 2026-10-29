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
          'Opening government websites shouldn’t qualify as a fucking endurance sport. Enter a contractor, see what they actually win, and screen open federal opportunities against their history. Every yes and no comes with the rule behind it. Local database, simple Python setup.',
        tags: ['Python', 'SAM.gov', 'USASpending'],
        year: '2026',
        story: {
          problem:
            'Contractors screen hundreds of SAM.gov notices by hand and cannot say afterwards why one was worth chasing.',
          constraint:
            'The SAM.gov API allows ten calls a day. The test suite has to run offline, and no black box is allowed in the decision.',
          decision:
            'Local-first SQLite, two free data sources, and a named rule behind every yes and no. Each data pull shows whether it spends a quota slot before you press it.',
          outcome:
            'A named rule behind every decision, live API tests behind a separate marker, and a 900-line runbook.',
        },
        image: shot('capture-filter'),
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
        title: 'CommSync',
        blurb:
          'Flying the plane already seemed like enough shit to do. Streams ATC audio over a WebSocket to a Whisper backend, puts live transcripts on an iPad, and keeps a searchable log of what was said.',
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
        name: 'pi-stack',
        year: '2026',
        title: 'Pi Stack',
        blurb:
          'Two Raspberry Pis carrying the consequences of every “quick change.” Docker Compose services behind Caddy, with setup and recovery docs thorough enough to rebuild the whole arrangement from a blank SSD.',
        tags: ['Python', 'Raspberry Pi', 'Self-hosted'],
        isPrivate: true,
      },
      {
        name: 'home-automation-lab',
        year: '2025',
        title: 'Home Automation Lab',
        blurb:
          'Your house can have an IT department now. Home Assistant on a Raspberry Pi, ESP32 sensors through ESPHome, and a HomeKit bridge, with the automations, dashboards, and device configs holding the whole arrangement together.',
        tags: ['Home Assistant', 'ESPHome', 'HomeKit'],
        repo: `${GH}/home-automation-lab`,
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
        title: 'Lead Pool',
        blurb:
          'Introduced due process to “who gets this lead?” Routes inbound leads to the right rep as they arrive, checks state licenses, enforces claim windows, and records the reason behind every decision. The leads now have more procedural oversight than most group projects.',
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
            'Tenants cannot see each other\'s leads by construction, and every routing decision leaves an audit row.',
        },
        isPrivate: true,
      },
      {
        name: 'fex-quoter',
        year: '2026',
        title: 'FEX Quoter',
        blurb:
          'Asked which carrier fit best and assigned myself a statistics problem. Agents run a quote and get a best-fit final-expense carrier with an approval estimate that learns from real outcomes. Every quote gets saved. Every action leaves a receipt.',
        tags: ['Node', 'Express', 'SQLite', 'Bayesian'],
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
          'Watches the same coins on Coinbase, Kraken, Binance.US, and a DEX, nets out each venue\'s fees, and flags spreads that would still clear. Simulates the trade instead of placing it. Feel Free to use has never actually successfully traded for profit.',
        tags: ['Python', 'Exchange APIs', 'Trading'],
        repo: `${GH}/binance-triangular-arbitrage`,
      },
      {
        name: 'Quant',
        year: '2026',
        title: 'Quant',
        blurb:
          'A paper-trading leg capped at five dollars, a simulation fleet that culls and mutates strategy variants every six hours, and a review loop that can promote a winner but can never touch the risk limits. No one got the promotion.',
        tags: ['Python', 'Research'],
        isPrivate: true,
      },
      {
        name: 'ff-analyst',
        year: '2026',
        title: 'FF Analyst',
        blurb:
          'My friends are shit at fantasy football. Unfortunately, I know Python. Pulls Sleeper league data and NFL stats into DuckDB for local trade and league analysis. They’re running out of excuses.',
        tags: ['Python', 'DuckDB', 'Polars'],
        isPrivate: true,
      },
    ],
  },
  {
    id: 'early',
    label: 'Early Work',
    summary:
      'The 2022 bootcamp archives. Back when the inconveniences were smaller and the responses were still somewhat proportional.',
    projects: [
      {
        name: 'Weather-App',
        year: '2022',
        title: 'Weather Dashboard',
        blurb:
          'Checks the weather so I have something to blame. A five-day forecast that calls an API and remembers your recent searches.',
        tags: ['JavaScript', 'API'],
        repo: `${GH}/Weather-App`,
      },
      {
        name: 'Coding-Quiz',
        year: '2022',
        title: 'Coding Quiz',
        blurb:
          'A timed multiple-choice quiz on JavaScript basics with a high-score board saved in the browser.',
        tags: ['JavaScript', 'HTML'],
        repo: `${GH}/Coding-Quiz`,
      },
      {
        name: 'Day-Scheduler',
        year: '2022',
        title: 'Work Day Scheduler',
        blurb:
          'Gave procrastination a color scheme. An hourly planner that marks past, present, and future and saves notes locally. The schedule exists. Compliance is a separate issue.',
        tags: ['JavaScript', 'jQuery'],
        repo: `${GH}/Day-Scheduler`,
      },
      {
        name: 'RandomPWGenerator',
        year: '2022',
        title: 'Password Generator',
        blurb:
          'Generates a random password to the length and character rules you pick. I am not going to remember it regardless. I have Face ID.',
        tags: ['JavaScript', 'HTML'],
        repo: `${GH}/RandomPWGenerator`,
      },
      {
        name: 'readME-Gen',
        year: '2022',
        title: 'README Generator',
        blurb:
          'Wrote a tool to explain the tools. A command-line questionnaire that turns your answers into a formatted README. The documentation has been assigned to software.',
        tags: ['Node', 'CLI'],
        repo: `${GH}/readME-Gen`,
      },
    ],
  },
]

/** Two scrolling rows under the hero: what the work is about, then what it is built with. */
export const marquee = {
  domains: [
    'Lead routing',
    'Quoting',
    'Dialing',
    'Federal capture',
    'Pricing',
    'Compliance',
    'Self-hosted',
    'Trading research',
  ],
  tools: [
    'TypeScript',
    'Python',
    'React',
    'Node',
    'FastAPI',
    'SQLite',
    'Supabase',
    'Twilio',
    'Whisper',
    'DuckDB',
    'Raspberry Pi',
  ],
}
