import { stack } from '../data/projects.ts'
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
            I build <span className="grad">automation</span>, <span className="grad">trading systems</span>,
            and <span className="grad">internal tools</span> in TypeScript and Python.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#work">
              View my work
            </a>
            <CopyEmail className="btn btn--ghost" label="Get in touch" />
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
