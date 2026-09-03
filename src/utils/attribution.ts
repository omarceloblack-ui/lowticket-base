const ATTRIBUTION_KEY = 'lowticket_attribution'
const ATTRIBUTION_PARAMS = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
  'utm_id', 'fbclid', 'gclid', 'ttclid',
] as const

type Attribution = Partial<Record<(typeof ATTRIBUTION_PARAMS)[number], string>>

const readStoredAttribution = (): Attribution => {
  try {
    return JSON.parse(window.localStorage.getItem(ATTRIBUTION_KEY) || '{}') as Attribution
  } catch {
    return {}
  }
}

export function captureAttributionParams() {
  const current = new URLSearchParams(window.location.search)
  const attribution = readStoredAttribution()
  let changed = false

  ATTRIBUTION_PARAMS.forEach(param => {
    const value = current.get(param)
    if (value) {
      attribution[param] = value
      changed = true
    }
  })

  if (changed) {
    try {
      window.localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution))
    } catch {
      // A página continua funcional quando o navegador bloqueia armazenamento local.
    }
  }
}

export function withAttributionParams(url: string) {
  if (!url) return ''

  try {
    const target = new URL(url, window.location.origin)
    const attribution = readStoredAttribution()
    Object.entries(attribution).forEach(([param, value]) => {
      if (value && !target.searchParams.has(param)) target.searchParams.set(param, value)
    })
    return target.toString()
  } catch {
    return url
  }
}
