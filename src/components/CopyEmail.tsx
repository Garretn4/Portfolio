import { useRef, useState } from 'react'

export const EMAIL = 'garrettoddnelson@gmail.com'

export default function CopyEmail({ className, label }: { className?: string; label: string }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number>(undefined)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      // No clipboard access (very old browser / insecure context): fall back to mailto
      window.location.href = `mailto:${EMAIL}`
      return
    }
    setCopied(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button type="button" className={className} onClick={copy} aria-live="polite">
      {copied ? 'Email copied!' : label}
    </button>
  )
}
