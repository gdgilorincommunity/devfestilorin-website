'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { Gravity, MatterBody, type GravityRef } from './ui/gravity'

interface Tag {
  text: string
  bgColor: string
  x: string
  y: string
  angle: number
  showOnMobile: boolean
}

interface GravityTagsProps {
  className?: string
  tags?: Tag[]
  autoStart?: boolean
}

const defaultTags: Tag[] = [
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
    showOnMobile: true,
  },
  {
    text: 'AI Developers',
    bgColor: 'bg-[#CCF6C5]',
    x: '80%',
    y: '20%',
    angle: 0,
    showOnMobile: true,
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
    showOnMobile: true,
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
    showOnMobile: true,
  },
  {
    text: 'Brand Designers',
    bgColor: 'bg-[#F8D8D8]',
    x: '15%',
    y: '70%',
    angle: 0,
    showOnMobile: true,
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
    showOnMobile: true,
  },
  {
    text: 'Developers',
    bgColor: 'bg-[#EEEFEF]',
    x: '90%',
    y: '50%',
    angle: 0,
    showOnMobile: true,
  },
  {
    text: 'VR & AR',
    bgColor: 'bg-[#FFE7A5]',
    x: '10%',
    y: '30%',
    angle: 0,
    showOnMobile: true,
  },
  {
    text: 'Developers',
    bgColor: 'bg-[#EEEFEF]',
    x: '55%',
    y: '60%',
    angle: 0,
    showOnMobile: true,
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
    showOnMobile: true,
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

const GravityTags: React.FC<GravityTagsProps> = ({
  className = 'w-full h-full',
  tags = defaultTags,
  autoStart = false,
}) => {
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

  // Filter tags based on screen size
  const visibleTags = isMobile ? tags.filter((tag) => tag.showOnMobile) : tags

  return (
    <div ref={inViewRef} className={className}>
      <Gravity
        ref={gravityRef}
        autoStart={autoStart}
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
              className={`font-bold text-base sm:text-lg md:text-xl lg:text-2xl ${tag.bgColor} rounded-full hover:cursor-grab px-3.5 sm:px-5 md:px-7 py-2 sm:py-2.5 md:py-3.5 border-black border-2 text-[#1E1E1E] cursor-grab`}
            >
              {tag.text}
            </div>
          </MatterBody>
        ))}
      </Gravity>
    </div>
  )
}

export default GravityTags
