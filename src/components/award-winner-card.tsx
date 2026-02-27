import { Award } from '@/types'
import Image from 'next/image'
import React from 'react'

const AwardWinnerCard = ({ awardWinner }: { awardWinner: Award }) => {
  return (
    <div>
      <Image
        src={awardWinner.image}
        alt={awardWinner.name}
        className="w-[350px]"
        unoptimized
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
