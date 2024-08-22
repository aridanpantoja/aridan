'use client'

import { Button } from '@/components/shadcn-ui/button'
import { useState } from 'react'
import { MdContentCopy } from 'react-icons/md'

type CopyButtonProps = {
  textToCopy: string
  label: string
  labelAfterCopy: string
}

export function CopyButton({
  textToCopy,
  label,
  labelAfterCopy,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <Button variant="outline" onClick={handleCopy}>
      {!copied && <MdContentCopy className="mr-1" />}
      {copied ? labelAfterCopy : label}
    </Button>
  )
}
