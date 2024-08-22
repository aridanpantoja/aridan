import { Background } from '@/components/common/background'
import { Footer } from '@/components/common/footer'
import { Navbar } from '@/components/common/navbar'
import { ModeToggle } from '@/components/theme/mode-toggle'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { siteConfig } from '@/config'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import { Plus_Jakarta_Sans as plusJakartaSans } from 'next/font/google'
import './globals.css'

const plusJakarta = plusJakartaSans({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    'Aridan',
    'Pantoja',
    'Web Developer',
    'Castanhal',
    'Pará',
    'Front-End',
  ],
  authors: [{ name: 'Aridan Pantoja', url: siteConfig.url }],
  creator: 'Aridan Pantoja',
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
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@Iracema_ema',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={plusJakarta.className}
      suppressHydrationWarning
    >
      <body className={cn('relative h-full antialiased')}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="flex min-h-screen w-full justify-center">
            <div className="flex w-full max-w-screen-lg flex-col px-2.5">
              <Navbar />
              <main className="flex-1 flex-grow space-y-16 py-20">
                {children}
              </main>
              <Footer />
            </div>
          </div>
          <Background />
          <ModeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
