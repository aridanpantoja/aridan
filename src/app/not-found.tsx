import { Section } from '@/components/common/section'
import { buttonVariants } from '@/components/shadcn-ui/button'
import Link from 'next/link'
import { TbAlertTriangleFilled } from 'react-icons/tb'

export default function NotFoundPage() {
  return (
    <>
      <Section variant="center" maxWidth="prose" className="h-full">
        <TbAlertTriangleFilled className="size-20 text-primary" />

        <h1>Oops, página não encontrada!</h1>

        <p>
          Desculpe, mas a página que você está procurando não existe. Talvez
          você possa tentar novamente ou voltar para a página inicial.
        </p>

        <Link href="/" className={buttonVariants()}>
          Voltar à pagina inicial
        </Link>
      </Section>
    </>
  )
}
