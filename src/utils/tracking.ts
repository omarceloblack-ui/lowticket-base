import { tracking } from '../config/tracking'

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & { callMethod?: (...args: unknown[]) => void; queue?: unknown[]; loaded?: boolean; version?: string }
    _fbq?: Window['fbq']
  }
}

export function initializeTracking() {
  if (!tracking.metaPixelId || window.fbq) return

  type MetaPixel = NonNullable<Window['fbq']>
  const fbq: MetaPixel = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args)
    else fbq.queue?.push(args)
  }
  fbq.queue = []
  fbq.loaded = true
  fbq.version = '2.0'
  window.fbq = fbq
  window._fbq = fbq

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.append(script)

  fbq('init', tracking.metaPixelId)
  fbq('track', 'PageView')
}
