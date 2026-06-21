import Reveal from './Reveal'

const STEPS = [
  {
    n: '01',
    title: 'Pick a size',
    body: 'Nine layouts from a single photo to twelve — pick the one that fits what you want to keep.',
  },
  {
    n: '02',
    title: 'Drop in your photos',
    body: 'Upload straight from your phone and see them sitting in the frame in real time.',
  },
  {
    n: '03',
    title: 'Add a name or inscription',
    body: "It's raised right into the frame itself, not printed on — and it's free.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-soft/60 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            How it works
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 100}>
              <div className="h-full rounded-xl bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="font-mono text-sm text-brand">{step.n}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-ink-sec">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
