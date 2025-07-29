import Hero from '@/components/hero'
import RecapsSection from '@/components/sections/recaps-section'
import EventsSection from '@/components/sections/events-section'
import VenueSection from '@/components/sections/venues-section'
import SpeakersSection from '@/components/sections/speakers-section'
import SponsorsSection from '@/components/sections/sponsors-section'
import PartnersAndTicketsSection from '@/components/sections/partners-and-tickets-section'
import TicketsSection from '@/app/components/tickets/TicketsSection'

export default function Home() {
  return (
    <div>
      <Hero />
      <RecapsSection />
      <EventsSection />
      <VenueSection />
      <SpeakersSection />
      <SponsorsSection />
      <PartnersAndTicketsSection />
      <TicketsSection />
    </div>
  )
}
