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

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aridan | Front-Developer',
  description:
    'Apaixonado por tecnologia, estudante de Engenharia de Computação e Redes de Computadores.',
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
