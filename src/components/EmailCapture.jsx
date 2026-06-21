import { useState } from 'react'
import { subscribeEmail } from '../lib/subscribe'
import Reveal from './Reveal'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | done | error
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setError('')
    const result = await subscribeEmail(email, name)
    if (result.ok) {
      setStatus('done')
    } else {
      setStatus('error')
      setError(result.error || 'Something went wrong — try again?')
    }
  }

  return (
    <section id="signup" className="bg-brand py-16 sm:py-24">
      <Reveal className="mx-auto max-w-2xl px-5 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-promo">
          Get on the list
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-page sm:text-4xl">
          First dibs on new sizes and the occasional promo.
        </h2>
        <p className="mt-3 text-page/80">
          No spam — just the rare email when something's worth telling you
          about.
        </p>

        {status === 'done' ? (
          <p className="mt-8 animate-pop-in font-mono text-sm text-promo">
            You're on the list. Made to keep. 🎉
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="text"
              placeholder="First name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-full border border-page/30 bg-page/10 px-5 py-3 text-page placeholder:text-page/60 transition-colors focus:border-promo focus:outline-none sm:w-40"
            />
            <input
              type="email"
              required
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full flex-1 rounded-full border border-page/30 bg-page/10 px-5 py-3 text-page placeholder:text-page/60 transition-colors focus:border-promo focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-full bg-primary px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wide text-ink transition-all duration-150 hover:scale-105 hover:bg-primary-hover active:scale-95 disabled:scale-100 disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Sign up'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="mt-4 animate-pop-in font-mono text-sm text-promo">{error}</p>
        )}
      </Reveal>
    </section>
  )
}
