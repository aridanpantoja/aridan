import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex w-full items-center justify-center border-t p-6 text-center text-sm text-muted-foreground">
      <p>
        Feito por{' '}
        <Link
          href="https://instagram.com/aridan.dev"
          className="underline underline-offset-4"
        >
          Aridan
        </Link>
        . O código-fonte está disponível no{' '}
        <Link
          href="https://github.com/aridanpantoja/aridan"
          className="underline underline-offset-4"
        >
          Github
        </Link>
      </p>
    </footer>
  )
}
