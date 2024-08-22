import { type ClassValue, clsx } from 'clsx'
import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(rawDate: string | undefined) {
  if (!rawDate) {
    return 'Atualmente'
  }

  try {
    const date = format(parseISO(rawDate), 'MMMM yyyy', { locale: ptBR })
    const stringDate = date.charAt(0).toUpperCase() + date.slice(1)
    return stringDate
  } catch (error) {
    console.error('Data inválida:', error)
    return 'Data inválida'
  }
}
