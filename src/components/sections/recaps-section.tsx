import React from 'react'

import { recapData } from '@/constants/recap'

import { RecapsInfiniteMovingCards } from '../ui/recap-infinite-moving-cards'
import Lanyard from '../lanyard'
import { Button } from '../ui/button'

const RecapsSection = () => {
  const sortedContent = recapData.sort((a, b) => a.order - b.order)

  return (
    <section className="bg-[#1E1E1E]">
      <div>
        <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-20 mb-8">
          <Lanyard
            lanyardClassName="bg-[#FCF4F4]"
            title="Previous Devfest Recaps:"
            titleColor="white"
          />
        </div>

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
      </div>
    </section>
  )
}

export default RecapsSection
