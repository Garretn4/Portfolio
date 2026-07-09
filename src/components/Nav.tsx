const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="nav">
      <a className="nav__brand" href="#top">
        GN<span className="nav__dot">.</span>
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
    </header>
  )
}
