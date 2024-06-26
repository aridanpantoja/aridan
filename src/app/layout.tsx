import { Navbar } from '@/components/navbar'
import { cn } from '@/lib/utils'
import { Plus_Jakarta_Sans as plusJakartaSans } from 'next/font/google'
import './globals.css'

const plusJakarta = plusJakartaSans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn('relative h-full antialiased', plusJakarta.className)}
      >
        <main className="relative flex min-h-screen justify-center">
          <div className="grid w-full max-w-screen-xl grid-cols-1 space-y-16 px-4 py-20 lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <Navbar />
            <main className="col-span-2">{children}</main>
          </div>
        </main>
      </body>
    </html>
  )
}
