'use client'

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { Gravity, MatterBody, type GravityRef } from './ui/gravity'
import { Button } from './ui/button'

const Hero = () => {
  const gravityRef = useRef<GravityRef | null>(null)
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    if (inView && gravityRef.current) {
      // Reset first to ensure fresh state
      gravityRef.current.reset()
      // Then start the animation
      gravityRef.current.start()
    }
  }, [inView])

  // Cleanup effect to reset when component unmounts
  useEffect(() => {
    return () => {
      if (gravityRef.current) {
        gravityRef.current.stop()
      }
    }
  }, [])

  // Define tags with responsive visibility
  const tags = [
    {
      text: 'Hackathon',
      bgColor: 'bg-[#EEEFEF]',
      x: '30%',
      y: '10%',
      angle: 0,
      showOnMobile: true,
    },
    {
      text: 'AI Enthusiast',
      bgColor: 'bg-[#CCF6C5]',
      x: '30%',
      y: '30%',
      angle: 0,
      showOnMobile: true,
    },
    {
      text: 'Web3 Enthusiasts',
      bgColor: 'bg-[#F8D8D8]',
      x: '40%',
      y: '20%',
      angle: 10,
      showOnMobile: true,
    },
    {
      text: 'Cybersecurity',
      bgColor: 'bg-[#57CAFF]',
      x: '75%',
      y: '10%',
      angle: 0,
      showOnMobile: false,
    },
    {
      text: 'AI Developers',
      bgColor: 'bg-[#CCF6C5]',
      x: '80%',
      y: '20%',
      angle: 0,
      showOnMobile: false,
    },
    {
      text: 'Gemini',
      bgColor: 'bg-[#FFD427]',
      x: '50%',
      y: '10%',
      angle: 0,
      showOnMobile: true,
    },
    {
      text: '+ more',
      bgColor: 'bg-[#C3ECF6]',
      x: '60%',
      y: '40%',
      angle: 0,
      showOnMobile: false,
    },
    {
      text: 'Firebase studio',
      bgColor: 'bg-[#57CAFF]',
      x: '20%',
      y: '50%',
      angle: 0,
      showOnMobile: true,
    },
    {
      text: 'Product Designers',
      bgColor: 'bg-[#FFE7A5]',
      x: '70%',
      y: '60%',
      angle: 0,
      showOnMobile: true,
    },
    {
      text: 'Cloud',
      bgColor: 'bg-[#FF7DAF]',
      x: '85%',
      y: '70%',
      angle: 0,
      showOnMobile: false,
    },
    {
      text: 'Brand Designers',
      bgColor: 'bg-[#F8D8D8]',
      x: '15%',
      y: '70%',
      angle: 0,
      showOnMobile: false,
    },
    {
      text: 'Web',
      bgColor: 'bg-[#5CDB6D]',
      x: '45%',
      y: '80%',
      angle: 0,
      showOnMobile: true,
    },
    {
      text: 'Mobile',
      bgColor: 'bg-[#FFD427]',
      x: '65%',
      y: '85%',
      angle: 0,
      showOnMobile: true,
    },
    {
      text: 'AI Enthusiast',
      bgColor: 'bg-[#C3ECF6]',
      x: '25%',
      y: '85%',
      angle: 0,
      showOnMobile: false,
    },
    {
      text: 'Developers',
      bgColor: 'bg-[#EEEFEF]',
      x: '90%',
      y: '50%',
      angle: 0,
      showOnMobile: false,
    },
    {
      text: 'VR & AR',
      bgColor: 'bg-[#FFE7A5]',
      x: '10%',
      y: '30%',
      angle: 0,
      showOnMobile: false,
    },
    {
      text: 'Developers',
      bgColor: 'bg-[#EEEFEF]',
      x: '55%',
      y: '60%',
      angle: 0,
      showOnMobile: false,
    },
    {
      text: 'Techies',
      bgColor: 'bg-[#CCF6C5]',
      x: '35%',
      y: '75%',
      angle: 0,
      showOnMobile: true,
    },
    {
      text: 'Vibe coding',
      bgColor: 'bg-[#FF7DAF]',
      x: '75%',
      y: '35%',
      angle: 0,
      showOnMobile: false,
    },
    {
      text: 'AI/ML',
      bgColor: 'bg-[#5CDB6D]',
      x: '40%',
      y: '45%',
      angle: 0,
      showOnMobile: true,
    },
  ]

  // Filter tags based on screen size
  const visibleTags = isMobile ? tags.filter((tag) => tag.showOnMobile) : tags

  return (
    <div
      ref={inViewRef}
      className="bg-[#FCF4F4] min-h-[calc(100vh-90px)] relative overflow-hidden"
    >
      <section className="max-w-7xl mx-auto px-6 py-10 md:py-20 relative z-10">
        <div className="flex flex-col items-center justify-center gap-6 max-w-[500px] mx-auto">
          <h1 className="text-[74px] font-bold text-center leading-[100%]">
            Devfest <br className="hidden md:block" /> Ilorin
          </h1>

          <p className="text-center text-2xl text-[#5D5D5D] font-bold text-[18px] leading-[28px]">
            Join us at DevFest Ilorin 2025 from October 23rd - 25th.
            Ilorin&apos;s largest tech celebration of the year!
          </p>

          <Link href="/tickets">
            <Button showArrow>Get Tickets</Button>
          </Link>
        </div>
      </section>

      <div className="absolute inset-0 pointer-events-none z-20">
        <Gravity
          ref={gravityRef}
          autoStart={false}
          className="w-full h-full"
          gravity={{ x: 0, y: 1 }}
        >
          {visibleTags.map((tag, index) => (
            <MatterBody
              key={index}
              angle={tag.angle}
              matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
              x={tag.x}
              y={tag.y}
            >
              <div
                className={`font-bold text-base sm:text-lg md:text-xl lg:text-2xl ${tag.bgColor} rounded-full hover:cursor-grab px-3.5 sm:px-5 md:px-7 py-2 sm:py-2.5 md:py-3.5 border-black border-2 text-[#1E1E1E]`}
              >
                {tag.text}
              </div>
            </MatterBody>
          ))}
        </Gravity>
      </div>
    </div>
  )
}

export default Hero
