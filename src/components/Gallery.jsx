import Reveal from './Reveal'

const IMAGES = [
  {
    src: '/images/gallery-2.jpg',
    alt: 'A SariSari Snaps Gridstagram frame labeled "Pulag 2025" filled with hiking photos',
  },
  {
    src: '/images/gallery-3.jpg',
    alt: 'A hand holding a SariSari Snaps photo tile of a cat, surrounded by scattered colored frames',
  },
  {
    src: '/images/gallery-4.jpg',
    alt: 'The full SariSari Snaps frame color range laid out on a table',
  },
]

export default function Gallery() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            A few we've made
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {IMAGES.map((img, i) => (
            <Reveal key={img.src} delay={i * 100} className="overflow-hidden rounded-xl">
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-[3/2] w-full object-cover shadow-card transition-transform duration-500 hover:scale-110"
                width={1920}
                height={1282}
                loading="lazy"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
