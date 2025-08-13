'use client'

import { Speaker } from '@/types/speaker'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

export const SpeakersInfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
  className,
}: {
  items: Speaker[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}) => {
  return (
    <InfiniteMovingCards
      className={className}
      direction={direction}
      itemType="speaker"
      items={items}
      pauseOnHover={pauseOnHover}
      speed={speed}
    />
  )
}
