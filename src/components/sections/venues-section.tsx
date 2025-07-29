'use client'

import Image from 'next/image'
import Link from 'next/link'

import venue from '@public/venue.png'

import Lanyard from '../lanyard'
import { Button } from '../ui/button'

const Venue = () => {
  return (
    <section className="bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-20">
        <Lanyard
          lanyardClassName="bg-[#FCF4F4]"
          textSize="large"
          title="Venues"
          titleColor="white"
        />

        <div className="my-10">
          <Image
            unoptimized
            alt="venue Image"
            className="rounded-[32px]"
            src={venue}
          />
        </div>

        <div className="pb-10 md:pb-20 mt-8 flex justify-center">
          <Link href="#">
            <Button showArrow variant="white">
              Get Tickets
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Venue
