import { HeadSection } from '@/components/@pages/head-section'
import { ProjectGrid } from '@/components/project/project-grid'
import { Section } from '@/components/section/section'
import { SectionHeader } from '@/components/section/section-header'
import React from 'react'

export default function NotFoundPage() {
  return (
    <>
      <HeadSection
        title="404"
        description="Desculpe! Essa página não é o que você está procurando. Você pode voltar para a home ou que tal olhar algum dos meus projetos?"
      />
      <Section background="gray">
        <div className="flex flex-col items-center gap-8 text-center">
          <SectionHeader
            sectionTitle="Projetos em Destaque"
            linkHref="/projetos"
            linkLabel="Ver projetos"
            withLink
          />

          <ProjectGrid category="main" columns="three" />
        </div>
      </Section>
    </>
  )
}
