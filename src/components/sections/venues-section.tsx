'use client'

import Link from 'next/link'
import Image from 'next/image'

import venue1 from '@public/venue-1.png'
import venue2 from '@public/venue-2.png'
import config from '@/config'

import Lanyard from '../lanyard'
import { Button } from '../ui/button'
import { CalendarIcon } from '../icons'

const Venue = () => {
  const venues = [
    {
      image: venue1,
      date: '30th - 31st Oct 2025',
      color: '#F5E0E1',
    },
    {
      image: venue2,
      date: '1st Nov 2025',
      color: '#FEE6A5',
    },
  ]

  return (
    <section className="bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-20">
        <Lanyard
          lanyardClassName="bg-[#FCF4F4]"
          textSize="large"
          title="Venues"
          titleColor="white"
        />

        <div className="my-10">
          <div className="grid lg:grid-cols-2 gap-8">
            {venues.map((venue, index) => (
              <aside key={index} className="relative">
                <Image
                  unoptimized
                  alt="venue Image"
                  className="min-h-[200px] object-cover rounded-[16px] lg:rounded-[32px]"
                  src={venue.image}
                />

                <div className="absolute bottom-4 left-4">
                  <div
                    className="flex items-center gap-2 w-fit p-2 px-4 border-2 border-[#1E1E1E] rounded-[29.17px] font-[700] text-[15.65px]"
                    style={{ backgroundColor: venue.color }}
                  >
                    <CalendarIcon />
                    {venue.date}
                  </div>
                </div>
              </aside>
            ))}
          </div>
        </div>

        <div className="pb-10 md:pb-20 mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href={`${config.workshopUrl}?utm_source=${config.appUrl}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button showArrow className="font-[700]" variant="white">
              Get Workshop Tickets
            </Button>
          </Link>

          <Link
            href={`${config.ticketUrl}?utm_source=${config.appUrl}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button showArrow className="font-[700]" variant="white">
              Get Conference Tickets
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Venue
