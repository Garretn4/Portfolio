import { marquee, totalTests } from '../data/projects.ts'
import CopyEmail from './CopyEmail.tsx'
import photo from '../../assets/images/garret.jpg'

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  // Duplicated once so the translateX(-50%) loop is seamless.
  const doubled = [...items, ...items]
  return (
    <div className={`marquee__row${reverse ? ' marquee__row--reverse' : ''}`}>
      {doubled.map((s, i) => (
        <span key={`${s}-${i}`} aria-hidden={i >= items.length}>
          {s}
        </span>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__inner">
        <img className="hero__photo" src={photo} alt="Garret Nelson" width="128" height="128" />
        <h1 className="hero__title">
          Software that <span className="hero__title-dim">holds up.</span>{' '}
          <span className="hero__title-accent">In use.</span>
        </h1>
        <p className="hero__sub">
          Lead routing, quoting, and dialing for insurance agencies. Opportunity screening and
          crypto inventories for federal contractors. {totalTests.toLocaleString()} automated
          tests across the repos.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#work">
            View my work <span aria-hidden="true">&rarr;</span>
          </a>
          <CopyEmail className="btn btn--ghost" label="Copy my email" />
        </div>
        <p className="hero__now">
          <span className="hero__now-dot" aria-hidden="true" />
          Now building ArxSpec: remote control for my own machines, with post-quantum crypto.
        </p>
      </div>
      <div className="marquee" aria-label="Areas of work and tools">
        <Row items={marquee.domains} />
        <Row items={marquee.tools} reverse />
      </div>
    </section>
  )
}
