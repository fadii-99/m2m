/**
 * Backend the site talks to. The API lives on its own host (see deploy/m2m),
 * so these requests are cross-origin — the backend allows msg2msg.com through
 * WEBSITE_ORIGINS in server/settings.py.
 *
 * Override for local work with VITE_API_BASE_URL in website/.env.local, e.g.
 *   VITE_API_BASE_URL=http://127.0.0.1:8000
 */
export const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || 'https://backendserver.msg2msg.com'
).replace(/\/$/, '')

export const API = {
  contact: `${API_BASE_URL}/api/website/contact/`,
}

/**
 * POST JSON and normalize the two failure shapes the caller cares about:
 * a DRF field-error object (400) and everything else (network, 429, 5xx).
 */
export async function postJson(url, payload) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  })

  let data = null
  try {
    data = await res.json()
  } catch {
    // A proxy error page or an empty body — handled by the !res.ok branch.
  }

  if (res.ok) return { ok: true, data }

  return {
    ok: false,
    status: res.status,
    // DRF returns {field: ["message"]} on 400 and {error: "..."} on 429.
    fieldErrors:
      res.status === 400 && data && typeof data === 'object' && !data.error ? data : null,
    message:
      (data && (data.error || data.detail)) ||
      (res.status === 429
        ? 'Too many messages sent. Try again a little later.'
        : 'Something went wrong sending your message.'),
  }
}
