import photo from '../../assets/images/garret.jpg'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__pill">
        <a className="nav__who" href="#top">
          <span className="nav__avatar">
            <img src={photo} alt="" width="32" height="32" />
            <span className="nav__online" aria-hidden="true" />
          </span>
          <span className="nav__id">
            <span className="nav__name">Garret Nelson</span>
            <span className="nav__role">Sales · Federal pricing · Software</span>
          </span>
        </a>
        <nav className="nav__links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a
            className="nav__cta"
            href="https://github.com/Garretn4"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}
