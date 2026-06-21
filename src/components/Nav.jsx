import { CONFIGURATOR_URL } from '../config/skus'

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-page/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-display text-lg font-semibold text-brand">
          SariSari Snaps
        </a>
        <nav className="hidden items-center gap-6 font-mono text-xs uppercase tracking-wide text-ink-sec sm:flex">
          <a href="#how-it-works" className="transition-colors hover:text-ink">How it works</a>
          <a href="#lineup" className="transition-colors hover:text-ink">Sizes &amp; prices</a>
          <a href="#signup" className="transition-colors hover:text-ink">Get on the list</a>
        </nav>
        <a
          href={CONFIGURATOR_URL}
          className="rounded-full bg-primary px-4 py-2 font-mono text-xs font-medium uppercase tracking-wide text-ink shadow-card transition-all duration-150 hover:scale-105 hover:bg-primary-hover active:scale-95"
        >
          Build yours
        </a>
      </div>
    </header>
  )
}
