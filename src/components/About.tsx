import Reveal from './Reveal.tsx'

export default function About() {
  return (
    <section className="about" id="about">
      <Reveal>
        <div className="about__inner">
          <p className="section-head__eyebrow">About</p>
          <h2 className="about__title">Most of my projects start as a real problem.</h2>
          <p className="about__body">
            Leads falling through the cracks, a calling workflow that takes too many clicks, a
            contractor drowning in SAM.gov notices. I build the whole thing and keep fixing it
            until it holds up. TypeScript for the front end, Python and Go for the services, and a
            rack of Raspberry Pis at home for anything that needs to stay running.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
