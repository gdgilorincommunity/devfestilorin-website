import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import config from '@/config'
import { sponsors } from '@/constants/sponsors'
import { Button } from '@/components/ui/button'
import { LanyardIcon } from '@/components/icons'
import Lanyard from '@/components/lanyard'
import PartnersAndTicketsSection from '@/components/sections/partners-and-tickets-section'

export const metadata: Metadata = {
  title: `Sponsors - ${config.appName}`,
  openGraph: {
    title: `Sponsors - ${config.appName}`,
  },
}

export default function Sponsors() {
  const sortedSponsors = sponsors.sort((a, b) => {
    const categoryOrder = { Headline: 1, Gold: 2, Silver: 3 }

    return (
      categoryOrder[a.category as keyof typeof categoryOrder] -
      categoryOrder[b.category as keyof typeof categoryOrder]
    )
  })

  const sponsorsByCategory = sortedSponsors.reduce(
    (acc, sponsor) => {
      if (!acc[sponsor.category]) {
        acc[sponsor.category] = []
      }
      acc[sponsor.category].push(sponsor)

      return acc
    },
    {} as Record<string, typeof sponsors>,
  )

  return (
    <div>
      <section className="bg-[#FCF4F4]">
        <div className="max-w-7xl mx-auto pb-10 md:pb-20 z-20">
          <div className="lg:w-[1100px] mx-auto pt-10">
            <h1 className="text-wrap text-center mb-4 text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-[#1E1E1E]">
              Our Sponsors
            </h1>
            <p className="text-wrap text-center text-base lg:text-[18px] text-[#5D5D5D] font-bold lg:w-[900px] mx-auto">
              We&apos;re proud to be supported by an incredible lineup of
              organizations helping us make DevFest Ilorin 2025 a success. Their
              commitment to community and innovation is what fuels this event.
            </p>
          </div>

          <div className="space-y-16">
            {Object.entries(sponsorsByCategory).map(
              ([category, categorySponsors]) => (
                <div
                  key={category}
                  className="mt-10 flex flex-col gap-6 justify-center items-center"
                >
                  <h2 className="bg-[#FFFFFF] p-4 rounded-[60px] w-fit font-bold text-lg flex items-center gap-4">
                    <LanyardIcon className="w-6 h-6 lg:w-10 lg:h-10" />{' '}
                    {category} Sponsor
                    {categorySponsors.length > 1 ? 's' : ''}
                    <LanyardIcon className="w-6 h-6 lg:w-10 lg:h-10" />
                  </h2>
                  <div className="flex flex-wrap justify-center items-center gap-8">
                    {categorySponsors.map((sponsor, index) => (
                      <Link
                        key={sponsor.id}
                        className="group hover:scale-105 transition-transform duration-300"
                        href={`${sponsor.link}?utm_source=${config.appUrl}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Image
                          key={index}
                          unoptimized
                          alt={sponsor.name}
                          className="w-[200px] h-full object-contain"
                          src={sponsor.logo}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="pt-10 md:pt-20 flex justify-center">
            <Link
              href={`https://docs.google.com/forms/d/e/1FAIpQLSfaLjUEzGJxwsdmKJ0UQnRDwa-cV5IkJDDzYkVBBUvvDckR_Q/viewform?utm_source=${config.appUrl}`}
              rel="noreferrer noopener"
              target="_blank"
            >
              <Button showArrow>Sponsor us</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-20">
          <Lanyard
            lanyardClassName="bg-[#FCF4F4]"
            title="Want to Sponsor?"
            titleColor="white"
          />

          <div className="mx-auto pt-16">
            {/* <h1 className="text-wrap text-center mb-4 text-4xl lg:text-6xl font-extrabold tracking-tight leading-none text-[#fff]">
              Want to Sponsor?
            </h1> */}
            <p className="mt-6 text-wrap text-center text-base lg:text-[18px] text-[#CCCCCC] font-bold lg:w-[900px] mx-auto">
              DevFest Ilorin is more than a tech conference, it&apos;s a
              celebration of innovation, community, and impact. With thousands
              of developers, designers, and tech enthusiasts expected to attend,
              this is your opportunity to connect with the brightest minds in
              Nigeria&apos;s growing tech ecosystem. <br /> <br />
              We offer tailored sponsorship packages that give your brand
              visibility through talks, booths, swag, and on-site activations.
              Whether you&apos;re a startup, a global tech brand, or a local
              business, there&apos;s a place for you to shine.
            </p>
          </div>

          <div className="pt-5 md:pt-10 flex justify-center">
            <Link
              href={`https://docs.google.com/forms/d/e/1FAIpQLSfaLjUEzGJxwsdmKJ0UQnRDwa-cV5IkJDDzYkVBBUvvDckR_Q/viewform?utm_source=${config.appUrl}`}
              rel="noreferrer noopener"
              target="_blank"
            >
              <Button showArrow variant="white">
                Sponsor us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <PartnersAndTicketsSection />
    </div>
  )
}
