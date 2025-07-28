import { LucideArrowRight } from 'lucide-react'
import Image from 'next/image'

import SponsorCard from './sponsor-card'
import PartnerCard from './partner-card'
import Link from 'next/link'
import { Button } from '../ui/button'

const SponsorSection = () => {
  const sponsors = [
    {
      id: 1,
      name: 'Pixel Pioneer',
      logo: '/sponsors/pixel-pioneer.png',
      type: 'sponsor',
    },
  ]

  const partners = [
    {
      id: 1,
      name: 'Google Developer Groups Ilorin',
      logo: '/gdg-logo.png',
      type: 'partner',
    },
    {
      id: 2,
      name: 'Google Developer Groups Kwasu',
      logo: '/gdg-logo.png',
      type: 'partner',
    },
    {
      id: 3,
      name: 'Google Developer Groups Kwara State Polytechnic',
      logo: '/gdg-logo.png',
      type: 'partner',
    },
    {
      id: 3,
      name: 'Google Developer Groups Al-Hikmah University',
      logo: '/gdg-logo.png',
      type: 'partner',
    },
  ]

  return (
    <section className="w-full">
      <div className="bg-[#F0F0F0] min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] xl:min-h-[530px] p-6 sm:p-12 md:p-16 lg:p-24 xl:p-[96px] w-full">
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-16 w-full items-start lg:items-center justify-between h-full">
        <div className="flex flex-col xl:flex-row gap-4 w-full items-center justify-between">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[58px] font-[700] text-[#1e1e1e] text-center lg:text-left">
            Sponsors
          </h2>
          <Image
            alt="Speaker"
            className="object-cover w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-auto"
            height={200}
            src="/devfest-lanyard.png"
            width={600}
          />
          <Image
            alt="Speaker"
            className="object-fill w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-auto"
            height={300}
            src="/devfest-continental.png"
            width={600}
          />
        </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 items-center sm:items-start justify-center sm:justify-start w-full">
            {sponsors.map((sponsor) => (
              <SponsorCard key={sponsor.id} sponsor={sponsor} />
            ))}
          </div>
        </div>

        <div className="flex gap-4 w-full items-center justify-center lg:justify-end mt-6 sm:mt-8 lg:mt-12">
            <Link href="#sponsors">
            <Button showArrow>Sponsor us</Button>
          </Link>
        </div>
      </div>

      <div className="bg-[#FCF4F4] p-6 sm:p-12 md:p-16 lg:p-24 xl:px-[96px] xl:py-[32px] w-full min-h-[150px] sm:min-h-[200px]">
      <div className="flex flex-col xl:flex-row gap-4 w-full items-center justify-between">
          <h2 className="text-[16px] xl:text-[28px] font-[700] text-[#1e1e1e] text-center lg:text-left">
            Community Partners
          </h2>
          <Image
            alt="Speaker"
            className="object-cover w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-auto"
            height={200}
            src="/devfest-lanyard.png"
            width={600}
          />
          <Image
            alt="Speaker"
            className="object-fill w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-auto"
            height={300}
            src="/devfest-continental.png"
            width={600}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 w-full items-center justify-center sm:justify-start mt-6 sm:mt-8 lg:mt-[32px]">
          {partners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SponsorSection
