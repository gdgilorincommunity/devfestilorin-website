import Hero from '@/components/hero'
import SpeakerSection from '@/components/speakers/speakers-section'
import SponsorSection from '@/components/sponsors/sponsors-section'

export default function Home() {
  return (
    <div>
      <Hero />
      <SpeakerSection />
      <SponsorSection />
    </div>
  )
}
