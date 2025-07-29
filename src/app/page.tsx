import Hero from '@/components/hero'
import RecapsSection from '@/components/sections/recaps-section'
import EventsSection from '@/components/sections/events-section'
import VenueSection from '@/components/sections/venues-section'
import SpeakerSection from '@/components/sections/speakers-section'
// import SponsorSection from '@/components/sponsors/sponsors-section'

export default function Home() {
  return (
    <div>
      <Hero />
      <RecapsSection />
      <EventsSection />
      <VenueSection />
      <SpeakerSection />
      {/* 

      <SponsorSection /> */}
    </div>
  )
}
