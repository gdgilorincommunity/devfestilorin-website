'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { ContentItem } from '@/types/recap'

import CornerBox from '../corner-box'

export const RecapsInfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: ContentItem[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  }, [])
  const [start, setStart] = useState(false)

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)

        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        )
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        )
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }

  const isBreakpoint = (
    item: ContentItem,
  ): item is ContentItem & {
    type: 'breakpoint'
    data: { title: string; description: string; color: string; type: number }
  } => {
    return item.type === 'breakpoint'
  }

  const isImage = (
    item: ContentItem,
  ): item is ContentItem & {
    type: 'image'
    data: { img: import('next/image').StaticImageData; type: number }
  } => {
    return item.type === 'image'
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map((item, idx) => {
          if (isBreakpoint(item)) {
            return (
              <li key={idx} className="relative w-[400px] max-w-full shrink-0">
                <CornerBox backgroundColor={item.data.color}>
                  <div className="text-center">
                    <h1 className="text-[60px] font-bold text-[#1E1E1E] mb-4 leading-[100%]">
                      {item.data.title}
                    </h1>
                    <div className="bg-white w-fit mx-auto border-2 border-[#1E1E1E] px-6 py-2">
                      <span className="text-[#1E1E1E] text-xl font-medium">
                        {item.data.description}
                      </span>
                    </div>
                  </div>
                </CornerBox>
              </li>
            )
          }

          if (isImage(item)) {
            return (
              <li
                key={item.id}
                className="relative w-[400px] max-w-full shrink-0"
              >
                <CornerBox backgroundColor="#f0f0f0">
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      alt={`Recap ${item.id}`}
                      className="max-w-full max-h-full object-cover"
                      priority={item.order === 1}
                      src={item.data.img}
                    />
                  </div>
                </CornerBox>
              </li>
            )
          }

          return null
        })}
      </ul>
    </div>
  )
}
