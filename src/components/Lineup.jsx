import { SKUS, CONFIGURATOR_URL } from '../config/skus'
import MiniGrid from './MiniGrid'
import Reveal from './Reveal'

export default function Lineup() {
  return (
    <section id="lineup" className="bg-soft/60 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-brand">
              Sizes &amp; prices
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Nine sizes, ₱388–₱2,488
            </h2>
          </div>
          <a
            href={CONFIGURATOR_URL}
            className="rounded-full bg-primary px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wide text-ink shadow-card transition-all duration-150 hover:scale-105 hover:bg-primary-hover active:scale-95"
          >
            Build yours
          </a>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKUS.map((sku, i) => (
            <Reveal key={sku.name} delay={(i % 3) * 80}>
              <div
                className={`flex items-center gap-4 rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                  sku.popular
                    ? 'border-selected bg-card shadow-lift hover:shadow-lift'
                    : 'border-line bg-card shadow-card hover:shadow-lift'
                }`}
              >
                <div className="w-14 shrink-0">
                  <MiniGrid grid={sku.grid} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {sku.name}
                    </h3>
                    {sku.popular && (
                      <span className="rounded-full bg-promo px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-ink">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-xs text-ink-muted">
                    {sku.slots} {sku.slots === 1 ? 'photo' : 'photos'} · {sku.grid}
                  </p>
                </div>
                <p className="font-mono text-lg font-semibold text-ink">
                  ₱{sku.price.toLocaleString()}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 font-mono text-xs text-ink-muted">
          Personalization (name/inscription + icon) is always ₱0. Color choice
          doesn't change the price.
        </p>
      </div>
    </section>
  )
}
