import React from 'react'

import { recapData } from '@/constants/recap'

import { RecapsInfiniteMovingCards } from './ui/recap-infinite-moving-cards'
import Lanyard from './lanyard'
import { Button } from './ui/button'

const Recaps = () => {
  const sortedContent = recapData.sort((a, b) => a.order - b.order)

  return (
    <div className="bg-[#1E1E1E]">
      <section>
        <section className="max-w-7xl mx-auto px-6 pt-10 md:pt-20 mb-8">
          <Lanyard title="Previous Devfest Recaps:" titleColor="white" />
        </section>

        <RecapsInfiniteMovingCards
          direction="left"
          items={sortedContent}
          pauseOnHover={true}
          speed="normal"
        />

        <div className="max-w-7xl mx-auto px-6 pb-10 md:pb-20 mt-8 flex justify-end">
          <Button showArrow variant="white">
            View 2024
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Recaps
