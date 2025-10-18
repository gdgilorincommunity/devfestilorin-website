import Link from 'next/link'
import { Metadata } from 'next'

import { Button } from '@/components/ui/button'
import config from '@/config'
import { speakers } from '@/constants/speakers'
import SpeakerCard from '@/components/sections/speakers-section/speaker-card'
import Tickets from '@/components/sections/partners-and-tickets-section/tickets'

export const metadata: Metadata = {
  title: `Speakers - ${config.appName}`,
  openGraph: {
    title: `Speakers - ${config.appName}`,
  },
}

const Page = () => {
  return (
    <div>
      <section className="bg-[#FCF4F4]">
        <div className="max-w-7xl mx-auto pb-10 md:pb-20 z-20">
          <div className="lg:w-[1100px] mx-auto pt-10">
            <h1 className="text-wrap text-center mb-4 text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-[#1E1E1E]">
              Our Speakers
            </h1>
            <p className="text-wrap text-center text-base lg:text-[18px] text-[#5D5D5D] font-bold lg:w-[500px] mx-auto">
              Join us at DevFest Ilorin 2025 from October 23rd - 25th.
              Ilorin&apos;s largest tech celebration of the year!
            </p>
          </div>

          <div className="pt-10 flex justify-center">
            <Link
              href={`${config.ticketUrl}?utm_source=${config.appUrl}`}
              rel="noreferrer noopener"
              target="_blank"
            >
              <Button showArrow>Get Tickets </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#FCF4F4]">
        <div className="max-w-7xl mx-auto pt-10 md:pt-20 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {speakers.map((speaker) => (
              <div key={speaker.id}>
                <SpeakerCard speaker={speaker} />
              </div>
            ))}
          </div>
        </div>

        <div className="border-b-3 border-b-[#1E1E1E] pt-10 md:pt-20" />
      </section>

      <div className="bg-[#FCF4F4]">
        <Tickets />
      </div>
    </div>
  )
}

export default Page
