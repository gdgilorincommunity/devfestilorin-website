import Hero from '@/components/hero'
import RecapsSection from '@/components/sections/recaps-section'
import Events from '@/components/events'
import Venue from '@/components/venue'
import SpeakerSection from '@/components/speakers/speakers-section'
import SponsorSection from '@/components/sponsors/sponsors-section'

export default function Home() {
  return (
    <div>
      <Hero />
      <RecapsSection />
      <Events />
      <Venue />
      <SpeakerSection />
      <SponsorSection />
    </div>
  )
}
