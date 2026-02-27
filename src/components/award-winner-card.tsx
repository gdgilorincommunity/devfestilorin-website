import Image from 'next/image'
import React from 'react'

import { Award } from '@/types'

const AwardWinnerCard = ({ awardWinner }: { awardWinner: Award }) => {
  return (
    <div>
      <Image
        unoptimized
        alt={awardWinner.name}
        className="w-[350px]"
        src={awardWinner.image}
      />

      <div className="mt-8">
        <h3 className="text-3xl font-bold text-center">{awardWinner.name}</h3>
        <p className="text-xl italic text-center">
          {awardWinner.title}
          {awardWinner.company ? `, ${awardWinner.company}` : ''}
        </p>
      </div>
    </div>
  )
}

export default AwardWinnerCard
