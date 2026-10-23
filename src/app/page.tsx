import { Hero } from '@/components/sections/hero'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { Record } from '@/components/sections/record'
import { Experience } from '@/components/sections/experience'
import { Skills } from '@/components/sections/skills'
import { CTA } from '@/components/sections/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Record />
      <Experience />
      <Skills />
      <CTA />
    </>
  )
}
