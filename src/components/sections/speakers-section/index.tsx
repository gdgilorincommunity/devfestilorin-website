import Link from 'next/link'

import { speakers } from '@/constants/speakers'
import Lanyard from '@/components/lanyard'

import { Button } from '../../ui/button'

import { SpeakersInfiniteMovingCards } from './speaker-infinite-moving-cards'

const SpeakersSection = () => {
  const sortedSpeakers = [...speakers].sort((a, b) => a.id - b.id)

  return (
    <section className="bg-[#FCF4F4]">
      <div className="max-w-7xl mx-auto pt-10 md:pt-20 z-20">
        <Lanyard
          lanyardClassName="bg-[#fff]"
          textSize="large"
          title="Our speakers"
          titleColor="black"
        />

        <SpeakersInfiniteMovingCards
          className="flex flex-nowrap z-50"
          direction="left"
          items={sortedSpeakers}
          pauseOnHover={true}
          speed="fast"
        />

        <div className="pb-10 md:pb-20 mt-8 flex justify-end">
          <Link href="#">
            <Button showArrow>Apply to speak</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SpeakersSection
