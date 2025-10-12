'use client'

import Link from 'next/link'
import React from 'react'

import config from '@/config'
import { useShuffledTagsOnMobile } from '@/hooks/use-shuffle'

import { Button } from './ui/button'
import GravityTags from './gravity-tags'
import TagScroller from './ui/tag-scroller'

const tags = [
  { label: 'AI Enthusiast', color: 'bg-[#CCF6C5]' },
  { label: 'Cybersecurity', color: 'bg-[#57CAFF]' },
  { label: 'Gemini', color: 'bg-[#FFD427]' },
  { label: 'Firebase Studio', color: 'bg-[#57CAFF]' },
  { label: 'Cloud', color: 'bg-[#FF7DAF]' },
  { label: 'Web', color: 'bg-[#5CDB6D]' },
  { label: 'AI Enthusiast', color: 'bg-[#C3ECF6]' },
  { label: 'Developers', color: 'bg-[#EEEFEF]' },
  { label: 'AR & VR', color: 'bg-[#FFE7A5]' },
  { label: 'Vibe Coding', color: 'bg-[#FF7DAF]' },
  { label: 'AI Developers', color: 'bg-[#CCF6C5]' },
  { label: 'Product Designers', color: 'bg-[#FFE7A5]' },
  { label: 'Brand Designers', color: 'bg-[#F8D8D8]' },
  { label: 'Mobile Devs', color: 'bg-[#FFD427]' },
  { label: 'Techies', color: 'bg-[#CCF6C5]' },
  { label: 'AI/ML', color: 'bg-[#5CDB6D]' },
  { label: 'Hackathon', color: 'bg-[#EEEFEF]' },
  { label: 'Web3 Ethusiasts', color: 'bg-[#F8D8D8]' },
  { label: '+ more', color: 'bg-[#C3ECF6]' },
]

interface HeroProps {
  children?: React.ReactNode
}

const Hero = ({ children }: HeroProps) => {
  const shuffledTags = useShuffledTagsOnMobile(tags)

  return (
    <div className="bg-[#FCF4F4] md:min-h-full pb-12 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 z-50 hidden lg:block">
        <GravityTags />
      </div>

      {!children ? <DefaultHeroContent /> : children}

      <TagScroller className="flex md:hidden" tags={shuffledTags} />
    </div>
  )
}

export default Hero

const DefaultHeroContent = () => {
  return (
    <div className="px-6 py-10 md:py-20">
      <section className="max-w-7xl mx-auto elative">
        <div className="flex flex-col items-center justify-center gap-6 max-w-[500px] mx-auto">
          <h1 className="text-[74px] font-bold text-center leading-[100%]">
            Devfest <br className="hidden md:block" /> Ilorin
          </h1>

          <p className="text-center text-2xl text-[#5D5D5D] font-bold text-[18px] leading-[28px]">
            Join us at DevFest Ilorin 2025 from October 30th–31st and November
            1st, 2025. Ilorin&apos;s largest tech celebration of the year!
          </p>
        </div>
      </section>

      <div className="flex justify-center mt-6">
        <Link
          className="z-[50] pointer-events-auto"
          href={`${config.ticketUrl}?utm_source=${config.appUrl}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button showArrow className="relative pointer-events-auto">
            Get Tickets
          </Button>
        </Link>
      </div>
    </div>
  )
}
