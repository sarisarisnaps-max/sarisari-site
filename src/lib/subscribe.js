// Posts to the SAME Apps Script Web App the configurator uses (action:
// "subscribeEmail" — added 2026-06-21 specifically for this site). It only
// ever calls addToMailchimp() server-side; it never touches Drive, the Orders
// Sheet, or anything order-related. text/plain avoids a CORS preflight, same
// trick the configurator's lib/api.js uses.
const SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL
const API_TOKEN = import.meta.env.VITE_API_TOKEN

export async function subscribeEmail(email, name) {
  if (!SCRIPT_URL) {
    // No env var set yet (e.g. local dev before the owner fills .env.local) —
    // fail loudly in dev, but don't crash the page.
    console.warn('VITE_APPS_SCRIPT_URL is not set — signup was not sent.')
    return { ok: false, error: 'Signup is not configured yet.' }
  }

  try {
    const res = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        action: 'subscribeEmail',
        email,
        name: name || '',
        token: API_TOKEN,
      }),
    })
    const data = await res.json()
    return data
  } catch (err) {
    return { ok: false, error: String(err) }
  }
}
