'use client'

import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { TbMoon, TbSun } from 'react-icons/tb'

export function ToggleTheme() {
  const { theme, setTheme } = useTheme()

  function handleClick() {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <Button variant="ghost" size="icon" onClick={() => handleClick()}>
      <TbSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <TbMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Mudar tema</span>
    </Button>
  )
}
