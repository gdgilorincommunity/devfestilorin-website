'use client'

import type { StaticImageData } from 'next/image'

import React from 'react'
import Image from 'next/image'

import gdgLogo from '../assets/logo1.png'
import devfestBanner from '../assets/header1.png'
import headerImage from '../assets/header2.png'
import bgWorkshops from '../assets/bg1.png'
import bgHackathon from '../assets/bg2.png'
import bgPrivateNetwork from '../assets/bg3.png'

import { Button } from './ui/button'

type EventCardProps = {
  title: string
  textColor: string
  bgColor: string
  bgImage?: StaticImageData
  isLarge?: boolean
}

const CornerDecoration: React.FC = () => (
  <>
    <div className="absolute -top-3 -left-3 w-5 h-5 border-3 border-foreground bg-background" />
    <div className="absolute -top-3 -right-3 w-5 h-5 border-3 border-foreground bg-background" />
    <div className="absolute -bottom-3 -left-3 w-5 h-5 border-3 border-foreground bg-background" />
    <div className="absolute -bottom-3 -right-3 w-5 h-5 border-3 border-foreground bg-background" />
  </>
)

const EventCard: React.FC<EventCardProps> = ({
  title,
  textColor,
  bgColor,
  bgImage,
  isLarge = false,
}) => (
  <div
    className={`relative ${bgColor} ${isLarge ? 'w-[541px] h-[659px]' : ''}`}
  >
    <div className="absolute inset-0 border-4 border-foreground">
      <CornerDecoration />
    </div>

    <Image
      alt={`${title} header`}
      className="block mx-auto py-3 px-3 opacity-60"
      src={headerImage}
    />

    {bgImage && (
      <Image
        fill
        alt={`${title} background`}
        className="object-cover object-center rounded-xl p-1"
        src={bgImage}
      />
    )}

    <div className="absolute bottom-0 left-0 right-0 text-center pb-4">
      <h1
        className={`${
          isLarge ? 'text-6xl' : 'text-4xl'
        } font-black ${textColor} bg-clip-text mb-4 tracking-tight text-left px-2`}
      >
        {title}
      </h1>
    </div>
  </div>
)

const Events: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Devfest 2025
          </h1>
          <div className="flex items-center gap-2">
            <Image alt="GDG Ilorin logo" src={gdgLogo} />
            <span className="text-gray-600 ml-2">
              Google Developer Groups Ilorin
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2 ml-auto w-96">
            <Image alt="Devfest banner" src={devfestBanner} />
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-2 py-10">
        <EventCard
          isLarge
          bgColor="bg-white"
          bgImage={bgWorkshops}
          textColor="text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
          title="Workshops"
        />

        <div className="grid grid-cols-1 gap-4">
          <EventCard
            bgColor="bg-[#FFE7A5]"
            bgImage={false}
            textColor="text-[#FFD427]"
            title="Conference"
          />

          <div className="grid grid-cols-2 gap-5 pt-3">
            <EventCard
              bgColor="bg-[#CCF6C5]"
              bgImage={bgHackathon}
              textColor="text-[#5CDB6D]"
              title="Hackathon"
            />
            <EventCard
              bgColor="bg-[#C3ECF6]"
              bgImage={bgPrivateNetwork}
              textColor="text-[#57CAFF]"
              title="Private Network"
            />
          </div>
        </div>
      </div>

      {/* Get Tickets Button */}
      <div className="text-center">
        <Button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2 mx-auto">
          Get Tickets
          <span className="text-xl">↗</span>
        </Button>
      </div>
    </div>
  )
}

export default Events
