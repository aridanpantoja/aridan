'use client'

import { getLocalStorage, setLocalStorage } from '@/lib/storage-helper'
import { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

export function CookieConsent() {
  const [cookieConsent, setCookieConsent] = useState(false)

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null)

    setCookieConsent(storedCookieConsent)
  }, [setCookieConsent])

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied'

    if (typeof window.gtag !== 'undefined') {
      window.gtag('consent', 'update', {
        analytics_storage: newValue,
      })
    }

    setLocalStorage('cookie_consent', cookieConsent)
  }, [cookieConsent])

  return (
    <div
      className={cn(
        'fixed  bottom-0 z-30  m-4 w-full rounded-sm border bg-background p-6 shadow sm:max-w-96',
        cookieConsent !== !null ? 'block' : 'hidden',
      )}
    >
      <div className="flex flex-col items-center justify-center gap-4 text-center sm:text-start">
        <p>
          Utilizamos cookies para melhorar sua experiência de navegação. Ao
          aceitar, você concorda com nosso uso de cookies.
        </p>
        <div className="flex w-full justify-center gap-4 sm:justify-start">
          <Button variant="secondary" onClick={() => setCookieConsent(false)}>
            Recusar
          </Button>
          <Button onClick={() => setCookieConsent(true)}>Aceitar</Button>
        </div>
      </div>
    </div>
  )
}
