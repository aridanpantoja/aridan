'use client'

import { pageview } from '@/lib/gtag'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { Suspense, useEffect } from 'react'

function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + searchParams.toString()

    pageview(GA_MEASUREMENT_ID, url)
  }, [pathname, searchParams, GA_MEASUREMENT_ID])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('consent', 'default', {
                'analytics_storage': 'denied'
            });
            
            gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
            });
            `,
        }}
      />
    </>
  )
}

export default function Analytics() {
  return (
    <Suspense>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-JC1MXC2ZWY" />
    </Suspense>
  )
}
