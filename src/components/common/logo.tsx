import Link from 'next/link'
import { LuLeaf } from 'react-icons/lu'

export function Logo() {
  return (
    <Link href="/" className="flex items-center font-semibold">
      <LuLeaf className="mr-0.5 h-4 w-4" />
      <span>aridan</span>
    </Link>
  )
}
