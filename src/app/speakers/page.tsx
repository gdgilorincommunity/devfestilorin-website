'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'

import { Button } from '@/components/ui/button'
import config from '@/config'
import { speakers } from '@/constants/speakers'
import SpeakerCard from '@/components/sections/speakers-section/speaker-card'
import Tickets from '@/components/sections/partners-and-tickets-section/tickets'

const Page = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all')

  const speakerTypes = useMemo(() => {
    const types = Array.from(new Set(speakers.map((speaker) => speaker.type)))

    return ['all', ...types]
  }, [])

  const filteredSpeakers = speakers.filter((speaker) => {
    if (selectedFilter === 'all') return true

    return speaker.type === selectedFilter
  })

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
        <div className="max-w-7xl mx-auto pt-5 md:pt-10 z-20">
          <div className="flex justify-center gap-3 mb-10 flex-wrap px-4">
            {speakerTypes.map((type) => {
              const label =
                type === 'all'
                  ? 'All Speakers'
                  : type.charAt(0).toUpperCase() + type.slice(1)

              return (
                <button
                  key={type}
                  className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base transition-all duration-200 ${
                    selectedFilter === type
                      ? 'bg-[#1E1E1E] text-white'
                      : 'bg-[#CACACA] text-[#1E1E1E]'
                  }`}
                  onClick={() => setSelectedFilter(type)}
                >
                  {label}
                </button>
              )
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 px-4 md:px-6 lg:px-0">
            {filteredSpeakers.map((speaker) => (
              <div key={speaker.id} className="flex justify-center">
                <SpeakerCard speaker={speaker} variant="responsive" />
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
