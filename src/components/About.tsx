import Reveal from './Reveal.tsx'

export default function About() {
  return (
    <section className="about" id="about">
      <Reveal>
        <div className="about__inner">
          <p className="section-head__eyebrow">About</p>
          <h2 className="about__title">
            Sales, federal capture and pricing, and software. I work where revenue meets
            operations.
          </h2>
          <p className="about__body">
            Most of my projects start as a real problem: leads falling through the cracks, a
            calling workflow that takes too many clicks, a trading idea worth testing. I build the
            whole thing and troubleshoot until it holds up. TypeScript for the front end, Python
            for automation and data work, and a Raspberry Pi for anything that
            needs to stay running.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
