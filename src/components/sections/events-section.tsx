'use client'

import type { StaticImageData } from 'next/image'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import conference from '@public/conference.png'
import workshops from '@public/workshops.png'
import hackathons from '@public/hackathons.png'
import privateNetwork from '@public/private-network.png'
import gdgLanyard from '@public/gdg-lanyard.png'
import config from '@/config'

import { Button } from '../ui/button'
import CornerBox from '../corner-box'
import Lanyard from '../lanyard'

type EventCardProps = {
  title: string
  textColor: string
  bgColor: string
  bgImage?: StaticImageData | null
  isLarge?: boolean
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  textColor,
  bgColor,
  bgImage,
}) => (
  <CornerBox
    backgroundColor={bgImage ? 'transparent' : bgColor}
    borderColor="border-black"
    className={`${title === 'Workshops' ? 'h-full' : 'h-[280px] lg:h-[300px]'} w-full`}
    style={{
      background: bgImage
        ? `url(${(bgImage as StaticImageData).src}) center/cover no-repeat`
        : undefined,
    }}
  >
    <div className="p-8 flex flex-col items-center justify-between  h-full w-full">
      <Image
        alt="gdg lanyard"
        className="w-[400px] h-auto object-contain"
        src={gdgLanyard}
      />

      <h1
        className="text-white text-[35px] lg:text-[54px] font-bold text-start w-full leading-[120%] tracking-[2%]"
        style={{
          color: textColor,
          textShadow: '1px 0 black, -1px 0 black, 0 1px black, 0 -1px black',
        }}
      >
        {title}
      </h1>
    </div>
  </CornerBox>
)

const EventsSection: React.FC = () => {
  return (
    <section className="bg-[#FCF4F4]">
      <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-20">
        <Lanyard
          lanyardClassName="bg-white"
          textSize="large"
          title="Devfest 2025"
          titleColor="black"
        />

        {/* MAIN GRID - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 my-10">
          <div className="lg:col-span-1 h-[280px] lg:h-auto">
            <EventCard
              isLarge
              bgColor="#F8D8D8"
              bgImage={workshops}
              textColor="#FF7DAF"
              title="Workshops"
            />
          </div>

          <div className="lg:col-span-2 space-y-8 lg:space-y-12 flex flex-col">
            <EventCard
              bgColor="#FFE7A5"
              bgImage={conference}
              textColor="#FFD427"
              title="Conference"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 flex-1">
              <EventCard
                bgColor="#CCF6C5"
                bgImage={hackathons}
                textColor="#5CDB6D"
                title="Hackathons"
              />

              <EventCard
                bgColor="#C3ECF6"
                bgImage={privateNetwork}
                textColor="#57CAFF"
                title="Private Network"
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-10 md:pb-20 mt-8 flex justify-center">
          <Link
            href={`${config.ticketUrl}?utm_source=${config.appUrl}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button showArrow>Get Tickets</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
