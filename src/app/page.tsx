import Hero from '@/components/hero'
import Events from '@/components/events'
import Venue from '@/components/venue'
import SpeakerSection from '@/components/speakers/speakers-section'
import SponsorSection from '@/components/sponsors/sponsors-section'

export default function Home() {
  return (
    <div>
      <Hero />
      <Events />
      <Venue />
      <SpeakerSection />
      <SponsorSection />
    </div>
  )
}
