'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { ContentItem } from '@/types/recap'
import { Partner } from '@/types/partner'
import { Speaker } from '@/types/speaker'
import SpeakerCard  from '@/components/sections/speakers-section/speaker-card'


import CornerBox from '../corner-box'

type MovingCardItem = ContentItem | Partner | Speaker

interface InfiniteMovingCardsProps {
  items: MovingCardItem[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
  itemType?: 'recap' | 'partner' | 'speaker'
}

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
  className,
  itemType = 'recap',
}: InfiniteMovingCardsProps) => {
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
        containerRef.current.style.setProperty('--animation-duration', '70s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '100s')
      }
    }
  }

  const isRecapBreakpoint = (
    item: MovingCardItem,
  ): item is ContentItem & {
    type: 'breakpoint'
    data: { title: string; description: string; color: string; type: number }
  } => {
    return itemType === 'recap' && 'type' in item && item.type === 'breakpoint'
  }

  const isRecapImage = (
    item: MovingCardItem,
  ): item is ContentItem & {
    type: 'image'
    data: { img: import('next/image').StaticImageData; type: number }
  } => {
    return itemType === 'recap' && 'type' in item && item.type === 'image'
  }

  const isPartner = (item: MovingCardItem): item is Partner => {
    return itemType === 'partner' && 'name' in item && 'logo' in item
  }

  const isSpeaker = (item: MovingCardItem): item is Speaker => {
  return itemType === 'speaker' && 'name' in item && 'image' in item
}

  const renderRecapItem = (item: ContentItem, idx: number) => {
    if (isRecapBreakpoint(item)) {
      return (
        <li key={idx} className="relative max-w-full shrink-0">
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

    if (isRecapImage(item)) {
      return (
        <li key={item.id} className="relative max-w-full shrink-0">
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
  }

  const renderPartnerItem = (item: Partner, idx: number) => {
    return (
      <li key={idx} className="relative w-[250px] max-w-full shrink-0">
        <div className="w-full h-full flex items-center justify-center p-4">
          <Image
            alt={item.name}
            className="max-w-full max-h-24 object-contain"
            src={item.logo}
          />
        </div>
      </li>
    )
  }

 const renderSpeakerItem = (item: Speaker, idx: number) => {
  return (
    <li key={idx} className="relative shrink-0 max-w-full">
      <SpeakerCard speaker={item} />
    </li>
  )
}


  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 overflow-hidden scroller-thin',
        // '[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-10 py-4 overflow-x-auto snap-x snap-mandatory',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map((item, idx) => {
          if (itemType === 'recap' && 'type' in item) {
            return renderRecapItem(item as ContentItem, idx)
          }

          if (itemType === 'partner' && isPartner(item)) {
            return renderPartnerItem(item, idx)
          }

          if (itemType === 'speaker' && isSpeaker(item)) {
          return renderSpeakerItem(item, idx)
          }
          return null
        })}
      </ul>
    </div>
  )
}
