import { Header } from '@/components/sections/header'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Stats } from '@/components/sections/stats'
import { Industries } from '@/components/sections/industries'
import { ClientLogos } from '@/components/sections/client-logos'
import { WhoWeAre } from '@/components/sections/who-we-are'
import { Team } from '@/components/sections/team'
import { Testimonials } from '@/components/sections/testimonials'
import { Contact } from '@/components/sections/contact'
import { CTA } from '@/components/sections/cta'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Industries />
      <ClientLogos />
      {/* <WhoWeAre />
      <Team /> */}
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
    </>
  )
}
