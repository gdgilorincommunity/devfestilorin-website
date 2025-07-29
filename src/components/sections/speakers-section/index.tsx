import Link from 'next/link'

import { speakers } from '@/constants/speakers'
import Lanyard from '@/components/lanyard'

import { Button } from '../../ui/button'

import SpeakerCard from './speaker-card'

const SpeakersSection = () => {
  return (
    <section className="bg-[#FCF4F4]">
      <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-20">
        <Lanyard
          lanyardClassName="bg-[#fff]"
          textSize="large"
          title="Our speakers"
          titleColor="black"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-6 sm:gap-10 my-10">
          {speakers.map((speaker, index) => (
            <div key={index} className="flex justify-center">
              <SpeakerCard speaker={speaker} />
            </div>
          ))}
        </div>

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
