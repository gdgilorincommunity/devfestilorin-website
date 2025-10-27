import Hero from '@/components/hero'
import EventsSection from '@/components/sections/events-section'
import PartnersAndTicketsSection from '@/components/sections/partners-and-tickets-section'
// import PartnersSection from '@/components/sections/partners-and-tickets-section/partners'
import RecapsSection from '@/components/sections/recaps-section'
import SpeakersSection from '@/components/sections/speakers-section'
import SponsorsSection from '@/components/sections/sponsors-section'
import VenueSection from '@/components/sections/venues-section'

export default function Home() {
  return (
    <div>
      <Hero />
      <RecapsSection />
      <EventsSection />
      <VenueSection />
      <SpeakersSection />
      <SponsorsSection />
      {/* <PartnersSection /> */}
      <PartnersAndTicketsSection />
    </div>
  )
}
