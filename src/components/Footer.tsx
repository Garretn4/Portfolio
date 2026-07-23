import CopyEmail, { EMAIL } from './CopyEmail.tsx'

const socials = [{ label: 'GitHub', href: 'https://github.com/Garretn4' }]

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__glow" aria-hidden="true" />
      <div className="footer__inner">
        <p className="footer__eyebrow">Contact</p>
        <h2 className="footer__title">
          Let&apos;s build something.
        </h2>
        <CopyEmail className="footer__mail" label={EMAIL} />
        <div className="footer__links">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} Garret Nelson · Built with React &amp; Vite
        </p>
      </div>
    </footer>
  )
}
