import { buttonVariants } from '@/components/shadcn-ui/button'
import { FaFileArrowDown } from 'react-icons/fa6'

type DownloadButtonProps = {
  filePath: string
  fileName: string
  label: string
}

export function DownloadButton({
  filePath,
  fileName,
  label,
}: DownloadButtonProps) {
  return (
    <a href={filePath} download={fileName} className={buttonVariants()}>
      <FaFileArrowDown className="mr-1" />
      {label}
    </a>
  )
}
