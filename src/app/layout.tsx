import { Background } from '@/components/common/background'
import { Footer } from '@/components/common/footer'
import { Navbar } from '@/components/common/navbar'
import { ModeToggle } from '@/components/mode-toggle'
import { ThemeProvider } from '@/components/theme-provider'
import { cn, constructMetadata } from '@/lib/utils'
import { Plus_Jakarta_Sans as plusJakartaSans } from 'next/font/google'
import './globals.css'

const plusJakarta = plusJakartaSans({
  subsets: ['latin'],
})

export const metadata = constructMetadata()

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
      <body className={cn('relative h-full antialiased transition-all')}>
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
