import { Card } from '@/components/card'

export default function Home() {
  return (
    <>
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Recent works</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card
            imgUrl="/images/teste.png"
            imgAlt="Teste"
            title="Jornada da Inclusão Digital"
          />
          <Card imgUrl="/images/teste.png" imgAlt="Teste" title="Nubank" />
          <Card imgUrl="/images/teste.png" imgAlt="Teste" title="Nubank" />
          <Card imgUrl="/images/teste.png" imgAlt="Teste" title="Nubank" />
        </div>
      </section>
    </>
  )
}
