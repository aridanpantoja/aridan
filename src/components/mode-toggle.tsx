'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

import { Button } from '@/components/shadcn-ui/button'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  function handleClick() {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <Button
      size="icon"
      onClick={() => handleClick()}
      className="fixed bottom-6 right-6"
    >
      <SunIcon className="size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <MoonIcon className="dark:rotate-100 absolute size-5 rotate-0 scale-100 transition-all dark:scale-0" />
      <span className="sr-only">Trocar tema</span>
    </Button>
  )
}
