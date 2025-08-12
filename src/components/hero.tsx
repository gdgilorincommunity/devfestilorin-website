'use client'

import Link from 'next/link'
import React from 'react'

import config from '@/config'

import { Button } from './ui/button'
import GravityTags from './gravity-tags'
import TagScroller from './ui/tag-scroller'

const Hero = () => {
  return (
    <div className="bg-[#FCF4F4] min-h-[calc(100vh-350px)] md:min-h-full md:pb-32 relative overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 py-10 md:py-20 relative z-10">
        <div className="flex flex-col items-center justify-center gap-6 max-w-[500px] mx-auto">
          <h1 className="text-[74px] font-bold text-center leading-[100%]">
            Devfest <br className="hidden md:block" /> Ilorin
          </h1>

          <p className="text-center text-2xl text-[#5D5D5D] font-bold text-[18px] leading-[28px]">
            Join us at DevFest Ilorin 2025 from October 23rd - 25th.
            Ilorin&apos;s largest tech celebration of the year!
          </p>

          <Link
            href={`${config.ticketUrl}?utm_source=${config.appUrl}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button showArrow>Get Tickets</Button>
          </Link>
        </div>
      </section>

      <div className="absolute inset-0 z-50 hidden lg:block">
        <GravityTags />
      </div>
      <TagScroller className="flex md:hidden" />
    </div>
  )
}

export default Hero
