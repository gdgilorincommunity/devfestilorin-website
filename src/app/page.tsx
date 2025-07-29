import Hero from '@/components/hero'
import RecapsSection from '@/components/sections/recaps-section'
import EventsSection from '@/components/sections/events-section'
import VenueSection from '@/components/sections/venues-section'
import SpeakersSection from '@/components/sections/speakers-section'
import SponsorsSection from '@/components/sections/sponsors-section'

export default function Home() {
  return (
    <div>
      <Hero />
      <RecapsSection />
      <EventsSection />
      <VenueSection />
      <SpeakersSection />
      <SponsorsSection />
    </div>
  )
}
