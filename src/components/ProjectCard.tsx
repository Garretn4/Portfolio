import type { Project } from '../data/projects.ts'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
    <path
      d="M7 17L17 7M17 7H8M17 7V16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <div className="card__head">
        <h3 className="card__title">{project.title}</h3>
        <span className="card__badges">
          {project.live && <span className="card__badge">Live</span>}
          {project.isPrivate && <span className="card__badge card__badge--private">Private</span>}
        </span>
      </div>
      <p className="card__blurb">{project.blurb}</p>
      <ul className="card__tags">
        {project.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="card__links">
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer">
            Code <ArrowIcon />
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer">
            Live demo <ArrowIcon />
          </a>
        )}
      </div>
    </article>
  )
}
