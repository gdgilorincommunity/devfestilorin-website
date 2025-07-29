'use client'

import { ContentItem } from '@/types/recap'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

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
  return (
    <InfiniteMovingCards
      className={className}
      direction={direction}
      itemType="recap"
      items={items}
      pauseOnHover={pauseOnHover}
      speed={speed}
    />
  )
}
