import { CONFIGURATOR_URL } from '../config/skus'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div className="order-2 lg:order-1">
          <p className="font-mono text-xs uppercase tracking-widest text-brand">
            Custom magnetic photo frames
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            Made to keep.
          </h1>
          <p className="mt-5 max-w-md text-lg text-ink-sec">
            Your photos, your colors, your words — design a frame yourself in
            a couple of minutes and see exactly what you're getting before
            you order.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={CONFIGURATOR_URL}
              className="rounded-full bg-primary px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-wide text-ink shadow-lift transition hover:bg-primary-hover"
            >
              Build yours
            </a>
            <a
              href="#lineup"
              className="font-mono text-sm uppercase tracking-wide text-ink-sec underline-offset-4 hover:text-ink hover:underline"
            >
              See sizes &amp; prices
            </a>
          </div>
          <p className="mt-6 font-mono text-xs text-ink-muted">
            Starting at ₱388 · Personalization always free
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <img
            src="/images/hero.jpg"
            alt="SariSari Snaps magnetic photo frames displayed on a wall, filled with personal photos"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lift"
            width={1920}
            height={1282}
          />
        </div>
      </div>
    </section>
  )
}
