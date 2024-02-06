'use client'

import { Suspense } from 'react'
import { GoogleAnalytics } from './google-analytics'

export default function Analytics() {
  return (
    <Suspense>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-JC1MXC2ZWY" />
    </Suspense>
  )
}
