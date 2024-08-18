import { AboutSection } from '@/components/sections/about-section'
import { HeroSection } from '@/components/sections/hero-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { ResumeSection } from '@/components/sections/resume-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
    </>
  )
}
