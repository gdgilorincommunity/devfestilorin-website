import React from 'react'
import Link from 'next/link'

import { recapData } from '@/constants/recap'

import Lanyard from '../../lanyard'
import { Button } from '../../ui/button'

import { RecapsInfiniteMovingCards } from './recap-infinite-moving-cards'

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

        <div className="my-10">
          <RecapsInfiniteMovingCards
            direction="left"
            items={sortedContent}
            pauseOnHover={true}
            speed="slow"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 pb-10 md:pb-20 mt-8 flex justify-end">
          <Link href="#">
            <Button showArrow variant="white">
              View 2024
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default RecapsSection
