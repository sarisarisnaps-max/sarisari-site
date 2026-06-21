import { CONFIGURATOR_URL } from '../config/skus'

// Social/marketplace links are placeholders until those channels go live
// (Lazada, Shopee, TikTok Shop — see project brief). One-line edit each once
// real URLs exist.
const LINKS = [
  { label: 'Instagram', href: '#' },
  { label: 'TikTok', href: '#' },
  { label: 'Lazada', href: '#' },
  { label: 'Shopee', href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line/70 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <p className="font-display text-sm text-ink-sec">
          SariSari Snaps · Made to keep.
        </p>
        <nav className="flex gap-5 font-mono text-xs uppercase tracking-wide text-ink-muted">
          {LINKS.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
          <a href={CONFIGURATOR_URL} className="text-brand transition-colors hover:text-ink">
            Order
          </a>
        </nav>
      </div>
    </footer>
  )
}
