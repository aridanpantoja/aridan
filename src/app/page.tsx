import { ExperiencesAndStack } from '@/components/@pages/home/experiences-stack'
import { HeroSection } from '@/components/@pages/home/hero-section'
import { MainProjects } from '@/components/@pages/home/main-projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Aridan Dev',
}

export default async function Home() {
  return (
    <>
      <HeroSection />
      <MainProjects />
      <ExperiencesAndStack />
    </>
  )
}
