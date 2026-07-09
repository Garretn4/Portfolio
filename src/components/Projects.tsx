import { groups } from '../data/projects.ts'
import ProjectCard from './ProjectCard.tsx'
import Reveal from './Reveal.tsx'

export default function Projects() {
  return (
    <section className="work" id="work">
      <div className="section-head">
        <p className="section-head__eyebrow">Selected Work</p>
        <h2 className="section-head__title">Things I've built</h2>
      </div>

      {groups.map((group) => (
        <div className="group" key={group.id}>
          <Reveal>
            <div className="group__head">
              <h3 className="group__label">{group.label}</h3>
              <p className="group__summary">{group.summary}</p>
            </div>
          </Reveal>
          <div className="group__grid">
            {group.projects.map((project, i) => (
              <Reveal key={project.name} delay={i * 60}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
