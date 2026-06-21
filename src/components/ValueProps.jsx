export default function ValueProps() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <img
            src="/images/personalization.jpg"
            alt="Four SariSari Snaps frames in different colors, each with a raised inscription reading '2025 Mother of the Year'"
            className="aspect-[3/2] w-full rounded-2xl object-cover shadow-card"
            width={1616}
            height={1080}
            loading="lazy"
          />
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-brand">
              Personalization
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              A real inscription, not a sticker.
            </h2>
            <p className="mt-4 text-lg text-ink-sec">
              Add a name, a date, or a short line — it's raised right into
              the frame's own color, not printed on top. Pick from a small
              set of icons too. Both are free on every order, every size.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="lg:order-2">
            <img
              src="/images/bts.jpg"
              alt="Behind the scenes: a SariSari Snaps packing desk with holographic mailers and frames being prepared for shipping"
              className="aspect-[3/2] w-full rounded-2xl object-cover shadow-card"
              width={1616}
              height={1080}
              loading="lazy"
            />
          </div>
          <div className="lg:order-1">
            <p className="font-mono text-xs uppercase tracking-widest text-brand">
              Made to order
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Packed one at a time.
            </h2>
            <p className="mt-4 text-lg text-ink-sec">
              Every frame is made after you order it — not pulled off a shelf.
              Nothing ships until it's been checked by hand.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
