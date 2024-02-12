import Analytics from '@/components/analytics/analytics'
import { CookieConsent } from '@/components/analytics/cookie-consent'
import Footer from '@/components/footer'
import NavBar from '@/components/navbar/nav-bar'
import { ScrollToTopButton } from '@/components/scroll-to-top'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/config/site'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    'Aridan',
    'Front-end Developer',
    'React',
    'Next.js',
    'Typescript',
    'Javascript',
    'HTML',
    'CSS',
  ],
  authors: [
    {
      name: 'Aridan',
      url: 'https://aridan.dev',
    },
  ],
  creator: 'Aridan',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  icons: {
    icon: '/metadata/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn('relative h-full antialiased', plusJakartaSans.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <main className="relative flex min-h-screen flex-col">
            <NavBar />
            <div className="flex-1 flex-grow">{children}</div>
            <Footer />
            <ScrollToTopButton />
            <CookieConsent />
            <Analytics />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
