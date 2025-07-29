'use client'

import type { StaticImageData } from 'next/image'

import React from 'react'
import Image from 'next/image'

import workshops from '@public/workshops.png'
import hackathons from '@public/hackathons.png'
import privateNetwork from '@public/private-network.png'

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
  // textColor,
  bgColor,
  bgImage,
}) => (
  <CornerBox
    backgroundColor={bgColor}
    borderColor="border-black"
    className={`${title === 'Workshops' ? 'h-full' : 'h-[300px]'} w-full`}
    // className={isLarge ? 'w-[541px] h-[659px]' : 'w-88 h-96'}
  >
    {/* <Image
      alt={`${title} header`}
      className="block mx-auto py-3 px-3 opacity-60"
      // src={headerImage}
    /> */}

    {bgImage && (
      <div className="w-full h-full flex items-center justify-center">
        <Image
          fill
          alt={`${title} background`}
          className="object-cover object-center"
          // className="object-cover object-center rounded-xl p-1"
          src={bgImage}
        />
      </div>
    )}
    {/* 
    <div className="absolute bottom-0 left-0 right-0 text-center pb-4">
      <h1
      // className={`${
      //   isLarge ? 'text-6xl' : 'text-4xl'
      // } font-black ${textColor} bg-clip-text mb-4 tracking-tight text-left px-2`}
      >
        {title}
      </h1>
    </div> */}
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

        {/* MAIN GRID */}
        <div className="grid grid-cols-3 gap-10 mt-8 items-stretch">
          <div className="">
            <EventCard
              isLarge
              bgColor="#F8D8D8"
              bgImage={workshops}
              textColor="text-black"
              title="Workshops"
            />
          </div>

          <div className="col-span-2 space-y-10 flex flex-col">
            <EventCard
              bgColor="#FFE7A5"
              textColor="text-black"
              title="Conference"
            />

            <div className="grid grid-cols-2 gap-10 flex-1">
              <EventCard
                bgColor="#CCF6C5"
                bgImage={hackathons}
                textColor="text-black"
                title="Hackathons"
              />

              <EventCard
                bgColor="#C3ECF6"
                bgImage={privateNetwork}
                textColor="text-black"
                title="Private Network"
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-10 md:pb-20 mt-8 flex justify-center">
          <Button showArrow>Get Tickets</Button>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
