import { stack, totalTests } from '../data/projects.ts'
import CopyEmail from './CopyEmail.tsx'
import photo from '../../assets/images/garret.jpg'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__inner">
        <div className="hero__text">
          <p className="hero__eyebrow">Systems Architect</p>
          <h1 className="hero__name">Garret Nelson</h1>
          <p className="hero__lead">
            I take a rough process and turn it into something that{' '}
            <span className="grad">runs itself</span>.
          </p>
          <p className="hero__sub">
            Lead routing, quoting, and dialing tools for insurance agencies. Compliance tooling for
            federal contractors. {totalTests.toLocaleString()} automated tests across the repos.
          </p>
          <p className="hero__now">
            <span className="hero__now-dot" aria-hidden="true" />
            Now building ArxSpec: remote control for my own machines, with post-quantum crypto.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#work">
              See the work
            </a>
            <CopyEmail className="btn btn--ghost" label="Copy my email" />
          </div>
          <ul className="hero__stack">
            {stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="hero__photo-wrap">
          <div className="hero__photo-ring" aria-hidden="true" />
          <img className="hero__photo" src={photo} alt="Garret Nelson" />
        </div>
      </div>
    </section>
  )
}
