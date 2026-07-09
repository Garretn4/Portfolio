import Reveal from './Reveal.tsx'

export default function About() {
  return (
    <section className="about" id="about">
      <Reveal>
        <div className="about__inner">
          <p className="section-head__eyebrow">About</p>
          <h2 className="about__title">
            I like taking a rough process and turning it into something that runs itself.
          </h2>
          <p className="about__body">
            Most of my projects start as a real problem — leads falling through the cracks, a
            calling workflow that takes too many clicks, a trading idea worth testing. I build the
            service end to end, ship it, and iterate. Lately that means TypeScript on the front and
            edge, Python for the automation and data work, and a rack of Raspberry Pis for anything
            that should just keep running at home.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
