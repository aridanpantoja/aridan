'use client'

import { setCookie, hasCookie } from 'cookies-next'
import { useState, useEffect } from 'react'
import { Button } from '../ui/button'

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    if (!hasCookie('consent')) {
      setShowConsent(true)
    }
  }, [])

  useEffect(() => {
    const newValue = hasCookie('consent') ? 'granted' : 'denied'

    window.gtag('consent', 'update', {
      analytics_storage: newValue,
    })
  })

  function acceptConsent() {
    setShowConsent(false)
    setCookie('consent', 'true')
  }

  function declineConsent() {
    setShowConsent(false)
  }

  if (!showConsent) {
    return null
  }

  return (
    <div className="w-ful fixed bottom-0  z-30 m-4 rounded-sm border bg-background p-6 shadow sm:max-w-96">
      <div className="flex flex-col items-center justify-center gap-4 text-center sm:text-start">
        <p>
          Utilizamos cookies para melhorar sua experiência de navegação. Ao
          aceitar, você concorda com nosso uso de cookies.
        </p>
        <div className="flex w-full justify-center gap-4 sm:justify-start">
          <Button variant="secondary" onClick={declineConsent}>
            Recusar
          </Button>
          <Button onClick={acceptConsent}>Aceitar</Button>
        </div>
      </div>
    </div>
  )
}
