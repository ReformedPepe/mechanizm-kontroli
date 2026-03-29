declare global {
  interface Window {
    fbq: (
      action: string,
      event: string,
      params?: Record<string, unknown>
    ) => void
  }
}

type MetaEvent = 'ViewContent' | 'InitiateCheckout' | 'Purchase'

interface EventParams {
  value?: number
  currency?: string
  content_name?: string
  [key: string]: unknown
}

export function fbEvent(event: MetaEvent, params?: EventParams) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', event, params)
  }
}

export function fbViewContent() {
  fbEvent('ViewContent', {
    content_name: 'Mechanizm Kontroli',
    value: 47,
    currency: 'PLN',
  })
}

export function fbInitiateCheckout() {
  fbEvent('InitiateCheckout', {
    value: 47,
    currency: 'PLN',
  })
}

export function fbPurchase() {
  fbEvent('Purchase', {
    value: 47,
    currency: 'PLN',
  })
}
