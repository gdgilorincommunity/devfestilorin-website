import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import Hero from '@/components/hero'
import JudgeCard from '@/components/judge-card'
import Lanyard from '@/components/lanyard'
import Tickets from '@/components/sections/partners-and-tickets-section/tickets'
import PrizesSection from '@/components/sections/prizes-section'
import VenueSection from '@/components/sections/venues-section'
import { Button } from '@/components/ui/button'
import config from '@/config'
import { judges } from '@/constants/judges'
import malhub from '@public/sponsors/malhub.png'
import paystack from '@public/sponsors/paystack.png'

export const metadata: Metadata = {
  title: `Hackathon - ${config.appName}`,
  openGraph: {
    title: `Hackathon - ${config.appName}`,
  },
}

export default function Hackathon() {
  return (
    <div>
      <Hero>
        <div className="px-6 py-10 md:py-10">
          <section className="max-w-7xl mx-auto elative">
            <div className="flex flex-col items-center justify-center max-w-[500px] mx-auto">
              <p className="text-center text-base text-[#5D5D5D] font-semibold leading-[28px]">
                Devfest Hackathon with
              </p>
              <div className="flex items-center justify-center space-y-4 flex-wrap gap-4">
                <div className="flex items-center gap-2 mt-4">
                  <Link
                    className="group hover:scale-105 transition-transform duration-300"
                    href={`https://www.paystack.com/?utm_source=${config.appUrl}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      unoptimized
                      alt="paystack"
                      className="w-[200px]"
                      src={paystack}
                    />
                  </Link>

                  <span className="text-4xl font-bold text-[#000000] mx-2">
                    &
                  </span>

                  <Link
                    className="group hover:scale-105 transition-transform duration-300"
                    href={`https://www.malhub.org/?utm_source=${config.appUrl}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      unoptimized
                      alt="malhub"
                      className="w-[170px] h-[full] object-contain"
                      src={malhub}
                    />
                  </Link>
                </div>
              </div>
              <p className="text-center text-base text-[#5D5D5D] font-medium leading-[28px] mt-5">
                Prizes (cash + perks)
              </p>

              <h1 className="text-5xl lg:text-9xl font-bold text-center leading-[100%]">
                ₦2,000,000
              </h1>
            </div>
          </section>

          <div className="flex justify-center mt-6">
            <Link
              className="z-[50] pointer-events-auto"
              href={`${config.hackathonUrl}?utm_source=${config.appUrl}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button showArrow className="relative pointer-events-auto">
                Register for Hackathon
              </Button>
            </Link>
          </div>
        </div>
      </Hero>
      <section className="bg-[#1E1E1E]">
        <div>
          <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-20 mb-8">
            <Lanyard
              lanyardClassName="bg-[#FCF4F4]"
              textSize="large"
              title="Our Judges"
              titleColor="white"
            />

            <div className="my-10 grid lg:grid-cols-3 gap-10">
              {judges.map((judge, index) => (
                <li
                  key={index}
                  className="relative shrink-0 max-w-full list-none"
                >
                  <JudgeCard judge={judge} />
                </li>
              ))}
            </div>

            <div className="pb-10" />
          </div>
        </div>
      </section>
      <PrizesSection />
      <VenueSection />
      <Tickets />
    </div>
  )
}
