import Link from 'next/link'
import { LuLeaf } from 'react-icons/lu'

export function Logo() {
  return (
    <Link href="/" className="hidden items-center font-semibold md:flex">
      <LuLeaf className="mr-0.5 h-4 w-4" />
      <span>aridan</span>
    </Link>
  )
}
