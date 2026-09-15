import { PageShell } from '@/components/layout/PageShell'
import { Hero } from '@/components/sections/Hero/Hero'
import { EngineeringDNA } from '@/components/sections/EngineeringDNA/EngineeringDNA'
import { Capabilities } from '@/components/sections/Capabilities/Capabilities'
import { ProblemSolving } from '@/components/sections/ProblemSolving/ProblemSolving'
import { CaseStudies } from '@/components/sections/CaseStudies/CaseStudies'
import { Leadership } from '@/components/sections/Leadership/Leadership'
import { EngineeringWithAI } from '@/components/sections/EngineeringWithAI/EngineeringWithAI'
import { About } from '@/components/sections/About/About'
import { Education } from '@/components/sections/Education/Education'
import { TechAsTool } from '@/components/sections/TechAsTool/TechAsTool'
import { Tradeoffs } from '@/components/sections/Tradeoffs/Tradeoffs'
import { OutsideTheStack } from '@/components/sections/OutsideTheStack/OutsideTheStack'

function App() {
  return (
    <PageShell>
      <Hero />
      <EngineeringDNA />
      <Capabilities />
      <ProblemSolving />
      <CaseStudies />
      <Leadership />
      <EngineeringWithAI />
      <About />
      <Education />
      <TechAsTool />
      <Tradeoffs />
      <OutsideTheStack />
    </PageShell>
  )
}

export default App
