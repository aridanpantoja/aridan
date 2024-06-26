import { Navbar } from '@/components/navbar'
import { cn } from '@/lib/utils'
import { Plus_Jakarta_Sans as plusJakartaSans } from 'next/font/google'
import './globals.css'

const plusJakarta = plusJakartaSans({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={plusJakarta.className}>
      <body className={cn('relative h-full antialiased')}>
        <div className="relative flex min-h-screen w-full justify-center">
          <div className="w-full max-w-screen-lg">
            <Navbar />
            <main className="flex flex-col gap-16 px-2.5 py-20">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
